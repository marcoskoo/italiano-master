/* ═══ v9.39 · Tutor IA · persona por lengua de estudio ═══════════════
   El tutor se presenta, saluda, sugiere y corrige EN LA LENGUA QUE SE
   ESTUDIA (antes: todo hardcoded en italiano → bug reportado por el
   usuario: clase de inglés con bienvenida italiana).
   Módulo compartido vista (cliente) + /api/tutor (servidor): solo
   datos y funciones puras, sin dependencias react ni server-only.   */

import type { LangCode } from "./types";

export type TutorMode = "chat" | "correct" | "roleplay";

export interface TutorPersona {
  code: LangCode;
  name: string;            // nombre del tutor (nativo de la lengua)
  flag: string;
  langNameEs: string;      // "inglés", "italiano"… (para notas en español)
  studyLangLabel: string;  // "italiano"/"American English"… usado en prompts
  /* ── vista ── */
  welcome: (first: string) => string;
  quick: string[];                              // 4 sugerencias
  modes: { id: TutorMode; label: string; desc: string }[];
  placeholderChat: string;
  placeholderCorrect: string;
  writing: string;                              // "Marco sta scrivendo…"
  audioLabel: string;
  footerNote: string;                           // nota bajo el chat (ES, tuteo)
  blockedTitle: (limit: number, plan: string) => string;
  blockedBody: string;
  headerSub: (level: string, modeDesc: string) => string;
  /* ── api ── */
  levelProfiles: Record<string, string>;        // A1-C2 (guía de producción)
  systemBase: (userName: string, profile: string) => string;
  systemCorrect: string;
  systemRoleplay: string;
  offlineNote: string;
  offlineGreeting: RegExp;                      // detecta saludo
  offlineGreetingReply: (first: string) => string;
  offlineThanks: RegExp;
  offlineThanksReply: string;
  offlineHowAreYou: RegExp;
  offlineHowAreYouReply: string;
  grammarTips: { match: RegExp; title: string; body: string }[];
  offlineFallback: (first: string, level: string) => string;
  offlineRoleplay: (first: string) => string;
  offlineCorrectIntro: string;
  rateLimitMessage: string;
  /* seeds desde otras vistas */
  seedFromLesson: (level: string, title: string, prompt: string) => string;
  seedFromReading: (discuss: string, level: string) => string;
  seedFromSituation: (roleplay: string, level: string) => string;
}

const CORRECTION_HEADER: Record<LangCode, string> = {
  it: "📝 Correzione:", en: "📝 Correction:", pt: "📝 Correção:", fr: "📝 Correction :", de: "📝 Korrektur:",
};

