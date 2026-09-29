import type { CefrLevel, Exercise, WritingPrompt } from "./types";

/* ── CILS · Certificazione di Italiano come Lingua Straniera ──────────
   Preparación específica para el examen CILS de la Università per
   Stranieri di Siena. Estructura orientativa + banco de tareas
   específicas por sección (ascolto, strutture, lettura, scrittura,
   orale) para A2·B1·B2·C1·C2 + simulacro cronometrado.

   Nota: la estructura y los umbrales son orientativos; la fuente
   oficial es cils.unistrasi.it. */

export type CilsSectionId = "ascolto" | "lettura" | "strutture" | "scrittura" | "orale";

export interface CilsSection {
  id: CilsSectionId;
  label: string;
  labelEs: string;
  minutes: number;
  maxScore: number;
  passScore: number;
  desc: string;
  tips: string[];
}

export interface CilsLevelInfo {
  level: CefrLevel;
  nome: string;
  totalMinutes: number;
  desc: string;
  sections: CilsSection[];
}

export const CILS_SECTIONS_META: Record<CilsSectionId, { label: string; labelEs: string; icon: string }> = {
  ascolto: { label: "Ascolto", labelEs: "Comprensión auditiva", icon: "🎧" },
  lettura: { label: "Lettura", labelEs: "Comprensión lectora", icon: "📖" },
  strutture: { label: "Analisi delle strutture di comunicazione", labelEs: "Gramática y estructuras", icon: "🧩" },
  scrittura: { label: "Scrittura", labelEs: "Expresión escrita", icon: "✍️" },
  orale: { label: "Orale", labelEs: "Expresión oral", icon: "🗣️" },
};

/* Duraciones y puntuaciones ORIENTATIVAS basadas en los formatos
   públicos del CILS (modificadas en el tiempo): se indican los
   valores típicos de convocatoria. Umbral de aprobado por sección:
   ~45% (11/25, 22/50) según el nivel. */
