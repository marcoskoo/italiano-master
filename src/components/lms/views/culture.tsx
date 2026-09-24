"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Check, Clapperboard, Clock, Volume2 } from "lucide-react";
import { CULTURE } from "@/lib/lms/culture";
import { useLms } from "@/lib/lms/store";
import { speak } from "@/lib/lms/tts";
import { cn } from "@/lib/utils";

/* ── Vista: Cultura italiana ──────────────────────────────────────── */

export function CultureView() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);

  const article = CULTURE.find((a) => a.id === openId);

  if (article) {
    const chosen = answers[article.id];
    const answered = chosen !== undefined;
    const correct = chosen === article.question.answer;
    return (
      <div className="max-w-3xl">
        <button onClick={() => setOpenId(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti gli articoli
        </button>

        <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro dark:text-verde">{article.category}</span>
            <span className="flex items-center gap-1 text-xs text-muted-it"><Clock className="h-3 w-3" aria-hidden="true" /> {article.minutes} min · {article.level}</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            <span className="mr-2" aria-hidden="true">{article.emoji}</span>
            {article.title}
          </h2>

          <div className="mt-6 space-y-4">
            {article.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.85] text-inchiostro/90 sm:text-lg">{p}</p>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-it">Vocabolario in contesto</p>
            <div className="flex flex-wrap gap-2">
              {article.vocab.map((v, i) => (
                <button
                  key={i}
                  onClick={() => speak(v.it, { rate: 0.85 })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-verde/25 bg-surface px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105"
                >
                  <Volume2 className="h-3 w-3 text-verde" aria-hidden="true" />
                  <span className="font-display italic">{v.it}</span> · {v.es}
                </button>
              ))}
            </div>
          </div>

          {/* pregunta */}
          <div className="mt-6 rounded-2xl border-2 border-oro/30 bg-oro-tenue/60 p-5 dark:bg-oro-tenue/25">
            <p className="font-display text-lg font-semibold">❓ {article.question.q}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {article.question.options.map((opt, i) => {
                const isRight = i === article.question.answer;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (answered) return;
                      setAnswers({ ...answers, [article.id]: i });
                      if (isRight) { addXp(15, "lettura"); recordCorrect("cultura"); }
                      else { recordError("cultura"); }
                    }}
                    disabled={answered}
                    className={cn(
                      "min-h-11 rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all",
                      !answered && "border-soft bg-surface hover:border-verde/50",
                      answered && isRight && "border-verde bg-verde-tenue text-verde-scuro dark:text-verde quiz-correct",
                      answered && !isRight && chosen === i && "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso quiz-wrong",
                      answered && !isRight && chosen !== i && "border-soft opacity-50"
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn("mt-3 text-sm font-semibold", correct ? "text-verde" : "text-rosso")}>
                {correct ? "🎉 Esatto! +15 XP · " : "❌ "}{article.question.explain}
              </motion.p>
            )}
          </div>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {CULTURE.map((a, i) => {
        const answered = answers[a.id] !== undefined;
        const correct = answers[a.id] === a.question.answer;
        return (
          <motion.button
            key={a.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setOpenId(a.id)}
            className="group flex flex-col rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-4xl" aria-hidden="true">{a.emoji}</p>
              {answered && (
                <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", correct ? "bg-verde-tenue text-verde" : "bg-rosso-tenue text-rosso")}>
                  {correct ? <Check className="h-4 w-4" aria-hidden="true" /> : <BookOpen className="h-4 w-4" aria-hidden="true" />}
                </span>
              )}
            </div>
            <p className="mt-3.5 font-display text-lg font-semibold leading-snug">{a.title}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-it">
              {a.category} · {a.level} · {a.minutes} min
            </p>
            <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted-it">{a.paragraphs[0]}</p>
          </motion.button>
        );
      })}
    </div>
  );
}