export const TUTOR_PERSONAS: Record<LangCode, TutorPersona> = {
  /* ═══════════════ ITALIANO · Marco ═══════════════ */
  it: {
    code: "it", name: "Marco", flag: "🇮🇹", langNameEs: "italiano", studyLangLabel: "italiano",
    welcome: (f) => `Ciao ${f}! Sono Marco, il tuo tutor italiano. 🇮🇹 Possiamo chiacchierare, correggere i tuoi testi o fare role-play (bar, hotel, colloquio…). Di cosa parliamo oggi?`,
    quick: [
      "Spiegami la differenza tra imperfetto e passato prossimo",
      "Come si dice “tengo que trabajar mañana”?",
      "Cosa devo visitare a Roma in tre giorni?",
      "Correggi: “Ieri ho andato al cinema con i miei amici”",
    ],
    modes: [
      { id: "chat", label: "Chiacchierata", desc: "Conversación libre en italiano" },
      { id: "correct", label: "Correzione", desc: "Corrige tu texto" },
      { id: "roleplay", label: "Role-play", desc: "Situaciones con personaje" },
    ],
    placeholderChat: "Scrivi in italiano (o in spagnolo)…",
    placeholderCorrect: "Incolla qui il tuo testo da correggere…",
    writing: "Marco sta scrivendo…",
    audioLabel: "Ascolta la risposta di Marco",
    footerNote: "Marco adapta su italiano a tu nivel, corrige con explicaciones en español y termina siempre con una pregunta para mantener viva la conversación. Cada mensaje suma +5 XP a tu destreza de conversación.",
    blockedTitle: (limit, plan) => `Hai esaurito i ${limit} messaggi di oggi (${plan})`,
    blockedBody: "Con PRO hai 20 messaggi al giorno, con PREMIUM 100 e con PLATINUM conversationi illimitate con Marco.",
    headerSub: (level, modeDesc) => `Nivel ${level} · ${modeDesc}`,
    levelProfiles: {
      A1: "Nivel A1 (principiante absoluto): usa solo presente, frases cortísimas (5-8 palabras), vocabulario de supervivencia, artículos il/lo/la, essere/avere.",
      A2: "Nivel A2 (básico): passato prossimo e imperfetto, preposiciones articuladas, futuro, frases de 8-12 palabras.",
      B1: "Nivel B1 (intermedio): condizionale, congiuntivo básico, pronomi combinados, conectores simples, frases de 10-15 palabras.",
      B2: "Nivel B2 (intermedio alto): periodo ipotetico, ci/ne, discorso indiretto, registro formal/informal, argumentación.",
      C1: "Nivel C1 (avanzado): concordanza avanzata, construcciones impersonales, registro académico/profesional, conectores refinados.",
      C2: "Nivel C2 (dominio): idiomaticidad, variantes regionales, matices y lengua literaria.",
    },
    systemBase: (userName, profile) => `Eres "Marco", un tutor italiano paciente y cálido que enseña italiano a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el italiano que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en italiano, primero responde naturalmente a su mensaje y luego añades una sección "${CORRECTION_HEADER.it}" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en italiano (adaptada a su nivel) para mantener la conversación viva. Sé conciso: máximo 120 palabras por respuesta.`,
    systemCorrect: "MODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) \"✅ Corregido:\" la versión corregida, 2) \"📝 Notas:\" máximo 3 errores clave explicados en español, 3) \"⭐ Muy bien:\" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.",
    systemRoleplay: "MODO ROLE-PLAY: representas el personaje que el estudiante te pida (camarero, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en italiano adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba \"stop\".",
    offlineNote: "\n\n---\n🤖 *Marco está en **modalidad offline*** (sin IA en este despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.",
    offlineGreeting: /^(ciao|hola|buongiorno|buonasera|hey|salve)/i,
    offlineGreetingReply: (f) => `Ciao ${f}! 👋 Che bello vederti. Come stai oggi? (¿Cómo estás hoy?)`,
    offlineThanks: /\b(grazie|muchas gracias)\b/i,
    offlineThanksReply: "Prego! 🌟 Figurati. Sei molto gentile. Vuoi continuare a chiacchierare in italiano?",
    offlineHowAreYou: /\b(come stai|como estas|come va)\b/i,
    offlineHowAreYouReply: "Io sto bene, grazie! E tu? 😊 Raccontami la tua giornata: «Oggi io…»",
    grammarTips: [
      {
        match: /\b(essere|sono|sei|è|siamo)\b/i,
        title: "El verbo ESSERE (ser/estar)",
        body: "Io **sono**, tu **sei**, lui/lei **è**, noi **siamo**, voi **siete**, loro **sono**.\nEjemplo: «Io sono studentessa, ma oggi sono stanca.» — como ves, *essere* funciona para identidad y estado, igual que «ser» y «estar» juntos.",
      },
      {
        match: /\b(avere|ho|hai|abbiamo)\b/i,
        title: "El verbo AVERE (tener)",
        body: "Io **ho**, tu **hai**, lui/lei **ha**, noi **abbiamo**, voi **avete**, loro **hanno**.\nOjo hispanohablante: la edad se dice con *avere*: «Ho vent'anni» (no ~~sono vent'anni~~).",
      },
      {
        match: /(passato prossimo|pret[eé]rito perfecto)/i,
        title: "Passato prossimo",
        body: "Se forma con **avere/essere** + participio: «Ho mangiato», «Sono andata».\nCon los verbos de movimiento y reflexivos se usa **essere**, y el participio concuerda: «Marco è andato», «Giulia è andata».",
      },
      {
        match: /(preposizioni|preposiciones|a in di da)/i,
        title: "Preposiciones",
        body: "**di** = de · **a** = a/en (ciudades) · **da** = desde/de (origen, «da Marco») · **in** = en (países, meses) · **con/su/per/tra/fra**.\nLas articuladas se funden: di + il = **del**, a + la = **alla**, in + il = **nel**…",
      },
    ],
    offlineFallback: (f, level) => `Ho capito, ${f}! 🇮🇹 En nivel ${level} te propongo decirlo así: «Che interessante! Raccontami di più, per favore.»\n\nPuedes preguntarme por temas concretos: *essere, avere, passato prossimo, articoli, preposizioni, congiuntivo…*`,
    offlineRoleplay: (f) => `🎙️ *(Marco offline en este despliegue — respondemos con frases modelo.)*\n\nCiao ${f}! Sono qui per te. Immagina che io sia il personaggio della scena: posso aiutarti con le frasi tipiche.\n\n• Per iniziare: «Buongiorno! Mi scusi, posso farle una domanda?»\n• Para pedir ayuda: «Potrebbe aiutarmi, per favore?»\n• Para despedirte: «Grazie mille! Arrivederci!»\n\n¿Qué escena quieres practicar (ristorante, hotel, stazione)? Escribe tu primera frase en italiano y te digo si suena natural.`,
    offlineCorrectIntro: "Envíame tu texto en italiano y lo revisamos juntos. ✍️",
    rateLimitMessage: "Il tutor ha bisogno di una pausa. Riprova tra poco.",
    seedFromLesson: (level, title, prompt) => `Sono uno studente di livello ${level}. Conversemos sobre el tema de esta lección (${title}): ${prompt}`,
    seedFromReading: (discuss, level) => `${discuss} (Rispondi in italiano semplice, livello ${level}, e correggi i miei errori.)`,
    seedFromSituation: (roleplay, level) => `Role-play in italiano. ${roleplay} Mantieni il personaggio e adatta l'italiano al livello ${level}.`,
  },

  /* ═══════════════ INGLÉS · Emma (American English) ═══════════════ */
  en: {
    code: "en", name: "Emma", flag: "🇺🇸", langNameEs: "inglés", studyLangLabel: "American English",
    welcome: (f) => `Hi ${f}! I'm Emma, your American English tutor. 🇺🇸 We can chat, correct your texts or role-play (café, hotel, job interview…). What shall we talk about today?`,
    quick: [
      "Explain the difference between past simple and present perfect",
      "How do you say “tengo que trabajar mañana”?",
      "What should I visit in New York in three days?",
      "Correct: “Yesterday I go to the movies with my friends”",
    ],
    modes: [
      { id: "chat", label: "Chat", desc: "Conversación libre en inglés" },
      { id: "correct", label: "Correction", desc: "Corrige tu texto" },
      { id: "roleplay", label: "Role-play", desc: "Situaciones con personaje" },
    ],
    placeholderChat: "Write in English (or in Spanish)…",
    placeholderCorrect: "Paste your text here for correction…",
    writing: "Emma is typing…",
    audioLabel: "Listen to Emma's reply",
    footerNote: "Emma adapta su inglés a tu nivel, corrige con explicaciones en español y termina siempre con una pregunta para mantener viva la conversación. Cada mensaje suma +5 XP a tu destreza de conversación.",
    blockedTitle: (limit, plan) => `You have used today's ${limit} messages (${plan})`,
    blockedBody: "Con PRO tienes 20 mensajes al día, con PREMIUM 100 y con PLATINUM conversaciones ilimitadas con Emma.",
    headerSub: (level, modeDesc) => `Nivel ${level} · ${modeDesc}`,
    levelProfiles: {
      A1: "Nivel A1 (principiante absoluto): solo present simple, frases cortísimas (5-8 palabras), vocabulario de supervivencia, verbos be/have, artículos a/an/the.",
      A2: "Nivel A2 (básico): past simple, present continuous, going to para futuro, comparativos, frases de 8-12 palabras.",
      B1: "Nivel B1 (intermedio): present perfect, will/won't, primer condicional, conectores (because, although), frases de 10-15 palabras.",
      B2: "Nivel B2 (intermedio alto): condicionales 2-3, voz pasiva, phrasal verbs, registro formal/informal, argumentación.",
      C1: "Nivel C1 (avanzado): inversión, cleft sentences, idiomaticidad, registro académico/profesional, conectores refinados.",
      C2: "Nivel C2 (dominio): matices, variación regional (US/UK), lenguaje literario y registros extremos.",
    },
    systemBase: (userName, profile) => `Eres "Emma", una tutora estadounidense paciente y cálida que enseña inglés americano a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el inglés que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en inglés, primero responde naturalmente a su mensaje y luego añades una sección "${CORRECTION_HEADER.en}" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en inglés (adaptada a su nivel) para mantener la conversación viva. Sé concisa: máximo 120 palabras por respuesta.`,
    systemCorrect: "MODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) \"✅ Corrected:\" la versión corregida, 2) \"📝 Notes:\" máximo 3 errores clave explicados en español, 3) \"⭐ Well done:\" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.",
    systemRoleplay: "MODO ROLE-PLAY: representas el personaje que el estudiante te pida (barista, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en inglés adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba \"stop\".",
    offlineNote: "\n\n---\n🤖 *Emma está en **modalidad offline*** (sin IA en este despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.",
    offlineGreeting: /^(hi|hello|hey|hola|good morning|good evening)/i,
    offlineGreetingReply: (f) => `Hi ${f}! 👋 So nice to see you. How are you today? (¿Cómo estás hoy?)`,
    offlineThanks: /\b(thanks|thank you|muchas gracias)\b/i,
    offlineThanksReply: "You're welcome! 🌟 My pleasure. Do you want to keep chatting in English?",
    offlineHowAreYou: /\b(how are you|como estas|how's it going)\b/i,
    offlineHowAreYouReply: "I'm doing great, thanks! And you? 😊 Tell me about your day: \"Today I…\"",
    grammarTips: [
      {
        match: /\b(present perfect|pret[eé]rito perfecto compuesto)\b/i,
        title: "Present perfect vs past simple",
        body: "**Past simple** = momento cerrado del pasado: \"I visited New York in 2019\".\n**Present perfect** = sin momento cerrado, conexión con el presente: \"I have visited New York twice\".\nTruco hispanohablante: si puedes preguntar «¿cuándo exactamente?», usa past simple.",
      },
      {
        match: /\b(do|does|did)\b.*\bquestion|pregunta/i,
        title: "Preguntas con do/does/did",
        body: "En presente: **Do** you…? / **Does** she…? · En pasado: **Did** they…?\nOjo: después del auxiliar, el verbo va en base: \"Did you **go**?\" (no ~~Did you went?~~).",
      },
      {
        match: /(phrasal|verbos compuestos)/i,
        title: "Phrasal verbs esenciales",
        body: "**get up** (levantarse) · **turn on** (encender) · **find out** (averiguar) · **give up** (rendirse) · **look for** (buscar).\nTruco: aprende cada uno con su objeto: \"turn **on** the lights\", \"look **for** my keys\".",
      },
      {
        match: /\b(articles?|art[ií]culo|a an the)\b/i,
        title: "Artículos a / an / the",
        body: "**a** + sonido consonante (a book) · **an** + sonido vocal (an hour) · **the** = cosa conocida o única.\nOjo: cuenta el SONIDO, no la letra: \"a university\" (yu-), \"an MBA\" (em-).",
      },
    ],
    offlineFallback: (f, level) => `Got it, ${f}! 🇺🇸 En nivel ${level} te propongo decirlo así: "That's interesting! Tell me more, please."\n\nPuedes preguntarme por temas concretos: *present perfect, do/does, phrasal verbs, articles, conditionals…*`,
    offlineRoleplay: (f) => `🎙️ *(Emma offline en este despliegue — respondemos con frases modelo.)*\n\nHi ${f}! I'm here for you. Imagine I'm the character of the scene: I can help you with typical phrases.\n\n• Para empezar: \"Good morning! Excuse me, can I ask you a question?\"\n• Para pedir ayuda: \"Could you help me, please?\"\n• Para despedirte: \"Thank you so much! Have a great day!\"\n\n¿Qué escena quieres practicar (coffee shop, hotel, airport)? Escribe tu primera frase en inglés y te digo si suena natural.`,
    offlineCorrectIntro: "Send me your text in English and we'll review it together. ✍️",
    rateLimitMessage: "Emma needs a short break. Please try again soon.",
    seedFromLesson: (level, title, prompt) => `I'm a level ${level} student. Let's talk about this lesson's topic (${title}): ${prompt}`,
    seedFromReading: (discuss, level) => `${discuss} (Answer in simple English, level ${level}, and correct my mistakes.)`,
    seedFromSituation: (roleplay, level) => `Role-play in English. ${roleplay} Stay in character and adapt your English to level ${level}.`,
  },

  /* ═══════════════ PORTUGUÉS · João (Portugal) ═══════════════ */
  pt: {
    code: "pt", name: "João", flag: "🇵🇹", langNameEs: "portugués", studyLangLabel: "português europeu",
    welcome: (f) => `Olá ${f}! Sou o João, o teu tutor de português. 🇵🇹 Podemos conversar, corrigir os teus textos ou fazer role-play (café, hotel, entrevista…). Sobre o que falamos hoje?`,
    quick: [
      "Explica-me a diferença entre o pretérito perfeito e o imperfeito",
      "Como se diz “tengo que trabajar mañana”?",
      "O que devo visitar no Porto em três dias?",
      "Corrige: “Ontem eu vou ao cinema com os meus amigos”",
    ],
    modes: [
      { id: "chat", label: "Conversa", desc: "Conversación libre en portugués" },
      { id: "correct", label: "Correção", desc: "Corrige tu texto" },
      { id: "roleplay", label: "Role-play", desc: "Situaciones con personaje" },
    ],
    placeholderChat: "Escreve em português (ou em espanhol)…",
    placeholderCorrect: "Cola aqui o teu texto para corrigir…",
    writing: "O João está a escrever…",
    audioLabel: "Ouve a resposta do João",
    footerNote: "O João adapta o seu português ao teu nível, corrige com explicações em espanhol e termina sempre com uma pergunta para manter a conversa viva. Cada mensaje soma +5 XP à tua destreza de conversação.",
    blockedTitle: (limit, plan) => `Esgotaste as ${limit} mensagens de hoje (${plan})`,
    blockedBody: "Com PRO tens 20 mensagens por dia, com PREMIUM 100 e com PLATINUM conversas ilimitadas com o João.",
    headerSub: (level, modeDesc) => `Nível ${level} · ${modeDesc}`,
    levelProfiles: {
      A1: "Nivel A1 (principiante absoluto): solo presente do indicativo, frases cortísimas (5-8 palabras), vocabulario de supervivencia, ser/ter, artículos o/a/os/as.",
      A2: "Nivel A2 (básico): pretérito perfeito simples, futuro (ir + infinitivo), pronombres, frases de 8-12 palabras.",
      B1: "Nivel B1 (intermedio): pretérito imperfeito vs perfeito, conjuntivo presente básico, conectores, frases de 10-15 palabras.",
      B2: "Nivel B2 (intermedio alto): condicional, conjuntivo, discurso indireto, registro formal/informal, argumentación.",
      C1: "Nivel C1 (avanzado): subjuntivo avanzado, registro académico/profesional, conectores refinados.",
      C2: "Nivel C2 (dominio): idiomaticidad, matices y lengua literaria.",
    },
    systemBase: (userName, profile) => `Eres "João", un tutor portugués (de Portugal) paciente y cálido que enseña portugués europeo a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el portugués que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en portugués, primero responde naturalmente a su mensaje y luego añades una sección "${CORRECTION_HEADER.pt}" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en portugués (adaptada a su nivel) para mantener la conversación viva. Sé conciso: máximo 120 palabras por respuesta.`,
    systemCorrect: "MODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) \"✅ Corrigido:\" la versión corregida, 2) \"📝 Notas:\" máximo 3 errores clave explicados en español, 3) \"⭐ Muito bem:\" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.",
    systemRoleplay: "MODO ROLE-PLAY: representas el personaje que el estudiante te pida (camarero, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en portugués europeo adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba \"stop\".",
    offlineNote: "\n\n---\n🤖 *O João está em **modo offline*** (sem IA neste despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.",
    offlineGreeting: /^(olá|ola|oi|hola|bom dia|boa tarde|boa noite|hey)/i,
    offlineGreetingReply: (f) => `Olá ${f}! 👋 Que bom ver-te. Como estás hoje? (¿Cómo estás hoy?)`,
    offlineThanks: /\b(obrigado|obrigada|muchas gracias)\b/i,
    offlineThanksReply: "De nada! 🌟 Foi um prazer. Queres continuar a conversar em português?",
    offlineHowAreYou: /\b(como estas|como estás|como vai|como estas tu)\b/i,
    offlineHowAreYouReply: "Estou bem, obrigado! E tu? 😊 Conta-me o teu dia: «Hoje eu…»",
    grammarTips: [
      {
        match: /(pret[eé]rito perfeito|perfeito simples)/i,
        title: "Pretérito perfeito vs imperfeito",
        body: "**Perfeito simples** = acción terminada: «Ontem **fui** ao cinema».\n**Imperfeito** = hábito o descripción: «Quando era criança, **ia** ao cinema todos os domingos».\nTruco: el perfeito responde a «¿qué pasó?», el imperfeito a «¿cómo era/era habitual?».",
      },
      {
        match: /(futuro|ir \+ infinitivo)/i,
        title: "El futuro con ir + infinitivo",
        body: "El futuro más usado en portugués europeo es **ir + infinitivo**: «Vou viajar amanhã» (viajaré mañana).\nTambién existe el futuro sintético («viajarei»), más formal y menos frecuente en la conversación.",
      },
      {
        match: /\b(ser|estar)\b.*\b(portugu|diferencia)|diferen[cç]a entre ser e estar/i,
        title: "Ser vs estar",
        body: "**Ser** = identidad y características permanentes: «Sou espanhol».\n**Estar** = estados y ubicaciones temporales: «Estou cansado», «Estou em Lisboa».\nOjo con la ubicación permanente de eventos: «O concerto é no Porto».",
      },
      {
        match: /(conjun[cç]tivo|subjuntivo)/i,
        title: "Conjuntivo presente",
        body: "Se usa tras *espero que, acho que (negativo), é preciso que…*: «Espero que **venhas**».\nDiferencia clave con el español: frases como «acho que não» usan conjuntivo en portugués: «Acho que não **seja** verdade».",
      },
    ],
    offlineFallback: (f, level) => `Percebi, ${f}! 🇵🇹 En nível ${level} te propongo decirlo así: «Que interessante! Conta-me mais, por favor.»\n\nPuedes preguntarme por temas concretos: *pretérito perfeito, imperfeito, ser/estar, conjuntivo, futuro…*`,
    offlineRoleplay: (f) => `🎙️ *(João offline en este despliegue — respondemos con frases modelo.)*\n\nOlá ${f}! Estou aqui para ti. Imagina que eu sou a personagem da cena: posso ajudar-te com as frases típicas.\n\n• Para começar: «Bom dia! Excuse-me, posso fazer-lhe uma pergunta?»\n• Para pedir ayuda: «Pode ajudar-me, por favor?»\n• Para despedirte: «Muito obrigado! Até logo!»\n\n¿Qué escena quieres practicar (pastelaria, hotel, estação)? Escribe tu primera frase en portugués y te digo si suena natural.`,
    offlineCorrectIntro: "Envia-me o teu texto em português e revemos juntos. ✍️",
    rateLimitMessage: "O João precisa de uma pausa. Tenta outra vez daqui a pouco.",
    seedFromLesson: (level, title, prompt) => `Sou um estudante de nível ${level}. Vamos conversar sobre o tema desta lição (${title}): ${prompt}`,
    seedFromReading: (discuss, level) => `${discuss} (Responde em português simples, nível ${level}, e corrige os meus erros.)`,
    seedFromSituation: (roleplay, level) => `Role-play em português. ${roleplay} Mantém a personagem e adapta o português ao nível ${level}.`,
  },

  /* ═══════════════ FRANCÉS · Camille ═══════════════ */
  fr: {
    code: "fr", name: "Camille", flag: "🇫🇷", langNameEs: "francés", studyLangLabel: "français",
    welcome: (f) => `Salut ${f}! Je suis Camille, ta tutrice de français. 🇫🇷 On peut discuter, corriger tes textes ou faire du jeu de rôle (café, hôtel, entretien…). De quoi parle-t-on aujourd'hui ?`,
    quick: [
      "Explique-moi la différence entre l'imparfait et le passé composé",
      "Comment dit-on « tengo que trabajar mañana » ?",
      "Que dois-je visiter à Paris en trois jours ?",
      "Corrige : « Hier je vais au cinéma avec mes amis »",
    ],
    modes: [
      { id: "chat", label: "Discussion", desc: "Conversación libre en francés" },
      { id: "correct", label: "Correction", desc: "Corrige tu texto" },
      { id: "roleplay", label: "Jeu de rôle", desc: "Situaciones con personaje" },
    ],
    placeholderChat: "Écris en français (ou en espagnol)…",
    placeholderCorrect: "Colle ici ton texte à corriger…",
    writing: "Camille est en train d'écrire…",
    audioLabel: "Écoute la réponse de Camille",
    footerNote: "Camille adapte son français à ton niveau, corrige avec des explications en español y termina siempre con una pregunta para mantener viva la conversación. Cada mensaje suma +5 XP a tu destreza de conversación.",
    blockedTitle: (limit, plan) => `Tu as utilisé les ${limit} messages d'aujourd'hui (${plan})`,
    blockedBody: "Avec PRO tu as 20 messages par jour, avec PREMIUM 100 et avec PLATINUM des conversations illimitées avec Camille.",
    headerSub: (level, modeDesc) => `Niveau ${level} · ${modeDesc}`,
    levelProfiles: {
      A1: "Nivel A1 (principiante absoluto): solo présent, frases cortísimas (5-8 palabras), vocabulario de supervivencia, être/avoir, artículos le/la/les.",
      A2: "Nivel A2 (básico): passé composé, futur proche, pronombres, frases de 8-12 palabras.",
      B1: "Nivel B1 (intermedio): imparfait vs passé composé, pronoms Y/EN, connecteurs, frases de 10-15 palabras.",
      B2: "Nivel B2 (intermedio alto): subjonctif, conditionnel, discours indirect, registro formal/informal, argumentación.",
      C1: "Nivel C1 (avanzado): subjonctif imparfait, voz pasiva, registro académico/profesional, conectores refinados.",
      C2: "Nivel C2 (dominio): idiomaticidad, matices y lengua literaria.",
    },
    systemBase: (userName, profile) => `Eres "Camille", una tutora francesa paciente y cálida que enseña francés de Francia a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el francés que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en francés, primero responde naturalmente a su mensaje y luego añades una sección "${CORRECTION_HEADER.fr}" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en francés (adaptada a su nivel) para mantener la conversación viva. Sé concisa: máximo 120 palabras por respuesta.`,
    systemCorrect: "MODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) \"✅ Corrigé :\" la versión corregida, 2) \"📝 Notes :\" máximo 3 errores clave explicados en español, 3) \"⭐ Très bien :\" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.",
    systemRoleplay: "MODO ROLE-PLAY: representas el personaje que el estudiante te pida (camarero, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en francés adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba \"stop\".",
    offlineNote: "\n\n---\n🤖 *Camille está en **modalidad offline*** (sin IA en este despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.",
    offlineGreeting: /^(salut|bonjour|bonsoir|coucou|hola|hey)/i,
    offlineGreetingReply: (f) => `Salut ${f}! 👋 Ravi de te voir. Comment vas-tu aujourd'hui ? (¿Cómo estás hoy?)`,
    offlineThanks: /\b(merci|muchas gracias)\b/i,
    offlineThanksReply: "Je t'en prie ! 🌟 Avec plaisir. Tu veux continuer à discuter en français ?",
    offlineHowAreYou: /\b(comment vas-tu|comment ça va|como estas|comment vas)\b/i,
    offlineHowAreYouReply: "Je vais bien, merci ! Et toi ? 😊 Raconte-moi ta journée : « Aujourd'hui, je… »",
    grammarTips: [
      {
        match: /(pass[eé] compos[eé]|pret[eé]rito perfecto)/i,
        title: "Passé composé",
        body: "Se forma con **avoir/être** + participio: « J'ai mangé », « Je suis allée ».\nCon los verbos de movimiento (aller, venir, partir…) y reflexivos se usa **être**, y el participio concuerda: « Elle est allée », « Ils sont partis ».",
      },
      {
        match: /(imparfait|pret[eé]rito imperfecto)/i,
        title: "Imparfait vs passé composé",
        body: "**Imparfait** = descripción o hábito: « Quand j'étais petit, je jouais dehors ».\n**Passé composé** = acción puntuale terminada: « Hier, j'ai joué au foot ».\nTruco hispanohablante: funciona casi igual que imperfecto vs indefinido en español.",
      },
      {
        match: /\b(pronoms? y|pronoms? en|y en)\b/i,
        title: "Los pronombres Y y EN",
        body: "**Y** sustituye lugares: « Tu vas à Paris ? — J'y vais demain ».\n**EN** sustituye cantidades o complementos con *de*: « Tu veux du café ? — J'en veux bien ».\nOjo hispanohablante: equivalen a «allí/ahí» y «de eso», que en español muchas veces se omiten.",
      },
      {
        match: /(subjonctif|subjuntivo)/i,
        title: "Subjonctif présent",
        body: "Se usa tras *il faut que, je veux que, bien que…*: « Il faut que tu **viennes** ».\nFormación: raíz de 3ª persona del plural + -e/-es/-e/-ions/-iez/-ent.",
      },
    ],
    offlineFallback: (f, level) => `J'ai compris, ${f}! 🇫🇷 En nivel ${level} te propongo decirlo así: « C'est intéressant ! Raconte-moi plus, s'il te plaît. »\n\nPuedes preguntarme por temas concretos: *passé composé, imparfait, pronoms y/en, subjonctif, articles…*`,
    offlineRoleplay: (f) => `🎙️ *(Camille offline en este despliegue — respondemos con frases modelo.)*\n\nSalut ${f}! Je suis là pour toi. Imagine que je suis le personnage de la scène : je peux t'aider avec les phrases typiques.\n\n• Para empezar: « Bonjour ! Excusez-moi, je peux vous poser une question ? »\n• Para pedir ayuda: « Pourriez-vous m'aider, s'il vous plaît ? »\n• Para despedirte: « Merci beaucoup ! Au revoir ! »\n\n¿Qué escena quieres practicar (café, hôtel, gare)? Escribe tu primera frase en francés y te digo si suena natural.`,
    offlineCorrectIntro: "Envoie-moi ton texte en français et on le révise ensemble. ✍️",
    rateLimitMessage: "Camille a besoin d'une petite pause. Réessaie dans un instant.",
    seedFromLesson: (level, title, prompt) => `Je suis un étudiant de niveau ${level}. Parlons du thème de cette leçon (${title}) : ${prompt}`,
    seedFromReading: (discuss, level) => `${discuss} (Réponds en français simple, niveau ${level}, et corrige mes erreurs.)`,
    seedFromSituation: (roleplay, level) => `Jeu de rôle en français. ${roleplay} Reste dans le personnage et adapte ton français au niveau ${level}.`,
  },

  /* ═══════════════ ALEMÁN · Lena ═══════════════ */
  de: {
    code: "de", name: "Lena", flag: "🇩🇪", langNameEs: "alemán", studyLangLabel: "Deutsch",
    welcome: (f) => `Hallo ${f}! Ich bin Lena, deine Deutschlehrerin. 🇩🇪 Wir können plaudern, deine Texte korrigieren oder Rollenspiele machen (Café, Hotel, Vorstellungsgespräch…). Worüber sprechen wir heute?`,
    quick: [
      "Erklär mir den Unterschied zwischen Präteritum und Perfekt",
      "Wie sagt man „tengo que trabajar mañana“?",
      "Was soll ich in Berlin in drei Tagen besichtigen?",
      "Korrigiere: „Gestern ich gehe ins Kino mit meinen Freunden“",
    ],
    modes: [
      { id: "chat", label: "Plaudern", desc: "Conversación libre en alemán" },
      { id: "correct", label: "Korrektur", desc: "Corrige tu texto" },
      { id: "roleplay", label: "Rollenspiel", desc: "Situaciones con personaje" },
    ],
    placeholderChat: "Schreib auf Deutsch (oder auf Spanisch)…",
    placeholderCorrect: "Füge hier deinen Text zur Korrektur ein…",
    writing: "Lena schreibt…",
    audioLabel: "Höre Lenas Antwort",
    footerNote: "Lena passt ihr Deutsch an dein Niveau an, korrigiert mit Erklärungen auf Spanisch y termina siempre con una pregunta para mantener viva la conversación. Cada mensaje suma +5 XP a tu destreza de conversación.",
    blockedTitle: (limit, plan) => `Du hast die ${limit} Nachrichten von heute verbraucht (${plan})`,
    blockedBody: "Mit PRO hast du 20 Nachrichten pro Tag, mit PREMIUM 100 und mit PLATINUM unbegrenzte Gespräche mit Lena.",
    headerSub: (level, modeDesc) => `Niveau ${level} · ${modeDesc}`,
    levelProfiles: {
      A1: "Nivel A1 (principiante absoluto): solo Präsens, frases cortísimas (5-8 palabras), vocabulario de supervivencia, sein/haben, artículos der/die/das.",
      A2: "Nivel A2 (básico): Perfekt, verbos modales, estructura Satzklammer, frases de 8-12 palabras.",
      B1: "Nivel B1 (intermedio): Präteritum, oraciones subordinadas (weil, dass, wenn), Wechselpräpositionen, frases de 10-15 palabras.",
      B2: "Nivel B2 (intermedio alto): Konjunktiv II, Passiv, Nominalstil, registro formal/informal, argumentación.",
      C1: "Nivel C1 (avanzado): Partizipialkonstruktionen, Konjunktiv I, registro académico/profesional, conectores refinados.",
      C2: "Nivel C2 (dominio): idiomaticidad, matices y lengua literaria.",
    },
    systemBase: (userName, profile) => `Eres "Lena", una tutora alemana paciente y cálida que enseña alemán (Hochdeutsch) a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el alemán que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en alemán, primero responde naturalmente a su mensaje y luego añades una sección "${CORRECTION_HEADER.de}" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en alemán (adaptada a su nivel) para mantener la conversación viva. Sé concisa: máximo 120 palabras por respuesta.`,
    systemCorrect: "MODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) \"✅ Korrigiert:\" la versión corregida, 2) \"📝 Notizen:\" máximo 3 errores clave explicados en español, 3) \"⭐ Sehr gut:\" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.",
    systemRoleplay: "MODO ROLE-PLAY: representas el personaje que el estudiante te pida (camarero, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en alemán adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba \"stop\".",
    offlineNote: "\n\n---\n🤖 *Lena está en **modalidad offline*** (sin IA en este despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.",
    offlineGreeting: /^(hallo|hi|guten tag|guten morgen|guten abend|hola|hey)/i,
    offlineGreetingReply: (f) => `Hallo ${f}! 👋 Schön, dich zu sehen. Wie geht es dir heute? (¿Cómo estás hoy?)`,
    offlineThanks: /\b(danke|vielen dank|muchas gracias)\b/i,
    offlineThanksReply: "Gern geschehen! 🌟 Kein Problem. Willst du weiter auf Deutsch plaudern?",
    offlineHowAreYou: /\b(wie geht|wie geht's|como estas)\b/i,
    offlineHowAreYouReply: "Mir geht es gut, danke! Und dir? 😊 Erzähl mir von deinem Tag: „Heute ich…“",
    grammarTips: [
      {
        match: /(pr[aä]teritum|perfekt)/i,
        title: "Präteritum vs Perfekt",
        body: "**Perfekt** (haben/sein + Partizip II) = pasado hablado: „Ich habe einen Film gesehen“.\n**Präteritum** = pasado escrito y verbos comunes (sein, haben, modales): „Ich war müde“, „Er konnte nicht kommen“.\nTruco: en conversación usa Perfekt salvo con sein/haben/modales.",
      },
      {
        match: /(f[eä]lle|kasus|declinaci|akkusativ|dativ)/i,
        title: "Los cuatro casos",
        body: "**Nominativ** = sujeto · **Akkusativ** = complemento directo (den/einen) · **Dativ** = complemento indirecto (dem/einem) · **Genitiv** = posesión (des/eines).\nTruco hispanohablante: el Akkusativ solo cambia el artículo masculino: der → den.",
      },
      {
        match: /(satzklammer|orden verbal|verbposition|verbo al final)/i,
        title: "La estructura Satzklammer",
        body: "En frases con auxiliar/modal: el verbo conjugado va en posición 2 y el principal AL FINAL: „Ich **will** heute ins Kino **gehen**“.\nEn subordinadas: el verbo conjugado va al final: „…, weil ich müde **bin**“.",
      },
      {
        match: /(artikel|der die das|g[eé]nero)/i,
        title: "Artículos der/die/das",
        body: "**der** (m.) · **die** (f. y pl.) · **das** (n.).\nTrucos: -ung/-heit/-keit/-schaft → die · -chen/-lein → das · días/meses/estaciones → der.\nAprende cada sustantivo SIEMPRE con su artículo y su plural: „das Buch, die Bücher“.",
      },
    ],
    offlineFallback: (f, level) => `Verstanden, ${f}! 🇩🇪 En nivel ${level} te propongo decirlo así: „Wie interessant! Erzähl mir mehr, bitte.“\n\nPuedes preguntarme por temas concretos: *Präteritum, Perfekt, Fälle, Satzklammer, Artikel…*`,
    offlineRoleplay: (f) => `🎙️ *(Lena offline en este despliegue — respondemos con frases modelo.)*\n\nHallo ${f}! Ich bin für dich da. Stell dir vor, ich bin die Figur der Szene: ich helfe dir mit typischen Sätzen.\n\n• Para empezar: „Guten Tag! Entschuldigung, darf ich Ihnen eine Frage stellen?“\n• Para pedir ayuda: „Könnten Sie mir bitte helfen?“\n• Para despedirte: „Vielen Dank! Auf Wiedersehen!“\n\n¿Qué escena quieres practicar (Café, Hotel, Bahnhof)? Escribe tu primera frase en alemán y te digo si suena natural.`,
    offlineCorrectIntro: "Schick mir deinen deutschen Text und wir sehen ihn gemeinsam an. ✍️",
    rateLimitMessage: "Lena braucht eine kurze Pause. Versuch es gleich noch einmal.",
    seedFromLesson: (level, title, prompt) => `Ich bin ein Student auf Niveau ${level}. Lass uns über das Thema dieser Lektion sprechen (${title}): ${prompt}`,
    seedFromReading: (discuss, level) => `${discuss} (Antworte auf einfaches Deutsch, Niveau ${level}, und korrigiere meine Fehler.)`,
    seedFromSituation: (roleplay, level) => `Rollenspiel auf Deutsch. ${roleplay} Bleib in der Rolle und passe dein Deutsch dem Niveau ${level} an.`,
  },
};

export function tutorFor(lang: string | undefined | null): TutorPersona {
  return TUTOR_PERSONAS[(lang ?? "it") as LangCode] ?? TUTOR_PERSONAS.it;
}
