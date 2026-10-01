import type { CbUnit } from "../cambridge";

/* ═══ A2 · La vita quotidiana — 12 unità comunicative ════════════════ */

export const CB_A2: CbUnit[] = [
  {
    id: "cu-a2-01", n: 1, level: "A2",
    title: "Contar el pasado", titleIt: "Raccontare il passato",
    img: "/images/testi/rd-2.jpg",
    goal: "Contar qué hiciste ayer o el fin de semana con el passato próximo",
    goals: ["Formar el passato prossimo con avere y essere", "Contar un día o un finde en pasado", "Preguntar «com'è andata?»"],
    scenario: "Lunes por la mañana en la oficina. Los compañeros comentan el finde: uno fue a la playa, otro se quedó en casa. Te toca contar tu fin de semana italiano.",
    dialogue: [
      { speaker: "Sara", it: "Ciao! Com'è andato il weekend?", es: "¡Hola! ¿Cómo fue el finde?" },
      { speaker: "Tu", it: "Benissimo! Sabato sono andato al mercato con degli amici.", es: "¡Bastante bien! El sábado fui al mercado con unos amigos." },
      { speaker: "Sara", it: "E poi? Avete comprato qualcosa di buono?", es: "¿Y luego? ¿Compraron algo rico?" },
      { speaker: "Tu", it: "Abbiamo comprato formaggio, pane e delle pesche fantastiche.", es: "Compramos queso, pan y unos melocotones fantásticos." },
      { speaker: "Sara", it: "E la domenica? Anche tu sei andato al mare?", es: "¿Y el domingo? ¿Tú también fuiste a la playa?" },
      { speaker: "Tu", it: "No, io sono rimasto a casa. Ho cucinato e ho guardato due film.", es: "No, yo me quedé en casa. Cociné y vi dos películas." },
      { speaker: "Sara", it: "Che tranquillo! Io invece ho lavorato al bar. Che noia!", es: "¡Qué tranquilo! Yo en cambio trabajé en el bar. ¡Qué aburrimiento!" },
      { speaker: "Tu", it: "Dai, il prossimo weekend andiamo fuori insieme!", es: "¡Venga, el próximo finde salimos juntos!" },
    ],
    comprehension: [
      { q: "¿Qué hizo el sábado?", options: ["Fue a la playa", "Fue al mercado", "Trabajó"], answer: 1 },
      { q: "¿Qué compraron?", options: ["Pescado y vino", "Queso, pan y melocotones", "Ropa"], answer: 1 },
      { q: "¿Qué hizo Sara el domingo?", options: ["Cocinó", "Vio películas", "Trabajó"], answer: 2 },
    ],
    chunks: [
      { it: "Com'è andato il weekend?", es: "¿Cómo fue el finde?" },
      { it: "Sono andato / andata a…", es: "Fui a…" },
      { it: "Sono rimasto a casa.", es: "Me quedé en casa." },
      { it: "Abbiamo comprato…", es: "Compramos…" },
      { it: "Ho cucinato / ho guardato…", es: "Cociné / vi…" },
      { it: "Che tranquillo!", es: "¡Qué tranquilo!" },
      { it: "Che noia!", es: "¡Qué aburrimiento!" },
    ],
    grammar: {
      focus: "Passato prossimo: avere o essere",
      inductive: [
        { it: "Ho comprato il pane. / Ho guardato un film.", es: "Compré pan. / Vi una película." },
        { it: "Sono andato al mercato. / Sono rimasto a casa.", es: "Fui al mercado. / Me quedé en casa." },
        { it: "Siamo usciti alle otto.", es: "Salimos a las ocho." },
      ],
      rule: [
        "La mayoría de verbos usa avere: ho mangiato, hai lavorato, abbiamo comprato. Los participios regulares: -ato, -uto, -ito.",
        "Los verbos de movimiento y estado reflexivos usan essere + participio que concuerda: sono andata, sei rimasto, si è alzata. Veremos la lista completa en la gramática enlazada.",
      ],
      topicId: "g-a2-passato-prossimo",
      gaps: [
        { q: "Ieri ___ al cinema. (andare)", options: ["ho andato", "sono andato", "sono andare"], answer: 1 },
        { q: "Abbiamo ___ una pizza buonissima. (mangiare)", options: ["mangiato", "mangiata", "mangiati"], answer: 0 },
        { q: "Maria si è ___ alle sette. (svegliare)", options: ["svegliato", "svegliata", "svegliate"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "El acento de los participios",
      tip: "Los participios llevan el acento en la penúltima siempre: mangiAto, vendUto, dormIto. Y los irregulares que más salen: fatto, detto, stato, andato, preso, scritto, aperto, chiuso.",
      pairs: [
        { a: "mangiato", b: "andato", note: "regulares" },
        { a: "fatto", b: "detto", note: "irregulares cortos" },
        { a: "scritto", b: "aperto", note: "irregulares con -tto/-erto" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Sabato sono andato al mercato. Ho comprato del pane. Domenica sono rimasto a casa»." },
        { kind: "semi", task: "Cuenta tu último finde en 6 frases: 3 cosas con avere y 2 con essere." },
        { kind: "comunicativo", task: "Diálogo del lunes: pregúntale a tu compañero com'è andato il weekend y compara vuestros fines." },
        { kind: "autentico", task: "Escribe (y di en voz alta) un mini-diario de tu semana en pasado: 5 frases." },
      ],
    },
    reading: {
      sourceId: "rd-2",
      question: "¿Qué se compra y se vive en el mercado del sábado según la lectura?",
    },
    writing: {
      task: "Escribe el diario de tu último finde (7-8 frases) con passato prossimo: qué hiciste, con quién, qué comiste y una valoración final.",
      minWords: 50,
      tips: ["Alterna haber-verbos y essere-verbos", "Une hechos con poi, dopo, alla fine"],
      model: [
        "Sabato mattina sono andato al mercato con Lucia.",
        "Abbiamo comprato del formaggio e della frutta, poi abbiamo pranzato insieme.",
        "La sera ho cucinato la pasta al pomodoro. Domenica invece sono rimasto a casa a leggere.",
      ],
    },
    culture: {
      title: "El ritual del lunes",
      text: "El lunes italiano abre con la pregunta sagrada: «Com'è andato il weekend?». La sobremesa del finde todavía se digiere comentando: la gita, la partita, il pranzo della nonna. Contar bien el pasado es la llave social del lunes.",
    },
    finalTask: {
      title: "Il mio weekend in italiano",
      brief: "Prepara el relato de tu último finde (o el que sueñas): 10 frases en passato prossimo con valoración final. Preséntalo como si te lo preguntara Sara.",
      checklist: ["Usé al menos 4 verbos con avere", "Usé al menos 3 verbos con essere", "Contesté a com'è andato con emoción"],
    },
    review: [
      { q: "Ieri ___ a teatro. (andare)", options: ["ho andato", "sono andata", "sono andare"], answer: 1 },
      { q: "«Che noia!» expresa…", options: ["aburrimiento", "alegría", "sorpresa"], answer: 0 },
      { q: "Abbiamo ___ un libro. (comprare)", options: ["comprato", "comprata", "comprati"], answer: 0 },
      { q: "«Com'è andata?» sirve para…", options: ["preguntar el precio", "preguntar cómo fue", "pedir dirección"], answer: 1 },
    ],
    cando: [
      "Puedo contar mi finde en passato prossimo",
      "Distingo cuándo usar avere o essere",
      "Puedo preguntar y valorar experiencias pasadas",
    ],
  },

  {
    id: "cu-a2-02", n: 2, level: "A2",
    title: "Cuando era pequeño", titleIt: "Quando ero piccolo",
    img: "/images/testi/rd-21.jpg",
    goal: "Contar tu infancia y compararla con el presente con el imperfetto",
    goals: ["Conjugar el imperfetto", "Describir hábitos y escenas del pasado", "Combinar imperfetto + passato prossimo"],
    scenario: "Charla de sobremesa con la familia italiana que te ha invitado a comer. Los recuerdos de infancia salen solos: «quando ero piccolo…». Toca contar los tuyos.",
    dialogue: [
      { speaker: "Nonna Pina", it: "Quando ero bambina, non c'era la televisione!", es: "Cuando era niña, ¡no había televisión!" },
      { speaker: "Tu", it: "Davvero? E cosa facevate la sera?", es: "¿De verdad? ¿Y qué hacían por la noche?" },
      { speaker: "Nonna Pina", it: "Si giocava a carte e si raccontavano le storie. Era bellissimo.", es: "Se jugaba a cartas y se contaban historias. Era bellísimo." },
      { speaker: "Marco", it: "Io da piccolo passavo tutto il giorno fuori con la bici.", es: "Yo de pequeño pasaba todo el día fuera con la bici." },
      { speaker: "Tu", it: "Anche io giocavo sempre fuori. Tornavo a casa solo per cena!", es: "Yo también jugaba siempre fuera. ¡Volvía a casa solo para cenar!" },
      { speaker: "Nonna Pina", it: "E a scuola? Andavi volentieri?", es: "¿Y al colegio? ¿Ibas a gusto?" },
      { speaker: "Tu", it: "No, detestavo la matematica! Ma la maestra era simpatica.", es: "No, ¡detestaba las mates! Pero la maestra era simpática." },
      { speaker: "Marco", it: "Come i nostri figli: giocano solo col telefonino!", es: "Como nuestros hijos: ¡solo juegan con el móvil!" },
    ],
    comprehension: [
      { q: "¿Qué hacían por la noche cuando la nonna era niña?", options: ["Veían la tele", "Jugaban a cartas y contaban historias", "Salían en bici"], answer: 1 },
      { q: "¿Qué hacía Marco de pequeño?", options: ["Estaba dentro", "Pasaba el día fuera con la bici", "Jugaba con el móvil"], answer: 1 },
      { q: "¿Qué asignatura detestaba el invitado?", options: ["Historia", "Matemáticas", "Gimnasia"], answer: 1 },
    ],
    chunks: [
      { it: "Quando ero piccolo…", es: "Cuando era pequeño…" },
      { it: "Da bambino passavo tutto il giorno fuori.", es: "De niño pasaba todo el día fuera." },
      { it: "Tornavo a casa per cena.", es: "Volvía a casa para cenar." },
      { it: "Andavi volentieri?", es: "¿Ibas a gusto?" },
      { it: "Si giocava a carte.", es: "Se jugaba a cartas." },
      { it: "non c'era / c'era", es: "no había / había" },
    ],
    grammar: {
      focus: "Imperfetto: descripciones y hábitos del pasado",
      inductive: [
        { it: "Ero piccolo. C'era la nonna. Faceva caldo.", es: "Era pequeño. Estaba la nonna. Hacía calor." },
        { it: "Giocavo sempre fuori.", es: "Jugaba siempre fuera." },
        { it: "Mentre io studiavo, lui dormiva.", es: "Mientras yo estudiaba, él dormía." },
      ],
      rule: [
        "El imperfetto pinta el decorado: cómo era, qué había, qué solía pasar. Terminaciones: -avo/-evo/-ivo (io), -avi/-evi/-ivi (tu), -ava/-eva/-iva (lui/lei)… Irregulares esenciales: ero, facevo, dicevo, stavo, andavo, bevevo.",
        "Contraste clave: imperfetto = decorado/hábito (giocavo ogni giorno); passato prossimo = evento puntual (ieri ho giocato). Juntos: «Mentre guardavo la TV, è arrivata Lucia».",
      ],
      topicId: "g-a2-imperfetto",
      gaps: [
        { q: "Da bambino io ___ (essere) timido.", options: ["sono stato", "ero", "fui"], answer: 1 },
        { q: "Ogni estate ___ (andare) al mare.", options: ["sono andato", "andavo", "ho andato"], answer: 1 },
        { q: "Mentre io ___ (studiare), è suonato il telefono.", options: ["ho studiato", "studiavo", "studio"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "El ritmo del imperfetto",
      tip: "El imperfetto tiene un vaivén melódico: facevo, dicevamo, giocavano. La vocal tónica cae siempre en la penúltima. Repite en cadena para coger el ritmo narrativo.",
      pairs: [
        { a: "facevo", b: "facevamo", note: "singular vs plural" },
        { a: "ero", b: "eravamo", note: "irregular pero rítmico" },
        { a: "giocavo", b: "giocavano", note: "mismo vaivén" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Quando ero piccolo, giocavo sempre fuori. Ero felice»." },
        { kind: "semi", task: "Describe tu casa de niño, tu mejor amigo y tu asignatura favorita (todo en imperfetto)." },
        { kind: "comunicativo", task: "Entrevista cruzada: pregunta a tu compañero «com'eri da bambino? cosa facevi?» y cuenta los parecidos." },
        { kind: "autentico", task: "Mira una foto tuya de niño y descríbela en voz alta: qué había, qué hacías, cómo eras." },
      ],
    },
    reading: {
      sourceId: "rd-21",
      question: "¿Qué papel juega el dialecto en la familia de la lectura?",
    },
    writing: {
      task: "Escribe el retrato de tu infancia (8 frases): dónde vivías, cómo era tu casa, qué hacías los domingos, a quién querías más.",
      minWords: 55,
      tips: ["Todo el decorado en imperfetto", "Introduce un evento puntual en passato prossimo para el contraste"],
      model: [
        "Sono nato in un paese piccolo: c'erano due piazze e un solo bar.",
        "D'estate giocavo a calcio fino a sera, e la mamma urlava «a cena!».",
        "Un giorno ho rotto la finestra della scuola: ancora oggi ne ridiamo.",
      ],
    },
    culture: {
      title: "La Italia que fu",
      text: "La Italia rural de los abuelos — sin tele, con juegos en la calle y el dialetto en casa — es un tesoro narrativo. Preguntar «com'era la vita quando eri giovane?» abre las puertas de cualquier casa italiana. Los abuelos cuentan, y cuentan mucho.",
    },
    finalTask: {
      title: "La mia infanzia in 10 frasi",
      brief: "Prepara el retrato hablado de tu infancia: cómo eras, dónde vivías, qué hacías, un recuerdo feliz y uno triste. Preséntalo como si se lo contaras a la nonna Pina.",
      checklist: ["Usé imperfetto para el decorado", "Incluí al menos un passato prossimo puntual", "Contesté a preguntas como com'eri / cosa facevi"],
    },
    review: [
      { q: "C'___ un parco vicino a casa mia. (pasado, haber)", options: ["è", "era", "era stato"], answer: 1 },
      { q: "Mentre ___ , è arrivato Marco. (cenar)", options: ["ho cenato", "cenavo", "ceno"], answer: 1 },
      { q: "Ogni inverno ___ (nevicare) tanto.", options: ["ha nevicato", "nevicava", "nevica"], answer: 1 },
      { q: "El imperfetto sirve para…", options: ["eventos puntuales", "decorado y hábitos", "futuros planes"], answer: 1 },
    ],
    cando: [
      "Puedo describir mi infancia en imperfetto",
      "Puedo combinar imperfetto y passato prossimo",
      "Puedo preguntar por recuerdos de otros",
    ],
  },

  {
    id: "cu-a2-03", n: 3, level: "A2",
    title: "En el hotel", titleIt: "In albergo",
    img: "/images/situazioni/sit-hotel.jpg",
    goal: "Reservar, hacer check-in y resolver problemas en un hotel",
    goals: ["Reservar habitación por teléfono o email", "Hacer check-in y preguntar servicios", "Reclamar con cortesía"],
    scenario: "Llegas a tu hotel de Florencia después de un vuelo eterno. La reserva está… pero la habitación mira a un patio oscuro y el aire acondicionado no funciona. Toca resolverlo en italiano.",
    dialogue: [
      { speaker: "Receptionist", it: "Buonasera, benvenuto! Ha una prenotazione?", es: "Buenas noches, ¡bienvenido! ¿Tiene reserva?" },
      { speaker: "Tu", it: "Buonasera! Sì, a nome García, per tre notti.", es: "¡Buenas noches! Sí, a nombre García, para tres noches." },
      { speaker: "Receptionist", it: "Perfetto. Camera 24, terzo piano. Ecco la chiave.", es: "Perfecto. Habitación 24, tercer piso. Aquí la llave." },
      { speaker: "Tu", it: "Grazie. Scusi, un'informazione: a che ora è la colazione?", es: "Gracias. Disculpe, una información: ¿a qué hora es el desayuno?" },
      { speaker: "Receptionist", it: "Dalle sette alle dieci, al primo piano.", es: "De siete a diez, en el primer piso." },
      { speaker: "Tu", it: "Grazie. Ah… c'è un problema: l'aria condizionata non funziona.", es: "Gracias. Ah… hay un problema: el aire acondicionado no funciona." },
      { speaker: "Receptionist", it: "Mi dispiace! Mando subito il tecnico. Altro?", es: "¡Lo siento! Mando ahora mismo al técnico. ¿Algo más?" },
      { speaker: "Tu", it: "Sì, il wifi non prende bene. Potrebbe aiutarmi?", es: "Sí, el wifi no va bien. ¿Podría ayudarme?" },
    ],
    comprehension: [
      { q: "¿Cuántas noches se ha reservado?", options: ["Dos", "Tres", "Cuatro"], answer: 1 },
      { q: "¿Cuál es el primer problema?", options: ["El wifi", "El aire acondicionado", "La llave"], answer: 1 },
      { q: "¿De qué hora a qué hora es el desayuno?", options: ["7-10", "8-11", "7-9"], answer: 0 },
    ],
    chunks: [
      { it: "Ho una prenotazione a nome…", es: "Tengo una reserva a nombre de…" },
      { it: "per tre notti", es: "para tres noches" },
      { it: "A che ora è la colazione?", es: "¿A qué hora es el desayuno?" },
      { it: "C'è un problema: … non funziona.", es: "Hay un problema: … no funciona." },
      { it: "Potrebbe aiutarmi?", es: "¿Podría ayudarme?" },
      { it: "Mando subito il tecnico.", es: "Mando ahora mismo al técnico." },
      { it: "Il wifi non prende.", es: "El wifi no va/coge." },
    ],
    grammar: {
      focus: "Passato prossimo en acción y cortesía con Potrebbe",
      inductive: [
        { it: "Ho prenotato una camera doppia.", es: "He reservado una habitación doble." },
        { it: "È arrivato il tecnico?", es: "¿Ha llegado el técnico?" },
        { it: "Potrebbe controllare?", es: "¿Podría comprobar?" },
      ],
      rule: [
        "En el hotel el passato prossimo lo es todo: ho prenotato, ho pagato, è arrivata la valigia. Repasa la concordancia con essere: la camera è pronta.",
        "Para reclamar con clase: condizionale de cortesía (potrebbe…? potrebbe…?) + mi dispiace para disculparse. Nunca gritar: la cortesía italiana abre todas las puertas.",
      ],
      topicId: "gx-a2-pp",
      gaps: [
        { q: "Ho ___ una camera per due notti. (prenotare)", options: ["prenotato", "prenotata", "prenotati"], answer: 0 },
        { q: "___ aiutarmi, per favore?", options: ["Potrebbe", "Può", "Poteva"], answer: 0 },
        { q: "Il tecnico è già ___. (arrivare)", options: ["arrivato", "arrivata", "arrivare"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Reclamar con el tono justo",
      tip: "«Mi dispiace» y «potrebbe» son las llaves mágicas: se dicen suaves, con tono descendente y sin prisa. El italiano se reclama con calma: la melodía hace la cortesía.",
      pairs: [
        { a: "Mi dispiace", b: "Mi dispiace!", note: "suave vs enfadado" },
        { a: "Potrebbe…", b: "Può…?", note: "más formal vs directo" },
        { a: "Subito", b: "subitissimo", note: "grados de urgencia" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Ho una prenotazione a nome García. Per tre notti, camera singola»." },
        { kind: "semi", task: "Llama para reservar: fechas, tipo de habitación, precio, desayuno y cancelación." },
        { kind: "comunicativo", task: "Roleplay: check-in + dos problemas (aire, wifi, ruido) con reclamación cortés." },
        { kind: "autentico", task: "Escribe el email de reserva de un hotel real italiano (o al Tutor IA) y compara respuestas." },
      ],
    },
    reading: {
      letturaId: "dia-hotel-02",
      question: "¿Qué complica la reserva de la lectura y cómo se resuelve?",
    },
    writing: {
      task: "Escribe un email de reserva (60-80 palabras): fechas, habitación, precio, desayuno, wifi y una petición especial (vista, planta alta…).",
      minWords: 60,
      tips: ["Formal: Gentile signore/signora, Cordiali saluti", "Vorrei prenotare… / Potrebbe confermare…?"],
      model: [
        "Gentile Hotel Belvedere,",
        "vorrei prenotare una camera doppia per due notti, dal 12 al 14 giugno.",
        "Potrebbe confermare il prezzo con colazione inclusa? Grazie mille, cordiali saluti.",
      ],
    },
    culture: {
      title: "El hotel italiano",
      text: "El desayuno italiano de hotel es dulce: brioche, mermelada, cappuccino. Si quieres salado, pide «salato» o ve a un bar. La taxa di soggiorno (tasa turística) se paga aparte, en efectivo, al salir. Y el receptionist italiano aprecia un buen «buonasera» a la llegada.",
    },
    finalTask: {
      title: "Dal check-in al reclamo",
      brief: "Simulación completa: reserva telefónica + check-in + reclamación de dos problemas + check-out preguntando la tasa. Encadena las tres escenas en un monólogo con pausas.",
      checklist: ["Reservé con fechas y tipo de habitación", "Reclamé con potrebbe / mi dispiace", "Pregunté desayuno, wifi y tasas"],
    },
    review: [
      { q: "«Per tre notti» =", options: ["para tres personas", "para tres noches", "tercera noche gratis"], answer: 1 },
      { q: "Ho ___ (prenotare) online.", options: ["prenotato", "sono prenotato", "prenotata"], answer: 0 },
      { q: "«Potrebbe aiutarmi?» es…", options: ["una orden", "una petición cortés", "una pregunta de hora"], answer: 1 },
      { q: "El desayuno italiano típico es…", options: ["salado", "dulce", "no existe"], answer: 1 },
    ],
    cando: [
      "Puedo reservar y hacer check-in en italiano",
      "Puedo reclamar problemas con cortesía",
      "Puedo escribir un email formal simple",
    ],
  },

  {
    id: "cu-a2-04", n: 4, level: "A2",
    title: "Salud y farmacia", titleIt: "Salute e farmacia",
    img: "/images/situazioni/sit-farmacia.jpg",
    goal: "Explicar síntomas, entender diagnósticos y comprar medicinas",
    goals: ["Decir qué te duele con mi fa male", "Describir síntomas con reflexivos (mi sento…)", "Comprar en la farmacia"],
    scenario: "Tres días de tos, fiebre vespertina y un dolor de garganta feroz. La farmacia está a la vuelta, pero el médico de cabecera exige explicarte en italiano. Toca describir el malestar.",
    dialogue: [
      { speaker: "Farmacista", it: "Buongiorno, dica pure!", es: "Buenos días, ¡dígame!" },
      { speaker: "Tu", it: "Buongiorno. Ho mal di gola e un po' di febbre da tre giorni.", es: "Buenos días. Tengo dolor de garganta y algo de fiebre desde hace tres días." },
      { speaker: "Farmacista", it: "Ha anche tosse? Quanta febbre ha?", es: "¿Tiene también tos? ¿Cuánta fiebre tiene?" },
      { speaker: "Tu", it: "Sì, tosse secca. Ieri sera avevo trentotto e mezzo.", es: "Sí, tos seca. Ayer por la noche tenía treinta y ocho y medio." },
      { speaker: "Farmacista", it: "Mi sente la testa pesante? Le fa male qualcosa?", es: "¿Siente la cabeza pesada? ¿Le duele algo?" },
      { speaker: "Tu", it: "Mi sento stanco e mi fanno male le ossa.", es: "Me siento cansado y me duelen los huesos." },
      { speaker: "Farmacista", it: "Le do qualcosa per la febbre e delle pastiglie per la gola. Se non passa, vada dal medico.", es: "Le do algo para la fiebre y unas pastillas para la garganta. Si no pasa, vaya al médico." },
      { speaker: "Tu", it: "Grazie! Quante pastiglie al giorno?", es: "¡Gracias! ¿Cuántas pastillas al día?" },
    ],
    comprehension: [
      { q: "¿Desde cuándo está enfermo?", options: ["Un día", "Tres días", "Una semana"], answer: 1 },
      { q: "¿Qué fiebre tenía ayer?", options: ["37,5", "38,5", "39,5"], answer: 1 },
      { q: "¿Qué le recomienda el farmacéutico si no mejora?", options: ["Volver a la farmacia", "Ir al médico", "Tomar más pastillas"], answer: 1 },
    ],
    chunks: [
      { it: "Ho mal di gola / di testa / di stomaco.", es: "Tengo dolor de garganta / de cabeza / de estómago." },
      { it: "Mi fa male la gola.", es: "Me duele la garganta." },
      { it: "Mi fanno male le ossa.", es: "Me duelen los huesos." },
      { it: "Mi sento stanco / debole.", es: "Me siento cansado / débil." },
      { it: "Ho la tosse secca.", es: "Tengo tos seca." },
      { it: "da tre giorni", es: "desde hace tres días" },
      { it: "Quante pastiglie al giorno?", es: "¿Cuántas pastillas al día?" },
    ],
    grammar: {
      focus: "Reflexivos de sensación y mal di",
      inductive: [
        { it: "Mi sento male. / Come ti senti?", es: "Me siento mal. / ¿Cómo te sientes?" },
        { it: "Mi fa male la testa. / Mi fanno male i denti.", es: "Me duele la cabeza. / Me duelen los dientes." },
        { it: "Ho mal di pancia.", es: "Tengo dolor de barriga." },
      ],
      rule: [
        "sentirsi (sentirse): mi sento, ti senti, si sente… «Mi sento meglio» = me siento mejor. Se combina con adjetivos: stanco, debole, nervoso.",
        "El dolor tiene dos fórmulas: avere mal di + parte (ho mal di schiena) o fare male con pronombre (mi fa male la schiena — plural: mi fanno male le gambe).",
      ],
      topicId: "gx-a2-riflessivi",
      gaps: [
        { q: "___ male la pancia. (me duele)", options: ["Mi fa", "Me fa", "Fa mi"], answer: 0 },
        { q: "Come ___ senti?", options: ["mi", "ti", "si"], answer: 1 },
        { q: "Ho mal ___ testa.", options: ["di", "da", "a"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El acento de las partes del cuerpo",
      tip: "Cuerpo humano con acento en penúltima casi siempre: tESta, GAMba, schiE_na, gO_la. Ojo con la doble de febbre, ossa (o_ssa, doble s sonora).",
      pairs: [
        { a: "testa", b: "tosse", note: "una s vs doble s" },
        { a: "febbre", b: "ossa", note: "dobles bb y ss" },
        { a: "gola", b: "gomito", note: "penúltima en ambas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Non mi sento bene. Ho mal di testa e mi fanno male le ossa»." },
        { kind: "semi", task: "Describe tu última vez enfermo: síntomas, cuántos días, qué tomaste." },
        { kind: "comunicativo", task: "Roleplay farmacia: explica síntomas, responde preguntas del farmacéutico, pregunta posología." },
        { kind: "autentico", task: "Aprende de memoria tu «ficha médica» en italiano: alergias, medicación, síntomas típicos." },
      ],
    },
    reading: {
      lines: [
        { it: "La farmacia italiana è una istituzione: la croce verde illumina ogni angolo di strada e i farmacisti fanno quasi da medici.", es: "La farmacia italiana es una institución: la cruz verde ilumina cada esquina y los farmacéuticos casi hacen de médicos." },
        { it: "Per medicine forti serve la ricetta del medico; per le altre, basta chiedere consiglio al banco.", es: "Para medicinas fuertes hace falta la receta del médico; para las otras, basta pedir consejo en el mostrador." },
      ],
      question: "¿Para qué medicinas se necesita receta en Italia?",
    },
    writing: {
      task: "Escribe un mensaje al profesor avisando de que estás enfermo (5-6 frases): cómo te sientes, desde cuándo, qué harás.",
      minWords: 45,
      tips: ["Mi dispiace ma… para disculparte", "Reflexivos: mi sento + adjetivo"],
      model: [
        "Buongiorno professore, mi dispiace ma oggi non posso venire a lezione.",
        "Da ieri sera ho la febbre e mi fa male la gola. Mi sento molto stanco.",
        "Se non passa domani, andrò dal medico. La ringrazio, a presto!",
      ],
    },
    culture: {
      title: "La farmacia de la esquina",
      text: "La farmacia italiana (croce verde parpadeante) es media consulta médica: allí te orientan, miden la tensión y hasta te aconsejan por tos o alergia. El medico di base se elige al registrarse en el SSN; para verlo, se llama por la mañana a las 8:00. La urgencia es el 118.",
    },
    finalTask: {
      title: "Dal sintomo alla cura",
      brief: "Simula el episodio completo: te sientes mal, explicas síntomas en farmacia, compras y avisas al trabajo. Preséntalo en voz alta con las tres escenas encadenadas.",
      checklist: ["Usé mi fa male / mi fanno male", "Usé mi sento + adjetivo", "Pregunté la posología"],
    },
    review: [
      { q: "«Mi fanno male le ossa» =", options: ["Me duelen los huesos", "Me rompí los huesos", "Tengo huesos fuertes"], answer: 0 },
      { q: "Ho mal ___ stomaco.", options: ["di", "del", "a"], answer: 0 },
      { q: "«Tosse secca» es tos…", options: ["con flema", "seca", "alérgica"], answer: 1 },
      { q: "Como ___ senti? — Mi sento meglio.", options: ["mi", "ti", "si"], answer: 1 },
    ],
    cando: [
      "Puedo explicar síntomas y dolores",
      "Puedo comprar medicinas y entender posología",
      "Puedo avisar formalmente de una baja",
    ],
  },

  {
    id: "cu-a2-05", n: 5, level: "A2",
    title: "Instrucciones y consejos", titleIt: "Istruzioni e consigli",
    img: "/images/situazioni/sit-direzioni.jpg",
    goal: "Dar y recibir instrucciones, consejos y órdenes amables con el imperativo",
    goals: ["Usar el imperativo formal e informal", "Dar consejos con devi / dovresti", "Entender instrucciones de uso"],
    scenario: "Tu compañero de piso italiano cocina por primera vez y te pide ayuda. Además, la lavadora nueva tiene un manual imposible. Toca dar instrucciones y consejos como un jefe (amable).",
    dialogue: [
      { speaker: "Marco", it: "Come si fa la carbonara? Spiegami!", es: "¿Cómo se hace la carbonara? ¡Explícame!" },
      { speaker: "Tu", it: "Prima, metti l'acqua a bollire e aggiungi il sale.", es: "Primero, pon el agua a hervir y añade la sal." },
      { speaker: "Marco", it: "Quanta sale? E il guanciale?", es: "¿Cuánta sal? ¿Y la carrillera?" },
      { speaker: "Tu", it: "Un pugno di sale. Taglia il guanciale a strisce e rosolalo bene.", es: "Un puñado de sal. Corta la carrillera en tiras y dórala bien." },
      { speaker: "Marco", it: "E le uova? Mia madre usa la panna!", es: "¿Y los huevos? ¡Mi madre usa nata!" },
      { speaker: "Tu", it: "Assolutamente no! Sbatti i tuorli con il pecorino, senza panna!", es: "¡Absolutamente no! Bate las yemas con el pecorino, ¡sin nata!" },
      { speaker: "Marco", it: "Ok ok! E adesso?", es: "¡Ok ok! ¿Y ahora?" },
      { speaker: "Tu", it: "Scola la pasta, mescola tutto fuori dal fuoco e servi subito. Non sbagliare!", es: "Escurre la pasta, mezcla todo fuera del fuego y sirve enseguida. ¡No falles!" },
    ],
    comprehension: [
      { q: "¿Qué se hace primero?", options: ["Cortar el guanciale", "Poner el agua a hervir", "Batir los huevos"], answer: 1 },
      { q: "¿Qué ingrediente está PROHIBIDO según el profesor?", options: ["El pecorino", "La panna", "Los tuorli"], answer: 1 },
      { q: "¿Dónde se mezcla todo?", options: ["Al fuego", "Fuera del fuego", "En el horno"], answer: 1 },
    ],
    chunks: [
      { it: "Metti l'acqua a bollire.", es: "Pon el agua a hervir." },
      { it: "Taglia il guanciale a strisce.", es: "Corta la carrillera en tiras." },
      { it: "Rosolalo bene.", es: "Dóralo bien." },
      { it: "Scola la pasta.", es: "Escurre la pasta." },
      { it: "Servi subito!", es: "¡Sirve enseguida!" },
      { it: "Non sbagliare!", es: "¡No falles!" },
      { it: "Come si fa…?", es: "¿Cómo se hace…?" },
    ],
    grammar: {
      focus: "Imperativo informal y formal",
      inductive: [
        { it: "Metti, aggiungi, taglia, mescola!", es: "¡Pon, añade, corta, mezcla!" },
        { it: "Non sbagliare! / Non preoccuparti!", es: "¡No falles! / ¡No te preocupes!" },
        { it: "Scusi, mi dica! / Prego, si accomodi!", es: "Disculpe, ¡dígame! / Adelante, ¡siéntese!" },
      ],
      rule: [
        "Imperativo informal: -are → -a (mangia!), -ere/-ire → -i (prendi!, dormi!). Irregulares: va', fa', di', sta'. Negativo: non + infinito (non preoccuparti).",
        "Formal (Lei): -are → -i (scusi, mi dica), -ere/-ire → -a (prenda, dorma). Con pronombres se posponen y doblan la consonante: mi dica, si accomodi, lo prenda.",
      ],
      topicId: "g-b1-imperativo",
      gaps: [
        { q: "___ l'acqua! (mettere, informal)", options: ["Metti", "Metta", "Mettere"], answer: 0 },
        { q: "Signora, si ___! (accomodarsi, formal)", options: ["accomodi", "accomoda", "accomodati"], answer: 0 },
        { q: "___ sbagliare! (negativo)", options: ["Non", "No", "Niente"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "La entonación del imperativo",
      tip: "El imperativo sube enérgico: «ScolA!», «MEScola!». La negativa cae seria: «Non sbaGLIare». La cortesía formal, en cambio, desciende suave: «Si accomOdi».",
      pairs: [
        { a: "Metti!", b: "Non mettere!", note: "sube vs cae" },
        { a: "Servi subito!", b: "Si accomodi", note: "energía vs cortesía" },
        { a: "Di'!", b: "Dica!", note: "informal vs formal" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite la receta: «Metti, taglia, rosola, scola, mescola, servi»." },
        { kind: "semi", task: "Explica cómo se hace tu plato favorito en 6 imperativos." },
        { kind: "comunicativo", task: "Roleplay: enseña a alguien a usar la lavadora / el metro / la máquina de café con instrucciones." },
        { kind: "autentico", task: "Lee en voz alta un manual italiano real (una receta de Giallozafferane) y sigue sus imperativos." },
      ],
    },
    reading: {
      lines: [
        { it: "La vera carbonara romana non ha panna: guanciale, tuorli, pecorino romano e pepe nero. Punto.", es: "La verdadera carbonara romana no lleva nata: carrillera, yemas, pecorino romano y pimienta negra. Punto." },
        { it: "Il trucco è mescolare fuori dal fuoco: il calore dell'acqua cuoce le uova senza strapazzarle.", es: "El truco es mezclar fuera del fuego: el calor del agua cuece los huevos sin cuajarlos en revuelto." },
      ],
      question: "¿Por qué se mezcla fuera del fuego?",
    },
    writing: {
      task: "Escribe la receta de un plato de tu país (8 pasos en imperativo) con ingredientes y un consejo final.",
      minWords: 55,
      tips: ["Un paso por línea, empieza con verbo", "Consejo final con ricorda / non dimenticare"],
      model: [
        "Per i ceviche: taglia il pesce a cubetti, spremi il limone e condisci con cipolla rossa.",
        "Aggiungi il coriandolo, il sale e un po' di peperoncino. Mescola bene e servi freddo.",
        "Ricorda: il limone cuoce il pesce! Non dimenticare il mais tostato.",
      ],
    },
    culture: {
      title: "Las guerras de la cocina",
      text: "La cocina italiana es doctrina: la carbonara sin panna (nunca), el cappuccino después de comer (jamás), el parmesano sul pesce (sacrilegio). Dar y aceptar consejos de cocina es un deporte nacional: discutir la receta de la nonna es casi un deber cívico.",
    },
    finalTask: {
      title: "Il mio manuale di istruzioni",
      brief: "Elige un aparato o ritual doméstico y escribe su manual en italiano: 8 imperativos con los materiales necesarios. Preséntalo como un vídeo-tutorial en voz alta.",
      checklist: ["Usé 8 imperativos correctos", "Incluí al menos una forma negativa", "La secuencia es lógica y completa"],
    },
    review: [
      { q: "Signore, mi ___! (dire, formal)", options: ["dica", "dici", "dire"], answer: 0 },
      { q: "«Scola la pasta» =", options: ["Sal la pasta", "Escurre la pasta", "Sirve la pasta"], answer: 1 },
      { q: "___ preoccuparti!", options: ["Non", "No", "Niente"], answer: 0 },
      { q: "El imperativo de «fare» (informal) es…", options: ["fa'", "fa", "fare"], answer: 0 },
    ],
    cando: [
      "Puedo dar instrucciones con imperativo",
      "Puedo dar consejos y advertencias",
      "Puedo seguir una receta en italiano",
    ],
  },

  {
    id: "cu-a2-06", n: 6, level: "A2",
    title: "El tiempo y los planes", titleIt: "Il tempo e i programmi",
    img: "/images/vocab/clima.webp",
    goal: "Hablar del clima, previsiones y planes con futuro",
    goals: ["Describir el clima de hoy y de siempre", "Usar el futuro simple para planes y previsiones", "Hacer hipótesis ligeras"],
    scenario: "Estás organizando una gita al lago el próximo domingo, pero el tiempo en el norte de Italia es una caja de sorpresas. Consultas la prevención, discutes con tus amigos y decides.",
    dialogue: [
      { speaker: "Giulia", it: "Allora, domenica andiamo al lago? Che tempo farà?", es: "¿Entonces, el domingo vamos al lago? ¿Qué tiempo hará?" },
      { speaker: "Tu", it: "Ho controllato: domenica sarà soleggiato, circa venticinque gradi.", es: "He mirado: el domingo hará sol, unos veinticinco grados." },
      { speaker: "Giulia", it: "Perfetto! Ma in montagna il tempo cambia in fretta…", es: "¡Perfecto! Pero en la montaña el tiempo cambia rápido…" },
      { speaker: "Tu", it: "Vero. Se pioverà, faremo un plan b: museo e gelato.", es: "Cierto. Si llueve, haremos un plan B: museo y helado." },
      { speaker: "Giulia", it: "Io porterò l'ombrello comunque! Qui d'autunno piove spesso.", es: "¡Yo llevaré el paraguas de todos modos! Aquí en otoño llueve a menudo." },
      { speaker: "Tu", it: "Hai ragione. D'inverno invece nevica sempre in montagna.", es: "Tienes razón. En invierno en cambio siempre nieva en la montaña." },
      { speaker: "Giulia", it: "E d'estate? Nel tuo paese?", es: "¿Y en verano? ¿En tu país?" },
      { speaker: "Tu", it: "D'estate fa caldissimo, mai pioggia! Vi piacerà.", es: "En verano hace calentísimo, ¡nunca llueve! Os gustará." },
    ],
    comprehension: [
      { q: "¿Qué tiempo hará el domingo?", options: ["Lluvia", "Sol, 25°", "Nieve"], answer: 1 },
      { q: "¿Cuál es el plan B si llueve?", options: ["Volver a casa", "Museo y helado", "Cine"], answer: 1 },
      { q: "¿Qué hará Giulia de todos modos?", options: ["Llevar paraguas", "Quedarse", "Ir en tren"], answer: 0 },
    ],
    chunks: [
      { it: "Che tempo farà?", es: "¿Qué tiempo hará?" },
      { it: "Sarà soleggiato.", es: "Hará sol." },
      { it: "Se pioverà, faremo…", es: "Si llueve, haremos…" },
      { it: "Porterò l'ombrello.", es: "Llevaré el paraguas." },
      { it: "piove spesso / nevica sempre", es: "llueve a menudo / nieva siempre" },
      { it: "fa caldissimo / fa freddo", es: "hace calentísimo / hace frío" },
    ],
    grammar: {
      focus: "Futuro simple y estaciones",
      inductive: [
        { it: "Andremo al lago domenica.", es: "Iremos al lago el domingo." },
        { it: "Pioverà? No, sarà bello.", es: "¿Lloverá? No, hará bueno." },
        { it: "Porterò io il pranzo!", es: "¡Llevaré yo la comida!" },
      ],
      rule: [
        "Futuro regular: -are → -erò (andrò de andare es irregular: sarò, avrò, andrò, farò, darò, verrò). Tu: -erai, lui: -erà, noi: -eremo, voi: -erete, loro: -eranno.",
        "El clima: fa caldo/freddo, c'è il sole, è nuvoloso, piove, nevica, tira vento. Estaciones: in primavera, d'estate, in autunno, d'inverno.",
      ],
      topicId: "g-a2-futuro",
      gaps: [
        { q: "Domani ___ (essere) una bella giornata.", options: ["sarà", " sarà stata", "è"], answer: 0 },
        { q: "Noi ___ (andare) al mare.", options: ["andiamo", "andremo", "andavamo"], answer: 1 },
        { q: "Se ___ (piovere), restiamo a casa.", options: ["pioverà", "piove", "pioveva"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "La r del futuro",
      tip: "El futuro se reconoce oyendo el vaivén de la -r-: sarò, andremo, faranno. La r vibra siempre, también en grupos (farà, verrà). Practícalo como un tambor.",
      pairs: [
        { a: "sarò", b: "sarai", note: "singular" },
        { a: "andremo", b: "andrete", note: "plural" },
        { a: "farà", b: "faranno", note: "él vs ellos" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Domani sarà soleggiato. Porterò l'ombrello comunque»." },
        { kind: "semi", task: "Describe el clima típico de tu país en las cuatro estaciones (4 frases)." },
        { kind: "comunicativo", task: "Debate el plan de gita: previsiones, plan A y plan B, decisión final." },
        { kind: "autentico", task: "Mira la previsione real de una ciudad italiana (ilmeteo.it) y contársela a alguien en italiano." },
      ],
    },
    reading: {
      lines: [
        { it: "Il clima italiano è vario: al nord l'inverno è freddo e nebbioso, al sud mite; d'estate fa caldo ovunque.", es: "El clima italiano es variado: al norte el invierno es frío y con niebla, al sur suave; en verano hace calor en todas partes." },
        { it: "Le previsioni si sbagliano spesso in montagna: porta sempre una giacca leggera!", es: "Las previsiones se equivocan a menudo en la montaña: ¡lleva siempre una chaqueta ligera!" },
      ],
      question: "¿Cómo es el invierno en el norte y qué consejo da el texto?",
    },
    writing: {
      task: "Escribe las previsiones del fin de semana para tu ciudad (6 frases) y tus planes según el tiempo (plan A y plan B).",
      minWords: 50,
      tips: ["Futuro para previsión: sarà, pioverà, farà", "Se pioverà… / Se farà bello… para los planes"],
      model: [
        "Sabato sarà nuvoloso con qualche pioggia al mattino.",
        "Domenica invece sarà soleggiato: faremo una gita in bici!",
        "Se pioverà ancora, resteremo a casa a vedere un film.",
      ],
    },
    culture: {
      title: "Hablar del tiempo, arte nacional",
      text: "«Che caldo! / Che freddo! / Che afa!» — el clima es el comodín conversacional italiano, como en todas partes. Pero Italia añade drama: la nebbia padana, el scirocco siciliano, la bora triestina. Conocer las palabras del tiempo es supervivencia social.",
    },
    finalTask: {
      title: "La gita perfetta",
      brief: "Organiza la gita perfecta: destino, previsione del tiempo, plan A, plan B y qué llevará cada uno. Preséntalo como propuesta entusiasta al grupo.",
      checklist: ["Usé el futuro para previsiones y planes", "Incluí plan B con se pioverà", "Describí el clima con al menos 4 expresiones"],
    },
    review: [
      { q: "Domani ___ (avere) tempo?", options: ["avrai", "hai", "avevi"], answer: 0 },
      { q: "«Fa caldissimo» =", options: ["hace muchísimo frío", "hace muchísimo calor", "está nublado"], answer: 1 },
      { q: "Noi ___ (fare) una gita. (futuro)", options: ["facciamo", "faremo", "facessimo"], answer: 1 },
      { q: "___ estate fa caldo. (en verano)", options: ["In", "Di / D'", "A"], answer: 1 },
    ],
    cando: [
      "Puedo hablar del clima y las estaciones",
      "Puedo hacer planes y previsiones con futuro",
      "Puedo preparar un plan B condicional",
    ],
  },

  {
    id: "cu-a2-07", n: 7, level: "A2",
    title: "El trabajo", titleIt: "Il lavoro",
    img: "/images/vocab/lavoro.webp",
    goal: "Hablar de trabajo: profesiones, tareas y obligaciones con verbos modales",
    goals: ["Describir tu trabajo y responsabilidades", "Usar dovere, potere, volere en presente y pasado", "Negociar tareas y permisos"],
    scenario: "Nuevo trabajo en una empresa de Milán: tu jefa te explica las tareas de la semana y tú tienes que pedir permiso para el viernes. Modal verbs al poder.",
    dialogue: [
      { speaker: "Capo", it: "Allora, questa settimana devi finire il report per venerdì.", es: "Bien, esta semana debes terminar el informe para el viernes." },
      { speaker: "Tu", it: "Va bene. Devo anche partecipare alla riunione di mercoledì?", es: "De acuerdo. ¿También debo participar en la reunión del miércoles?" },
      { speaker: "Capo", it: "Sì, puoi arrivare cinque minuti prima? Iniziamo alle nove.", es: "Sí, ¿puedes llegar cinco minutos antes? Empezamos a las nueve." },
      { speaker: "Tu", it: "Certo. Ah, capo… venerdì pomeriggio potrei uscire prima?", es: "Claro. Ah, jefa… ¿el viernes por la tarde podría salir antes?" },
      { speaker: "Capo", it: "Perché? Hai un impegno?", es: "¿Por qué? ¿Tienes un compromiso?" },
      { speaker: "Tu", it: "Sì, devo andare dal medico, ma posso recuperare sabato mattina.", es: "Sí, debo ir al médico, pero puedo recuperar el sábado por la mañana." },
      { speaker: "Capo", it: "Va bene, ma il report devi finirlo entro giovedì sera.", es: "De acuerdo, pero el informe debes terminarlo antes del jueves por la noche." },
      { speaker: "Tu", it: "Perfetto, grazie! Farò del mio meglio.", es: "¡Perfecto, gracias! Haré lo posible." },
    ],
    comprehension: [
      { q: "¿Para cuándo debe terminar el informe finalmente?", options: ["Miércoles", "Jueves por la noche", "Viernes"], answer: 1 },
      { q: "¿Por qué quiere salir antes el viernes?", options: ["Por una fiesta", "Por el médico", "Por un viaje"], answer: 1 },
      { q: "¿Cuándo empezará la reunión del miércoles?", options: ["8:55", "9:00", "9:05"], answer: 1 },
    ],
    chunks: [
      { it: "Devi finire il report.", es: "Debes terminar el informe." },
      { it: "Potrei uscire prima?", es: "¿Podría salir antes?" },
      { it: "Ho un impegno.", es: "Tengo un compromiso." },
      { it: "Posso recuperare sabato.", es: "Puedo recuperar el sábado." },
      { it: "entro giovedì sera", es: "antes del jueves por la noche" },
      { it: "Farò del mio meglio.", es: "Haré lo posible." },
    ],
    grammar: {
      focus: "Verbos modales: dovere, potere, volere",
      inductive: [
        { it: "Devo lavorare. / Devi finire.", es: "Debo trabajar. / Debes terminar." },
        { it: "Puoi aiutarmi? / Possiamo partire?", es: "¿Puedes ayudarme? ¿Podemos salir?" },
        { it: "Voglio imparare l'italiano.", es: "Quiero aprender italiano." },
      ],
      rule: [
        "Los modales se conjugan solos + infinitivo: devo/puoi/vogliamo + lavorare. Irregulares esenciales: posso, puoi, può; devo, devi, deve; voglio, vuoi, vuole.",
        "En passato prossimo con modal el auxiliar suele ser el del verbo que sigue: «Sono dovuto uscire» / «Ho potuto lavorare». Para A2: usa avere y no fallarás en la mayoría.",
      ],
      topicId: "g3-a2-modali",
      gaps: [
        { q: "___ finire entro venerdì. (yo, deber)", options: ["Devo", "Devi", "Deve"], answer: 0 },
        { q: "___ aiutarmi? (tú, poder)", options: ["Voglio", "Puoi", "Devi"], answer: 1 },
        { q: "Ieri non ___ venire. (poder, pasado)", options: ["posso", "ho potuto", "potevo"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "p vs pp y los modales",
      tip: "Los modales tienen consonantes dobles traidoras: posso (doble s), vuoi (sin doble). Y «posso» vs «poso»: la doble cambia la palabra. Alárgalas bien.",
      pairs: [
        { a: "posso", b: "poso", note: "puedo vs depósito" },
        { a: "devo", b: "doppio", note: "simple vs doble" },
        { a: "voglio", b: "voglio?", note: "afirmación vs pregunta sube" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Devo finire entro giovedì. Posso recuperare sabato»." },
        { kind: "semi", task: "Describe tu semana laboral ideal vs real: qué debes, qué puedes y qué quieres hacer." },
        { kind: "comunicativo", task: "Negociación: pide un permiso, ofrece recuperar el tiempo y cierra el acuerdo." },
        { kind: "autentico", task: "Escribe tu «job description» en italiano: 5 tareas con modales y compárala con tu contrato real." },
      ],
    },
    reading: {
      lines: [
        { it: "Il mondo del lavoro italiano è in cambiamento: smart working, contratti a progetto e la caccia all'equilibrio vita-lavoro.", es: "El mundo laboral italiano está en cambio: teletrabajo, contratos por proyecto y la búsqueda del equilibrio vida-trabajo." },
        { it: "Le aziende milanesi offrono flessibilità, ma a Roma e al sud la cultura dell'ufficio resta più tradizionale.", es: "Las empresas milanesas ofrecen flexibilidad, pero en Roma y el sur la cultura de oficina sigue más tradicional." },
      ],
      question: "¿Qué diferencia hay entre Milán y el sur en cultura laboral?",
    },
    writing: {
      task: "Escribe un email a tu jefa pidiendo un día libre (7 frases): motivo, propuesta para recuperar y disponibilidad.",
      minWords: 55,
      tips: ["Potrei…? para pedir con elegancia", "Formal: Gentile… / Cordiali saluti"],
      model: [
        "Gentile Sara,",
        "ti scrivo perché giovedì devo andare dal dentista: potrei entrare alle undici?",
        "Posso recuperare le ore il venerdì sera o sabato mattina. Grazie mille, a presto!",
      ],
    },
    culture: {
      title: "El trabajo en Italia",
      text: "El CV italiano foto incluida (aún), el «colloquio» con preguntas de pasión y la hora de pranzo sagrada. Vacaciones: mínimo 4 semanas. Y el «smart working» post-pandemia se ha consolidado sobre todo en el norte. La puntualidad es flexible: 5-10 minutos son «in orario».",
    },
    finalTask: {
      title: "La negoziazione perfetta",
      brief: "Simula la conversación semanal con tu jefa: 3 tareas asignadas, una petición de permiso, una oferta de recuperación y cierre. Sin salir del italiano.",
      checklist: ["Usé dovere/potere/volere al menos 6 veces", "Pedí permiso con cortesía", "Cerré un acuerdo claro"],
    },
    review: [
      { q: "«Potrei uscire prima?» =", options: ["¿Salgo ya?", "¿Podría salir antes?", "¿Quiero salir antes?"], answer: 1 },
      { q: "___ lavorare sabato? (tú, querer)", options: ["Vuoi", "Puoi", "Devi"], answer: 0 },
      { q: "Ieri ho ___ finire tutto. (deber, pasado)", options: ["dovuto", "devo", "dovevo"], answer: 0 },
      { q: "«Farò del mio meglio» =", options: ["Haré lo posible", "Fue lo mejor", "Es lo mejor"], answer: 0 },
    ],
    cando: [
      "Puedo describir mi trabajo y tareas",
      "Puedo pedir permisos y negociar con modales",
      "Puedo escribir un email laboral formal",
    ],
  },

  {
    id: "cu-a2-08", n: 8, level: "A2",
    title: "Al teléfono", titleIt: "Al telefono",
    img: "/images/ascolto/ls-11.jpg",
    goal: "Llamar por teléfono: citas, mensajes y malentendidos",
    goals: ["Contestar y llamar con fórmulas telefónicas", "Dejar un mensaje y fijar una cita", "Resolver un malentendido"],
    scenario: "Llamas al restaurante para reservar mesa para el cumpleaños de tu amiga. Hay mala señal, el ruido no ayuda y el malentendido acecha. ¿Sabrás salir del paso?",
    dialogue: [
      { speaker: "Ristorante", it: "Pronto? Trattoria da Michele!", es: "¿Diga? ¡Trattoria da Michele!" },
      { speaker: "Tu", it: "Buonasera! Vorrei prenotare un tavolo per sabato sera.", es: "¡Buenas noches! Querría reservar una mesa para el sábado noche." },
      { speaker: "Ristorante", it: "Per quante persone? A che ora?", es: "¿Para cuántas personas? ¿A qué hora?" },
      { speaker: "Tu", it: "Per sei persone, alle nove. È per un compleanno!", es: "Para seis personas, a las nueve. ¡Es para un cumpleaños!" },
      { speaker: "Ristorante", it: "Come? Non la sento bene… sette persone?", es: "¿Cómo? No le oigo bien… ¿siete personas?" },
      { speaker: "Tu", it: "No, SEI! S-E-I! E alle nove, nove!", es: "¡No, SEIS! ¡S-E-I! ¡Y a las nueve, nueve!" },
      { speaker: "Ristorante", it: "Ah, sei persone alle nove! Perfetto, a nome di chi?", es: "¡Ah, seis personas a las nueve! Perfecto, ¿a nombre de quién?" },
      { speaker: "Tu", it: "García. Ah, potremmo avere un dolce con la candelina?", es: "García. Ah, ¿podríamos tener un postre con velita?" },
    ],
    comprehension: [
      { q: "¿Para cuántas personas es la reserva?", options: ["5", "6", "7"], answer: 1 },
      { q: "¿Qué malentendido ocurre?", options: ["La hora", "El número de personas", "El nombre"], answer: 1 },
      { q: "¿Qué petición especial hace al final?", options: ["Mesa junto a la ventana", "Postre con velita", "Menú vegetariano"], answer: 1 },
    ],
    chunks: [
      { it: "Pronto?", es: "¿Diga?" },
      { it: "Vorrei prenotare un tavolo.", es: "Querría reservar una mesa." },
      { it: "Non la sento bene.", es: "No le oigo bien." },
      { it: "Può ripetere, per favore?", es: "¿Puede repetir, por favor?" },
      { it: "A nome di chi?", es: "¿A nombre de quién?" },
      { it: "La richiamo più tardi.", es: "Le llamo más tarde." },
      { it: "Sono io, …!", es: "Soy yo, ¡…!" },
    ],
    grammar: {
      focus: "Pronombres objeto directo e indirecto al teléfono",
      inductive: [
        { it: "Non la sento. / Ti sento bene?", es: "No la oigo. / ¿Te oigo bien?" },
        { it: "La richiamo. / Mi richiami tu?", es: "Le llamo. / ¿Me llamas tú?" },
        { it: "Le lascio un messaggio?", es: "¿Le dejo un mensaje?" },
      ],
      rule: [
        "Directos: mi, ti, lo/la, ci, vi, li/le (Non ti sento). Indirectos: mi, ti, gli/le, ci, vi, gli (Ti scrivo, le dico).",
        "Al teléfono lo escuchas todo: La sento? La richiamo dopo. Mi può passare…? El formal usa La/Le con mayúscula.",
      ],
      topicId: "g-b1-pronomi",
      gaps: [
        { q: "Non ___ sento bene. (le, formal)", options: ["la", "le", "li"], answer: 0 },
        { q: "___ richiamo più tardi. (le)", options: ["La", "Le", "Gli"], answer: 0 },
        { q: "Può ___ passare Marco?", options: ["mi", "me", "mio"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Deletrear en italiano",
      tip: "Deletrear es supervivencia: a come Ancona, b come Bologna, e come Empoli… Las letras difíciles: gli «GLI di GLiulia»? No: se dice «gi» para g suave. Prueba tu nombre.",
      pairs: [
        { a: "esse", b: "zeta", note: "s y z al deletrear" },
        { a: "E come Empoli", b: "I come Imola", note: "e vs i" },
        { a: "doppio vu", b: "cu", note: "w extranjera" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Pronto? Sono… Vorrei prenotare. Può ripetere, per favore?»." },
        { kind: "semi", task: "Deja un mensaje en el contestador: quién eres, por qué llamas, tu número y cuándo volverás a llamar." },
        { kind: "comunicativo", task: "Roleplay con mala señal: reserva, número equivocado, repetición, confirmación final." },
        { kind: "autentico", task: "Llama (o simula con el Tutor IA) a un servicio italiano real y consigue una información concreta." },
      ],
    },
    reading: {
      lines: [
        { it: "Gli italiani rispondono ancora al telefono con «Pronto?», palabra nata con la telefonia e rimasta per sempre.", es: "Los italianos aún contestan el teléfono con «Pronto?», palabra nacida con la telefonía y quedada para siempre." },
        { it: "Per gli appuntamenti formali si chiama tra le 10 e le 12 o nel primo pomeriggio: mai all'ora di pranzo!", es: "Para las citas formales se llama entre las 10 y las 12 o a primera hora de la tarde: ¡nunca a la hora de comer!" },
      ],
      question: "¿De dónde viene «Pronto?» y cuándo NO se debe llamar?",
    },
    writing: {
      task: "Escribe un SMS/WhatsApp formal-ish (6 frases) para confirmar una cita: día, hora, lugar y tu número.",
      minWords: 45,
      tips: ["Confirmar: Ti confermo che…", "Cordial sin emojis: Grazie, a venerdì!"],
      model: [
        "Buongiorno Anna, sono Alejandro.",
        "Ti confermo l'appuntamento di giovedì alle 16 in via Roma 12.",
        "Se ci sono problemi mi scriva pure: 333 1234567. Grazie, a giovedì!",
      ],
    },
    culture: {
      title: "El teléfono italiano",
      text: "«Pronto?» al contestar es ley no escrita. Los italianos prefieren voz a texto entre mayores, WhatsApp para todo lo demás. Los horarios de llamada son sagrados: nunca en horario de siesta-no-existente pero sí de pranzo (13-15h) ni después de las 22h.",
    },
    finalTask: {
      title: "La chiamata difficile",
      brief: "Simula la llamada más difícil de tu semana: reserva con petición especial + mala señal + cambio de última hora. Resuelve todo sin colgar.",
      checklist: ["Usé fórmulas telefónicas (Pronto, a nome di)", "Resolví un malentendido repitiendo", "Confirmé los datos clave dos veces"],
    },
    review: [
      { q: "Se contesta el teléfono diciendo…", options: ["Ciao?", "Pronto?", "Sì?"], answer: 1 },
      { q: "Non ___ sento bene. (a usted)", options: ["Le", "La", "Gli"], answer: 1 },
      { q: "«La richiamo più tardi» =", options: ["Le llamo más tarde", "Me llama luego", "Lo escribo después"], answer: 0 },
      { q: "Para pedir repetición: …", options: ["Come dice?", "Cosa vuole?", "Dove va?"], answer: 0 },
    ],
    cando: [
      "Puedo llamar y contestar con fórmulas nativas",
      "Puedo resolver malentendidos telefónicos",
      "Puedo confirmar citas por mensaje",
    ],
  },

  {
    id: "cu-a2-09", n: 9, level: "A2",
    title: "Comparar y elegir", titleIt: "Confrontare e scegliere",
    img: "/images/vocab/ropa.webp",
    goal: "Comparar opciones (ropa, productos, planes) y elegir con razones",
    goals: ["Usar comparativos y superlativos", "Comparar precios, calidades y planes", "Justificar una elección"],
    scenario: "Sales de compras con una amiga italiana indecisa (o eres tú el indeciso). Dos abrigos, tres cafeteras, cuatro planes para el sábado: toca comparar, opinar y decidir con estilo.",
    dialogue: [
      { speaker: "Sara", it: "Guarda questi due cappotti: quale preferisci?", es: "Mira estos dos abrigos: ¿cuál prefieres?" },
      { speaker: "Tu", it: "Quello blu è più elegante, ma quello grigio è più caldo.", es: "El azul es más elegante, pero el gris es más abrigado." },
      { speaker: "Sara", it: "Sì, e il grigio costa anche meno: ottantanove euro invece di centoventi.", es: "Sí, y el gris cuesta además menos: ochenta y nueve euros en vez de ciento veinte." },
      { speaker: "Tu", it: "Il blu è il più bello del negozio, però… è troppo caro per me.", es: "El azul es el más bonito de la tienda, pero… es demasiado caro para mí." },
      { speaker: "Sara", it: "Prendi il grigio! È buona qualità ed è anche scontato.", es: "¡Toma el gris! Es de buena calidad y además está rebajado." },
      { speaker: "Tu", it: "Hai ragione. È come il mio vecchio cappotto, ma molto meglio!", es: "Tienes razón. Es como mi abrigo viejo, ¡pero mucho mejor!" },
      { speaker: "Sara", it: "Vedi? A volte il più economico è la scelta più intelligente.", es: "¿Ves? A veces el más económico es la elección más inteligente." },
      { speaker: "Tu", it: "Ok, prendo il grigio. È la decisione migliore di oggi!", es: "Ok, tomo el gris. ¡Es la mejor decisión de hoy!" },
    ],
    comprehension: [
      { q: "¿Cuál es más elegante?", options: ["El gris", "El azul", "Los dos iguales"], answer: 1 },
      { q: "¿Cuánto cuesta el abrigo gris?", options: ["89 €", "120 €", "98 €"], answer: 0 },
      { q: "¿Cuál compró al final?", options: ["El azul", "El gris", "Ninguno"], answer: 1 },
    ],
    chunks: [
      { it: "…è più elegante / più caldo.", es: "…es más elegante / más abrigado." },
      { it: "…costa meno / costa di più.", es: "…cuesta menos / cuesta más." },
      { it: "è il più bello del negozio", es: "es el más bonito de la tienda" },
      { it: "è troppo caro per me", es: "es demasiado caro para mí" },
      { it: "invece di…", es: "en vez de…" },
      { it: "È come il mio, ma meglio!", es: "Es como el mío, ¡pero mejor!" },
    ],
    grammar: {
      focus: "Comparativo y superlativo",
      inductive: [
        { it: "Il grigio è più caldo del blu.", es: "El gris es más abrigado que el azul." },
        { it: "Costa meno di quello.", es: "Cuesta menos que ese." },
        { it: "È il più bello del negozio.", es: "Es el más bonito de la tienda." },
      ],
      rule: [
        "più/meno + adjetivo + di (más/menos… que): più bello di, meno caro di. Irregulares: migliore (mejor), peggiore (peor), maggiore (mayor).",
        "Superlativo: il/la più + adjetivo + di (el más… de): la più bella città d'Italia. Irregulares: il migliore, il peggiore. Absoluto con -issimo: bellissimo.",
      ],
      topicId: "g3-a2-comparativo",
      gaps: [
        { q: "Questo è ___ caro di quello.", options: ["più", "più che", "molto"], answer: 0 },
        { q: "È la pizza ___ buona della città.", options: ["più", "molto", "meno più"], answer: 0 },
        { q: "Il film di ieri era ___ di questo. (peor)", options: ["più peggiore", "peggiore", "più cattivo che"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "más/menos: la intensidad",
      tip: "«PIÙ bello» acentúa la primera palabra; «meno caro» baja suave. El superlativo absoluto con -ísimo se dice entero: bellIissimo (no «belísimo» corto).",
      pairs: [
        { a: "più bello", b: "bellissimo", note: "comparativo vs absoluto" },
        { a: "meglio", b: "migliore", note: "adverbio vs adjetivo" },
        { a: "meno caro", b: "meno male!", note: "menos caro vs menos mal" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Questo è più economico di quello. È il migliore del negozio»." },
        { kind: "semi", task: "Compara tu ciudad con Roma (5 frases): más grande, menos caótica, la mejor comida…" },
        { kind: "comunicativo", task: "Debate de compras: dos opciones, compara precio/calidad/estilo y decide con razones." },
        { kind: "autentico", task: "Compara dos productos reales en amazon.it en voz alta y elige uno justificando." },
      ],
    },
    reading: {
      lines: [
        { it: "Gli italiani sono esperti di qualità: sanno distinguere un capo ben fatto da uno dozzinale al tatto.", es: "Los italianos son expertos en calidad: distinguen una prenda bien hecha de una corriente al tacto." },
        { it: "La regola d'oro: meglio un capo buono che tre scadenti. La qualità costa meno, alla lunga.", es: "La regla de oro: mejor una prenda buena que tres malas. La calidad cuesta menos, a la larga." },
      ],
      question: "¿Cuál es la regla de oro italiana de las compras según el texto?",
    },
    writing: {
      task: "Escribe una comparación de dos ciudades italianas que conozcas o sueñes (7 frases): clima, comida, arte, gente. Termina con tu elección.",
      minWords: 55,
      tips: ["Al menos 3 comparativos y 1 superlativo", "invece di / mentre para contrastar"],
      model: [
        "Roma è più caotica di Firenze, ma Firenze è più piccola.",
        "La cucina romana è la più sostanziosa d'Italia, mentre quella fiorentina è più raffinata.",
        "Io sceglierei Roma: è la città più viva di tutte!",
      ],
    },
    culture: {
      title: "La calidad italiana",
      text: "«Made in Italy» es religión de calidad: mejor poco y bueno que mucho y malo. Se aplica a ropa, comida y hasta amistades. El italien sabe reconocer la calidad con los ojos cerrados — y te juzgará (con cariño) por tus elecciones.",
    },
    finalTask: {
      title: "Il confronto della settimana",
      brief: "Elige dos opciones reales de tu vida (restaurantes, rutas, móviles) y presenta la comparación completa: pros, contras, decisión y razones. Como influencer italiano.",
      checklist: ["Usé 5 comparativos correctos", "Usé al menos 1 superlativo", "Justifiqué la elección final"],
    },
    review: [
      { q: "«È troppo caro per me» =", options: ["es muy barato", "es demasiado caro", "es lo bastante caro"], answer: 1 },
      { q: "Firenze è ___ grande di Roma. (menos)", options: ["più", "meno", "molto"], answer: 1 },
      { q: "El superlativo de bueno es…", options: ["più buono solo", "il migliore", "buonissimo solo"], answer: 1 },
      { q: "Costa meno ___ quello.", options: ["di", "che di", "da"], answer: 0 },
    ],
    cando: [
      "Puedo comparar opciones con matices",
      "Puedo usar superlativos correctamente",
      "Puedo decidir y justificar con razones",
    ],
  },

  {
    id: "cu-a2-10", n: 10, level: "A2",
    title: "Cocinar juntos", titleIt: "Cucinare insieme",
    img: "/images/letture/cult-cucina-19.jpg",
    goal: "Seguir y explicar recetas, hablar de comida y cantidades",
    goals: ["Entender y explicar una receta paso a paso", "Hablar de ingredientes y cantidades", "Contar una experiencia culinaria"],
    scenario: "Cena internacional en la residencia: cada uno cocina un plato de su país. Tú eliges algo de casa; los italianos vigilarán cada paso con curiosidad científica.",
    dialogue: [
      { speaker: "Marco", it: "Allora, cosa ci prepari stasera?", es: "¿Entonces, qué nos preparas esta noche?" },
      { speaker: "Tu", it: "Un piatto tipico del mio paese: si chiama ceviche.", es: "Un plato típico de mi país: se llama ceviche." },
      { speaker: "Sara", it: "E come si fa? Che ingredienti servono?", es: "¿Y cómo se hace? ¿Qué ingredientes hacen falta?" },
      { speaker: "Tu", it: "Servono pesce fresco, limoni, cipolla rossa, coriandolo e peperoncino.", es: "Hacen falta pescado fresco, limones, cebolla roja, cilantro y chile." },
      { speaker: "Marco", it: "E si cuoce il pesce? O è crudo?", es: "¿Y se cuece el pescado? ¿O está crudo?" },
      { speaker: "Tu", it: "È il trucco! Il pesce si «cuoce» nel limone per mezz'ora.", es: "¡Es el truco! El pescado se «cuece» en limón durante media hora." },
      { speaker: "Sara", it: "Che interessante! E quanto limone serve?", es: "¡Qué interesante! ¿Y cuánto limón hace falta?" },
      { speaker: "Tu", it: "Circa otto limoni. Poi si serve freddo con il mais tostato. Vedrete!", es: "Unos ocho limones. Luego se sirve frío con maíz tostado. ¡Ya veréis!" },
    ],
    comprehension: [
      { q: "¿Qué plato prepara?", options: ["Carbonara", "Ceviche", "Risotto"], answer: 1 },
      { q: "¿Cómo se «cuece» el pescado?", options: ["Al horno", "En el limón", "A la plancha"], answer: 1 },
      { q: "¿Cuántos limones sirven?", options: ["Dos", "Ocho", "Diez"], answer: 1 },
    ],
    chunks: [
      { it: "Come si fa?", es: "¿Cómo se hace?" },
      { it: "Che ingredienti servono?", es: "¿Qué ingredientes hacen falta?" },
      { it: "Servono otto limoni.", es: "Hacen falta ocho limones." },
      { it: "si cuoce nel limone", es: "se cuece en el limón" },
      { it: "per mezz'ora", es: "durante media hora" },
      { it: "si serve freddo", es: "se sirve frío" },
      { it: "Vedrete!", es: "¡Ya veréis!" },
    ],
    grammar: {
      focus: "El si impersonal en recetas",
      inductive: [
        { it: "Si taglia la cipolla. Si aggiunge il sale.", es: "Se corta la cebolla. Se añade la sal." },
        { it: "Come si fa la carbonara?", es: "¿Cómo se hace la carbonara?" },
        { it: "In Italia si pranza all'una.", es: "En Italia se almuerza a la una." },
      ],
      rule: [
        "si + verbo en 3ª persona = se (impersonal): si cucina, si mangia, si dice. Plural si el objeto es plural: si aggiungono i pomodori.",
        "Para hablar de necesidad: servono / basta (hacen falta / basta con). «Quanto ne serve?» — «Bastano due etti».",
      ],
      topicId: "g3-b1-si-impersonale",
      gaps: [
        { q: "___ aggiunge il sale a fine cottura.", options: ["Si", "Ti", "Ci"], answer: 0 },
        { q: "Come ___ dice «pan» in italiano?", options: ["si", "ti", "ci"], answer: 0 },
        { q: "___ due etti di parmigiano. (hacen falta)", options: ["Serve", "Servono", "Basta"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Los ingredientes extranjeros",
      tip: "Los ingredientes no italianos se adaptan a la fonética italiana: coriandolo, mais (ma-ís), avocado. La doble en peperoncino: pepéroncino, con ritmo de tres pisos.",
      pairs: [
        { a: "peperoncino", b: "peperone", note: "el chile y el pimiento" },
        { a: "mais", b: "maionese", note: "extranjeros italianizados" },
        { a: "cipolla", b: "limone", note: "dobles ll simples" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Servono sei uova. Si sbattono con il formaggio. Si serve caldo»." },
        { kind: "semi", task: "Explica tu receta de casa: ingredientes (con cantidades) y 5 pasos con si + verbo." },
        { kind: "comunicativo", task: "MasterChef italiano: presenta tu plato al jurado, explica el proceso y defiende las elecciones." },
        { kind: "autentico", task: "Cocina siguiendo una receta italiana real en voz alta, narrando cada paso." },
      ],
    },
    reading: {
      letturaId: "cult-cucina-19",
      question: "¿Qué dice la lectura sobre la cocina regional italiana?",
    },
    writing: {
      task: "Escribe la receta completa de tu plato estrella (10 líneas): ingredientes con cantidades + pasos con si impersonal + consejo final.",
      minWords: 70,
      tips: ["Cada paso empieza con si + verbo", "Cantidades: un chilo di, due etti, mezzo litro"],
      model: [
        "Ingredienti: un chilo di pesce fresco, otto limoni, due cipolle rosse.",
        "Si taglia il pesce a cubetti e si spreme il limone sopra.",
        "Si lascia marinare per mezz'ora, poi si aggiunge la cipolla. Si serve freddo. Buon appetito!",
      ],
    },
    culture: {
      title: "La cocina como identidad",
      text: "Cada región italiana es una cocina: la Toscana del pane e olio, Nápoles de la pizza, Emilia de la pasta fresca. Preguntar «come si fa?» es un cumplido: los italianos adoran explicar sus recetas — y discutir las de los demás. La mesa es el país real.",
    },
    finalTask: {
      title: "La mia ricetta in italiano",
      brief: "Presenta tu receta de casa como si fueras chef en TV: ingredientes, cantidades, pasos con «si» y el truco secreto. 2 minutos de gloria.",
      checklist: ["Usé si impersonal en cada paso", "Di cantidades exactas", "Contesté al menos una pregunta del público"],
    },
    review: [
      { q: "«Si sbatte il tuorlo» =", options: ["Se bate la yema", "Se sirve la yema", "Se corta la yema"], answer: 0 },
      { q: "___ tre uova per il dolce. (hacen falta)", options: ["Serve", "Servono", "Basta"], answer: 1 },
      { q: "Come ___ fa questo piatto?", options: ["si", "ci", "ti"], answer: 0 },
      { q: "Si serve caldo / freddo: «si serve» es…", options: ["impersonal", "reflexivo puro", "pasado"], answer: 0 },
    ],
    cando: [
      "Puedo explicar una receta con si impersonal",
      "Puedo hablar de ingredientes y cantidades",
      "Puedo defender mis elecciones culinarias",
    ],
  },

  {
    id: "cu-a2-11", n: 11, level: "A2",
    title: "Planes y promesas", titleIt: "Programmi e promesse",
    img: "/images/conversazione/cs-13.jpg",
    goal: "Hacer planes concretos, prometer y confirmar por mensaje",
    goals: ["Proponer y organizar planes con futuro", "Confirmar, posponer y disculparte", "Elegir entre opciones con condizioni"],
    scenario: "El grupo de WhatsApp «Sabato sera» está en llamas: tres planes distintos para el sábado y todos con condiciones. Tienes que negociar, prometer y confirmar sin que te odien.",
    dialogue: [
      { speaker: "Sara", it: "Ragazzi, sabato: cinema o cena da me? Decidete!", es: "Chicos, sábado: ¿cine o cena en mi casa? ¡Decidíos!" },
      { speaker: "Tu", it: "Se andiamo al cinema, io prenoto io i biglietti!", es: "Si vamos al cine, ¡yo reservo las entradas!" },
      { speaker: "Marco", it: "Ma se ceniamo da Sara, io porterò il dolce!", es: "Pero si cenamos en casa de Sara, ¡yo llevaré el postre!" },
      { speaker: "Tu", it: "Per me è uguale… però il film finisce tardi, no?", es: "Para mí es igual… pero la película acaba tarde, ¿no?" },
      { speaker: "Sara", it: "Sì, alle undici e mezza. Se usciamo dopo, i treni non ci saranno più.", es: "Sí, a las once y media. Si salimos después, ya no habrá trenes." },
      { speaker: "Marco", it: "Allora cena da Sara! Tu che dici?", es: "¡Entonces cena en casa de Sara! ¿Tú qué dices?" },
      { speaker: "Tu", it: "D'accordo! Porterò io il vino, promesso!", es: "¡De acuerdo! Yo llevaré el vino, ¡prometido!" },
      { speaker: "Sara", it: "Perfetto! Allora ci vediamo sabato alle otto. Non arrivare in ritardo!", es: "¡Perfecto! Entonces nos vemos el sábado a las ocho. ¡No llegues tarde!" },
    ],
    comprehension: [
      { q: "¿Qué planes se barajan?", options: ["Cine o cena en casa", "Playa o montaña", "Concierto o museo"], answer: 0 },
      { q: "¿Por qué descartan el cine?", options: ["Es caro", "La película acaba tarde y no hay trenes", "No hay entradas"], answer: 1 },
      { q: "¿Qué promete llevar el protagonista?", options: ["El postre", "El vino", "El pan"], answer: 1 },
    ],
    chunks: [
      { it: "Se andiamo al cinema, prenoto io.", es: "Si vamos al cine, reservo yo." },
      { it: "Io porterò il vino!", es: "¡Yo llevaré el vino!" },
      { it: "Per me è uguale.", es: "Para mí es igual." },
      { it: "Promesso!", es: "¡Prometido!" },
      { it: "D'accordo!", es: "¡De acuerdo!" },
      { it: "Non arrivare in ritardo!", es: "¡No llegues tarde!" },
      { it: "Ci vediamo sabato alle otto.", es: "Nos vemos el sábado a las ocho." },
    ],
    grammar: {
      focus: "Futuro para promesas y se + futuro para condiciones",
      inductive: [
        { it: "Porterò io il dolce!", es: "¡Llevaré yo el postre!" },
        { it: "Se usciamo tardi, prenderemo un taxi.", es: "Si salimos tarde, cogeremos un taxi." },
        { it: "Ti chiamerò domani, promesso.", es: "Te llamaré mañana, prometido." },
      ],
      rule: [
        "El futuro expresa compromiso: porterò, prenoterò, chiamerò. «Io porterò» con pronombre tónico enfatiza la promesa.",
        "Condicional real: se + presente → futuro (se pioverà, resteremo a casa) o se + presente → presente (se esci tardi, non c'è treno). Ambas suenan natural en boca italiana.",
      ],
      topicId: "g-a2-futuro",
      gaps: [
        { q: "Domani ti ___ (chiamare), promesso!", options: ["chiamo", "chiamerò", "chiamavo"], answer: 1 },
        { q: "Se verrai, ___ (portare) io il dolce.", options: ["porto", "porterò", "portavo"], answer: 1 },
        { q: "Sabato ___ (vedersi) alle otto.", options: ["ci vediamo", "ci vedremo", "ci vedevamo"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La promesa entonada",
      tip: "«Promesso!» cae seco y firme. «D'accordo!» sube y baja convencido. La promesa italiana se oye en la voz: si dices «porterò» plano, nadie te cree.",
      pairs: [
        { a: "Promesso!", b: "Forse…", note: "firme vs dudoso" },
        { a: "D'accordo!", b: "Mah…", note: "convencido vs escéptico" },
        { a: "Ci sarò!", b: "Vediamo…", note: "compromiso vs evasiva" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Porterò io il vino. Ci sarò, promesso! Non arriverò in ritardo»." },
        { kind: "semi", task: "Confirma por «teléfono» tu asistencia a una cena: qué llevarás, a qué hora llegarás y una condición." },
        { kind: "comunicativo", task: "Negociación de grupo: dos planes rivales, condiciones de cada uno, decisión final unánime." },
        { kind: "autentico", task: "Organiza un plan real por WhatsApp en italiano con al menos 3 personas (o el Tutor IA)." },
      ],
    },
    reading: {
      lines: [
        { it: "Il sabato sera italiano si decide all'ultimo momento: la cena da qualcuno vince quasi sempre sul cinema.", es: "El sábado noche italiano se decide en el último momento: la cena en casa de alguien gana casi siempre al cine." },
        { it: "Chi invita dice «non portare niente», ma una bottiglia di vino è sempre ben accetta.", es: "Quien invita dice «no traigas nada», pero una botella de vino siempre es bienvenida." },
      ],
      question: "¿Qué gana casi siempre y qué se lleva aunque digan «no traigas nada»?",
    },
    writing: {
      task: "Escribe el mensaje de grupo para organizar el plan (7 frases): propuesta, condiciones, reparto de tareas, hora, lugar y confirmación.",
      minWords: 55,
      tips: ["Futuro para compromisos: porterò, arriverò", "Se + presente para condiciones"],
      model: [
        "Ragazzi, sabato cena da me alle otto!",
        "Io preparo la pasta, Marco porterà il dolce e voi il vino, d'accordo?",
        "Se qualcuno arriva in ritardo, la pasta sarà fredda! Promesso!",
      ],
    },
    culture: {
      title: "El rito del sábado noche",
      text: "La cena en casa es el plan social supremo italiano: se cocina, se discute, se ríe hasta la una. «Porto qualcosa?» es la pregunta ritual y «no, tranquillo» la respuesta ritual — que nadie cree. Llegar 15 minutos tarde está permitido; una hora, no.",
    },
    finalTask: {
      title: "Il gruppo del sabato",
      brief: "Simula la negociación completa del sábado: propuesta inicial, dos condiciones, reparto de tareas con promesas, hora y lugar final. Todo en futuros prometedores.",
      checklist: ["Usé futuro al menos 5 veces", "Negocié una condición con se", "Cerré con confirmación clara"],
    },
    review: [
      { q: "«Prometto che porterò il vino» — el tiempo de «porterò» es…", options: ["presente", "futuro", "pasado"], answer: 1 },
      { q: "Se pioverà, ___ a casa. (quedarnos)", options: ["restiamo", "resteremo", "restavamo"], answer: 1 },
      { q: "«Per me è uguale» =", options: ["para mí es lo mismo", "para mí es mejor", "para mí es tarde"], answer: 0 },
      { q: "«Non arrivare in ritardo!» es…", options: ["una promesa", "una orden negativa", "un deseo"], answer: 1 },
    ],
    cando: [
      "Puedo hacer planes con compromisos en futuro",
      "Puedo negociar condiciones con se",
      "Puedo confirmar y prometer con naturalidad",
    ],
  },

  {
    id: "cu-a2-12", n: 12, level: "A2",
    title: "Misión: ¡Florencia!", titleIt: "Missione: Firenze!",
    img: "/images/testi/rd-8.jpg",
    goal: "Repaso final A2: organizar y narrar un viaje completo a Florencia",
    goals: ["Repasar las funciones A2 en cadena", "Organizar un viaje de 2 días", "Autoevaluarte con el can-do A2"],
    scenario: "Fin de nivel: un finde completo en Florencia. Tren, hotel, museos, trattoria, clima, planes B y el relato del lunes. Todo lo aprendido en A2, encadenado. In bocca al lupo!",
    dialogue: [
      { speaker: "Addetto", it: "Buongiorno! Un biglietto per Firenze andata e ritorno?", es: "¡Buenos días! ¿Un billete para Florencia ida y vuelta?" },
      { speaker: "Tu", it: "Sì, per sabato mattina. Il primo treno che ora parte?", es: "Sí, para el sábado por la mañana. ¿El primer tren a qué hora sale?" },
      { speaker: "Hotel", it: "Hotel Belvedere, dica pure!", es: "Hotel Belvedere, ¡dígame!" },
      { speaker: "Tu", it: "Buongiorno! Vorrei confermare la prenotazione per due notti, a nome García.", es: "¡Buenos días! Querría confirmar la reserva para dos noches, a nombre García." },
      { speaker: "Museo", it: "Gli Uffizi sono esauriti per sabato, mi dispiace. Domenica?", es: "Los Uffizi están agotados para el sábado, lo siento. ¿Domingo?" },
      { speaker: "Tu", it: "Va bene domenica! E se pioverà, faremo prima il museo.", es: "¡Bien el domingo! Y si llueve, haremos primero el museo." },
      { speaker: "Amico", it: "Allora, com'è andato il viaggio? Racconta!", es: "¿Entonces, cómo fue el viaje? ¡Cuenta!" },
      { speaker: "Tu", it: "Fantastico! Firenze è più bella di come l'immaginavo. Vi porterò le foto!", es: "¡Fantástico! Florencia es más bonita de lo que imaginaba. ¡Os llevaré las fotos!" },
    ],
    comprehension: [
      { q: "¿Qué tipo de billete compra?", options: ["Solo ida", "Ida y vuelta", "Mensual"], answer: 1 },
      { q: "¿Qué problema hay con los Uffizi?", options: ["Están cerrados", "Agotados el sábado", "Cuestan mucho"], answer: 1 },
      { q: "¿Cómo describe Florencia al final?", options: ["Más bonita de lo que imaginaba", "Demasiado turística", "Pequeña"], answer: 0 },
    ],
    chunks: [
      { it: "andata e ritorno", es: "ida y vuelta" },
      { it: "Vorrei confermare la prenotazione.", es: "Querría confirmar la reserva." },
      { it: "È esaurito. / Sono esauriti.", es: "Está agotado. / Están agotados." },
      { it: "com'è andato il viaggio?", es: "¿cómo fue el viaje?" },
      { it: "più bella di come l'immaginavo", es: "más bonita de lo que la imaginaba" },
      { it: "In bocca al lupo!", es: "¡Mucha suerte!" },
    ],
    grammar: {
      focus: "Repaso A2: pasado, futuro, modales, comparativos",
      inductive: [
        { it: "Sono andato a Firenze e ho visitato gli Uffizi.", es: "Fui a Florencia y visité los Uffizi." },
        { it: "L'hotel era piccolo ma la stanza era pulitissima.", es: "El hotel era pequeño pero la habitación estaba limpísima." },
        { it: "Dovrei tornarci: è la città più bella che ho visto.", es: "Debería volver: es la ciudad más bonita que he visto." },
      ],
      rule: [
        "Repaso exprés A2: passato prossimo (ho visitato, sono andato), imperfetto (era, c'era, faceva), futuro (porterò, faremo), modales (dovrei, potrei, vorrei), comparativo/superlativo (più bella di, il migliore), si impersonal (si dice, come si fa), imperativo (prenota, non perdere).",
        "Cada punto enlaza con su tema en la Gramática. Si algo flaquea, vuelve a esa unidad antes de saltar a B1.",
      ],
      topicId: "g3-a2-progressivo",
      gaps: [
        { q: "Sabato ___ a Firenze. (ir, pasado)", options: ["sono andato", "andavo", "andrò"], answer: 0 },
        { q: "Il duomo è ___ monumento che ho visto. (el más impresionante)", options: ["il più impressionante", "più impressionante", "impressionantissimo"], answer: 0 },
        { q: "Se ___ tempo, visiteremo anche Fiesole. (tener)", options: ["avremo", "abbiamo", "avevamo"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Repaso fonético A2",
      tip: "Repaso: dobles largas (esaurito no, but «esaurìto» llana), z dz (Uffiz-ts-i), grupos sc/sch (Firenze fioren-tse). Y la música del relato: com'è andato? — bene, benissimo!",
      pairs: [
        { a: "Uffizi", b: "Firenze", note: "z ts" },
        { a: "esaurito", b: "prenotato", note: "ritmo del participio" },
        { a: "com'è andato?", b: "benissimo!", note: "pregunta y respuesta" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Recita tu kit A2: reservar, confirmar, comprar, comparar, prometer y narrar en pasado." },
        { kind: "semi", task: "Presenta tu viaje ideal de 2 días a una ciudad italiana: transporte, hotel, museos, plan B." },
        { kind: "comunicativo", task: "Simulación integral: estación + hotel + museo + relato del lunes. Las 4 escenas seguidas." },
        { kind: "autentico", task: "Misión final real: organiza (o sueña en voz alta) un viaje italiano completo y cuéntalo después." },
      ],
    },
    reading: {
      sourceId: "rd-8",
      question: "¿Qué visita la protagonista en Florencia y qué le impresiona más?",
    },
    writing: {
      task: "Escribe el relato completo de tu finde en Florencia (10 frases): viaje, hotel, museos, comida, clima y una valoración final con comparativo.",
      minWords: 80,
      tips: ["Mezcla imperfetto (decorado) y passato prossimo (acciones)", "Cierra con la città più… che ho mai visto"],
      model: [
        "Sabato sono partito presto: il treno era pieno ma comodo.",
        "L'hotel era in centro, piccolo ma perfetto. Ho visitato il Duomo e Ponte Vecchio: sono bellissimi!",
        "Domenica pioveva, così ho passato la mattinata agli Uffizi. Firenze è la città più bella che ho mai visto.",
      ],
    },
    culture: {
      title: "Florencia, cradle del Renacimiento",
      text: "Florencia es un museo a cielo abierto: el Duomo de Brunelleschi, los Uffizi con el Nacimiento de Venus, Ponte Vecchio con sus joyerías. Es además la cuna del italiano moderno: Dante escribió aquí la Divina Comedia que fijó la lengua. Reserva los Uffizi con antelación, siempre.",
    },
    finalTask: {
      title: "Un weekend a Firenze — simulazione finale",
      brief: "La simulación final A2: tren + hotel + museo + clima + relato del lunes. Encadena las 5 escenas en 3 minutos de italiano continuo. Es tu diploma de supervivencia A2.",
      checklist: ["Completé las 5 escenas sin español", "Usé pasado, futuro y comparativos", "Mi relato final tiene decorado (imperfetto) y acciones (passato prossimo)"],
    },
    review: [
      { q: "«Andata e ritorno» =", options: ["ida y vuelta", "solo ida", "primera clase"], answer: 0 },
      { q: "Gli Uffizi sono ___ per sabato. (agotados)", options: ["esauriti", "scontati", "chiusi"], answer: 0 },
      { q: "Il viaggio ___ benissimo! (ir, pasado)", options: ["è andato", "andava", "andrà"], answer: 0 },
      { q: "Firenze è ___ bella di Roma. (más)", options: ["più", "meno", "la più"], answer: 0 },
    ],
    cando: [
      "Puedo organizar un viaje completo en italiano",
      "Puedo narrar experiencias pasadas con matices",
      "Estoy listo/a para el nivel B1",
    ],
  },
];