export const CILS_LEVELS: CilsLevelInfo[] = [
  {
    level: "A2",
    nome: "CILS A2",
    totalMinutes: 130,
    desc: "Nivel básico: interacción cotidiana sencilla. Ideal tras ~180 horas de estudio.",
    sections: [
      { id: "ascolto", label: "Ascolto", labelEs: "Escucha", minutes: 20, maxScore: 25, passScore: 11, desc: "Dos pruebas: diálogos breves y mensajes de la vida diaria.", tips: ["Lee las preguntas ANTES de escuchar", "La primera escucha es para el sentido general, la segunda para los detalles", "Cuidado con los números: prezzi, orari, date"] },
      { id: "lettura", label: "Lettura", labelEs: "Lectura", minutes: 35, maxScore: 25, passScore: 11, desc: "Anuncios, cartas y textos breves de la vida práctica.", tips: ["No hace falta entender todo: busca la información pedida", "Los títulos y las negritas anticipan el contenido", "Aborda primero las preguntas de matching"] },
      { id: "strutture", label: "Strutture di comunicazione", labelEs: "Estructuras", minutes: 40, maxScore: 25, passScore: 11, desc: "Completar textos con preposiciones, verbos y concordancias.", tips: ["Lee primero el texto completo aunque tenga huecos", "En los huecos con verbo, identifica tiempo y persona por el contexto", "Revisa género y número en cada sustantivo"] },
      { id: "scrittura", label: "Scrittura", labelEs: "Escritura", minutes: 25, maxScore: 25, passScore: 11, desc: "Dos tareas cortas: un mensaje y una carta informal.", tips: ["Respeta quién escribe y a quién (registro tu/Lei)", "Cuenta las palabras: demasiado corto penaliza", "Usa conectores simples: poi, quindi, perché"] },
      { id: "orale", label: "Prova orale", labelEs: "Oral", minutes: 10, maxScore: 25, passScore: 11, desc: "Presentación y diálogo con el examinador.", tips: ["Prepara 60 segundos sobre ti, tu familia y tu trabajo", "Si no entiendes, di: «Può ripetere, per favore?»", "No memorices: el examinador nota el guion"] },
    ],
  },
  {
    level: "B1",
    nome: "CILS UNO·B1",
    totalMinutes: 155,
    desc: "Nivel intermedio: autonomía en la mayoría de situaciones de viaje y trabajo. Requisito para la cittadinanza (CILS B1 cittadinanza).",
    sections: [
      { id: "ascolto", label: "Ascolto", labelEs: "Escucha", minutes: 30, maxScore: 25, passScore: 11, desc: "Tres pruebas: diálogos, anuncios y un texto largo.", tips: ["La pregunta anticipa el tipo de detalle: quién, cuándo, cuánto", "Tacha las opciones imposibles en la primera escucha", "En el texto largo, toma notas de nombres y cifras"] },
      { id: "lettura", label: "Lettura", labelEs: "Lectura", minutes: 45, maxScore: 25, passScore: 11, desc: "Textos periodísticos breves y correspondencia.", tips: ["Subraya en el texto la frase que justifica cada respuesta", "Cuidado con las opciones «casi correctas»: un detalle las invalida", "Gestiona el tiempo: ~20 min por texto"] },
      { id: "strutture", label: "Strutture di comunicazione", labelEs: "Estructuras", minutes: 45, maxScore: 25, passScore: 11, desc: "Relleno gramatical y léxico en textos continuos.", tips: ["Cinco familias de huecos: verbo, preposición, concordancia, pronombre, conector", "Lee el párrafo entero antes de decidir", "Aprovecha el contexto: cada texto tiene unidad temática"] },
      { id: "scrittura", label: "Scrittura", labelEs: "Escritura", minutes: 60, maxScore: 25, passScore: 11, desc: "Dos tareas: texto breve (90-120 parole) y texto largo (150-180).", tips: ["Cubre TODOS los puntos de la consigna (bullet points)", "Varía el léxico: cada idea repetida es una oportunidad perdida", "Deja 5 minutos para revisar género, número y acentos"] },
      { id: "orale", label: "Prova orale", labelEs: "Oral", minutes: 12, maxScore: 25, passScore: 11, desc: "Monólogo breve + diálogo sobre un tema cotidiano.", tips: ["Estructura: opinión, razón, ejemplo, conclusión", "Usa connettivi: inoltre, tuttavia, per concludere", "Los errores de fluidez importan menos que los silencios"] },
    ],
  },
  {
    level: "B2",
    nome: "CILS DUE·B2",
    totalMinutes: 195,
    desc: "Intermedio alto: argumentar con fluidez. El nivel más pedido por universidades y empresas.",
    sections: [
      { id: "ascolto", label: "Ascolto", labelEs: "Escucha", minutes: 30, maxScore: 25, passScore: 11, desc: "Textos interactivos y transmisiones (radio/tv).", tips: ["Identifica la intención del hablante, no solo el contenido", "Los sinónimos del audio raramente aparecen en las opciones", "En el gap-fill, las palabras son casi siempre gramaticales"] },
      { id: "lettura", label: "Lettura", labelEs: "Lectura", minutes: 50, maxScore: 25, passScore: 11, desc: "Artículos de opinión y textos de divulgación.", tips: ["Localiza la tesis del autor en el primer y último párrafo", "Distingue hecho (dato) y opinión (valoración)", "Las opciones extremas (solo, mai, sempre) suelen ser erróneas"] },
      { id: "strutture", label: "Strutture di comunicazione", labelEs: "Estructuras", minutes: 60, maxScore: 25, passScore: 11, desc: "Transformaciones, gap-fill y relación de estructuras.", tips: ["Revisa subjuntivo tras sebbene/purché/affinché", "Domina la concordancia del participio con essere", "Los tiempos del pasado: imperfetto vs passato prossimo es EL tema B2"] },
      { id: "scrittura", label: "Scrittura", labelEs: "Escritura", minutes: 80, maxScore: 25, passScore: 11, desc: "Dos tareas: texto pragmático y ensayo breve (180-220 parole).", tips: ["El ensayo: tesi, argomento, antitesi, sintesi", "Cada párrafo = una idea + un ejemplo", "Un título aforístico suma puntos"] },
      { id: "orale", label: "Prova orale", labelEs: "Oral", minutes: 15, maxScore: 25, passScore: 11, desc: "Diálogo argumentativo + monólogo sobre temas abstractos.", tips: ["Toma postura y defiéndela: al examinador no le importa cuál", "Parafrasea cuando te falte la palabra: «una specie di…»", "Cierra siempre con una síntesis personal"] },
    ],
  },
  {
    level: "C1",
    nome: "CILS TRE·C1",
    totalMinutes: 210,
    desc: "Avanzado: matizar registros, entender la ironía, escribir con eficacia profesional.",
    sections: [
      { id: "ascolto", label: "Ascolto", labelEs: "Escucha", minutes: 35, maxScore: 25, passScore: 11, desc: "Conferencias y debates con matices y sobreentendidos.", tips: ["Escucha lo que NO se dice: ironía, reticencia, énfasis", "Los conectores del audio marcan los cambios de turno", "En resúmenes, jerarquiza ideas principales y secundarias"] },
      { id: "lettura", label: "Lettura", labelEs: "Lectura", minutes: 55, maxScore: 25, passScore: 11, desc: "Ensayos y textos literarios y técnicos.", tips: ["Sigue el hilo argumentativo: cada párrafo tiene función", "Las preguntas C1 preguntan por implicaciones, no datos", "Vocabulario: usa el contexto y la morfología (prefijos/sufijos)"] },
      { id: "strutture", label: "Strutture di comunicazione", labelEs: "Estructuras", minutes: 60, maxScore: 25, passScore: 11, desc: "Uso avanzado: congiuntivo, concordanze dei tempi, registro.", tips: ["Ojo con la consecutio temporum en estilo indirecto", "Il periodo ipotetico de 3 tipos aparece siempre", "Distingue futuro anteriore vs condizionale composto"] },
      { id: "scrittura", label: "Scrittura", labelEs: "Escritura", minutes: 90, maxScore: 25, passScore: 11, desc: "Resumen + texto argumentativo formal (220-260 parole).", tips: ["El resumen exige síntesis, no copia: cambia la estructura de la frase", "Registro formal: si impersonale, nominalizaciones", "Un buen cierre es media nota"] },
      { id: "orale", label: "Prova orale", labelEs: "Oral", minutes: 15, maxScore: 25, passScore: 11, desc: "Exposición sobre documento + debate con el examinador.", tips: ["Prepara la exposición en 3 puntos y ciérrala a tiempo", "Cita el documento: «come afferma l'autore…»", "En el debate, cede el turno con elegancia: «intervengo su un punto…»"] },
    ],
  },
  {
    level: "C2",
    nome: "CILS QUATTRO·C2",
    totalMinutes: 220,
    desc: "Dominio: lengua literaria y académica, matices estilísticos, variedades regionales.",
    sections: [
      { id: "ascolto", label: "Ascolto", labelEs: "Escucha", minutes: 35, maxScore: 25, passScore: 11, desc: "Contenidos complejos: cine, literatura, variación diatópica.", tips: ["Reconoce registro y variedad (romanèsco, toscanismo)", "Las preguntas C2 versan sobre actitud y punto de vista", "Toma notas solo de lo indispensable"] },
      { id: "lettura", label: "Lettura", labelEs: "Lectura", minutes: 60, maxScore: 25, passScore: 11, desc: "Textos literarios, ensayística y crítica.", tips: ["Las preguntas integran forma y contenido: «quale effetto produce…»", "Figuras retóricas básicas: metafora, metonimia, ossimoro", "Gestiona 3 textos largos: 20 minutos por texto"] },
      { id: "strutture", label: "Strutture di comunicazione", labelEs: "Estructuras", minutes: 60, maxScore: 25, passScore: 11, desc: "Todos los usos, incluidos los literarios y raros.", tips: ["Domina il congiuntivo trapassato y la concordancia compleja", "Reconoce construcciones literarias: l'iperbato, la zeugma", "El registro coloquial también se examina"] },
      { id: "scrittura", label: "Scrittura", labelEs: "Escritura", minutes: 100, maxScore: 25, passScore: 11, desc: "Dos tareas: síntesis de fuentes + texto crítico (280-320 parole).", tips: ["Cita y parafrasea integrando DOS fuentes", "La síntesis es jerarquía: idea central → secundarias", "Revisa la puntuación adulta: punto e virgola, due punti"] },
      { id: "orale", label: "Prova orale", labelEs: "Oral", minutes: 20, maxScore: 25, passScore: 11, desc: "Coloquio sobre temas abstractos y literarios.", tips: ["Toma partido con matiz: semmai, per converso, a dirla tutta", "Un verso citado a tiempo vale oro", "El C2 oral se juega en los matices, no en la velocidad"] },
    ],
  },
];

