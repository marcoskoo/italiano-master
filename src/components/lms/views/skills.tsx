"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, BookOpen, Check, Ear, Languages, PenLine, Play, RotateCcw, Sparkles, Square, Volume2,
} from "lucide-react";
import { LISTENING } from "@/lib/lms/listening";
import { READINGS } from "@/lib/lms/reading";
import { WRITINGS } from "@/lib/lms/writing";
import { CONVERSATION_SCENARIOS } from "@/lib/lms/conversation";
import { getExercises } from "@/lib/lms/exercises";
import { CEFR_LEVELS, type CefrLevel } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { speakSequence, stopSpeaking, speak } from "@/lib/lms/tts";
import { QuizEngine } from "../quiz-engine";
import { StepReveal } from "../step-reveal";
import { AudioButton, VoiceHint } from "../audio-button";
import { cn } from "@/lib/utils";

/* ════════ Vista: ESCUCHA (Ascolto) ════════ */

export function ListeningView() {
  const [levelFilter, setLevelFilter] = useState<CefrLevel | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [speed, setSpeed] = useState(0.85);
  const showSubs = useLms((s) => s.settings.showSubtitles);

  const tasks = useMemo(() => LISTENING.filter((t) => levelFilter === "all" || t.level === levelFilter), [levelFilter]);
  const task = LISTENING.find((t) => t.id === openId);

  const playAll = (lines: { it: string }[], rate: number) => {
    stopSpeaking();
    const cancel = speakSequence(lines.map((l) => l.it), rate, (i) => setPlaying(i), () => setPlaying(null));
    return cancel;
  };

  if (task && quizOpen) {
    const exercises = getExercises(task.questions);
    return (
      <div>
        <button onClick={() => setQuizOpen(false)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna all'ascolto
        </button>
        <QuizEngine exercises={exercises} title={`Comprensione · ${task.title}`} kind="prueba" label={`Escucha: ${task.title}`} skill="ascolto" xpPerCorrect={15} />
      </div>
    );
  }

  if (task) {
    return (
      <div>
        <button onClick={() => { stopSpeaking(); setOpenId(null); setPlaying(null); }} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti gli ascolti
        </button>

        <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <VoiceHint />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold">{task.title}</h2>
            <div className="flex items-center gap-1.5" role="group" aria-label="Velocidad del audio">
              {([0.65, 0.85, 1.05] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setSpeed(r)}
                  className={cn("min-h-9 rounded-xl border-2 px-3 py-1.5 text-xs font-bold transition-all", speed === r ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft")}
                >
                  {r === 0.65 ? "🐢 lento" : r === 0.85 ? "▶ normale" : "🐇 veloce"}
                </button>
              ))}
            </div>
          </div>

          {/* palabras sueltas */}
          {task.kind === "parole" || task.kind === "dictato" ? (
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {(task.words ?? []).map((w, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => speak(w, { rate: speed })}
                  className="flex min-h-12 items-center justify-between rounded-2xl border-2 border-soft bg-crema px-4 py-3 text-left font-medium transition-all hover:border-verde/50 hover:scale-[1.01]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-verde-tenue font-mono text-xs font-bold text-verde-scuro dark:text-verde">{i + 1}</span>
                    {task.kind === "dictato" ? `Parola/frase ${i + 1}` : "🔊 ascolta"}
                  </span>
                  <Volume2 className="h-4 w-4 text-verde" aria-hidden="true" />
                </motion.button>
              ))}
            </div>
          ) : (
            /* diálogo */
            <div className="mt-6 space-y-2.5">
              {task.dialogue?.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-start gap-3 rounded-2xl border-2 p-4 transition-all",
                    playing === i ? "border-verde bg-verde-tenue" : "border-soft bg-crema"
                  )}
                >
                  <span className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    i % 2 === 0 ? "bg-verde text-white" : "bg-terracotta text-white"
                  )}>
                    {line.speaker.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-it">{line.speaker}</p>
                    <p className="mt-0.5 font-display text-lg leading-snug">{line.it}</p>
                    {showSubs && playing === null && <p className="mt-1 text-sm text-muted-it">{line.es}</p>}
                    {showSubs && <p className={cn("mt-1 text-sm transition-opacity", playing === i ? "text-muted-it opacity-100" : "hidden")}>{line.es}</p>}
                  </div>
                  <AudioButton text={line.it} size="sm" rate={speed} />
                </div>
              ))}
            </div>
          )}

          {/* controles */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {task.dialogue && (
              <button
                onClick={() => playing === null ? playAll(task.dialogue!, speed) : (stopSpeaking(), setPlaying(null))}
                className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03]"
              >
                {playing === null ? <><Play className="h-4 w-4" aria-hidden="true" /> Riproduci tutto</> : <><Square className="h-4 w-4" aria-hidden="true" /> Stop</>}
              </button>
            )}
            <button
              onClick={() => setQuizOpen(true)}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 px-6 py-3 font-bold transition-all hover:border-verde/40"
            >
              <Check className="h-4 w-4" aria-hidden="true" /> Comprensione ({task.questions.length} domande)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <VoiceHint />
      <div className="flex flex-wrap gap-2">
        <LevelFilter value={levelFilter} onChange={setLevelFilter} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t, i) => (
          <motion.button
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setOpenId(t.id)}
            className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro transition-colors group-hover:bg-verde group-hover:text-white dark:text-verde">
                <Ear className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{t.level}</span>
            </div>
            <p className="mt-3.5 font-display text-lg font-semibold">{t.title}</p>
            <p className="mt-1 text-xs text-muted-it">
              {t.kind === "dialogo" ? `${t.dialogue?.length ?? 0} battute di dialogo` : t.kind === "dictato" ? "dettato" : `${t.words?.length ?? 0} parole`} · {t.questions.length} domande
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ════════ Vista: LECTURA (Lettura) ════════ */

