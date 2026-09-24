"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Flame, Lightbulb, RotateCcw, Trophy, X } from "lucide-react";

/* ── Questions ────────────────────────────────────────────────────── */
interface Question {
  cat: string;
  prompt: string;
  options: string[];
  answer: number;
  note: string;
}

const QUESTIONS: Question[] = [
  {
    cat: "vocabolario",
    prompt: "Which verb means “to chat, to gossip”?",
    options: ["chiacchierare", "mangiare", "dormire", "correre"],
    answer: 0,
    note: "From “chiacchiere” — chatter. Una chiacchierata tra amici is one of Italy's finest arts.",
  },
  {
    cat: "articoli",
    prompt: "Complete: “___ libro è interessante.”",
    options: ["Il", "Lo", "La", "I"],
    answer: 0,
    note: "“Libro” is masculine singular starting with a plain consonant → il libro.",
  },
  {
    cat: "verbi",
    prompt: "Complete: “Noi ___ fame.” — We are hungry.",
    options: ["abbiamo", "hanno", "avete", "ho"],
    answer: 0,
    note: "Avere fame = to have hunger. noi → abbiamo. Italians have hunger, they aren't hungry.",
  },
  {
    cat: "cultura",
    prompt: "What does “sprezzatura” describe?",
    options: [
      "effortless, studied elegance",
      "a seafood risotto",
      "a late train",
      "an ancient coin",
    ],
    answer: 0,
    note: "Coined by Castiglione in 1528: the art of making the difficult look effortless.",
  },
  {
    cat: "verbi",
    prompt: "Complete: “Io ___ italiano da due anni.”",
    options: ["studio", "studia", "studiamo", "studiate"],
    answer: 0,
    note: "io → studio. And “da due anni” takes the present: I've been studying for two years.",
  },
  {
    cat: "plurali",
    prompt: "Make it plural: “la casa” → …",
    options: ["le case", "i casi", "le casae", "il case"],
    answer: 0,
    note: "Feminine -a → -e: la casa → le case. (il caso, “the case”, is a different word entirely.)",
  },
  {
    cat: "vocabolario",
    prompt: "“Meriggiare” means…",
    options: [
      "to rest at noon, out of the heat",
      "to fish at dawn",
      "to sing in choir",
      "to bargain at market",
    ],
    answer: 0,
    note: "From “meriggio” (midday). A word for escaping the midday sun — pure Mediterranean wisdom.",
  },
  {
    cat: "verbi",
    prompt: "Complete: “Tu ___ il caffè ogni mattina.”",
    options: ["bevi", "bevo", "beve", "beviamo"],
    answer: 0,
    note: "tu → bevi. Every single morning, like clockwork.",
  },
];

const LETTERS = ["A", "B", "C", "D"];