export function cilsInfo(level: CefrLevel): CilsLevelInfo {
  return CILS_LEVELS.find((l) => l.level === level) ?? CILS_LEVELS[2];
}

/* ── Banco de tareas CILS por sección y nivel ──────────────────────────
   Ejercicios con ids cils-<liv>-<sezione>-<n>. La vista los agrupa por
   sección para el entrenamiento específico y la simulación. */

export const CILS_EXERCISES: Exercise[] = [
  /* ══════════ A2 ══════════ */
  { id: "cils-a2-ascolto-1", type: "dictation", level: "A2", topic: "ascolto", prompt: "CILS·A2 Ascolto: escucha y escribe el mensaje.", text: "Pronto, sono Laura. Il treno arriva alle otto e mezza alla stazione centrale. Aspettami al bar, io prendo un caffè. Ciao!", es: "Diga, soy Laura. El tren llega a las ocho y media a la estación central. Espérame en el bar, yo tomo un café. ¡Adiós!" },
  { id: "cils-a2-lettura-1", type: "mc", level: "A2", topic: "lettura", prompt: "CILS·A2 Lettura — «Cercasi babysitter per bambina di 6 anni, dal lunedì al venerdì, ore 15-19. Zona Trastevere. Esperienza richiesta. Tel. 333-4455». L'annuncio cerca…",
    options: ["una babysitter", "un'insegnante di scuola", "una cuoca", "una vicina"], answer: 0, explain: "«Cercasi babysitter»: el anuncio busca una canguro, de lunes a viernes de 15 a 19 en Trastevere." },
  { id: "cils-a2-lettura-2", type: "mc", level: "A2", topic: "lettura", prompt: "CILS·A2 Lettura — «Il ristorante resta chiuso per ferie dal 5 al 20 agosto». Quando riapre il ristorante?",
    options: ["il 21 agosto", "il 5 agosto", "il 20 agosto", "a settembre"], answer: 0, explain: "Cerrado DEL 5 AL 20 de agosto → reabre el 21." },
  { id: "cils-a2-strutture-1", type: "fill", level: "A2", topic: "strutture", prompt: "CILS·A2 Strutture: completa con la preposición. «Vado ___ dentista alle 10.»",
    sentence: "Vado ___ dentista alle 10.", accepted: ["dal"], explain: "da + artículo = dal: «vado dal dentista» (visitas a personas: dal medico, dal parrucchiere)." },
  { id: "cils-a2-strutture-2", type: "mc", level: "A2", topic: "strutture", prompt: "CILS·A2 Strutture: «Ieri sera ___ a casa di Marco.»",
    options: ["sono andata", "vado", "andrei", "vado andata"], answer: 0, explain: "Ieri → passato prossimo; andare con essere: sono andata/o." },
  { id: "cils-a2-scrittura-1", type: "translate", level: "A2", topic: "scrittura", prompt: "CILS·A2 Scrittura (mensaje, 40+ parole): escribe en italiano un mensaje a un amigo para cancelar una cena y proponer otro día. Usamos la plantilla: begin «Ciao Marco, mi dispiace…»",
    to: "it", source: "Cancela la cena de esta noche y propone el viernes.",
    accepted: ["ciao mi dispiace ma stasera non posso venire a cena facciamo venerdi", "ciao scusa ma stasera non posso venire a cena ti va venerdi", "ciao marco mi dispiace ma questa sera non posso venire a cena facciamo venerdi"],
    explain: "Plantilla A2: saludo + disculpa (mi dispiace ma non posso) + propuesta (facciamo venerdì?) + saludo." },
  /* ══════════ B1 ══════════ */
  { id: "cils-b1-ascolto-1", type: "dictation", level: "B1", topic: "ascolto", prompt: "CILS·B1 Ascolto: escucha el anuncio y escribe.", text: "Attenzione: il volo AZ 359 per Palermo è in ritardo di quaranta minuti. L'imbarco è spostato al cancello numero sette. Ci scusiamo per l'inconveniente.", es: "Atención: el vuelo AZ 359 a Palermo va con 40 minutos de retraso. El embarque pasa a la puerta número siete. Disculpen las molestias." },
  { id: "cils-b1-lettura-1", type: "mc", level: "B1", topic: "lettura", prompt: "CILS·B1 Lettura — estratto: «Sempre più italiani scelgono di lavorare da remoto. Secondo un'indagine Istat, il 19% dei dipendenti lavora da casa almeno un giorno a settimana, con punte del 30% al Nord.» L'indagine mostra che…",
    options: ["il lavoro da remoto cresce ed è più diffuso al Nord", "il 30% degli italiani non lavora", "l'Istat sconsiglia il lavoro da remoto", "il Sud supera il Nord"], answer: 0, explain: "El 19% teletrabaja al menos un día, con picos del 30% en el Norte: el remote crece y es más difuso al Nord." },
  { id: "cils-b1-lettura-2", type: "mc", level: "B1", topic: "lettura", prompt: "CILS·B1 Lettura — «La mostra resterà aperta fino al 30 novembre, con ingresso gratuito la prima domenica del mese.» Ingresso gratuito quando?",
    options: ["la prima domenica del mese", "fino al 30 novembre", "tutti i giorni", "solo per i minori"], answer: 0, explain: "Entrada gratuita la primera doménica del mes; hasta el 30 de noviembre solo indica el cierre." },
  { id: "cils-b1-strutture-1", type: "fill", level: "B1", topic: "strutture", prompt: "CILS·B1 Strutture: «Se domani ___ bel tempo, andiamo al mare.» (avere, congiuntivo)",
    sentence: "Se domani ___ bel tempo, andiamo al mare.", accepted: ["fa"], explain: "Periodo ipotetico del 1º tipo (real): se + presente indicativo, futuro presente. «Se fa bel tempo…»." },
  { id: "cils-b1-strutture-2", type: "mc", level: "B1", topic: "strutture", prompt: "CILS·B1 Strutture: «Nonostante ___ tardi, siamo rimasti a chiacchierare.»",
    options: ["fosse", "era", "è", "sarà"], answer: 0, explain: "nonostante + congiuntivo (imperfetto para el pasado): fosse." },
  { id: "cils-b1-strutture-3", type: "fill", level: "B1", topic: "strutture", prompt: "CILS·B1 Strutture: «Mi dispiace, ma non mi ___ possibile venire alla riunione.» (essere)",
    sentence: "Mi dispiace, ma non mi ___ possibile venire alla riunione.", accepted: ["è"], explain: "«non mi è possibile»: costrucción impersonal de cortesía muy CILS." },
  { id: "cils-b1-scrittura-1", type: "translate", level: "B1", topic: "scrittura", prompt: "CILS·B1 Scrittura (carta informal, 90-120 parole): escribe a un amigo contando un viaje breve: dónde fuiste, con quién, qué hiciste, una anécdota y una invitación a repetirlo.",
    to: "it", source: "Escribe la carta informal sobre el viaje.",
    accepted: ["ciao ti scrivo per raccontarti il mio viaggio", "caro amico ti racconto il mio ultimo viaggio"],
    explain: "Estructura B1: saludo (Ciao…), motivo (ti scrivo per…), narración con passato prossimo e imperfetto, anécdota, invitación (perché non vieni la prossima volta?), saludo." },
  /* ══════════ B2 ══════════ */
  { id: "cils-b2-ascolto-1", type: "dictation", level: "B2", topic: "ascolto", prompt: "CILS·B2 Ascolto: escucha el inicio del servicio y escribe.", text: "Buongiorno e benvenuti a Otto e mezzo. Oggi parliamo del costo della vita: secondo l'ultima rilevazione, i prezzi dell'alimentare sono aumentati del sei per cento rispetto all'anno scorso, un dato che pesa soprattutto sulle famiglie con redditi più bassi.", es: "Buenos días y bienvenidos a Otto e mezzo. Hoy hablamos del coste de la vida: según el último sondeo, los precios de la alimentación han subido un 6% respecto al año pasado, un dato que pesa sobre todo en las familias con rentas más bajas." },
  { id: "cils-b2-lettura-1", type: "mc", level: "B2", topic: "lettura", prompt: "CILS·B2 Lettura — estratto: «La scomparsa delle edicole non è solo una questione economica: è la fine di un rituale sociale. Chi non ha più l'edicola sotto casa non ha perso un negozio, ha perso una piazza.» L'autore sostiene che…",
    options: ["la chiusura delle edicole ha un valore simbolico oltre che economico", "le edicole chiudono solo per motivi fiscali", "le piazze italiane sono troppo grandi", "i giornali sono ormai gratuiti"], answer: 0, explain: "«non è solo una questione economica… ha perso una piazza»: el autor defiende que hay un valor simbólico/social." },
  { id: "cils-b2-lettura-2", type: "mc", level: "B2", topic: "lettura", prompt: "CILS·B2 Lettura — estratto: «Sarebbe ingenuo attribuire il calo della lettura solo allo smartphone. I dati mostrano semmai l'assenza di una politica del libro coerente.» La parola «semmai» introduce…",
    options: ["una correzione dell'ipotesi precedente", "una conferma", "un esempio", "una conclusione"], answer: 0, explain: "«semmai» = «más bien»: corrige la hipótesis ingenua y apunta a otra causa." },
  { id: "cils-b2-strutture-1", type: "fill", level: "B2", topic: "strutture", prompt: "CILS·B2 Strutture: «Se avessi saputo che venivi, ___ qualcosa di speciale.» (preparare, condizionale composto)",
    sentence: "Se avessi saputo che venivi, ___ qualcosa di speciale.", accepted: ["avrei preparato"], explain: "Periodo ipotetico del 3º tipo: se + congiuntivo trapassato, condizionale composto." },
  { id: "cils-b2-strutture-2", type: "mc", level: "B2", topic: "strutture", prompt: "CILS·B2 Strutture: «Pur ___ i limiti del metodo, i ricercatori lo considerano affidabile.»",
    options: ["riconoscendo", "riconoscere", "riconosciuto", "riconosca"], answer: 0, explain: "pur + gerundio = aunque + gerundio: «pur riconoscendo»." },
  { id: "cils-b2-strutture-3", type: "fill", level: "B2", topic: "strutture", prompt: "CILS·B2 Strutture: «È da maggio che non ___ una sua lettera.» (ricevere)",
    sentence: "È da maggio che non ___ una sua lettera.", accepted: ["ricevo"], explain: "«È da + tempo che» + presente: acción que continúa desde entonces." },
  { id: "cils-b2-strutture-4", type: "mc", level: "B2", topic: "strutture", prompt: "CILS·B2 Strutture: «Il rapporto va consegnato ___ lunedì.» (a más tardar)",
    options: ["entro", "dopo", "prima di", "dal"], answer: 0, explain: "entro + tiempo = dentro de / a más tardar el…; «prima di lunedì» sería antes del lunes." },
  { id: "cils-b2-scrittura-1", type: "translate", level: "B2", topic: "scrittura", prompt: "CILS·B2 Scrittura (180-220 parole): «Il telelavoro: libertà o isolamento?» Redacta la introducción y la tesis del ensayo (2 párrafos de ejemplo).",
    to: "it", source: "Escribe la tesis del ensayo sobre el teletrabajo.",
    accepted: ["negli ultimi anni il telelavoro ha cambiato le nostre abitudini a mio avviso i benefici superano i rischi", "il telelavoro liberta o isolamento a mio parere la verita sta nel mezzo"],
    explain: "Apertura B2: reformular el título (Negli ultimi anni…), plantear la tensión (libertà vs isolamento) y tomar postura (a mio avviso…)." },
  /* ══════════ C1 ══════════ */
  { id: "cils-c1-ascolto-1", type: "dictation", level: "C1", topic: "ascolto", prompt: "CILS·C1 Ascolto: escucha y escribe la cita.", text: "La letteratura, diceva Calvino, è un sasso da buttare nel pozzo della realtà: il cerchio che si allarga non cambia il pozzo, ma ci dice quanto è profondo.", es: "La literatura, decía Calvino, es una piedra que arrojar al pozo de la realidad: el círculo que se ensancha no cambia el pozo, pero nos dice cuán profundo es." },
  { id: "cils-c1-lettura-1", type: "mc", level: "C1", topic: "lettura", prompt: "CILS·C1 Lettura — estratto: «Il pessimismo leopardiano non è un lamento, ma un metodo: solo chi misura l'abisso può costruirvi sopra un ponte.» Il passo caratterizza il pessimismo come…",
    options: ["un procedimento conoscitivo, non un sentimento", "una debolezza del carattere", "un vezzo letterario", "una fede religiosa"], answer: 0, explain: "«non un lamento, ma un metodo»: el pesimismo es método (procedimiento cognitivo), no lamento." },
  { id: "cils-c1-lettura-2", type: "mc", level: "C1", topic: "lettura", prompt: "CILS·C1 Lettura — «La prosa di Gadda procede per accumulazione: ogni sintagma trascina con sé il proprio contrario.» «Per accumulazione» indica…",
    options: ["una modalità stilistica di crescita additiva", "un errore di stampa", "una figura metrica", "un procedimento legale"], answer: 0, explain: "«procedere per accumulazione»: modalidad estilística aditiva, típica del gaddismo." },
  { id: "cils-c1-strutture-1", type: "fill", level: "C1", topic: "strutture", prompt: "CILS·C1 Strutture: «Sarebbe ora che tu ___ una decisione.» (prendere, congiuntivo)",
    sentence: "Sarebbe ora che tu ___ una decisione.", accepted: ["prendessi"], explain: "«è/sarebbe ora che» + congiuntivo imperfetto: prendessi." },
  { id: "cils-c1-strutture-2", type: "mc", level: "C1", topic: "strutture", prompt: "CILS·C1 Strutture: «Disse che sarebbe arrivato ___ avesse finito la riunione.»",
    options: ["non appena", "per quanto", "ove non", "pur se"], answer: 0, explain: "non appena = tan pronto como, temporal; los demás son concesivos/condicionales." },
  { id: "cils-c1-strutture-3", type: "fill", level: "C1", topic: "strutture", prompt: "CILS·C1 Strutture: «Il relatore ha affermato che i dati ___ già stati verificati.» (essere, indicativo passato remoto→trapassato in stile indiretto)",
    sentence: "Il relatore ha affermato che i dati ___ già stati verificati.", accepted: ["erano"], explain: "Estilo indirecto: passato remoto (furono) → trapassato prossimo (erano stati). Aceptado también «fossero» (congiuntivo trapassato)." },
  { id: "cils-c1-scrittura-1", type: "translate", level: "C1", topic: "scrittura", prompt: "CILS·C1 Scrittura: síntesis formal. Redacta la frase de apertura de un informe (si impersonale): «En el presente informe se examinan las causas del fenómeno.»",
    to: "it", source: "En el presente informe se examinan las causas del fenómeno.",
    accepted: ["nel presente rapporto si esaminano le cause del fenomeno", "nel presente studio si analizzano le cause del fenomeno", "il presente rapporto esamina le cause del fenomeno"],
    explain: "Registro formal C1: «nel presente rapporto si esaminano…» (si passivante + léxico anticipativo)." },
  /* ══════════ C2 ══════════ */
  { id: "cils-c2-ascolto-1", type: "dictation", level: "C2", topic: "ascolto", prompt: "CILS·C2 Ascolto: escucha y escribe el pasaje.", text: "«Spesso il male di vivere ho incontrato»: Montale non descrive il male, lo circumnaviga, come fa il marinaio con lo scoglio che non può evitare ma può mappare.", es: "«Spesso il male di vivere ho incontrato»: Montale no describe el mal, lo circunnavega, como hace el marinero con la roca que no puede evitar pero sí mapear." },
  { id: "cils-c2-lettura-1", type: "mc", level: "C2", topic: "lettura", prompt: "CILS·C2 Lettura — estratto: «L'iperbato di 'Spesso il male di vivere ho incontrato' produce un effetto di…»",
    options: ["straniamento: il complemento anticipa il verbo", "banalizzazione del senso", "accelerazione ritmica", "anafora lessicale"], answer: 0, explain: "El hipérbaton (inversión) anticipa el objeto: produce extrañamiento (straniamento), señal de la palabra que pesa." },
  { id: "cils-c2-lettura-2", type: "mc", level: "C2", topic: "lettura", prompt: "CILS·C2 Lettura — «Il 'naufragar' dell'Infinito è dolce nonostante — anzi grazie a — la precarietà: l'ossimoro non risolve la tensione, la abita.» La tesi del passo è che…",
    options: ["la tensión del oxímoron constituye su valor", "Leopardi resuelve la contradicción", "el infinito es un tema menor", "el naufragio es literal"], answer: 0, explain: "«non risolve la tensione, la abita»: el valor del oxímoron es habitar la tensión sin resolverla." },
  { id: "cils-c2-strutture-1", type: "fill", level: "C2", topic: "strutture", prompt: "CILS·C2 Strutture: «Per quanto ___ discutibile la tesi, va presa sul serio.» (essere, congiuntivo)",
    sentence: "Per quanto ___ discutibile la tesi, va presa sul serio.", accepted: ["sia"], explain: "per quanto + congiuntivo (presente para presente): sia. Concesiva culta." },
  { id: "cils-c2-strutture-2", type: "mc", level: "C2", topic: "strutture", prompt: "CILS·C2 Strutture: «Ne ___ che la ricerca va riorientata verso i corpora spontanei.» (conseguire)",
    options: ["consegue", "consente", "converrebbe", "concorda"], answer: 0, explain: "«ne consegue che…» = se deduce que: consecutivo culto insustituible." },
  { id: "cils-c2-strutture-3", type: "mc", level: "C2", topic: "strutture", prompt: "CILS·C2 Strutture: «L'inciso, per così dire, alleggerisce — o parafrasa?» «Per così dire» segnala…",
    options: ["un'attenuazione ironica dell'espressione", "una citazione literal", "una domanda retorica al lettore", "una correzione di stampa"], answer: 0, explain: "«per così dire» = por así decirlo: atenuación irónica, marca de registro culto." },
  { id: "cils-c2-scrittura-1", type: "translate", level: "C2", topic: "scrittura", prompt: "CILS·C2 Scrittura: apertura de un texto crítico que integre dos fuentes. Traduce: «Si bien ambas fuentes subrayan la complejidad del fenómeno, solo la primera extrae consecuencias metodológicas.»",
    to: "it", source: "Si bien ambas fuentes subrayan la complejidad del fenómeno, solo la primera extrae consecuencias metodológicas.",
    accepted: ["pur sottolineando entrambe le fonti la complessita del fenomeno solo la prima ne trae conseguenze metodologiche", "sebbene entrambe le fonti sottolineino la complessita del fenomeno solo la prima ne trae conseguenze metodologiche"],
    explain: "C2: concesiva culta (pur + gerundio / sebbene + congiuntivo) + ne ripreso (ne trae)." },
];

