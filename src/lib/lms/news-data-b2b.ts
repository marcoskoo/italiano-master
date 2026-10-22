/* ── Notizie · ampliamento B2 (v9.39) ─────────────────────────────────
   12 noticias nuevas (news-b2-04 … news-b2-15): el nivel B2 pasa de 3
   a 15 noticias y cubre las 9 categorías. Método VOA, 100% original:
   6 párrafos, cuerpo 160-210 parole, congiuntivo, periodo ipotetico
   e registro variato (formale + colloquiale).                          */

import type { NewsItem } from "./news";

export const NEWS_DATA_B2B: NewsItem[] = [

  /* ═══ B2 · 4 — Tecnologia ═══ */
  {
    id: "news-b2-04", cat: "tecnologia", level: "B2", place: "Prato", minutes: 4,
    title: "A Prato il capo riciclato racconta la sua storia",
    titleEs: "En Prato la prenda reciclada cuenta su historia",
    lead: {
      it: "Da più di un secolo Prato trasforma gli stracci in lana nuova. Oggi ogni capo porta un'etichetta digitale: basta il telefono per leggere il viaggio del tessuto.",
      es: "Desde hace más de un siglo, Prato transforma los trapos en lana nueva. Hoy cada prenda lleva una etiqueta digital: basta el teléfono para leer el viaje del tejido.",
    },
    paragraphs: [
      { it: "Nessun'altra città europea ricicla tessuti da tanto tempo quanto Prato. Le vecchie lane, gli stracci, i maglioni buttati via tornano filati nuovi, in un ciclo che dura da generazioni.",
      es: "Ninguna otra ciudad europea recicla tejidos desde hace tanto tiempo como Prato. Las lanas viejas, los trapos, los suéteres desechados vuelven a ser hilos nuevos, en un ciclo que dura desde hace generaciones." },
      { it: "La novità è l'etichetta digitale: un piccolo codice stampato sul capo. Chi lo fotografa con il telefono scopre dove il tessuto è nato, quanta acqua ha risparmiato e quanta anidride carbonica non è finita nell'aria.",
      es: "La novedad es la etiqueta digital: un pequeño código impreso en la prenda. Quien lo fotografía con el teléfono descubre dónde nació el tejido, cuánta agua ahorró y cuánto dióxido de carbono no acabó en el aire." },
      { it: "«Se il cliente conosce la storia del capo, forse lo custodisce più a lungo», spiega l'ingegnere Valerio Mancini, responsabile del progetto. «Il riciclo funziona meglio quando è visibile».",
      es: "«Si el cliente conoce la historia de la prenda, quizá la custodie durante más tiempo», explica el ingeniero Valerio Mancini, responsable del proyecto. «El reciclaje funciona mejor cuando es visible»." },
      { it: "Non tutti in azienda erano entusiasti: c'è chi temeva che la trasparenza costasse troppo. E se domani la tracciabilità diventasse obbligatoria in tutta l'Europa, chi non è pronto rischierebbe di restare indietro.",
      es: "No todos en la empresa estaban entusiasmados: había quien temía que la transparencia costara demasiado. Y si mañana la trazabilidad se volviera obligatoria en toda Europa, quien no esté preparado correría el riesgo de quedarse atrás." },
      { it: "I numeri del distretto parlano chiaro: ogni anno migliaia di tonnellate di tessuti evitano la discarica, con un risparmio d'acqua che si misura in milioni di metri cubi.",
      es: "Las cifras del distrito hablan claro: cada año miles de toneladas de tejidos evitan el vertedero, con un ahorro de agua que se mide en millones de metros cúbicos." },
      { it: "La prossima sfida è tracciare la fibra dalla nascita. Il sogno dei tecnici è semplice: un giorno, magari, ogni maglione potrà raccontare da solo la propria vita, dal cassonetto alla vetrina.",
      es: "El próximo desafío es seguir la fibra desde su nacimiento. El sueño de los técnicos es simple: un día, quizá, cada suéter podrá contar por sí solo su propia vida, del contenedor al escaparate." },
    ],
    words: [
      { it: "il capo (d'abbigliamento)", es: "la prenda (de vestir)", note: "falso amigo: «capo» también significa jefe" },
      { it: "lo straccio / gli stracci", es: "el trapo / los trapos" },
      { it: "l'etichetta", es: "la etiqueta" },
      { it: "la tracciabilità", es: "la trazabilidad" },
      { it: "il risparmio", es: "el ahorro" },
      { it: "la discarica", es: "el vertedero" },
    ],
    questions: [
      { q: "¿Qué descubre quien fotografía el código con el teléfono?", options: ["Dove il tessuto è nato e quanta acqua ha risparmiato", "Il prezzo del capo in negozio", "Il nome del proprietario precedente", "Solo il colore della filatura"], answer: 0, why: "«Chi lo fotografa con il telefono scopre dove il tessuto è nato, quanta acqua ha risparmiato»." },
      { q: "¿Qué temían algunos dentro de la empresa?", options: ["Che il riciclo finisse nel giro di un anno", "Che i clienti partissero per l'estero", "Che la trasparenza costasse troppo", "Che le etichette si staccassero in lavatrice"], answer: 2, why: "«c'è chi temeva che la trasparenza costasse troppo»." },
      { q: "¿Qué pasaría si la trazabilidad se volviera obligatoria en toda Europa?", options: ["Le fabbriche chiuderebbero tutte", "Chi non è pronto rischierebbe di restare indietro", "I prezzi dei capi cadrebbero subito", "Il progetto si fermerebbe a Prato"], answer: 1, why: "«se domani la tracciabilità diventasse obbligatoria in tutta l'Europa, chi non è pronto rischierebbe di restare indietro»." },
      { q: "¿Qué quiere decir Mancini con que el reciclaje «funciona mejor cuando es visible»?", options: ["Che i tessuti vadano esposti in vetrina", "Che il riciclo vada filmato in televisione", "Che i colori chiari si vendano meglio", "Che conoscere la storia del capo renda il riciclo più prezioso per il cliente"], answer: 3, why: "«Se il cliente conosce la storia del capo, forse lo custodisce più a lungo»: el valor nace del conocimiento." },
    ],
    discuss: [
      { it: "Compreresti un capo di abbigliamento solo perché la sua storia è tracciata? Perché?", es: "¿Comprarías una prenda de vestir solo porque su historia está trazada? ¿Por qué?" },
      { it: "Esiste una filiera del riciclo tessile anche nel tuo paese? Raccontala.", es: "¿Existe también en tu país una cadena de reciclaje textil? Cuéntala." },
    ],
  },

  /* ═══ B2 · 5 — Ambiente ═══ */
  {
    id: "news-b2-05", cat: "ambiente", level: "B2", place: "Sassari", minutes: 4,
    title: "Le api di Sassari: sentinelle del verde urbano",
    titleEs: "Las abejas de Sassari: centinelas del verde urbano",
    lead: {
      it: "Sui tetti del centro di Sassari sono arrivate le arnie urbane. Il miele che ne esce non è soltanto dolce: racconta la salute dei giardini della città.",
      es: "A los tejados del centro de Sassari han llegado las colmenas urbanas. La miel que sale de ellas no es solo dulce: cuenta la salud de los jardines de la ciudad.",
    },
    paragraphs: [
      { it: "Il progetto è nato da un accordo fra il comune e gli apicoltori locali. Dieci arnie sono state installate sui tetti di scuole e uffici, lontano dalle strade più trafficate.",
      es: "El proyecto nació de un acuerdo entre el ayuntamiento y los apicultores locales. Diez colmenas se han instalado en los tejados de escuelas y oficinas, lejos de las calles más transitadas." },
      { it: "Le api, spiegano i biologi, lavorano come rilevatori viventi: analizzando il polline e il nettare dei fiori che visitano, si capisce quali piante crescono in città e con quali sostanze entrano in contatto.",
      es: "Las abejas, explican los biólogos, trabajan como detectores vivientes: analizando el polen y el néctar de las flores que visitan, se entiende qué plantas crecen en la ciudad y con qué sustancias entran en contacto." },
      { it: "«Se in un quartiere le api non tornano all'arnia, qualcosa non funziona nel verde», avverte l'apicoltore Salvatore Sanna. «Sono sentinelle che non chiedono stipendio».",
      es: "«Si en un barrio las abejas no vuelven a la colmena, algo no funciona en el verde», advierte el apicultor Salvatore Sanna. «Son centinelas que no piden sueldo»." },
      { it: "All'inizio alcuni vicini diffidavano, benché il rischio di punture fosse minimo. Poi le scuole hanno adottato le arnie: ogni classe segue il proprio sciame e documenta la fioritura dei dintorni.",
      es: "Al principio algunos vecinos desconfiaban, aunque el riesgo de picaduras fuera mínimo. Después las escuelas adoptaron las colmenas: cada clase sigue su propio enjambre y documenta la floración de los alrededores." },
      { it: "Le prime analisi hanno sorpreso i ricercatori: il miele urbano di Sassari è risultato più pulito del previsto, segno che i parchi funzionano da filtro naturale.",
      es: "Los primeros análisis sorprendieron a los investigadores: la miel urbana de Sassari resultó más limpia de lo previsto, señal de que los parques funcionan como filtro natural." },
      { it: "Il passo successivo è la rete dei corridoi floreali. «Se ogni quartiere piantasse più fiori, la città diventerebbe un giardino continuo», conclude Sanna. E le api, si sa, non mentono mai.",
      es: "El paso siguiente es la red de corredores florales. «Si cada barrio plantara más flores, la ciudad se convertiría en un jardín continuo», concluye Sanna. Y las abejas, se sabe, nunca mienten." },
    ],
    words: [
      { it: "l'arnia / le arnie", es: "la colmena / las colmenas" },
      { it: "lo sciame", es: "el enjambre" },
      { it: "il polline", es: "el polen" },
      { it: "il nettare", es: "el néctar" },
      { it: "la puntura / le punture", es: "la picadura / las picaduras" },
      { it: "la fioritura", es: "la floración" },
    ],
    questions: [
      { q: "¿Dónde se han instalado las diez colmenas?", options: ["Nei giardini privati dei vicini", "Sui tetti di scuole e uffici", "Lungo le strade più trafficate", "Fuori città, in campagna"], answer: 1, why: "«Dieci arnie sono state installate sui tetti di scuole e uffici»." },
      { q: "¿Qué trabajo hacen las abejas, según los biólogos?", options: ["Producono solo miele per il comune", "Puliscono i parchi con le ali", "Lavorano come rilevatori viventi", "Trasportano i fiori nei giardini"], answer: 2, why: "«Le api, spiegano i biologi, lavorano come rilevatori viventi»." },
      { q: "¿Qué indicaría que en un barrio las abejas no vuelven a la colmena?", options: ["Che il miele è troppo dolce", "Che qualcosa non funziona nel verde del quartiere", "Che le arnie sono troppo piccole", "Che è arrivato l'inverno"], answer: 1, why: "«Se in un quartiere le api non tornano all'arnia, qualcosa non funziona nel verde»." },
      { q: "¿Qué sugiere la frase final de que las abejas nunca mienten?", options: ["Che le api possano testimoniare in tribunale", "Che il miele dica sempre la verità sui prezzi", "Che le api parlino di notte", "Che i dati raccolti dalle api sono attendibili"], answer: 3, why: "«Sono sentinelle che non chiedono stipendio»: sus análisis ofrecen una lectura fiable del estado del verde urbano." },
    ],
    discuss: [
      { it: "Cosa potrebbero raccontare le api della tua città?", es: "¿Qué podrían contar las abejas de tu ciudad?" },
      { it: "Più fiori o più alberi: cosa dovrebbe piantare una città e perché?", es: "¿Más flores o más árboles: qué debería plantar una ciudad y por qué?" },
    ],
  },

  /* ═══ B2 · 6 — Salute ═══ */
  {
    id: "news-b2-06", cat: "salute", level: "B2", place: "Brescia", minutes: 4,
    title: "Un ospedale di Brescia prova la cura del silenzio",
    titleEs: "Un hospital de Brescia prueba la cura del silencio",
    lead: {
      it: "In corsia il rumore supera spesso i limiti di legge. Un reparto di Brescia ha ridotto luci, allarmi e voci: i pazienti dormono meglio, e guariscono prima.",
      es: "En las salas el ruido supera a menudo los límites legales. Una planta de un hospital de Brescia ha reducido luces, alarmas y voces: los pacientes duermen mejor y sanan antes.",
    },
    paragraphs: [
      { it: "Gli studi sui rumori in corsia parlano di decibel da officina: carrelli, allarmi, telefoni, porte che sbattono. Il sonno dei pazienti ne soffre, e con esso la guarigione.",
      es: "Los estudios sobre los ruidos en las salas hablan de decibeles de taller: carritos, alarmas, teléfonos, puertas que golpean. El sueño de los pacientes sufre por ello, y con él la curación." },
      { it: "Per questo un reparto di medicina ha avviato il «progetto silenzio»: luci soffuse dopo le venti, allarmi impostati sulla sola vibrazione, carrelli con ruote nuove e orari delle medicazioni rivisti.",
      es: "Por eso una planta de medicina ha puesto en marcha el «proyecto silencio»: luces tenues después de las veinte, alarmas configuradas solo en vibración, carritos con ruedas nuevas y horarios de medicación revisados." },
      { it: "«Sembra che il riposo acceleri la dimissione», osserva la dottoressa Anna Gerosa, responsabile del reparto. «Chi dorme di notte ha bisogno di meno antidolorifici e collabora di più».",
      es: "«Parece que el descanso acelera el alta», observa la doctora Anna Gerosa, responsable de la planta. «Quien duerme de noche necesita menos analgésicos y colabora más»." },
      { it: "Il cambiamento è partito dagli infermieri. «Prima urlavamo nei corridoi, tanto per farci sentire», ammette uno di loro. «Adesso basta un messaggio sul cercapersone: se avessimo misurato i decibel dieci anni fa, ci saremmo spaventati».",
      es: "El cambio partió de los enfermeros. «Antes gritábamos en los pasillos, solo para hacernos oír», admite uno de ellos. «Ahora basta un mensaje en el buscapersonas: si hubiéramos medido los decibeles hace diez años, nos habríamos asustado»." },
      { it: "Dopo sei mesi i risultati sono visibili: il sonno dei ricoverati è più lungo, le richieste di sedativi sono calate e i parenti parlano di un'atmosfera più umana.",
      es: "Después de seis meses los resultados son visibles: el sueño de los ingresados es más largo, las peticiones de sedantes han bajado y los familiares hablan de una atmósfera más humana." },
      { it: "Il protocollo sarà esteso ad altri reparti. L'obiettivo, conclude la Gerosa, è ambizioso ma semplice: «Un ospedale che non fa rumore è già, di per sé, una cura».",
      es: "El protocolo se extenderá a otras plantas. El objetivo, concluye Gerosa, es ambicioso pero simple: «Un hospital que no hace ruido es ya, en sí mismo, una cura»." },
    ],
    words: [
      { it: "il reparto", es: "la sala, la planta (de hospital)" },
      { it: "il carrello / i carrelli", es: "el carrito / los carritos (de medicación)" },
      { it: "la medicazione / le medicazioni", es: "la cura (de heridas), la administración de medicamentos" },
      { it: "la dimissione / le dimissioni", es: "el alta médica", note: "en italiano se usa el plural para el alta" },
      { it: "il ricoverato / i ricoverati", es: "el ingresado / los ingresados" },
      { it: "la guarigione", es: "la curación, la sanación" },
    ],
    questions: [
      { q: "¿Qué ruidos se mencionan como propios de las salas?", options: ["Solo le voci dei medici", "Carrelli, allarmi, telefoni e porte che sbattono", "Il traffico esterno", "La pioggia sul tetto"], answer: 1, why: "«carrelli, allarmi, telefoni, porte che sbattono»." },
      { q: "¿Qué cambios ha introducido el «proyecto silencio»?", options: ["Luci soffuse, allarmi in vibrazione e orari delle medicazioni rivisti", "La chiusura del reparto di notte", "Muri più spessi alle finestre", "La fine delle visite dei parenti"], answer: 0, why: "«luci soffuse dopo le venti, allarmi impostati sulla sola vibrazione, carrelli con ruote nuove e orari delle medicazioni rivisti»." },
      { q: "¿Qué habrían descubierto los enfermeros si hubieran medido los decibeles hace diez años?", options: ["Che il reparto fosse già silenzioso", "Che gli strumenti non funzionassero", "Che i carrelli fossero nuovi", "Che il rumore era così alto da spaventarli"], answer: 3, why: "«se avessimo misurato i decibel dieci anni fa, ci saremmo spaventati»." },
      { q: "¿Qué idea resume la frase final de Gerosa?", options: ["Il silenzio sostituisce tutte le medicine", "Gli ospedali devono chiudere di notte", "L'atmosfera tranquilla fa già parte della terapia", "Il rumore aiuta a guarire"], answer: 2, why: "«Un ospedale che non fa rumore è già, di per sé, una cura»." },
    ],
    discuss: [
      { it: "Ti è mai capitato di non dormire per il rumore? Racconta.", es: "¿Te ha pasado alguna vez de no poder dormir por el ruido? Cuenta." },
      { it: "Il silenzio è una cura o solo l'assenza di un fastidio? Argomenta.", es: "¿El silencio es una cura o solo la ausencia de una molestia? Argumenta." },
    ],
  },

  /* ═══ B2 · 7 — Storia ═══ */
  {
    id: "news-b2-07", cat: "storia", level: "B2", place: "Udine", minutes: 4,
    title: "In un solaio di Udine torna la voce della Grande guerra",
    titleEs: "En un desván de Udine vuelve la voz de la Gran Guerra",
    lead: {
      it: "Durante una ristrutturazione è emersa una scatola di latta con centinaia di lettere scritte dal fronte. Ora l'archivio di Udine le trascrive una a una, prima che il tempo le cancelli.",
      es: "Durante una reforma apareció una caja de lata con cientos de cartas escritas desde el frente. Ahora el archivo de Udine las transcribe una a una, antes de que el tiempo las borre.",
    },
    paragraphs: [
      { it: "La scoperta è avvenuta in una casa del centro: sotto le travi, un solaio pieno di polvere custodiva la corrispondenza di una famiglia, quasi mille lettere scritte dal fronte fra il 1915 e il 1918.",
      es: "El descubrimiento ocurrió en una casa del centro: bajo las vigas, un desván lleno de polvo guardaba la correspondencia de una familia, casi mil cartas escritas desde el frente entre 1915 y 1918." },
      { it: "I nipoti hanno preferito consegnarle all'archivio di Stato piuttosto che venderle. Un gruppo di volontari sta trascrivendo ogni pagina, decifrando calligrafie minute e inchiostri sbiaditi.",
      es: "Los nietos prefirieron entregarlas al Archivo del Estado antes que venderlas. Un grupo de voluntarios está transcribiendo cada página, descifrando letras menudas y tintas desvanecidas." },
      { it: "«Quando leggi certe frasi, sembra che il tempo si sia fermato», racconta la storica Ilaria Zanetti, che coordina il lavoro. «Un soldato chiede calze e minestra calda: la storia grande passa dalla fame piccola».",
      es: "«Cuando lees ciertas frases, parece que el tiempo se hubiera detenido», cuenta la historiadora Ilaria Zanetti, que coordina el trabajo. «Un soldado pide calcetines y sopa caliente: la historia grande pasa por el hambre pequeña»." },
      { it: "Le lettere saranno pubblicate online, con la trascrizione accanto all'originale. Se fossero rimaste nel solaio, l'umidità le avrebbe distrutte entro pochi anni: salvarle è stato quasi un caso.",
      es: "Las cartas se publicarán en línea, con la transcripción junto al original. Si hubieran permanecido en el desván, la humedad las habría destruido en pocos años: salvarlas fue casi casualidad." },
      { it: "Le scuole del Friuli hanno già prenotato le visite. Gli studenti cercano i cognomi dei propri paesi fra le righe, e alcuni scoprono firme di trisavoli sconosciuti.",
      es: "Las escuelas del Friul ya han reservado las visitas. Los estudiantes buscan los apellidos de sus pueblos entre las líneas y algunos descubren firmas de tatarabuelos desconocidos." },
      { it: "In autunno è prevista una mostra con quaranta lettere esposte. La più commovente, dicono gli archivisti, non è mai stata spedita: resta il dubbio su chi dovesse leggerla, e su cosa sarebbe cambiato se fosse arrivata.",
      es: "En otoño está prevista una exposición con cuarenta cartas expuestas. La más conmovedora, dicen los archiveros, nunca fue enviada: queda la duda sobre quién debía leerla y sobre qué habría cambiado si hubiera llegado." },
    ],
    words: [
      { it: "il solaio", es: "el desván" },
      { it: "il fronte", es: "el frente" },
      { it: "la calligrafia / le calligrafie", es: "la caligrafía / las caligrafías" },
      { it: "l'inchiostro / gli inchiostri", es: "la tinta / las tintas" },
      { it: "la trascrizione", es: "la transcripción" },
      { it: "la mostra", es: "la exposición" },
    ],
    questions: [
      { q: "¿Qué custodiaba el desván de la casa del centro?", options: ["Una collezione di monete antiche", "La corrispondenza di una famiglia: quasi mille lettere dal fronte", "Un archivio di fotografie", "Dei vestiti del 1915"], answer: 1, why: "«un solaio pieno di polvere custodiva la corrispondenza di una famiglia, quasi mille lettere scritte dal fronte»." },
      { q: "¿Qué prefirieron hacer los nietos con las cartas?", options: ["Bruciarle per dimenticare", "Venderle ai collezionisti", "Consegnarle all'archivio di Stato", "Tenerle chiuse in banca"], answer: 2, why: "«I nipoti hanno preferito consegnarle all'archivio di Stato piuttosto che venderle»." },
      { q: "¿Qué habría pasado si las cartas hubieran quedado en el desván?", options: ["L'umidità le avrebbe distrutte entro pochi anni", "Sarebbero diventate famose subito", "Le scuole le avrebbero lette in originale", "Non sarebbe cambiato niente"], answer: 0, why: "«Se fossero rimaste nel solaio, l'umidità le avrebbe distrutte entro pochi anni»." },
      { q: "¿Qué sugiere el detalle de la carta que nunca fue enviada?", options: ["Che la posta non funzionava bene", "Che gli archivisti sbaglino la data", "Che il soldato non sapesse scrivere", "Che la storia a volte resti sospesa su domande senza risposta"], answer: 3, why: "«resta il dubbio su chi dovesse leggerla, e su cosa sarebbe cambiato se fosse arrivata»." },
    ],
    discuss: [
      { it: "Conservi lettere o diari vecchi della tua famiglia? Cosa raccontano?", es: "¿Guardas cartas o diarios viejos de tu familia? ¿Qué cuentan?" },
      { it: "La memoria della guerra serve ancora ai giovani di oggi? Perché?", es: "¿La memoria de la guerra les sirve todavía a los jóvenes de hoy? ¿Por qué?" },
    ],
  },

  /* ═══ B2 · 8 — Sport ═══ */
  {
    id: "news-b2-08", cat: "sport", level: "B2", place: "Grosseto", minutes: 4,
    title: "A Grosseto i campioni master non invecchiano",
    titleEs: "En Grosseto los campeones máster no envejecen",
    lead: {
      it: "Atleti fra i sessanta e gli ottantanove anni, cronometro e podio come alle Olimpiadi. Ai campionati master di Grosseto la terza età corre, salta e lancia, e la scienza conferma che convenga.",
      es: "Atletas de entre sesenta y ochenta y nueve años, cronómetro y podio como en los Juegos Olímpicos. En los campeonatos máster de Grosseto la tercera edad corre, salta y lanza, y la ciencia confirma que conviene.",
    },
    paragraphs: [
      { it: "Lo stadio di Grosseto ha ospitato tre giorni di gare master: millequattrocento atleti iscritti, il più anziano ha ottantanove anni. Corsa, salto in lungo, lancio del disco: le specialità sono le stesse dei giovani.",
      es: "El estadio de Grosseto acogió tres días de competiciones máster: mil cuatrocientos atletas inscritos, el mayor tiene ochenta y nueve años. Carrera, salto de longitud, lanzamiento de disco: las especialidades son las mismas que las de los jóvenes." },
      { it: "I medici sportivi lo ripetono da anni: il muscolo risponde all'allenamento a qualsiasi età, purché si proceda con gradualità. La costanza conta più della forza.",
      es: "Los médicos deportivos lo repiten desde hace años: el músculo responde al entrenamiento a cualquier edad, con tal de que se avance gradualmente. La constancia importa más que la fuerza." },
      { it: "«Se mi fossi fermata a sessant'anni, oggi non salterei più», ride Elda Moretti, ottantadue anni, quinta nel salto in lungo. «Il segreto? Mai smettere di allenarsi, mai correre troppo».",
      es: "«Si me hubiera detenido a los sesenta, hoy ya no saltaría», se ríe Elda Moretti, ochenta y dos años, quinta en el salto de longitud. «¿El secreto? Nunca dejar de entrenarse, nunca correr demasiado»." },
      { it: "Sulla tribuna i nipoti tifano con le bandierine: vedere il nonno sul podio è uno spettacolo che non fa mai abitudine. C'è chi è arrivato alla medaglia dopo un bypass, chi dopo una vita da fumatore pentito.",
      es: "En la tribuna los nietos animan con banderines: ver al abuelo en el podio es un espectáculo al que nunca uno se acostumbra. Hay quien llegó a la medalla tras un bypass, quien después de una vida de fumador arrepentido." },
      { it: "I numeri della federazione confermano la tendenza: gli iscritti master sono raddoppiati in dieci anni, e le società over sessanta nascono anche nei paesi piccoli.",
      es: "Las cifras de la federación confirman la tendencia: los inscritos máster se han duplicado en diez años y los clubes para mayores de sesenta nacen también en los pueblos pequeños." },
      { it: "La prossima tappa sarà l'Europeo master. Nel frattempo gli organizzatori lanciano una proposta seria: «Se ogni comune costruisse una pista per gli anziani, il servizio sanitario risparmierebbe più di quanto spenda».",
      es: "La próxima etapa será el Europeo máster. Mientras tanto, los organizadores lanzan una propuesta seria: «Si cada municipio construyera una pista para los mayores, el sistema de salud ahorraría más de lo que gasta»." },
    ],
    words: [
      { it: "la gara / le gare", es: "la competición / las competiciones" },
      { it: "l'allenamento", es: "el entrenamiento" },
      { it: "la costanza", es: "la constancia" },
      { it: "il podio", es: "el podio" },
      { it: "l'iscritto / gli iscritti", es: "el inscrito / los inscritos" },
      { it: "la pista", es: "la pista" },
    ],
    questions: [
      { q: "¿Cuántos atletas estaban inscritos en las tres jornadas de Grosseto?", options: ["Millequattrocento", "Trecento", "Ottantanove", "Cinquemila"], answer: 0, why: "«tre giorni di gare master: millequattrocento atleti iscritti»." },
      { q: "¿Cuál es el secreto de Elda Moretti, según ella misma?", options: ["Allenarsi solo prima delle gare", "Mai smettere di allenarsi, mai correre troppo", "Mangiare solo proteine", "Saltare una gara su due"], answer: 1, why: "«Il segreto? Mai smettere di allenarsi, mai correre troppo»." },
      { q: "¿Qué explican los médicos deportivos sobre el músculo?", options: ["Che gli anziani debbano evitare lo sport", "Che la forza conti più della costanza", "Che risponda all'allenamento a qualsiasi età, con gradualità", "Che le gare master siano pericolose"], answer: 2, why: "«il muscolo risponde all'allenamento a qualsiasi età, purché si proceda con gradualità»." },
      { q: "¿Qué implica la propuesta final de los organizadores?", options: ["Costruire alberghi vicino allo stadio", "Chiudere gli ospedali per gli anziani", "Tenere la pista solo per i campioni", "Investire nello sport degli anziani farebbe risparmiare la sanità"], answer: 3, why: "«Se ogni comune costruisse una pista per gli anziani, il servizio sanitario risparmierebbe più di quanto spenda»." },
    ],
    discuss: [
      { it: "Quale sport ti piacerebbe praticare da anziano? Perché proprio quello?", es: "¿Qué deporte te gustaría practicar de mayor? ¿Por qué precisamente ese?" },
      { it: "Fino a che età ha senso gareggiare? Dove finisce la salute e comincia il rischio?", es: "¿Hasta qué edad tiene sentido competir? ¿Dónde termina la salud y empieza el riesgo?" },
    ],
  },

  /* ═══ B2 · 9 — Società ═══ */
  {
    id: "news-b2-09", cat: "societa", level: "B2", place: "Catanzaro", minutes: 4,
    title: "A Catanzaro una banca presta ore invece di euro",
    titleEs: "En Catanzaro un banco presta horas en vez de euros",
    lead: {
      it: "Niente sportelli e niente euro: alla banca del tempo si scambiano ore. Un'ora di ripetizioni di matematica vale come un'ora di giardinaggio, e Catanzaro comincia a crederci.",
      es: "Sin ventanillas y sin euros: en el banco del tiempo se intercambian horas. Una hora de clases de matemáticas vale lo que una hora de jardinería, y Catanzaro empieza a creer en ello.",
    },
    paragraphs: [
      { it: "L'associazione è nata in un garage del centro storico con dodici fondatori. Oggi conta duecento iscritti e un registro dove ogni ora prestata diventa credito, ogni ora ricevuta diventa debito.",
      es: "La asociación nació en un garaje del centro histórico con doce fundadores. Hoy cuenta con doscientos inscritos y un registro donde cada hora prestada se convierte en crédito y cada hora recibida, en deuda." },
      { it: "Il catalogo dei servizi sorprende: riparare una bicicletta, preparare la dichiarazione dei redditi, fare compagnia a una persona sola, insegnare a usare il telefono nuovo.",
      es: "El catálogo de servicios sorprende: arreglar una bicicleta, preparar la declaración de la renta, hacer compañía a una persona sola, enseñar a usar el teléfono nuevo." },
      { it: "«C'è chi teme che il sistema fallisca perché nessuno controlla», ammette la presidente Teresa Paparella. «E invece la fiducia funziona: chi riceve, prima o poi restituisce».",
      es: "«Hay quien teme que el sistema fracase porque nadie controla», admite la presidenta Teresa Paparella. «Y sin embargo la confianza funciona: quien recibe, tarde o temprano devuelve»." },
      { it: "I casi raccontano più dei numeri. Una studentessa ha pagato le ripetizioni con ore di baby-sitting; un pensionato aggiusta le lavatrici dei vicini e in cambio riceve cena e conversazione in spagnolo.",
      es: "Los casos cuentan más que las cifras. Una estudiante ha pagado las clases particulares con horas de canguro; un jubilado arregla las lavadoras de los vecinos y a cambio recibe cena y conversación en español." },
      { it: "Se ogni iscritto donasse un'ora alla settimana, calcola l'associazione, la città guadagnerebbe duecento ore di lavoro gratuito al giorno. Un piccolo welfare costruito dal basso.",
      es: "Si cada inscrito donara una hora a la semana, calcula la asociación, la ciudad ganaría doscientas horas de trabajo gratuito al día. Un pequeño estado del bienestar construido desde abajo." },
      { it: "Il prossimo passo è il coinvolgimento delle scuole. «Basta che un ragazzo capisca che il suo tempo vale», conclude la Paparella. «Il resto, di solito, viene da sé».",
      es: "El paso siguiente es implicar a las escuelas. «Basta con que un chico entienda que su tiempo vale», concluye Paparella. «El resto, por lo general, viene solo»." },
    ],
    words: [
      { it: "il credito", es: "el crédito" },
      { it: "la fiducia", es: "la confianza", note: "no significa «fidelidad»" },
      { it: "il registro", es: "el registro, el libro de cuentas" },
      { it: "le ripetizioni", es: "las clases particulares de refuerzo" },
      { it: "il pensionato", es: "el jubilado" },
      { it: "restituire (restituisce)", es: "devolver (devuelve)" },
    ],
    questions: [
      { q: "¿Qué se convierte en crédito en el registro de la asociación?", options: ["Ogni euro versato", "Ogni oggetto regalato", "Ogni ora prestata", "Ogni giorno di lavoro"], answer: 2, why: "«ogni ora prestata diventa credito»." },
      { q: "¿Con qué pagó la estudiante sus clases particulares?", options: ["Con ore di baby-sitting", "Con soldi presi in prestito", "Con la cena per i vicini", "Con lavatrici riparate"], answer: 0, why: "«Una studentessa ha pagato le ripetizioni con ore di baby-sitting»." },
      { q: "¿Qué calcula la asociación si cada inscrito donara una hora a la semana?", options: ["Che la banca chiuderebbe in un anno", "Che la città guadagnerebbe duecento ore di lavoro gratuito al giorno", "Che le scuole assorbirebbero tutto", "Che il registro si bloccherebbe"], answer: 1, why: "«Se ogni iscritto donasse un'ora alla settimana, calcola l'associazione, la città guadagnerebbe duecento ore di lavoro gratuito al giorno»." },
      { q: "¿Por qué basta con que un chico entienda que su tiempo vale?", options: ["Perché il tempo dei giovani costa di più", "Perché i ragazzi non abbiano tempo libero", "Perché le scuole paghino le ore", "Perché riconoscere il valore del proprio tempo è il primo passo per condividerlo"], answer: 3, why: "«Il resto, di solito, viene da sé»: reconocer el valor del tiempo es el motor del intercambio." },
    ],
    discuss: [
      { it: "Quale ora presteresti a una banca del tempo? E quale servizio chiederesti in cambio?", es: "¿Qué hora prestarías a un banco del tiempo? ¿Y qué servicio pedirías a cambio?" },
      { it: "Ti fideresti di uno scambio senza denaro? Spiega i tuoi dubbi.", es: "¿Confiarías en un intercambio sin dinero? Explica tus dudas." },
    ],
  },

  /* ═══ B2 · 10 — Economia ═══ */
  {
    id: "news-b2-10", cat: "economia", level: "B2", place: "Nuoro", minutes: 4,
    title: "In Sardegna la lana torna a valere",
    titleEs: "En Cerdeña la lana vuelve a valer",
    lead: {
      it: "Per anni i pastori l'hanno sepolta o bruciata: tosare le pecore costava più del ricavato. Ora una cooperativa di Nuoro trasforma quel vello in filati pregiati.",
      es: "Durante años los pastores la enterraron o quemaron: esquilar a las ovejas costaba más de lo que se obtenía. Ahora una cooperativa de Nuoro convierte ese vellón en hilos de calidad.",
    },
    paragraphs: [
      { it: "Il paradosso durava da decenni: la lana grezza si vendeva a pochi centesimi al chilo, meno del costo della tosatura. Molti pastori la nascondevano sotto terra, altri la bruciavano nei campi.",
      es: "La paradoja duraba desde hacía décadas: la lana sucia se vendía a pocos céntimos el kilo, menos que el costo del esquileo. Muchos pastores la escondían bajo tierra, otros la quemaban en los campos." },
      { it: "La cooperativa ha ripreso la vecchia filanda comunale: raccoglie il vello dai greggi, lo lava, lo pettina e lo trasforma in filato corto, quello che i tessitori cercano oggi.",
      es: "La cooperativa ha recuperado la vieja hilandería municipal: recoge el vellón de los rebaños, lo lava, lo peina y lo transforma en hilo corto, el que buscan hoy los tejedores." },
      { it: "«Sembra impossibile che una risorsa diventi rifiuto», dice il pastore Bachisio Fancello, uno dei soci. «Se il mercato non cambia, i giovani lasceranno le pecore; se cambia, resteranno».",
      es: "«Parece imposible que un recurso se convierta en residuo», dice el pastor Bachisio Fancello, uno de los socios. «Si el mercado no cambia, los jóvenes dejarán a las ovejas; si cambia, se quedarán»." },
      { it: "Il marchio della cooperativa racconta il territorio: ogni matassa porta il nome del pastore e del villaggio. Piccole case di moda hanno già firmato contratti per le prime collezioni.",
      es: "La marca de la cooperativa cuenta el territorio: cada madeja lleva el nombre del pastor y de la aldea. Pequeñas casas de moda ya han firmado contratos para las primeras colecciones." },
      { it: "I numeri dell'ultima stagione parlano di trenta tonnellate raccolte e una decina di posti di lavoro, che in montagna non sono pochi. Il gregge, si diceva un tempo, era la ricchezza della famiglia: sembra tornare vero.",
      es: "Las cifras de la última temporada hablan de treinta toneladas recogidas y una decena de puestos de trabajo, que en la montaña no son pocos. El rebaño, se decía antaño, era la riqueza de la familia: parece volver a ser verdad." },
      { it: "La filanda apre le porte ai visitatori in estate: si può vedere il vello diventare filo, e comprarlo. «La lana non è un rifiuto», conclude Fancello sorridendo. «È semplicemente una ricchezza che aspettava di essere riconosciuta».",
      es: "La hilandería abre sus puertas a los visitantes en verano: se puede ver cómo el vellón se convierte en hilo, y comprarlo. «La lana no es un residuo», concluye Fancello sonriendo. «Es simplemente una riqueza que esperaba ser reconocida»." },
    ],
    words: [
      { it: "il gregge / i greggi", es: "el rebaño / los rebaños" },
      { it: "la tosatura", es: "el esquileo" },
      { it: "il vello", es: "el vellón" },
      { it: "il pastore", es: "el pastor" },
      { it: "la filanda", es: "la hilandería" },
      { it: "la matassa", es: "la madeja" },
    ],
    questions: [
      { q: "¿Qué hacían muchos pastores cuando la lana no valía nada?", options: ["La nascondevano sotto terra o la bruciavano nei campi", "La regalavano ai tessitori", "La conservavano nei musei", "La vendevano all'estero"], answer: 0, why: "«Molti pastori la nascondevano sotto terra, altri la bruciavano nei campi»." },
      { q: "¿Qué lleva cada madeja del marchio de la cooperativa?", options: ["Il nome del pastore e del villaggio", "Un prezzo fisso per sempre", "La garanzia della consegna rapida", "Il colore naturale del filato"], answer: 0, why: "«ogni matassa porta il nome del pastore e del villaggio»." },
      { q: "¿Qué harán los jóvenes si el mercado no cambia, según Fancello?", options: ["Investirebbero nella filanda", "Aprirebbero negozi in città", "Lasceranno le pecore", "Cambierebbero lavoro solo d'estate"], answer: 2, why: "«Se il mercato non cambia, i giovani lasceranno le pecore; se cambia, resteranno»." },
      { q: "¿Qué significa que la lana no sea un residuo?", options: ["Che vada buttata con cura", "Che il riciclo sia complicato", "Che i pastori sbaglino i conti", "Che il vello, una volta valorizzato, sia una ricchezza del territorio"], answer: 3, why: "«È semplicemente una ricchezza che aspettava di essere riconosciuta»." },
    ],
    discuss: [
      { it: "Conosci una risorsa del tuo territorio sprecata come la lana sarda? Quale?", es: "¿Conoces algún recurso de tu tierra desperdiciado como la lana sarda? ¿Cuál?" },
      { it: "Restare o partire: che consiglio daresti a un giovane pastore?", es: "¿Quedarse o marcharse: qué consejo le darías a un joven pastor?" },
    ],
  },

  /* ═══ B2 · 11 — Scienza ═══ */
  {
    id: "news-b2-11", cat: "scienza", level: "B2", place: "Perugia", minutes: 4,
    title: "A Perugia un tavolo che trema studia i terremoti",
    titleEs: "En Perugia una mesa que tiembla estudia los terremotos",
    lead: {
      it: "In un capannone universitario una casa in muratura trema su una piattaforma gigante. È la tavola vibrante con cui l'Umbria impara a rendere più forti i suoi borghi.",
      es: "En una nave universitaria una casa de mampostería tiembla sobre una plataforma gigante. Es la mesa vibratoria con la que Umbría aprende a hacer más fuertes sus pueblos.",
    },
    paragraphs: [
      { it: "Il laboratorio di ingegneria sismica ha costruito un modello in scala, con mattoni, calce e soffitti di legno come nelle case vecchie dei borghi. Sotto, i pistoni della tavola vibrante riproducono i terremoti della storia italiana.",
      es: "El laboratorio de ingeniería sísmica ha construido una maqueta a escala, con ladrillos, cal y techos de madera como en las casas viejas de los pueblos. Debajo, los pistones de la mesa vibratoria reproducen los terremotos de la historia italiana." },
      { it: "Decine di sensori misurano ogni crepa, ogni scivolamento dell'intonaco. Dopo ogni prova i ricercatori rinforzano il modello con tiranti e reti, poi lo fanno tremare di nuovo: un ciclo che somma oltre duecento scosse.",
      es: "Decenas de sensores miden cada grieta, cada deslizamiento del enlucido. Después de cada prueba los investigadores refuerzan la maqueta con tirantes y redes, luego la hacen temblar de nuevo: un ciclo que suma más de doscientos sismos." },
      { it: "«Il mattone parla: le crepe raccontano dove intervenire», spiega l'ingegnera Silvia Anselmi, che dirige le prove. «Benché la tecnica sia nota da anni, migliaia di edifici restano fragili».",
      es: "«El ladrillo habla: las grietas cuentan dónde intervenir», explica la ingeniera Silvia Anselmi, que dirige las pruebas. «Aunque la técnica se conozca desde hace años, miles de edificios siguen siendo frágiles»." },
      { it: "Il confronto fra prima e dopo è impressionante: il modello non rinforzato crolla a metà prova, quello rinforzato resta in piedi. Se la stessa casa fosse stata costruita così in un borgo reale, avrebbe retto anche al sisma del 2016.",
      es: "La comparación entre el antes y el después es impresionante: la maqueta sin reforzar se derrumba a mitad de la prueba, la reforzada sigue en pie. Si la misma casa hubiera sido construida así en un pueblo real, habría resistido también el sismo de 2016." },
      { it: "I comuni dell'Appennino hanno già chiesto formazione per i propri muratori: sapere dove mettere un tirante può salvare una casa. La regione finanzia corsi gratuiti in bottega.",
      es: "Los municipios del Apenino ya han pedido formación para sus albañiles: saber dónde poner un tirante puede salvar una casa. La región financia cursos gratuitos en el taller." },
      { it: "Il prossimo test riguarderà una piccola scuola. «Se reggerà la scuola, reggeranno anche i sogni dei bambini», conclude l'Anselmi. Il modello, intanto, ha già tremato duecento volte senza cadere: un record che i tecnici chiamano, con affetto, «il monumento più instabile d'Italia».",
      es: "La próxima prueba afectará a una pequeña escuela. «Si la escuela resiste, resistirán también los sueños de los niños», concluye Anselmi. La maqueta, mientras tanto, ya ha temblado doscientas veces sin caerse: un récord que los técnicos llaman, con cariño, «el monumento más inestable de Italia»." },
    ],
    words: [
      { it: "la tavola vibrante", es: "la mesa vibratoria" },
      { it: "il sisma", es: "el sismo, el terremoto" },
      { it: "la crepa / le crepe", es: "la grieta / las grietas" },
      { it: "il tirante / i tiranti", es: "el tirante (refuerzo metálico)" },
      { it: "la prova / le prove", es: "la prueba / las pruebas" },
      { it: "il modello in scala", es: "la maqueta a escala" },
    ],
    questions: [
      { q: "¿Qué hay debajo del modelo a escala?", options: ["Una piscina per le prove idriche", "I pistoni della tavola vibrante", "Un sistema di corde", "Un pavimento mobile di legno"], answer: 1, why: "«Sotto, i pistoni della tavola vibrante riproducono i terremoti della storia italiana»." },
      { q: "¿Qué han pedido los municipios del Apenino?", options: ["Soldi per nuove strade", "Nuovi strumenti di misura", "Formazione per i propri muratori", "Un modello per ogni borgo"], answer: 2, why: "«I comuni dell'Appennino hanno già chiesto formazione per i propri muratori»." },
      { q: "¿Qué diferencia hay entre el modelo sin reforzar y el reforzado?", options: ["Il primo crolla a metà prova, il secondo resta in piedi", "Il primo è di legno, il secondo di mattoni", "Il primo trema di più ma non crolla", "Nessuna differenza misurabile"], answer: 0, why: "«il modello non rinforzato crolla a metà prova, quello rinforzato resta in piedi»." },
      { q: "¿Qué transmite el apodo de «monumento más inestable de Italia»?", options: ["Preoccupazione per la sicurezza del laboratorio", "Disprezzo verso le tecniche antiche", "Il desiderio di demolire presto il modello", "Ironia e affetto verso un modello che ha resistito a duecento scosse"], answer: 3, why: "«Il modello, intanto, ha già tremato duecento volte senza cadere»: un récord celebrado con cariño." },
    ],
    discuss: [
      { it: "Le case del tuo quartiere resisterebbero a un terremoto forte? Su cosa basi la tua stima?", es: "¿Las casas de tu barrio resistirían un terremoto fuerte? ¿En qué basas tu estimación?" },
      { it: "Meglio restaurare con tecnica moderna o conservare tutto com'è? Discuti.", es: "¿Mejor restaurar con técnica moderna o conservarlo todo tal cual? Discute." },
    ],
  },

  /* ═══ B2 · 12 — Cultura ═══ */
  {
    id: "news-b2-12", cat: "cultura", level: "B2", place: "Catania", minutes: 4,
    title: "A Catania il teatro dei pupi cerca giovani eredi",
    titleEs: "En Catania el teatro de los pupi busca jóvenes herederos",
    lead: {
      it: "Le storie dei paladini si recitano da oltre un secolo. Ma i pupari invecchiano, e le mani che muovono i pupi pesanti cercano eredi: una scuola gratuita prova a trovarli.",
      es: "Las historias de los paladines se representan desde hace más de un siglo. Pero los titiriteros envejecen y las manos que mueven los muñecos pesados buscan herederos: una escuela gratuita trata de encontrarlos.",
    },
    paragraphs: [
      { it: "Nel quartiere storico la bottega del puparo lavora da tre generazioni: sera dopo sera, il pubblico segue le battaglie di Orlando e dei saraceni come si seguiva un secolo fa.",
      es: "En el barrio histórico la bottega del titiritero trabaja desde hace tres generaciones: noche tras noche, el público sigue las batallas de Orlando y de los sarracenos como se seguía hace un siglo." },
      { it: "Il problema è l'età media dei pupari, vicina ai settant'anni. Per questo è nata la scuola gratuita: dodici allievi, i più giovani sedicenni, imparano a muovere il pupo, a costruire le armature e a leggere il copione antico.",
      es: "El problema es la edad media de los titiriteros, cercana a los setenta años. Por eso nació la escuela gratuita: doce alumnos, los más jóvenes de dieciséis años, aprenden a mover el muñeco, a construir las armaduras y a leer el viejo libreto." },
      { it: "«Purché i ragazzi amino questo mestiere, il teatro non morirà», dice il puparo Saro Guastella, ottantadue anni. «Se un giovane volesse imparare davvero, dovrebbe cominciare dai piedi dei pupi, come ho fatto io».",
      es: "«Con tal de que los chicos amen este oficio, el teatro no morirá», dice el titiritero Saro Guastella, ochenta y dos años. «Si un joven quisiera aprender de verdad, tendría que empezar por los pies de los muñecos, como hice yo»." },
      { it: "La scuola ha portato anche le novità: spettacoli ridotti per le classi delle elementari, pupi più leggeri per le braccia piccole, e una pagina online dove si prenota il biglietto.",
      es: "La escuela ha traído también novedades: funciones reducidas para las clases de primaria, muñecos más ligeros para los brazos pequeños y una página en línea donde se reserva la entrada." },
      { it: "Le prime serate degli allievi hanno riempito la sala di famiglie. I nonni si emozionano, i bambini ridono alle battaglie, e qualcuno, alla fine, chiede se può salire sul palco.",
      es: "Las primeras noches de los alumnos llenaron la sala de familias. Los abuelos se emocionan, los niños se ríen con las batallas y alguno, al final, pregunta si puede subir al escenario." },
      { it: "La sfida, ammette Guastella, è far tornare il pubblico dopo la novità. «Il teatro dei pupi non è un museo: finché la storia appassiona, il palco resterà acceso. E se un giorno dovesse spegnersi, beh, vorrà dire che non abbiamo lavorato abbastanza».",
      es: "El desafío, admite Guastella, es lograr que el público vuelva pasada la novedad. «El teatro de los muñecos no es un museo: mientras la historia apasione, el escenario seguirá encendido. Y si algún día se apagara, bueno, querrá decir que no hemos trabajado lo suficiente»." },
    ],
    words: [
      { it: "il pupo / i pupi", es: "el muñeco / los muñecos (títeres sicilianos)" },
      { it: "la bottega", es: "el taller, la tienda" },
      { it: "l'allievo / gli allievi", es: "el alumno / los alumnos" },
      { it: "il copione", es: "el libreto, el guion" },
      { it: "l'armatura / le armature", es: "la armadura / las armaduras" },
      { it: "il palco", es: "el escenario" },
    ],
    questions: [
      { q: "¿Quiénes estudian en la escuela gratuita?", options: ["Dodici allievi, i più giovani sedicenni", "Solo figli di pupari", "Turisti in vacanza", "Studenti universitari di teatro"], answer: 0, why: "«dodici allievi, i più giovani sedicenni»." },
      { q: "¿Qué novedades ha traído la escuela?", options: ["Un museo delle armature", "Solo spettacoli per turisti", "Spettacoli ridotti per le elementari, pupi più leggeri e una pagina online", "Un nuovo teatro in periferia"], answer: 2, why: "«spettacoli ridotti per le classi delle elementari, pupi più leggeri per le braccia piccole, e una pagina online»." },
      { q: "¿Por dónde debería empezar un joven que quiera aprender de verdad?", options: ["Dalle prove di voce", "Dai piedi dei pupi", "Dal copione antico", "Dalle armature di metallo"], answer: 1, why: "«dovrebbe cominciare dai piedi dei pupi, come ho fatto io»." },
      { q: "¿Qué significa que el teatro de los pupi «no es un museo»?", options: ["Che gli storici non lo studino", "Che debba chiudere presto", "Che i pupi siano vecchi e inutili", "Che è un'arte viva, che deve ancora appassionare il pubblico"], answer: 3, why: "«finché la storia appassiona, il palco resterà acceso»." },
    ],
    discuss: [
      { it: "C'è uno spettacolo tradizionale della tua regione che rischia di sparire? Raccontalo.", es: "¿Hay algún espectáculo tradicional de tu región que corra el riesgo de desaparecer? Cuéntalo." },
      { it: "Le tradizioni devono restare uguali a se stesse o possono cambiare con il tempo?", es: "¿Las tradiciones deben permanecer idénticas o pueden cambiar con el tiempo?" },
    ],
  },

  /* ═══ B2 · 13 — Sport ═══ */
  {
    id: "news-b2-13", cat: "sport", level: "B2", place: "Livorno", minutes: 4,
    title: "A Livorno la vela arriva in periferia",
    titleEs: "En Livorno la vela llega a la periferia",
    lead: {
      it: "Livorno è nata con il porto, ma molti ragazzi delle periferie non sono mai usciti in mare. Un progetto del comune li porta a fare vela, gratis, con istruttori e autobus compresi.",
      es: "Livorno nació con el puerto, pero muchos chicos de las periferias nunca han salido al mar. Un proyecto del ayuntamiento los lleva a hacer vela, gratis, con instructores y autobús incluidos.",
    },
    paragraphs: [
      { it: "Livorno vive di mare da quattro secoli, eppure fra i ragazzi dei quartieri popolari lo scafo resta uno sconosciuto. Il costo delle lezioni, i trasporti, la paura: ostacoli piccoli, insormontabili senza aiuto.",
      es: "Livorno vive del mar desde hace cuatro siglos y, sin embargo, entre los chicos de los barrios populares el casco sigue siendo un desconocido. El costo de las clases, los transportes, el miedo: obstáculos pequeños, insalvables sin ayuda." },
      { it: "Il progetto parte dal circolo e arriva ai cortili: istruttori ed educatori portano i ragazzi al porto in autobus, tre pomeriggi alla settimana, da giugno a settembre.",
      es: "El proyecto parte del club y llega a los patios: instructores y educadores llevan a los chicos al puerto en autobús, tres tardes por semana, de junio a septiembre." },
      { it: "«Sembrava che il mare non li riguardasse», racconta la velista Marta Cioni, una delle istruttrici. «Se un ragazzo non ha mai visto il porto da vicino, è difficile che possa sognarlo».",
      es: "«Parecía que el mar no les incumbiera», cuenta la regatista Marta Cioni, una de las instructoras. «Si un chico nunca ha visto el puerto de cerca, es difícil que pueda soñarlo»." },
      { it: "I primi giorni qualcuno soffre il mal di mare, qualcuno non vuole salire. Poi la paura lascia il posto al vento: si impara a tenere la barra, ad alzare le vele, a tornare con la marea.",
      es: "Los primeros días alguno sufre mareos, alguno no quiere subir. Después el miedo deja sitio al viento: se aprende a llevar el timón, a izar las velas, a volver con la marea." },
      { it: "L'estate scorsa trecento ragazzi hanno concluso il corso e quaranta hanno disputato la prima regata cittadina, con le famiglie sul molo. L'equipaggio vincitore era formato da due cugini di quattordici anni, mai saliti su una barca prima di giugno.",
      es: "El verano pasado trescientos chicos terminaron el curso y cuarenta disputaron la primera regata ciudadana, con las familias en el muelle. La tripulación ganadora estaba formada por dos primos de catorce años que nunca habían subido a un barco antes de junio." },
      { it: "D'inverno l'attività continua in palestra con nodi e mappe. «Il mare insegna a pazientare», conclude la Cioni. «Se una manovra non riesce, si riprova: non esiste scorciatoia, con il vento».",
      es: "En invierno la actividad continúa en el gimnasio con nudos y mapas. «El mar enseña a tener paciencia», concluye Cioni. «Si una maniobra no sale, se reintenta: no existe atajo, con el viento»." },
    ],
    words: [
      { it: "la vela / le vele", es: "la vela / las velas" },
      { it: "lo scafo", es: "el casco (del barco)" },
      { it: "la regata", es: "la regata" },
      { it: "l'equipaggio", es: "la tripulación" },
      { it: "l'istruttore / gli istruttori", es: "el instructor / los instructores" },
      { it: "la manovra", es: "la maniobra" },
    ],
    questions: [
      { q: "¿Cuántos chicos terminaron el curso el verano pasado?", options: ["Quaranta", "Trecento", "Tredici", "Trecentomila"], answer: 1, why: "«L'estate scorsa trecento ragazzi hanno concluso il corso»." },
      { q: "¿Qué se hace en invierno?", options: ["Nodi e mappe in palestra", "Nuoto nel porto", "Riparazioni delle barche", "Niente fino a giugno"], answer: 0, why: "«D'inverno l'attività continua in palestra con nodi e mappe»." },
      { q: "¿Por qué es difícil que un chico pueda soñar con el mar?", options: ["Perché il mare è pericoloso", "Perché i sogni costano caro", "Perché, non avendolo mai visto da vicino, non può immaginarlo", "Perché il porto è vietato ai minori"], answer: 2, why: "«Se un ragazzo non ha mai visto il porto da vicino, è difficile che possa sognarlo»." },
      { q: "¿Qué lección transmite la frase de que «no existe atajo con el viento»?", options: ["Che il vento si possa comprare", "Che le regate siano troppo lunghe", "Che convenga partire prima", "Che certi risultati esigano pazienza e ripetizione"], answer: 3, why: "«Se una manovra non riesce, si riprova: non esiste scorciatoia, con il vento»." },
    ],
    discuss: [
      { it: "Com'era il mare della tua infanzia, e com'è oggi? Confronta.", es: "¿Cómo era el mar de tu infancia y cómo es hoy? Compara." },
      { it: "Lo sport dovrebbe essere gratuito per tutti i ragazzi? Chi dovrebbe pagarlo?", es: "¿El deporte debería ser gratuito para todos los chicos? ¿Quién debería pagarlo?" },
    ],
  },

  /* ═══ B2 · 14 — Storia ═══ */
  {
    id: "news-b2-14", cat: "storia", level: "B2", place: "Mantova", minutes: 4,
    title: "A Mantova una biblioteca nascosta dentro i libri",
    titleEs: "En Mantua una biblioteca escondida dentro de los libros",
    lead: {
      it: "Per rilegare i libri nuovi, i tipografi del Cinquecento usavano pagine vecchie. Sotto le coperte della biblioteca di Mantova i restauratori hanno trovato testi scomparsi da secoli.",
      es: "Para encuadernar los libros nuevos, los impresores del Quinientos usaban páginas viejas. Bajo las cubiertas de la biblioteca de Mantua los restauradores han hallado textos desaparecidos desde hace siglos.",
    },
    paragraphs: [
      { it: "La scoperta è avvenuta nella biblioteca storica, durante il restauro di un volume del Cinquecento: sotto il piatto della copertina erano incollate pagine di pergamena, scritte a mano tre secoli prima.",
      es: "El hallazgo ocurrió en la biblioteca histórica, durante la restauración de un volumen del Quinientos: bajo la tapa de la cubierta estaban pegadas páginas de pergamino, escritas a mano tres siglos antes." },
      { it: "Era una pratica comune: la pergamena costava cara e si riciclava tutto. Frammenti di codici medievali, lettere contabili, appunti di scuola finivano nelle legature, dove sono rimasti nascosti per cinquecento anni.",
      es: "Era una práctica común: el pergamino costaba caro y se reciclaba todo. Fragmentos de códices medievales, cartas de cuentas, apuntes de escuela acababan en las encuadernaciones, donde permanecieron ocultos durante quinientos años." },
      { it: "«È come se i tipografi ci avessero lasciato una biblioteca dentro la biblioteca», dice la dottoressa Rachele Vismara, responsabile del restauro. «L'hanno costruita senza saperlo, e senza volerlo».",
      es: "«Es como si los impresores nos hubieran dejado una biblioteca dentro de la biblioteca», dice la doctora Rachele Vismara, responsable de la restauración. «La construyeron sin saberlo y sin querer»." },
      { it: "I frammenti ritrovati finora sono una novantina: un salterio con note musicali, i conti di una bottega di stoffe, una lettera d'amore mai identificata. Se i restauratori non avessero aperto le coperte, tutto questo sarebbe sparito per sempre.",
      es: "Los fragmentos hallados hasta ahora son una noventena: un salterio con notas musicales, las cuentas de una tienda de telas, una carta de amor nunca identificada. Si los restauradores no hubieran abierto las cubiertas, todo esto habría desaparecido para siempre." },
      { it: "Ogni pagina viene fotografata, studiata e pubblicata online, con la collaborazione di università straniere. Le scuole di Mantova partecipano alla trascrizione: i ragazzi leggono meglio di quanto si pensi le scritture antiche.",
      es: "Cada página se fotografía, se estudia y se publica en línea, con la colaboración de universidades extranjeras. Las escuelas de Mantua participan en la transcripción: los chicos leen mejor de lo que se pensaba las escrituras antiguas." },
      { it: "Il prossimo passo è confrontare i frammenti con quelli di altre biblioteche italiane. Chissà quanti libri, conclude la Vismara, «nascondono ancora pagine che nessuno ha letto da cinque secoli».",
      es: "El paso siguiente es comparar los fragmentos con los de otras bibliotecas italianas. Quién sabe cuántos libros, concluye Vismara, «esconden todavía páginas que nadie ha leído desde hace cinco siglos»." },
    ],
    words: [
      { it: "la legatura / le legature", es: "la encuadernación / las encuadernaciones" },
      { it: "la pergamena", es: "el pergamino" },
      { it: "il frammento / i frammenti", es: "el fragmento / los fragmentos" },
      { it: "la copertina", es: "la cubierta, la tapa" },
      { it: "il codice / i codici", es: "el códice / los códices" },
      { it: "il restauro", es: "la restauración" },
    ],
    questions: [
      { q: "¿Qué encontraron los restauradores bajo la tapa de la cubierta del volumen?", options: ["Pagine di pergamena scritte a mano tre secoli prima", "Monete d'oro del Cinquecento", "Una lettera d'amore incorniciata", "Fotografie ottocentesche"], answer: 0, why: "«sotto il piatto della copertina erano incollate pagine di pergamena, scritte a mano tre secoli prima»." },
      { q: "¿Por qué se reciclaba todo en la época de los impresores?", options: ["Perché fosse vietato buttarlo", "Perché i tipografi preferissero la superficie ruvida", "Perché la pergamena costava cara", "Perché nessuno sapesse leggerla"], answer: 2, why: "«la pergamena costava cara e si riciclava tutto»." },
      { q: "¿Qué habría pasado si los restauradores no hubieran abierto las cubiertas?", options: ["I tipografi si sarebbero arrabbiati", "I frammenti sarebbero spariti per sempre", "La biblioteca avrebbe chiuso", "Le scuole avrebbero perso il lavoro"], answer: 1, why: "«Se i restauratori non avessero aperto le coperte, tutto questo sarebbe sparito per sempre»." },
      { q: "¿Qué sugiere la imagen de la «biblioteca dentro de la biblioteca»?", options: ["Che la biblioteca sia troppo piccola", "Che serva un edificio nuovo", "Che i libri antichi vadano comprati all'asta", "Che le legature stesse nascondano testi preziosi"], answer: 3, why: "«come se i tipografi ci avessero lasciato una biblioteca dentro la biblioteca»: las encuadernaciones guardan textos perdidos." },
    ],
    discuss: [
      { it: "Che cosa potrebbero nascondere, secondo te, i libri molto antichi? Immagina una scoperta.", es: "¿Qué podrían esconder, según tú, los libros muy antiguos? Imagina un hallazgo." },
      { it: "Nel Cinquecento si riciclava per necessità: che cosa abbiamo dimenticato?", es: "En el siglo XVI se reciclaba por necesidad: ¿qué hemos olvidado nosotros?" },
    ],
  },

  /* ═══ B2 · 15 — Ambiente ═══ */
  {
    id: "news-b2-15", cat: "ambiente", level: "B2", place: "Foggia", minutes: 4,
    title: "A Foggia ogni classe adotta un albero",
    titleEs: "En Foggia cada clase adopta un árbol",
    lead: {
      it: "Fra le città più calde d'Italia, Foggia ha trasformato un vecchio parcheggio in bosco scolastico. Ogni classe adotta un albero, lo misura e lo innaffia: la scienza serve a non farlo morire.",
      es: "Entre las ciudades más calurosas de Italia, Foggia ha transformado un viejo aparcamiento en bosque escolar. Cada clase adopta un árbol, lo mide y lo riega: la ciencia sirve para que no muera.",
    },
    paragraphs: [
      { it: "D'estate l'asfalto del vecchio parcheggio superava i cinquanta gradi. Oggi quel terreno ospita quattrocento piantine: le classi delle elementari e delle medie se le dividono, con tanto di cartellino col nome.",
      es: "En verano el asfalto del viejo aparcamiento superaba los cincuenta grados. Hoy ese terreno acoge cuatrocientos arbolitos: las clases de primaria y secundaria se los reparten, con su etiqueta con el nombre." },
      { it: "Il progetto è nato con gli urbanisti dell'università: gli alberi, scelti fra le specie resistenti alla siccità, abbassano la temperatura del cortile e trattengono la polvere. Ogni classe registra l'altezza della pianta e la larghezza delle foglie.",
      es: "El proyecto nació con los urbanistas de la universidad: los árboles, elegidos entre especies resistentes a la sequía, bajan la temperatura del patio y retienen el polvo. Cada clase registra la altura de la planta y la anchura de las hojas." },
      { it: "«I bambini trattano l'albero come un compagno di classe», ride la maestra Lucia Trotta. «Se ogni scuola piantasse un bosco, la temperatura del quartiere scenderebbe di un paio di gradi: non è poco».",
      es: "«Los niños tratan al árbol como a un compañero de clase», se ríe la maestra Lucía Trotta. «Si cada escuela plantara un bosque, la temperatura del barrio bajaría un par de grados: no es poco»." },
      { it: "La manutenzione estiva è il momento più delicato: la siccità non perdona. Per questo gli innaffiatoi passano di mano in mano anche di sabato, con i genitori che si organizzano a turno come per una gita.",
      es: "El mantenimiento de verano es el momento más delicado: la sequía no perdona. Por eso las regaderas pasan de mano en mano también los sábados, con los padres organizándose por turnos como para una excursión." },
      { it: "I primi dati arrivano dai sensori: intorno alle piantine la terra è già più fresca di tre gradi, più di quanto chiunque si aspettasse. In autunno sarà la volta delle panchine e dell'anfiteatro di legno.",
      es: "Los primeros datos llegan de los sensores: alrededor de los arbolitos la tierra ya está tres grados más fresca, más de lo que cualquiera esperaba. En otoño llegará el turno de los bancos y del anfiteatro de madera." },
      { it: "Fra dieci anni, dicono i progettisti, qui ci sarà ombra vera. I bambini di oggi avranno vent'anni: «Se torneranno a sedersi sotto il loro albero», conclude la Trotta, «il bosco avrà già vinto la sua partita».",
      es: "Dentro de diez años, dicen los proyectistas, aquí habrá sombra de verdad. Los niños de hoy tendrán veinte años: «Si vuelven a sentarse bajo su árbol», concluye Trotta, «el bosque ya habrá ganado su partido»." },
    ],
    words: [
      { it: "la pianta / le piantine", es: "la planta / los arbolitos", note: "pianta también significa «planta del pie»" },
      { it: "la siccità", es: "la sequía" },
      { it: "l'innaffiatoio / gli innaffiatoi", es: "la regadera / las regaderas" },
      { it: "il cortile", es: "el patio" },
      { it: "la panchina / le panchine", es: "el banco / los bancos (de parque)" },
      { it: "l'ombra", es: "la sombra" },
    ],
    questions: [
      { q: "¿Qué había antes donde hoy está el bosque escolar?", options: ["Un mercato rionale", "Un vecchio parcheggio", "Un campo di calcio", "Un giardino privato"], answer: 1, why: "«D'estate l'asfalto del vecchio parcheggio superava i cinquanta gradi»." },
      { q: "¿Qué especies de árboles se han elegido?", options: ["Specie resistenti alla siccità", "Specie tropicali da serra", "Solo piante da frutto", "Specie importate dall'estero"], answer: 0, why: "«gli alberi, scelti fra le specie resistenti alla siccità»." },
      { q: "¿Qué muestran los primeros datos de los sensores?", options: ["Che le piantine siano morte per il caldo", "Che i sensori non funzionino d'estate", "Che la terra intorno alle piantine è già più fresca di tre gradi", "Che il cortile sia più caldo di prima"], answer: 2, why: "«intorno alle piantine la terra è già più fresca di tre gradi»." },
      { q: "¿Qué significa que «el bosque ya habrá ganado su partido»?", options: ["Che avrà battuto una squadra rivale", "Che il bosco diventerà un parco a pagamento", "Che gli alberi giocheranno a calcio", "Che avrà raggiunto il suo scopo: legare le persone al luogo"], answer: 3, why: "«il bosco avrà già vinto la sua partita»: el éxito es que los niños vuelvan a sentarse bajo su árbol." },
    ],
    discuss: [
      { it: "Adotteresti un albero? Che nome gli daresti e perché?", es: "¿Adoptarías un árbol? ¿Qué nombre le pondrías y por qué?" },
      { it: "La tua città è più calda di vent'anni fa? Cosa si potrebbe fare?", es: "¿Tu ciudad es más calurosa que hace veinte años? ¿Qué se podría hacer?" },
    ],
  },
];
