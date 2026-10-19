import type { CefrLevel } from "./types";

/* ═══ v9.16 · Quadro Comune Europeo di Riferimento (QCER/MCER) ══════
   El estándar internacional de referencia para lenguas (Consejo de
   Europa, 2001 · Companion Volume 2020). Este módulo centraliza:
   escala global oficial, griglia de autovalutazione (5 abilità × 6
   niveles), certificaciones italianas alineadas y correspondencia
   indicativa con ACTFL/ILR (estándares americanos).
   Los descriptores son versiones condensadas de los oficiales.     */

export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/* ── Scala globale ufficiale (Tabla 1 QCER, versión condensada) ────── */
export interface CefrScaleEntry {
  label: string;              // "A1 · Livello base"
  it: string;                 // descriptor oficial condensado (IT)
  es: string;                 // mismo descriptor (ES)
  hoursGuided: [number, number]; // horas de aprendizaje guiado (estimación internacional de referencia)
  userLabel: string;          // nombre corto en la app
}

export const CEFR_GLOBAL_SCALE: Record<CefrLevel, CefrScaleEntry> = {
  A1: {
    label: "A1 · Livello base (Breakthrough)",
    userLabel: "Sopravvivere in italiano",
    it: "Riconosce espressioni familiari e quotidiane e frasi molto semplici su di sé, la famiglia e l'ambiente concreto. Sa comunicare in modo semplice se l'interlocutore parla lentamente e chiaramente ed è disposto ad aiutare.",
    es: "Comprende y utiliza expresiones cotidianas y frases muy sencillas sobre sí mismo, su familia y su entorno concreto. Puede comunicarse de forma sencilla si el interlocutor habla despacio, con claridad y está dispuesto a ayudar.",
    hoursGuided: [90, 100],
  },
  A2: {
    label: "A2 · Livello elementare (Waystage)",
    userLabel: "La vita quotidiana",
    it: "Comprende frasi ed espressioni usate di frequente relative ad ambiti di immediata rilevanza: informazioni personali e familiari, shopping, lavoro locale. Sa scambiare informazioni semplici e dirette su argomenti familiari e routine.",
    es: "Comprende frases y expresiones de uso frecuente relacionadas con ámbitos de relevancia inmediata: información personal y familiar, compras, trabajo de su entorno. Puede intercambiar información sencilla y directa sobre temas cotidianos y rutinarios.",
    hoursGuided: [180, 200],
  },
  B1: {
    label: "B1 · Livello intermedio (Threshold)",
    userLabel: "Indipendenza comunicativa",
    it: "Comprende i punti essenziali di messaggi chiari in lingua standard su argomenti familiari come lavoro, scuola e tempo libero. Sa affrontare la maggior parte delle situazioni di viaggio, produrre testi semplici e coerenti e descrivere esperienze, eventi e opinioni dando ragioni delle proprie scelte.",
    es: "Comprende los puntos esenciales de mensajes claros en lengua estándar sobre asuntos familiares como trabajo, estudios y ocio. Sabe desenvolverse en la mayoría de situaciones de viaje, producir textos sencillos y coherentes y describir experiencias, acontecimientos y opiniones justificando sus elecciones.",
    hoursGuided: [350, 400],
  },
  B2: {
    label: "B2 · Livello intermedio superiore (Vantage)",
    userLabel: "Comunicazione avanzata",
    it: "Comprende le idee principali di testi complessi su argomenti concreti e astratti, incluse le discussioni tecniche del proprio campo. Interagisce con naturalezza e disinvoltura con i madrelingua e produce testi chiari e argomentativi su un'ampia gamma di temi.",
    es: "Comprende las ideas principales de textos complejos sobre temas concretos y abstractos, incluidas las discusiones técnicas de su especialidad. Interactúa con naturalidad y soltura con hablantes nativos y produce textos claros y argumentativos sobre una amplia gama de temas.",
    hoursGuided: [500, 600],
  },
  C1: {
    label: "C1 · Livello avanzato (Effective Operational Proficiency)",
    userLabel: "Dominio accademico e professionale",
    it: "Comprende un'ampia gamma di testi complessi e lunghi e ne riconosce il significato implicito. Si esprime in modo scorrevole e spontaneo, usando la lingua in modo flessibile ed efficace per scopi sociali, accademici e professionali.",
    es: "Comprende una amplia variedad de textos complejos y extensos y reconoce su significado implícito. Se expresa con fluidez y espontaneidad, usando la lengua con flexibilidad y eficacia para fines sociales, académicos y profesionales.",
    hoursGuided: [700, 800],
  },
  C2: {
    label: "C2 · Livello di padronanza (Mastery)",
    userLabel: "Padroneggiare la lingua",
    it: "Comprende senza sforzo praticamente tutto ciò che legge e ascolta. Sa riassumere e ricostruire argomenti e argomentazioni da fonti diverse, presentandoli in modo coerente. Si esprime con spontaneità, precisione e fluidità, distinguendo con finezza i registri.",
    es: "Comprende sin esfuerzo prácticamente todo lo que lee y escucha. Sabe resumir y reconstruir temas a partir de fuentes diversas, presentándolos de forma coherente. Se expresa con espontaneidad, precisión y fluidez, distinguiendo con finura los registros.",
    hoursGuided: [1000, 1200],
  },
};

