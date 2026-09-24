"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Grid3x3, ListOrdered, Sparkles, Timer, Trophy } from "lucide-react";
import { VOCAB, wordsByCategory } from "@/lib/lms/vocabulary";
import { CATEGORY_META, type WordCategory } from "@/lib/lms/types";
import { EXERCISES } from "@/lib/lms/exercises";
import { useLms } from "@/lib/lms/store";
import { QuizEngine } from "../quiz-engine";
import { QuizSection } from "@/components/italian/quiz-section";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Giochi ────────────────────────────────────────────────── */

type GameId = "memoria" | "ordinare" | "quiz";

export function GamesView() {
  const [game, setGame] = useState<GameId | null>(null);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const navigate = useLms((s) => s.navigate);

  // función desactivada desde el Panel Admin (tras todos los hooks)
  if (remoteConfig && !remoteConfig.features.games) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">🎮</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Giochi temporalmente desactivados</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          La administración ha desactivado la sección de juegos por ahora. Los cursos, el vocabulario y el repaso espaciado siguen a tu disposición.
        </p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
          Torna all'inizio
        </button>
      </div>
    );
  }

  if (game === "memoria") return <MemoryGame onBack={() => setGame(null)} />;
  if (game === "ordinare") return <OrderGame onBack={() => setGame(null)} />;
  if (game === "quiz") return (
    <div>
      <button onClick={() => setGame(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
        ← Tutti i giochi
      </button>
      <QuizSection />
    </div>
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { id: "memoria", emoji: "🧠", title: "Memoria", it: "gioco di memoria", desc: "Encuentra las parejas italiano–español. Menos movimientos = más puntos.", icon: Grid3x3 },
        { id: "ordinare", emoji: "🔤", title: "Ordina la frase", it: "metti in ordine", desc: "Construye frases italianas reales tocando las palabras en orden.", icon: ListOrdered },
        { id: "quiz", emoji: "⚡", title: "Quiz lampo", it: "quiz relámpago", desc: "Ocho preguntas rápidas: correcto pulsa verde, error pulsa rojo.", icon: Sparkles },
      ].map((g, i) => (
        <motion.button
          key={g.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          onClick={() => setGame(g.id as GameId)}
          className="group rounded-3xl border-2 border-soft bg-surface p-6 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-xl"
        >
          <p className="text-5xl" aria-hidden="true">{g.emoji}</p>
          <p className="mt-4 font-display text-2xl font-semibold">{g.title}</p>
          <p className="mt-0.5 font-mono text-xs italic text-muted-it">{g.it}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-it">{g.desc}</p>
          <span className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-xl bg-verde-tenue px-4 py-2 text-sm font-bold text-verde-scuro transition-colors group-hover:bg-verde group-hover:text-white dark:text-verde">
            <Gamepad2 className="h-4 w-4" aria-hidden="true" /> Gioca ora
          </span>
        </motion.button>
      ))}
    </div>
  );
}

