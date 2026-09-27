import type { Unit } from "../types";

/* ── Cursos EXTRA · paquete v6.0 · +4 unidades / +12 lecciones ───────
   Unidades temáticas de alto valor práctico:
   · u-a2-7  Al ristorante       (sobrevivir y brillar en la mesa)
   · u-b1-7  Il mondo del lavoro (buscar trabajo y trabajar en italiano)
   · u-b2-6  Italia a tavola     (gastronomía como cultura)
   · u-c1-5  Attualità e media   (leer prensa y opinar) */

export const EXTRA_UNITS_3: Record<string, Unit[]> = {
  /* ══════════ A2 · +1 unidad ══════════ */
  A2: [
    { id: "u-a2-7", level: "A2", title: "En el restaurante", titleIt: "Al ristorante", lessons: [
      { id: "les-a2-19", level: "A2", title: "Leer la carta", titleIt: "Leggere il menù",
        objectives: ["Entender la estructura del menú italiano", "Pedir con vorrei (condizionale de cortesía)", "Distinguir antipasto, primo, secondo y dolce"],
        explanation: [
          "El menú italiano es un guion de cuatro actos: l'antipasto (entrante), il primo (pasta, arroz o sopa), il secondo (carne o pescado, con contorno aparte) e il dolce (postre). Nadie está obligado a pedirlo todo: los propios italianos suelen saltarse el antipasto o compartir un primo. La clave cultural es que la pasta NO es un acompañamiento: es un plato principal.",
          "Para pedir, el condizionale de volere es el billete dorado: vorrei le tagliatelle (quisiera las tagliatelle). Suena educado en cualquier registro. Se acompaña de per favore y se cierra con grazie. Y si el camarero pregunta «Desidera un antipasto?», un «No, grazie, vado diretto al primo» es perfecto y natural.",
        ],
        examples: [
          { it: "Vorrei un antipasto di prosciutto e melone.", es: "Quisiera un entrante de jamón y melón." },
          { it: "Come primo prendo una carbonara.", es: "De primero tomo una carbonara." },
          { it: "Da bere, acqua frizzante, per favore.", es: "Para beber, agua con gas, por favor." },
        ],
        vocabIds: ["w-ristorante", "w-menu", "w-antipasto", "w2-primopiatto", "w2-secondopiatto", "w-dolce"],
        exerciseIds: ["ex-rst-001", "ex-rst-002"], conversationPrompt: { it: "Cosa prende come primo?", es: "¿Qué toma de primer plato?" },
        checkpointIds: ["ex-rst-002"] },
      { id: "les-a2-20", level: "A2", title: "La cuenta y los extras", titleIt: "Il conto e gli extra",
        objectives: ["Pedir la cuenta correctamente", "Entender el pane e coperto y el servizio", "Manejar propinas y métodos de pago"],
        explanation: [
          "La cuenta se pide con una fórmula fijísima: «Il conto, per favore». En la cuenta italiana encontrarás dos personajes misteriosos: il pane e coperto (1–3 € por persona por el pan y el cubierto) y a veces il servizio (servicio, a menudo ya incluido — servizio incluso). No son estafas: son costumbres legales que conviene reconocer para no sorprenderse.",
          "La propina en Italia es opcional y discreta: se dejan unas monedas (lasciare la mancia) o se redondea. Para pagar, contanti (efectivo) sigue siendo rey en las trattorias, aunque la carta (tarjeta) se acepta casi en todas partes. Y una regla de oro: el scontrino (recibo fiscal) es sagrado; el camarero te lo trae con la cuenta.",
        ],
        examples: [
          { it: "Il conto, per favore! Sì, tutto insieme.", es: "¡La cuenta, por favor! Sí, todo junto." },
          { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" },
          { it: "Il servizio è incluso?", es: "¿El servicio está incluido?" },
        ],
        vocabIds: ["w-conto", "w-cameriere", "k-x20-servito-al-tavolo", "k-a2-ordinare", "d1-birra", "w-vino"],
        exerciseIds: ["ex-rst-003", "ex-rst-004"], conversationPrompt: { it: "Il conto, per favore: separate o insieme?", es: "La cuenta, por favor: ¿separada o juntos?" },
        checkpointIds: ["ex-rst-003"] },
      { id: "les-a2-21", level: "A2", title: "Reservar y elogiar", titleIt: "Prenotare e fare i complimenti",
        objectives: ["Reservar una mesa por teléfono", "Elogiar la comida con naturalidad", "Usar superlativos sencillos"],
        explanation: [
          "Para reservar: «Vorrei prenotare un tavolo per due, stasera alle otto» (quisiera reservar una mesa para dos, esta noche a las ocho). Se confirma el nombre y el número de personas: «A nome di? — Rossi, in due». Si llegas tarde, un mensaje honesto salva la mesa: «Siamo in ritardo di dieci minuti, scusate».",
          "Elogiar en italiano es un arte que abre puertas: «Buonissimo!», «Complimenti allo chef!», «Questa carbonara è la migliore della città». El superlativo relativo (il migliore / la migliore di…) es la herramienta estrella. Y al despedirte, el «Complimenti, tutto ottimo» del final a menudo te gana un amaro (digestivo) de la casa.",
        ],
        examples: [
          { it: "Vorrei prenotare un tavolo per due, sabato sera.", es: "Quisiera reservar una mesa para dos, el sábado por la noche." },
          { it: "Complimenti allo chef, era tutto buonissimo!", es: "¡Felicitaciones al chef, estaba todo buenísimo!" },
          { it: "Questa è la migliore tiramisù della città.", es: "Este es el mejor tiramisú de la ciudad." },
        ],
        vocabIds: ["w-prenotare", "k-a2b-tipico", "k-a1-piatto", "d1-gelato", "w-pane", "w-acqua"],
        exerciseIds: ["ex-rst-005", "ex-rst-006"], conversationPrompt: { it: "Com'era la cena? Racconta!", es: "¿Cómo estuvo la cena? ¡Cuenta!" },
        checkpointIds: ["ex-rst-005"] },
    ]},
  ],

  /* ══════════ B1 · +1 unidad ══════════ */
  B1: [
    { id: "u-b1-7", level: "B1", title: "El mundo del trabajo", titleIt: "Il mondo del lavoro", lessons: [
      { id: "les-b1-16", level: "B1", title: "El entorno laboral", titleIt: "L'ambiente di lavoro",
        objectives: ["Describir tu puesto y tu empresa", "Hablar de reuniones y tareas", "Usar el léxico de la oficina"],
        explanation: [
          "El léxico laboral italiano es familiar con trampas: l'azienda es la empresa (no el negocio pequeño), l'ufficio la oficina, il datore di lavoro el empleador y il collega el compañero de trabajo. La riunione es la reunión, y los italianos la veneran: «facciamo una riunione veloce» suele durar una hora.",
          "Para describir tu trabajo hay tres estructuras: «Lavoro come graphic designer» (trabajo como), «Lavoro per un'azienda di Milano» (para una empresa de) y «Mi occupo di comunicazione» (me encargo de). Con estas tres frases + el sector, ya presentas tu perfil profesional completo.",
        ],
        examples: [
          { it: "Lavoro per un'azienda multinazionale, mi occupo delle risorse umane.", es: "Trabajo para una multinacional, me encargo de recursos humanos." },
          { it: "Domani mattina abbiamo una riunione con il direttore.", es: "Mañana temprano tenemos una reunión con el director." },
          { it: "Il mio datore di lavoro è molto esigente, ma corretto.", es: "Mi empleador es muy exigente, pero justo." },
        ],
        vocabIds: ["w-lavoro", "w-riunione", "w-collega", "d2-ufficio", "d2-azienda", "k-x9-riunione-online"],
        exerciseIds: ["ex-lav-001", "ex-lav-002"], conversationPrompt: { it: "Di cosa ti occupi esattamente?", es: "¿De qué te encargas exactamente?" },
        checkpointIds: ["ex-lav-002"] },
      { id: "les-b1-17", level: "B1", title: "La búsqueda de empleo", titleIt: "La ricerca del lavoro",
        objectives: ["Contar una experiencia de entrevista", "Nombrar contratos y salario", "Presentar puntos fuertes y débiles"],
        explanation: [
          "El proceso tiene su propio ritual: inviare il curriculum (enviar el CV), fare un colloquio (tener una entrevista) y firmare il contratto (firmar el contrato). Los contratos clave: a tempo determinato (plazo fijo) e a tempo indeterminato (indefinido). Lo stipendio es el sueldo, y los straordinari son las horas extra.",
          "En la entrevista, la pareja inseparable son i punti di forza e i punti deboli (fortalezas y debilidades). La estrategia italiana elegante: convertir la debilidad en exceso de virtud — «Sono troppo esigente con me stesso» — y siempre cerrar con una pregunta sobre la empresa: demuestra interés genuino.",
        ],
        examples: [
          { it: "Ho un colloquio di lavoro giovedì prossimo.", es: "Tengo una entrevista de trabajo el próximo jueves." },
          { it: "Preferirei un contratto a tempo indeterminato, ovviamente.", es: "Preferiría un contrato indefinido, obviamente." },
          { it: "Il mio punto di forza è la precisione; il mio punto debole, l'impazienza.", es: "Mi punto fuerte es la precisión; mi punto débil, la impaciencia." },
        ],
        vocabIds: ["w-colloquio", "w-contratto", "k-b1-contratto-a-tempo-determinato", "w-stipendio", "d1-domanda", "d2-datore-lavoro"],
        exerciseIds: ["ex-lav-003", "ex-lav-004"], conversationPrompt: { it: "Quali sono i tuoi punti di forza?", es: "¿Cuáles son tus puntos fuertes?" },
        checkpointIds: ["ex-lav-003"] },
      { id: "les-b1-18", level: "B1", title: "Emails y llamadas formales", titleIt: "Email e telefonate formali",
        objectives: ["Escribir un email profesional con las fórmulas fijas", "Usar el Lei en llamadas de trabajo", "Pedir y confirmar con cortesía"],
        explanation: [
          "El email formal italiano es un ceremonial con reglas fijas: se abre con «Gentile Dottore / Gentile Sig.ra Rossi» (o «Egregio» para el nivel máximo), se usa el Lei en todo el cuerpo («Le invio in allegato…», «La ringrazio per…») y se cierra con «Cordiali saluti» o «Distinti saluti». «Un abbraccio» queda para la familia: en el trabajo es un suicidio profesional.",
          "Por teléfono, la apertura clásica de oficina es «Pronto, chi parla?» o «Studio Rossi, buongiorno». Para pedir algo con cortesía: «Le chiederei un'informazione» (condicional de petición) y para confirmar: «Le confermo l'appuntamento di domani». El condicional es el lubricante de toda comunicación formal italiana.",
        ],
        examples: [
          { it: "Gentile Sig.ra Bianchi, Le invio in allegato il preventivo richiesto.", es: "Estimada Sra. Bianchi, le envío adjunto el presupuesto solicitado." },
          { it: "La ringrazio per la disponibilità e Le porgo cordiali saluti.", es: "Le agradezco la disponibilidad y le saludo cordialmente." },
          { it: "Le confermo la riunione di martedì alle dieci.", es: "Le confirmo la reunión del martes a las diez." },
        ],
        vocabIds: ["w-computer", "k-a2-capo", "w-riunione", "w-contratto", "w-collega", "w-lavoro"],
        exerciseIds: ["ex-lav-005", "ex-lav-006"], conversationPrompt: { it: "Come si scrive un'email formale in italiano?", es: "¿Cómo se escribe un email formal en italiano?" },
        checkpointIds: ["ex-lav-005"] },
    ]},
  ],

  /* ══════════ B2 · +1 unidad ══════════ */
  B2: [
    { id: "u-b2-6", level: "B2", title: "Italia en la mesa", titleIt: "Italia a tavola", lessons: [
      { id: "les-b2-13", level: "B2", title: "La cocina regional", titleIt: "La cucina regionale",
        objectives: ["Situar los platos emblemáticos en su región", "Explicar el concepto de cucina povera", "Usar el genitivo con di + artículo"],
        explanation: [
          "La cocina italiana no existe: existen las cocinas italianas. La Toscana es república del pane sciocco (pan sin sal) y della bistecca; la Emilia-Romaña produce tortellini, parmigiano e aceto balsamico; Liguria inventó il pesto; Napoli reclamó la pizza; y el Piamonte reina con il tartufo e la finanziera. Preguntar «qual è il piatto tipico di qui?» es la mejor conversación de viaje posible.",
          "El alma de todo esto es la cucina povera: la cocina de la necesidad que transformó legumbres, pan duro y sobras en patrimonio — la ribollita toscana, la pasta e fagioli, la panzanella. Nota la gramática del orgullo: «un piatto DELLA tradizione», «il tartufo DEL Piemonte»: di + artículo (della, del) expresa pertenencia y aparece en cada conversación gastronómica.",
        ],
        examples: [
          { it: "La ribollita è un piatto tipico della tradizione contadina toscana.", es: "La ribollita es un plato típico de la tradición campesina toscana." },
          { it: "Il pesto l'ha inventato la Liguria, non un laboratorio.", es: "El pesto lo inventó Liguria, no un laboratorio." },
          { it: "La cucina povera nasce dalla necessità e diventa arte.", es: "La cocina pobre nace de la necesidad y se convierte en arte." },
        ],
        vocabIds: ["k-x20-cucina-povera", "k-x20-ricetta-della-nonna", "k-b2-tradizione", "k-x20-sapore", "w-cucina", "w2-cucinare"],
        exerciseIds: ["ex-gas-001", "ex-gas-003"], conversationPrompt: { it: "Qual è il piatto tipico della tua regione?", es: "¿Cuál es el plato típico de tu región?" },
        checkpointIds: ["ex-gas-001"] },
      { id: "les-b2-14", level: "B2", title: "El rito del café", titleIt: "Il rito del caffè",
        objectives: ["Dominar el vocabulario del bar italiano", "Entender al banco vs al tavolo", "Contar la cultura del espresso"],
        explanation: [
          "El bar italiano es un templo con reglas no escritas: el caffè se toma al banco (de pie, dos minutos, un euro y poco más), mientras que sentirse al tavolo multiplica el precio por el servito. El pedido es un código: «un caffè» = un espresso; si quieres café con leche después de las 11, pide un caffè macchiato («manchado»); y el cappuccino solo se toma en el desayuno — pedirlo después de almorzar es la marca del turista.",
          "El idioma del bar es música minimalista: «Un caffè e una brioche, per favore», «Quanto fa?», «Tutto qui». Y luego está la nobleza napolitana del caffè sospeso: el café pagado y dejado «pendiente» para que un desconocido sin recursos lo tome gratis. Un país que convirtió una tazzina de 40 ml en un sistema social.",
        ],
        examples: [
          { it: "Un caffè al banco e una brioche, per favore.", es: "Un café en el mostrador y un croissant, por favor." },
          { it: "Al tavolo il caffè costa il doppio: è il servito.", es: "En la mesa el café cuesta el doble: es el servicio." },
          { it: "A Napoli esiste ancora il caffè sospeso: uno per te, uno per chi non può.", es: "En Nápoles existe todavía el café pendiente: uno para ti, uno para quien no puede." },
        ],
        vocabIds: ["k-x20-servito-al-tavolo", "k-x20-birra-alla-spina", "k-x20-birra-artigianale", "w-caffe", "d1-gelato", "w-acqua"],
        exerciseIds: ["ex-gas-002", "ex-gas-006"], conversationPrompt: { it: "Come prendi il caffè? Al banco o al tavolo?", es: "¿Cómo tomas el café? ¿En el mostrador o en la mesa?" },
        checkpointIds: ["ex-gas-002"] },
      { id: "les-b2-15", level: "B2", title: "La etiqueta en la mesa", titleIt: "Il galateo a tavola",
        objectives: ["Conocer las normas del galateo", "Usar la voz media si + verbo", "Manejar invitaciones y cumplidos"],
        explanation: [
          "El galateo (manual de buenas maneras) rige la mesa italiana: la pasta se enrolla SOLO con el tenedor (nunca cuchillo, jamás cuchara de apoyo — ese es un mito turista); el pan se rompe con las manos y se come a trozos; y el parmesano no se pide sobre la pasta di pesce: es casi un sacrilegio regional.",
          "Gramática de la elegancia: la construcción media si + tercera persona — «qui si mangia bene», «come si fa?», «l'Italia si conosce a tavola». Es la voz del lugar que habla de sí mismo, perfecta para máximas gastronómicas. Y para invitaciones: «Ti va di cenare insieme?» (¿te apetece cenar juntos?) abre cualquier amistad italiana.",
        ],
        examples: [
          { it: "La pasta si arrotola solo con la forchetta: niente cucchiaio.", es: "La pasta se enrolla solo con el tenedor: nada de cuchara." },
          { it: "In Italia si conosce la gente mangiando.", es: "En Italia se conoce a la gente comiendo." },
          { it: "Ti va di cenare insieme sabato? Offro io!", es: "¿Te apetece cenar juntos el sábado? ¡Invito yo!" },
        ],
        vocabIds: ["k-x20-pizza-al-taglio", "w-pane", "w-formaggio", "w-vino", "w-pesce", "w-carne"],
        exerciseIds: ["ex-gas-004", "ex-gas-005"], conversationPrompt: { it: "Quali regole del galateo conosci?", es: "¿Qué reglas de etiqueta conoces?" },
        checkpointIds: ["ex-gas-005"] },
    ]},
  ],

  /* ══════════ C1 · +1 unidad ══════════ */
  C1: [
    { id: "u-c1-5", level: "C1", title: "Actualidad y medios", titleIt: "Attualità e media", lessons: [
      { id: "les-c1-11", level: "C1", title: "Leer la prensa", titleIt: "Leggere la stampa",
        objectives: ["Navegar las secciones de un diario italiano", "Descifrar la sintaxis de los titulares", "Reconocer la línea editorial"],
        explanation: [
          "Un diario italiano se divide en secciones fijas: la cronaca (sucesos, negro y judicial — el corazón popular de la prensa), la politica, l'economia, lo sport (sagrado, con páginas enteras de calcio), la cultura y le esteri (exterior). Los grandes diarios: Corriere della Sera y la Repubblica; y para el placer lento, la lettura del sabato con sus reportajes largos.",
          "El titular italiano es un género comprimido: se corta el verbo ser, se usa el presente histórico y abundan los dos puntos causales — «Roma: nuova area pedonale nel centro». La testata es el nombre del diario, l'orientamento su línea política. Reconocer ambos es alfabetización mediática: no todo lo impreso pesa igual ni apunta al mismo lector.",
        ],
        examples: [
          { it: "Il titolo recita: «Milano: ecco il piano per le periferie».", es: "El titular dice: «Milán: este es el plan para las periferias»." },
          { it: "La cronaca nera domina le prime pagine dei tabloid.", es: "La crónica de sucesos domina las primeras páginas de la prensa popular." },
          { it: "Ogni testata ha il suo orientamento: leggilo con occhio critico.", es: "Cada diario tiene su línea: léela con ojo crítico." },
        ],
        vocabIds: ["w-giornale", "d3-articolo-giornale", "d5-cronaca", "d3-titolo", "w-notizia", "w-giornalista"],
        exerciseIds: ["ex-med-001", "ex-med-002"], conversationPrompt: { it: "Che giornali leggi? Carta o digitale?", es: "¿Qué periódicos lees? ¿Papel o digital?" },
        checkpointIds: ["ex-med-001"] },
      { id: "les-c1-12", level: "C1", title: "El telediario", titleIt: "Il telegiornale",
        objectives: ["Entender la estructura del TG", "Distinguir servizio, intervista e collegamento", "Seguir el lenguaje de la televisión"],
        explanation: [
          "El telegiornale (TG) tiene su liturgia: apertura con i titoli, luego i servizi (reportajes grabados con corresponsal), le interviste in studio y los collegamenti in diretta (conexiones en vivo) con enviados especiales. El presentador lee; los inviati reportan desde el terreno. Reconocer estas piezas te permite escuchar estratégicamente: los titulos al inicio, el primer servicio como plato fuerte.",
          "El léxico del TG es un dialecto propio: «secondo quanto appreso», «le indagini sono in corso», «la Procura indaga». Fórmulas fijas que conviene desactivar críticamente: el condicional de fuente («il ministro avrebbe detto») marca información no confirmada — la gramática misma te enseña a dudar.",
        ],
        examples: [
          { it: "Nel servizio di apertura: l'isola pedonale e i commercianti in protesta.", es: "En el reportaje de apertura: la zona peatonal y los comerciantes en protesta." },
          { it: "Ora il collegamento in diretta con il nostro inviato a Palermo.", es: "Ahora la conexión en vivo con nuestro enviado a Palermo." },
          { it: "Secondo quanto appreso, l'accordo sarebbe vicino.", es: "Según lo que se ha sabido, el acuerdo estaría cerca." },
        ],
        vocabIds: ["d3-telegiornale", "k-b1b-servizio", "w-notizia", "d3-titolo", "w-giornalista", "k-b2-domanda-e-offerta"],
        exerciseIds: ["ex-med-003", "ex-med-005"], conversationPrompt: { it: "Guardi il telegiornale? Di cosa si parla oggi?", es: "¿Ves el telediario? ¿De qué se habla hoy?" },
        checkpointIds: ["ex-med-003"] },
      { id: "les-c1-13", level: "C1", title: "Opinar de actualidad", titleIt: "Commentare l'attualità",
        objectives: ["Estructurar una opinión con conectores", "Usar subjuntivo tras las concesivas", "Debatir con elegancia"],
        explanation: [
          "La opinión italiana de nivel C1 se sostiene en conectores: «a mio parere», «secondo me», «senz'altro, però…», «da un lato… dall'altro», «in fondo», «in ultima analisi». La concesión elegante es la marca del hablante maduro: «per quanto ne so», «nonostante il dibattito», «anche se i dati dicono altro». Nota: dopo nonostante, indicativo y congiuntivo son ambos correctos — el subjuntivo suena más escrito, más fino.",
          "El congiuntivo es el termómetro del nivel: «penso che sia giusto», «mi sembra che il governo abbia fatto bene», «benché la misura sia tardiva». En el debate televisivo italiano — el género nacional — se agradece quien concede algo antes de atacar: «Non hai torto, però…». La elegantissima artimaña de quien domina la lengua y la conversación.",
        ],
        examples: [
          { it: "A mio parere, la misura è tardiva ma va nella direzione giusta.", es: "En mi opinión, la medida es tardía pero va en la dirección correcta." },
          { it: "Nonostante il dibattito, la legge è passata con ampio margine.", es: "A pesar del debate, la ley pasó con amplio margen." },
          { it: "Mi sembra che i giornali abbiano esagerato la notizia.", es: "Me parece que los periódicos han exagerado la noticia." },
        ],
        vocabIds: ["k-c1-a-titolo-di", "d5-cronaca", "w-notizia", "w-giornale", "d3-articolo-giornale", "d3-telegiornale"],
        exerciseIds: ["ex-med-004", "ex-med-006"], conversationPrompt: { it: "Commenta una notizia di oggi: sei d'accordo o no?", es: "Comenta una noticia de hoy: ¿estás de acuerdo o no?" },
        checkpointIds: ["ex-med-006"] },
    ]},
  ],
};