/* ── Griglia di autovalutazione ufficiale (5 abilità × 6 livelli) ────
   Versión condensada de la griglia del Passaporto delle Lingue
   (European Language Portfolio). El estudiante marca el nivel que
   cree tener en cada destreza.                                  */
export interface CefrGridRow {
  key: "ascolto" | "lettura" | "interazione" | "produzione-orale" | "scrittura";
  skillIt: string;
  skillEs: string;
  cells: Record<CefrLevel, { it: string; es: string }>;
}

export const CEFR_GRID: CefrGridRow[] = [
  {
    key: "ascolto", skillIt: "Comprensione orale · Ascolto", skillEs: "Comprensión oral · Escucha",
    cells: {
      A1: { it: "Posso riconoscere parole familiari ed espressioni molto semplici su di me e sulla mia famiglia, se le persone parlano lentamente e chiaramente.", es: "Puedo reconocer palabras familiares y expresiones muy sencillas sobre mí y mi familia, si las personas hablan despacio y con claridad." },
      A2: { it: "Posso capire frasi ed espressioni frequenti su argomenti di immediata importanza (informazioni personali, famiglia, shopping).", es: "Puedo entender frases y expresiones frecuentes sobre temas de importancia inmediata (datos personales, familia, compras)." },
      B1: { it: "Posso capire i punti principali di un discorso chiaro in lingua standard su lavoro, scuola e tempo libero.", es: "Puedo entender los puntos principales de un discurso claro en lengua estándar sobre trabajo, estudios y ocio." },
      B2: { it: "Posso capire discorsi e trasmissioni abbastanza lunghi e seguire argomentazioni complesse, se il tema è relativamente noto.", es: "Puedo entender conferencias y programas extensos y seguir argumentaciones complejas, si el tema es relativamente conocido." },
      C1: { it: "Posso capire discorsi lunghi anche se non strutturati chiaramente e riconoscere significati impliciti, anche a velocità nativa.", es: "Puedo entender discursos largos aunque no estén claramente estructurados y reconocer significados implícitos, incluso a velocidad nativa." },
      C2: { it: "Non ho difficoltà a capire qualsiasi lingua parlata, dal vivo o trasmessa, anche a velocità di madrelingua.", es: "No tengo dificultad para comprender cualquier lengua hablada, en vivo o transmitida, incluso a velocidad de nativo." },
    },
  },
  {
    key: "lettura", skillIt: "Comprensione scritta · Lettura", skillEs: "Comprensión lectora · Lectura",
    cells: {
      A1: { it: "Posso riconoscere nomi, parole e frasi molto semplici presenti in annunci, poster e cataloghi.", es: "Puedo reconocer nombres, palabras y frases muy sencillas en anuncios, carteles y catálogos." },
      A2: { it: "Posso leggere testi molto semplici e brevi e trovare informazioni prevedibili in materiale quotidiano.", es: "Puedo leer textos muy simples y breves y encontrar información predecible en material cotidiano." },
      B1: { it: "Posso capire testi scritti in lingua quotidiana o legati al lavoro e descrivere avvenimenti e sentimenti in una lettera.", es: "Puedo entender textos de lengua cotidiana o relacionados con el trabajo y describir acontecimientos y sentimientos en una carta." },
      B2: { it: "Posso leggere articoli e testi argomentativi complessi e capire la tesi principale e i dettagli rilevanti.", es: "Puedo leer artículos y textos argumentativos complejos y entender la tesis principal y los detalles relevantes." },
      C1: { it: "Posso capire testi lunghi e complessi di ogni tipo, apprezzando le differenze di stile.", es: "Puedo entender textos largos y complejos de todo tipo, apreciando las diferencias de estilo." },
      C2: { it: "Posso leggere e capire praticamente ogni forma di lingua scritta, incluse strutture astratte o letterarie.", es: "Puedo leer y comprender prácticamente cualquier forma de lengua escrita, incluidas estructuras abstractas o literarias." },
    },
  },
  {
    key: "interazione", skillIt: "Interazione orale · Conversazione", skillEs: "Interacción oral · Conversación",
    cells: {
      A1: { it: "Posso interagire in modo semplice, se l'altra persona è disposta a ripetere o riformulare più lentamente.", es: "Puedo interactuar de forma sencilla, si la otra persona está dispuesta a repetir o reformular más despacio." },
      A2: { it: "Posso comunicare in compiti semplici e abituali e scambiare informazioni dirette su argomenti familiari.", es: "Puedo comunicarme en tareas simples y habituales e intercambiar información directa sobre temas familiares." },
      B1: { it: "Posso affrontare la maggior parte delle situazioni di viaggio e partecipare a conversazioni su temi familiari senza sforzo.", es: "Puedo desenvolverme en la mayoría de situaciones de viaje y participar en conversaciones sobre temas familiares sin esfuerzo." },
      B2: { it: "Posso conversare con naturalezza con madrelingua e partecipare attivamente a discussioni su temi noti.", es: "Puedo conversar con naturalidad con nativos y participar activamente en discusiones sobre temas conocidos." },
      C1: { it: "Posso esprimermi con scioltezza e spontaneità, usando la lingua in modo flessibile ed efficace per scopi sociali e professionali.", es: "Puedo expresarme con soltura y espontaneidad, usando la lengua con flexibilidad y eficacia para fines sociales y profesionales." },
      C2: { it: "Posso partecipare senza sforzo a qualsiasi conversazione o discussione, cogliendo espressioni idiomatiche e allusioni.", es: "Puedo participar sin esfuerzo en cualquier conversación o discusión, captando expresiones idiomáticas y alusiones." },
    },
  },
  {
    key: "produzione-orale", skillIt: "Produzione orale · Parlato", skillEs: "Producción oral · Habla",
    cells: {
      A1: { it: "Posso usare espressioni e frasi semplici per descrivere dove vivo e le persone che conosco.", es: "Puedo usar expresiones y frases simples para describir dónde vivo y a las personas que conozco." },
      A2: { it: "Posso usare una serie di espressioni per descrivere la mia famiglia, le mie condizioni e il mio lavoro in frasi semplici.", es: "Puedo usar una serie de expresiones para describir a mi familia, mis condiciones y mi trabajo en frases simples." },
      B1: { it: "Posso raccontare esperienze e avvenimenti e spiegare brevemente le ragioni delle mie opinioni e dei miei progetti.", es: "Puedo contar experiencias y acontecimientos y explicar brevemente las razones de mis opiniones y planes." },
      B2: { it: "Posso presentare descrizioni chiare e dettagliate su un'ampia gamma di temi legati ai miei interessi.", es: "Puedo presentar descripciones claras y detalladas sobre una amplia gama de temas relacionados con mis intereses." },
      C1: { it: "Posso presentare descrizioni chiare e ben strutturate su temi complessi, sviluppando i punti e concludendo in modo appropriato.", es: "Puedo presentar descripciones claras y bien estructuradas sobre temas complejos, desarrollando los puntos y concluyendo de forma apropiada." },
      C2: { it: "Posso presentare argomenti complessi in modo chiaro e scorrevole, adattando lo stile al pubblico.", es: "Puedo presentar temas complejos de forma clara y fluida, adaptando el estilo al público." },
    },
  },
  {
    key: "scrittura", skillIt: "Produzione scritta · Scrittura", skillEs: "Producción escrita · Escritura",
    cells: {
      A1: { it: "Posso scrivere una cartolina breve e semplice, con frasi elementari su di me.", es: "Puedo escribir una postal breve y sencilla, con frases elementales sobre mí." },
      A2: { it: "Posso scrivere note e messaggi semplici su argomenti di bisogno immediato e una lettera personale molto semplice.", es: "Puedo escribir notas y mensajes simples sobre temas de necesidad inmediata y una carta personal muy sencilla." },
      B1: { it: "Posso scrivere testi semplici e coerenti su argomenti noti e lettere che esprimono opinioni.", es: "Puedo escribir textos simples y coherentes sobre temas conocidos y cartas que expresan opiniones." },
      B2: { it: "Posso scrivere testi chiari e dettagliati su vari argomenti e argomentare il mio punto di vista.", es: "Puedo escribir textos claros y detallados sobre varios temas y argumentar mi punto de vista." },
      C1: { it: "Posso esprimermi in testi chiari e ben strutturati, esponendo punti di vista con precisione e stile adeguato.", es: "Puedo expresarme en textos claros y bien estructurados, exponiendo puntos de vista con precisión y estilo adecuado." },
      C2: { it: "Posso scrivere testi chiari e fluidi in uno stile efficace e logico, adatto al contesto e al genere.", es: "Puedo escribir textos claros y fluidos con un estilo eficaz y lógico, adecuado al contexto y al género." },
    },
  },
];