export function ReadingView() {
  const [levelFilter, setLevelFilter] = useState<CefrLevel | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);

  const texts = useMemo(() => READINGS.filter((t) => levelFilter === "all" || t.level === levelFilter), [levelFilter]);
  const text = READINGS.find((t) => t.id === openId);

  if (text && quizOpen) {
    const exercises = getExercises(text.questions);
    return (
      <div>
        <button onClick={() => setQuizOpen(false)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna al testo
        </button>
        <QuizEngine exercises={exercises} title={`Comprensione · ${text.title}`} kind="prueba" label={`Lectura: ${text.title}`} skill="lettura" xpPerCorrect={15} />
      </div>
    );
  }

  if (text) {
    return (
      <div>
        <button onClick={() => setOpenId(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutte le letture
        </button>
        <article className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">{text.title}</h2>
              <p className="mt-1 font-mono text-xs italic text-muted-it">{text.titleIt} · {text.genre} · {text.minutes} min · {text.level}</p>
            </div>
            <AudioButton text={text.paragraphs.map((p) => p.it).join(" ")} variant="full" label="Leggi ad alta voce" />
          </div>

          <div className="mt-6 space-y-4">
            {text.paragraphs.map((p, i) => (
              <div key={i}>
                <p className="text-lg leading-[1.85]">{p.it}</p>
                <p className="mt-1 text-sm italic text-muted-it">{p.es}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-it">Glossario</p>
            <div className="flex flex-wrap gap-2">
              {text.glossary.map((g, i) => (
                <span key={i} className="rounded-full border border-verde/25 bg-surface px-3 py-1.5 text-xs font-semibold">
                  <span className="font-display italic">{g.it}</span> · {g.es}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setQuizOpen(true)}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]"
          >
            <Check className="h-4 w-4" aria-hidden="true" /> Rispondi alle domande ({text.questions.length})
          </button>
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <LevelFilter value={levelFilter} onChange={setLevelFilter} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {texts.map((t, i) => (
          <motion.button
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setOpenId(t.id)}
            className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-oro-tenue text-oro-scuro dark:text-oro">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{t.level}</span>
            </div>
            <p className="mt-3.5 font-display text-lg font-semibold leading-snug">{t.title}</p>
            <p className="mt-1 text-xs text-muted-it">{t.genre} · {t.minutes} min · {t.questions.length} domande</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ════════ Vista: ESCRITURA (Scrittura) ════════ */

export function WritingView() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const saveWriting = useLms((s) => s.saveWriting);
  const addXp = useLms((s) => s.addXp);
  const level = useLms((s) => s.level);
  const userName = useLms((s) => s.userName);

  const prompts = WRITINGS;
  const prompt = WRITINGS.find((p) => p.id === openId);

  const correct = async () => {
    if (!prompt || text.trim().split(/\s+/).length < 5) return;
    setLoading(true);
    setAiFeedback(null);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: `Corrige este texto de escritura (${prompt.title}): "${text}"` }],
          level: prompt.level,
          mode: "correct",
          userName,
        }),
      });
      const data = await res.json();
      if (data.reply) {
        setAiFeedback(data.reply);
        addXp(20, "scrittura");
        saveWriting({ id: `${Date.now()}`, title: prompt.title, text, feedback: data.reply.slice(0, 400), date: new Date().toISOString() });
      } else {
        setAiFeedback(`⚠️ ${data.error ?? "Error del tutor"}`);
      }
    } catch {
      setAiFeedback("⚠️ No se pudo conectar con el tutor. Revisa tu conexión e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (prompt) {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return (
      <div>
        <button onClick={() => { setOpenId(null); setText(""); setAiFeedback(null); setShowModel(false); }} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutte le proposte
        </button>

        <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-2xl font-semibold">{prompt.title}</h2>
            <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">
              {prompt.level} · min. {prompt.minWords} parole
            </span>
          </div>
          <p className="mt-3 rounded-2xl bg-verde-tenue/70 p-4 leading-relaxed dark:bg-verde-tenue/30">✍️ {prompt.task}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {prompt.tips.map((tip, i) => (
              <span key={i} className="rounded-full border border-oro/30 bg-oro-tenue px-3 py-1.5 text-xs font-semibold text-oro-scuro dark:text-oro">💡 {tip}</span>
            ))}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            placeholder="Scrivi qui il tuo testo in italiano…"
            aria-label="Tu texto en italiano"
            className="mt-5 w-full rounded-2xl border-2 border-soft bg-crema p-4 text-base leading-relaxed outline-none transition-colors focus:border-verde"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-it">
            <span>{words} parole {words >= prompt.minWords ? "✓" : `(obiettivo: ${prompt.minWords})`}</span>
            <span>Consejo: usa las estructuras de la lección de tu nivel.</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={correct}
              disabled={loading || words < 5}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] disabled:opacity-40"
            >
              {loading ? <><RotateCcw className="h-4 w-4 animate-spin" aria-hidden="true" /> Il tutor sta correggendo…</> : <><Sparkles className="h-4 w-4" aria-hidden="true" /> Correggi con il Tutor IA (+20 XP)</>}
            </button>
            <button
              onClick={() => setShowModel(!showModel)}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 px-6 py-3 font-bold transition-all hover:border-verde/40"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" /> {showModel ? "Nascondi" : "Vedi"} il modello
            </button>
          </div>

          {aiFeedback && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 whitespace-pre-wrap rounded-2xl border border-verde/30 bg-verde-tenue/60 p-5 text-sm leading-relaxed dark:bg-verde-tenue/25">
              {aiFeedback}
            </motion.div>
          )}

          {showModel && (
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-it">Testo modello · revelado línea a línea</p>
              <StepReveal title="Come lo scriverebbe un italophone" steps={prompt.model} accent="oro" compact />
            </div>
          )}

          <div className="mt-6 rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
            <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-muted-it">Autovalutazione</p>
            <ul className="space-y-1.5">
              {prompt.checklist.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-verde" aria-hidden="true" />{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((p, i) => (
        <motion.button
          key={p.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          onClick={() => setOpenId(p.id)}
          className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
              <PenLine className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{p.level}</span>
          </div>
          <p className="mt-3.5 font-display text-lg font-semibold">{p.title}</p>
          <p className="mt-1 line-clamp-2 text-sm text-muted-it">{p.task}</p>
          <p className="mt-2 text-xs text-muted-it">min. {p.minWords} parole · corrección IA</p>
        </motion.button>
      ))}
    </div>
  );
}

/* ════════ Vista: CONVERSACIÓN ════════ */

export function ConversationView() {
  const navigate = useLms((s) => s.navigate);
  const level = useLms((s) => s.level);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-verde/30 bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
          <Languages className="h-6 w-6 text-verde" aria-hidden="true" /> Parliamo!
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-it">
          Escenarios reales de conversación: frases útiles con audio, consejos culturales y práctica
          guiada con el Tutor IA. Cada escenario está calibrado a un nivel MCER
          {level ? ` (tu nivel actual: ${level})` : ""}.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CONVERSATION_SCENARIOS.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col rounded-3xl border-2 border-soft bg-surface p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-3xl" aria-hidden="true">{s.emoji}</p>
              <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{s.level}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>

            <div className="mt-3 space-y-2">
              {s.phrases.slice(0, 3).map((p, j) => (
                <div key={j} className="flex items-start gap-2 rounded-xl bg-crema-scura p-2.5 dark:bg-inchiostro/10">
                  <AudioButton text={p.it} size="sm" className="!h-6 !w-6" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{p.it}</p>
                    <p className="truncate text-xs text-muted-it">{p.es}</p>
                  </div>
                </div>
              ))}
              {s.phrases.length > 3 && <p className="text-center text-xs text-muted-it">+{s.phrases.length - 3} frases más…</p>}
            </div>

            <ul className="mt-3 space-y-1">
              {s.tips.slice(0, 2).map((tip, j) => (
                <li key={j} className="text-xs leading-relaxed text-muted-it">💡 {tip}</li>
              ))}
            </ul>

            <button
              onClick={() => navigate("tutor", { tutorSeed: s.tutorSeed })}
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02] dark:text-inchiostro"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" /> Practica con Marco
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* ── filtro de nivel reutilizable ── */
function LevelFilter({ value, onChange }: { value: CefrLevel | "all"; onChange: (v: CefrLevel | "all") => void }) {
  return (
    <>
      {(["all", ...CEFR_LEVELS] as const).map((lv) => (
        <button
          key={lv}
          onClick={() => onChange(lv)}
          aria-pressed={value === lv}
          className={cn(
            "min-h-10 rounded-xl border-2 px-4 py-2 text-sm font-bold transition-all",
            value === lv ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft bg-surface text-muted-it hover:border-verde/40"
          )}
        >
          {lv === "all" ? "Tutti" : lv}
        </button>
      ))}
    </>
  );
}
