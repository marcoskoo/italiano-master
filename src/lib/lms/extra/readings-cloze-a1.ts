import type { CbClozeText } from "../cambridge";

/* ═══ v9.12 · Letture con cloze inferencial · Nivel A1 ═══════════════
   3 lecturas por unidad comunicativa. Los huecos {n} exigen deducir
   la palabra por el contexto (no es gramática: es significado).     */

export const CLOZE_A1: Record<string, CbClozeText[]> = {
  "cu-a1-01": [
    {
      id: "cz-a1-01-1", title: "La mail di benvenuto", titleEs: "El correo de bienvenida", minutes: 2,
      paragraphs: [
        { it: "Ciao! Mi chiamo Anna e sono {1} di Roma. Ho trent'anni e lavoro in un ufficio. Studio l'italiano perché mio nonno era italiano. Mi piace la {2} italiana: la pizza è la mia preferita!", es: "¡Hola! Me llamo Anna y soy de Roma. Tengo treinta años y trabajo en una oficina. Estudio italiano porque mi abuelo era italiano. Me gusta la comida italiana: ¡la pizza es mi preferida!" },
        { it: "Ogni mattina bevo un caffè {3} e leggo il giornale. La sera guardo un film o {4} con le mie amiche. Sono una persona molto {5}: parlo con tutti!", es: "Cada mañana bebo un café y leo el periódico. Por la noche veo una película o hablo con mis amigas. ¡Soy una persona muy abierta: hablo con todo el mundo!" },
      ],
      gaps: [
        { options: ["di", "con", "per"], answer: 0, why: "\"essere DI\" + ciudad = origen" },
        { options: ["cucina", "storia", "bandiera"], answer: 0, why: "La pizza indica comida" },
        { options: ["naturale", "finto", "rumoroso"], answer: 0, why: "Un caffè naturale = espresso solo" },
        { options: ["parlo", "dormo", "piango"], answer: 0, why: "Contraste con \"guardo un film\": actividades de noche" },
        { options: ["socievole", "stanco", "timida"], answer: 0, why: "\"Parlo con tutti\" = sociable" },
      ],
    },
    {
      id: "cz-a1-01-2", title: "Il badge del corso", titleEs: "La etiqueta del curso", minutes: 2,
      paragraphs: [
        { it: "Benvenuto al corso! Qui trovi la tua {1} di presentazione. Il tuo nome è sul fronte; sul retro c'è il tuo {2}: A1. Mostra il badge all'ingresso della scuola ogni giorno.", es: "¡Bienvenido al curso! Aquí tienes tu etiqueta de presentación. Tu nombre está al frente; al dorso está tu nivel: A1. Muestra la etiqueta en la entrada de la escuela cada día." },
        { it: "La lezione inizia alle nove. Se {3} tardi, aspetta la pausa per entrare: non si entra durante la lezione. Il {4} è al primo piano, accanto all'aula 3. Per qualsiasi problema, chiama la {5} in ufficio.", es: "La clase empieza a las nueve. Si llegas tarde, espera el descanso para entrar: no se entra durante la lección. El baño está en el primer piso, junto al aula 3. Para cualquier problema, llama al secretario en la oficina." },
      ],
      gaps: [
        { options: ["tessera", "moneta", "valigia"], answer: 0, why: "Se muestra en la entrada: es una credencial" },
        { options: ["livello", "telefono", "peso"], answer: 0, why: "A1 es un nivel" },
        { options: ["arrivi", "esci", "corri"], answer: 0, why: "Contraste: entrar tarde" },
        { options: ["bagno", "treno", "mercato"], answer: 0, why: "\"Accanto all'aula\": lugar dentro de la escuela" },
        { options: ["segreteria", "maestra d'orchestra", "cuoca"], answer: 0, why: "\"In ufficio\": administración" },
      ],
    },
    {
      id: "cz-a1-01-3", title: "Alla festa internazionale", titleEs: "En la fiesta internacional", minutes: 2,
      paragraphs: [
        { it: "Alla festa ci sono studenti di molti paesi. Klaus viene dalla Germania, {1} da Osaka. Io vengo dalla Spagna. Ci sono anche due ragazzi {2}: di Torino!", es: "En la fiesta hay estudiantes de muchos países. Klaus viene de Alemania, Yuki de Osaka. Yo vengo de España. ¡También hay dos chicos italianos: de Turín!" },
        { it: "Parliamo un italiano {3}, con le mani e con il sorriso. Klaus dice: «Non capisco!», e tutti ridiamo. La festa è un ottimo modo per fare nuovi {4}. Il prossimo anno vogliamo {5} una cena insieme.", es: "Hablamos un italiano simple, con las manos y con la sonrisa. Klaus dice: «¡No entiendo!», y todos nos reímos. La fiesta es una excelente manera de hacer nuevos amigos. El próximo año queremos organizar una cena juntos." },
      ],
      gaps: [
        { options: ["Yuki", "il caffè", "la pioggia"], answer: 0, why: "Paralelo con Klaus: otra persona" },
        { options: ["italiani", "polacchi", "gialli"], answer: 0, why: "\"Di Torino\" = Italia" },
        { options: ["semplice", "perfetto", "antico"], answer: 0, why: "Gestos y sonrisas: nivel básico" },
        { options: ["amici", "compiti", "errori"], answer: 0, why: "Las fiestas sirven para conocer gente" },
        { options: ["organizzare", "dimenticare", "chiudere"], answer: 0, why: "Una cena se organiza" },
      ],
    },
  ],
  "cu-a1-02": [
    {
      id: "cz-a1-02-1", title: "La foto della famiglia", titleEs: "La foto de la familia", minutes: 2,
      paragraphs: [
        { it: "Guarda questa foto! L'uomo con i capelli bianchi è mio {1}, il papà del mio papà. La donna accanto a lui è mia nonna. Si sono sposati cinquant'anni {2}!", es: "¡Mira esta foto! El hombre de pelo blanco es mi abuelo, el papá de mi papá. La mujer a su lado es mi abuela. ¡Se casaron hace cincuenta años!" },
        { it: "I miei {3} sono i fratelli di mia madre: zio Luca e zia Marta. Hanno una figlia, Sofia: è mia {4}. Abitiamo nella stessa {5} e giociamo insieme ogni domingo.", es: "Mis tíos son los hermanos de mi madre: el tío Luca y la tía Marta. Tienen una hija, Sofía: es mi prima. Vivimos en la misma ciudad y jugamos juntos cada domingo." },
      ],
      gaps: [
        { options: ["nonno", "nipote", "cugino"], answer: 0, why: "\"El papá de mi papá\" = abuelo" },
        { options: ["fa", "prima", "dopo"], answer: 0, why: "Hecho pasado: \"hace\" 50 años" },
        { options: ["zii", "suoceri", "nonni"], answer: 0, why: "Hermanos de la madre = tíos" },
        { options: ["cugina", "sorella", "mamma"], answer: 0, why: "Hija de los tíos = prima" },
        { options: ["città", "scuola", "camera"], answer: 0, why: "Se juega juntos: misma ciudad" },
      ],
    },
    {
      id: "cz-a1-02-2", title: "Due fratelli molto diversi", titleEs: "Dos hermanos muy distintos", minutes: 2,
      paragraphs: [
        { it: "Marco e Luca sono fratelli, ma sono molto {1}. Marco è alto e magro; Luca è basso e forte. Marco studia tutto il giorno; Luca {2} studia mai!", es: "Marco y Luca son hermanos, pero son muy distintos. Marco es alto y delgado; Luca es bajo y fuerte. Marco estudia todo el día; ¡Luca no estudia nunca!" },
        { it: "La mamma dice: «Marco ha gli occhi {3} come il papà, Luca ha gli occhi scuri come me». A tavola Marco mangia {4} verdure; Luca mangia solo pasta. Nonostante le differenze, si vogliono molto {5}.", es: "La mamá dice: «Marco tiene los ojos verdes como el papá, Luca tiene los ojos oscuros como yo». En la mesa Marco come muchas verduras; Luca come solo pasta. A pesar de las diferencias, se quieren mucho." },
      ],
      gaps: [
        { options: ["diversi", "uguali", "noiosi"], answer: 0, why: "Alturas y hábitos opuestos" },
        { options: ["non", "molto", "sempre"], answer: 0, why: "Contraste con Marco: nunca" },
        { options: ["verdi", "chiusi", "stanchi"], answer: 0, why: "Color de ojos, como el papá" },
        { options: ["molte", "pochi", "nessuna"], answer: 0, why: "Opuesto a \"solo pasta\"" },
        { options: ["bene", "male", "poco"], answer: 0, why: "Final positivo: se quieren bien" },
      ],
    },
    {
      id: "cz-a1-02-3", title: "Il pranzo della domenica", titleEs: "El almuerzo del domingo", minutes: 3,
      paragraphs: [
        { it: "La domenica tutta la famiglia {1} a casa della nonna. Lei cucina dalle otto del mattino: pasta al forno, polpettine e torta di mele. In tavola ci sono dodici {2}!", es: "El domingo toda la familia se reúne en casa de la abuela. Ella cocina desde las ocho de la mañana: pasta al horno, albóndigas y tarta de manzana. ¡En la mesa hay doce platos!" },
        { it: "Il nonno racconta storie della sua giovinezza. I bambini non stanno {3}: vogliono giocare in giardino. Dopo il pranzo, la mamma e le zie lavano i piatti; gli uomini guardano la partita in TV. È una {4} antica ma viva. Quando il caffè è pronto, tutti si alzano e dicono: «{5}!»", es: "El abuelo cuenta historias de su juventud. Los niños no están quietos: quieren jugar en el jardín. Después del almuerzo, la mamá y las tías lavan los platos; los hombres ven el partido en la tele. Es una tradición antigua pero viva. Cuando el café está listo, todos se levantan y dicen: «¡Gracias!»" },
      ],
      gaps: [
        { options: ["si riunisce", "parte", "dorme"], answer: 0, why: "Doce platos: todos juntos" },
        { options: ["coperti", "gatti", "orologi"], answer: 0, why: "Doce personas comiendo" },
        { options: ["fermi", "zitti", "male"], answer: 0, why: "Quieren jugar: no se quedan quietos" },
        { options: ["tradizione", "ricetta", "regola"], answer: 0, why: "\"Antica ma viva\": costumbre" },
        { options: ["Grazie", "Aiuto", "Addio"], answer: 0, why: "Fin de comidas: agradecer" },
      ],
    },
  ],
  "cu-a1-03": [
    {
      id: "cz-a1-03-1", title: "La giornata di Francesco", titleEs: "El día de Francesco", minutes: 2,
      paragraphs: [
        { it: "Francesco si sveglia alle sette. Fa la {1}, si veste e beve un caffè in piedi in cucina. Esce di casa alle otto meno un quarto e prende l'{2} per andare al lavoro.", es: "Francesco se despierta a las siete. Se ducha, se viste y bebe un café de pie en la cocina. Sale de casa a las ocho menos cuarto y toma el autobús para ir al trabajo." },
        { it: "In ufficio lavora al computer {3} mezzogiorno. A pranzo mangia un panino al bar con i colleghi. Torna a casa alle sei, fa un po' di sport e prepara la {4}. Alle undici va a dormire: la mattina dopo deve {5} presto un'altra volta.", es: "En la oficina trabaja en la computadora hasta mediodía. Al almuerzo come un sándwich en el bar con los colegas. Vuelve a casa a las seis, hace algo de deporte y prepara la cena. A las once se acuesta: la mañana siguiente debe despertarse temprano otra vez." },
      ],
      gaps: [
        { options: ["doccia", "siesta", "valigia"], answer: 0, why: "Rutina matinal antes de vestirse" },
        { options: ["autobus", "aereo", "treno notte"], answer: 0, why: "Transporte urbano al trabajo" },
        { options: ["fino alle", "dopo le", "dalle"], answer: 0, why: "Trabaja hasta el mediodía" },
        { options: ["cena", "festa", "partita"], answer: 0, why: "Comida de la noche en casa" },
        { options: ["svegliarsi", "partire", "mangiare"], answer: 0, why: "Ciclo: temprano otra vez" },
      ],
    },
    {
      id: "cz-a1-03-2", title: "Il orario del bar", titleEs: "El horario del bar", minutes: 2,
      paragraphs: [
        { it: "Il bar Roma apre alle sei del mattino. I primi clienti sono i {1}: prendono un cappuccino e una brioche prima di iniziare il turno. A metà mattina arrivano le mamme con i bambini dopo la {2}.", es: "El bar Roma abre a las seis de la mañana. Los primeros clientes son los trabajadores: toman un capuchino y una brioche antes de empezar el turno. A media mañana llegan las mamás con los niños después de la escuela." },
        { it: "Il momento più {3} è l'ora di pranzo: panini, insalate e caffè per tutti. Nel pomeriggio il bar è tranquillo. La sera chiudiamo alle otto: pulisco i tavoli, lavo le tazzine e {4} la saracinesca. Il giorno dopo si ricomincia: il bar apre {5} alle sei!", es: "El momento más ocupado es la hora del almuerzo: sándwiches, ensaladas y café para todos. Por la tarde el bar está tranquilo. Por la noche cerramos a las ocho: limpio las mesas, lavo las tacitas y bajo la persiana. Al día siguiente se empieza de nuevo: ¡el bar abre otra vez a las seis!" },
      ],
      gaps: [
        { options: ["lavoratori", "studenti universitari", "turisti notturni"], answer: 0, why: "\"Antes del turno\": gente que trabaja" },
        { options: ["scuola", "pioggia", "colazione"], answer: 0, why: "Niños por la mañana: tras la escuela" },
        { options: ["pieno", "noioso", "silenzioso"], answer: 0, why: "Comida para todos: hora pico" },
        { options: ["abbasso", "sollevo", "rompo"], answer: 0, why: "Cerrar la persiana del bar" },
        { options: ["di nuovo", "per caso", "in ritardo"], answer: 0, why: "Ciclo diario repetido" },
      ],
    },
    {
      id: "cz-a1-03-3", title: "Troppo impegnata!", titleEs: "¡Demasiado ocupada!", minutes: 2,
      paragraphs: [
        { it: "Giulia è una studentessa molto {1}: si alza presto, segue le lezioni, lavora in biblioteca il pomeriggio e studia la sera. Il sabato fa la {2} in un negozio di vestiti.", es: "Giulia es una estudiante muy ocupada: se levanta temprano, sigue las clases, trabaja en la biblioteca por la tarde y estudia por la noche. Los sábados atiende en una tienda de ropa." },
        { it: "La domenica è il suo unico giorno libero. Dorme fino alle dieci, poi fa colazione con calma e chiama la {3}. Nel pomeriggio cerca di {4}: passeggia nel parco o legge un romanzo. «Il lunedì ricomincia la settimana — dice — ma la domenica {5} le batterie!»", es: "El domingo es su único día libre. Duerme hasta las diez, luego desayuna con calma y llama a su mamá. Por la tarde intenta relajarse: pasea en el parque o lee una novela. «El lunes vuelve a empezar la semana —dice—, ¡pero el domingo recarga las pilas!»" },
      ],
      gaps: [
        { options: ["impegnata", "pigra", "malata"], answer: 0, why: "Lecciones + trabajo + estudio" },
        { options: ["commessa", "passeggiata", "doccia"], answer: 0, why: "Trabaja en una tienda de ropa" },
        { options: ["mamma", "professoressa", "dentista"], answer: 0, why: "Llamada familiar dominical" },
        { options: ["rilassarsi", "lavorare", "studiare"], answer: 0, why: "Pasear o leer: descanso" },
        { options: ["ricarica", "spegne", "perde"], answer: 0, why: "\"Las baterías\": metáfora de energía" },
      ],
    },
  ],
  "cu-a1-04": [
    {
      id: "cz-a1-04-1", title: "Al banco, per favore!", titleEs: "¡En el mostrador, por favor!", minutes: 2,
      paragraphs: [
        { it: "In Italia il caffè si beve spesso \"al banco\", cioè in piedi vicino al {1}. È più economico che sedersi al tavolo: un espresso al banco costa un euro, al tavolo può {2} tre euro!", es: "En Italia el café se toma a menudo \"en el mostrador\", es decir de pie junto a la mostrador. Es más económico que sentarse en la mesa: un espresso en el mostrador cuesta un euro, ¡en la mesa puede costar tres euros!" },
        { it: "Il cliente tipo entra, dice «Buongiorno, un caffè per favore», lo beve in due minuti e {3} velocemente. Il barista lo conosce: «Il solito?» chiede già con la tazzina in mano. Pagare si può prima o {4}. Non si lascia la mancia: in Italia è {5}!" , es: "El cliente típico entra, dice «Buenos días, un café por favor», lo bebe en dos minutos y se va rápido. El barista lo conoce: «¿El de siempre?», pregunta ya con la tacita en la mano. Pagar se puede antes o después. ¡No se deja propina: en Italia no es normal!" },
      ],
      gaps: [
        { options: ["banco", "tavolo", "bagno"], answer: 0, why: "\"In piedi\" = de pie, en el mostrador" },
        { options: ["costare", "pesare", "durare"], answer: 0, why: "Precio: cuánto cuesta" },
        { options: ["esce", "entra", "dorme"], answer: 0, why: "Bebe rápido y se va" },
        { options: ["dopo", "mai", "insieme"], answer: 0, why: "Alternativa temporal al \"antes\"" },
        { options: ["normale", "obbligatoria", "proibito"], answer: 0, why: "Se afirma que NO se deja: no es la costumbre" },
      ],
    },
    {
      id: "cz-a1-04-2", title: "Caffè o cappuccino?", titleEs: "¿Café o capuchino?", minutes: 2,
      paragraphs: [
        { it: "Gli italiani hanno regole non scritte sul caffè. Il cappuccino si beve solo la {1}: mai dopo pranzo o dopo cena! Un cappuccino alle cinque del pomeriggio è quasi un {2}.", es: "Los italianos tienen reglas no escritas sobre el café. El capuchino se toma solo por la mañana: ¡nunca después del almuerzo o de la cena! Un capuchino a las cinco de la tarde es casi un delito." },
        { it: "Il \"caffè normale\" in Italia è un espresso: {3}, amaro e profumato. Se lo vuoi più leggero, chiedi un \"caffè lungo\"; se lo vuoi con un goccio di latte, chiedi un \"caffè macchiato\". D'estate molti prendono il caffè {4} ghiacciato. E attenzione: in Italia nessuno beve il caffè {5} come nei film americani!", es: "El \"café normal\" en Italia es un espresso: corto, amargo y perfumado. Si lo quieres más suave, pide un \"caffè lungo\"; si lo quieres con un chorrito de leche, pide un \"caffè macchiato\". En verano muchos toman el café frío helado. ¡Y atención: en Italia nadie bebe el café en taza grande como en las películas americanas!" },
      ],
      gaps: [
        { options: ["mattina", "mezzanotte", "settimana"], answer: 0, why: "Contraste con post-almuerzo" },
        { options: ["crimine", "premio", "miracolo"], answer: 0, why: "Exageración humorística" },
        { options: ["corto", "largo", "dolce"], answer: 0, why: "Definición de espresso" },
        { options: ["freddo", "caldo", "doppio"], answer: 0, why: "En verano: helado" },
        { options: ["enorme", "americano", "vuoto"], answer: 0, why: "Referencia a tazas de cine americano" },
      ],
    },
    {
      id: "cz-a1-04-3", title: "La prima volta al bar", titleEs: "La primera vez en el bar", minutes: 3,
      paragraphs: [
        { it: "Sono entrata in un bar di Napoli per la prima volta. C'era molta {1}: la macchina del caffè fischiava, la gente parlava forte. Non sapevo qué fare, così ho {2} una signora gentile.", es: "Entré en un bar de Nápoles por primera vez. Había mucho ruido: la máquina del café silbaba, la gente hablaba fuerte. No sabía qué hacer, así que le pregunté a una señora amable." },
        { it: "«Prima si paga alla cassa — mi ha spiegato — poi si prende lo scontrino e si chiede il caffè al banco». Ho preso un caffè e una {3} alla crema. Il barista mi ha chiesto: «Zucchero?» e io ho risposto: «Sì, {4}». In due minuti avevo finito tutto. Uscendo, ho detto «{5}!» e ho pensato: il rituale del caffè è facile, se qualcuno te lo spiega.", es: "«Primero se paga en la caja —me explicó—, luego se toma el recibo y se pide el café en el mostrador». Tomé un café y una brioche de crema. El barista me preguntó: «¿Azúcar?» y yo respondí: «Sí, gracias». En dos minutos había terminado todo. Al salir, dije «¡Gracias!» y pensé: el ritual del café es fácil, si alguien te lo explica." },
      ],
      gaps: [
        { options: ["gente", "acqua", "musica"], answer: 0, why: "Máquina + conversaciones = personas" },
        { options: ["chiesto a", "aspettato", "chiamato"], answer: 0, why: "No sabía: pidió ayuda" },
        { options: ["brioche", "pizza", "bistecca"], answer: 0, why: "Compañía típica del café matinal" },
        { options: ["grazie", "no", "aiuto"], answer: 0, why: "Respuesta cortés a una oferta" },
        { options: ["Grazie", "Scusi il ritardo", "Buonanotte"], answer: 0, why: "Al salir se agradece" },
      ],
    },
  ],
  "cu-a1-05": [
    {
      id: "cz-a1-05-1", title: "Il menù del giorno", titleEs: "El menú del día", minutes: 2,
      paragraphs: [
        { it: "Buonasera! Stasera proponiamo un menù speciale. Come antipasto, bruschette al pomodoro; come {1}, spaghetti alle vongole o tagliatelle ai funghi. Il {2} è alla griglia: branzino o bistecca con patate al forno.", es: "¡Buenas noches! Esta noche proponemos un menú especial. De entrante, bruschettas de tomate; de primero, espaguetis a la marinera o tagliatelle con champiñones. El segundo es a la parrilla: lubina o bistec con patatas al horno." },
        { it: "Per finire, dolce della casa: tiramisù o panna cotta, e un amaro per aiutare la digestione. Il pane è incluso nel prezzo. Vuole anche dell'{3} naturale o frizzante? Il conto è di venticinque euro a persona, {4} di servizio e IVA. Quando è pronto, chiamo il {5}!", es: "Para terminar, postre de la casa: tiramisú o panna cotta, y un amaro digestivo para ayudar la digestión. El pan está incluido en el precio. ¿Quiere también agua natural o con gas? La cuenta es de veinticinco euros por persona, servicio e IVA incluidos. ¡Cuando esté listo, llamo al camarero!" },
      ],
      gaps: [
        { options: ["primo", "secondo", "dolce"], answer: 0, why: "Spaghetti: primer plato" },
        { options: ["secondo", "antipasto", "contorno"], answer: 0, why: "Bistec/pescado: segundo plato" },
        { options: ["acqua", "vino", "olio"], answer: 0, why: "Natural o con gas: agua" },
        { options: ["comprensivo di", "senza", "privo di"], answer: 0, why: "Precio cerrado: servicio e IVA incluidos" },
        { options: ["cameriere", "cuoco", "direttore"], answer: 0, why: "Quien sirve a la mesa" },
      ],
    },
    {
      id: "cz-a1-05-2", title: "Una cena quasi perfetta", titleEs: "Una cena casi perfecta", minutes: 3,
      paragraphs: [
        { it: "Sabato sera abbiamo provato un ristorante nuovo vicino a casa. Il posto era piccolo ma molto {1}: candele, musica jazz e profumo di basilico. Il cameriere era simpatico e ci ha spiegato ogni piatto con {3}.", es: "El sábado por la noche probamos un restaurante nuevo cerca de casa. El lugar era pequeño pero muy acogedor: velas, música jazz y aroma de albahaca. El camarero era simpático y nos explicó cada plato con paciencia." },
        { it: "Io ho preso una pizza margherita: {2} e profumata, la migliore della città! Mio marito ha ordinato il risotto allo zafferano, ma era un po' salato. Alla fine abbiamo chiesto il conto, ma il cameriere ha portato invece due limoncelli: «Offre la {4}!». Che sorpresa gentile! Abbiamo lasciato una recensione {5} su internet.", es: "Yo pedí una pizza margherita: fina y perfumada, ¡la mejor de la ciudad! Mi esposo pidió el risotto al azafrán, pero estaba un poco salado. Al final pedimos la cuenta, pero el camarero trajo en cambio dos limoncellos: «¡Los invita la casa!». ¡Qué amable sorpresa! Dejamos una reseña positiva en internet." },
      ],
      gaps: [
        { options: ["accogliente", "rumoroso", "sporco"], answer: 0, why: "Velas + jazz + aromas" },
        { options: ["sottile", "spessa", "bruciata"], answer: 0, why: "Junto a perfumada: calidad" },
        { options: ["pazienza", "rabbia", "fretta"], answer: 0, why: "Explicó cada plato con calma" },
        { options: ["casa", "polizia", "scuola"], answer: 0, why: "\"Offre la casa\" = invitación" },
        { options: ["positiva", "negativa", "vuota"], answer: 0, why: "Sorpresa gentil → buena reseña" },
      ],
    },
    {
      id: "cz-a1-05-3", title: "Le porzioni italiane", titleEs: "Las porciones italianas", minutes: 2,
      paragraphs: [
        { it: "Molti turisti restano sorpresi dalle porzioni italiane. Il primo piatto di pasta sembra {1}, ma è solo l'inizio! Dopo arrivano il secondo e il contorno. Se prendi antipasto, primo, secondo, dolce e caffè, il pasto può {2} due ore.", es: "Muchos turistas se sorprenden por las porciones italianas. El primer plato de pasta parece pequeño, ¡pero es solo el comienzo! Después llegan el segundo y la guarnición. Si tomas entrante, primero, segundo, postre y café, la comida puede durar dos horas." },
        { it: "Un consiglio: non riempirti di {3} gratis prima di ordinare! E ricorda che la pizza si mangia {4} con le mani o con forchetta e coltello: nessuno ti giudica. Se non finisci tutto, puoi chiedere la \"busta\" per portare a casa il {5}: in italiano si chiama \"fare la scarpetta\" quando pulisci il piatto con il pane!", es: "Un consejo: ¡no te llenes de pan gratis antes de ordenar! Y recuerda que la pizza se come tranquilamente con las manos o con tenedor y cuchillo: nadie te juzga. Si no terminas todo, puedes pedir la \"bolsa\" para llevar a casa la comida: ¡en italiano se llama \"fare la scarpetta\" cuando limpias el plato con el pan!" },
      ],
      gaps: [
        { options: ["piccolo", "enorme", "caro"], answer: 0, why: "Sorpresa: parece poco" },
        { options: ["durare", "costare", "pesare"], answer: 0, why: "\"Dos horas\" = tiempo" },
        { options: ["pane", "vino", "gelato"], answer: 0, why: "Lo gratis en la mesa" },
        { options: ["tranquillamente", "mai", "subito"], answer: 0, why: "Ambas formas son aceptadas" },
        { options: ["cibo", "vassoio", "menu"], answer: 0, why: "Lo que sobra se lleva" },
      ],
    },
  ],
  "cu-a1-06": [
    {
      id: "cz-a1-06-1", title: "In cerca di una giacca", titleEs: "En busca de una chaqueta", minutes: 2,
      paragraphs: [
        { it: "Buongiorno, cerco una giacca {1} per la primavera. — Che taglia porta? — Media, credo. — Che {2} preferisce: blu, grigio o beige? — Qualcosa di scuro, per favore. Questo modello mi piace: quanto {3}?", es: "Buenos días, busco una chaqueta ligera para la primavera. — ¿Qué talla usa? — Mediana, creo. — ¿Qué color prefiere: azul, gris o beige? — Algo oscuro, por favor. Este modelo me gusta: ¿cuánto cuesta?" },
        { it: "— Novantanove euro, ma oggi c'è uno {4} del venti per cento: viene a costare ottanta euro tondi. Il camerino è in fondo a destra. — Posso provare anche i pantaloni {5}? — Certo, glieli porto subito.", es: "— Noventa y nueve euros, pero hoy hay un descuento del veinte por ciento: queda en ochenta euros exactos. El probador está al fondo a la derecha. — ¿Puedo probarme también los pantalones a juego? — Claro, se los traigo enseguida." },
      ],
      gaps: [
        { options: ["leggera", "pesante", "impermeabile"], answer: 0, why: "Prenda de primavera" },
        { options: ["colore", "prezzo", "marca"], answer: 0, why: "Azul, gris, beige: colores" },
        { options: ["costa", "pesa", "dura"], answer: 0, why: "Pregunta de precio" },
        { options: ["sconto", "aumento", "problema"], answer: 0, why: "20% menos: descuento" },
        { options: ["abbinati", "sbagliati", "rotti"], answer: 0, why: "Que combine con la chaqueta" },
      ],
    },
    {
      id: "cz-a1-06-2", title: "Il mercatino dell'usato", titleEs: "El mercadillo de segunda mano", minutes: 3,
      paragraphs: [
        { it: "Ogni sabato in piazza c'è il mercatino dell'{1}: vestiti, libri, dischi e oggetti strani. La signora Rosa vende i vestiti di sua figlia, ormai troppo {2} per lei. «Questo vestito verde? Tre euro, ed è quasi nuovo!»", es: "Cada sábado en la plaza hay el mercadillo de segunda mano: ropa, libros, discos y objetos extraños. La señora Rosa vende la ropa de su hija, ya demasiado pequeña para ella. «¿Este vestido verde? Tres euros, ¡y está casi nuevo!»" },
        { it: "Il segreto del mercatino è il {3}: il primo prezzo non è mai quello finale. «Cinque euro?» «Troppo! Te ne do tre.» «Va bene, prendilo.» Accanto a Rosa, un signore vende dischi di vinile e racconta storie di ogni {4}. Alcuni oggetti sono usciti dalla soffitta di sua nonna: una {5} d'epoca che ancora funziona!", es: "El secreto del mercadillo es el regateo: el primer precio nunca es el final. «¿Cinco euros?» «¡Demasiado! Te doy tres.» «Está bien, tómalo.» Junto a Rosa, un señor vende discos de vinilo y cuenta historias de cada canción. Algunos objetos salieron del desván de su abuela: ¡una máquina de coser de época que todavía funciona!" },
      ],
      gaps: [
        { options: ["usato", "lusso", "giardinaggio"], answer: 0, why: "Ropa usada y objetos viejos" },
        { options: ["piccola", "grande", "stretta"], answer: 0, why: "La hija creció: ya no le queda" },
        { options: ["regazzo", "traguardo", "prezzo fisso"], answer: 0, why: "Diálogo de precios: se negocia" },
        { options: ["canzone", "città", "piatto"], answer: 0, why: "Discos de vinilo: canciones" },
        { options: ["macchina da cucire", "automobile", "televisione gigante"], answer: 0, why: "Objeto típico de desván antiguo" },
      ],
    },
    {
      id: "cz-a1-06-3", title: "Lo shopping italiano", titleEs: "El shopping italiano", minutes: 2,
      paragraphs: [
        { it: "In Italia fare shopping è quasi uno {1}. Le vetrine dei negozi sono bellissime e invitano a entrare. Ma attenzione alle taglie: la {2} italiana non è uguale a quella americana o spagnola!", es: "En Italia ir de compras es casi un deporte. Los escaparates de las tiendas son hermosísimos e invitan a entrar. ¡Pero atención a las tallas: la talla italiana no es igual a la americana o la española!" },
        { it: "I saldi veri iniziano a gennaio e a luglio: si può risparmiare fino al {3} per cento. Molti negozi piccoli chiudono a pranzo, dalle tredici alle sedici: è la famosa pausa del {4}. Se vuoi chiedere se accettano la carta, domanda: «Accettate la {5}?». E se il capo non ti piace, un semplice «Grazie, era solo curioso» è sufficiente!", es: "Las rebajas verdaderas empiezan en enero y julio: se puede ahorrar hasta el cincuenta por ciento. Muchas tiendas pequeñas cierran al mediodía, de la una a las cuatro: es la famosa pausa del almuerzo. Si quieres preguntar si aceptan tarjeta, pregunta: «¿Aceptan la tarjeta?». ¡Y si la prenda no te gusta, un simple «Gracias, solo tenía curiosidad» basta!" },
      ],
      gaps: [
        { options: ["sport", "lavoro", "problema"], answer: 0, why: "Vitrinas que invitan: actividad nacional" },
        { options: ["taglia", "statura", "età"], answer: 0, why: "Diferencia de medidas entre países" },
        { options: ["cinquanta", "cinque", "cento"], answer: 0, why: "Descuento típico máximo de saldi" },
        { options: ["pranzo", "riposo domenicale", "caffè"], answer: 0, why: "Cierre de 13 a 16 horas" },
        { options: ["carta", "moneta", "busta"], answer: 0, why: "Medio de pago electrónico" },
      ],
    },
  ],
  "cu-a1-07": [
    {
      id: "cz-a1-07-1", title: "Scusi, dov'è la stazione?", titleEs: "Disculpe, ¿dónde está la estación?", minutes: 2,
      paragraphs: [
        { it: "Scusi, dov'è la stazione? — Vada sempre {1} per questa strada, poi giri a destra al semaforo. La stazione è davanti a lei, dopo la {2}. — È lontano? — No, dieci minuti a piedi. Ma attenzione: c'è molto {3} in centro, meglio non prendere la macchina.", es: "Disculpe, ¿dónde está la estación? — Siga siempre recto por esta calle, luego gire a la derecha en el semáforo. La estación está frente a usted, después de la plaza. — ¿Está lejos? — No, diez minutos a pie. Pero atención: hay mucho tráfico en el centro, mejor no tomar el coche." },
        { it: "— Grazie mille! Un'ultima cosa: dove posso comprare un biglietto dell'autobus? — In edicola o con l'{4} directly sul bus. Il centro storico è {5}: molte zone sono solo per i pedoni, con le vie piene di negozi e caffè.", es: "— ¡Muchas gracias! Una última cosa: ¿dónde puedo comprar un billete de autobús? — En el kiosco o con la aplicación directamente en el bus. El centro histórico es peatonal: muchas zonas son solo para peatones, con las calles llenas de tiendas y cafés." },
      ],
      gaps: [
        { options: ["dritto", "sinistra", "indietro"], answer: 0, why: "Instrucción inicial de dirección" },
        { options: ["piazza", "campagna", "autostrada"], answer: 0, why: "Lugar urbano antes de la estación" },
        { options: ["traffico", "silenzio", "vento"], answer: 0, why: "Razón para no usar coche" },
        { options: ["app", "amico", "aspetto"], answer: 0, why: "Alternativa a la edicola: móvil" },
        { options: ["pedonale", "industriale", "militare"], answer: 0, why: "\"Solo per i pedoni\"" },
      ],
    },
    {
      id: "cz-a1-07-2", title: "La mia città perfetta", titleEs: "Mi ciudad perfecta", minutes: 2,
      paragraphs: [
        { it: "Verona è la mia città: non troppo grande, non troppo {1}. Il centro è chiuso alle macchine, quindi si cammina {2} tra le vie medievali. C'è un fiume, l'Adige, con dei ponti bellissimi.", es: "Verona es mi ciudad: ni demasiado grande, ni demasiado pequeña. El centro está cerrado a los coches, así que se camina tranquilo entre las calles medievales. Hay un río, el Adige, con unos puentes hermosísimos." },
        { it: "La sera la città si {3}: le luci dei ristoranti, la gente che passeggia, la musica dai bar. In estate c'è l'opera nell'Arena, un anfiteatro {4} di duemila anni. I turisti vengono per Giulietta, ma i veronesi restano per la {5}: qui si vive bene!", es: "Por la noche la ciudad se ilumina: las luces de los restaurantes, la gente que pasea, la música de los bares. En verano hay ópera en la Arena, un anfiteatro antiguo de dos mil años. Los turistas vienen por Julieta, pero los veroneses se quedan por la calidad de vida: ¡aquí se vive bien!" },
      ],
      gaps: [
        { options: ["piccola", "lontana", "moderna"], answer: 0, why: "Contraste con \"grande\"" },
        { options: ["tranquilli", "di corsa", "in macchina"], answer: 0, why: "Centro sin coches" },
        { options: ["illumina", "spegne", "svuota"], answer: 0, why: "Luces + gente: se enciende" },
        { options: ["antico", "nuovo", "futurista"], answer: 0, why: "\"Duemila anni\": antiguo" },
        { options: ["qualità della vita", "traffico", "pioggia"], answer: 0, why: "\"Qui si vive bene\"" },
      ],
    },
    {
      id: "cz-a1-07-3", title: "Vetri e vicoli", titleEs: "Vidrios y callejones", minutes: 3,
      paragraphs: [
        { it: "Il signor Bruno ha un negozio {1} di vetri e cristalli in un vicolo di Venezia. Il negozio è così piccolo che ci possono entrare solo due {2} alla volta. Lui soffia il vetro davanti ai turisti, che guardano con la bocca aperta.", es: "El señor Bruno tiene una tienda artesanal de vidrios y cristales en un callejón de Venecia. La tienda es tan pequeña que solo pueden entrar dos personas a la vez. Él sopla el vidrio frente a los turistas, que miran con la boca abierta." },
        { it: "«Questo lavoro l'ho imparato da mio padre — dice — e lui dal suo. Non ci sono {3}: solo le mani, il fuoco e la pazienza». Oggi i suoi bicchieri costano cari, ma ogni pezzo è {4} al mondo. «Il vetro è come la vita — conclude sorridendo — se hai {5}, si rompe. Se hai pazienza, diventa arte.»", es: "«Este oficio lo aprendí de mi padre —dice— y él del suyo. No hay máquinas: solo las manos, el fuego y la paciencia». Hoy sus copas cuestan caras, pero cada pieza es única en el mundo. «El vidrio es como la vida —concluye sonriendo—: si tienes prisa, se rompe. Si tienes paciencia, se convierte en arte.»" },
      ],
      gaps: [
        { options: ["artigianale", "digitale", "industriale"], answer: 0, why: "Hecho a mano con fuego" },
        { options: ["persone", "macchine", "barche"], answer: 0, why: "Local diminuto: aforo de clientes" },
        { options: ["macchine", "clienti", "turisti"], answer: 0, why: "Contraste: manos, fuego, paciencia" },
        { options: ["unico", "comune", "rotto"], answer: 0, why: "Pieza hecha a mano" },
        { options: ["fretta", "soldi", "sonno"], answer: 0, why: "Opuesto a paciencia" },
      ],
    },
  ],
  "cu-a1-08": [
    {
      id: "cz-a1-08-1", title: "Il biglietto del treno", titleEs: "El billete del tren", minutes: 2,
      paragraphs: [
        { it: "Al sportello della stazione: «Buongiorno, un biglietto per Firenze, per favore». — «Andata e {1}?» — «Solo andata, grazie». — «Con quale treno vuole partire?» — «Con il più {2} possibile: ho fretta!»", es: "En la ventanilla de la estación: «Buenos días, un billete para Florencia, por favor». — «¿Ida y vuelta?» — «Solo ida, gracias». — «¿Con qué tren quiere partir?» — «Con el más rápido posible: ¡tengo prisa!»" },
        { it: "Il Regionale costa dodici euro ma impiega tre ore; la Frecciarossa costa {3} ma arriva in un'ora e mezza. «Faccio un {4}: prendo la Frecciarossa». Il treno parte dal {5} sette. Attenzione: in Italia bisogna convalidare il biglietto regionale prima di salire!", es: "El Regional cuesta doce euros pero tarda tres horas; la Frecciarossa cuesta más pero llega en una hora y media. «Hago un cálculo: tomo la Frecciarossa». El tren parte del andén siete. ¡Atención: en Italia hay que validar el billete regional antes de subir!" },
      ],
      gaps: [
        { options: ["ritorno", "andata", "sconto"], answer: 0, why: "Par oda: ida y vuelta" },
        { options: ["veloce", "economico", "vecchio"], answer: 0, why: "\"Ho fretta\"" },
        { options: ["di più", "uguale", "niente"], answer: 0, why: "Más rápido = más caro" },
        { options: ["calcolo", "capolavoro", "viaggio"], answer: 0, why: "Compara precio/tiempo" },
        { options: ["binario", "bagno", "vagone"], answer: 0, why: "Lugar de partida del tren" },
      ],
    },
    {
      id: "cz-a1-08-2", title: "Ritardo in stazione", titleEs: "Retraso en la estación", minutes: 2,
      paragraphs: [
        { it: "Il mio treno per Milano ha centoventi minuti di {1}. Sul tabellone c'è scritto «RITARDO» in rosso, ma nessuna spiegazione. In stazione c'è una {2} di persone davanti al banco informazioni.", es: "Mi tren para Milán tiene ciento veinte minutos de retraso. En el tablero está escrito «RETRASO» en rojo, pero ninguna explicación. En la estación hay una fila de personas frente al mostrador de información." },
        { it: "Finalmente un annuncio: «Il treno delle quattordici è soppresso per un guasto tecnico. I passeggeri possono prendere il treno {3} delle quindici e trenta». C'è chi si arrabbia, chi telefona a casa, chi ride con rassegnazione. Io vado al bar della stazione e prendo un caffè: in Italia, davanti a un ritardo, non resta che {4} con pazienza. Il nuovo treno arriva… con altri venti minuti di ritardo, {5}!", es: "Finalmente un anuncio: «El tren de las catorce está suprimido por una avería técnica. Los pasajeros pueden tomar el tren siguiente de las quince treinta». Hay quien se enoja, quien telefonea a casa, quien ríe con resignación. Yo voy al bar de la estación y tomo un café: en Italia, ante un retraso, no queda más que esperar con paciencia. ¡El nuevo tren llega… con otros veinte minutos de retraso, naturalmente!" },
      ],
      gaps: [
        { options: ["ritardo", "anticipo", "vantaggio"], answer: 0, why: "\"RITARDO\" en el tablero" },
        { options: ["fila", "festa", "partita"], answer: 0, why: "Gente esperando en información" },
        { options: ["successivo", "precedente", "lontano"], answer: 0, why: "Alternativa al suprimido" },
        { options: ["aspettare", "partire", "gridare"], answer: 0, why: "Toma café: resignación" },
        { options: ["naturalmente", "impossibile", "per fortuna"], answer: 0, why: "Ironía final típica" },
      ],
    },
    {
      id: "cz-a1-08-3", title: "Il viaggio della nonna", titleEs: "El viaje de la abuela", minutes: 3,
      paragraphs: [
        { it: "Nel 1962 la nonna Elsa aveva vent'anni quando prese il suo primo treno per la Germania. Nella {1} c'erano solo una valigia di cartone e due fotografie della famiglia. Andava a lavorare in una fabbrica: era l'epoca della grande {2} italiana.", es: "En 1962 la abuela Elsa tenía veinte años cuando tomó su primer tren hacia Alemania. En el equipaje llevaba solo una maleta de cartón y dos fotografías de la familia. Iba a trabajar en una fábrica: era la época de la gran emigración italiana." },
        { it: "«Il viaggio durava diciotto ore — racconta —. Non c'era l'aria condizionata, e il treno era pieno di gente come me, con i sogni e la paura». Oggi Elsa prende la Frecciarossa per andare a trovare i nipoti a Milano: «In tre ore arrivo, col wi-fi e il caffè. Il mondo è cambiato, ma l'emozione della {3} è la stessa». Prima di salire, come allora, compra un giornale e un panino. E conserva ancora il primo {4} di quel viaggio del 1962: carta {5}, timbro blu, destinazione Monaco.", es: "«El viaje duraba dieciocho horas —cuenta—. No había aire acondicionado, y el tren estaba lleno de gente como yo, con los sueños y el miedo». Hoy Elsa toma la Frecciarossa para visitar a sus nietos en Milán: «En tres horas llego, con wifi y café. El mundo cambió, pero la emoción de la partida es la misma». Antes de subir, como entonces, compra un periódico y un sándwich. Y todavía guarda el primer billete de aquel viaje de 1962: papel amarillento, sello azul, destino Múnich." },
      ],
      gaps: [
        { options: ["valigia", "macchina", "camera"], answer: 0, why: "Maleta de cartón y fotos" },
        { options: ["emigrazione", "vacanza", "vacche"], answer: 0, why: "Ir a trabajar al extranjero" },
        { options: ["partenza", "sconfitta", "fattura"], answer: 0, why: "Emoción de subir al tren" },
        { options: ["biglietto", "cellulare", "portafoglio"], answer: 0, why: "Objeto guardado 60 años" },
        { options: ["ingiallita", "verde", "bagnata"], answer: 0, why: "Papel viejo de 1962" },
      ],
    },
  ],
  "cu-a1-09": [
    {
      id: "cz-a1-09-1", title: "Il sabato di Luca", titleEs: "El sábado de Luca", minutes: 2,
      paragraphs: [
        { it: "Il sabato Luca non lavora. La mattina gioca a {1} con gli amici al campetto del quartiere: sono in undici, ma manca sempre qualcuno. Dopo la partita, tutti insieme alla {2} per una pizza.", es: "El sábado Luca no trabaja. Por la mañana juega al fútbol con los amigos en la cancha del barrio: son once, pero siempre falta alguien. Después del partido, todos juntos a la pizzería por una pizza." },
        { it: "Nel pomeriggio Luca ha due passioni: la {3} in bici lungo il fiume e il pianoforte. Sta imparando un brano difficile. La sera guarda la partita della Serie A in TV o al bar con gli amici. «Il sabato è il mio giorno {4} — dice —. La settimana è lunga, ma il sabato mi {5} la energia!»", es: "Por la tarde Luca tiene dos pasiones: el paseo en bici junto al río y el piano. Está aprendiendo una pieza difícil. Por la noche ve el partido de la Serie A en la tele o en el bar con los amigos. «El sábado es mi día favorito —dice—. ¡La semana es larga, pero el sábado me recarga la energía!»" },
      ],
      gaps: [
        { options: ["calcio", "scacchi", "poker"], answer: 0, why: "\"Undici\" + cancha: fútbol" },
        { options: ["pizzeria", "farmacia", "banca"], answer: 0, why: "Comida tras el partido" },
        { options: ["passeggiata", "discussione", "sosta"], answer: 0, why: "En bici junto al río" },
        { options: ["preferito", "odiato", "lavorativo"], answer: 0, why: "Día de pasiones" },
        { options: ["ricarica", "rubo", "spegne"], answer: 0, why: "Metáfora de energía" },
      ],
    },
    {
      id: "cz-a1-09-2", title: "Un nuovo hobby", titleEs: "Un nuevo pasatiempo", minutes: 2,
      paragraphs: [
        { it: "Quest'anno ho iniziato un hobby nuovo: la ceramica. All'inizio era solo {1}: volevo fare un regalo alla mamma. Poi il corso è diventato la mia passione. Le prime volte erano un disastro: i vasi si rompevano, le tazze erano {2}!", es: "Este año comencé un pasatiempo nuevo: la cerámica. Al principio era solo curiosidad: quería hacer un regalo para la mamá. Luego el curso se convirtió en mi pasión. Las primeras veces eran un desastre: ¡los jarrones se rompían, las tazas quedaban torcidas!" },
        { it: "L'insegnante, una signora di settant'anni con le mani piene di argilla, ripeteva: «La pazienza è la prima {3}. Il tornio non ha fretta». Ora le mie tazze sono quasi decenti e i miei amici fanno le {4} per averne una. Sabato prossimo c'è la mostra della scuola: esporrò tre pezzi. Sono {5} come un bambino!", es: "La maestra, una señora de setenta años con las manos llenas de barro, repetía: «La paciencia es la primera herramienta. El torno no tiene prisa». Ahora mis tazas son casi decentes y mis amigos hacen fila para tener una. El próximo sábado hay la muestra de la escuela: expondré tres piezas. ¡Estoy emocionado como un niño!" },
      ],
      gaps: [
        { options: ["curiosità", "obbligo", "lavoro"], answer: 0, why: "Motivación inicial leve" },
        { options: ["storte", "perfette", "care"], answer: 0, why: "\"Un disastre\"" },
        { options: ["strumenta", "regola", "nemica"], answer: 0, why: "Primera cualidad necesaria" },
        { options: ["a gara", "le valigie", "domande"], answer: 0, why: "Todos quieren una taza" },
        { options: ["emozionato", "arrabbiato", "addormentato"], answer: 0, why: "Como un niño ante la muestra" },
      ],
    },
    {
      id: "cz-a1-09-3", title: "La partita della domenica", titleEs: "El partido del domingo", minutes: 3,
      paragraphs: [
        { it: "La domenica in Italia, alle tre del pomeriggio, il paese si {1}: è l'ora della partita. Nei bar la TV è accesa, i tavolini sono pieni. Il barista serve i caffè senza staccare gli occhi dallo {2}.", es: "El domingo en Italia, a las tres de la tarde, el país se detiene: es la hora del partido. En los bares la tele está encendida, las mesitas están llenas. El barista sirve los cafés sin quitar los ojos de la pantalla." },
        { it: "Al gol, il quartiere esplode: si sentono i {3} dalle finestre aperte, i clacson per strada. Quando la squadra perde, invece, scende un silenzio strano. Il nonno Guarda in bianco e nero i match di una volta: «Prima il calcio era poesia — dice — oggi è {4}». Ma anche lui, al gol, salta dalla sedia come un ragazzino. Perché il calcio, in Italia, non è solo uno sport: è un modo di stare {5}.", es: "Al gol, el barrio explota: se escuchan los gritos desde las ventanas abiertas, los cláxones por la calle. Cuando el equipo pierde, en cambio, baja un silencio extraño. El abuelo ve en blanco y negro los partidos de antes: «Antes el fútbol era poesía —dice— hoy es negocio». Pero también él, al gol, salta de la silla como un chiquillo. Porque el fútbol, en Italia, no es solo un deporte: es una manera de estar juntos." },
      ],
      gaps: [
        { options: ["ferma", "gira", "illumina"], answer: 0, why: "Todo el mundo mirando el partido" },
        { options: ["schermo", "specchio", "orologio"], answer: 0, why: "TV encendida: pantalla" },
        { options: ["gridi", "sussurri", "passi"], answer: 0, why: "Explosión de alegría" },
        { options: ["business", "bugia", "religione"], answer: 0, why: "Contraste irónico con poesía" },
        { options: ["insieme", "soli", "zitti"], answer: 0, why: "Función social del fútbol" },
      ],
    },
  ],
  "cu-a1-10": [
    {
      id: "cz-a1-10-1", title: "L'appartamento nuovo", titleEs: "El apartamento nuevo", minutes: 2,
      paragraphs: [
        { it: "Ci siamo trasferiti il mese scorso! Il nuovo appartamento è al terzo piano, senza ascensore, ma con una terrazza {1} sul tetto. Ci sono due camere da letto, un soggiorno grande con il {2} e la cucina abitabile.", es: "¡Nos mudamos el mes pasado! El apartamento nuevo está en el tercer piso, sin ascensor, pero con una terraza panorámica en la azotea. Hay dos dormitorios, una sala grande con el balcón y la cocina habitable." },
        { it: "Il bagno ha la vasca, finalmente! Mancano ancora alcune cose: le {3} in soggiorno e il tavolo della cucina. Il frigo è gigante ma {4}: dobbiamo fare la spesa. I vicini sono gentili: la signora del quarto piano ci ha portato una torta di {5}! Ci sentiamo già a casa.", es: "El baño tiene bañera, ¡por fin! Faltan todavía algunas cosas: las cortinas en la sala y la mesa de la cocina. El frigorífico es gigante pero vacío: tenemos que hacer la compra. Los vecinos son amables: ¡la señora del cuarto piso nos trajo una tarta de bienvenida! Ya nos sentimos en casa." },
      ],
      gaps: [
        { options: ["panoramica", "rotta", "piena"], answer: 0, why: "Terraza en la azotea: con vistas" },
        { options: ["balcone", "giardino", "garage"], answer: 0, why: "Espacio abierto junto al salón" },
        { options: ["tende", "sedie", "scarpe"], answer: 0, why: "Elemento que falta en el salón" },
        { options: ["vuoto", "rumoroso", "pieno"], answer: 0, why: "Hay que hacer la compra" },
        { options: ["benvenuto", "compleanno", "matrimonio"], answer: 0, why: "Gesto de vecinos nuevos" },
      ],
    },
    {
      id: "cz-a1-10-2", title: "La casa della nonna al mare", titleEs: "La casa de la abuela en el mar", minutes: 3,
      paragraphs: [
        { it: "La casa della nonna al mare non è grande, ma per me è il posto più {1} del mondo. È a due passi dalla spiaggia, con le persiane verdi e un profumo di sale e lavanda. Dentro, ogni oggetto racconta una {2}: le foto in bianco e nero, il servizio di piatti dei tempi delle nozze.", es: "La casa de la abuela en el mar no es grande, pero para mí es el lugar más bello del mundo. Está a dos pasos de la playa, con las persianas verdes y un aroma de sal y lavanda. Dentro, cada objeto cuenta una historia: las fotos en blanco y negro, la vajilla de los tiempos de la boda." },
        { it: "D'estate tutta la famiglia si riunisce lì: zii, cugini, gatti. La mattina si fa colazione in giardino; il pomeriggio i bambini giocano a carte; la sera si mangia fuori, sotto il pergolato di {3}. La nonna dice sempre: «Questa casa non è fatta di mattoni, è fatta di {4}». Ora che sono grande, capisco cosa vuole dire: è il posto dove tutti tornano, come gli {5} che tornano a casa d'autunno.", es: "En verano toda la familia se reúne allí: tíos, primos, gatos. Por la mañana se desayuna en el jardín; por la tarde los niños juegan a cartas; por la noche se come afuera, bajo el pérgola de uvas. La abuela dice siempre: «Esta casa no está hecha de ladrillos, está hecha de recuerdos». Ahora que soy grande, entiendo qué quiere decir: es el lugar adonde todos vuelven, como las golondrinas que regresan a casa en otoño." },
      ],
      gaps: [
        { options: ["bello", "caro", "moderno"], answer: 0, why: "\"Per me\": afecto personal" },
        { options: ["storia", "barzelletta", "ricetta"], answer: 0, why: "Fotos y vajilla antiguas" },
        { options: ["uva", "mattoni", "ferro"], answer: 0, why: "Pérgola con fruta de verano" },
        { options: ["ricordi", "soldi", "pietre"], answer: 0, why: "Contraste con mattoni" },
        { options: ["rondini", "camion", "poliziotti"], answer: 0, why: "Aves que regresan en otoño" },
      ],
    },
    {
      id: "cz-a1-10-3", title: "Cercasi stanza", titleEs: "Se busca habitación", minutes: 2,
      paragraphs: [
        { it: "CERCASI STANZA. Sono Sara, studentessa di Milano, cerco una stanza in appartamento da {1}. Preferisco compagne di casa {2}: studio molto e la mattina ho lezione presto. Non fumo, non ho animali, ma adoro i gatti degli altri!", es: "SE BUSCA HABITACIÓN. Soy Sara, estudiante de Milán, busco una habitación en apartamento compartido. Prefiero compañeras de casa tranquilas: estudio mucho y por la mañana tengo clase temprano. No fumo, no tengo animales, ¡pero adoro los gatos de los demás!" },
        { it: "Mi piacciono le case {3} e la cucina pulita: sono napoletana, cucino bene! Cerco una stanza {4}, con la finestra: d'estate Milano è caldissima. Zona? Vicino all'università o a una {5} della metro. Budget: quattrocento euro al massimo, spese incluse. Contattatemi: sono una coinquilina seria e simpatica!", es: "Me gustan las casas ordenadas y la cocina limpia: ¡soy napolitana, cocino bien! Busco una habitación luminosa, con ventana: en verano Milán es calurosísima. ¿Zona? Cerca de la universidad o de una estación del metro. Presupuesto: cuatrocientos euros como máximo, gastos incluidos. ¡Contáctenme: soy una compañera de piso seria y simpática!" },
      ],
      gaps: [
        { options: ["condividere", "comprare", "affittare da sola"], answer: 0, why: "Anuncio de habitación compartida" },
        { options: ["tranquille", "rumorose", "sportive"], answer: 0, why: "Estudia y madruga" },
        { options: ["ordinato", "piene di feste", "vuote"], answer: 0, why: "Junto a cocina limpia" },
        { options: ["luminosa", "buia", "umida"], answer: 0, why: "Con ventana contra el calor" },
        { options: ["fermata", "fabbrica", "discoteca"], answer: 0, why: "Transporte cercano" },
      ],
    },
  ],
  "cu-a1-11": [
    {
      id: "cz-a1-11-1", title: "La lista della spesa", titleEs: "La lista de la compra", minutes: 2,
      paragraphs: [
        { it: "Sabato mattina, mercato. La lista della spesa: pane, pomodori, mozzarella di {1}, un chilo di pesche e il caffè. Al banco della frutta, la signora sceglie le pesche una per una: «Queste no, sono troppo {2}. Mi dia le gialle, morbide al punto giusto».", es: "Sábado por la mañana, mercado. La lista de la compra: pan, tomates, mozzarella de búfala, un kilo de duraznos y el café. En el puesto de fruta, la señora elige los duraznos uno por uno: «Estos no, están demasiado duros. Deme los amarillos, blandos en su punto»." },
        { it: "Al banco del formaggio si assaggia sempre: «Un pezzetto di parmigiano, per favore?». Il venditore taglia e offre. Il {3} del mercato è l'abilità: si tocca, si annusa, si contratta. Alla fine, la spesa è piena e il portafoglio {4}! Ma la verdura del mercato dura di più di quella del supermercato e ha il {5} di una volta.", es: "En el puesto de queso siempre se prueba: «¿Un trocito de parmesano, por favor?». El vendedor corta y ofrece. El secreto del mercado es la habilidad: se toca, se huele, se regatea. Al final, la compra está llena ¡y la cartera vacía! Pero la verdura del mercado dura más que la del supermercato y tiene el sabor de antes." },
      ],
      gaps: [
        { options: ["bufala", "montagna", "mandorla"], answer: 0, why: "Tipo de mozzarella típica" },
        { options: ["dure", "mature", "dolci"], answer: 0, why: "Pide las maduras en su punto" },
        { options: ["segreto", "problema", "prezzo"], answer: 0, why: "Tocar, oler, regatear: saber hacer" },
        { options: ["vuoto", "pieno", "rotto"], answer: 0, why: "Contraste humorístico" },
        { options: ["sapore", "prezzo", "peso"], answer: 0, why: "\"Di una volta\": calidad" },
      ],
    },
    {
      id: "cz-a1-11-2", title: "Al supermercato", titleEs: "En el supermercado", minutes: 2,
      paragraphs: [
        { it: "Il supermercato è comodo: tutto sotto un tetto, prezzi {1}, orari continui. Si prende il carrello e si parte dalle casse: frutta e verdura si pesano da soli con la {2} elettronica.", es: "El supermercado es cómodo: todo bajo un techo, precios claros, horarios continuos. Se toma el carrito y se parte de las cajas: la fruta y la verdura se pesan solas con la báscula electrónica." },
        { it: "Ma anche al supermercato ci sono regole non scritte. Non si passa {3} con ventuno articoli: quelli sono per la cassa normale. Se il nastro della cassa è pieno, si aiuta a {4} la spesa del vicino. La fila si rispetta! E prima di uscire, si guarda sempre lo {5}: il risparmio è una scienza esatta.", es: "Pero también en el supermercado hay reglas no escritas. No se pasa por la caja rápida con veintiún artículos: esa es para la caja normal. Si la banda de la caja está llena, se ayuda a empacar la compra del vecino. ¡La fila se respeta! Y antes de salir, siempre se mira el recibo: el ahorro es una ciencia exacta." },
      ],
      gaps: [
        { options: ["chiari", "misteriosi", "alti"], answer: 0, why: "Ventaja del supermercado" },
        { options: ["bilancia", "cassa", "carrozza"], answer: 0, why: "Se pesa la fruta" },
        { options: ["in cassa veloce", "di corsa", "di notte"], answer: 0, why: "Regla de la caja rápida" },
        { options: ["insaccare", "mangiare", "pagare"], answer: 0, why: "Ayuda en la banda de la caja" },
        { options: ["scontrino", "orologio", "specchietto"], answer: 0, why: "Comprobante de compra" },
      ],
    },
    {
      id: "cz-a1-11-3", title: "Il reparto della pasta", titleEs: "La sección de la pasta", minutes: 2,
      paragraphs: [
        { it: "Nel reparto della pasta un turista resta {1}: davanti a lui, ottanta tipi diversi. Spaghetti, penne, rigatoni, fusilli, farfalle, orecchiette, tagliatelle… «Ma sono tutti uguali!» dice. La signora accanto sorride: «Assolutamente no! Ogni forma prende il {2} in modo diverso».", es: "En la sección de la pasta un turista queda paralizado: frente a él, ochenta tipos distintos. Spaghetti, penne, rigatoni, fusilli, farfalle, orecchiette, tagliatelle… «¡Pero son todos iguales!», dice. La señora al lado sonríe: «¡Absolutamente no! Cada forma toma la salsa de manera distinta»." },
        { it: "«Gli spaghetti vanno con l'olio e l'aglio; le penne con l'arrabbiata; i rigatoni con la carne. E non mi parli della {3} fresca: un'altra cosa!». Il turista compra tre formati. A casa, dopo il primo esperimento, manda un messaggio alla signora: «Aveva {4}: non sono affatto uguali. Ieri ho capito perché in Italia la pasta è una {5} seria».", es: "«Los spaghetti van con aceite y ajo; las penne con la arrabbiata; los rigatoni con carne. ¡Y no me hable de la pasta fresca: otra cosa!». El turista compra tres formatos. En casa, tras el primer experimento, manda un mensaje a la señora: «Tenía razón: no son para nada iguales. Ayer entendí por qué en Italia la pasta es una religión seria»." },
      ],
      gaps: [
        { options: ["paralizzato", "annoiato", "addormentato"], answer: 0, why: "80 tipos: decisión imposible" },
        { options: ["condimento", "prezzo", "profumo"], answer: 0, why: "Cada forma toma la salsa" },
        { options: ["pasta", "acqua", "farina"], answer: 0, why: "Contraste con la seca" },
        { options: ["ragione", "torto", "fortuna"], answer: 0, why: "Confirmación de la señora" },
        { options: ["religione", "gioco", "moda"], answer: 0, why: "Metáfora de seriedad italiana" },
      ],
    },
  ],
  "cu-a1-12": [
    {
      id: "cz-a1-12-1", title: "Tre giorni a Roma", titleEs: "Tres días en Roma", minutes: 3,
      paragraphs: [
        { it: "Giorno uno: colazione con cornetto e cappuccino vicino a piazza Navona, poi la {1} del centro a piedi: il Pantheon, la fontana di Trevi, Piazza di Spagna. La sera, cena in Trastevere: carbonara e un {2} della casa.", es: "Día uno: desayuno con cornetto y capuchino cerca de la plaza Navona, luego la visita del centro a pie: el Panteón, la fontana de Trevi, la Plaza de España. Por la noche, cena en Trastevere: carbonara y un vino de la casa." },
        { it: "Giorno due: i Musei Vaticani e la Cappella Sistina. Prenotate i biglietti {3}: la fila può durare tre ore! La sera, tramonto dal Gianicolo: Roma si colora d'oro. Giorno tre: il Colosseo di mattina presto, quando non c'è {4}, e il Mercato di Campo de' Fiori. Un consiglio: a Roma i tacchi no, le {5} sì: si camina tutto il giorno!", es: "Día dos: los Museos Vaticanos y la Capilla Sixtina. ¡Reserven las entradas con antelación: la fila puede durar tres horas! Por la noche, atardecer desde el Janículo: Roma se colorea de oro. Día tres: el Coliseo temprano en la mañana, cuando no hay gente, y el Mercado de Campo de' Fiori. Un consejo: en Roma los tacones no, ¡las zapatillas sí: se camina todo el día!" },
      ],
      gaps: [
        { options: ["visita", "corsa", "lezione"], answer: 0, why: "Recorrido a pie por monumentos" },
        { options: ["vino", "amaro", "gelato gigante"], answer: 0, why: "Compañía de la carbonara" },
        { options: ["in anticipo", "in ritardo", "a caso"], answer: 0, why: "Evitar la fila de tres horas" },
        { options: ["coda", "pioggia", "musica"], answer: 0, why: "Ir temprano: sin fila" },
        { options: ["scarpe comode", "ciabatte rotte", "valigie"], answer: 0, why: "Se camina todo el día" },
      ],
    },
    {
      id: "cz-a1-12-2", title: "La romana verace", titleEs: "La romana auténtica", minutes: 3,
      paragraphs: [
        { it: "C'è la Roma dei turisti e c'è la Roma dei romani. La seconda si trova nei {1} come Testaccio e Garbatella, dove la mattina il forno vende la pizza bianca calda e la signora chiama tutti «aò».", es: "Está la Roma de los turistas y está la Roma de los romanos. La segunda se encuentra en los barrios como Testaccio y Garbatella, donde por la mañana el horno vende la pizza bianca caliente y la señora llama a todos «aò»." },
        { it: "Qui il caffè si chiama «un {2}» e si beve in due sorsi. La domenica si mangia il pranzo della nonna: carbonara, amatriciana, cacio e pepe — la {3} di famiglia, guai a cambiarla! Il calcio è religione, la puntualità è un'opinione. «Roma — dice il signor Aldo, ottant'anni, seduto al bar — non è una città: è una {4}. O la ami o la odi, ma se la ami, non te ne vai più». E in effetti suo nonno, suo padre e suo figlio sono nati tutti nello stesso {5} di Via Marmorata.", es: "Aquí el café se llama «un espresso» y se bebe en dos sorbos. El domingo se come el almuerzo de la abuela: carbonara, amatriciana, cacio e pepe — ¡la receta de familia, ni pensar en cambiarla! El fútbol es religión, la puntualidad es una opinión. «Roma —dice el señor Aldo, ochenta años, sentado en el bar— no es una ciudad: es un sentimiento. O la amas o la odias, pero si la amas, ya no te vas». Y en efecto su abuelo, su padre y su hijo nacieron todos en el mismo hospital de la Via Marmorata." },
      ],
      gaps: [
        { options: ["quartieri", "musei", "alberghi"], answer: 0, why: "Testaccio y Garbatella: zonas" },
        { options: ["caffè", "tè freddo", "cappuccio enorme"], answer: 0, why: "En dos sorbos: espresso" },
        { options: ["ricetta", "regola della strada", "canzone"], answer: 0, why: "Platos familiares: receta" },
        { options: ["sentimento", "azienda", "lezione"], answer: 0, why: "Amar u odiar: emoción" },
        { options: ["ospedale", "treno", "ristorante"], answer: 0, why: "Nacer en el mismo lugar" },
      ],
    },
    {
      id: "cz-a1-12-3", title: "Missione compiuta!", titleEs: "¡Misión cumplida!", minutes: 3,
      paragraphs: [
        { it: "Ce l'ho fatta! Una settimana a Roma parlando solo italiano. Il primo giorno è stato {1}: capivo poco e arrossivo per ogni errore. La signora del mercato mi correggeva con pazienza: «Si dice \"un chilo di pane\", non \"un pane chilo\"!».", es: "¡Lo logré! Una semana en Roma hablando solo italiano. El primer día fue desastroso: entendía poco y me sonrojaba por cada error. La señora del mercado me corregía con paciencia: «¡Se dice \"un chilo di pane\", no \"un pane chilo\"!»." },
        { it: "Poi, giorno dopo giorno, qualcosa è {2}: le parole arrivavano prima, le frasi uscivano intere. Ho ordinato la cena, ho chiesto le indicazioni, ho fatto amicizia con il barista. L'ultimo giorno, il signor Aldo mi ha detto: «Parli italiano! Non {3}, ma italiano!». La chiave? Tre cose: il {4} di sbagliare, la curiosità per la gente e… tre caffè al giorno al banco del bar, dove si parla di tutto. Missione {5}!", es: "Luego, día tras día, algo cambió: las palabras llegaban antes, las frases salían enteras. Pedí la cena, pregunté indicaciones, hice amistad con el barista. El último día, el señor Aldo me dijo: «¡Hablas italiano! ¡No perfecto, pero italiano!». ¿La clave? Tres cosas: el coraje de equivocarse, la curiosidad por la gente y… tres cafés al día en el mostrador del bar, donde se habla de todo. ¡Misión cumplida!" },
      ],
      gaps: [
        { options: ["disastroso", "perfetto", "noioso"], answer: 0, why: "Entendía poco y se sonrojaba" },
        { options: ["cambiato", "rotto", "perso"], answer: 0, why: "Mejora progresiva" },
        { options: ["perfetto", "sbagliato", "impossibile"], answer: 0, why: "Matiz: ya es italiano real" },
        { options: ["coraggio", "rischio economico", "capitale"], answer: 0, why: "Sincerarse pese a los errores" },
        { options: ["compiuta", "annullata", "impossibile"], answer: 0, why: "Cierre exitoso del reto" },
      ],
    },
  ],
};