/* ── Certificazioni italiane dell'italiano L2 allineate al QCER ───── */
export interface ItalianCert {
  id: "cils" | "celi" | "plida";
  name: string;
  body: string;
  levels: CefrLevel[];
  extras: string[];          // variantes especiales
  desc: string;              // ES (lengua de la interfaz)
  site: string;
  appPrep: boolean;          // la app incluye preparación específica
}

export const ITALIAN_CERTS: ItalianCert[] = [
  {
    id: "cils",
    name: "CILS",
    body: "Università per Stranieri di Siena",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    extras: ["CILS B1 Cittadinanza (solo orale+scritto, para la ciudadanía)", "CILS B2 Cittadinanza"],
    desc: "La certificación de italiano como lengua extranjera de la Universidad para Extranjeros de Siena. Reconocida por el Ministerio de Asuntos Exteriores italiano (MAECI) y aceptada por universidades y empresas. Se convoca 2-3 veces al año en centros acreditados de todo el mundo.",
    site: "cils.unistrasi.it",
    appPrep: true,
  },
  {
    id: "celi",
    name: "CELI",
    body: "Università per Stranieri di Perugia (CVCL)",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    extras: ["CELI Immigrati (A2, para permisos)", "CELI Adulti"],
    desc: "Certificado de conocimiento de la lengua italiana emitido por el Centro de Evaluación y Certificación Lingüística de la Universidad para Extranjeros de Perugia. Reconocido por el MAECI, válido para la ciudadanía (B1) y para estudiar en universidades italianas.",
    site: "cvcl.it",
    appPrep: false,
  },
  {
    id: "plida",
    name: "PLIDA",
    body: "Società Dante Alighieri",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    extras: ["PLIDA B1 Cittadinanza", "PLIDA Juniores"],
    desc: "Progetto Lingua Italiana Dante Alighieri: la certificación de la Sociedad Dante Alighieri, institución que promueve la lengua y cultura italianas en el mundo desde 1889. Reconocida por el MAECI y por el Estado italiano para fines de ciudadanía y estudio.",
    site: "plida.it",
    appPrep: false,
  },
];

