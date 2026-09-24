import type { ConversationScenario } from "./types";

/* ── Conversación · escenarios con frases útiles + tutor IA ───────── */

export const CONVERSATION_SCENARIOS: ConversationScenario[] = [
  {
    id: "cs-1", emoji: "👋", title: "Conocer a alguien", level: "A1",
    phrases: [
      { it: "Ciao! Piacere di conoscerti.", es: "¡Hola! Encantado de conocerte." },
      { it: "Come ti chiami? — Mi chiamo…", es: "¿Cómo te llamas? — Me llamo…" },
      { it: "Di dove sei? — Sono di Madrid.", es: "¿De dónde eres? — Soy de Madrid." },
      { it: "Che lavoro fai? — Faccio l'ingegnere.", es: "¿A qué te dedicas? — Soy ingeniero." },
      { it: "Parli inglese? — Sì, un po'.", es: "¿Hablas inglés? — Sí, un poco." },
    ],
    tips: ["El italiano informal usa tu desde el primer minuto entre jóvenes", "Piacere = encantado (acompañado de sonrisa)", "Para despedirte informalmente: Ci vediamo! (nos vemos)"],
    tutorSeed: "Simuliamo una conversazione informale: ci conosciamo a una festa. Tu sei italiano/a, io mi presento. Comincia tu salutando.",
  },
  {
    id: "cs-2", emoji: "☕", title: "En el bar", level: "A1",
    phrases: [
      { it: "Scusi, un caffè per favore.", es: "Disculpe, un café por favor." },
      { it: "Vorrei un cornetto e un cappuccino.", es: "Querría un croissant y un capuchino." },
      { it: "Quanto costa?", es: "¿Cuánto cuesta?" },
      { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" },
      { it: "Il conto, per favore.", es: "La cuenta, por favor." },
    ],
    tips: ["En el bar se pide primero y se paga (a veces después) en caja", "El capuchino es de mañana: después de comer, pide caffè macchiato", "Un caffè = un espresso"],
    tutorSeed: "Facciamo role-play: io sono il cliente, tu sei il barista di un bar italiano. Salutami e chiedimi cosa desidero.",
  },
  {
    id: "cs-3", emoji: "🗺️", title: "Pedir direcciones", level: "A1",
    phrases: [
      { it: "Scusi, dov'è la stazione?", es: "Disculpe, ¿dónde está la estación?" },
      { it: "C'è una farmacia qui vicino?", es: "¿Hay una farmacia aquí cerca?" },
      { it: "È lontano? — No, è a cinque minuti a piedi.", es: "¿Está lejos? — No, está a cinco minutos a pie." },
      { it: "Sempre diritto e poi a destra.", es: "Todo recto y luego a la derecha." },
      { it: "Grazie mille! — Prego.", es: "¡Muchísimas gracias! — De nada." },
    ],
    tips: ["Scusi para llamar la atención antes de preguntar", "Los italianos gesticulan: las indicaciones suelen venir con las manos", "a piedi = a pie"],
    tutorSeed: "Role-play: io sono un turista perso in centro, tu sei un passante italiano gentile. Ti chiedo indicazioni per il museo.",
  },
  {
    id: "cs-4", emoji: "🏨", title: "Check-in en el hotel", level: "A2",
    phrases: [
      { it: "Buonasera, ho una prenotazione a nome García.", es: "Buenas noches, tengo una reserva a nombre García." },
      { it: "Vorrei una camera silenziosa, se possibile.", es: "Querría una habitación tranquila, si es posible." },
      { it: "La colazione è inclusa?", es: "¿Está incluido el desayuno?" },
      { it: "A che ora è il check-out?", es: "¿A qué hora es el check-out?" },
      { it: "Potrebbe chiamarmi un taxi?", es: "¿Podría llamarme un taxi?" },
    ],
    tips: ["El registro formal (Lei) es estándar en recepción", "vorrei + poderia = la pareja de oro de la cortesía", "a nome di = a nombre de"],
    tutorSeed: "Role-play: io arrivo in hotel e faccio il check-in, tu sei il receptionist. Accogliemi e chiedi il mio nome.",
  },
  {
    id: "cs-5", emoji: "💼", title: "Entrevista de trabajo", level: "B1",
    phrases: [
      { it: "Buongiorno, grazie per l'opportunità.", es: "Buenos días, gracias por la oportunidad." },
      { it: "Ho una laurea in economia e tre anni di esperienza.", es: "Tengo un título en economía y tres años de experiencia." },
      { it: "Sono una persona precisa e motivata.", es: "Soy una persona precisa y motivada." },
      { it: "Quali sarebbero le mie responsabilità?", es: "¿Cuáles serían mis responsabilidades?" },
      { it: "Quando potrei avere un riscontro?", es: "¿Cuándo podría tener una respuesta?" },
    ],
    tips: ["En la entrevista se usa Lei hasta que lo propongan", "El condicional (sarebbero, potrei) suena profesional", "Preguntar al final demuestra interés"],
    tutorSeed: "Role-play: tu sei il responsabile delle risorse umane, io sono un candidato. Comincia accogliendomi e chiedendomi di parlarti di me.",
  },
  {
    id: "cs-6", emoji: "🌍", title: "Debate: ambiente y sociedad", level: "B2",
    phrases: [
      { it: "A mio avviso, il problema è strutturale.", es: "En mi opinión, el problema es estructural." },
      { it: "Se tutti riducessero i rifiuti, l'impatto sarebbe enorme.", es: "Si todos redujeran la basura, el impacto sería enorme." },
      { it: "Sono d'accordo fino a un certo punto, tuttavia…", es: "Estoy de acuerdo hasta cierto punto, sin embargo…" },
      { it: "Bisogna distinguere tra…", es: "Hay que distinguir entre…" },
      { it: "In conclusione, ritengo che…", es: "En conclusión, considero que…" },
    ],
    tips: ["El subjuntivo imperfecto tras se hipotético es la marca B2", "Matiza: fino a un certo punto, in un certo senso", "Los italianos interrumpen: es normal, no es descortesía"],
    tutorSeed: "Dibattito: parliamo di turismo di massa e ambiente nelle città italiane. Esponi la tua tesi e io la discuterò con te in italiano.",
  },
];
