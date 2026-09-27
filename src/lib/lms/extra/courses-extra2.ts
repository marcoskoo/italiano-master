import type { Unit } from "../types";

/* ── Unidades y lecciones · paquete de expansión v4.0 ────────────────
   21 lecciones nuevas (77 → 98) en 7 unidades que completan la ruta:
   la jornada y las comidas (zero), la casa (A1), las compras (A2),
   la vida digital (B1), ambiente y economía (B2), las regiones de
   Italia (C1) y la lengua literaria (C2). Los IDs de vocabulario y
   ejercicios referencian los bancos existentes y el paquete v4. */

export const EXTRA_UNITS_2: Record<string, Unit[]> = {
  /* ══════════ DESDE CERO · +1 unidad ══════════ */
  zero: [
    { id: "u-zero-4", level: "zero", title: "La jornada y las comidas", titleIt: "La giornata e i pasti", lessons: [
      { id: "les-z4-1", level: "zero", title: "La rutina diaria", titleIt: "La routine di tutti i giorni",
        objectives: ["Contar tu día con verbos reflexivos básicos", "Usar svegliarsi, lavarsi y coricarsi", "Decir a qué hora haces cada cosa"],
        explanation: [
          "El italiano expresa la rutina con verbos reflexivos que ya conoces del español: svegliarsi (despertarse), lavarsi (lavarse), vestirsi (vestirse), riposarsi (descansar) y coricarsi (acostarse). La diferencia es que en italiano el pronombre va delante del verbo conjugado: mi sveglio, ti svegli, si sveglia. En infinitivo, el pronombre se pega al final: svegliarsi.",
          "Para decir a qué hora haces algo, los italianos usan alle + hora: mi sveglio alle sette (me despierto a las siete). Y para la frecuencia bastan tres palabras: sempre (siempre), spesso (a menudo) y mai (nunca). Con este pequeño kit ya puedes narrar tu día entero en italiano.",
        ],
        examples: [
          { it: "Mi sveglio alle sette e mi lavo la faccia.", es: "Me despierto a las siete y me lavo la cara." },
          { it: "Alle otto faccio colazione: caffè e cornetto.", es: "A las ocho desayuno: café y croissant." },
          { it: "Mi corico presto perché mi alzo presto.", es: "Me acuesto temprano porque me levanto temprano." },
        ],
        vocabIds: ["d2-svegliarsi", "d2-routine", "d2-coricarsi", "d1-mattina", "d1-dormire"],
        exerciseIds: ["ex-z4-001", "ex-z4-002"], conversationPrompt: { it: "A che ora ti svegli la mattina?", es: "¿A qué hora te despiertas por la mañana?" },
        checkpointIds: ["ex-z4-001"] },
      { id: "les-z4-2", level: "zero", title: "Las comidas del día", titleIt: "I pasti del giorno",
        objectives: ["Nombrar las cuatro comidas italianas", "Usar fare colazione / pranzo / cena", "Pedir algo de comer con vorrei"],
        explanation: [
          "El día alimentario italiano tiene cuatro estaciones: la colazione (desayuno, dulce y ligero: caffè o cappuccino con cornetto), il pranzo (comida, el plato fuerte del mediodía), la merenda (merienda, sagrada para los niños) y la cena (cena, más ligera que el pranzo). El verbo comodín es fare: fare colazione, fare merenda; pero para el almuerzo y la cena se dice pranzare y cenare.",
          "Para pedir en un bar o trattoria, el pasaporte mágico es vorrei (me gustaría / quisiera): vorrei un cappuccino, vorrei due cornetti. Es el condizionale de volere y suena educado en cualquier situación. Si lo acompañas de per favore y grazie, ya comes como un italiano.",
        ],
        examples: [
          { it: "La mattina faccio colazione al bar.", es: "Por la mañana desayuno en el bar." },
          { it: "A mezzogiorno pranzo con i colleghi.", es: "Al mediodía como con los colegas." },
          { it: "Vorrei un tè con una fetta di torta.", es: "Quisiera un té con una porción de tarta." },
        ],
        vocabIds: ["d1-colazione-prima", "d1-pranzo", "d1-cena", "d1-pasta", "d1-gelato"],
        exerciseIds: ["ex-z4-003", "ex-z4-004"], conversationPrompt: { it: "Cosa mangi a colazione?", es: "¿Qué comes en el desayuno?" },
        checkpointIds: ["ex-z4-003"] },
      { id: "les-z4-3", level: "zero", title: "¿Qué tiempo hace?", titleIt: "Che tempo fa?",
        objectives: ["Describir el tiempo con hace 5 expresiones", "Preguntar el tiempo antes de salir", "Unir clima y estaciones"],
        explanation: [
          "Para el clima, el italiano usa el verbo fare igual que el español usa hacer: che tempo fa? (¿qué tiempo hace?), fa sole (hace sol), fa freddo (hace frío), fa caldo (hace calor). La excepción más útil es c'è: c'è la pioggia o simplemente piove (llueve), igual que en español.",
          "Las estaciones piden preposiciones distintas: in primavera e in autunno, pero d'estate e d'inverno (di + artículo elidido). Con este mecanismo ya puedes decir: d'inverno fa freddo e d'estate vado al mare, es decir, media conversación italiana de cada diez.",
        ],
        examples: [
          { it: "Oggi fa sole e fa caldo.", es: "Hoy hace sol y hace calor." },
          { it: "D'inverno in montagna c'è la neve.", es: "En invierno en la montaña hay nieve." },
          { it: "Piove: prendi l'ombrello!", es: "Llueve: ¡coge el paraguas!" },
        ],
        vocabIds: ["w-sole", "w-pioggia", "w-neve", "w-vento", "w-caldo", "w-freddo"],
        exerciseIds: ["ex-z4-005", "ex-z4-006"], conversationPrompt: { it: "Che tempo fa oggi nella tua città?", es: "¿Qué tiempo hace hoy en tu ciudad?" },
        checkpointIds: ["ex-z4-005"] },
    ]},
  ],

  /* ══════════ A1 · +1 unidad ══════════ */
  A1: [
    { id: "u-a1-7", level: "A1", title: "La casa y los objetos", titleIt: "La casa e gli oggetti", lessons: [
      { id: "les-a1-19", level: "A1", title: "Las habitaciones", titleIt: "Le stanze della casa",
        objectives: ["Nombrar las estancias de una casa italiana", "Usar c'è y ci sono para describir", "Decir dónde está cada cosa"],
        explanation: [
          "La casa italiana se divide en cucina (cocina), camera da letto o simplemente camera (dormitorio), bagno (baño), salotto (salón) e ingresso (recibidor). Atención: camera significa habitación, no cámara, e il bagno es también el cuarto de baño con lavabo, doccia (ducha) y vasca (bañera).",
          "Para describir lo que hay, el italiano usa c'è (hay, singular) y ci sono (hay, plural): in cucina c'è un tavolo, nel salotto ci sono due divani. La preposición articulada indica el lugar: nel bagno (en el baño), nella camera (en el dormitorio), nell'ingresso (en el recibidor).",
        ],
        examples: [
          { it: "In casa mia ci sono tre camere e due bagni.", es: "En mi casa hay tres dormitorios y dos baños." },
          { it: "Nel salotto c'è un divano grande.", es: "En el salón hay un sofá grande." },
          { it: "La cucina è la stanza più luminosa.", es: "La cocina es la estancia más luminosa." },
        ],
        vocabIds: ["w-casa", "w-cucina", "w-camera", "w-bagno", "d1-armadio", "w-letto"],
        exerciseIds: ["ex-a1-046", "ex-a1-047"], conversationPrompt: { it: "Com'è casa tua? Quante stanze ci sono?", es: "¿Cómo es tu casa? ¿Cuántas habitaciones hay?" },
        checkpointIds: ["ex-a1-046"] },
      { id: "les-a1-20", level: "A1", title: "Muebles y objetos de cada día", titleIt: "Mobili e oggetti quotidiani",
        objectives: ["Nombrar los muebles principales", "Usar los posesivos il mio / la mia", "Describir tu habitación"],
        explanation: [
          "El mobiliario esencial: il letto (cama), l'armadio (armario), la scrivania (escritorio), la sedia (silla), il tavolo (mesa) e la libreria (estantería, para los libros). Atención al falso amigo: la libreria es la tienda de libros; el estante se dice scaffale.",
          "Los posesivos concuerdan con la cosa poseída, no con el dueño: il mio letto, la mia sedia, i miei libri, le mie chiavi. Esta es la diferencia clave con el español y hace que frases como suo fratello e sua sorella siano transparentes: el género lo manda el sustantivo.",
        ],
        examples: [
          { it: "Nel mio cameretto c'è un letto singolo.", es: "En mi cuartito hay una cama individual." },
          { it: "Le mie chiavi sono sulla scrivania.", es: "Mis llaves están sobre el escritorio." },
          { it: "I miei libri sono nella libreria.", es: "Mis libros están en la estantería." },
        ],
        vocabIds: ["w-letto", "d1-armadio", "d1-piccolo", "d1-nuovo", "d1-vecchio", "d1-bello"],
        exerciseIds: ["ex-a1-048", "ex-a1-049"], conversationPrompt: { it: "Descrivi la tua camera da letto.", es: "Describe tu dormitorio." },
        checkpointIds: ["ex-a1-048"] },
      { id: "les-a1-21", level: "A1", title: "Vivir en la ciudad o en el campo", titleIt: "Vivere in città o in campagna",
        objectives: ["Comparar casa y ciudad con aggettivi", "Usar vicino a / lontano da", "Expresar preferencias con mi piace"],
        explanation: [
          "Para comparar lugares, el italiano tiene los comparativos más usados: migliore (mejor) para la calidad y più grande / più piccolo para el tamaño. La vita in città è più comoda, la vita in campagna è più tranquilla: añade più delante del adjetivo y listo.",
          "Las preposiciones de lugar que necesitas: vicino a (cerca de), lontano da (lejos de), dentro (dentro), fuori (fuera). Abito vicino alla stazione, ma lontano dal centro. Y para las preferencias: mi piace la città, mi piacciono i parchi — singular con piace, plural con piacciono.",
        ],
        examples: [
          { it: "Il mio quartiere è tranquillo e vicino al parco.", es: "Mi barrio es tranquilo y está cerca del parque." },
          { it: "In campagna le case sono più grandi.", es: "En el campo las casas son más grandes." },
          { it: "Mi piace vivere in città: c'è sempre qualcosa da fare.", es: "Me gusta vivir en la ciudad: siempre hay algo que hacer." },
        ],
        vocabIds: ["w-citta", "w-strada", "w-piazza", "w-ponte", "d1-piccolo", "d1-bello"],
        exerciseIds: ["ex-a1-050", "ex-a1-051"], conversationPrompt: { it: "Preferisci vivere in città o in campagna? Perché?", es: "¿Prefieres vivir en la ciudad o en el campo? ¿Por qué?" },
        checkpointIds: ["ex-a1-050"] },
    ]},
  ],

  /* ══════════ A2 · +1 unidad ══════════ */
  A2: [
    { id: "u-a2-6", level: "A2", title: "Hacer compras", titleIt: "Fare acquisti", lessons: [
      { id: "les-a2-16", level: "A2", title: "En la tienda de ropa", titleIt: "Nel negozio di abbigliamento",
        objectives: ["Pedir tallas y probarse ropa", "Usar quanto costa y los colores", "Aceptar o rechazar con cortesía"],
        explanation: [
          "El diálogo típico de la tienda gira en torno a tres verbos: cercare (buscar), provare (probarse) e prendere (coger/llevar). Ho bisogno di una maglietta, posso provarla? Las tallas en Italia son numeradas: la taglia 44, y i camerini son los probadores.",
          "Para el precio, dos fórmulas: quanto costa? (singular) y quanto costano? (plural). Las respuestas de cortesía para rechazar: è un po' caro (es un poco caro), sto solo guardando (solo estoy mirando). La sonrisa es obligatoria también cuando dices no grazie.",
        ],
        examples: [
          { it: "Buongiorno, cerca qualcosa in particolare?", es: "Buenos días, ¿busca algo en particular?" },
          { it: "Posso provare questa giacca in taglia 48?", es: "¿Puedo probarme esta chaqueta en talla 48?" },
          { it: "Quanto costano queste scarpe?", es: "¿Cuánto cuestan estos zapatos?" },
        ],
        vocabIds: ["d2-taglia", "d2-provare", "w-vestito", "w-scarpe", "w-negozio", "w-costare"],
        exerciseIds: ["ex-a2-041", "ex-a2-042"], conversationPrompt: { it: "Sono un commesso: mi dica cosa cerca.", es: "Soy un dependiente: dígame qué busca." },
        checkpointIds: ["ex-a2-041"] },
      { id: "les-a2-17", level: "A2", title: "Pagar: efectivo y tarjeta", titleIt: "Pagare: contanti o carta",
        objectives: ["Pagar en efectivo o con tarjeta", "Entender el diálogo de la caja", "Pedir el recibo y la bolsa"],
        explanation: [
          "En la caja, el libreto es fijo: in contanti o con la carta? (¿en efectivo o con tarjeta?). Insertas la tarjeta y tecleas el PIN, o pagas en efectivo y recibes il resto (el cambio). Si la terminal no funciona, la sentencia típica: il POS non funziona, c'è solo il contante.",
          "Dos palabras que siempre conviene pedir: lo scontrino (el recibo fiscal, sagrado en Italia) y la busta (la bolsa, a menudo de pago). Preguntas útiles: avete una busta più grande? Mi fa lo scontrino, per favore? El scontrino es la prueba de tu compra: consérvalo.",
        ],
        examples: [
          { it: "Pago con la carta, grazie.", es: "Pago con la tarjeta, gracias." },
          { it: "Mi fa lo scontrino, per favore?", es: "¿Me hace el recibo, por favor?" },
          { it: "Non ho contanti: c'è il POS?", es: "No tengo efectivo: ¿hay datáfono?" },
        ],
        vocabIds: ["d2-contanti", "d2-carta-credito", "d2-scontrino", "w-pagare", "w-prezzo"],
        exerciseIds: ["ex-a2-043", "ex-a2-044"], conversationPrompt: { it: "Alla cassa: vuole pagare in contanti o con la carta?", es: "En la caja: ¿quiere pagar en efectivo o con tarjeta?" },
        checkpointIds: ["ex-a2-043"] },
      { id: "les-a2-18", level: "A2", title: "Regalos y ocasiones", titleIt: "Regali e occasioni",
        objectives: ["Hablar de regalos y ocasiones especiales", "Usar el passato prossimo en compras", "Agradecer y reaccionar a un regalo"],
        explanation: [
          "Los regalos italianos tienen sus rituales: se envuelven, se abren delante de quien los da y se agradece dos veces. Para las ocasiones: il compleanno (cumpleaños), l'anniversario (aniversario), il Natale (Navidad) y… el regalo de última hora, institución nacional de la perfumería de la esquina.",
          "Para contar qué compraste, el passato prossimo con avere: ho comprato un regalo a mia madre, ho preso un profumo per Giulia. La reacción del que recibe: che bello! Non dovevi! (¡no tenías por qué!) — frase social obligatoria antes de abrir el paquete.",
        ],
        examples: [
          { it: "Ho comprato un libro a Marco per il suo compleanno.", es: "Le compré un libro a Marco por su cumpleaños." },
          { it: "Questo regalo è per te: aprilo!", es: "Este regalo es para ti: ¡ábrelo!" },
          { it: "Grazie mille, non dovevi!", es: "Muchas gracias, ¡no tenías por qué!" },
        ],
        vocabIds: ["w-negozio", "d2-provare", "w-prezzo", "d1-bello", "d1-nuovo"],
        exerciseIds: ["ex-a2-045", "ex-a2-046"], conversationPrompt: { it: "Che regalo hai fatto l'ultima volta? A chi?", es: "¿Qué regalo hiciste la última vez? ¿A quién?" },
        checkpointIds: ["ex-a2-045"] },
    ]},
  ],
  /* ══════════ B1 · +1 unidad ══════════ */
  B1: [
    { id: "u-b1-6", level: "B1", title: "La vida digital", titleIt: "La vita digitale", lessons: [
      { id: "les-b1-13", level: "B1", title: "El smartphone y las apps", titleIt: "Lo smartphone e le app",
        objectives: ["Hablar de tu teléfono y sus funciones", "Usar pronombres combinados con el imperativo informal", "Quejarte de la tecnología (¡siempre pasa algo!)"],
        explanation: [
          "La vida digital italiana ha adoptado el inglés con acento: lo smartphone (o il cellulare), l'app, la password, il wifi. Pero los verbos son bien italianos: scaricare (descargar), installare (instalar), aggiornare (actualizar), ricaricare (recargar, tanto el teléfono como el crédito). Frase nacional: mi si è scaricata la batteria (se me descargó la batería), con ese si impersonal tan italiano.",
          "Para dar instrucciones digitales, el imperativo informal con pronombres pegados: scaricala (descárgala), aggiornalo (actualízalo), dimmi (dime). Si el imperativo termina en vocal + pronombre comenzando por vocal, la consonante se dobla por eufonía: dimmi, fammi, dammi. La eufonía es la manera italiana de que las palabras no tropiecen al hablar.",
        ],
        examples: [
          { it: "Ho scaricato un'app nuova per imparare l'italiano.", es: "Descargué una app nueva para aprender italiano." },
          { it: "Mi si è scaricata la batteria, dammi il caricatore!", es: "Se me descargó la batería, ¡dame el cargador!" },
          { it: "Non mi arriva il messaggio: controlla il wifi.", es: "No me llega el mensaje: revisa el wifi." },
        ],
        vocabIds: ["w-telefono", "w-computer", "w2-schermo", "w-messaggio", "w-password", "d2-batteria"],
        exerciseIds: ["ex-b1-031", "ex-b1-032"], conversationPrompt: { it: "Quante ore al giorno passi sul telefono? Sii onesto!", es: "¿Cuántas horas al día pasas en el teléfono? ¡Sé honesto!" },
        checkpointIds: ["ex-b1-031"] },
      { id: "les-b1-14", level: "B1", title: "El trabajo remoto y las videollamadas", titleIt: "Lo smart working e le videochiamate",
        objectives: ["Hablar del teletrabajo con el vocabulario actual", "Usar el congiuntivo presente con pensare che / credo che", "Proponer, aceptar y aplazar reuniones"],
        explanation: [
          "La pandemia dejó en italiano el préstamo dello smart working (teletrabajo), junto a palabras más antiguas como il telelavoro. El kit de la videollamada: la videochiamata, il link, condividere lo schermo (compartir pantalla), mettere il muto (silenciarse) y… la frase que oye cada italiano: ti senti? mi senti male? (¿me oyes? te oigo mal).",
          "Para opinar sobre el trabajo remoto, el congiuntivo presente es obligatorio después de pensare che, credo che, secondo me è possibile che: credo che lo smart working sia utile, penso che le videochiamate siano stancanti. El congiuntivo es el modo de la opinión no garantizada: si lo afirmas con seguridad, usas el indicativo (penso che è una buona idea se tolera en el habla, pero el congiuntivo suena más culto).",
        ],
        examples: [
          { it: "Domani ho tre videochiamate di fila.", es: "Mañana tengo tres videollamadas seguidas." },
          { it: "Credo che lo smart working sia più comodo.", es: "Creo que el teletrabajo es más cómodo." },
          { it: "Puoi condividere lo schermo, per favore?", es: "¿Puedes compartir la pantalla, por favor?" },
        ],
        vocabIds: ["w2-videochiamata", "d2-chiamata", "w-riunione", "w2-schermo", "w-computer"],
        exerciseIds: ["ex-b1-033", "ex-b1-034"], conversationPrompt: { it: "Preferisci lo smart working o l'ufficio? Perché?", es: "¿Prefieres el teletrabajo o la oficina? ¿Por qué?" },
        checkpointIds: ["ex-b1-033"] },
      { id: "les-b1-15", level: "B1", title: "Redes sociales y vida online", titleIt: "I social e la vita online",
        objectives: ["Hablar de redes sociales con naturalidad", "Usar el passato prossimo vs imperfetto para narrar", "Reaccionar a noticias y publicaciones"],
        explanation: [
          "El italiano dice i social (las redes) en plural, sin artículo completo, y ha verificado su propio diccionario digitale: pubblicare un post (publicar), mettere like o mettere un like (dar like), seguire qualcuno (seguir a alguien), scrivere un commento (comentar). El italiano medio pasa más tiempo en WhatsApp que al teléfono: se dice hasta ti ho mandato un vocale (te mandé un mensaje de voz).",
          "Para narrar lo que pasó online, se alterna imperfetto (escenario) y passato prossimo (evento): scorrevo Instagram quando ho visto la tua foto (estaba scrolleando Instagram cuando vi tu foto). El imperfetto pinta el telón de fondo; el passato prossimo, la acción que lo rompe. Esta alternancia es el corazón de todo relato italiano.",
        ],
        examples: [
          { it: "Seguo una pagina che pubblica ricette siciliane.", es: "Sigo una página que publica recetas sicilianas." },
          { it: "Scorrevo il feed quando ho visto la notizia.", es: "Estaba scrolleando el feed cuando vi la noticia." },
          { it: "Mettimi un like, dai!", es: "Ponme un like, ¡venga!" },
        ],
        vocabIds: ["w-internet", "w-messaggio", "d3-condividere", "d1-seguire", "w2-schermo"],
        exerciseIds: ["ex-b1-035", "ex-b1-036"], conversationPrompt: { it: "Quanti social usi? Sono più un piacere o una schiavitù?", es: "¿Cuántas redes usas? ¿Son más un placer o una esclavitud?" },
        checkpointIds: ["ex-b1-035"] },
    ]},
  ],

  /* ══════════ B2 · +1 unidad ══════════ */
  B2: [
    { id: "u-b2-5", level: "B2", title: "Ambiente y economía", titleIt: "Ambiente ed economia", lessons: [
      { id: "les-b2-10", level: "B2", title: "El clima y el medio ambiente", titleIt: "Il clima e l'ambiente",
        objectives: ["Discutir sobre la crisis climática con vocabulario preciso", "Usar la construcción pasiva con venire y essere", "Expresar causas y consecuencias (a causa di, per via di)"],
        explanation: [
          "El debate ambiental tiene su léxico: il riscaldamento globale (el calentamiento global), le emissioni, i rifiuti (la basura), il riciclo (il riciclaggio) e le energie rinnovabili. L'Italia parla di raccolta differenziata (recolección selectiva) con orgullo municipal: cada comune tiene sus reglas y sus colores de contenedores, y los italianos defienden su sistema como si fuera un equipo de fútbol.",
          "La pasiva con venire es más viva que con essere en el habla: i rifiuti vengono raccolti ogni martedì (la basura se recoge los martes), l'energia viene prodotta dal sole. Venire le da a la pasiva un tono dinámico y procesual. Para las causas: a causa di / per via di + sustantivo (a causa del traffico), grazie a (gracias a, positivo).",
        ],
        examples: [
          { it: "Il riscaldamento globale viene considerato un'emergenza.", es: "El calentamiento global se considera una emergencia." },
          { it: "In Italia la raccolta differenziata è obbligatoria.", es: "En Italia la recolección selectiva es obligatoria." },
          { it: "A causa dell'inquinamento, il livello del mare sta salendo.", es: "A causa de la contaminación, el nivel del mar está subiendo." },
        ],
        vocabIds: ["w-ambiente", "w-inquinamento", "d3-rifiuti", "d3-riscaldamento", "w-sole", "w-vento"],
        exerciseIds: ["ex-b2-025", "ex-b2-026"], conversationPrompt: { it: "Cosa fai tu, concretamente, per l'ambiente?", es: "¿Qué haces tú, concretamente, por el ambiente?" },
        checkpointIds: ["ex-b2-025"] },
      { id: "les-b2-11", level: "B2", title: "La economía de cada día", titleIt: "L'economia di tutti i giorni",
        objectives: ["Entender noticias económicas básicas", "Usar el condizionale para hipótesis y consejos", "Comparar precios y situaciones con tanto… quanto"],
        explanation: [
          "El léxico económico cotidiano: l'inflazione (¡los italianos la llaman con la f!), il mutuo (la hipoteca), l'affitto (el alquiler), il conto (la cuenta), risparmiare (ahorrar) e investire (invertir). La pregunta nacional desde 2022: quanto costa la vita? (¿cuánto cuesta la vida?). El costo de la vida se discute en cada mesa, con datos del supermercato como si fueran estadísticas oficiales.",
          "El condizionale presente es el modo de los consejos prudentes: dovremmo risparmiare di più (deberíamos ahorrar más), conviene investire? (¿conviene invertir?). Para comparaciones equilibradas, tanto… quanto y così… come: la città è tanto cara quanto stressante. La economía personal también tiene su retórica.",
        ],
        examples: [
          { it: "L'inflazione ha fatto salire i prezzi del supermercato.", es: "La inflación hizo subir los precios del supermercado." },
          { it: "Dovremmo risparmiare di più quest'anno.", es: "Deberíamos ahorrar más este año." },
          { it: "L'affitto a Milano è tanto alto quanto a Madrid.", es: "El alquiler en Milán es tan alto como en Madrid." },
        ],
        vocabIds: ["w-banca", "w-mercato", "w-prezzo", "d4-inflazione", "w-costare"],
        exerciseIds: ["ex-b2-027", "ex-b2-028"], conversationPrompt: { it: "Secondo te, è meglio risparmiare o godersi la vita?", es: "Según tú, ¿es mejor ahorrar o disfrutar la vida?" },
        checkpointIds: ["ex-b2-027"] },
      { id: "les-b2-12", level: "B2", title: "Consumo consciente", titleIt: "Consumo consapevole",
        objectives: ["Argumentar sobre consumo y sostenibilidad", "Usar el periodo ipotetico de segundo tipo", "Ceder y conceder un punto (d'accordo, però…)"],
        explanation: [
          "El consumo consciente tiene sus verbos: comprare all'ingrosso (comprar al por mayor), scegliere prodotti a chilometro zero (elegir productos de kilómetro cero), sprecare meno (desperdiciar menos) y riparare en lugar di buttare (reparar en vez de tirar). La Italia del ahorro es también la Italia del reúso creativo: non si butta niente! (¡no se tira nada!), dice cada abuela italiana antes de guardar cada caja y cada botella.",
          "Para hipótesis irreales, el periodo ipotetico di secondo tipo: se + imperfetto → condizionale: se comprassimo solo il necessario, risparmieremmo un sacco (si compráramos solo lo necesario, ahorraríamos un montón). La estructura es idéntica a la española, pero el italiano usa el condizionale (no el subjuntivo) en la segunda parte: risparmieremmo, no ahorráramos.",
        ],
        examples: [
          { it: "Se usassi meno la macchina, inquinerei meno.", es: "Si usara menos el coche, contaminaría menos." },
          { it: "D'accordo, però il bio costa il doppio.", es: "De acuerdo, pero lo ecológico cuesta el doble." },
          { it: "In casa non si butta via niente.", es: "En casa no se tira nada." },
        ],
        vocabIds: ["w-ambiente", "w-mercato", "w-prezzo", "d3-rifiuti", "w2-riunione"],
        exerciseIds: ["ex-b2-029", "ex-b2-030"], conversationPrompt: { it: "Saresti disposto a pagare di più per un prodotto sostenibile?", es: "¿Estarías dispuesto a pagar más por un producto sostenible?" },
        checkpointIds: ["ex-b2-029"] },
    ]},
  ],

  /* ══════════ C1 · +1 unidad ══════════ */
  C1: [
    { id: "u-c1-4", level: "C1", title: "Italia y sus regiones", titleIt: "L'Italia e le sue regioni", lessons: [
      { id: "les-c1-8", level: "C1", title: "El mosaico regional", titleIt: "Il mosaico regionale",
        objectives: ["Describir la variedad regional italiana", "Usar el congiuntivo imperfetto en relatos hipotéticos", "Manejar el léxico geográfico e identitario"],
        explanation: [
          "Italia son veinte regiones con estatutos especiales para cinco de ellas (Sicilia, Cerdeña, Valle de Aosta, Friuli-Venezia Giulia y Trentino-Alto Adigio). Cada una tiene su paisaje, su cocina y su carácter: la eficiencia de Lombardía no es la calma pugliese, y el dialecto napolitano no es el veneciano. Los propios italianos hablan de Italia como de una federación de pequeñas patrias: si dices que la cocina italiana es una sola, un italiano te corrige inmediatamente.",
          "El congiuntivo imperfetto es la clave del estilo narrativo culto: se fossi nato a Palermo, parleresti dialetto siciliano; pareva che il nord e il sud fossero due paesi diversi. En la hipótesis de segundo tipo y tras pareva che / sembrava che, el imperfetto de subjuntivo es obligatorio y distingue al hablante culto. Para el español, la forma coincidida (fossero = fueran) hace la vida fácil.",
        ],
        examples: [
          { it: "L'Italia è un mosaico di regioni, ognuna con la sua identità.", es: "Italia es un mosaico de regiones, cada una con su identidad." },
          { it: "Se vivessi in Toscana, imparerei anche il dialetto.", es: "Si viviera en Toscana, aprendería también el dialecto." },
          { it: "Pareva che il Bel Paese fosse indivisibile, e invece…", es: "Parecía que el Bel Paese fuera indivisible, y sin embargo…" },
        ],
        vocabIds: ["w-citta", "w-piazza", "w-ponte", "w2-duomo", "w2-trama"],
        exerciseIds: ["ex-c1-015", "ex-c1-016"], conversationPrompt: { it: "Quale regione italiana ti incuriosisce di più? Motiva la scelta.", es: "¿Qué región italiana te intriga más? Justifica la elección." },
        checkpointIds: ["ex-c1-015"] },
      { id: "les-c1-9", level: "C1", title: "Dialectos e italiano estándar", titleIt: "Dialetti e italiano standard",
        objectives: ["Entender la relación entre italiano y dialectos", "Usar el gerundio compuesto para perfeccionar el discurso", "Reconocer italianismos regionales frecuentes"],
        explanation: [
          "El italiano estándar se basa en el toscano literario, pero en casa, sobre todo al sur y en el noreste, muchos italiani hablan dialecto todavía. El dialecto no es italiano mal hablado: el siciliano, el napolitano o el veneciano son lenguas romances hermanas, con su gramática y su literatura. La televisión unificó la lengua en los años sesenta; la escuela y la migración interna hicieron el resto. Hoy el dialecto sobrevive en la afectividad, en las recetas de la abuela y en las redes sociales, donde los jóvenes lo usan con ironía.",
          "El gerundio compuesto (avendo + participio / essendo + participio) expresa anterioridad respecto al verbo principal: avendo vissuto a Napoli, capisco il dialetto (habiendo vivido en Nápoles, entiendo el dialecto). Es una estructura elegante que sustituye a las subordinadas causales y eleva el registro del discurso.",
        ],
        examples: [
          { it: "Avendo studiato a Bologna, conosco bene l'Emilia.", es: "Habiendo estudiado en Bolonia, conozco bien la Emilia." },
          { it: "In famiglia parlavano dialetto, a scuola italiano.", es: "En casa hablaban dialecto, en la escuela italiano." },
          { it: "Essendo cresciuto tra due lingue, si sente doppio.", es: "Habiendo crecido entre dos lenguas, se siente doble." },
        ],
        vocabIds: ["w2-trama", "w-romanzo", "w-poeta", "d5-metafora"],
        exerciseIds: ["ex-c1-017", "ex-c1-018"], conversationPrompt: { it: "In Spagna esistono il catalano, il basco, il gallego… paragona la situazione italiana.", es: "En España existen el catalán, el vasco, el gallego… compara la situación italiana." },
        checkpointIds: ["ex-c1-017"] },
      { id: "les-c1-10", level: "C1", title: "Viajar por el Bel Paese", titleIt: "Viaggiare nel Bel Paese",
        objectives: ["Narrar viajes con estilo fluido", "Usar conectores de alto nivel (d'altronde, peraltro)", "Dominar la entonación de la enumeración elegante"],
        explanation: [
          "El Bel Paese (nombre que le dio Dante, antes que la marca de queso) se recorre mejor despacio: le città d'arte, i borghi, le coste, le montagne. El vocabulario del viajero culto incluye il borgo (el pueblo medieval), il lungomare (el paseo marítimo), il sagrato (la explanada de la iglesia) e la sosta (la parada del viaje). El arte de viajar en italiano es el arte del ritmo: no cuenta cuánto viste, sino cómo lo has visto.",
          "Los conectores de alto nivel sostienen la narración: d'altronde (por lo demás), peraltro (además), in fin dei conti (al fin y al cabo), a ben vedere (bien visto). En la enumeración elegante, la tríada non solo… ma anche… e per giunta: Firenze non solo ha i musei, ma anche i ponti, e per giunta le colline. El ritmo es la firma del hablante C1.",
        ],
        examples: [
          { it: "Quel borgo umbro mi è rimasto nel cuore.", es: "Aquel pueblo umbro me quedó en el corazón." },
          { it: "In fin dei conti, il viaggio migliore è quello in treno.", es: "Al fin y al cabo, el mejor viaje es el tren." },
          { it: "Non solo il cibo: anche la luce, e per giunta la gente.", es: "No solo la comida: también la luz, y por añadidura la gente." },
        ],
        vocabIds: ["w2-duomo", "w-piazza", "w-ponte", "w-citta", "w2-binario"],
        exerciseIds: ["ex-c1-019", "ex-c1-020"], conversationPrompt: { it: "Racconta un viaggio che ti ha cambiato, con connettivi eleganti.", es: "Cuenta un viaje que te cambió, con conectores elegantes." },
        checkpointIds: ["ex-c1-019"] },
    ]},
  ],

  /* ══════════ C2 · +1 unidad ══════════ */
  C2: [
    { id: "u-c2-4", level: "C2", title: "La lengua de la literatura", titleIt: "La lingua della letteratura", lessons: [
      { id: "les-c2-8", level: "C2", title: "La tradición literaria", titleIt: "La tradizione letteraria",
        objectives: ["Reconocer las líneas maestras de la literatura italiana", "Usar el congiuntivo trapassato con elegancia", "Analizar un período literario simple"],
        explanation: [
          "La literatura italiana es un río largo: dal Dolce Stil Novo a Dante y Petrarca, dal Renacimiento de Ariosto y Tasso alla commedia goldoniana, dal Verismo de Verga ai futuristi, hasta Calvino, Morante e Eco. Cada época tiene su cifra: la teología amorosa del Stil Novo, la polifonía dantesca, la objetividad del Verismo. Leer a los italianos en la lengua original es la licencia de conducir del hablante C2.",
          "El congiuntivo trapassato (avesse scritto / fosse stato) es el tiempo del contrafactual literario: se Dante non avesse scritto la Commedia, l'italiano sarebbe un'altra lingua. Se forma con el congiuntivo imperfetto del auxiliar + participio. En la prosa culta, el trapassato sostiene la reflexión histórica y el lamento: se avessimo letto Calvino prima…",
        ],
        examples: [
          { it: "Se Dante non avesse scritto la Commedia, l'italiano sarebbe diverso.", es: "Si Dante no hubiera escrito la Commedia, el italiano sería distinto." },
          { it: "Verga raccontava la Sicilia senza giudicarla.", es: "Verga contaba Sicilia sin juzgarla." },
          { it: "Calvino cercava la leggerezza, Eco l'inganno.", es: "Calvino buscaba la levedad, Eco el engaño." },
        ],
        vocabIds: ["w-romanzo", "w-poeta", "w-scrittore", "d5-metafora", "w2-trama"],
        exerciseIds: ["ex-c2-011", "ex-c2-012"], conversationPrompt: { it: "Quale scrittore italiano tradurresti nella tua lingua? Perché lui o lei?", es: "¿A qué escritor italiano traducirías a tu lengua? ¿Por qué él o ella?" },
        checkpointIds: ["ex-c2-011"] },
      { id: "les-c2-9", level: "C2", title: "Poesía y retórica", titleIt: "Poesia e retorica",
        objectives: ["Leer versos en voz alta con métrica", "Reconocer metáfora, aliteración y climax", "Usar la pregunta retórica en la escritura"],
        explanation: [
          "La poesía italiana vive de la musicalidad: l'endecasillabo (el endecasílabo, once sílabas con acento en la décima) e il settenario sostienen desde hace ocho siglos el verso italiano. La rima ya no es obligatoria desde el Novecientos, pero l'accento sigue siendo el pulso del verso. Leer en voz alta es la única manera de oír la métrica: la voz debe respirar donde respira el verso.",
          "Las figuras retóricas esenciales se aprenden mejor con ejemplos canónicos: la metáfora petrarquiana (chiome d'oro), l'alitterazione (lo vedi? il vento vibra), il climax ascendente y la pregunta retórica, que abre el discurso y lo cierra. En la escritura C2, la retórica no es adorno: es la arquitectura invisible que sostiene la persuasión.",
        ],
        examples: [
          { it: "Erano i capei d'oro a l'aura sparsi.", es: "Eran los cabellos de oro esparcidos al aura (Petrarca)." },
          { it: "Ma che vai cercando, cuore inquieto?", es: "Pero ¿qué buscas, corazón inquieto?" },
          { it: "E allora? Il verso resta, la musica resta.", es: "¿Y entonces? El verso queda, la música queda." },
        ],
        vocabIds: ["w-poeta", "d5-metafora", "w-romanzo"],
        exerciseIds: ["ex-c2-013", "ex-c2-014"], conversationPrompt: { it: "Leggi ad alta voce due versi di un poeta italiano: dove cade l'accento?", es: "Lee en voz alta dos versos de un poeta italiano: ¿dónde cae el acento?" },
        checkpointIds: ["ex-c2-013"] },
      { id: "les-c2-10", level: "C2", title: "Escribir con estilo: latinismos y toscanismos", titleIt: "Scrivere con stile: latinismi e toscanismi",
        objectives: ["Usar latinismos vivos del italiano culto", "Reconocer toscanismos del estándar", "Pulir un texto con revisión de estilo"],
        explanation: [
          "El italiano culto conserva latinismos vivos que el español ha perdido o traducido: ad hoc, in itinere, ex abrupto, iter (el iter processuale) y perfino il casus belli. La prosa italiana usa el botta e risposta (elbate y respuesta), il dietrofront (el giro de 180 grados) y el tergiversare. El toscano ha dejado en el estándar perlas como babbo (papá, alternativo a papà), la buca delle lettere (buzón) e il sedano (apio), además del legendario che polivalente.",
          "La revisión de estilo C2 sigue tres pasadas: la primera para la sintaxis (periodos demasiado largos), la segunda para el léxico (repeticiones y precisión), la tercera para el ritmo (alternancia de periodos breves y largos). Scrivere bene non è aggiungere: è togliere (escribir bien no es añadir: es quitar). La última palabra del estilo italiano es la sobriedad.",
        ],
        examples: [
          { it: "Una soluzione ad hoc, studiamo il caso in itinere.", es: "Una solución ad hoc, estudiamos el caso in itinere." },
          { it: "Il babbo di Pierpaolo fa il sedano in brodo.", es: "El papá de Pierpaolo hace apio en caldo." },
          { it: "Scrivere bene non è aggiungere: è togliere.", es: "Escribir bien no es añadir: es quitar." },
        ],
        vocabIds: ["d5-metafora", "w-romanzo", "w-scrittore"],
        exerciseIds: ["ex-c2-015", "ex-c2-016"], conversationPrompt: { it: "Riscrivi in cinquanta parole un testo tuo, togliendo il superfluo.", es: "Reescribe en cincuenta palabras un texto tuyo, quitando lo superfluo." },
        checkpointIds: ["ex-c2-015"] },
    ]},
  ],
};

