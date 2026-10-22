import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { getClientIp, rateLimit } from "@/lib/admin/security";
import { tutorFor, type TutorPersona } from "@/lib/lms/tutor-persona";

export const runtime = "nodejs";
export const maxDuration = 60;

interface TutorRequest {
  messages: { role: "user" | "assistant"; content: string }[];
  level?: string;
  mode?: "chat" | "correct" | "roleplay";
  userName?: string;
  lang?: string;   // v9.39 · lengua de estudio (it/en/pt/fr/de)
}

/* v9.39 · La persona (nombre, saludos, prompts, correcciones offline)
   vive en src/lib/lms/tutor-persona.ts compartida con la vista: el
   tutor ya no responde en italiano cuando estudias otra lengua.     */

function buildSystemPrompt(p: TutorPersona, level: string, mode: "chat" | "correct" | "roleplay", userName: string): string {
  const profile = p.levelProfiles[level] ?? p.levelProfiles.A1;
  const base = p.systemBase(userName, profile);
  if (mode === "correct") return `${base}\n${p.systemCorrect}`;
  if (mode === "roleplay") return `${base}\n${p.systemRoleplay}`;
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

/* ── Backend 3: tutor offline (respuestas guiadas sin IA) ──────────── */

function offlineReply(p: TutorPersona, mode: "chat" | "correct" | "roleplay", level: string, messages: TutorRequest["messages"]): string {
  const last = messages[messages.length - 1]?.content ?? "";
  const first = (last.match(/^\s*(?:ciao|hi|hello|hey|olá|ola|oi|salut|hallo|hola)\s+(\p{L}+)/iu)?.[1] ?? "studente").slice(0, 20);
  const low = last.toLowerCase();

  if (mode === "correct") {
    const words = last.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return p.offlineCorrectIntro + p.offlineNote;
    const issues: string[] = [];
    /* patrones de error frecuentes del hispanohablante SOLO en italiano
       (los patrones específicos de otras lenguas los cubre la IA)      */
    if (p.code === "it") {
      if (/\bsono\s+\d+\s*(anni|años)\b/i.test(last)) issues.push("«sono X anni» → **«ho X anni»**: la edad va con *avere*.");
      if (/\bpiù\s+miglior/i.test(last)) issues.push("«più migliore» → **«meglio»/«migliore»**: el comparativo ya incluye «más».");
      if (/\bio\s+(avere|essere|mangiare|andare)\b/i.test(last)) issues.push("El sujeto «io» normalmente se omite: «(io) ho», «(io) vado».");
      if (/\bperche\b/i.test(last)) issues.push("«perche» → **«perché»**: no olvides el acento.");
    }
    const corrected = p.code === "it"
      ? last
          .replace(/\bsono\s+(\d+)\s+anni\b/i, "ho $1 anni")
          .replace(/\bperche\b/gi, "perché")
          .replace(/\bio\s+(avere|essere|mangiare|andare)\b/gi, (_m, v) => v.toLowerCase())
      : last;
    return (
      `✅ **Corregido:** «${corrected.trim()}»\n\n📝 **Notas:**\n` +
      (issues.length ? issues.map((i) => `• ${i}`).join("\n") : "• No he detectado errores frecuentes de hispanohablantes. ¡Bien hecho!") +
      `\n\n⭐ **Muy bien:** ${words.length >= 8 ? "buena longitud de frase, sigue así" : "frase clara y directa"}.` +
      p.offlineNote
    );
  }

  if (mode === "roleplay") {
    return p.offlineRoleplay(first) + p.offlineNote;
  }

  // chat
  if (p.offlineGreeting.test(low.trim())) {
    return p.offlineGreetingReply(first) + p.offlineNote;
  }
  if (p.offlineThanks.test(low)) {
    return p.offlineThanksReply + p.offlineNote;
  }
  if (p.offlineHowAreYou.test(low)) {
    return p.offlineHowAreYouReply + p.offlineNote;
  }
  for (const tip of p.grammarTips) {
    if (tip.match.test(last)) {
      return `Buona domanda, ${first}! 📖 **${tip.title}**\n\n${tip.body}\n\nProviamo: escribe una frase usando esto y te digo cómo suena.` + p.offlineNote;
    }
  }
  return p.offlineFallback(first, level) + p.offlineNote;
}

export async function POST(req: Request) {
  try {
    // v9.10.1 (auditoría): rate limit — sin esto, cualquiera podía martillar
    // el endpoint y quemar la cuota de la API de IA (TUTOR_API_KEY / SDK).
    const rl = rateLimit(`tutor:${getClientIp(req)}`, { limit: 20, windowMs: 60_000, blockMs: 120_000 });
    const persona = tutorFor("it"); // provisional: se re-resuelve tras leer el body
    if (!rl.ok) {
      return NextResponse.json(
        { error: persona.rateLimitMessage },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
      );
    }

    const body = (await req.json()) as TutorRequest;
    const { messages, level = "A1", mode = "chat", userName = "Studente", lang } = body;
    const p = tutorFor(lang);

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages requerido" }, { status: 400 });
    }

    // v9.10.1: límites de payload — evita abuso de coste y prompt-stuffing masivo
    if (messages.length > 30) {
      return NextResponse.json({ error: "Demasiados mensajes (máx. 30)" }, { status: 413 });
    }
    const safeMessages = messages
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }))
      .slice(-30);
    if (safeMessages.length === 0) {
      return NextResponse.json({ error: "messages requerido" }, { status: 400 });
    }
    const safeLevel = p.levelProfiles[level] ? level : "A1";
    const safeMode: "chat" | "correct" | "roleplay" = mode === "chat" || mode === "correct" || mode === "roleplay" ? mode : "chat";
    const safeUserName = String(userName).slice(0, 40).replace(/[\n\r<>]/g, "") || "Studente";

    const systemPrompt = buildSystemPrompt(p, safeLevel, safeMode, safeUserName);

    // 1) API externa configurable (producción)
    if (process.env.TUTOR_API_BASE && process.env.TUTOR_API_KEY) {
      try {
        const reply = await callExternalApi(systemPrompt, safeMessages);
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
          ...safeMessages.map((m) => ({ role: m.role, content: m.content })),
        ],
        thinking: { type: "disabled" },
      });
      const reply = completion.choices[0]?.message?.content ?? "";
      if (reply) return NextResponse.json({ reply });
    } catch {
      // sin SDK disponible → modo offline
    }

    // 3) tutor offline
    return NextResponse.json({ reply: offlineReply(p, safeMode, safeLevel, safeMessages), offline: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: `El tutor no está disponible ahora: ${msg}` }, { status: 500 });
  }
}