export function cilsExercisesBySection(level: CefrLevel, section: CilsSectionId): Exercise[] {
  const want = section === "orale" || section === "scrittura" ? "scrittura" : section === "strutture" ? "strutture" : section;
  return CILS_EXERCISES.filter((e) => e.level === level && e.topic === want);
}

/* Tracce di scrittura/orale específicas CILS (con modelo para autoevaluación). */
export interface CilsTask {
  id: string;
  level: CefrLevel;
  section: CilsSectionId;
  title: string;
  traccia: string;
  tracciaEs: string;
  parole: string;
  minutes: number;
  modello: string;
  checklist: string[];
}

export const CILS_TASKS: CilsTask[] = [
  { id: "cils-task-b1-scr-1", level: "B1", section: "scrittura", title: "Lettera informale: il trasloco", traccia: "Scrivi a un amico raccontando il tuo trasloco: dove, con chi, i problemi, la nuova casa e un invito a venire a trovarlo → trovarti.", tracciaEs: "Cuenta a un amigo tu mudanza y llévalo a visitarte.", parole: "90-120", minutes: 25, modello: "Ciao Giulia, ti scrivo con una notizia: mi sono trasferita! L'appartamento nuovo è in periferia, al terzo piano con un balcone piccolo. Il trasloco è stato un disastro: gli scatoloni sono arrivati in ritardo e si è rotta una lampada. Però la zona è tranquilla e c'è un mercato il sabato. Perché non vieni a trovarmi uno di questi weekend? Ti aspetto, un abbraccio.", checklist: ["Saludo + motivo", "Passato prossimo e imperfetto", "Un problema + una cosa positiva", "Invito finale", "Despedida"] },
  { id: "cils-task-b2-scr-1", level: "B2", section: "scrittura", title: "Testo argomentativo: le vacanze smart", traccia: "«Meglio una settimana di vacanza disconnessa che dieci di vacanza connessa.» Scrivi un testo argomentativo (180-220 parole) con tesi, argomenti, antitesi e conclusione.", tracciaEs: "Ensayo argumentativo: ¿vacaciones desconectadas o conectadas?", parole: "180-220", minutes: 45, modello: "Titolo: Il diritto alla lentezza. Negli ultimi anni si è diffusa l'idea che le vacanze abbiano valore solo se «disconnessa»… A mio avviso, tuttavia, il problema non è il telefono ma l'uso che ne facciamo: la fotografia del tramonto può essere memoria, non distrazione. È vero che le notifiche ci rubano il presente; ma bandirle a oltranza trasforma la pausa in un'altra prestazione. Semmai serve un patto personale: ore protette, senza schermi, e il resto in libertà. Così la vacanza torna a essere ciò che deve: un allenamento all'attenzione, non una gara di astinenza.", checklist: ["Tesis explícita", "Un argumento + ejemplo", "Antítesis (Es verdad que…)", "Reformulación (semmai, piuttosto)", "Conclusión personal"] },
  { id: "cils-task-c1-scr-1", level: "C1", section: "scrittura", title: "Sintesi di due fonti", traccia: "Sintetizza in un testo formale (220-260 parole) le due fonti: (A) un articolo sul calo dei lettori italiani, (B) un'intervista sull'audiolibro come rientro alla lettura.", tracciaEs: "Síntesis formal de dos fuentes sobre la lectura.", parole: "220-260", minutes: 60, modello: "Le due fonti, pur partendo da premesse diverse, convergono su un dato: la lettura in Italia è in calo, ma cambia forma più che sparire. L'articolo (fonte A) evidenzia il calo dei lettori forti, concentrato nelle fasce 25-45; l'intervista (fonte B) ribalta la prospettiva: l'audiolibro, lungi dall'uccidere la lettura, la reintroduce nei tempi morti — pendolarismo, casa, cura. Ne consegue che la domanda pubblica andrebbe riformulata: non «quanti leggono» ma «come si legge oggi». La fonte B, tuttavia, sottovaluta un punto sollevato dalla A: la lettura profonda, quella che forma lessico e pensiero, resta legata alla pagina. Una politica del libro dovrebbe dunque lavorare su due binari: normalizzare l'ascolto e proteggere il tempo lungo della lettura.", checklist: ["Aperitura neutra que anuncia la síntesis", "Ideas de la fuente A", "Ideas de la fuente B", "Conector consecutivo (ne consegue che)", "Tensión final A vs B + propuesta"] },
  { id: "cils-task-b1-oral-1", level: "B1", section: "orale", title: "Presentazione + dialogo", traccia: "1) Presentati (famiglia, lavoro/studio, tempo libero), 2) Il dialogo verte su: «Meglio vivere in città o in campagna?». Motiva la tua preferenza.", tracciaEs: "Presentación + diálogo ciudad vs campo.", parole: "—", minutes: 12, modello: "Opinione → ragione → esempio: «Preferisco la città, anche se il verde mi manca: il lavoro è a dieci minuti, e la sera c'è sempre qualcosa da fare. Però capisco chi sceglie la campagna: mio zio si è trasferito e ora ha un orto stupendo. Dipende dal momento della vita, no?»", checklist: ["Estructura opinión-razón-ejemplo", "Conectores (inoltre, però, per esempio)", "Pregunta al examinador", "Sin silencios largos"] },
  { id: "cils-task-b2-oral-1", level: "B2", section: "orale", title: "Argomentazione su astratto", traccia: "«L'istruzione online renderà obsolete le aule?» Espone la tua posizione e rispondi a un'obiezione dell'esaminatore.", tracciaEs: "Debate: ¿el aula está obsoleta?", parole: "—", minutes: 15, modello: "Tesi sfumata: «L'aula non morirà, ma dovrà guadagnarsi il suo senso: ciò che offre — presenza, conflitto, festa — è esattamente ciò che lo schermo non replica. All'esame: espongo, do un esempio (l'apprendistato), anticipo l'obiezione («si dirà: i costi») e chiudo con la sintesi.»", checklist: ["Postura matizada (no radical)", "Ejemplo concreto", "Objeción anticipada", "Síntesis final"] },
  { id: "cils-task-c2-oral-1", level: "C2", section: "orale", title: "Colloquio su documento letterario", traccia: "Commenta il passo: «Spesso il male di vivere ho incontrato / era pieno di traversi…» (Montale): forma, metrica, temi; poi discuti con l'esaminatore se la poesia possa ancora «consolare».", tracciaEs: "Comentario de Montale + debate sobre la poesía hoy.", parole: "—", minutes: 20, modello: "Inquadro (Ossi di seppia, 1925), forma (endecasillabo con iperbato), effetto (straniamento), temi (male di vivere come traversa da rimuovere, poi la sublimità della traversa stessa). Quindi il dibattito: «Consolare, oggi, suona antico; semmai la poesia accompagna: non toglie il male, lo mette in musica».", checklist: ["Inquadramiento (obra, año)", "Análisis métrico-retórico", "Cita textual", "Postura en el debate con matiz"] },
];