/* ── Juego de memoria ── */
function MemoryGame({ onBack }: { onBack: () => void }) {
  const [cat, setCat] = useState<WordCategory | null>(null);
  const [cards, setCards] = useState<{ id: number; wordId: string; text: string; lang: "it" | "es"; flipped: boolean; matched: boolean }[]>([]);
  const [first, setFirst] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const addXp = useLms((s) => s.addXp);

  const pairsFound = cards.length > 0 ? cards.filter((c) => c.matched).length / 2 : 0;
  const totalPairs = cards.length / 2;
  const won = totalPairs > 0 && pairsFound === totalPairs;

  useEffect(() => {
    if (startTime && !won) {
      const t = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
      return () => clearInterval(t);
    }
  }, [startTime, won]);

  const startGame = useCallback((category: WordCategory) => {
    const words = wordsByCategory(category).slice(0, 8);
    const deck = words.flatMap((w, i) => [
      { id: i * 2, wordId: w.id, text: w.it, lang: "it" as const, flipped: false, matched: false },
      { id: i * 2 + 1, wordId: w.id, text: w.es, lang: "es" as const, flipped: false, matched: false },
    ]).sort(() => Math.random() - 0.5);
    setCards(deck);
    setFirst(null); setMoves(0); setLock(false); setElapsed(0); setStartTime(Date.now());
  }, []);

  const flip = (idx: number) => {
    if (lock || cards[idx].flipped || cards[idx].matched) return;
    const next = cards.map((c, i) => (i === idx ? { ...c, flipped: true } : c));
    setCards(next);
    if (first === null) { setFirst(idx); return; }
    // segunda carta
    setMoves(moves + 1);
    const a = next[first], b = next[idx];
    if (a.wordId === b.wordId && a.lang !== b.lang) {
      const matchedDeck = next.map((c) => (c.wordId === a.wordId ? { ...c, matched: true, flipped: true } : c));
      setCards(matchedDeck);
      setFirst(null);
      addXp(4, "vocabolario");
    } else {
      setLock(true);
      setTimeout(() => {
        setCards(next.map((c, i) => (i === first || i === idx ? { ...c, flipped: false } : c)));
        setFirst(null); setLock(false);
      }, 800);
    }
  };

  if (!cat) {
    return (
      <div>
        <button onClick={onBack} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">← Tutti i giochi</button>
        <h2 className="font-display text-2xl font-semibold">Scegli una categoria</h2>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {(Array.from(new Set(VOCAB.map((w) => w.cat))) as WordCategory[]).map((c) => (
            <button key={c} onClick={() => { setCat(c); startGame(c); }} className="rounded-2xl border-2 border-soft bg-surface p-4 text-left transition-all hover:-translate-y-0.5 hover:border-verde/40">
              <p className="text-2xl" aria-hidden="true">{CATEGORY_META[c].emoji}</p>
              <p className="mt-2 text-sm font-bold">{CATEGORY_META[c].es}</p>
              <p className="text-xs text-muted-it">{Math.min(8, wordsByCategory(c).length)} coppie</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setCat(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">← Cambia categoria</button>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-soft bg-surface px-5 py-3.5">
        <p className="font-display text-lg font-semibold">{CATEGORY_META[cat].emoji} {CATEGORY_META[cat].es}</p>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className="flex items-center gap-1.5 text-muted-it"><Timer className="h-4 w-4" aria-hidden="true" /> {elapsed}s</span>
          <span className="flex items-center gap-1.5 text-muted-it"><Trophy className="h-4 w-4" aria-hidden="true" /> {pairsFound}/{totalPairs}</span>
          <span className="text-muted-it">mosse: {moves}</span>
          <button onClick={() => startGame(cat)} className="rounded-xl bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro dark:text-verde">Ricomincia</button>
        </div>
      </div>

      {won && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-5 rounded-2xl border border-verde/40 bg-verde-tenue p-5 text-center">
          <p className="font-display text-2xl font-semibold text-verde-scuro dark:text-verde">🎉 Hai vinto in {moves} mosse e {elapsed} secondi!</p>
        </motion.div>
      )}

      <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-4 xl:grid-cols-4">
        {cards.map((card, i) => (
          <button
            key={card.id}
            onClick={() => flip(i)}
            aria-label={card.flipped || card.matched ? card.text : "Carta coperta"}
            className={cn(
              "flex aspect-[4/3] items-center justify-center rounded-2xl border-2 p-2 text-center text-xs font-bold transition-all duration-300 sm:text-sm",
              card.matched ? "border-verde bg-verde-tenue text-verde-scuro opacity-60 dark:text-verde" : card.flipped ? "border-oro bg-oro-tenue scale-105" : "border-soft bg-surface hover:-translate-y-0.5 hover:border-verde/40"
            )}
          >
            {card.flipped || card.matched ? card.text : "🂠"}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Juego de ordenar frases ── */
function OrderGame({ onBack }: { onBack: () => void }) {
  const orderExercises = useMemo(() => EXERCISES.filter((e) => e.type === "order"), []);
  const [idx, setIdx] = useState(0);
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);

  const exercise = orderExercises[idx % orderExercises.length] as Extract<(typeof EXERCISES)[number], { type: "order" }>;
  const shuffleWords = (ex: { words: string[] }) => [...ex.words].sort(() => Math.random() - 0.5).map((w) => ({ w, used: false }));
  const [words, setWords] = useState(() => shuffleWords(orderExercises[0] as { words: string[] }));
  const [built, setBuilt] = useState<string[]>([]);
  const [state, setState] = useState<"playing" | "won" | "lost">("playing");

  const loadExercise = (target: { words: string[] }) => {
    setWords(shuffleWords(target));
    setBuilt([]);
    setState("playing");
  };

  const advance = () => {
    const nextIdx = idx + 1;
    setIdx(nextIdx);
    loadExercise(orderExercises[nextIdx % orderExercises.length] as { words: string[] });
  };

  const check = () => {
    if (built.join(" ") === exercise.answer.join(" ")) {
      setState("won");
      addXp(12, "grammatica");
      recordCorrect(exercise.topic);
    } else {
      setState("lost");
      recordError(exercise.topic);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <button onClick={onBack} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">← Tutti i giochi</button>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold">Ordina la frase</h2>
        <span className="rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro dark:text-verde">
          {(idx % orderExercises.length) + 1} / {orderExercises.length}
        </span>
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
        <p className="text-sm font-semibold text-muted-it">{exercise.prompt}</p>

        <div className={cn(
          "mt-5 flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed p-3.5 transition-colors",
          state === "won" ? "border-verde bg-verde-tenue quiz-correct" : state === "lost" ? "border-rosso bg-rosso-tenue" : "border-soft bg-crema-scura dark:bg-inchiostro/10"
        )}>
          {built.length === 0 && <span className="px-1 text-sm text-muted-it">Toca le parole nell'ordine giusto…</span>}
          {built.map((w, i) => (
            <button
              key={`${w}-${i}`}
              onClick={() => { if (state === "playing") { setBuilt(built.filter((_, j) => j !== i)); setWords(words.map((ow) => (ow.w === w && ow.used ? { ...ow, used: false } : ow))); } }}
              className="rounded-xl border border-verde/40 bg-verde-tenue px-3 py-1.5 text-sm font-bold text-verde-scuro dark:text-verde"
            >
              {w}
            </button>
          ))}
        </div>

        {state === "playing" && (
          <>
            <div className="mt-4 flex flex-wrap gap-2">
              {words.map((ow, i) => (
                <button
                  key={`${ow.w}-${i}`}
                  onClick={() => { if (!ow.used) { setBuilt([...built, ow.w]); setWords(words.map((o, j) => (j === i ? { ...o, used: true } : o))); } }}
                  disabled={ow.used}
                  className={cn("min-h-11 rounded-xl border-2 border-soft bg-crema px-3.5 py-2 text-sm font-semibold transition-all", ow.used ? "opacity-20" : "hover:border-verde/50 hover:scale-105")}
                >
                  {ow.w}
                </button>
              ))}
            </div>
            <button
              onClick={check}
              disabled={built.length !== exercise.answer.length}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40"
            >
              Verifica
            </button>
          </>
        )}

        {state !== "playing" && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
            {state === "won" ? (
              <p className="rounded-2xl bg-verde-tenue p-4 text-center font-bold text-verde-scuro dark:text-verde">🎉 Perfetto! +12 XP</p>
            ) : (
              <div className="rounded-2xl bg-rosso-tenue p-4 text-center">
                <p className="font-bold text-rosso-scuro dark:text-rosso">Quasi! La frase corretta era:</p>
                <p className="mt-2 font-display text-xl font-semibold">{exercise.answer.join(" ")}</p>
                <p className="mt-1.5 text-sm text-muted-it">{exercise.explain}</p>
              </div>
            )}
            <div className="mt-4 flex items-center justify-center gap-3">
              <AudioButton text={exercise.answer.join(" ")} variant="full" label="Ascolta la frase" />
              <button
                onClick={advance}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-5 py-2.5 text-sm font-bold text-crema transition-all hover:scale-105 dark:bg-verde dark:text-inchiostro"
              >
                Frase successiva →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
