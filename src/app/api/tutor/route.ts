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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TutorRequest;
    const { messages, level = "A1", mode = "chat", userName = "Studente" } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages requerido" }, { status: 400 });
    }

    const zai = await ZAI.create();
    const systemPrompt = buildSystemPrompt(level, mode, userName);

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "assistant", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      thinking: { type: "disabled" },
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: `El tutor no está disponible ahora: ${msg}` }, { status: 500 });
  }
}
