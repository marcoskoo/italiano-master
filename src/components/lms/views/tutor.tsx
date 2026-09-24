"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Check, Crown, PenLine, Send, Sparkles, Theater, User } from "lucide-react";
import { CEFR_LEVELS } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { PLANS, todayUsage } from "@/lib/lms/plans";
import { cn } from "@/lib/utils";

/* ── Vista: Tutor IA ──────────────────────────────────────────────── */

interface Msg { role: "user" | "assistant"; content: string; }

const MODES = [
  { id: "chat", label: "Chiacchierata", icon: Sparkles, desc: "Conversación libre en italiano" },
  { id: "correct", label: "Correzione", icon: Check, desc: "Corrige tu texto" },
  { id: "roleplay", label: "Role-play", icon: Theater, desc: "Situaciones con personaje" },
] as const;

const QUICK = [
  "Spiegami la differenza tra imperfetto e passato prossimo",
  "Come si dice “tengo que trabajar mañana”?",
  "Cosa devo visitare a Roma in tre giorni?",
  "Correggi: “Ieri ho andato al cinema con i miei amici”",
];

export function TutorView() {
  const navParams = useLms((s) => s.navParams);
  const navigate = useLms((s) => s.navigate);
  const userLevel = useLms((s) => s.level);
  const userName = useLms((s) => s.userName);
  const addXp = useLms((s) => s.addXp);
  const plan = useLms((s) => s.plan);
  const tutorCount = useLms((s) => s.tutorCount);
  const tutorCountDate = useLms((s) => s.tutorCountDate);
  const incrementTutor = useLms((s) => s.incrementTutor);

  const tutorLimit = PLANS[plan].limits.tutorPerDay;
  const tutorUsed = todayUsage(tutorCount, tutorCountDate);
  const tutorBlocked = tutorLimit >= 0 && tutorUsed >= tutorLimit;

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(userLevel ?? "A1");
  const [mode, setMode] = useState<"chat" | "correct" | "roleplay">("chat");
  const bottomRef = useRef<HTMLDivElement>(null);
  const seededRef = useRef(false);

  // saludo inicial
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: `Ciao ${userName.split(" ")[0]}! Sono Marco, il tuo tutor italiano. 🇮🇹 Possiamo chiacchierare, correggere i tuoi testi o fare role-play (bar, hotel, colloquio…). Di cosa parliamo oggi?`,
      }]);
    }
  }, []);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading || tutorBlocked) return;
    const nextMessages: Msg[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
          level,
          mode,
          userName,
        }),
      });
      const data = await res.json();
      const reply = data.reply ?? `⚠️ ${data.error ?? "El tutor no pudo responder. Inténtalo de nuevo."}`;
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
      incrementTutor();
      addXp(5, "parlato");
    } catch {
      setMessages([...nextMessages, { role: "assistant", content: "⚠️ Problema de conexión con el tutor. Revisa tu red e inténtalo otra vez." }]);
    } finally {
      setLoading(false);
    }
  };

  // semilla desde conversación/situaciones
  useEffect(() => {
    if (navParams.tutorSeed && !seededRef.current && messages.length <= 1) {
      seededRef.current = true;
      const seed = navParams.tutorSeed;
      setTimeout(() => send(seed), 300);
    }
  }, [navParams.tutorSeed]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="mx-auto max-w-3xl">
      {/* barra de configuración */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1" role="group" aria-label="Nivel del tutor">
          {CEFR_LEVELS.map((lv) => (
            <button
              key={lv}
              onClick={() => setLevel(lv)}
              aria-pressed={level === lv}
              className={cn("min-h-9 rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-all", level === lv ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft text-muted-it hover:border-verde/40")}
            >
              {lv}
            </button>
          ))}
        </div>
        <div className="ml-auto flex gap-1.5" role="group" aria-label="Modo del tutor">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              title={m.desc}
              aria-pressed={mode === m.id}
              className={cn(
                "inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all",
                mode === m.id ? "border-oro bg-oro-tenue text-oro-scuro dark:text-oro" : "border-soft text-muted-it hover:border-oro/40"
              )}
            >
              <m.icon className="h-3.5 w-3.5" aria-hidden="true" /> {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* chat */}
      <div className="flex h-[62vh] min-h-96 flex-col overflow-hidden rounded-3xl border border-soft bg-surface">
        <div className="flex items-center gap-3 border-b border-soft bg-crema-scura px-5 py-3.5 dark:bg-inchiostro/10">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-verde text-white">
            <Bot className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-crema-scura bg-verde" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold leading-tight">Marco · Tutor IA</p>
            <p className="text-xs text-muted-it">
              Nivel {level} · {MODES.find((m) => m.id === mode)?.desc} ·{" "}
              <span className={cn("font-bold", tutorLimit >= 0 && tutorLimit - tutorUsed <= 2 ? "text-rosso" : "text-verde-scuro dark:text-verde")}>
                {tutorLimit < 0 ? "messaggi ∞" : `${tutorUsed}/${tutorLimit} messaggi oggi`}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5 scrollbar-thin" role="log" aria-live="polite" aria-label="Conversación con el tutor">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-2.5", m.role === "user" ? "flex-row-reverse" : "")}
            >
              <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", m.role === "user" ? "bg-terracotta text-white" : "bg-verde text-white")}>
                {m.role === "user" ? <User className="h-4 w-4" aria-hidden="true" /> : <Bot className="h-4 w-4" aria-hidden="true" />}
              </span>
              <div className={cn(
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed",
                m.role === "user" ? "rounded-tr-sm bg-terracotta text-white" : "rounded-tl-sm bg-crema-scura dark:bg-inchiostro/10"
              )}>
                {m.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-verde text-white">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-verde" style={{ animationDelay: `${d * 0.15}s` }} />
                ))}
                <span className="ml-2 text-xs text-muted-it">Marco sta scrivendo…</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* sugerencias cuando está vacío */}
        {messages.length <= 1 && !loading && (
          <div className="border-t border-soft px-5 py-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-it">Suggerimenti</p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK.map((q, i) => (
                <button
                  key={i}
                  onClick={() => send(q)}
                  className="rounded-full border border-soft bg-crema px-3 py-1.5 text-xs font-semibold text-muted-it transition-all hover:border-verde/40 hover:text-verde-scuro dark:hover:text-verde"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* input */}
        {tutorBlocked ? (
          <div className="border-t border-soft p-4">
            <div className="rounded-2xl border-2 border-oro/45 bg-oro-tenue p-5 text-center dark:bg-oro-tenue/20">
              <Crown className="mx-auto h-7 w-7 text-oro-scuro dark:text-oro" aria-hidden="true" />
              <p className="mt-2 font-display text-lg font-semibold">
                Hai esaurito i {tutorLimit} messaggi di oggi ({PLANS[plan].name})
              </p>
              <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-muted-it">
                Con PRO hai 20 messaggi al giorno, con PREMIUM 100 e con PLATINUM conversationi illimitate con Marco.
              </p>
              <button
                onClick={() => navigate("piani")}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl plan-gold-bg px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-oro/30 transition-all hover:scale-105"
              >
                <Crown className="h-4 w-4" aria-hidden="true" /> Passa a PRO · PREMIUM · PLATINUM
              </button>
            </div>
          </div>
        ) : (
        <div className="flex items-center gap-2 border-t border-soft p-3.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
            placeholder={mode === "correct" ? "Incolla qui il tuo testo da correggere…" : "Scrivi in italiano (o in spagnolo)…"}
            aria-label="Mensaje para el tutor"
            className="min-h-11 flex-1 rounded-xl border-2 border-soft bg-crema px-4 outline-none transition-colors focus:border-verde"
          />
          <button
            onClick={() => send()}
            disabled={loading || input.trim() === ""}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-verde text-white transition-all hover:scale-105 disabled:opacity-40 dark:text-inchiostro"
            aria-label="Enviar mensaje"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        )}
      </div>

      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-it">
        <PenLine className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Marco adapta su italiano a tu nivel, corrige con explicaciones en español y termina siempre con una
        pregunta para mantener viva la conversación. Cada mensaje suma +5 XP a tu destreza de conversación.
      </p>
    </div>
  );
}
