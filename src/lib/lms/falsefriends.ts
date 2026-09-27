import type { FalseFriend, CefrLevel } from "./types";

/* ── Falsi amici IT–ES · plugin v4.0 ────────────────────────────────
   Parejas de palabras que existen en italiano y español (o suenan
   igual) con significado distinto. Lexicografía contrastiva para
   hispanohablantes (cf. Burzio, "Falsos amigos italiano-español"). */

const F = (
  id: string, it: string, itMeaning: string, es: string, esMeaning: string,
  trap: string, itEx: string, esEx: string, level: CefrLevel
): FalseFriend => ({ id, it, itMeaning, es, esMeaning, trap, itExample: itEx, esExample: esEx, level });

export const FALSE_FRIENDS: FalseFriend[] = [
  /* ═══ Los grandes clásicos ═══ */
  F("ff-001", "burro", "mantequilla", "burro", "asno", "El clásico de los clásicos: pedir pan con burro en Italia te trae mantequilla. Procede del latín butyrum.", "Sul pane metto il burro, non l'olio.", "En el pan pongo mantequilla, no aceite.", "A1"),
  F("ff-002", "salire", "subir, montarse", "salir", "ir hacia afuera", "Salire es subir (escaleras, al autobús); el español salir se dice uscire. Confundirlos te deja esperando en la planta baja.", "Saliamo in ascensore o prendiamo le scale?", "¿Subimos en ascensor o cogemos las escaleras?", "A1"),
  F("ff-003", "subire", "sufrir; someterse a algo", "sufrir", "sufrir", "Coinciden en el sufrimiento, pero subire también es someterse a algo sin rechistar: subire un torto = aguantar un agravio.", "Ha subito un'operazione al ginocchio.", "Se sometió a una operación de rodilla.", "B1"),
  F("ff-004", "guardare", "mirar, observar", "guardar", "custodiar, conservar", "Guardare = mirar. El español guardar es tenere o conservare. No pidas a un italiano que te guarde el asiento mirándolo.", "Guarda che tramonto!", "¡Mira qué atardecer!", "A1"),
  F("ff-005", "largo", "ancho", "largo", "de gran longitud", "Largo italiano = ancho; lungo = largo. De ahí larghezza (anchura) y lunghezza (longitud).", "Il letto è largo due metri.", "La cama mide dos metros de ancho.", "A1"),
  F("ff-006", "lungo", "largo (extensión)", "longevo", "de larga vida", "La familia engaña: lungo es largo, pero longevo existe también en italiano con el mismo sentido que en español.", "Un lungo corridoio con molte porte.", "Un pasillo largo con muchas puertas.", "A1"),
  F("ff-007", "topo", "ratón", "topo", "topo (animal)", "El topo italiano es el ratón; el topo de jardín se dice talpa. En informática el ratón suele ser mouse (préstamo).", "Un topo è entrato in cucina!", "¡Un ratón entró en la cocina!", "A1"),
  F("ff-008", "penna", "pluma, bolígrafo", "pena", "castigo, dolor", "Penna es el bolígrafo con el que escribes (y la pluma del pájaro); la pena moral es dolore, aunque existe pena en contextos judiciales (pena di morte).", "Mi presti una penna blu?", "¿Me prestas un bolígrafo azul?", "A1"),
  F("ff-009", "seta", "seda", "seta", "hongo, champiñón", "La seta comestible se dice fungo; seta en italiano es solo el tejido. Un foulard di seta nunca se come.", "Questa sciarpa è di pura seta.", "Esta bufanda es de pura seda.", "A1"),
  F("ff-010", "sugo", "salsa (de tomate, de carne)", "jugo", "zumo, jugo", "El zumo de fruta es succo; il sugo es la salsa de la pasta. Si pides il sugo d'arancia te mirarán raro.", "La pasta al sugo di pomodoro è un classico.", "La pasta con salsa de tomate es un clásico.", "A2"),
  F("ff-011", "colla", "pegamento", "cola", "fila; trasero (vulgar)", "La cola para esperar es fila o coda; la cola de pegar es colla. El perro muele la coda, no la colla.", "Serve la colla per riparare il vaso.", "Hace falta pegamento para arreglar el jarrón.", "A2"),
  F("ff-012", "officina", "taller (mecánico)", "oficina", "despacho, lugar de trabajo", "La oficina de la empresa se dice ufficio; l'officina es donde arreglan los coches. Mandar a alguien all'officina no es enviarlo a trabajar.", "L'auto è in officina per il tagliando.", "El coche está en el taller para la revisión.", "A2"),
  F("ff-013", "imbarazzato", "avergonzado, incómodo", "embarazada", "encinta", "Embarazada en italiano es incinta. Decir sono imbarazzata porque estás encinta provoca malentendidos clínicos.", "Ero molto imbarazzato alla festa.", "Estaba muy avergonzado en la fiesta.", "A2"),
  F("ff-014", "argomento", "tema, asunto", "argumento", "razonamiento", "Argomento es el tema del que se habla o escribe; el razonamiento también puede ser argomento, pero el significado básico es 'tema'.", "Il tema della lezione è un argomento difficile.", "El tema de la lección es un asunto difícil.", "B1"),
  F("ff-015", "caldo", "caliente; calor", "caldo", "sopa", "Caldo italiano es el calor o lo caliente; la sopa es brodo (caldo claro) o zuppa. Un caffè caldo no es una sopa de café.", "Vuoi il tè caldo o freddo?", "¿Quieres el té caliente o frío?", "A1"),
  F("ff-016", "ancora", "todavía; de nuevo; ancla", "ancora", "todavía", "Coincide en parte (todavía), pero ancora es también el ancla del barco y admite sentidos de 'otra vez'. Menos traicionero de lo que parece, pero conviene dominarlo.", "Sei ancora qui? Credevo fossi uscito.", "¿Todavía estás aquí? Creía que habías salido.", "A2"),
  F("ff-017", "presto", "pronto, temprano", "presto", "préstamo", "El préstamo es prestito (o mutuo); presto es el adverbio 'temprano'. A presto! = ¡hasta pronto!.", "Domani mi alzo presto.", "Mañana me levanto temprano.", "A1"),
  F("ff-018", "successo", "éxito", "suceso", "acontecimiento (a menudo grave)", "Il successo es el éxito; el suceso (accidente, noticia) en italiano es evento o fatto. Un concierto con grande successo no es un concierto con grandes sucesos.", "Il film ha avuto un enorme successo.", "La película tuvo un éxito enorme.", "A2"),
  F("ff-019", "discutere", "debatir, intercambiar ideas", "discutir", "pelear verbalmente", "Discutere es debatir con calma; pelearse verbalmente es litigare. En Italia se discute de política en la mesa sin pelearse (casi).", "Abbiamo discusso a lungo del progetto.", "Debatimos largo rato sobre el proyecto.", "B1"),
  F("ff-020", "eventualmente", "si acaso, en caso de necesidad", "eventualmente", "finalmente, con el tiempo", "Falso amigo adverbial: el italiano dice eventualmente donde el español dice 'si acaso' o 'en su caso'. Para 'finalmente': alla fine o infine.", "Eventualmente possiamo rimandare a domani.", "Si acaso, podemos aplazarlo para mañana.", "B1"),
  F("ff-021", "intendere", "entender; tener la intención", "entender", "comprender", "El italiano intendere cubre capire (entender) y aver l'intenzione (tener la intención de). '¿Qué quieres decir?' = Che cosa intendi dire?", "Cosa intendi dire con questo?", "¿Qué quieres decir con esto?", "B1"),
  F("ff-022", "assistere", "presenciar, acompañar", "asistir", "ayudar; asistir a (clase)", "Assistere en italiano es presenciar (assistere a un parto) o acompañar; ayudar es aiutare. Y 'asistir a clase' se dice seguire la lezione, no assistere.", "Ho assistito a un incontro interessante.", "Presencié un encuentro interesante.", "B2"),
  F("ff-023", "pretendere", "exigir, pretender (con derecho)", "pretender", "intentar, aspirar a", "El italiano pretendere es exigir algo como debido: pretendere un aumento. La aspiración española se dice aspirare a o voler ottenere.", "Il cliente pretende un rimborso totale.", "El cliente exige un reembolso total.", "B2"),
  F("ff-024", "occuparsi", "ocuparse de, encargarse", "ocuparse", "ocuparse de", "Casi gemelos: occuparsi di qualcosa = ocuparse de algo. La trampa está en el sustantivo: occupazione es trabajo/ocupación, pero también significa 'asiento ocupado' (posto occupato).", "Mi occuperò io delle prenotazioni.", "Yo me encargo de las reservas.", "B1"),

  /* ═══ Cuerpo, ropa y casa ═══ */
  F("ff-030", "braccio", "brazo", "bracero", "jornalero (y 'braccio' no existe)", "Braccio (plural braccia) es el brazo, también el brazo del sofá o de un río. Nada que ver con bracero, que en italiano es bracciante.", "Mi sono fatto male al braccio destro.", "Me hice daño en el brazo derecho.", "A1"),
  F("ff-031", "gamba", "pierna", "—", "—", "Gamba = pierna, también la pernera del pantalón (la gamba dei pantaloni). Parecido feliz con el español.", "Ha le gambe lunghe da ballerina.", "Tiene las piernas largas de bailarina.", "A1"),
  F("ff-032", "camicia", "camisa", "camiseta", "prenda de punto, sin cuello", "Camicia = camisa (de vestir); la camiseta es maglietta; la blusa femenina es camicetta. Tres prendas, tres palabras.", "Indosso una camicia bianca per la riunione.", "Llevo una camisa blanca para la reunión.", "A1"),
  F("ff-033", "magazzino", "almacén, depósito", "magacín", "revista (suplemento cultural)", "El magacín cultural se dice rivista; il magazzino es el almacén logístico. Amazon construyó un imperio de magazzini.", "L'ordine è già uscito dal magazzino.", "El pedido ya salió del almacén.", "A2"),
  F("ff-034", "armadio", "armario", "—", "—", "Coincidencia feliz: armadio = armario de casa. El vestidor es guardaroba, que también es el guardarropa del teatro.", "Nel cassetto dell'armadio trovi le calze.", "En el cajón del armario encuentras los calcetines.", "A1"),
  F("ff-035", "tavolo", "mesa", "tablero", "tabla de juego", "Tavolo = mesa; el tablero de ajedrez es la scacchiera. Y il tavolo caldo es el restaurante de comida rápida, no una mesa caliente.", "Il cameriere sparecchia il tavolo.", "El camarero retira la mesa.", "A1"),
  F("ff-036", "tovaglia", "mantel", "toalla", "toalla", "La toalla con la que te secas es l'asciugamano; la tovaglia es el mantel. Confundirlos deja la mesa empapada.", "Hai steso la tovaglia sul tavolo?", "¿Has extendido el mantel sobre la mesa?", "A2"),
  F("ff-037", "soffitta", "desván, buhardilla", "sofá", "sofá", "El sofá es il divano; la soffitta es el desván bajo el tejado. Il divano letto es el sofá cama.", "In soffitta conserviamo le vecchie foto.", "En el desván guardamos las fotos viejas.", "A2"),
  F("ff-038", "salotto", "salón (estancia)", "salón", "estancia; también 'salón' de eventos", "Il salotto es el salón de casa; por metonimia, il salotto buono es la élite social. En italiano también existe salone para el salón de peluquería o de exposiciones.", "Nel salotto c'è un divano nuovo.", "En el salón hay un sofá nuevo.", "A2"),
  F("ff-039", "muratura", "albañilería, obra", "muralla", "muralla defensiva", "La muralla de una ciudad son le mura (le mura di Lucca); la muratura es la albañilería: casa in muratura = casa de obra, no prefabricada.", "Una parete in muratura non si abbatte facilmente.", "Una pared de obra no se derriba fácilmente.", "B2"),
  F("ff-040", "finestra", "ventana", "—", "—", "Coincidencia feliz (del latín fenestra). También en sentido figurado: finestra di opportunità = ventana de oportunidad.", "Apri la finestra, che caldo!", "Abre la ventana, ¡qué calor!", "A1"),
  F("ff-041", "tenda", "cortina, tienda (de campaña)", "tienda", "comercio; tienda de campaña", "La tenda es la cortina de casa o la tienda de campaña; la tienda donde compras es negozio. Tenda da sole = toldo.", "Chiudi la tenda, entra troppa luce.", "Cierra la cortina, entra demasiada luz.", "A2"),

  /* ═══ Comida y bebida ═══ */
  F("ff-050", "prosciutto", "jamón", "—", "—", "La trampa es auditiva: prosciutto suena a 'presunto' pero es jamón. Crudo (estilo serrano) vs cotto (jamón dulce cocido).", "Un panino con prosciutto e mozzarella.", "Un bocadillo de jamón y mozzarella.", "A1"),
  F("ff-051", "presunto", "presunto (participio de presumere)", "presunto", "presunto, supuesto", "Casi gemelos legales: presunto colpevole = presunto culpable. Ojo a no confundir prosciutto (jamón) con este participio.", "Il presunto autore è stato arrestato.", "El presunto autor fue detenido.", "B1"),
  F("ff-052", "melanzana", "berenjena", "melón", "melón", "El melón es il melone; la melanzana es la berenjena (del árabe, vía el griego). Confusión de mercado.", "Le melanzane alla parmigiana sono buonissime.", "Las berenjenas a la parmesana están buenísimas.", "A2"),
  F("ff-053", "peperone", "pimiento", "pepperoni", "salchicha picante (en EE. UU.)", "Peperone = pimiento. La 'pepperoni pizza' americana lleva salame piccante, que en Italia no se llama así. Si pides pizza ai peperoni en Italia, llega con pimientos.", "Una pizza margherita con peperoni verdi.", "Una pizza margarita con pimientos verdes.", "A1"),
  F("ff-054", "brodo", "caldo, sopa clara", "—", "—", "Brodo es el caldo (de carne o verdura); la sopa con pan es la zuppa. El caldo de la abuela cura todo, en ambos idiomas.", "Un brodo caldo per l'influenza.", "Un caldo caliente para la gripe.", "A2"),
  F("ff-055", "confetto", "bombón de almendra (confeti de boda)", "confeti", "papelitos de colores", "I confetti italianos son los bombones de bautizo o boda; los papelitos de colores se llaman coriandoli y se tiran en carnaval.", "Ai matrimoni si regalano confetti bianchi.", "En las bodas se regalan confeti (bombones) blancos.", "A2"),
  F("ff-056", "limone", "limón", "lima", "lima (fruta)", "Il limone es el limón; la lima verde es también lima en italiano (y limetta es la lima de uñas). Doble control necesario.", "Un limoncello si fa con le bucce di limone.", "El limoncello se hace con las cáscaras de limón.", "A1"),
  F("ff-057", "pane", "pan", "panela", "pilón de azúcar integral", "Il pane es el pan. La panela (dulce) es azúcar de caña integral; el panettone milanés no lleva panela, por suerte.", "Due etti di pane, per favore.", "Doscientos gramos de pan, por favor.", "A1"),
  F("ff-058", "birra", "cerveza", "—", "—", "Coincidencia feliz (del germánico). Alla spina = de barril; chiara/rossa/scura como rubia/roja/negra en español.", "Una birra media alla spina.", "Una cerveza media de barril.", "A1"),
  F("ff-059", "succo", "zumo, jugo", "sugo", "salsa", "Viceversa del clásico: il succo es el zumo de fruta; il sugo (con g) es la salsa de la pasta. Una vocal traicionera.", "Un succo d'arancia fresco.", "Un zumo de naranja recién hecho.", "A1"),
  F("ff-060", "formaggio", "queso", "—", "—", "Coincidencia feliz (del latín caseus formaticus). La trampa está en el quesito de fin de cena: se pide grana o parmigiano, no un 'formajito'.", "Il formaggio di capra è più leggero.", "El queso de cabra es más ligero.", "A1"),

  /* ═══ Vida social y sentimientos ═══ */
  F("ff-070", "ladro", "ladrón", "ladrillo", "pieza de construcción", "Il ladro roba; il mattone construye. Semejanza solo gráfica: una vocal cambia el oficio.", "Il ladro è scappato col portafoglio.", "El ladrón se escapó con la cartera.", "A1"),
  F("ff-071", "rubare", "robar", "—", "—", "Rubare = robar. Coinciden; la trampa de la familia está en el sustantivo (ladro vs ladrón) y en el ladrillo (mattone).", "Mi hanno rubato la bici.", "Me robaron la bici.", "A2"),
  F("ff-072", "assaggio", "degustación, bocado de prueba", "ensayo", "prueba (teatral, musical)", "L'assaggio es el bocado de prueba (assaggiare il vino); el ensayo teatral es la prova. Di prova in prova se llega alla prima.", "Vuoi fare un assaggio della torta?", "¿Quieres probar un bocado de la tarta?", "A2"),
  F("ff-073", "chiamare", "llamar", "chillar", "gritar", "Chiamare = llamar; gridare o urlare = gritar/chillar. El chillido de sorpresa italiano no es un chiamare.", "Ti chiamo stasera dopo cena.", "Te llamo esta noche después de cenar.", "A1"),
  F("ff-074", "noia", "aburrimiento", "—", "—", "La noia es el aburrimiento (annoiarsi = aburrirse); el fastidio es molestia, otra cosa. Che noia! = ¡qué aburrimiento!", "Che noia questo film!", "¡Qué aburrimiento de película!", "A2"),
  F("ff-075", "annoiato", "aburrido", "anulado", "anulado", "Annoiato = aburrido; annullato = anulado. La doble N salva la cancelación.", "Sono annoiato, facciamo qualcosa?", "Estoy aburrido, ¿hacemos algo?", "A2"),
  F("ff-076", "arrabbiato", "enfadado, enojado", "arrebato", "arrebato, rapto pasional", "Arrabbiarsi = enfadarse; el arrebato pasional es impeto o raptus. Furia mediterránea en familia.", "La maestra si è arrabbiata con noi.", "La profesora se enfadó con nosotros.", "A2"),
  F("ff-077", "vergogna", "vergüenza", "—", "—", "Coincidencia perfecta; idiomático: che vergogna! = ¡qué vergüenza!, y non c'è di che vergognarsi = no tienes por qué avergonzarte.", "Che vergogna, ho dimenticato il suo nome!", "¡Qué vergüenza, olvidé su nombre!", "A2"),
  F("ff-078", "paura", "miedo", "—", "—", "Avere paura = tener miedo (¡con avere, no con essere!). Y fare paura = dar miedo: esos fantasmi fanno paura.", "I film dell'orrore mi fanno paura.", "Las películas de terror me dan miedo.", "A1"),
  F("ff-079", "geloso", "celoso", "—", "—", "Geloso = celoso (de persona); il gelato es el helado y gelare es helar. La raíz gel- (frío) hace el resto.", "È geloso del suo migliore amico.", "Está celoso de su mejor amigo.", "A2"),
  F("ff-080", "incazzato", "enfadado (vulgar)", "—", "—", "Registro coloquial fuerte: incazzarsi = cabrearse. Úsalo solo entre amigos; con el jefe, mejor arrabbiato.", "Si è incazzato per il ritardo del treno.", "Se cabreó por el retraso del tren.", "B2"),
  F("ff-081", "divertente", "divertido, gracioso", "—", "—", "Coincidencia feliz, con un matiz: en italiano divertente es 'que hace reír'; para una persona agradable de trato, el italiano usa simpatico.", "È un tipo davvero divertente.", "Es un tipo realmente divertido.", "A1"),
  F("ff-082", "simpatico", "agradable, amable", "simpático", "gracioso, divertido", "La gran trampa social: simpatico italiano = amable/agradable (una persona simpática); el gracioso que hace reír es divertente. Llamar simpatico a alguien en Italia es elogiar su carácter, no su humor.", "La vicina è molto simpatica con tutti.", "La vecina es muy amable con todos.", "A1"),

  /* ═══ Trabajo, dinero y estudios ═══ */
  F("ff-090", "stipendio", "sueldo", "estipendio", "retribución fija (poco usado)", "Stipendio es el sueldo mensual; la paga semanal es la paga. En el lenguaje común italiano se prefiere stipendio a salario.", "Il primo stipendio si festeggia sempre.", "El primer sueldo siempre se celebra.", "A2"),
  F("ff-091", "salario", "salario (técnico, económico)", "salario", "sueldo", "Cognado técnico: en economía se usa como en español, pero en el día a día italiano gana stipendio.", "Il salario minimo in Italia è un tema dibattuto.", "El salario mínimo en Italia es un tema debatido.", "B2"),
  F("ff-092", "società", "empresa; sociedad", "sociedad", "compañía; sociedad", "Doble sentido: la società commerciale es la empresa; la società humana es la sociedad. Y ojo: i colleghi son los compañeros de trabajo, i soci son los socios de negocio.", "Lavoro in una società di consulenza.", "Trabajo en una empresa de consultoría.", "B1"),
  F("ff-093", "azienda", "empresa", "hacienda", "finca; Hacienda (ministerio)", "L'azienda es la empresa; la hacienda (finca) es tenuta o podere; la Hacienda pública es l'Agenzia delle Entrate.", "La mia azienda ha sede a Milano.", "Mi empresa tiene sede en Milán.", "A2"),
  F("ff-094", "collegio", "colegio interno, residencia", "colegio", "escuela", "Il collegio (convitto) es la escuela con internado; la escuela normal es simplemente scuola. El college americano es università.", "Ha studiato in un collegio in Svizzera.", "Estudió en un colegio interno en Suiza.", "B1"),
  F("ff-095", "liceo", "bachillerato italiano (5 años, 14–19)", "liceo", "instituto de secundaria", "Il liceo italiano dura 5 años: classico, scientifico, linguistico… Corresponde al bachillerato, pero es más largo y termina con l'esame di maturità.", "Mia figlia frequenta il liceo scientifico.", "Mi hija va al bachillerato científico.", "A2"),
  F("ff-096", "laurea", "título de grado, graduación", "laurea", "mención honorífica", "La laurea es el título universitario (prendere la laurea = graduarse); la matrícula de honor es la lode: laurea con 110 e lode.", "Si è laureato in ingegneria con 110 e lode.", "Se graduó en ingeniería con matrícula de honor.", "B1"),
  F("ff-097", "esame", "examen", "—", "—", "Cognado. Idiomático: fare un esame = hacer un examen; dare un esame (a alguien) = examinarlo. L'esame di maturità es la selectividad italiana.", "Domani ho l'esame di storia.", "Mañana tengo el examen de historia.", "A1"),
  F("ff-098", "assunzione", "contratación", "asunción", "asunción (aceptación)", "L'assunzione es la contratación laboral (assumere = contratar); la Asunción religiosa es también Assunzione (¡Ferragosto!). Doble uso, litúrgico y laboral.", "L'assunzione avverrà a settembre.", "La contratación se hará en septiembre.", "B2"),
  F("ff-099", "licenziamento", "despido", "licenciamiento", "licencia militar", "Essere licenziato = ser despedido; il licenziamento es el despido. En algunos países hispanos 'licenciar' también es despedir, pero el sustantivo cambia de registro.", "Dopo il licenziamento ha aperto un negozio.", "Tras el despido abrió una tienda.", "B1"),
  F("ff-100", "tessera", "carné, tarjeta de socio", "—", "—", "La tessera sanitaria es la tarjeta sanitaria; el carné de conducir es la patente. La tessera del partito es el carné de partido.", "Mostra la tessera all'ingresso.", "Muestra el carné a la entrada.", "A2"),
  F("ff-101", "biglietto", "billete (transporte), entrada", "billete", "billete de tren; billete de dinero", "Il biglietto es el billete de tren o la entrada de cine; el billete de dinero es la banconota. Y il biglietto da visita es la tarjeta de visita.", "Due biglietti per il concerto, per favore.", "Dos entradas para el concierto, por favor.", "A1"),
  F("ff-102", "banconota", "billete (de dinero)", "—", "—", "La banconota es el billete de banco; el biglietto es de transporte o espectáculo. Clásico error de cajero automático.", "Mi dia due banconote da venti.", "Deme dos billetes de veinte.", "A2"),
  F("ff-103", "moneta", "moneda", "—", "—", "Cognado (del latín moneta). La moneta spicciola es la calderilla o el suelto.", "Non ho monete per il parchimetro.", "No tengo monedas para el parquímetro.", "A1"),

  /* ═══ Naturaleza, tiempo y lugares ═══ */
  F("ff-110", "nuvola", "nube", "—", "—", "Cognado (del latín nebula). Idiomático: essere tra le nuvole = estar en las nubes (despistado).", "Il cielo è pieno di nuvole grigie.", "El cielo está lleno de nubes grises.", "A1"),
  F("ff-111", "tempesta", "tempestad, tormenta", "—", "—", "Cognado (del latín tempestas). En mar abierto, la tempesta es peligrosa en ambos idiomas.", "La tempesta ha danneggiato gli yacht.", "La tempestad dañó los yates.", "B1"),
  F("ff-112", "umido", "húmedo", "—", "—", "Umido = húmedo (clima umido). Atención: annoiare es aburrir, ma humedecer es inumidire: raíces distintas.", "Il clima è umido in autunno.", "El clima es húmedo en otoño.", "A2"),
  F("ff-113", "asciutto", "seco", "—", "—", "Asciutto = seco (contrario de umido). El vino seco es el vino asciutto o secco; asciugamano = toalla (seca + mano).", "Preferisco lo spumante asciutto.", "Prefiero el espumoso seco.", "A2"),
  F("ff-114", "paese", "pueblo, aldea; país", "país", "nación", "La gran trampa toponímica: il paese suele ser el pueblo (paese di montagna); la nación se dice también paese o, mejor, Stato. El contexto lo decide: il mio paese puede ser mi pueblo o mi país.", "Torno al paese dei miei nonni ogni estate.", "Vuelvo al pueblo de mis abuelos cada verano.", "A2"),
  F("ff-115", "piazza", "plaza", "—", "—", "Cognado perfecto (del latín platea). Piazza Duomo, piazza del mercato: el centro social italiano.", "Ci vediamo in piazza alle sei.", "Nos vemos en la plaza a las seis.", "A1"),
  F("ff-116", "chiesa", "iglesia", "—", "—", "Cognado (del latín ecclesia). Andare a messa = ir a misa; il campanile es el campanario y il campanilismo, la rivalidad de campanario.", "Il matrimonio sarà in chiesa.", "La boda será en la iglesia.", "A1"),
  F("ff-117", "ospedale", "hospital", "—", "—", "Cognado del latín hospitale. Con la preposición in: andare in ospedale (¡no all'ospedale!).", "L'hanno portato in ospedale d'urgenza.", "Lo llevaron al hospital de urgencia.", "A1"),
  F("ff-118", "stagione", "estación (del año); temporada", "estación", "estación del año; de tren", "La stagione es la estación del año o la temporada teatral; la estación de tren es la stazione. Stagione alta/bassa = temporada alta/baja.", "L'autunno è la mia stagione preferita.", "El otoño es mi estación preferida.", "A1"),
  F("ff-119", "stazione", "estación (de tren, de servicio)", "—", "—", "La stazione es la estación de transporte (o di servizio, de gasolina); la estación del año es la stagione. Intercambio ferroviario clásico.", "Scendo alla stazione centrale.", "Bajo en la estación central.", "A1"),
  F("ff-120", "albergo", "hotel", "albergue", "refugio, hostal", "L'albergo es el hotel (de cualquier nivel); el albergue juvenil es l'ostello y el refugio de montaña, il rifugio.", "Abbiamo prenotato un albergo a due passi dal Duomo.", "Reservamos un hotel a dos pasos del Duomo.", "A2"),
  F("ff-121", "camera", "habitación", "cámara", "cámara (foto, diputados)", "La camera es la habitación (camera da letto = dormitorio); la cámara fotográfica es la macchina fotografica y la de los diputados, la Camera (con mayúscula).", "La camera con vista sul mare costa di più.", "La habitación con vistas al mar cuesta más.", "A1"),
  F("ff-122", "bagaglio", "equipaje", "bagaje", "equipaje; bagaje cultural", "Casi gemelos: bagaglio es el equipaje (físico); el bagaje cultural se dice también bagaglio culturale. A veces coinciden de verdad.", "Il mio bagaglio è andato perso.", "Mi equipaje se perdió.", "A2"),
];

/* ── Utilidades ── */

export function falseFriendsByLevel(level: CefrLevel): FalseFriend[] {
  return FALSE_FRIENDS.filter((f) => f.level === level);
}

/* Genera una pregunta de quiz: “¿Qué significa X en italiano?” con
   distractores que son significados reales de otras palabras, para
   que el usuario también aprenda de los errores. */
export function buildFfQuestion(target: FalseFriend, pool: FalseFriend[]): {
  prompt: string; options: string[]; answer: number; explain: string;
} {
  const others = pool.filter((f) => f.id !== target.id);
  const opts: string[] = [target.itMeaning];
  while (opts.length < 4 && others.length > 0) {
    const j = Math.floor(Math.random() * others.length);
    const d = others.splice(j, 1)[0];
    if (!opts.includes(d.itMeaning)) opts.push(d.itMeaning);
  }
  // barajar (Fisher–Yates)
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return {
    prompt: `En italiano, “${target.it}” significa…`,
    options: opts,
    answer: opts.indexOf(target.itMeaning),
    explain: `“${target.it}” = ${target.itMeaning}. Ojo: no significa “${target.es}” (${target.esMeaning}). ${target.trap}`,
  };
}
