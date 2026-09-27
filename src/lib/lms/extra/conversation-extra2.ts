import type { ConversationScenario } from "../types";

/* ── Escenarios de conversación EXTRA · paquete v4.0 ───────────────── */

export const CONVERSATION_EXTRA_2: ConversationScenario[] = [
  {
    id: "cs-13", emoji: "📱", title: "Hacer planes por WhatsApp", level: "A2",
    phrases: [
      { it: "Ci vediamo alle otto al solito posto?", es: "¿Nos vemos a las ocho en el sitio de siempre?" },
      { it: "Perfetto, ci sto!", es: "Perfecto, ¡me apunto!" },
      { it: "Non ce la faccio, mi dispiace. Facciamo domani?", es: "No puedo, lo siento. ¿Lo dejamos para mañana?" },
      { it: "Ti scrivo quando esco.", es: "Te escribo cuando salga." },
      { it: "Ti ho mandato un vocale, ascoltalo!", es: "Te mandé un mensaje de voz, ¡escúchalo!" },
      { it: "Sto arrivando, dammi cinque minuti!", es: "Estoy llegando, ¡dame cinco minutos!" },
    ],
    tips: [
      "Ci sto (me apunto) es la respuesta entusiasta más corta del italiano",
      "Non ce la faccio = no puedo / no llego: ce la es obligatorio",
      "El viva voce (mensaje de voz) es el medio nacional: si no te gusta, mala suerte",
    ],
    tutorSeed: "Simuliamo una chat: ci mettiamo d'accordo per uscire stasera. Proposta, obiezioni, orario e luogo. Scrivimi come se fosse WhatsApp.",
  },
  {
    id: "cs-14", emoji: "🍽️", title: "En la mesa: sobremesa y cumplidos", level: "B1",
    phrases: [
      { it: "Complimenti allo chef, era tutto buonissimo!", es: "¡Enhorabuena al chef, estaba todo buenísimo!" },
      { it: "Ti va di fare il bis?", es: "¿Te apetece repetir?" },
      { it: "Non ne posso più, sono pieno!", es: "No puedo más, ¡estoy lleno!" },
      { it: "Assaggia questo, è una delizia.", es: "Prueba esto, es una delicia." },
      { it: "Chi ha fatto questo dolce? È la fine del mondo.", es: "¿Quién hizo este postre? Es el fin del mundo." },
      { it: "Rimaniamo a tavola ancora un po'?", es: "¿Nos quedamos a la mesa un rato más?" },
    ],
    tips: [
      "La sobremesa italiana es sagrada: nadie se levanta hasta que el anfitrión lo sugiere",
      "El cumplido clásico: era tutto perfetto / sei un artista (a la persona que cocinó)",
      " Sono pieno (lleno) funciona en informal; en la mesa formal mejor: grazie, è stato squisito",
    ],
    tutorSeed: "Sono l'ospite a cena da te: fai i complimenti per la cena, chiedi la ricetta, offre il bis. Poi passiamo al dolce e alla sobremesa.",
  },
  {
    id: "cs-15", emoji: "🤒", title: "Ir al médico y explicar síntomas", level: "B1",
    phrases: [
      { it: "Dottore, da tre giorni ho la febbre.", es: "Doctor, desde hace tres días tengo fiebre." },
      { it: "Mi fa male la gola quando deglutisco.", es: "Me duele la garganta al tragar." },
      { it: "Ho preso la tachipirina, ma non passa.", es: "He tomado paracetamol, pero no pasa." },
      { it: "Mi prescribe qualcosa di più forte?", es: "¿Me receta algo más fuerte?" },
      { it: "Quanto devo stare a riposo?", es: "¿Cuánto tengo que estar en reposo?" },
      { it: "Devo tornare se non migliora?", es: "¿Debo volver si no mejoro?" },
    ],
    tips: [
      "Mi fa male + la parte del cuerpo (mi fa male la testa): con fare, no con doler",
      "El Paracetamol italiano se llama Tachipirina: nombre de pila nacional",
      "Il certificato medico (el justificante) es el objetivo real de toda visita",
    ],
    tutorSeed: "Sei il medico di base: ti descrivo i sintomi (febbre, gola, tosse) e mi dai indicazioni, ricetta e giorni di riposo.",
  },
  {
    id: "cs-16", emoji: "🏠", title: "Buscar piso de alquiler", level: "B2",
    phrases: [
      { it: "Buongiorno, chiamo per l'annuncio dell'appartamento.", es: "Buenos días, llamo por el anuncio del piso." },
      { it: "È ancora libero? Quando si può visitare?", es: "¿Sigue libre? ¿Cuándo se puede visitar?" },
      { it: "L'affitto è mensile? Le spese sono incluse?", es: "¿El alquiler es mensual? ¿Los gastos están incluidos?" },
      { it: "Serve la caparra? Quante mensilità?", es: "¿Hace falta fianza? ¿Cuántas mensualidades?" },
      { it: "L'appartamento è arredato o vuoto?", es: "¿El piso está amueblado o vacío?" },
      { it: "Il contratto è a cedolare secca?", es: "¿El contrato es con retención plana (cedolare secca)?" },
    ],
    tips: [
      "Las tres preguntas de oro: spese incluse? (¿gastos incluidos?), caparra (fianza), zona (barrio)",
      "Affitto arredato/vuoto: en Italia muchos pisos se alquilan sin muebles ni cocina",
      "La cedolare secca es el régimen fiscal del alquiler: preguntar por ella da una imagen de experto",
    ],
    tutorSeed: "Sono il proprietario di un appartamento in centro: telefoni per informarti, chiedi affitto, spese, caparra e visiti. Trattiamo anche il contratto.",
  },
  {
    id: "cs-17", emoji: "💼", title: "La entrevista de trabajo", level: "B2",
    phrases: [
      { it: "Buongiorno, grazie per avermi ricevuto.", es: "Buenos días, gracias por recibirme." },
      { it: "Mi permetta di presentarmi in breve.", es: "Permítame presentarme brevemente." },
      { it: "Ho maturato cinque anni di esperienza nel settore.", es: "He acumulado cinco años de experiencia en el sector." },
      { it: "Cosa l'ha spinta a candidarsi da noi?", es: "¿Qué le impulsó a postularse con nosotros?" },
      { it: "Quali sono i suoi punti di forza e di debolezza?", es: "¿Cuáles son sus puntos fuertes y débiles?" },
      { it: "Quando potrei avere un riscontro?", es: "¿Cuándo podría tener una respuesta?" },
    ],
    tips: [
      "El ital-pronombre: mi permetta (formal), nunca me permita",
      "Candidarsi = postularse: verbo reflexivo muy corporativo",
      "Punto di forza / punto di debolezza: la pareja de oro de toda entrevista",
    ],
    tutorSeed: "Simuliamo un colloquio di lavoro: tu sei il selezionatore, io il candidato. Domande classiche: presentati, esperienza, punti di forza, aspettative economiche.",
  },
  {
    id: "cs-18", emoji: "🗳️", title: "Debatir (con elegancia) sobre política", level: "C1",
    phrases: [
      { it: "Se mi permette, la vedo diversamente.", es: "Si me lo permite, lo veo de otra manera." },
      { it: "Il punto, a mio avviso, è un altro.", es: "El punto, a mi juicio, es otro." },
      { it: "Concordo in parte, però bisognerebbe considerare…", es: "Estoy de acuerdo en parte, pero habría que considerar…" },
      { it: "I dati, peraltro, dicono il contrario.", es: "Los datos, por lo demás, dicen lo contrario." },
      { it: "Resta il fatto che…", es: "Queda el hecho de que…" },
      { it: "In fin dei conti, la questione è un'altra.", es: "Al fin y al cabo, la cuestión es otra." },
    ],
    tips: [
      "El desacuerdo elegante se abre con se mi permette o a mio avviso: nunca con no, hai torto",
      "Peraltro, d'altronde, in fin dei conti: la tríada de conectores del debate culto",
      "En Italia, política en la mesa es deporte nacional: se discute para convivir, no para ganar",
    ],
    tutorSeed: "Dibattito accademico: tema: «Il lavoro da remoto fa bene all'Italia?». Tu sostieni la tesi, io l'antitesi. Usa connettivi eleganti e rispondi con argomenti.",
  },
];
