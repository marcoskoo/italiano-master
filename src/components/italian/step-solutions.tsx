"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, RotateCcw, Sparkles } from "lucide-react";

/* ── Grammar problems ─────────────────────────────────────────────── */
interface Step {
  title: string;
  it: string;
  body: string;
  final?: boolean;
}

interface Problem {
  id: string;
  tab: string;
  level: string;
  sentence: string;
  blank: string;
  translation: string;
  steps: Step[];
}

const PROBLEMS: Problem[] = [
  {
    id: "passato",
    tab: "Passato prossimo",
    level: "A2",
    sentence: "Ieri Laura ___ (andare) a Roma.",
    blank: "è andata",
    translation: "Yesterday Laura went to Rome.",
    steps: [
      {
        title: "Spot the time marker",
        it: "il marcatore temporale",
        body: "“Ieri” (yesterday) signals a completed action — Italian wants il passato prossimo, the present perfect, not the imperfect.",
      },
      {
        title: "Classify the verb",
        it: "verbo di movimento",
        body: "“Andare” (to go) is a verb of motion — like venire, partire, uscire. Motion and reflexive verbs take the auxiliary ESSERE, not avere.",
      },
      {
        title: "Conjugate the auxiliary",
        it: "l'ausiliare essere",
        body: "Laura is third person singular (lei), so essere becomes è.",
      },
      {
        title: "Agree the past participle",
        it: "l'accordo del participio",
        body: "andare → andat-. With essere the participle agrees with the subject: Laura is feminine singular → andata.",
      },
      {
        title: "La soluzione",
        it: "la frase completa",
        body: "Ieri Laura è andata a Roma.",
        final: true,
      },
    ],
  },
  {
    id: "articolo",
    tab: "Articoli · lo",
    level: "A1",
    sentence: "___ zaino nuovo è di Marco.",
    blank: "Lo",
    translation: "The new backpack is Marco's.",
    steps: [
      {
        title: "Identify the noun",
        it: "il nome",
        body: "“Zaino” (backpack) is masculine singular — so the default article would be il… but not so fast.",
      },
      {
        title: "Look at the first letter",
        it: "la prima lettera",
        body: "“Zaino” begins with z. Italian has special articles before z, s + consonant, ps, gn, and y.",
      },
      {
        title: "Apply the rule",
        it: "la regola",
        body: "Masculine singular before those beginnings → LO instead of IL. Listen to the glide: “lo zaino” flows, “il zaino” trips.",
      },
      {
        title: "La soluzione",
        it: "la frase completa",
        body: "Lo zaino nuovo è di Marco.",
        final: true,
      },
    ],
  },
  {
    id: "condizionale",
    tab: "Cortesia · vorrei",
    level: "B1",
    sentence: "Buongiorno, ___ (volere) un caffè, per favore.",
    blank: "vorrei",
    translation: "Good morning, I would like a coffee, please.",
    steps: [
      {
        title: "Read the situation",
        it: "il contesto",
        body: "You're ordering at a bar, softening it with “per favore”. A blunt “voglio” (I want) sounds rude to Italian ears.",
      },
      {
        title: "Choose the mood",
        it: "il condizionale presente",
        body: "Polite requests live in the conditional — the mood of “I would”. It adds courtesy the same way “could” does in English.",
      },
      {
        title: "Conjugate volere",
        it: "il verbo irregolare",
        body: "volere builds the conditional on the future stem vorr-: io vorr- + -ei → vorrei.",
      },
      {
        title: "La soluzione",
        it: "la frase completa",
        body: "Buongiorno, vorrei un caffè, per favore.",
        final: true,
      },
    ],
  },
];