export function cilsTasks(level: CefrLevel, section: CilsSectionId): CilsTask[] {
  return CILS_TASKS.filter((t) => t.level === level && t.section === section);
}

/* Preguntas frecuentes del examen. */
export const CILS_FAQ: { q: string; a: string }[] = [
  { q: "¿Quién emite el CILS y cada cuánto se convoca?", a: "El CILS lo emite la Università per Stranieri di Siena. Se convoca dos o tres veces al año (febrero-junio, a veces octubre-diciembre) en sedes oficiales de Italia y del extranjero. Las fechas exactas se publican en cils.unistrasi.it." },
  { q: "¿Cuánto cuesta y cuánto vale el certificado?", a: "Las tasas dependen del nivel y de la sede (orientativamente 100-160 €). El certificado no caduca y es reconocido por el Ministerio de Asuntos Exteriores italiano; el CILS B1 cittadinanza es suficiente para la solicitud de nacionalidad." },
  { q: "¿Qué pasa si apruebo algunas secciones y suspendo otras?", a: "En muchas convocatorias puedes conservar las secciones aprobadas y presentarte solo a las suspendidas en la convocatoria siguiente (credito: cada sección aprobada «se guarda»). Consulta el reglamento de tu sede: no en todos los niveles se aplica igual." },
  { q: "¿CILS, CELI o PLIDA: cuál elijo?", a: "Los tres certifican el mismo MCER y todos son válidos para ciudadanía (nivel B1). CILS (Siena) y CELI (Perugia) son los más extendidos; PLIDA lo emite la Società Dante Alighieri. Elige por sede y fecha, no por prestigio: el nivel es el mismo." },
  { q: "¿Cuánto tiempo necesito para preparar un B2?", a: "Orientativamente 500-600 horas totales de estudio desde cero para el B2. Si ya tienes un B1 sólido, un ciclo de 3-4 meses de preparación específica (2-3 sesiones/semana + simulacros) suele bastar." },
];

/* Veredicto de una sección según reglas CILS orientativas. */
export function cilsVerdict(scores: Partial<Record<CilsSectionId, { got: number; max: number }>>): {
  promosso: boolean;
  details: { section: CilsSectionId; got: number; max: number; passed: boolean }[];
} {
  const details = (Object.entries(scores) as [CilsSectionId, { got: number; max: number }][]).map(([id, s]) => ({
    section: id, got: s.got, max: s.max, passed: s.got / Math.max(1, s.max) >= 0.45,
  }));
  return { promosso: details.length > 0 && details.every((d) => d.passed), details };
}