export function QuizSection() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const [cardFlash, setCardFlash] = useState<"good" | "bad" | null>(null);
  const timerRef = useRef<number>(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const pick = useCallback(
    (i: number) => {
      if (locked || done) return;
      const correct = i === QUESTIONS[idx].answer;
      setPicked(i);
      setLocked(true);
      setResults((r) => [...r, correct]);
      setCardFlash(correct ? "good" : "bad");
      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }
      timerRef.current = window.setTimeout(() => {
        setCardFlash(null);
        if (idx + 1 >= QUESTIONS.length) {
          setDone(true);
        } else {
          setIdx((v) => v + 1);
          setPicked(null);
          setLocked(false);
        }
      }, 1900);
    },
    [idx, locked, done]
  );

  const restart = useCallback(() => {
    window.clearTimeout(timerRef.current);
    setIdx(0);
    setPicked(null);
    setLocked(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setResults([]);
    setDone(false);
    setCardFlash(null);
  }, []);

  const q = QUESTIONS[idx];
  const pct = Math.round((score / QUESTIONS.length) * 100);
  const R = 56;
  const CIRC = 2 * Math.PI * R;
  const message =
    pct >= 88
      ? "Perfetto come un espresso!"
      : pct >= 63
        ? "Bravissimo! Ci siamo quasi."
        : pct >= 38
          ? "Buon lavoro — keep polishing."
          : "Riproviamo! Every maestro began here.";

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className={`relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm transition-shadow sm:p-8 ${
          cardFlash === "good" ? "card-flash-good" : cardFlash === "bad" ? "card-flash-bad" : ""
        }`}
      >
        {/* score strip */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {results.map((ok, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === idx && !done ? "w-6 bg-oro" : ok ? "w-2 bg-verde" : "w-2 bg-rosso"
                }`}
                aria-hidden="true"
              />
            ))}
            <span className="ml-2 font-mono text-xs text-stone-400">
              {Math.min(idx + (locked ? 1 : 0), QUESTIONS.length)}/{QUESTIONS.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-crema px-3 py-1 font-mono text-xs font-bold text-verde-scuro">
              punti {score}
            </span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={streak}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-xs font-bold ${
                  streak >= 2 ? "bg-rosso-tenue text-rosso-scuro" : "bg-crema text-stone-400"
                }`}
              >
                <Flame className={`h-3.5 w-3.5 ${streak >= 2 ? "fill-rosso/20" : ""}`} />
                serie {streak}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -34 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-oro-scuro">
                {q.cat} · domanda {idx + 1}
              </p>
              <h3 className="font-display text-2xl leading-snug text-inchiostro sm:text-[1.7rem]">
                {q.prompt}
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {q.options.map((opt, i) => {
                  const isPicked = picked === i;
                  const isAnswer = i === q.answer;
                  const showCorrect = locked && isAnswer;
                  const showWrong = locked && isPicked && !isAnswer;
                  const dim = locked && !isAnswer && !isPicked;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(i)}
                      disabled={locked}
                      aria-label={`Opzione ${LETTERS[i]}: ${opt}`}
                      className={`flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-200 ${
                        showCorrect
                          ? "quiz-correct border-verde bg-verde-tenue"
                          : showWrong
                            ? "quiz-wrong border-rosso bg-rosso-tenue"
                            : dim
                              ? "border-stone-200 bg-white opacity-45"
                              : "border-stone-200 bg-white hover:-translate-y-0.5 hover:border-verde hover:shadow-md"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold ${
                          showCorrect
                            ? "bg-verde text-white"
                            : showWrong
                              ? "bg-rosso text-white"
                              : "bg-crema text-stone-500"
                        }`}
                      >
                        {showCorrect ? <Check className="h-4 w-4" /> : showWrong ? <X className="h-4 w-4" /> : LETTERS[i]}
                      </span>
                      <span className={`font-display text-lg italic text-inchiostro ${showWrong ? "line-through decoration-rosso/60" : ""}`}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {locked && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`mt-4 flex items-start gap-2.5 rounded-2xl p-4 text-sm leading-relaxed ${
                        picked === q.answer
                          ? "bg-verde-tenue text-verde-scuro"
                          : "bg-rosso-tenue text-rosso-scuro"
                      }`}
                      role="status"
                    >
                      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
                      <p>
                        <span className="font-bold">
                          {picked === q.answer ? "Esatto! " : `Si dice “${q.options[q.answer]}”. `}
                        </span>
                        {q.note}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="sr-only" aria-live="polite">
                {locked
                  ? picked === q.answer
                    ? "Risposta esatta"
                    : `Risposta sbagliata. La risposta corretta è ${q.options[q.answer]}`
                  : ""}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center py-4 text-center"
            >
              <div className="relative">
                <svg width="150" height="150" viewBox="0 0 150 150" role="img" aria-label={`Punteggio ${pct}%`}>
                  <circle cx="75" cy="75" r={R} fill="none" stroke="#efe8da" strokeWidth="11" />
                  <motion.circle
                    cx="75"
                    cy="75"
                    r={R}
                    fill="none"
                    stroke={pct >= 63 ? "#128a54" : pct >= 38 ? "#c9862b" : "#c0392b"}
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    initial={{ strokeDashoffset: CIRC }}
                    animate={{ strokeDashoffset: CIRC * (1 - pct / 100) }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    transform="rotate(-90 75 75)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Trophy className="mb-1 h-6 w-6 text-oro" />
                  <span className="font-display text-4xl font-bold text-inchiostro">{pct}%</span>
                  <span className="font-mono text-[11px] text-stone-400">
                    {score}/{QUESTIONS.length}
                  </span>
                </div>
              </div>
              <h3 className="mt-4 font-display text-3xl italic text-inchiostro">{message}</h3>
              <p className="mt-2 text-sm text-stone-500">
                Miglior serie · best streak: <span className="font-bold text-inchiostro">{bestStreak}</span>
              </p>
              <button
                type="button"
                onClick={restart}
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-inchiostro px-6 py-3 font-semibold text-crema transition-all hover:scale-[1.03] active:scale-95"
              >
                <RotateCcw className="h-4 w-4" /> ricomincia
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
