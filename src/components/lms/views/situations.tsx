"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ListChecks, MapPin, Play, Sparkles, Square, Volume2 } from "lucide-react";
import { SITUATIONS } from "@/lib/lms/situations";
import { getExercises } from "@/lib/lms/exercises";
import { useLms } from "@/lib/lms/store";
import { speakSequence, stopSpeaking } from "@/lib/lms/tts";
import { QuizEngine } from "../quiz-engine";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Situaciones reales ────────────────────────────────────── */

export function SituationsView() {
  const navParams = useLms((s) => s.navParams);
  const navigate = useLms((s) => s.navigate);
  const [openId, setOpenId] = useState<string | null>(navParams.situationId ?? null);
  const [playing, setPlaying] = useState<number | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);

  const situation = SITUATIONS.find((s) => s.id === openId);

  if (situation && quizOpen) {
    const exercises = getExercises(situation.exerciseIds);
    return (
      <div>
        <button onClick={() => setQuizOpen(false)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna alla situazione
        </button>
        <QuizEngine exercises={exercises} title={`Esercizi · ${situation.title}`} kind="prueba" label={`Situación: ${situation.title}`} xpPerCorrect={15} />
      </div>
    );
  }

  if (situation) {
    return (
      <div>
        <button onClick={() => { stopSpeaking(); setOpenId(null); setPlaying(null); }} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutte le situazioni
        </button>

        <div className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
          <div className="flex items-start gap-4">
            <span className="text-5xl" aria-hidden="true">{situation.emoji}</span>
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight">{situation.title}</h2>
              <p className="mt-1 font-mono text-sm italic text-muted-it">{situation.titleIt} · livello {situation.level}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-it">{situation.intro}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* vocabulario */}
          <section className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
            <h3 className="font-display text-xl font-semibold">Vocabolario essenziale</h3>
            <div className="mt-4 space-y-2">
              {situation.vocab.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2.5 rounded-xl bg-crema-scura px-3.5 py-2.5 dark:bg-inchiostro/10"
                >
                  <AudioButton text={v.it} size="sm" />
                  <p className="min-w-0 flex-1 text-sm">
                    <strong className="font-display text-base">{v.it}</strong> <span className="text-muted-it">· {v.es}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* diálogo */}
          <section className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold">Dialogo</h3>
              <button
                onClick={() => playing === null ? speakSequence(situation.dialogue.map((d) => d.it), 0.85, (i) => setPlaying(i), () => setPlaying(null)) : (stopSpeaking(), setPlaying(null))}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-verde px-4 py-2 text-xs font-bold text-white transition-all hover:scale-105 dark:text-inchiostro"
              >
                {playing === null ? <><Play className="h-3.5 w-3.5" aria-hidden="true" /> Riproduci</> : <><Square className="h-3.5 w-3.5" aria-hidden="true" /> Stop</>}
              </button>
            </div>
            <div className="mt-4 max-h-[420px] space-y-2.5 overflow-y-auto pr-1 scrollbar-thin">
              {situation.dialogue.map((line, i) => (
                <div key={i} className={cn("rounded-2xl border-2 p-3.5 transition-all", playing === i ? "border-verde bg-verde-tenue" : "border-soft bg-crema")}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-it">{line.speaker}</p>
                      <p className="mt-0.5 font-display text-lg leading-snug">{line.it}</p>
                      <p className="mt-1 text-sm text-muted-it">{line.es}</p>
                    </div>
                    <AudioButton text={line.it} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* acciones */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => setQuizOpen(true)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-inchiostro/15 px-6 py-3 font-bold transition-all hover:border-verde/40"
          >
            <ListChecks className="h-4 w-4" aria-hidden="true" /> Esercizi della situazione
          </button>
          <button
            onClick={() => navigate("tutor", { tutorSeed: `Role-play in italiano. ${situation.roleplay.it} Mantieni il personaggio e adatta l'italiano al livello ${situation.level}.` })}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Role-play con il Tutor IA
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted-it">
          Role-play: {situation.roleplay.es} — Marco se mantendrá en personaje y te corregirá con cariño.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {SITUATIONS.map((s, i) => (
        <motion.button
          key={s.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          onClick={() => setOpenId(s.id)}
          className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <p className="text-4xl" aria-hidden="true">{s.emoji}</p>
            <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{s.level}</span>
          </div>
          <p className="mt-3.5 font-display text-lg font-semibold leading-snug">{s.title}</p>
          <p className="mt-1 font-mono text-[11px] italic text-muted-it">{s.titleIt}</p>
          <div className="mt-3 flex items-center gap-3 text-[11px] font-semibold text-muted-it">
            <span className="flex items-center gap-1"><Volume2 className="h-3 w-3" aria-hidden="true" />{s.dialogue.length} battute</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" aria-hidden="true" />{s.vocab.length} parole</span>
            <span className="flex items-center gap-1"><ListChecks className="h-3 w-3" aria-hidden="true" />{s.exerciseIds.length} esercizi</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
