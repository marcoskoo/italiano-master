import type { Exercise } from "../types";

/* ── Ejercicios EXTRA · paquete v6.0 ─────────────────────────────────
   · ex-let-031…046 → lecturas rd-23…rd-30 (reading-extra3)
   · ex-asc-029…044 → escucha ls-17…ls-24 (listening-extra3)
   · ex-rst-001…006 → unidad u-a2-7 Al ristorante (courses-extra3)
   · ex-lav-001…006 → unidad u-b1-7 Il mondo del lavoro
   · ex-gas-001…006 → unidad u-b2-6 Italia a tavola
   · ex-med-001…006 → unidad u-c1-5 Attualità e media */

export const EXERCISES_EXTRA_3: Exercise[] = [
  /* ══ lecturas rd-23…rd-30 ══ */
  { id: "ex-let-031", type: "tf", level: "A1", topic: "vocabolario", prompt: "En “Il primo giorno di scuola”: Marco va a scuola en bicicleta.", statement: "Marco va a scuola in bicicletta.", answer: true, explain: "«Prendo la bici»: en bicicleta, como todos los días en Bolonia." },
  { id: "ex-let-032", type: "mc", level: "A1", topic: "vocabolario", prompt: "En la lectura, ¿qué hace Marco durante el recreo?",
    options: ["Habla con su amigo Luca", "Come solo", "Va a la biblioteca", "Llama a su madre"], answer: 0, explain: "Chiacchierare con Luca en el patio: el recreo italiano clásico." },
  { id: "ex-let-033", type: "tf", level: "A2", topic: "vocabolario", prompt: "En “Un weekend alle Cinque Terre”: el tren pasa entre los pueblos.", statement: "Il treno collega i cinque borghi.", answer: true, explain: "El tren costero es el hilo que une los cinco pueblos." },
  { id: "ex-let-034", type: "mc", level: "A2", topic: "vocabolario", prompt: "¿Qué se comería otra vez la autora del fin de semana?",
    options: ["La focaccia col formaggio", "El menú del hotel", "La pizza", "El helado"], answer: 0, explain: "La focaccia col formaggio di Recco: «da rifare» (para repetir)." },
  { id: "ex-let-035", type: "tf", level: "B1", topic: "vocabolario", prompt: "En “La trattoria di nonna Elvira”: el abuelo aprendió a cocinar en un restaurante.", statement: "Il nonno ha imparato a cucinare in un ristorante.", answer: false, explain: "Aprendió de su madre y su abuela, de pie sobre un banquito." },
  { id: "ex-let-036", type: "mc", level: "B1", topic: "grammatica", prompt: "«Ogni ricetta era una storia». ¿Qué tiempo verbal es “era”?",
    options: ["Imperfecto (passato prossimo)", "Pretérito perfecto", "Futuro", "Condicional"], answer: 0, explain: "era = imperfetto de essere: descripciones en el pasado narrativo." },
  { id: "ex-let-037", type: "tf", level: "B1", topic: "situazioni", prompt: "En “Il colloquio di lavoro”: a Giulia le preguntan por sus puntos fuertes.", statement: "Le chiedono i suoi punti di forza.", answer: true, explain: "Punti di forza e punti deboli: la pareja fija de toda entrevista." },
  { id: "ex-let-038", type: "mc", level: "B1", topic: "vocabolario", prompt: "¿Cómo termina la entrevista de Giulia?",
    options: ["La llamarán la semana siguiente", "La contratan en el acto", "Le piden otro título", "La rechazan"], answer: 0, explain: "«La chiameremo la prossima settimana»: el clásico final en suspenso." },
  { id: "ex-let-039", type: "tf", level: "B2", topic: "cultura", prompt: "En “Il caffè nella cultura italiana”: el cappuccino después del mediodía se considera error.", statement: "Il cappuccino dopo pranz è considerato un errore.", answer: true, explain: "La leche «llena» después de comer: un límite cultural real, no ley." },
  { id: "ex-let-040", type: "mc", level: "B2", topic: "vocabolario", prompt: "Según el artículo, ¿qué es «la pausa caffè» en la oficina?",
    options: ["Un ritual social breve", "Una hora de descanso larga", "Una moda reciente", "Un derecho legal"], answer: 0, explain: "Un micro-ritual social de cinco minutos que sostiene las relaciones." },
  { id: "ex-let-041", type: "tf", level: "C1", topic: "cultura", prompt: "En “La città lenta”: el movimiento nació como respuesta a la vida acelerada.", statement: "Il movimento nasce come risposta alla vita accelerata.", answer: true, explain: "Slow city = resistencia tranquila al apuro homogéneo." },
  { id: "ex-let-042", type: "mc", level: "C1", topic: "grammatica", prompt: "«Fare lentamente le cose non significa farle peggio». ¿Qué función tiene “lentamente”?",
    options: ["Modo (adverbio de manera)", "Tiempo", "Causa", "Cantidad"], answer: 0, explain: "-mente forma adverbios de manera, como «-mente» español." },
  { id: "ex-let-043", type: "tf", level: "C2", topic: "vocabolario", prompt: "En “L'ultima fermata”: el protagonista baja del tren en una estación sin nombre.", statement: "Scende in una stazione senza nome.", answer: true, explain: "Una stazione «che non compariva su nessuna mappa»: el realismo mágico." },
  { id: "ex-let-044", type: "mc", level: "C2", topic: "grammatica", prompt: "«Se ne sarebbe pentito». ¿Qué estructura aparece aquí?",
    options: ["Condizionale composto + ne partitivo", "Congiuntivo presente", "Passato remoto", "Futuro anteriore"], answer: 0, explain: "Condizionale composto (sarebbe pentito) con ne: arrepentirse DE ello." },
  { id: "ex-let-045", type: "tf", level: "A2", topic: "vocabolario", prompt: "En “Il mercato di Natale”: los mercados navideños son típicos del norte de Italia.", statement: "I mercatini di Natale sono tipici del nord Italia.", answer: true, explain: "Trentino-Alto Adige: la zona austriaca de los mercatini." },
  { id: "ex-let-046", type: "mc", level: "A2", topic: "vocabolario", prompt: "¿Qué compra la narradora para su madre en el mercatino?",
    options: ["Un pesebre de madera", "Un gorro de lana", "Un calendario", "Chocolate"], answer: 0, explain: "Un presepe intagliato a mano: la artesanía del Trentino." },

  /* ══ escucha ls-17…ls-24 ══ */
  { id: "ex-asc-029", type: "mc", level: "A1", topic: "numeri", prompt: "En el dictado de precios: ¿cuánto cuesta il biglietto?",
    options: ["Due euro e cinquanta", "Cinque euro", "Tre euro", "Dieci euro"], answer: 0, explain: "Due e cinquanta: los precios del bar se dicen así, sin «euro»." },
  { id: "ex-asc-030", type: "tf", level: "A1", topic: "ascolto", prompt: "En la misma lista: «il cornetto costa più del caffè».", statement: "Il cornetto costa più del caffè.", answer: false, explain: "El café cuesta más: un euro y diez contra un euro del cornetto." },
  { id: "ex-asc-031", type: "mc", level: "A2", topic: "situazioni", prompt: "En el diálogo del ristorante: ¿qué pide el cliente de segundo?",
    options: ["La tagliata di manzo", "Il branzino", "La carbonara", "Le tagliatelle"], answer: 0, explain: "La tagliata: el secondo de carne; las tagliatelle eran il primo." },
  { id: "ex-asc-032", type: "mc", level: "A2", topic: "ascolto", prompt: "¿Cómo pide la cuenta el cliente?",
    options: ["«Il conto, per favore»", "«La nota, per favore»", "«Il menù, per favore»", "«Lo scontrino, grazie»"], answer: 0, explain: "Il conto es la cuenta del restaurante; scontrino es el recibo fiscal." },
  { id: "ex-asc-033", type: "mc", level: "A2", topic: "situazioni", prompt: "En el diálogo de la calle: ¿adónde quiere ir la turista?",
    options: ["Alla stazione centrale", "Al museo", "AlDuomo", "Al porto"], answer: 0, explain: "Alla stazione: y el local le indica «sempre dritto, poi a destra»." },
  { id: "ex-asc-034", type: "tf", level: "A2", topic: "ascolto", prompt: "El local dice que la estación está a diez minutos a pie.", statement: "La stazione è a dieci minuti a piedi.", answer: true, explain: "«Dieci minuti a piedi»: la medida urbana italiana por excelencia." },
  { id: "ex-asc-035", type: "mc", level: "B1", topic: "situazioni", prompt: "En la llamada al consultorio: ¿para qué día consigue la cita?",
    options: ["Giovedì alle sedici", "Martedì alle nove", "Venerdì alle diciotto", "Lunedì alle dieci"], answer: 0, explain: "Giovedì alle sedici: la semana llena deja ese hueco." },
  { id: "ex-asc-036", type: "tf", level: "B1", topic: "ascolto", prompt: "La recepcionista pide el código fiscal.", statement: "Chiedono il codice fiscale.", answer: true, explain: "El codice fiscale es el documento de identidad fiscal italiano." },
  { id: "ex-asc-037", type: "mc", level: "B1", topic: "situazioni", prompt: "En la reunión de oficina: ¿quién enviará el informe final?",
    options: ["Sara", "Marco", "El director", "El becario"], answer: 0, explain: "Sara se encarga del report final; Marco de los gráficos." },
  { id: "ex-asc-038", type: "mc", level: "B1", topic: "ascolto", prompt: "¿Qué plazo se fija para el informe?",
    options: ["Entro venerdì", "Entro domani", "Entro il 15", "Entro stasera"], answer: 0, explain: "«Entro venerdì»: el plazo semanal clásico." },
  { id: "ex-asc-039", type: "mc", level: "B2", topic: "ascolto", prompt: "En la entrevista radial: ¿cuál es el tema del libro de la autora?",
    options: ["Las cartas de una emigrada italiana", "La historia del espresso", "Las recetas de su abuela", "El dialecto siciliano"], answer: 0, explain: "Le lettere dall'Argentina: memoria de la emigración italiana." },
  { id: "ex-asc-040", type: "tf", level: "B2", topic: "ascolto", prompt: "La autora dice que escribió el libro para su hija.", statement: "Ha scritto il libro per sua figlia.", answer: false, explain: "Lo escribió para su nonna, que nunca pudo volver a Italia." },
  { id: "ex-asc-041", type: "mc", level: "C1", topic: "ascolto", prompt: "En el dictado de noticias: ¿qué aprobó el ayuntamiento?",
    options: ["Una zona peatonal en el centro", "Un nuevo impuesto", "Una línea de metro", "Un límite de alquileres"], answer: 0, explain: "L'isola pedonale del centro: noticia urbana típica." },
  { id: "ex-asc-042", type: "mc", level: "C1", topic: "ascolto", prompt: "¿Qué consecuencia menciona la noticia para los comerciantes?",
    options: ["Temps de carga limitados por la mañana", "Cierre del negocio", "Multa fija", "Cambio de rubro"], answer: 0, explain: "Las «fasce orarie» de carga de la mañana: el matiz de toda noticia." },
  { id: "ex-asc-043", type: "mc", level: "C2", topic: "ascolto", prompt: "En el dictado literario: ¿qué imagen cierra el pasaje?",
    options: ["El humo sobre los tejados al amanecer", "El tren partiendo", "La lluvia en el puerto", "El faro apagándose"], answer: 0, explain: "«Un filo di fumo saliva dai tetti»: la imagen final que queda." },
  { id: "ex-asc-044", type: "tf", level: "C2", topic: "grammatica", prompt: "La frase dictada usa un pluscuamperfecto de subjuntivo.", statement: "Il passo usa il congiuntivo trapassato.", answer: true, explain: "«…come se la città avesse deciso»: congiuntivo trapassato hipotético." },

  /* ══ unidad u-a2-7 · Al ristorante ══ */
  { id: "ex-rst-001", type: "mc", level: "A2", topic: "vocabolario", prompt: "¿Cuál es el orden correcto de un menú italiano?",
    options: ["Antipasto – primo – secondo – dolce", "Primo – antipasto – dolce – secondo", "Secondo – dolce – antipasto – primo", "Dolce – primo – antipasto – secondo"], answer: 0, explain: "El rito de cuatro tiempos: entrante, primer plato (pasta), segundo (carne/pescado) y postre." },
  { id: "ex-rst-002", type: "fill", level: "A2", topic: "situazioni", prompt: "Completa la orden educada: «___ una carbonara, per favore.»",
    sentence: "___ una carbonara, per favore.", accepted: ["vorrei", "Vorrei"], explain: "vorrei = «quisiera»: el condicional de cortesía para pedir." },
  { id: "ex-rst-003", type: "mc", level: "A2", topic: "vocabolario", prompt: "¿Cómo se pide la cuenta en Italia?",
    options: ["Il conto, per favore", "La cuenta, por favor", "Il menù, grazie", "Lo scontrino, per favore"], answer: 0, explain: "Il conto es la cuenta del restaurante; lo scontrino es el recibo fiscal." },
  { id: "ex-rst-004", type: "tf", level: "A2", topic: "cultura", prompt: "En Italia el servicio (coperto) puede aparecer como cargo fijo en la cuenta.", statement: "Il coperto può apparire come costo fisso nel conto.", answer: true, explain: "El pane e coperto (1–3 € por persona) es legal y común: no es una estafa." },
  { id: "ex-rst-005", type: "fill", level: "A2", topic: "preposizioni", prompt: "Completa: «Un tavolo ___ quattro, per favore.»",
    sentence: "Un tavolo ___ quattro, per favore.", accepted: ["per"], explain: "Un tavolo per + número: para cuántas personas es la mesa." },
  { id: "ex-rst-006", type: "mc", level: "A2", topic: "situazioni", prompt: "El camarero pregunta «Desidera un antipasto?». ¿Qué respuesta declina con cortesía?",
    options: ["No, grazie, vado diretto al primo", "No", "Mai", "Non voglio"], answer: 0, explain: "Rechazar con una razón breve y un grazie suena natural, no cortante." },

  /* ══ unidad u-b1-7 · Il mondo del lavoro ══ */
  { id: "ex-lav-001", type: "mc", level: "B1", topic: "vocabolario", prompt: "«Ho un colloquio di lavoro»: ¿qué significa «colloquio»?",
    options: ["Una entrevista de trabajo", "Un colegio", "Una reunión casual", "Un contrato"], answer: 0, explain: "Il colloquio di lavoro = entrevista; attento: «colloquio» no es «colegio»." },
  { id: "ex-lav-002", type: "fill", level: "B1", topic: "preposizioni", prompt: "Completa: «Lavoro ___ un'azienda multinazionale.»",
    sentence: "Lavoro ___ un'azienda multinazionale.", accepted: ["per", "in"], explain: "Lavorare per/in un'azienda: ambas correctas; «per» subraya a favor de quién." },
  { id: "ex-lav-003", type: "mc", level: "B1", topic: "situazioni", prompt: "¿Cómo se describe un contrato a plazo fijo en italiano?",
    options: ["Un contratto a tempo determinato", "Un contratto fisso", "Un contratto libero", "Un contratto stagionale"], answer: 0, explain: "A tempo determinato = plazo fijo; indeterminato = indefinido." },
  { id: "ex-lav-004", type: "tf", level: "B1", topic: "vocabolario", prompt: "«Lo stipendio» es el sueldo mensual.", statement: "Lo stipendio è la retribuzione mensile.", answer: true, explain: "Lo stipendio: el sueldo; lo straordinario son las horas extra." },
  { id: "ex-lav-005", type: "mc", level: "B1", topic: "situazioni", prompt: "¿Cuál es la fórmula de cierre formal de un email profesional italiano?",
    options: ["Cordiali saluti", "Un abbraccio", "Ciao ciao", "A dopo"], answer: 0, explain: "Cordiali saluti cierra la correspondencia formal; un abbraccio es familiar." },
  { id: "ex-lav-006", type: "fill", level: "B1", topic: "pronomi", prompt: "Forma el formal: «___ può inviare il contratto?» (usted)",
    sentence: "___ può inviare il contratto?", accepted: ["Mi", "mi"], explain: "Con Lei, el pronombre va delante: «Mi può inviare…» o enclítico «Può inviarmi…»." },

  /* ══ unidad u-b2-6 · Italia a tavola ══ */
  { id: "ex-gas-001", type: "mc", level: "B2", topic: "cultura", prompt: "¿Qué es la «cucina povera»?",
    options: ["La cocina de ingredientes humildes convertida en tradición", "La comida rápida italiana", "La cocina de los restaurantes de lujo", "Una dieta moderna sin gluten"], answer: 0, explain: "Nació de la necesidad (legumbres, sobras, pan duro) y hoy es patrimonio de sabor." },
  { id: "ex-gas-002", type: "tf", level: "B2", topic: "cultura", prompt: "El espresso «al banco» suele costar menos que «al tavolo».", statement: "Il caffè al banco costa meno che al tavolo.", answer: true, explain: "Mismo café, distinto precio: el servicio de mesa (servito) se cobra." },
  { id: "ex-gas-003", type: "mc", level: "B2", topic: "vocabolario", prompt: "«Questa ricetta è un piatto della tradizione»: ¿qué expresa «della tradizione»?",
    options: ["Pertenencia a la tradición (di + artículo)", "Un tipo de plato", "Una receta moderna", "Una traducción"], answer: 0, explain: "di + la = della: genitivo de pertenencia, llave de la crítica gastronómica." },
  { id: "ex-gas-004", type: "fill", level: "B2", topic: "preposizioni", prompt: "Completa: «Si mangia ___ mano» (se come con la mano — pizza napolitana).",
    sentence: "La pizza napoletana si mangia ___ mano.", accepted: ["con la", "a"], explain: "«A mano» o «con la mano»: ambas formas circulan; la primera es la más común." },
  { id: "ex-gas-005", type: "mc", level: "B2", topic: "cultura", prompt: "Según el galateo, ¿qué se hace con la pasta al enrollarla?",
    options: ["Se enrolla con el tenedor, sin cuchillo ni cuchara", "Se corta con cuchillo", "Se enrolla con ayuda de la cuchara", "Se come con las manos"], answer: 0, explain: "El tenedor solo; la cuchara de apoyo es un mito turista en Italia." },
  { id: "ex-gas-006", type: "tf", level: "B2", topic: "vocabolario", prompt: "«Il sapore» significa «el sabor».", statement: "Il sapore è il gusto.", answer: true, explain: "sapore = sabor; saporito = sabroso; insapore = insípido." },

  /* ══ unidad u-c1-5 · Attualità e media ══ */
  { id: "ex-med-001", type: "mc", level: "C1", topic: "vocabolario", prompt: "¿Qué sección del periódico reúne sucesos y casos judiciales?",
    options: ["La cronaca", "L'economia", "Lo sport", "La cultura"], answer: 0, explain: "Cronaca nera (sucesos) y cronaca giudiziaria (tribunales): la crónica en sentido amplio." },
  { id: "ex-med-002", type: "fill", level: "C1", topic: "grammatica", prompt: "Completa el titular: «Il governo annuncia ___ nuove misure».",
    sentence: "Il governo annuncia ___ nuove misure.", accepted: ["delle", "tre", "alcune"], explain: "Los titulares recortan el verbo, no los determinantes: des/delle/alcune + sustantivo." },
  { id: "ex-med-003", type: "mc", level: "C1", topic: "vocabolario", prompt: "En un telediario, ¿qué es «un servizio»?",
    options: ["Un reportaje grabado en exteriores", "El saludo del presentador", "La publicidad", "La sinopsis del clima"], answer: 0, explain: "Il servizio es la unidad periodística filmada, con corresponsal y pieza editada." },
  { id: "ex-med-004", type: "tf", level: "C1", topic: "grammatica", prompt: "«Nonostante il dibattito, la legge è passata»: «nonostante» rige subjuntivo obligatoriamente.", statement: "Dopo «nonostante» il congiuntivo è obbligatorio.", answer: false, explain: "Con nonostante, indicativo y congiuntivo son ambos gramaticales." },
  { id: "ex-med-005", type: "mc", level: "C1", topic: "vocabolario", prompt: "¿Qué palabra resume la línea editorial de un diario?",
    options: ["L'orientamento (di linea)", "La testata a colori", "Il numero di pagina", "L'abbonamento"], answer: 0, explain: "L'orientamento político y la linea editoriale definen al diario; la testata es su nombre." },
  { id: "ex-med-006", type: "fill", level: "C1", topic: "grammatica", prompt: "Conecta la opinión: «___ mio parere, la misura è tardiva».",
    sentence: "___ mio parere, la misura è tardiva.", accepted: ["A", "Secondo il"], explain: "«A mio parere» o «secondo il mio parere»: fórmulas fijas de opinión." },
];
