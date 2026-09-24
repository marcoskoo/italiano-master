import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

type Mode = "chat" | "correct" | "roleplay";

interface TutorRequest {
  messages: { role: "user" | "assistant"; content: string }[];
  level?: string;
  mode?: Mode;
  userName?: string;
}

const LEVEL_PROFILE: Record<string, string> = {
  A1: "Nivel A1 (principiante absoluto): usa solo presente, frases cortísimas (5-8 palabras), vocabulario de supervivencia, artículos il/lo/la, essere/avere.",
  A2: "Nivel A2 (básico): passato prossimo e imperfetto, preposiciones articuladas, futuro, frases de 8-12 palabras.",
  B1: "Nivel B1 (intermedio): condizionale, congiuntivo básico, pronomi combinados, conectores simples, frases de 10-15 palabras.",
  B2: "Nivel B2 (intermedio alto): periodo ipotetico, ci/ne, discorso indiretto, registro formal/informal, argumentación.",
  C1: "Nivel C1 (avanzado): concordanza avanzata, construcciones impersonales, registro académico/profesional, conectores refinados.",
  C2: "Nivel C2 (dominio): idiomaticidad, variantes regionales, matices y lengua literaria.",
};

function buildSystemPrompt(level: string, mode: Mode, userName: string): string {
  const profile = LEVEL_PROFILE[level] ?? LEVEL_PROFILE.A1;
  const base = `Eres "Marco", un tutor italiano paciente y cálido que enseña italiano a un estudiante hispanohablante llamado ${userName}. Las explicaciones gramaticales se dan EN ESPAÑOL; el italiano que produces se adapta al nivel del estudiante: ${profile}. Corriges con cariño: si el estudiante comete errores en italiano, primero responde naturalmente a su mensaje y luego añades una sección "📝 Correzione:" con la versión correcta y una explicación breve en español. Terminas cada respuesta con una pregunta en italiano (adaptada a su nivel) para mantener la conversación viva. Sé conciso: máximo 120 palabras por respuesta.`;
  if (mode === "correct") {
    return `${base}\nMODO CORRECCIÓN: el estudiante te envía un texto para corregir. Devuelve: 1) "✅ Corregido:" la versión corregida, 2) "📝 Notas:" máximo 3 errores clave explicados en español, 3) "⭐ Muy bien:" un acierto o progreso. Si el texto es perfecto, celébralo y sugiere una mejora estilística.`;
  }
  if (mode === "roleplay") {
    return `${base}\nMODO ROLE-PLAY: representas el personaje que el estudiante te pida (camarero, recepcionista, médico, agente de aeropuerto, taxista, entrevistador...). Mantente EN PERSONAJE con frases realistas en italiano adecuadas al nivel, pero entre paréntesis puedes dar mini-ayudas en español cuando el nivel lo requiera. Nunca rompas el personaje salvo que el estudiante escriba "stop".`;
  }
  return base;
}

/* ── Backend 1: API externa compatible con OpenAI (opcional) ──────────
   Configura TUTOR_API_BASE + TUTOR_API_KEY (+ TUTOR_MODEL) para activar
   el tutor IA completo en producción (p. ej. Vercel).                   */