/* ── Correspondencia indicativa CEFR ↔ ACTFL ↔ ILR ───────────────────
   Nota de honestidad: ACTFL y el Consejo de Europa publicaron un
   comunicado conjunto (2010-2012) declarando que NO existe una tabla
   de conversión oficial. La tabla siguiente es la correspondencia
   aproximada de uso más extendido (informes ETS/Cambridge).        */
export const ACTFL_MAP: { cefr: CefrLevel; actfl: string; ilr: string; note?: string }[] = [
  { cefr: "A1", actfl: "Novice Mid / Novice High", ilr: "ILR 0+ (memorized proficiency)" },
  { cefr: "A2", actfl: "Intermediate Low / Intermediate Mid", ilr: "ILR 1 (Elementary)" },
  { cefr: "B1", actfl: "Intermediate High / Advanced Low", ilr: "ILR 1+ / 2 (Limited working)" },
  { cefr: "B2", actfl: "Advanced Mid / Advanced High", ilr: "ILR 2+ (Minimum professional)" },
  { cefr: "C1", actfl: "Superior", ilr: "ILR 3 (Professional working)" },
  { cefr: "C2", actfl: "Distinguished", ilr: "ILR 4 (Full professional)" },
];

/* ── Cómo la app cumple los requisitos del estándar ───────────────── */
export const CEFR_COMPLIANCE: { point: string; detail: string }[] = [
  {
    point: "Objetivos «can-do» en cada unidad",
    detail: "Las 66 unidades comunicativas parten de descriptores de tipo QCER («al final de esta unidad podrás…») y terminan con autoevaluación can-do persistente, el ciclo acción → evidencia del Companion Volume 2020.",
  },
  {
    point: "Enseñanza por competencias, no por contenidos",
    detail: "Cada unidad integra las destrezas del QCER: comprensione orale e scritta, interazione, produzione orale e scritta, más gramática y léxico como herramientas al servicio de la comunicación.",
  },
  {
    point: "Graduación A1→C2 en todo el material",
    detail: "Cursos, gramática (75 temi + spiegazioni approfondite en las 66 unidades), vocabulario (8.000+ lemas), lecturas clásicas y temáticas, cloze y dictados: todo etiquetado por nivel MCER con progresión de dificultad verificada.",
  },
  {
    point: "Test di piazzamento alineado",
    detail: "El test de nivel (20 preguntas graduadas con regla de banda dominante ≥60%) coloca al estudiante en el nivel QCER correcto antes de empezar el recorrido.",
  },
  {
    point: "Autovalutazione consapevole",
    detail: "Griglia oficial de autoevaluación (5 destrezas × 6 niveles) con sugerencia de nivel calculada, tal como recomienda el Portfolio europeo de lenguas (ELP).",
  },
  {
    point: "Preparazione alla certificazione",
    detail: "Módulo específico CILS (A2-C2) con estructura de examen, estrategias por prueba, tareas con modelo y simulacro cronometrado con veredicto promosso/bocciato.",
  },
  {
    point: "Ore guidate per livello",
    detail: "Cada nivel declara sus horas de estudio guiado coherentes con las estimaciones internacionales de referencia (A1 ≈ 90-100 h … C2 ≈ 1000-1200 h).",
  },
];