export function StepSolutions() {
  const [pIdx, setPIdx] = useState(0);
  const [revealed, setRevealed] = useState(0);

  const problem = PROBLEMS[pIdx];
  const total = problem.steps.length;
  const solved = revealed >= total;
  const [before, after] = problem.sentence.split("___");

  const switchProblem = (i: number) => {
    if (i === pIdx) return;
    setPIdx(i);
    setRevealed(0);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* problem tabs */}
      <div className="mb-5 grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Problemi di grammatica">
        {PROBLEMS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={pIdx === i}
            onClick={() => switchProblem(i)}
            className={`flex min-h-14 flex-col items-start justify-center gap-0.5 rounded-2xl border-2 px-4 py-3 text-left transition-all ${
              pIdx === i
                ? "border-inchiostro bg-inchiostro text-crema shadow-md"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
          >
            <span className={`text-sm font-bold ${pIdx === i ? "text-crema" : "text-inchiostro"}`}>
              {p.tab}
            </span>
            <span className={`font-mono text-[11px] ${pIdx === i ? "text-oro" : "text-stone-400"}`}>
              livello {p.level}
            </span>
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-8">
        {/* the sentence with the animated blank */}
        <div className="rounded-2xl bg-crema p-5 sm:p-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
            il problema · complete the sentence
          </p>
          <p className="font-display text-2xl italic leading-relaxed text-inchiostro sm:text-[1.75rem]">
            {before}
            <span className="mx-1 inline-block align-baseline">
              {solved ? (
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="quiz-reveal inline-block rounded-lg bg-verde px-2.5 py-0.5 font-bold not-italic text-white"
                >
                  {problem.blank}
                </motion.span>
              ) : (
                <span className="inline-block w-24 border-b-[3px] border-dashed border-rosso/60 text-center text-rosso/70">
                  {revealed > 0 ? "…" : "?"}
                </span>
              )}
            </span>
            {after}
          </p>
          <AnimatePresence>
            {solved && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-stone-500"
              >
                {problem.translation}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* progress */}
        <div className="mt-6 flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-stone-500">
            passo {revealed} / {total}
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-crema-scura">
            <div
              className="h-full rounded-full bg-gradient-to-r from-verde to-oro transition-all duration-500"
              style={{ width: `${(revealed / total) * 100}%` }}
            />
          </div>
        </div>

        {/* steps timeline */}
        <ol className="relative mt-4 flex flex-col">
          {problem.steps.map((step, i) => {
            const visible = i < revealed;
            return (
              <li key={`${problem.id}-${i}`} className="relative flex gap-4">
                {/* rail */}
                <div className="flex w-9 flex-col items-center">
                  <div
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm font-bold transition-all duration-300 ${
                      visible
                        ? step.final
                          ? "border-verde bg-verde text-white"
                          : "border-verde bg-verde-tenue text-verde-scuro"
                        : "border-stone-200 bg-white text-stone-300"
                    }`}
                    aria-hidden="true"
                  >
                    {visible ? (step.final ? <Check className="h-4 w-4" /> : i + 1) : i + 1}
                  </div>
                  {i < problem.steps.length - 1 && (
                    <div
                      className={`w-0.5 flex-1 transition-colors duration-500 ${
                        i < revealed - 1 ? "bg-verde/50" : "bg-stone-200"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="min-h-8 flex-1 pb-6">
                  <AnimatePresence>
                    {visible && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`rounded-2xl border p-4 sm:p-5 ${
                          step.final
                            ? "border-verde/40 bg-verde-tenue"
                            : "border-stone-200 bg-crema/60"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-inchiostro">{step.title}</h4>
                          {step.it && (
                            <span className="font-display text-sm italic text-oro-scuro">
                              {step.it}
                            </span>
                          )}
                        </div>
                        {step.final ? (
                          <p className="mt-3 flex items-center gap-2 font-display text-xl italic text-verde-scuro">
                            <Sparkles className="h-4 w-4 shrink-0" />
                            {step.body}
                          </p>
                        ) : (
                          <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{step.body}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ol>

        {/* controls */}
        <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-5">
          {!solved ? (
            <button
              type="button"
              onClick={() => setRevealed((r) => Math.min(r + 1, total))}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-verde-scuro active:scale-95"
            >
              rivela il prossimo passo
              <motion.span
                animate={revealed === 0 ? { y: [0, 4, 0] } : { y: 0 }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setRevealed(0)}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-inchiostro px-6 py-3 font-semibold text-crema transition-all hover:scale-[1.02] active:scale-95"
            >
              <RotateCcw className="h-4 w-4" /> ricomincia
            </button>
          )}
          <p className="text-xs text-stone-400">
            {solved
              ? "perfetto — ora prova a spiegartelo ad alta voce"
              : "un passo alla volta · one step at a time"}
          </p>
        </div>
      </div>
    </div>
  );
}