async function callExternalApi(systemPrompt: string, messages: TutorRequest["messages"]): Promise<string | null> {
  const base = process.env.TUTOR_API_BASE;
  const key = process.env.TUTOR_API_KEY;
  if (!base || !key) return null;
  const res = await fetch(`${base.replace(/\/+$/, "")}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.TUTOR_MODEL || "gpt-4o-mini",
      max_tokens: 600,
      temperature: 0.7,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    }),
  });
  if (!res.ok) throw new Error(`Tutor API respondió ${res.status}`);
  const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  return json.choices?.[0]?.message?.content ?? null;
}

/* ── Backend 3: Marco offline (respuestas guiadas sin IA) ───────────── */

const OFFLINE_NOTE =
  "\n\n---\n🤖 *Marco está en **modalidad offline*** (sin IA en este despliegue). Para conversaciones libres, configura las variables `TUTOR_API_BASE`, `TUTOR_API_KEY` y `TUTOR_MODEL` (cualquier API compatible con OpenAI) en tu hosting.";

const GRAMMAR_TIPS: { match: RegExp; title: string; body: string }[] = [
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
    match: /\b(articoli?|il lo la|art[ií]culo)/i,
    title: "Artículos determinados",
    body: "**il** ragazzo (m. normal) · **lo** studente (antes de s+cons, z, gn, ps, y) · **la** ragazza · **l'**amico (vocal).\nTruco: *lo* aparece donde en español dirías «el estudiante» y en italiano suena mejor con esa forma.",
  },
  {
    match: /(congiuntivo|subjuntivo)/i,
    title: "Congiuntivo presente",
    body: "Se usa tras *penso che, credo che, spero che…*: «Penso che **sia** tardi».\nEs más vivo en italiano que el subjuntivo español: úsalo también con opiniones cotidianas.",
  },
  {
    match: /(preposizioni|preposiciones|a in di da)/i,
    title: "Preposiciones",
    body: "**di** = de · **a** = a/en (ciudades) · **da** = desde/de (origen, «da Marco») · **in** = en (países, meses) · **con/su/per/tra/fra**.\nLas articuladas se funden: di + il = **del**, a + la = **alla**, in + il = **nel**…",
  },
];

function offlineReply(mode: Mode, level: string, messages: TutorRequest["messages"], userName: string): string {
  const last = messages[messages.length - 1]?.content ?? "";
  const first = userName.split(" ")[0] || "studente";
  const low = last.toLowerCase();

  if (mode === "correct") {
    const words = last.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "Envíame tu texto en italiano y lo revisamos juntos. ✍️" + OFFLINE_NOTE;
    const issues: string[] = [];
    if (/\bsono\s+\d+\s*(anni|años)\b/i.test(last)) issues.push("«sono X anni» → **«ho X anni»**: la edad va con *avere*.");
    if (/\bpiù\s+meglior/i.test(last)) issues.push("«più migliore» → **«meglio»/«migliore»**: el comparativo ya incluye «más».");
    if (/\bio\s+(avere|essere|mangiare|andare)\b/i.test(last)) issues.push("El sujeto «io» normalmente se omite: «(io) ho», «(io) vado».");
    if (/\bperche\b/i.test(last)) issues.push("«perche» → **«perché»**: no olvides el acento.");
    const corrected = last
      .replace(/\bsono\s+(\d+)\s+anni\b/i, "ho $1 anni")
      .replace(/\bperche\b/gi, "perché")
      .replace(/\bio\s+(avere|essere|mangiare|andare)\b/gi, (_m, v) => v.toLowerCase());
    return (
      `✅ **Corregido:** «${corrected.trim()}»\n\n📝 **Notas:**\n` +
      (issues.length ? issues.map((i) => `• ${i}`).join("\n") : "• No he detectado errores frecuentes de hispanohablantes. ¡Bien hecho!") +
      `\n\n⭐ **Muy bien:** ${words.length >= 8 ? "buena longitud de frase, sigue así" : "frase clara y directa"}.` +
      OFFLINE_NOTE
    );
  }

  if (mode === "roleplay") {
    return (
      `🎙️ *(Marco offline en este despliegue — respondemos con frases modelo.)*\n\n` +
      `Ciao ${first}! Sono qui per te. Immagina che io sia il personaggio della scena: posso aiutarti con le frasi tipiche.\n\n` +
      `• Per iniziare: «Buongiorno! Mi scusi, posso farle una domanda?»\n` +
      `• Para pedir ayuda: «Potrebbe aiutarmi, per favore?»\n` +
      `• Para despedirte: «Grazie mille! Arrivederci!»\n\n` +
      `¿Qué escena quieres practicar (ristorante, hotel, stazione)? Escribe tu primera frase en italiano y te digo si suena natural.` +
      OFFLINE_NOTE
    );
  }

  // chat
  if (/^(ciao|hola|buongiorno|buonasera|hey|salve)/i.test(low.trim())) {
    return `Ciao ${first}! 👋 Che bello vederti. Come stai oggi? (¿Cómo estás hoy?)` + OFFLINE_NOTE;
  }
  if (/\b(grazie|muchas gracias)\b/i.test(low)) {
    return `Prego! 🌟 Figurati. Sei molto gentile. Vuoi continuare a chiacchierare in italiano?` + OFFLINE_NOTE;
  }
  if (/\b(come stai|como estas|come va)\b/i.test(low)) {
    return `Io sto bene, grazie! E tu? 😊 Raccontami la tua giornata: «Oggi io…»` + OFFLINE_NOTE;
  }
  for (const tip of GRAMMAR_TIPS) {
    if (tip.match.test(last)) {
      return `Buona domanda, ${first}! 📖 **${tip.title}**\n\n${tip.body}\n\nProviamo: escribe una frase usando esto y te digo cómo suena.` + OFFLINE_NOTE;
    }
  }
  return (
    `Ho capito, ${first}! 🇮🇹 En nivel ${level} te propongo decirlo así: «${low.includes("?") ? "Mi piacerebbe saperlo meglio, puoi spiegarmelo?" : "Che interessante! Raccontami di più, per favore."}»\n\n` +
    `Puedes preguntarme por temas concretos: *essere, avere, passato prossimo, articoli, preposizioni, congiuntivo…*` +
    OFFLINE_NOTE
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TutorRequest;
    const { messages, level = "A1", mode = "chat", userName = "Studente" } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages requerido" }, { status: 400 });
    }

    const systemPrompt = buildSystemPrompt(level, mode, userName);

    // 1) API externa configurable (producción)
    if (process.env.TUTOR_API_BASE && process.env.TUTOR_API_KEY) {
      try {
        const reply = await callExternalApi(systemPrompt, messages);
        if (reply) return NextResponse.json({ reply });
      } catch {
        // continúa con el siguiente backend
      }
    }

    // 2) SDK interno (entorno de desarrollo sandbox)
    try {
      const zai = await ZAI.create();
      const completion = await zai.chat.completions.create({
        messages: [
          { role: "assistant", content: systemPrompt },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        thinking: { type: "disabled" },
      });
      const reply = completion.choices[0]?.message?.content ?? "";
      if (reply) return NextResponse.json({ reply });
    } catch {
      // sin SDK disponible → modo offline
    }

    // 3) Marco offline
    return NextResponse.json({ reply: offlineReply(mode, level, messages, userName), offline: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: `El tutor no está disponible ahora: ${msg}` }, { status: 500 });
  }
}
