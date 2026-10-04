import type { CbClozeText } from "../cambridge";

/* ═══ v9.12 · Letture con cloze inferencial · Nivel A2 ═══════════════
   Passato prossimo e imperfetto, vita quotidiana, inferencia
   léxica y temporal más exigente que en A1.                          */

export const CLOZE_A2: Record<string, CbClozeText[]> = {
  "cu-a2-01": [
    {
      id: "cz-a2-01-1", title: "Il mio primo giorno a Bologna", titleEs: "Mi primer día en Bolonia", minutes: 3,
      paragraphs: [
        { it: "Sono arrivata a Bologna a settembre. Il treno aveva due ore di {1}, ma non m'importava: era il mio primo giorno da studentessa fuori casa. All'inizio la città mi è sembrata enorme; poi ho capito che il centro si gira tutto a piedi, sotto i portici.", es: "Llegué a Bolonia en septiembre. El tren tenía dos horas de retraso, pero no me importaba: era mi primer día de estudiante fuera de casa. Al principio la ciudad me pareció enorme; luego entendí que el centro se recorre todo a pie, bajo los portales." },
        { it: "Ho cercato la mia stanza seguendo l'indirizzo su un foglietto. Quando ho aperto la porta, i miei tre coinquilini stavano cucinando. «Sei tu la nuova? — ha detto Marco — Metti giù le valigie e siediti, la pasta è quasi pronta». In quel momento ho {2} che l'avventura cominciava bene: non conoscevo nessuno, ma mi sentivo già a casa. Anni dopo, ripenso a quel primo {3} con tenerezza: era il giorno in cui ho smesso di avere {4} e ho iniziato ad avere {5}.", es: "Busqué mi habitación siguiendo la dirección en un papelito. Cuando abrí la puerta, mis tres compañeros de piso estaban cocinando. «¿Eres tú la nueva? —dijo Marco—. Suelta las maletas y siéntate, la pasta ya casi está». En ese momento entendí que la aventura empezaba bien: no conocía a nadie, pero ya me sentía en casa. Años después, pienso con ternura en esa primera noche: era el día en que dejé de tener miedo y empecé a tener recuerdos." },
      ],
      gaps: [
        { options: ["ritardo", "anticipo", "ritorno"], answer: 0, why: "Contexto de tren que llega tarde" },
        { options: ["capito", "sognato", "dimenticato"], answer: 0, why: "Comprensión del momento" },
        { options: ["giorno", "esame", "lavoro"], answer: 0, why: "El relato trata del primer día" },
        { options: ["paura", "soldi", "lezioni"], answer: 0, why: "Contraste con recuerdos" },
        { options: ["ricordi", "compiti", "biglietti"], answer: 0, why: "Lo que queda tras la experiencia" },
      ],
    },
    {
      id: "cz-a2-01-2", title: "L'estate del nonno", titleEs: "El verano del abuelo", minutes: 3,
      paragraphs: [
        { it: "Mio nonno raccontava sempre la stessa storia, e noi nipoti non ci {1} mai. Era l'estate del 1970: lui aveva diciannove anni e lavorava in un cantiere a Torino. Un giorno il capo gli disse: «Prendi il camioncino e porta questi attrezzi a Genova».", es: "Mi abuelo contaba siempre la misma historia, y nosotros los nietos nunca nos cansábamos. Era el verano de 1970: él tenía diecinueve años y trabajaba en una obra en Turín. Un día el jefe le dijo: «Toma la camioneta y lleva estas herramientas a Génova»." },
        { it: "Nonno partì all'alba. Arrivato al mare, invece di scaricare subito gli attrezzi, li lasciò nel camioncino e scese in spiaggia: non aveva mai visto il mare! Rimase lì tutta la giornata, si {2} anche il sole e tornò a Torino di notte. Il giorno dopo il capo lo aspettava con una {3} furiosa: gli attrezzi erano rimasti chiusi nel camion sotto il sole per ore. «Mi dispiace — disse nonno — ma per una giornata della mia {4} ne è valsa la pena». Lo licenziarono, ma quella storia ce l'ha raccontata per cinquant'anni, sempre con gli occhi che brillavano. Perché certe cose si perdono: un lavoro si ritrova, un'estate del 1970 {5}.", es: "El abuelo partió al amanecer. Al llegar al mar, en vez de descargar las herramientas de inmediato, las dejó en la camioneta y bajó a la playa: ¡nunca había visto el mar! Se quedó allí todo el día, se quemó incluso con el sol y volvió a Turín de noche. Al día siguiente el jefe lo esperaba con una cara furiosa: las herramientas habían quedado cerradas en la camión bajo el sol durante horas. «Lo siento —dijo el abuelo—, pero por un día de mi vida valió la pena». Lo despidieron, pero esa historia nos la contó durante cincuenta años, siempre con los ojos brillantes. Porque hay cosas que se pierden: un trabajo se encuentra de nuevo, un verano de 1970 no vuelve." },
      ],
      gaps: [
        { options: ["stancavamo", "svegliavamo", "annoiavamo"], answer: 0, why: "Pedir la misma historia mil veces" },
        { options: ["bruciò", "ruppe", "perse"], answer: 0, why: "Todo el día al sol" },
        { options: ["faccia", "lettera", "festa"], answer: 0, why: "Jefe furioso al día siguiente" },
        { options: ["vita", "vacanza", "pausa"], answer: 0, why: "Día único e irrepetible" },
        { options: ["non torna", "è gratis", "è eterno"], answer: 0, why: "Cierre moral del relato" },
      ],
    },
    {
      id: "cz-a2-01-3", title: "Come ci siamo conosciuti", titleEs: "Cómo nos conocimos", minutes: 3,
      paragraphs: [
        { it: "Ogni coppia ha la sua storia. La nostra è cominciata per caso, in treno. Era febbraio, pioveva, e il mio treno era {1}. Giulia salì alla stazione dopo la mia, con un ombrello rotto e un libro in mano. Si sedette davanti a me perché non c'erano altri posti.", es: "Cada pareja tiene su historia. La nuestra comenzó por casualidad, en tren. Era febrero, llovía, y mi tren estaba lleno. Giulia subió en la estación después de la mía, con un paraguas roto y un libro en la mano. Se sentó frente a mí porque no había otros asientos." },
        { it: "Il libro era di un autore che {2} pure io, così le chiesi: «Le piace?». Rispose che l'aveva già letto tre volte. Parlammo per due ore senza accorgercene: il treno arrivò a destinazione e noi continuammo a parlare sul {3}. Non ci scambiamo i numeri — ero troppo timido — e per un mese pensai a lei. Poi, un sabato, la vidi nella stessa {4} del quartiere. «Tu! — esclamò — il ragazzo del treno!». Oggi, vent'anni dopo, i nostri figli chiedono: «Come vi siete conosciuti?». E noi rispondiamo che è stato il {5} a decidere, con un treno in ritardo e un ombrello rotto.", es: "El libro era de un autor que también yo conocía, así que le pregunté: «¿Le gusta?». Respondió que ya lo había leído tres veces. Hablamos dos horas sin darnos cuenta: el tren llegó a destino y nosotros seguimos hablando en el andén. No nos intercambiamos los números —era demasiado tímido— y por un mes pensé en ella. Luego, un sábado, la vi en la misma panadería del barrio. «¡Tú! —exclamó— el chico del tren!». Hoy, veinte años después, nuestros hijos preguntan: «¿Cómo se conocieron?». Y respondemos que fue el destino, con un tren retrasado y un paraguas roto." },
      ],
      gaps: [
        { options: ["pieno", "vuoto", "rotto"], answer: 0, why: "Sin otros asientos disponibles" },
        { options: ["conoscevo", "detestavo", "scrivevo"], answer: 0, why: "Motivo para iniciar conversación" },
        { options: ["binario", "tetto", "sedile"], answer: 0, why: "Se sigue hablando al bajar" },
        { options: ["panetteria", "stazione", "scuola"], answer: 0, why: "Reencuentro casual en el barrio" },
        { options: ["destino", "caso", "autista"], answer: 0, why: "Cierre romántico del relato" },
      ],
    },
  ],
  "cu-a2-02": [
    {
      id: "cz-a2-02-1", title: "Quando ero piccolo", titleEs: "Cuando era pequeño", minutes: 3,
      paragraphs: [
        { it: "Quando ero piccolo, le estati sembravano infinite. Passavamo tre mesi nella casa di campagna della nonna, senza televisione e senza {1}. La mattina ci svegliava il gallo; la sera ci addormentavano le {2} dei grilli.", es: "Cuando era pequeño, los veranos parecían infinitos. Pasábamos tres meses en la casa de campo de la abuela, sin televisión y sin teléfono. Por la mañana nos despertaba el gallo; por la noche nos dormían los grillos." },
        { it: "Eravamo sempre in sei o sette cugini, un piccolo {3} in movimento. Costruivamo capanne sugli alberi, facevamo guerre d'acqua, rubavamo le pesche dall'orto. La nonna fingeva di arrabbiarsi, ma poi ci preparava la merenda. Un giorno cadde il mio incantesimo: avevo tredici anni e la campagna mi sembrò solo… noiosa. Volevo la città, i amici, il motorino. Ora che ho quarant'anni, capirei quel ragazzino: cercava di crescere. Ma se potrei tornare indietro anche solo per un pomeriggio, sceglierei esattamente quel {4}: le pesche, i grilli, la merenda della nonna. Le estati, alla fine, non erano infinite: era la nostra {5} che era infinita.", es: "Éramos siempre seis o siete primos, una pequeña tribu en movimiento. Construíamos cabañas en los árboles, hacíamos guerras de agua, robábamos los duraznos del huerto. La abuela fingía enojarse, pero luego nos preparaba la merienda. Un día se rompió el hechizo: tenía trece años y el campo me pareció solo… aburrido. Quería la ciudad, los amigos, la moto. Ahora que tengo cuarenta, entendería a ese chico: buscaba crecer. Pero si pudiera volver atrás aunque fuera por una tarde, elegiría exactamente aquello: los duraznos, los grillos, la merienda de la abuela. Los veranos, al final, no eran infinitos: era nuestra infancia la que lo era." },
      ],
      gaps: [
        { options: ["telefono", "compiti aggiuntivi", "gallo"], answer: 0, why: "Contraste con la TV: tecnología" },
        { options: ["voci", "canzoni", "macchine"], answer: 0, why: "Sonido nocturno del campo" },
        { options: ["esercito", "clan familiare", "branco di lupi"], answer: 0, why: "Grupo numeroso de niños" },
        { options: ["profumo", "silenzio", "rumore"], answer: 0, why: "Prolonga el contraste con el ruido" },
        { options: ["infanzia", "vacanza", "pausa"], answer: 0, why: "Cierre emotivo del texto" },
      ],
    },
    {
      id: "cz-a2-02-2", title: "Il diario della mamma", titleEs: "El diario de la mamá", minutes: 3,
      paragraphs: [
        { it: "Svuotando una scatola in soffitta ho trovato il diario di mia madre. Aveva vent'anni nelle foto, ma la {1} era quella di sempre: rotonda, decisa, piena di sottolineature. Alla pagina del 3 maggio 1985 ho letto: «Oggi ho conosciuto un ragazzo {2}. Parla poco, ma quando parla dice cose giuste».", es: "Vacaindo una caja en el desván encontré el diario de mi madre. Tenía veinte años en las fotos, pero la letra era la de siempre: redonda, decidida, llena de subrayados. En la página del 3 de mayo de 1985 leí: «Hoy conocí a un chico callado. Habla poco, pero cuando habla dice cosas correctas»." },
        { it: "Il ragazzo era mio padre. Nelle pagine seguenti la scrittura raccontava i loro appuntamenti: il cinema, le passeggiate, la prima {3} con i nonni. C'erano anche litigi, cancellati con righe {4}. All'ultima pagina, la data del matrimonio e una frase sola: «Da oggi, tutto insieme». Ho richiuso il diario con delicatezza, come si chiude una finestra aperta troppo tempo. Mia madre non c'è più da dieci anni, ma per un pomeriggio, in quella soffitta, ho risentito la sua {5}: decisa, rotonda, viva.", es: "El chico era mi padre. En las páginas siguientes la escritura contaba sus citas: el cine, los paseos, la primera cena con los abuelos. Había también peleas, tachadas con líneas nerviosas. En la última página, la fecha de la boda y una sola frase: «Desde hoy, todo juntos». Cerré el diario con delicadeza, como se cierra una ventana abierta demasiado tiempo. Mi madre ya no está desde hace diez años, pero por una tarde, en aquel desván, volví a sentir su voz: decidida, redonda, viva." },
      ],
      gaps: [
        { options: ["scrittura", "firma", "fotografia"], answer: 0, why: "Descrita como redonda y subrayada" },
        { options: ["taciturno", "chiassoso", "arrogante"], answer: 0, why: "\"Parla poco\"" },
        { options: ["cena", "litigata", "gita in barca"], answer: 0, why: "Paso formal en el noviazgo" },
        { options: ["nervose", "allegre", "dritte"], answer: 0, why: "Forma de tachar peleas" },
        { options: ["voce", "ricetta", "canzone"], answer: 0, why: "Metáfora de la escritura" },
      ],
    },
    {
      id: "cz-a2-02-3", title: "La scuola di una volta", titleEs: "La escuela de antes", minutes: 3,
      paragraphs: [
        { it: "«Ai miei tempi — dice sempre il nonno — la scuola era un'altra cosa». Ci si alzava in piedi quando entrava la maestra, si scriveva con il {1} e chi sbagliava prendeva la bacchetta sulle dita. I banchi erano di legno, con il {2} per l'inchiostro.", es: "«En mis tiempos —dice siempre el abuelo— la escuela era otra cosa». Uno se ponía de pie cuando entraba la maestra, se escribía con la plumilla y quien se equivocaba recibía la vara en los dedos. Los pupitres eran de madera, con el hueco para la tinta." },
        { it: "Ma quando il nonno finisce di raccontare le {3}, il nonno Giovanni — che era maestro davvero — sorride e aggiunge un dettaglio diverso: «È vero, era così. Però c'era anche un giardino dove coltivavamo fiori con i bambini, e ogni primavera facevamo una recita». La memoria, dice sempre, è come un armadio: appendiamo i vestiti che vogliamo e {4} gli altri. Le bastonate erano reali, ma anche il giardino lo era. Forse il passato, come il presente, non è mai tutto {5} o tutto brutto: è fatto di entrambe le cose, e sta a noi scegliere cosa appendere nell'armadio.", es: "Pero cuando el abuelo termina de contar las penurias, el abuelo Giovanni —que fue maestro de verdad— sonríe y añade un detalle distinto: «Es verdad, era así. Sin embargo también había un jardín donde cultivábamos flores con los niños, y cada primavera hacíamos una obra de teatro». La memoria, dice siempre, es como un armario: colgamos la ropa que queremos y olvidamos el resto. Los golpes eran reales, pero el jardín también lo era. Quizá el pasado, como el presente, nunca es todo bello o todo feo: está hecho de ambas cosas, y nos toca elegir qué colgar en el armario." },
      ],
      gaps: [
        { options: ["calamaio", "computer", "matitone"], answer: 0, why: "Con tinta: plumilla" },
        { options: ["buco", "cassetto", "cestino"], answer: 0, why: "Espacio para el tintero" },
        { options: ["privazioni", "vacanze", "invenzioni"], answer: 0, why: "Castigos y dureza narrada" },
        { options: ["dimentichiamo", "pieghiamo", "laviamo"], answer: 0, why: "Metáfora del armario" },
        { options: ["bello", "vecchio", "lungo"], answer: 0, why: "Contraste con \"tutto brutto\"" },
      ],
    },
  ],
  "cu-a2-03": [
    {
      id: "cz-a2-03-1", title: "Prenotazione al telefono", titleEs: "Reserva por teléfono", minutes: 2,
      paragraphs: [
        { it: "«Buongiorno, vorrei {1} una camera doppia per il prossimo weekend». — «Per quante notti?» — «Due, dal venerdì alla domenica. Avete qualcosa con vista sul {2}?» — «Al momento le camere vista mare sono complete, ma ho una doppia con terrazza al quinto piano».", es: "«Buenos días, quisiera reservar una habitación doble para el próximo fin de semana». — «¿Para cuántas noches?» — «Dos, del viernes al domingo. ¿Tienen algo con vista al mar?» — «Por ahora las habitaciones con vista al mar están completas, pero tengo una doble con terraza en el quinto piso»." },
        { it: "«Quanto costa a notte, colazione {3}?» — «Ottanta euro a notte, prima colazione inclusa. La {4} deve arrivare entro le diciotto del giorno dell'arrivo, altrimenti la camera viene rimessa in vendita». — «Va bene, {5}». — «Mi lascia nome e numero di telefono? La aspettiamo!»", es: "«¿Cuánto cuesta por noche, desayuno incluido?» — «Ochenta euros por noche, desayuno incluido. La llegada debe ser antes de las dieciocho del día de llegada, de lo contrario la habitación vuelve a la venta». — «Está bien, confirmo». — «¿Me deja nombre y número de teléfono? ¡La esperamos!»" },
      ],
      gaps: [
        { options: ["prenotare", "annullare", "pagare"], answer: 0, why: "Petición inicial de habitación" },
        { options: ["mare", "parcheggio", "cortile"], answer: 0, why: "Vista típica solicitada" },
        { options: ["inclusa", "esclusa", "a pagamento extra"], answer: 0, why: "Pregunta sobre precio final" },
        { options: ["struttura", "famiglia", "macchina"], answer: 0, why: "Llegada al hotel antes de las 18h" },
        { options: ["recensione", "conferma", "lettera"], answer: 0, why: "Datos finales de la reserva" },
      ],
    },
    {
      id: "cz-a2-03-2", title: "Un problema in camera", titleEs: "Un problema en la habitación", minutes: 3,
      paragraphs: [
        { it: "Sono le undici di sera quando bussano alla porta della mia camera d'albergo. È il {1} dell'hotel: «Mi scusi, signore, c'è un problema con la sua prenotazione». Risultava una sola notte, ma io ne avevo prenotate tre.", es: "Son las once de la noche cuando tocan a la puerta de mi habitación de hotel. Es el recepcionista del hotel: «Disculpe, señor, hay un problema con su reserva». Resultaba una sola noche, pero yo había reservado tres." },
        { it: "«Purtroppo per domani siamo {2} — si scusa — un congresso ha occupato tutte le camere». La situazione sembra disperata: è agosto, siamo in una città turistica e non ho un'alternativa. Poi il receptionist fa una telefonata, parla a bassa voce con un collega e torna da me con un mezzo sorriso: «Abbiamo trovato una {3}. C'è una suite al terzo piano, momentaneamente libera per lavori. Il bagno è in ristrutturazione, quindi userà quello della piscina, ma la stanza è grande e silenziosa. Gliela diamo allo stesso {4} della doppia». Accetto, naturalmente. La mattina dopo, aprendo le persiane, capisco che problema e fortuna a volte viaggiano insieme: la suite affaccia sui tetti rossi della città vecchia, e il bagno della piscina — scoprirò — è il più {5} dell'hotel.", es: "«Lamentablemente para mañana estamos completos —se disculpa—: un congreso ha ocupado todas las habitaciones». La situación parece desesperada: es agosto, estamos en una ciudad turística y no tengo alternativa. Luego el recepcionista hace una llamada, habla en voz baja con un colega y vuelve a mí con media sonrisa: «Hemos encontrado una solución. Hay una suite en el tercer piso, momentáneamente libre por obras. El baño está en reforma, así que usará el de la piscina, pero la habitación es grande y silenciosa. Se la damos al mismo precio de la doble». Acepto, naturalmente. A la mañana siguiente, al abrir las persianas, entiendo que el problema y la suerte a veces viajan juntos: la suite da a los techos rojos de la ciudad vieja, y el baño de la piscina —descubriré— es el más lujoso del hotel." },
      ],
      gaps: [
        { options: ["receptionist", "cuoco", "inserviente"], answer: 0, why: "Quien gestiona reservas de noche" },
        { options: ["completi", "vuoti", "chiusi"], answer: 0, why: "Congreso llenó el hotel" },
        { options: ["soluzione", "scusa", "surpresa"], answer: 0, why: "Media sonrisa: arreglo posible" },
        { options: ["prezzo", "orario", "piano"], answer: 0, why: "Condiciones iguales a la doble" },
        { options: ["lussuoso", "piccolo", "sporco"], answer: 0, why: "Giro final positivo del relato" },
      ],
    },
    {
      id: "cz-a2-03-3", title: "L'albergo di famiglia", titleEs: "El hotel familiar", minutes: 3,
      paragraphs: [
        { it: "L'Hotel Belvedere apre ogni anno il primo di giugno e chiude a settembre, da sessant'anni. È un albergo piccolo, trenta camere, gestito dalla stessa {1}: i nonni lo comprarono nel 1963, i genitori lo trasformarono, e ora tocca a Chiara, trentadue anni, che ne è l'ultima {2}.", es: "El Hotel Belvedere abre cada año el primero de junio y cierra en septiembre, desde hace sesenta años. Es un hotel pequeño, treinta habitaciones, gestionado por la misma familia: los abuelos lo compraron en 1963, los padres lo transformaron, y ahora le toca a Chiara, treinta y dos años, que es la última representante." },
        { it: "«D'estate non dormo — racconta —. Ogni cliente è un mondo: il signore della stanza sette che vuole il caffè alle sei, la coppia della dodici che litiga e si {3} la mattina dopo, i bambini che rubano le arance del giardino». Ma quando le chiedono se non ha mai pensato di vendere e cambiare vita, Chiara guarda il mare dalla terrazza e risponde con una domanda: «E chi {4} ai clienti abituali che tornano da trent'anni? Per loro questa non è una struttura ricettiva: è la loro seconda {5}». E in effetti, nel registro delle presenze, certe famiglie compaiono ogni giugno, come le rondini.", es: "«En verano no duermo —cuenta—. Cada cliente es un mundo: el señor de la habitación siete que quiere el café a las seis, la pareja de la doce que pelea y se reconcilia a la mañana siguiente, los niños que roban las naranjas del jardín». Pero cuando le preguntan si nunca pensó en vender y cambiar de vida, Chiara mira el mar desde la terraza y responde con una pregunta: «¿Y quién cuidaría a los clientes habituales que vuelven desde hace treinta años? Para ellos esto no es un establecimiento turístico: es su segunda casa». Y en efecto, en el registro de huéspedes, ciertas familias aparecen cada junio, como las golondrinas." },
      ],
      gaps: [
        { options: ["famiglia", "azienda", "catena"], answer: 0, why: "Abuelos → padres → Chiara" },
        { options: ["erede", "dipendente", "cliente"], answer: 0, why: "Continuadora de la tradición" },
        { options: ["riconciliano", "separano", "lamentano"], answer: 0, why: "Pelean y luego hacen las paces" },
        { options: ["penserebbe", "pagherebbe", "dormirebbe"], answer: 0, why: "Retórica del cuidado" },
        { options: ["casa", "vacanza", "chance"], answer: 0, why: "Sentido de pertenencia" },
      ],
    },
  ],
  "cu-a2-04": [
    {
      id: "cz-a2-04-1", title: "In farmacia", titleEs: "En la farmacia", minutes: 2,
      paragraphs: [
        { it: "«Buonasera, mi scusi, ho un forte {1} alla gola da due giorni e mi fa male anche deglutire». — «Ha la febbre?» — «Ieri sera trentotto e mezzo». — «Ha qualche {2} ai farmaci?» — «Solo l'aspirina, mi dà fastidio allo stomaco».", es: "«Buenas tardes, disculpe, tengo un fuerte dolor de garganta desde hace dos días y me duele también tragar». — «¿Tiene fiebre?» — «Ayer noche treinta y ocho y medio». — «¿Tiene alguna alergia a los medicamentos?» — «Solo la aspirina, me molesta el estómago»." },
        { it: "La farmacista, una signora con gli occhiali sulla punta del naso, esce dal bancone e guarda la gola con una {3}: «È molto arrossata, ma non ci sono placche. Le dobo una pastiglia naturale e uno spray. Se in tre giorni non passa, o se sale la febbre, vada dal {4}: potrebbe servire un antibiotico, ma deciderà lui». Poi aggiunge, mentre batte lo scontrino: «E beva tanto, tè caldo con miele, no {5}: il fumo peggiora tutto».", es: "La farmacéutica, una señora con los lentes en la punta de la nariz, sale del mostrador y mira la garganta con una linterna: «Está muy enrojecida, pero no hay placas. Le doy una pastilla natural y un spray. Si en tres días no pasa, o si sube la fiebre, vaya al médico: podría necesitar un antibiótico, pero lo decidirá él». Luego añade, mientras emite el recibo: «Y beba mucho, té caliente con miel, nada de tabaco: el humo lo empeora todo»." },
      ],
      gaps: [
        { options: ["dolore", "prurito", "freddo"], answer: 0, why: "Al tragar, en la garganta" },
        { options: ["allergia", "abitudine", "paura"], answer: 0, why: "Reacción a la aspirina" },
        { options: ["piccola torcia", "lente d'ingrandimento", "garza"], answer: 0, why: "Instrumento para ver la garganta" },
        { options: ["medico", "veterinario", "dentista"], answer: 0, why: "Quien decide antibióticos" },
        { options: ["fumo", "alcol", "zucchero"], answer: 0, why: "\"Il fumo peggiora tutto\"" },
      ],
    },
    {
      id: "cz-a2-04-2", title: "La visita dal medico", titleEs: "La visita al médico", minutes: 3,
      paragraphs: [
        { it: "Dopo una settimana di tosse che non passava, ho finalmente preso il {1} dal medico di base. Lo studio è in una vecchia palazzina: scale di marmo, odore di disinfettante e una sala d'attesa con sedie degli anni Settanta.", es: "Después de una semana de tos que no pasaba, finalmente tomé turno con el médico de cabecera. El consultorio está en un viejo edificio: escaleras de mármol, olor a desinfectante y una sala de espera con sillas de los años setenta." },
        { it: "Il dottor Rossi conosce i suoi pazienti da sempre: «La tosse di notte o di giorno?», «Peggio la notte». Annota qualcosa sulla {2} e ascolta i polmoni: «Respiri profondamente… bene, lì è pulito». La diagnosi è una {3} virale: «Gli antibiotici non servono a niente contro i virus — spiega con pazienza — servono solo riposo, liquidi e tempo. Lo so che le sembra poco, ma il corpo ha i suoi tempi». Mentre scrive la ricetta, mi chiede del lavoro, del sonno, dello stress: domande che sembrano {4} ma sono medicina. Uscendo, la segretaria mi dà un foglio: «Se peggiora, torni subito». Penso che il dottor Rossi debba ripetere questa scena trenta volte al giorno, eppure ogni paziente si sente {5}. Forse è questo, alla fine, il segreto della vecchia medicina di famiglia.", es: "El doctor Rossi conoce a sus pacientes desde siempre: «¿La tos de noche o de día?», «Peor de noche». Anota algo en la ficha y escucha los pulmones: «Respire profundo… bien, ahí está limpio». El diagnóstico es una bronquitis viral: «Los antibióticos no sirven de nada contra los virus —explica con paciencia—: solo sirven reposo, líquidos y tiempo. Sé que le parece poco, pero el cuerpo tiene sus tiempos». Mientras escribe la receta, me pregunta del trabajo, del sueño, del estrés: preguntas que parecen charla pero son medicina. Al salir, la secretaria me da un papel: «Si empeora, vuelva enseguida». Pienso que el doctor Rossi debe repetir esta escena treinta veces al día, y sin embargo cada paciente se siente único. Quizá ese es, al final, el secreto de la vieja medicina de familia." },
      ],
      gaps: [
        { options: ["appuntamento", "caffè", "treno"], answer: 0, why: "Turno en el consultorio" },
        { options: ["cartella clinica", "ricevuta", "lettera"], answer: 0, why: "Donde anota el médico" },
        { options: ["bronchite", "frattura", "dissenteria"], answer: 0, why: "Tos + pulmones limpios" },
        { options: ["conversazione", "interrogatorio", "lezione"], answer: 0, why: "Charla amable que es diagnóstico" },
        { options: ["unico", "un fastidio", "il solito"], answer: 0, why: "Atención personalizada" },
      ],
    },
    {
      id: "cz-a2-04-3", title: "Il pronto soccorso di mezzanotte", titleEs: "La urgencia de medianoche", minutes: 3,
      paragraphs: [
        { it: "Sabato notte, mezzanotte e mezza. Mia figlia si è tagliata un dito con un {1} mentre preparava la torta. Non è grave, ma il sangue non si ferma e lei trema. Corriamo al pronto soccorso più vicino.", es: "Sábado de noche, doce y media. Mi hija se cortó un dedo con un cuchillo mientras preparaba la tarta. No es grave, pero la sangre no se detiene y ella tiembla. Corremos a la urgencia más cercana." },
        { it: "Il triage è una porta azzurra con una {2} gentile che fa domande rapide: «Che è successo? Da quanto? È vaccinata?». Assegnano un codice verde: significa «grave ma non urgente», e si aspetta. La sala d'attesa a mezzanotte è un mondo a parte: un bambino con la febbre che dorme sulla spalla della mamma, un vecchio signore solo con la sua {3}, due ragazzi in costume da festa con una caviglia {4}. Finalmente, all'una e mezza, chiamano il nome di mia figlia. Il medice visita il dito in cinque minuti: tre punti e un cerotto. Ma quando usciamo, mia figlia mi stringe la mano e dice: «Papà, meno male che c'è questo posto». E io penso che ha ragione: mezzanotte, un sabato qualunque, e c'era una {5} accesa per noi.", es: "El triage es una puerta azul con una enfermera amable que hace preguntas rápidas: «¿Qué pasó? ¿Desde cuándo? ¿Está vacunada?». Asignan un código verde: significa «grave pero no urgente», y se espera. La sala de espera a medianoche es un mundo aparte: un niño con fiebre que duerme en el hombro de la mamá, un viejo señor solo con su bota, dos chicos en traje de fiesta con un tobillo torcido. Finalmente, a la una y media, llaman a mi hija. El médico visita el dedo en cinco minutos: tres puntos y una curita. Pero al salir, mi hija me aprieta la mano y dice: «Papá, menos mal que existe este lugar». Y yo pienso que tiene razón: medianoche, un sábado cualquiera, y había una luz encendida para nosotros." },
      ],
      gaps: [
        { options: ["coltello", "foglio", "giocattolo morbido"], answer: 0, why: "Preparando tarta: instrumento cortante" },
        { options: ["infermiera", "dottoressa del triage", "vigilessa"], answer: 0, why: "Persona que hace el triage" },
        { options: ["ingessatura", "sedia a rotelle", "valigia"], answer: 0, why: "Viejo lesionado que espera" },
        { options: ["storta", "rotta in due punti", "perfetta"], answer: 0, why: "Lesión típica de fiesta" },
        { options: ["luce", "finestra", "macchina"], answer: 0, why: "Metáfora del servicio público" },
      ],
    },
  ],
  "cu-a2-05": [
    {
      id: "cz-a2-05-1", title: "La ricetta della nonna", titleEs: "La receta de la abuela", minutes: 2,
      paragraphs: [
        { it: "«Per fare il ragù come si deve, prima di tutto tritate la cipolla {1}, non grossa. Poi mettete l'olio in una pentola larga e fate soffriggere a fuoco {2}. Non alzate la fiamma: chi ha fretta, mangia male».", es: "«Para hacer el ragú como es debido, primero de todo piquen la cebolla fina, no gruesa. Luego pongan el aceite en una olla ancha y hagan sofreír a fuego lento. No suban la llama: quien tiene prisa, come mal»." },
        { it: "«Aggiungete la carne macinata e mescolate finché non cambia {3}. Un bicchiere di vino rosso, e via: si fa evaporare. Poi il pomodoro, un pizzico di sale e due ore di cottura, aggiungendo un po' d'acqua se si asciuga troppo. Il segreto? L'ultimo quarto d'ora, con la {4} basilico fresco. E mai, mai la pasta al ragù {5}: il ragù si versa sulla pasta, mai il contrario!»", es: "«Agreguen la carne molida y mezclen hasta que cambie de color. Un vaso de vino tinto, y listo: se hace evaporar. Luego el tomate, una pizca de sal y dos horas de cocción, añadiendo un poco de agua si se seca demasiado. ¿El secreto? El último cuarto de hora, con la hoja de albahaca fresca. ¡Y nunca, nunca la pasta al ragú al revés: el ragú se vierte sobre la pasta, jamás al contrario!»" },
      ],
      gaps: [
        { options: ["fine", "cruda", "grande"], answer: 0, why: "Contraste con \"non grossa\"" },
        { options: ["lento", "alto", "spento"], answer: 0, why: "\"Non alzate la fiamma\"" },
        { options: ["colore", "peso", "odore"], answer: 0, why: "Señal visual de cocción" },
        { options: ["foglia di", "bottiglia di", "scatola di"], answer: 0, why: "Albahaca fresca final" },
        { options: ["al contrario", "in bianco", "al forno"], answer: 0, why: "Orden correcto del emplatado" },
      ],
    },
    {
      id: "cz-a2-05-2", title: "Le istruzioni del mobile", titleEs: "Las instrucciones del mueble", minutes: 3,
      paragraphs: [
        { it: "Ho comprato una libreria da montare da solo. Sul {1} c'era scritto: «Montaggio in 30 minuti, attrezzi inclusi». Tre ore dopo, ero seduto per terra circondato da viti, tavole e un {2} che non trovava la sua collocazione.", es: "Compré una librería para montar solo. En la caja decía: «Montaje en 30 minutos, herramientas incluidas». Tres horas después, estaba sentado en el suelo rodeado de tornillos, tablas y una pieza que no encontraba su ubicación." },
        { it: "Le istruzioni erano un fumetto senza parole: un omino felice che avvitava, avvitava e sorrideva. Io, invece, non sorridevo. Avevo {3} due viti, e la parte D risultava invertita. Quando finalmente la struttura stava in piedi, ho scoperto che era leggermente {4}: pendeva a destra come una torre stanca. Mia moglie è entrata, ha guardato, ha guardato me e ha detto la frase che ogni montatore teme: «Hai letto le istruzioni?». La risposta, naturalmente, era no. La libreria oggi sta ancora lì, puntellata con un pezzo di {5}, e funziona benissimo: a volte le cose imperfette sono quelle che durano.", es: "Las instrucciones eran un cómic sin palabras: un hombrecito feliz que atornillaba, atornillaba y sonreía. Yo, en cambio, no sonreía. Había avanzado dos tornillos, y la parte D quedaba invertida. Cuando finalmente la estructura estaba de pie, descubrí que estaba ligeramente torcida: pendía a la derecha como una torre cansada. Mi esposa entró, miró, me miró a mí y dijo la frase que todo montador teme: «¿Leíste las instrucciones?». La respuesta, naturalmente, era no. La librería hoy sigue allí, apuntalada con un trozo de cartón, y funciona perfectamente: a veces las cosas imperfectas son las que duran." },
      ],
      gaps: [
        { options: ["cartone della confezione", "manifesto pubblicitario", "foglio di quaderno"], answer: 0, why: "Promesa de montaje fácil" },
        { options: ["pezzo", "amico", " cane"], answer: 0, why: "Componente sin ubicación" },
        { options: ["saltato", "duplicato", "perso irrimediabilmente"], answer: 0, why: "Error de secuencia típico" },
        { options: ["storta", "bassa", "lucida"], answer: 0, why: "Pende a la derecha" },
        { options: ["cartone", "marmo", "vetro"], answer: 0, why: "Material de apuntalado casero" },
      ],
    },
    {
      id: "cz-a2-05-3", title: "Consigli di un esperto di pompe", titleEs: "Consejos de un experto en bombas", minutes: 3,
      paragraphs: [
        { it: "L'idraulico Guido lavora con l'acqua da trent'anni e ha una teoria: «Le case sono come le persone. Quando hanno un problema, lo dicono, ma con un linguaggio tutto loro. Bisogna solo imparare ad {1}».", es: "El plomero Guido trabaja con el agua desde hace treinta años y tiene una teoría: «Las casas son como las personas. Cuando tienen un problema, lo dicen, pero con un lenguaje todo suyo. Solo hay que aprender a escucharlas»." },
        { it: "«Un rubinetto che gocciola è un {2} leggero: non aspettare che diventi un pianto. Uno scarico lento è un disturbo digestivo: prima agisci, meglio è. E le {3} alle pareti? Quella è la casa che suda: c'è umidità in corpo, qualcosa non respira». I suoi consigli sono semplici: chiudere l'acqua quando si viaggia, non buttare l'olio nel lavandino, controllare il {4} dello scaldabagno ogni due anni. «La manutenzione è noiosa — conclude arrotolandosi le maniche — ma la {5} costa dieci volte di più, e non parla mai a bassa voce: arriva sempre di notte o durante le feste».", es: "«Un grifo que gotea es un lamento leve: no esperes a que se convierta en un llanto. Un desagüe lento es un male digestivo: cuanto antes actúes, mejor. ¿Y las manchas en las paredes? Esa es la casa que suda: tiene humedad en el cuerpo, algo no respira». Sus consejos son simples: cerrar el agua cuando se viaja, no tirar aceite al fregadero, revisar la resistencia del termo cada dos años. «El mantenimiento es aburrido —concluye arremangándose—, pero la emergencia cuesta diez veces más, y nunca habla en voz baja: siempre llega de noche o durante las fiestas»." },
      ],
      gaps: [
        { options: ["ascoltarle", "ignorarle", "traslocare"], answer: 0, why: "Lenguaje propio de las casas" },
        { options: ["lamento", "miracolo", "festeggiamento"], answer: 0, why: "Goteo → llanto: queja leve" },
        { options: ["macchie", "finestre", "antenne"], answer: 0, why: "\"La casa che suda\"" },
        { options: ["termostato", "passaporto", "tetto"], answer: 0, why: "Componente del scaldabagno" },
        { options: ["emergenza", "vacanza", "bolletta della luce"], answer: 0, why: "Llega de noche o en fiestas" },
      ],
    },
  ],
  "cu-a2-06": [
    {
      id: "cz-a2-06-1", title: "Che tempo farà?", titleEs: "¿Qué tiempo hará?", minutes: 2,
      paragraphs: [
        { it: "«Allora, questo weekend che si fa? Se fa bello, andiamo al mare; se piove, museo». — «Ho guardato le previsioni: sabato {1} tutto il giorno, vento forte dal mare. Domenica invece si {2}».", es: "«Entonces, este fin de semana ¿qué hacemos? Si hace bueno, vamos al mar; si llueve, museo». — «Miré el pronóstico: el sábado nublado todo el día, viento fuerte del mar. El domingo en cambio se aclara»." },
        { it: "«Perfetto, allora invertiamo: sabato museo e {3} interna, domenica spiaggia all'alba, prima che arrivi la folla». — «A proposito, porta la crema: l'indice UV sarà molto {4}, anche se non sembra caldo». — «E la sera? Il meteo dice che scenderà a dieci gradi». — «Allora porto anche il {5}: si sa mai».", es: "«Perfecto, entonces invertimos: sábado museo y comida interna, domingo playa al amanecer, antes de que llegue la multitud». — «Por cierto, trae la crema: el índice UV será muy alto, aunque no parezca calor». — «¿Y por la noche? El meteo dice que bajará a diez grados». — «Entonces llevo también el saco: por si acaso»." },
      ],
      gaps: [
        { options: ["nuvoloso", "sereno", "afoso"], answer: 0, why: "Viento fuerte: cielo cubierto" },
        { options: ["schiarisce", "guasta", "raffredda ulteriormente"], answer: 0, why: "Contraste con el sábado" },
        { options: ["merenda", "colazione", "cena"], answer: 0, why: "Comida dentro por lluvia" },
        { options: ["alto", "basso", "normale"], answer: 0, why: "Necesidad de crema solar" },
        { options: ["k-way", " costume", " ventilatore"], answer: 0, why: "Bajan 10 grados: abrigo" },
      ],
    },
    {
      id: "cz-a2-06-2", title: "Il matrimonio all'aperto", titleEs: "La boda al aire libre", minutes: 3,
      paragraphs: [
        { it: "Organizzavamo il matrimonio da un anno, tutto all'aperto: cerimonia in giardino, cena sotto le stelle, duecento {1}. Poi, tre giorni prima, il meteo ha cambiato tutto: «Sabato pomeriggio temporali forti, probabilità ottanta per cento».", es: "Organizábamos la boda desde hacía un año, todo al aire libre: ceremonia en el jardín, cena bajo las estrellas, doscientos invitados. Luego, tres días antes, el clima cambió todo: «Sábado por la tarde tormentas fuertes, probabilidad ochenta por ciento»." },
        { it: "Mia madre proponeva di spostare tutto in un capannone. Mia suocera suggeriva di {2}: «Sarà un segno!». Io chiamavo disperatamente ogni agriturismo della zona in cerca di una {3} alternativa. La soluzione è arrivata da zio Franco, che di mestiere fa il contadino e di cielo se ne intende: «Queste perturbazioni — ha detto guardando l'orizzonte — passano in fretta. Il temporale ci sarà, ma entro le sei di sera sarà finito». Abbiamo deciso di credergli: cerimonia posticipata di due ore, cena come previsto. E lo zio aveva ragione: alle diciotto e trenta un {4} enorme attraversava il cielo, e alle diciannove il giardino profumava di erba bagnata sotto un arcobaleno. La sera, a cena, duecento persone brindavano sotto le stelle. Il meteo aveva detto l'ottanta per cento. Lo zio Franco, il cento per cento: a volte l'esperienza batte il {5}.", es: "Mi madre proponía mover todo a un galpón. Mi suegra sugería no cambiar nada: «¡Será una señal!». Yo llamaba desesperadamente a cada agroturismo de la zona buscando una alternativa cubierta. La solución llegó del tío Franco, que de oficio es campesino y de cielo entiende: «Estas perturbaciones —dijo mirando el horizonte— pasan rápido. La tormenta habrá, pero para las seis de la tarde habrá terminado». Decidimos creerle: ceremonia pospuesta dos horas, cena como previsto. Y el tío tenía razón: a las dieciocho treinta una nube enorme cruzaba el cielo, y a las diecinueve el jardín olía a hierba mojada bajo un arcoíris. Por la noche, en la cena, doscientas personas brindaban bajo las estrellas. El meteo había dicho el ochenta por ciento. El tío Franco, el cien por ciento: a veces la experiencia vence al satélite." },
      ],
      gaps: [
        { options: ["invitati", "sedie rotte", "ombrelli"], answer: 0, why: "Evento grande al aire libre" },
        { options: ["non cambiare nulla", "annullare tutto", "solo spostare la data"], answer: 0, why: "Confianza supersticiosa" },
        { options: ["location coperta", "data nuova", "officiante"], answer: 0, why: "Plan B por lluvia" },
        { options: ["nuvolone", "aereo", "siluro"], answer: 0, why: "Tormenta que pasa rápido" },
        { options: ["satellite", "sindaco", "calendario"], answer: 0, why: "Cierre: saber campesino" },
      ],
    },
    {
      id: "cz-a2-06-3", title: "Programmi per le vacanze", titleEs: "Planes para las vacaciones", minutes: 3,
      paragraphs: [
        { it: "«Quest'estate, che facciamo? Io vorrei il mare, come sempre». — «Veramente pensavo a qualcosa di diverso: un viaggio in {1}, visitando città, musei, ristoranti…». — «Cioè, camminare tutto il giorno con quaranta gradi?».", es: "«Este verano, ¿qué hacemos? Yo querría el mar, como siempre». — «La verdad pensaba en algo distinto: un viaje en tren, visitando ciudades, museos, restaurantes…». — «O sea, ¿caminar todo el día con cuarenta grados?»." },
        { it: "La discussione sui programmi estivi è un rito di coppia antico come le {2} siciliane: ogni anno uguale, ogni anno appassionata. Lui vuole il riposo assoluto: sdraio, libro, il massimo sforzo è alzare un braccio per ordinare un gelato. Lei vuole il movimento: alzarsi presto, vedere, capire, {3}. Dopo un'ora di trattativa nasce il compromesso: una settimana al mare e una in città. «Ma il mare dove lo scegliamo?» — qui inizia il secondo {4} — «Io vorrei la cala selvaggia, senza ombrelloni». — «E io il lido con il bar, i gelati e i bagni sicuri per i bambini». Finale classico: prenoteranno un posto a metà strada, con un po' di {5} per tutti — e nessuno del tutto felice, come nelle migliori tradizioni familiari.", es: "La discusión sobre los planes de verano es un rito de pareja antiguo como las procesiones sicilianas: cada año igual, cada año apasionado. Él quiere el descanso absoluto: tumbona, libro, el máximo esfuerzo es levantar un brazo para pedir un helado. Ella quiere el movimiento: madrugar, ver, entender, descubrir. Tras una hora de negociación nace el compromiso: una semana en el mar y una en la ciudad. «Pero ¿el mar dónde lo elegimos?» —aquí empieza el segundo round—. «Yo quisiera la cala salvaje, sin sombrillas». — «Y yo el lido con bar, helados y baños seguros para los niños». Final clásico: reservarán un lugar a medio camino, con un poco de todo para todos —y nadie del todo feliz, como en las mejores tradiciones familiares." },
      ],
      gaps: [
        { options: ["treno", "nave da crociera", "camper"], answer: 0, why: "Ciudades, museos: recorrido" },
        { options: ["processioni", "pomodori", "canzoni"], answer: 0, why: "Rito repetido y apasionado" },
        { options: ["scoprire", "riposare", "dormire"], answer: 0, why: "Ella quiere movimiento" },
        { options: ["round", "capitolo", "viaggio"], answer: 0, why: "Segunda fase de la negociación" },
        { options: ["tutto", "niente", "rumore"], answer: 0, why: "Compromiso que contenta a medias" },
      ],
    },
  ],
  "cu-a2-07": [
    {
      id: "cz-a2-07-1", title: "Il colloquio di Marta", titleEs: "La entrevista de Marta", minutes: 3,
      paragraphs: [
        { it: "Marta aveva preparato il colloquio per settimane: si era esercitata davanti allo specchio, aveva stampato il {1} tre volte e imparato a memoria l'azienda. Ma entrando nell'ufficio, con il cuore che batteva, ha dimenticato tutto.", es: "Marta había preparado la entrevista durante semanas: se ejercitó frente al espejo, imprimió el currículum tres veces y memorizó la empresa. Pero al entrar a la oficina, con el corazón latiendo, olvidó todo." },
        { it: "«Mi parli di lei», ha detto il selezionatore. Marta ha aperto la bocca e, sorprendendosi, ha parlato con {2}: del suo percorso, dei suoi errori, di cosa aveva imparato da ogni esperienza. Quando è uscita, era convinta di aver rovinato tutto: aveva persino ammesso di essere stata licenziata una volta. Due giorni dopo, la telefonata: «Abbiamo scelto lei. Sa perché? Perché tutti gli altri dicevano di essere {3}. Lei invece ci ha raccontato com'è davvero: uno che sbaglia e cresce. Per noi è molto più {4}». La lezione di Marta è diventata il suo consiglio per ogni colloquio: preparati tutto, ma poi lasciati andare con onestà. Le {5} si imparano; la sincerità no.", es: "«Hábleme de usted», dijo el seleccionador. Marta abrió la boca y, para su sorpresa, habló con naturalidad: de su recorrido, de sus errores, de lo que había aprendido de cada experiencia. Cuando salió, estaba convencida de haberlo arruinado todo: incluso había admitido haber sido despedida una vez. Dos días después, la llamada: «Hemos elegido a usted. ¿Sabe por qué? Porque todos los demás decían ser perfectos. Usted en cambio nos contó cómo es de verdad: alguien que se equivoca y crece. Para nosotros es mucho más valioso». La lección de Marta se convirtió en su consejo para cada entrevista: prepara todo, pero luego suéltate con honestidad. Las respuestas se aprenden; la sinceridad no." },
      ],
      gaps: [
        { options: ["curriculum", "contratto", "diploma"], answer: 0, why: "Documento clave de una entrevista" },
        { options: ["naturalità", "rabbia", "fretta"], answer: 0, why: "Sorpresa agradable al hablar" },
        { options: ["perfetti", "licenziati", "in ritardo"], answer: 0, why: "Contraste con la honestidad" },
        { options: ["utile", "costoso", "rischioso"], answer: 0, why: "Valor de la autenticidad" },
        { options: ["risposte", "domande", "pause"], answer: 0, why: "Se memorizan; la sinceridad no" },
      ],
    },
    {
      id: "cz-a2-07-2", title: "Il primo giorno di lavoro", titleEs: "El primer día de trabajo", minutes: 3,
      paragraphs: [
        { it: "Il primo giorno in ufficio è come il primo giorno di scuola, ma con la {1} in più: tutti fingono di non guardarti, e tutti ti guardano. Mi avevano detto: presentati alle nove, chiedi di Rossella. Rossella si rivela una {2} di cinquant'anni che parla a macchinella e conosce tutto e tutti.", es: "El primer día en la oficina es como el primer día de escuela, pero con la ansiedad añadida: todos fingen no mirarte, y todos te miran. Me habían dicho: preséntate a las nueve, pregunta por Rossella. Rossella resulta ser una señora de cincuenta años que habla a máquina y conoce todo y a todos." },
        { it: "In mezz'ora mi ha spiegato la macchinetta del caffè, il bagno, la {3} della pausa pranzo, chi evitare e chi cercare. «Vedi quello? — sussurra indicando un ufficio — Il direttore. Bravissimo, ma il lunedì mattina non parlargli». A mezzogiorno, Rossella mi ha portato a mangiare con il suo gruppo: mi hanno fatto domande, risate, e qualcuno mi ha già {5} per la partita di calcetto del giovedì. Quando sono uscito, alle sei, mi sono accorto di una cosa strana: non avevo quasi lavorato, ma mi sentivo già parte di qualcosa. Perché il primo giorno non serve capire il lavoro: serve capire i {4}. E quello, Rossella lo insegna meglio di qualsiasi manuale.", es: "En media hora me explicó la máquina de café, el baño, la fila de la pausa del almuerzo, a quién evitar y a quién buscar. «¿Ves aquel? —susurra señalando una oficina—. El director. Buenísimo, pero el lunes por la mañana no le hables». Al mediodía, Rossella me llevó a comer con su grupo: me hicieron preguntas, risas, y alguien ya me había fichado para el partido de futbito del jueves. Cuando salí, a las seis, me di cuenta de algo extraño: casi no había trabajado, pero ya me sentía parte de algo. Porque el primer día no sirve para entender el trabajo: sirve para entender a las personas. Y eso, Rossella lo enseña mejor que cualquier manual." },
      ],
      gaps: [
        { options: ["ansia", "felicità", "reputazione"], answer: 0, why: "Todos miran sin mirar" },
        { options: ["signora", "bambina", "studentessa"], answer: 0, why: "Cincuenta años, habla rápido" },
        { options: ["fila", "regola", "multa"], answer: 0, why: "Costumbre de la pausa" },
        { options: ["colleghi", "computer", "Clienti"], answer: 0, why: "Lección del primer día" },
        { options: ["cercato", "multato", "licenziato"], answer: 0, why: "Invitación al calcetto" },
      ],
    },
    {
      id: "cz-a2-07-3", title: "Un lavoro che cambia", titleEs: "Un trabajo que cambia", minutes: 3,
      paragraphs: [
        { it: "Diego faceva il bancario: uno stipendio fisso, la cravatta, l'ufficio con l'aria condizionata. Tutti dicevano che era {1}. Ma lui, ogni domenica sera, sentiva un nodo allo stomaco: il lunedì stava arrivando.", es: "Diego era bancario: un sueldo fijo, la corbata, la oficina con aire acondicionado. Todos decían que era afortunado. Pero él, cada domingo por la noche, sentía un nudo en el estómago: el lunes se acercaba." },
        { it: "A trentacinque anni ha fatto la cosa che nessuno si aspettava: ha lasciato la banca e ha aperto una {2}. Sì, come sua nonna. I primi sei mesi sono stati un disastro: si alzava alle cinque, impastava, e alle sette della sera contava gli incassi con il fiato corto. La gente del quartiere, all'inizio, lo guardava con {3}: «Il bancario che fa il panettiere?». Poi, piano piano, il pane ha cominciato a parlare: lievito madre, farine antiche, forme che profumavano come una volta. Dopo un anno, la domenica sera Diego dorme sereno. Guadagna meno? Molto meno. Ma quando gli chiedono se rimpiange la banca, mostra le mani infarinate e risponde: «Rimpiango la {4}, non la cravatta. Il pane esce dal forno alle sette: almeno lui, i miei tempi li {5}».", es: "A los treinta y cinco años hizo lo que nadie esperaba: dejó el banco y abrió una panadería. Sí, como su abuela. Los primeros seis meses fueron un desastre: se levantaba a las cinco, amasaba, y a las siete de la tarde contaba los ingresos con fatiga. La gente del barrio, al principio, lo miraba con lástima: «¿El bancario que hace de panadero?». Luego, poco a poco, el pan empezó a hablar: masa madre, harinas antiguas, piezas que olían como antes. Después de un año, el domingo por la noche Diego duerme sereno. ¿Gana menos? Mucho menos. Pero cuando le preguntan si extraña el banco, muestra las manos enharinadas y responde: «Extraño la seguridad, no la corbata. El pan sale del horno a las siete: al menos él, mis tiempos los respeta»." },
      ],
      gaps: [
        { options: ["fortunato", "pazzo", "ricchissimo"], answer: 0, why: "Sueldo fijo + estabilidad" },
        { options: ["panetteria", "banca concorrente", "scuola di cucina"], answer: 0, why: "Como su abuela: oficio del pan" },
        { options: ["pietà", "invidia", "indifferenza"], answer: 0, why: "Caída de status percibida" },
        { options: ["sicurezza", "vacanza", "casa"], answer: 0, why: "Lo que se pierde al arriesgar" },
        { options: ["rispetta", "ignora", "allunga"], answer: 0, why: "Cierre: el horno es puntual" },
      ],
    },
  ],
  "cu-a2-08": [
    {
      id: "cz-a2-08-1", title: "Posso lasciare un messaggio?", titleEs: "¿Puedo dejar un mensaje?", minutes: 2,
      paragraphs: [
        { it: "«Pronto, studio dentistico Rossi? Buongiorno, chiamo per l'appuntamento delle sedici». — «Mi dispiace, la dottoressa è con un {1}. Chi parla?» — «Sono Laura Bianchi, paziente delle sedici».", es: "«¿Sí, consultorio dental Rossi? Buenos días, llamo por el turno de las dieciséis». — «Lo siento, la doctora está con un paciente. ¿Quién habla?» — «Soy Laura Bianchi, paciente de las dieciséis»." },
        { it: "«Vuole lasciare un {2}? La richiamerà appena può». — «Sì, grazie: posso anticipare a domani, qualunque orario. Oppure, se domani è impossibile, va bene anche {3} la visita di venerdì. Il mio numero è 333-…». — «Ho segnato tutto, signora. Un'ultima cosa: le ricordo che in caso di {4} entro quarantotto ore, la tariffa viene trattenuta». — «Capisco, nessun problema. Ah, se posso chiedere: la dottoressa Rossi è la stessa che lavorava in via Roma?» — «No, quella era la {5}. Le faccio avere il numero nuovo».", es: "«¿Quiere dejar un mensaje? La llamará en cuanto pueda». — «Sí, gracias: puedo adelantar para mañana, cualquier horario. O, si mañana es imposible, también puedo retrasar la visita del viernes. Mi número es 333-…». — «He anotado todo, señora. Una última cosa: le recuerdo que en caso de cancelación dentro de las cuarenta y ocho horas, la tarifa se retiene». — «Entiendo, ningún problema. Ah, si puedo preguntar: ¿la doctora Rossi es la misma que trabajaba en la vía Roma?» — «No, esa era la colega. Le hago llegar el número nuevo»." },
      ],
      gaps: [
        { options: ["paziente", "collega", "fornitore"], answer: 0, why: "Doctora ocupada atendiendo" },
        { options: ["messaggio", "acconto", "biglietto da visita"], answer: 0, why: "Ofrecimiento de la recepcionista" },
        { options: ["ritardare", "anticipare ancora", "annullare del tutto"], answer: 0, why: "Alternativa si mañana no puede" },
        { options: ["disdetta", "visita", "fattura"], answer: 0, why: "Cancelación con cargo" },
        { options: ["collega", "mamma", "concorrente storica"], answer: 0, why: "Otra dentista en vía Roma" },
      ],
    },
    {
      id: "cz-a2-08-2", title: "La segreteria telefonica", titleEs: "El contestador automático", minutes: 2,
      paragraphs: [
        { it: "«Pronto? Pronto?!» — niente. La {1} telefonica scatta sempre nel momento peggiore. «Ciao, sono Marco. Non posso rispondere in questo momento. Lasciate un {2} dopo il segnale acustico… bip».", es: "«¿Sí? ¡¿Sí?!» — nada. El contestador automático salta siempre en el peor momento. «Hola, soy Marco. No puedo responder en este momento. Dejen un mensaje después de la señal… bip»." },
        { it: "Chi non ha mai parlato a una segreteria, non conosce la vera {3}: la voce registrata che ti ascolta senza giudicare, il tempo che si ferma, il panico di non sapere cosa dire. «Ciao Marco, sono… ehm… senti, ti chiamavo per… ah, non importa, richiamo io. Ciao». E il giorno dopo: «Non ho visto nessuna chiamata {4}». Perché è tipico degli italiani non ascoltare la segreteria? La risposta degli esperti è sociologica: in Italia il telefono è {5}, non messaggio. Una chiamata persa si ricambia, non si ascolta: il bip è per gli stranieri e per le aziende.", es: "Quien nunca habló a un contestador no conoce la verdadera timidez: la voz grabada que te escucha sin juzgar, el tiempo que se detiene, el pánico de no saber qué decir. «Hola Marco, soy… ehm… mira, te llamaba para… ah, no importa, yo vuelvo a llamar. Adiós». Y al día siguiente: «No vi ninguna llamada perdida». ¿Por qué es típico de los italianos no escuchar el contestador? La respuesta de los expertos es sociológica: en Italia el teléfono es diálogo, no mensaje. Una llamada perdida se devuelve, no se escucha: el bip es para los extranjeros y para las empresas." },
      ],
      gaps: [
        { options: ["segreteria", "bolletta", "linea"], answer: 0, why: "Mensaje grabado con bip" },
        { options: ["messaggio", "numero", "bacio"], answer: 0, why: "Instrucción tras la señal" },
        { options: ["timidezza", "felicità", "fortuna"], answer: 0, why: "Pánico de no saber qué decir" },
        { options: ["persa", "interrotta", "internazionale"], answer: 0, why: "Marco no revisa el teléfono" },
        { options: ["dialogo", "monologo", "spettacolo"], answer: 0, why: "Cultura de la llamada devuelta" },
      ],
    },
    {
      id: "cz-a2-08-3", title: "Il centralino del comune", titleEs: "La centralita del municipio", minutes: 3,
      paragraphs: [
        { it: "Chiamare un ufficio pubblico in Italia è un rito di pazienza. Primo tentativo: {1}. Secondo: occupato. Terzo: finalmente squilla… e risponde una voce registrata: «Lei è il numero otto in {2}».", es: "Llamar a una oficina pública en Italia es un rito de paciencia. Primer intento: nada. Segundo: ocupado. Tercero: finalmente suena… y responde una voz grabada: «Usted es el número ocho en fila»." },
        { it: "La musichetta d'attesa è sempre la stessa, un valzer che entra nelle orecchie e non esce più. Dopo dieci minuti, la voce: «Ufficio anagrafe, dica». Spieghi tutto: il {3} della residenza, il modulo, la data. «Deve parlare con l'ufficio protocollo, le passo l'interno». Musichetta. «Ufficio protocollo, dica». Rispieghi tutto da capo. «Ah no, quello è l'ufficio anagrafe, le passo l'interno». E qui la scena che ogni italiano conosce: il {4} infinito tra uffici, mentre il telefono scalda l'orecchio. Finalmente, dopo quaranta minuti, la signora Giuliana dell'ufficio giusto risolve tutto in due minuti: «Mi mandi il modulo via {5} e vedrà che in una settimana è tutto fatto». Morale: negli uffici pubblici italiani, la difficoltà non è mai la pratica — è arrivare alla persona giusta.", es: "La musiquita de espera es siempre la misma, un vals que entra en los oídos y ya no sale. Después de diez minutos, la voz: «Oficina de registro, diga». Explicas todo: el cambio de residencia, el formulario, la fecha. «Debe hablar con la oficina de protocolo, le paso la extensión». Musiquita. «Oficina de protocolo, diga». Vuelve a explicar todo de nuevo. «Ah no, eso es la oficina de registro, le paso la extensión». Y aquí la escena que cada italiano conoce: el ping-pong infinito entre oficinas, mientras el teléfono calienta el oído. Finalmente, después de cuarenta minutos, la señora Giuliana de la oficina correcta resuelve todo en dos minutos: «Envíeme el formulario por correo electrónico y verá que en una semana está todo hecho». Moral: en las oficinas públicas italianas, la dificultad nunca es el trámite — es llegar a la persona correcta." },
      ],
      gaps: [
        { options: ["libero", "nessuna risposta", "occupato"], answer: 0, why: "Secuencia de intentos fallidos" },
        { options: ["fila", "camera", "pagina"], answer: 0, why: "Número de espera" },
        { options: ["cambio", "furto", "battesimo"], answer: 0, why: "Trámite típico de anagrafe" },
        { options: ["ping-pong", "viaggio", "silenzio"], answer: 0, why: "Transferencias entre oficinas" },
        { options: ["email", "posta ordinaria", "fax notarile"], answer: 0, why: "Solución moderna y simple" },
      ],
    },
  ],
  "cu-a2-09": [
    {
      id: "cz-a2-09-1", title: "Quale telefono comprare?", titleEs: "¿Qué teléfono comprar?", minutes: 2,
      paragraphs: [
        { it: "«Allora, devo cambiare telefono. Il mio ha quattro anni e la {1} dura mezza giornata». — «Guarda, io ho preso quello nuovo, il modello con la memoria grande». — «E come ti trovi? Vale la {2}?»", es: "«Bueno, tengo que cambiar de teléfono. El mío tiene cuatro años y la batería dura media jornada». — «Mira, yo tomé el nuevo, el modelo con la memoria grande». — «¿Y cómo te va? ¿Vale la pena?»" },
        { it: "«Per il lavoro è perfetto: la fotocamera è {3}, il display enorme. Però ti dico la verità: il giorno dopo l'acquisto mi sono già dimenticato della differenza». — «Quindi dici che…». — «Dico che se il tuo funziona ancora, cambia solo la {6} e tienilo altri due anni. Se invece vuoi trattarti bene, prendi quello di un anno fa: costa la {4} e fa le stesse cose». — «E i falsi cinesi che costano la metà?» — «Lascia stare: risparmi oggi e {5} domani».", es: "«Para el trabajo es perfecto: la cámara es increíble, la pantalla enorme. Pero te digo la verdad: al día siguiente de la compra ya me había olvidado de la diferencia». — «Entonces dices que…». — «Digo que si el tuyo todavía funciona, cambia solo la batería y quédatelo otros dos años. Si en cambio quieres darte un gusto, toma el del año pasado: cuesta la mitad y hace las mismas cosas». — «¿Y los imitación chinos que cuestan la mitad?» — «Déjalos: ahorras hoy y lloras mañana»." },
      ],
      gaps: [
        { options: ["batteria", "fotocamera", "cover"], answer: 0, why: "Dura media jornada: energía" },
        { options: ["pena", "vacanza", "multa"], answer: 0, why: "¿Merece la inversión?" },
        { options: ["incredibile", "rotta", "normale"], answer: 0, why: "Elogio del modelo nuevo" },
        { options: ["metà", "stessa cifra", "triplo"], answer: 0, why: "Modelo anterior más barato" },
        { options: ["piangi", "ridi", "guadagni"], answer: 0, why: "Consecuencia de la mala compra" },
        { options: ["batteria", "memoria", "cover"], answer: 0, why: "Mismo componente mencionado antes" },
      ],
    },
    {
      id: "cz-a2-09-2", title: "Il quartiere ideale", titleEs: "El barrio ideal", minutes: 3,
      paragraphs: [
        { it: "Cercando casa, Chiara e Paolo compilavano la lista del \"quartiere ideale\": vicino al metro, con il mercato, parchi per i figli, e il {1} sotto casa — perché in Italia anche questo è un servizio primario.", es: "Buscando casa, Chiara y Paolo redactaban la lista del \"barrio ideal\": cerca del metro, con el mercado, parques para los hijos, y el bar en la esquina — porque en Italia también esto es un servicio primario." },
        { it: "Il primo quartiere aveva tutto ma i prezzi erano {2}: «Qui compriamo il bagno e non la casa», ha detto Paolo. Il secondo era economico ma lontanissimo: «Arriverei al lavoro {3} come un maratoneta». Il terzo era perfetto: verde, silenzioso, convenienti. Troppo perfetto. Dopo una settimana hanno scoperto perché costava meno: di notte, ogni dieci minuti, passava il {4} della ferrovia, con il suo saluto di ottanta decibel. Hanno firmato lo stesso. «Ci abitueremo» ha detto Chiara. Tre mesi dopo, gli ospiti chiedono come fanno a dormire con quel rumore, e Paolo risponde serio: «Quale rumore?». L'adattamento, in amore come nei quartieri, è questione di {5}.", es: "El primer barrio lo tenía todo pero los precios eran imposibles: «Aquí compramos el baño y no la casa», dijo Paolo. El segundo era económico pero lejísimos: «Llegaría al trabajo sudado como un maratonista». El tercero era perfecto: verde, silencioso, bien conectado. Demasiado perfecto. Después de una semana descubrieron por qué costaba menos: de noche, cada diez minutos, pasaba el tren de la vía férrea, con su saludo de ochenta decibeles. Firmaron igual. «Nos acostumbraremos», dijo Chiara. Tres meses después, los invitados preguntan cómo hacen para dormir con ese ruido, y Paolo responde serio: «¿Qué ruido?». La adaptación, en el amor como en los barrios, es cuestión de tiempo." },
      ],
      gaps: [
        { options: ["bar", "carrozzeria", "nightclub"], answer: 0, why: "Servicio primario italiano" },
        { options: ["impossibili", "onesti", "regalati"], answer: 0, why: "\"Compramos el baño\"" },
        { options: ["sudato", "riposato", "in anticipo"], answer: 0, why: "Distancia y cansancio" },
        { options: ["treno", "tram", "cammello"], answer: 0, why: "Ruido de la vía férrea" },
        { options: ["tempo", "soldi", "fortuna"], answer: 0, why: "Cierre: adaptarse lleva su fase" },
      ],
    },
    {
      id: "cz-a2-09-3", title: "Meglio il treno o l'aereo?", titleEs: "¿Mejor el tren o el avión?", minutes: 3,
      paragraphs: [
        { it: "Per andare da Roma a Milano, il dilemma è classico: aereo o treno? L'aereo vola in un'ora e mezza, il treno ne impiega tre. Sembra una vittoria {1}, ma il calcolo vero è un altro.", es: "Para ir de Roma a Milán, el dilema es clásico: ¿avión o tren? El avión vuela en una hora y media, el tren tarda tres. Parece una victoria clara, pero el cálculo verdadero es otro." },
        { it: "L'aeroporto è fuori città: per arrivare in tempo bisogna uscire due ore prima, più il {2} di sicurezza, più l'imbarco, più il ritiro bagagli all'arrivo, più il viaggio dallo scalo al centro. Totale: cinque ore di viaggio per novanta minuti di volo. Il treno, invece: arrivi in stazione dieci minuti prima, sali, ti siedi, e in tre ore sei al centro di Milano. Senza {3}, senza turbolenze, con il telefono sempre acceso e la {4} che funziona. C'è anche l'aspetto ecologico: il treno emette una frazione della CO₂ dell'aereo. Il verdetto degli esperti di viaggio: sotto i mille chilometri, in Europa, il treno vince quasi sempre. L'aereo rimane {5} solo quando il tempo è davvero poco o la distanza davvero tanta. E poi, c'è un piacere che l'aereo non conosce: guardare l'Italia scorrere dal finestrino, dal mare ai monti, mentre sorseggi un caffè in tazza vera.", es: "El aeropuerto está fuera de la ciudad: para llegar a tiempo hay que salir dos horas antes, más el control de seguridad, más el embarque, más el retiro de equipaje a la llegada, más el trayecto del aeropuerto al centro. Total: cinco horas de viaje por noventa minutos de vuelo. El tren, en cambio: llegas a la estación diez minutos antes, subes, te sientas, y en tres horas estás en el centro de Milán. Sin controles, sin turbulencias, con el teléfono siempre encendido y la conexión que funciona. Está también el aspecto ecológico: el tren emite una fracción del CO₂ del avión. El veredicto de los expertos en viajes: por debajo de los mil kilómetros, en Europa, el tren gana casi siempre. El avión sigue siendo insustituible solo cuando el tiempo es realmente poco o la distancia realmente grande. Y luego, hay un placer que el avión no conoce: mirar Italia pasar por la ventanilla, del mar a las montañas, mientras sorbes un café en taza de verdad." },
      ],
      gaps: [
        { options: ["chiara", "ingiusta", "sospetta"], answer: 0, why: "Aparente superioridad aérea" },
        { options: ["controllo", "pranzo", "biglietto"], answer: 0, why: "Filtro del aeropuerto" },
        { options: ["controlli", "panorami", "soste"], answer: 0, why: "Ventaja ferroviaria" },
        { options: ["connessione", "carrozza ristorante chiusa", "aria condizionata rotta"], answer: 0, why: "Trabajar conectado a bordo" },
        { options: ["insostituibile", "obsoleto", "proibito"], answer: 0, why: "Cuándo aún gana el avión" },
      ],
    },
  ],
  "cu-a2-10": [
    {
      id: "cz-a2-10-1", title: "La domenica in cucina", titleEs: "El domingo en la cocina", minutes: 3,
      paragraphs: [
        { it: "Il rito della domenica comincia alle otto del mattino, quando il {1} della nonna si accende. Non esiste colazione al bar: si prepara la pasta fresca, e si comincia presto, perché la sfoglia va stesa a mano.", es: "El rito del domingo comienza a las ocho de la mañana, cuando el fuego de la abuela se enciende. No existe el desayuno en el bar: se prepara la pasta fresca, y se empieza temprano, porque la masa hay que estirarla a mano." },
        { it: "Io e le mie cugine avevamo compiti precisi: una tiene la {2}, l'altra versa la farina, io rompo le uova. La nonna comandava come un generale: «Più piano! Il mattarello non è una mazza!». Le sue mani, piene di farina, sapevano capire al {3} quando la sfoglia era pronta: «Vedi? Si vede il tavolo attraverso: questa è la misura giusta». A mezzogiorno il ragù cuoceva da tre ore, i tortellini aspettavano sul {4} coperti da un canovaccio, e tutta la casa profumava di parmigiano e brodo. Solo anni dopo, vivendo lontano, ho capito cosa stava cucinando davvero la nonna: non erano tortellini, era la {5} — quel legame che si impasta, si stende e non si spezza mai.", es: "Yo y mis primas teníamos tareas precisas: una sostiene la tabla, la otra vierte la harina, yo rompo los huevos. La abuela dirigía como una general: «¡Más despacio! ¡El rodillo no es una maza!». Sus manos, llenas de harina, sabían entender al toque cuándo la masa estaba lista: «¿Ven? Se ve la mesa a través: esa es la medida justa». Al mediodía el ragú cocía desde hacía tres horas, los tortellini esperaban en la mesa cubiertos por un paño, y toda la casa olía a parmesano y caldo. Solo años después, viviendo lejos, entendí qué estaba cocinando realmente la abuela: no eran tortellini, era la familia — ese lazo que se amasa, se estira y nunca se rompe." },
      ],
      gaps: [
        { options: ["fornello", "televisione", "campanello"], answer: 0, why: "Cocinar desde temprano" },
        { options: ["spianatoia", "borsa", "sedia"], answer: 0, why: "Superficie para la masa" },
        { options: ["tocco", "telefonino", "colore"], answer: 0, why: "Manos expertas: sentido del tacto" },
        { options: ["vassoio", "tavolo", "davanzale"], answer: 0, why: "Lugar de espera de la pasta" },
        { options: ["famiglia", "ricetta", "festa"], answer: 0, why: "Metáfora final del texto" },
      ],
    },
    {
      id: "cz-a2-10-2", title: "La cena tra amici", titleEs: "La cena entre amigos", minutes: 3,
      paragraphs: [
        { it: "Organizzare una cena tra amici sembra semplice; in realtà è una {1} diplomatica. Chi cucina? Chi porta il dolce? Chi, misteriosamente, arriva sempre quando tutto è pronto e se ne va quando ci sono i piatti da lavare?", es: "Organizar una cena entre amigos parece simple; en realidad es una negociación diplomática. ¿Quién cocina? ¿Quién trae el postre? ¿Quién, misteriosamente, llega siempre cuando todo está listo y se va cuando hay platos que lavar?" },
        { it: "Il nostro gruppo ha trovato una soluzione: ognuno porta un {2} preciso, assegnato a sorte. Il problema è che Paolo, il \"re del tiramisù\", ha sviluppato una teoria: il suo dolce va fatto solo con una ricetta segreta che richiede sei ore di riposo in frigo. Risultato: se la cena è di sabato, Paolo inizia il giovedì {3}. Un'altra regola non scritta: nessuno tocca la cucina della {4}. La padrona di casa dirige i fuochi come un direttore d'orchestra, e guai a chi le propone di \"aiutare\" con il sale. Ma la regola più sacra è un'altra: alla fine, tutti restano a tavola fino a mezzanotte a parlare, ridere, discutere di calcio e di politica. Perché in Italia la cena tra amici non è {5}: è un evento sociale che si chiude quando l'ultimo caffè è freddo e l'ultimo argomento è esaurito.", es: "Nuestro grupo encontró una solución: cada uno lleva un plato preciso, asignado por sorteo. El problema es que Paolo, el \"rey del tiramisú\", desarrolló una teoría: su postre debe hacerse solo con una receta secreta que requiere seis horas de reposo en la nevera. Resultado: si la cena es el sábado, Paolo empieza el jueves por la tarde. Otra regla no escrita: nadie toca la cocina de la anfitriona. La dueña de casa dirige los fuegos como una directora de orquesta, y ay de quien le proponga \"ayudar\" con la sal. Pero la regla más sagrada es otra: al final, todos se quedan en la mesa hasta medianoche hablando, riendo, discutiendo de fútbol y de política. Porque en Italia la cena entre amigos no es nutrición: es un evento social que se cierra cuando el último café está frío y el último tema está agotado." },
      ],
      gaps: [
        { options: ["trattativa", "gara", "cerimonia"], answer: 0, why: "Negociación de tareas" },
        { options: ["piatto", "regalo", "bambino"], answer: 0, why: "Sistema asignado por sorteo" },
        { options: ["pomeriggio", "sera tardi", "al buio"], answer: 0, why: "Reposo de seis horas" },
        { options: ["padrona di casa", "vicina", "nonna di tutti"], answer: 0, why: "Autoridad sobre los fogones" },
        { options: ["nutrizione", "obbligo", "esperimento"], answer: 0, why: "Contraste con evento social" },
      ],
    },
    {
      id: "cz-a2-10-3", title: "Il segreto della pizza", titleEs: "El secreto de la pizza", minutes: 3,
      paragraphs: [
        { it: "Ho seguito un corso di pizza in una vecchia bottega di Napoli. Il maestro pizzaiolo, Gennaro, ha iniziato con una sorpresa: «La pizza non nasce in {1}. Nasce qui». E ha indicato il suo {2}.", es: "Seguí un curso de pizza en un viejo taller de Nápoles. El maestro pizzaiolo, Gennaro, empezó con una sorpresa: «La pizza no nace en el horno. Nace aquí». Y señaló su banco de trabajo." },
        { it: "«L'impasto è vivo — spiegava, mentre le sue mani lavoravano —. La farina, l'acqua, il sale e il lievito sono una {3}: devi rispettare i loro tempi. Se hai fretta, il lievito si offende e la pizza diventa un mattone». Abbiamo imparato a spingere l'aria dal centro verso il bordo, a stendere la pasta con le dita, mai col mattarello. «Il mattarello — diceva Gennaro con orrore — uccide l'aria, e senza aria non c'è cornicione». Dopo tre ore di lavoro, la prima pizza mia è uscita dal forno: storta, con il pomodoro sfuggito da un lato, un po' bruciata sotto. Gennaro l'ha guardata, poi ha guardato me, e ha detto la frase che ho incorniciato mentalmente: «È una pizza {4}. Perfetta non è — ma la riconoscerei tra mille come tua». Perché il segreto, in cucina come nella vita, non è la perfezione: è il {5} che ci metti dentro, e le tue mani lo mostrano sempre.", es: "«La masa está viva —explicaba, mientras sus manos trabajaban—. La harina, el agua, la sal y la levadura son una familia: debes respetar sus tiempos. Si tienes prisa, la levadura se ofende y la pizza se convierte en un ladrillo». Aprendimos a empujar el aire del centro hacia el borde, a estirar la masa con los dedos, nunca con el rodillo. «El rodillo —decía Gennaro con horror— mata el aire, y sin aire no hay borde». Después de tres horas de trabajo, mi primera pizza salió del horno: torcida, con el tomate escapado de un lado, un poco quemada por debajo. Gennaro la miró, luego me miró a mí, y dijo la frase que enmarqué mentalmente: «Es una pizza imperfecta. Perfecta no es — pero la reconocería entre mil como tuya». Porque el secreto, en la cocina como en la vida, no es la perfección: es el amor que le pones dentro, y tus manos siempre lo muestran." },
      ],
      gaps: [
        { options: ["forno", "America", "scatola"], answer: 0, why: "Contraste con el banco" },
        { options: ["banco di lavoro", "furgone", "giardino"], answer: 0, why: "Lugar donde nace la masa" },
        { options: ["famiglia", "squadra", "cassa"], answer: 0, why: "Ingredientes que conviven" },
        { options: ["imperfetta", "cotta male", "napoletana"], answer: 0, why: "Descripción honesta del resultado" },
        { options: ["amore", "denaro", "tempo libero"], answer: 0, why: "Moraleja final del maestro" },
      ],
    },
  ],
  "cu-a2-11": [
    {
      id: "cz-a2-11-1", title: "Promesse da campagna elettorale", titleEs: "Promesas de campaña electoral", minutes: 2,
      paragraphs: [
        { it: "«Se vinceremo, entro due anni costruiremo la nuova scuola, sistemeremo tutte le strade e ridurremo le tasse». Il candidato sorride dal palco. Il pubblico applaude. Io, in fondo alla {1}, penso alla storia del mio paese.", es: "«Si ganamos, en dos años construiremos la escuela nueva, arreglaremos todas las calles y bajaremos los impuestos». El candidato sonríe desde el estrado. El público aplaude. Yo, al fondo de la sala, pienso en la historia de mi pueblo." },
        { it: "La scuola \"nuova\" è nel programma elettorale da vent'anni: ogni sindaco la promette, nessuno l'ha mai costruita. Le strade vengono aggiustate ogni primavera, prima delle elezioni, e si rompono ogni autunno. Le tasse, poi, scendono sempre sulla carta e salgono sempre nel {2}. Eppure la gente continua a credere, ad applaudire, a sperare. Forse perché la speranza, in politica, funziona come il meteo: la {3} si sbaglia spesso, ma tutti continuano a guardarla. O forse perché, tra tutte le promesse ascoltate, qualcuna — ogni tanto — qualcuno, prima o poi, la mantiene davvero. E quel qualcuno basta a tenere viva la {4} democratica. Il segreto, mi ha detto una volta un vecchio assessore, è semplice: «Le promesse sono come i matrimoni: il problema non è farle, è {5}».", es: "La escuela \"nueva\" está en el programa electoral desde hace veinte años: cada alcalde la promete, nadie la construyó jamás. Las calles se arreglan cada primavera, antes de las elecciones, y se rompen cada otoño. Los impuestos, luego, bajan siempre en el papel y suben siempre en recibo. Y sin embargo la gente sigue creyendo, aplaudiendo, esperando. Quizá porque la esperanza, en política, funciona como el clima: el pronóstico se equivoca a menudo, pero todos siguen mirándolo. O quizá porque, entre todas las promesas escuchadas, alguna — de vez en cuando — alguien, tarde o temprano, la cumple de verdad. Y ese alguien basta para mantener viva la fe democrática. El secreto, me dijo una vez un viejo concejal, es simple: «Las promesas son como los matrimonios: el problema no es hacerlas, es mantenerlas»." },
      ],
      gaps: [
        { options: ["piazza", "sala", "scuola"], answer: 0, why: "Escenario del mitin" },
        { options: ["bollettino", "dopolavoro", "progetto"], answer: 0, why: "Donde suben los impuestos" },
        { options: ["previsione", "luna", "bussola"], answer: 0, why: "Analogía con el meteo" },
        { options: ["fede", "battaglia", "finestra"], answer: 0, why: "Lo que mantiene la democracia" },
        { options: ["mantenerle", "ricordarle", "scriverle"], answer: 0, why: "Moraleja del concejal" },
      ],
    },
    {
      id: "cz-a2-11-2", title: "Un patto tra amici", titleEs: "Un pacto entre amigos", minutes: 3,
      paragraphs: [
        { it: "A sedici anni, io e Gianni facemmo un patto solenne: chiunque dei due fosse diventato famoso, avrebbe {1} l'altro nel suo primo discorso pubblico. Giurammo davanti a una pizza margherita e una aranciata: il patto più sacro che conoscevamo.", es: "A los dieciséis años, Gianni y yo hicimos un pacto solemne: quienquiera de los dos que se volviera famoso, mencionaría al otro en su primer discurso público. Juramos frente a una pizza margherita y una naranjada: el pacto más sagrado que conocíamos." },
        { it: "Gli anni passarono. Io diventai geometra, Gianni invece cominciò a suonare nei locali. Una sera, trent'anni dopo, la televisione accesa mentre cucinavo: «E il premio della critica va a… Giovanni Ferretti!». Il nome d'arte era cambiato, ma la {2} era quella. Sul palco, Gianni stringeva il premio e iniziava il discorso: «Grazie alla mia famiglia, ai miei musicisti…». Trattenevo il respiro. «…e a un amico che ha creduto in me quando nessuno lo faceva, un amico del cuore che oggi è qui davanti alla {3}: questo premio è anche suo». Sono caduto sulla sedia. Non era me — si riferiva al suo chitarrista — ma per dieci secondi, davanti alla televisione, avevo creduto che il patto fosse stato {4}. Non l'ho mai richiamato. Alcune promesse, forse, restano più belle nella {5}: sospese tra quello che furono e quello che avrebbero potuto essere.", es: "Los años pasaron. Yo me hice agrimensor, Gianni en cambio empezó a tocar en los locales. Una noche, treinta años después, la televisión encendida mientras cocinaba: «¡Y el premio de la crítica va a… Giovanni Ferretti!». El nombre artístico había cambiado, pero la cara era esa. En el estrado, Gianni apretaba el premio y comenzaba el discurso: «Gracias a mi familia, a mis músicos…». Contenía la respiración. «…y a un amigo que creyó en mí cuando nadie lo hacía, un amigo del corazón que hoy está aquí frente a la televisión: este premio también es suyo». Caí en la silla. No era yo — se refería a su guitarrista — pero por diez segundos, frente al televisor, había creído que el pacto se había cumplido. Nunca lo llamé. Algunas promesas, quizá, quedan más bellas en la espera: suspendidas entre lo que fueron y lo que podrían haber sido." },
      ],
      gaps: [
        { options: ["nominato", "dimenticato", "pagato"], answer: 0, why: "Contenido del pacto" },
        { options: ["faccia", "voce", "firma"], answer: 0, why: "Reconocimiento pese al nombre artístico" },
        { options: ["televisione", "giuria", "platea"], answer: 0, why: "El amigo está en casa mirando" },
        { options: ["rispettato", "tradito", "sognato"], answer: 0, why: "Creencia momentánea" },
        { options: ["attesa", "memoria", "pizza"], answer: 0, why: "Cierre melancólico del relato" },
      ],
    },
    {
      id: "cz-a2-11-3", title: "Il patto con se stessi", titleEs: "El pacto consigo mismo", minutes: 3,
      paragraphs: [
        { it: "Ogni primo di gennaio, milioni di persone firmano un contratto speciale: il patto con se stessi. «Quest'anno {1}: andrò in palestra, imparerò l'inglese, smetterò di fumare». Il contratto non ha clausole scritte, né {2} per l'inadempimento: solo la promessa, fatta davanti allo specchio.", es: "Cada primero de enero, millones de personas firman un contrato especial: el pacto consigo mismo. «Este año cambió: iré al gimnasio, aprenderé inglés, dejaré de fumar». El contrato no tiene cláusulas escritas, ni penas por incumplimiento: solo la promesa, hecha frente al espejo." },
        { it: "Le statistiche sono impietose: l'ottanta per cento dei buoni propositi {3} entro febbraio. La palestra, piena il due gennaio, torna deserta il quindici. Il corso d'inglese perde la metà della classe entro la terza lezione. Perché? Gli esperti dicono che il problema è la motivazione: le promesse fatte nell'entusiasmo del capodanno nascono già vecchie, senza un piano vero. Chi resiste, di solito, ha cambiato una cosa sola alla volta, ha trovato un {4} (un amico, un'app, un gruppo) e soprattutto non ha vietato nulla: ha sostituito. Invece di \"smetterò di fumare\", \"camminerò mezz'ora ogni giorno\"; invece di \"imparerò l'inglese\", \"guarderò una serie in inglese a cena\" Il patto con se stessi, alla fine, è come una dieta: la parola \"dieta\" è il problema. Non si tratta di {5} — si tratta di scegliere bene cosa mettere nel piatto, giorno per giorno.", es: "Las estadísticas son implacables: el ochenta por ciento de los buenos propósitos svanisce antes de febrero. El gimnasio, lleno el dos de enero, vuelve desierto el quince. El curso de inglés pierde la mitad de la clase antes de la tercera lección. ¿Por qué? Los expertos dicen que el problema es la motivación: las promesas hechas en el entusiasmo de Año Nuevo nacen ya viejas, sin un plan verdadero. Quien resiste, por lo general, cambió una sola cosa a la vez, encontró un apoyo (un amigo, una app, un grupo) y sobre todo no prohibió nada: sustituyó. En vez de \"dejaré de fumar\", \"caminaré media hora cada día\"; en vez de \"aprenderé inglés\", \"veré una serie en inglés en la cena\". El pacto consigo mismo, al final, es como una dieta: la palabra \"dieta\" es el problema. No se trata de prohibir — se trata de elegir bien qué poner en el plato, día tras día." },
      ],
      gaps: [
        { options: ["cambio", "sposo", "parto"], answer: 0, why: "Propósito de año nuevo" },
        { options: ["penalità", "ricompense", "teste"], answer: 0, why: "Contrato informal y simbólico" },
        { options: ["svanisce", "si realizza", "raddoppia"], answer: 0, why: "Gimnasio desierto en febrero" },
        { options: ["appoggio", "investimento", "capro espiatorio"], answer: 0, why: "Amigo, app o grupo" },
        { options: ["proibire", "mangiare", "risparmiare"], answer: 0, why: "Clave: sustituir, no prohibir" },
      ],
    },
  ],
  "cu-a2-12": [
    {
      id: "cz-a2-12-1", title: "Un weekend a Firenze", titleEs: "Un fin de semana en Florencia", minutes: 3,
      paragraphs: [
        { it: "Firenze in due giorni? Si può, ma serve una strategia. Giorno uno: l'alba. Il centro alle sette del mattino è un'altra città: il Duomo senza {1}, Ponte Vecchio con i fotografi solitari, l'odore dei forni che sfornano il pane.", es: "¿Florencia en dos días? Se puede, pero hace falta una estrategia. Día uno: el amanecer. El centro a las siete de la mañana es otra ciudad: el Duomo sin multitudes, el Puente Viejo con fotógrafos solitarios, el olor de los hornos que sacan el pan." },
        { it: "Prima colazione al Mercato Centrale, poi gli Uffizi con il biglietto {2} mesi prima: chi non prenota, fa due ore di fila sotto il sole. Il pomeriggio: Oltrarno, il quartiere degli artigiani, dove si vendono ancora cornici e carta marmorizzata. La sera: bistecca alla fiorentina in trattoria, ma attenzione — se il cameriere vi chiede «come la volete?», la risposta giusta è solo una: «{3}». Chiederla ben cotta, a Firenze, è quasi un reato. Giorno due: l'alba su Piazzale Michelangelo, il museo dell'Accademia per il David (prenotate!), e il pomeriggio dedicato al dolce far niente: gelato in mano, passeggiate lungo l'Arno, vetrine. Un ultimo consiglio: a Firenze i {4} si esauriscono. Prendete la {5} dei Musei se vi restano energie — e il treno per Roma partirà sempre un po' troppo presto.", es: "Desayuno en el Mercado Central, luego los Uffizi con la entrada reservada meses antes: quien no reserva, hace dos horas de fila bajo el sol. La tarde: Oltrarno, el barrio de los artesanos, donde todavía se venden marcos y papel marmolado. La noche: bisteca a la florentina en trattoria, pero atención — si el camarero les pregunta «¿cómo la quieren?», la respuesta correcta es solo una: «al sangre». Pedirla bien hecha, en Florencia, es casi un delito. Día dos: el amanecer en Piazzale Michelangelo, el museo de la Academia por el David (¡reserven!), y la tarde dedicada al dulce far niente: helado en mano, paseos junto al Arno, escaparates. Un último consejo: en Florencia los museos se agotan. Tomen el pase de los Museos si les quedan energías — y el tren para Roma partirá siempre un poco demasiado pronto." },
      ],
      gaps: [
        { options: ["folle", "musica", "pioggia"], answer: 0, why: "El centro de madrugada está vacío" },
        { options: ["prenotato", "scontato", "regalato"], answer: 0, why: "Evitar dos horas de fila" },
        { options: ["al sangue", "ben cotta", "al tartufo"], answer: 0, why: "Regla florentina de la carne" },
        { options: ["biglietti", "taxi", "ristoranti"], answer: 0, why: "\"Si esauriscono\": se agotan" },
        { options: ["passaporto", "mappa", "card"], answer: 0, why: "Pase combinado de museos" },
      ],
    },
    {
      id: "cz-a2-12-2", title: "Il Piazzale e il gelato", titleEs: "La plaza y el helado", minutes: 3,
      paragraphs: [
        { it: "Salire a Piazzale Michelangelo è un rito fiorentino. C'è chi prende le {1} dai giardini Boboli — dieci minuti di scale profumate di rose — e chi, più romantico, sale a piedi da San Niccolò al tramonto. In cima, la città si apre come un {2} dipinto: il Duomo, Palazzo Vecchio, l'Arno che taglia tutto in due.", es: "Subir a Piazzale Michelangelo es un rito florentino. Está quien toma las escaleras desde los jardines Boboli — diez minutos de escalones perfumados de rosas — y quien, más romántico, sube a pie desde San Niccolò al atardecer. Arriba, la ciudad se abre como un cuadro pintado: el Duomo, Palazzo Vecchio, el Arno que corta todo en dos." },
        { it: "La sera d'estate, il piazzale si riempie: ragazzi con la chitarra, turisti con la {3} in pose impossibili, innamorati che si baciano come se la città fosse loro. Un gelataio ambulante vende coppette con la miglior vista del mondo. «Il segreto del gelato — mi ha detto una volta, mentre lo preparava — è come il segreto di Firenze: pochi {4}, qualità, e niente fretta». Il sole scende dietro i colli, la città si accende di riflessi dorati, e per un momento — con il gelato in mano e il Duomo davanti — anche i più frettolosi capiscono cosa significa la parola \"{5}\": la dolcezza di fare niente, guardando la bellezza.", es: "La noche de verano, la plaza se llena: chicos con la guitarra, turistas con la cámara en poses imposibles, enamorados que se besan como si la ciudad fuera suya. Un heladero ambulante vende copas con la mejor vista del mundo. «El secreto del helado —me dijo una vez, mientras lo preparaba— es como el secreto de Florencia: pocos ingredientes, calidad, y nada de prisa». El sol baja detrás de las colinas, la ciudad se enciende de reflejos dorados, y por un momento — con el helado en la mano y el Duomo enfrente — también los más apurados entienden qué significa la palabra \"dolce far niente\": la dulzura de no hacer nada, mirando la belleza." },
      ],
      gaps: [
        { options: ["scale", "macchina", "funivia"], answer: 0, why: "Diez minutos de escalones" },
        { options: ["dipinto", "libro", "film"], answer: 0, why: "Vista panorámica artística" },
        { options: ["macchina fotografica", "valigia", "chitarra"], answer: 0, why: "Turistas en pose: selfies" },
        { options: ["ingredienti", "clienti", "gusti inventati"], answer: 0, why: "Regla del gelato artesanal" },
        { options: ["dolce far niente", "allegria", "vacanza"], answer: 0, why: "Concepto final del texto" },
      ],
    },
    {
      id: "cz-a2-12-3", title: "Missione Firenze: superata!", titleEs: "¡Misión Florencia: superada!", minutes: 3,
      paragraphs: [
        { it: "Tre giorni a Firenze parlando solo italiano, e con una missione: tornare con un racconto, una foto e un segreto. La missione sembrava facile; poi la città ha {1} i miei piani, come solo lei sa fare.", es: "Tres días en Florencia hablando solo italiano, y con una misión: volver con un relato, una foto y un secreto. La misión parecía fácil; luego la ciudad trastocó mis planes, como solo ella sabe hacer." },
        { it: "Il racconto è arrivato il primo giorno: un vecchio rilegatore di Via dei Neri che, dopo quarant'anni, ha ripetuto la stessa frase: «La carta ha memoria, il {2} no». La foto è stata la più difficile: volevo il David senza turisti, e alla fine l'ho scattata… {3}, al museo, con lui solo e io in silenzio. Il segreto, infine, non l'ho trovato io: me l'ha regalato la gelataia di Oltrarno, una signora che da trent'anni fa lo stesso gusto, lampone e rosmarino. «Perché non lo cambio? Perché i clienti tornano per ritrovarlo. Il segreto, caro, non è nel gusto: è nella {4}». Ho imparato più italiano in tre giorni di colloqui che in tre mesi di libri: le parole degli artigiani sono piene di concretezza, di cose che si toccano. E se la missione fosse stata un trucco? Un modo per costringermi a cercare {5}, a fare domande, ad ascoltare? Funziona, funziona benissimo. Prossima fermata: Roma.", es: "El relato llegó el primer día: un viejo encuadernador de Via dei Neri que, después de cuarenta años, repitió la misma frase: «El papel tiene memoria, el ordenador no». La foto fue la más difícil: quería el David sin turistas, y al final la tomé… de mañana, en el museo, con él solo y yo en silencio. El secreto, finalmente, no lo encontré yo: me lo regaló la heladera de Oltrarno, una señora que desde hace treinta años hace el mismo sabor, frambuesa y romero. «¿Por qué no lo cambio? Porque los clientes vuelven para encontrarlo. El secreto, querido, no está en el sabor: está en la constancia». Aprendí más italiano en tres días de conversaciones que en tres meses de libros: las palabras de los artesanos están llenas de concreción, de cosas que se tocan. ¿Y si la misión hubiera sido un truco? ¿Una forma de obligarme a buscar personas, hacer preguntas, escuchar? Funciona, funciona perfectamente. Próxima parada: Roma." },
      ],
      gaps: [
        { options: ["sconvolto", "confermato", "ignorato"], answer: 0, why: "La ciudad cambió los planes" },
        { options: ["computer", "cuoio", "telaio"], answer: 0, why: "Frase del encuadernador" },
        { options: ["all'alba", "a mezzogiorno", "per caso"], answer: 0, why: "David sin turistas" },
        { options: ["costanza", "ricetta", "fortuna"], answer: 0, why: "Lección de la heladera" },
        { options: ["persone", "alberghi", "ricordi"], answer: 0, why: "Propósito real de la misión" },
      ],
    },
  ],
};
