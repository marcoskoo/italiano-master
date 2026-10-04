"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Eye, EyeOff, Languages } from "lucide-react";
import type { CbClozeText } from "@/lib/lms/cambridge";
import { CB_CLOZE } from "@/lib/lms/extra/readings-cloze";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "./audio-button";
import { cn } from "@/lib/utils";

/* ═══ v9.12 · Lettura con comprensión cloze (inferencia léxica) ═════
   El texto italiano lleva marcadores {n} que se renderizan como huecos.
   El estudiante toca un hueco y elige entre 3 opciones plausibles:
   solo una encaja en el contexto. La traducción ES está oculta por
   defecto (se activa con toggle) para forzar la lectura en italiano.  */

const GAP_RE = /\{(\d+)\}/g;

function stripMarkers(s: string) {
  return s.replace(GAP_RE, "");
}

/* ── Mezcla estable de opciones ────────────────────────────────────
   v9.13: los datos se autoran con la correcta en primera posición;
   sin este shuffle el estudiante aprendería "elige siempre la primera".
   La permutación es determinística por (id de lectura, nº de hueco):
   estable entre renders y sin problemas de hidratación.          */
function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function seededPerm(seed: number, len: number): number[] {
  let a = seed >>> 0;
  const rnd = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const idx = Array.from({ length: len }, (_, i) => i);
  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}
interface ShuffledGap { options: string[]; answer: number; why?: string; correctWord: string; }
function shuffleGaps(text: CbClozeText): ShuffledGap[] {
  const seed = hashStr(text.id);
  return text.gaps.map((g, gi) => {
    const perm = seededPerm(seed + gi * 7919, g.options.length);
    return { options: perm.map((i) => g.options[i]), answer: perm.indexOf(g.answer), why: g.why, correctWord: g.options[g.answer] };
  });
}

/* ── Un hueco inline ─────────────────────────────────────────────── */
function Gap({
  n, state, onClick,
}: {
  n: number;
  state: "empty" | "active" | "wrong";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Hueco ${n}, toca para elegir una palabra`}
      className={cn(
        "mx-1 inline-flex min-h-[1.7rem] min-w-[4rem] items-center justify-center rounded-lg border-2 px-2 align-baseline transition-all",
        state === "empty" && "border-dashed border-verde/50 bg-verde-tenue/50 font-mono text-xs text-verde-scuro/60 hover:border-verde hover:bg-verde-tenue hover:text-verde-scuro dark:text-verde",
        state === "active" && "border-verde bg-verde-tenue font-mono text-xs text-verde-scuro ring-2 ring-verde/30 dark:text-verde",
        state === "wrong" && "border-rosso bg-rosso-tenue font-mono text-xs text-rosso-scuro dark:text-rosso"
      )}
    >
      {n}
    </button>
  );
}

/* ── Lectura individual ──────────────────────────────────────────── */
function ClozeReadingCard({
  text, onCompleted,
}: {
  text: CbClozeText;
  onCompleted: () => void;
}) {
  const [picks, setPicks] = useState<Record<number, number>>({});   // hueco → opción elegida (solo aciertos)
  const [wrong, setWrong] = useState<Record<number, number>>({});   // hueco → opción errada (para marcar)
  const [active, setActive] = useState<number | null>(null);
  const [showEs, setShowEs] = useState(false);
  const [done, setDone] = useState(false);
  const gaps = useMemo(() => shuffleGaps(text), [text]);

  const solvedCount = Object.keys(picks).length;
  const total = gaps.length;
  const allSolved = solvedCount === total;

  const choose = (n: number, oi: number) => {
    const gap = gaps[n - 1];
    if (!gap || picks[n] !== undefined) return;
    if (oi === gap.answer) {
      const next = { ...picks, [n]: oi };
      setPicks(next);
      setWrong((w) => {
        const c = { ...w }; delete c[n]; return c;
      });
      if (Object.keys(next).length === total && !done) {
        setDone(true);
        onCompleted();
      }
    } else {
      setWrong((w) => ({ ...w, [n]: oi }));
    }
  };

  return (
    <div>
      {/* cabecera */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-oro-scuro dark:text-oro">
            Lettura · {text.minutes} min · comprensione inferenziale
          </p>
          <h4 className="font-display text-xl font-semibold">{text.title}</h4>
          <p className="text-sm italic text-muted-it">{text.titleEs}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowEs(!showEs)}
          className="inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-soft bg-crema px-4 py-2.5 text-xs font-bold transition-all hover:border-verde/40 dark:bg-inchiostro/10"
        >
          {showEs ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
          {showEs ? "Nascondi lo spagnolo" : "Mostra lo spagnolo"}
        </button>
      </div>

      {/* texto con huecos */}
      <div className="mt-4 space-y-5">
        {text.paragraphs.map((p, i) => {
          const parts = p.it.split(GAP_RE);
          return (
            <div key={i}>
              <div className="flex items-start gap-2">
                <p className="flex-1 text-base leading-[2]">
                  {parts.map((seg, k) =>
                    k % 2 === 0 ? (
                      <span key={k}>{seg}</span>
                    ) : (
                      (() => {
                        const n = parseInt(seg, 10);
                        const solved = picks[n] !== undefined;
                        const isWrong = wrong[n] !== undefined;
                        const gap = gaps[n - 1];
                        return solved ? (
                          <span
                            key={k}
                            className="mx-1 inline-flex items-center gap-1 rounded-lg bg-verde px-2 py-0.5 font-semibold text-white"
                          >
                            {gap.correctWord}
                          </span>
                        ) : (
                          <Gap
                            key={k}
                            n={n}
                            state={isWrong ? "wrong" : active === n ? "active" : "empty"}
                            onClick={() => setActive(n)}
                          />
                        );
                      })()
                    )
                  )}
                </p>
                <AudioButton text={stripMarkers(p.it)} size="sm" />
              </div>
              {showEs && (
                <p className="mt-1.5 text-sm italic leading-relaxed text-muted-it">{p.es}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* panel de opciones del hueco activo */}
      {active !== null && picks[active] === undefined && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky bottom-4 z-20 mt-5 rounded-2xl border-2 border-verde/40 bg-surface p-4 shadow-lg"
        >
          <p className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-it">
            <Languages className="h-3.5 w-3.5 text-verde" aria-hidden="true" />
            Completa il hueco {active} · deduci la palabra por el contexto
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {gaps[active - 1].options.map((op, oi) => {
              const isWrongPick = wrong[active] === oi;
              return (
                <button
                  key={oi}
                  type="button"
                  onClick={() => choose(active, oi)}
                  className={cn(
                    "min-h-11 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
                    isWrongPick
                      ? "border-rosso/40 bg-rosso-tenue/50 text-rosso-scuro/50 line-through dark:text-rosso/50"
                      : "border-soft bg-crema hover:-translate-y-0.5 hover:border-verde hover:bg-verde-tenue dark:bg-inchiostro/10"
                  )}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {wrong[active] !== undefined && (
            <p className="mt-2 text-xs font-semibold text-rosso">
              No es «{gaps[active - 1].options[wrong[active]]}» — busca la palabra que encaja con el sentido de la frase.
            </p>
          )}
        </motion.div>
      )}

      {/* progreso / feedback */}
      {allSolved ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-5 rounded-2xl bg-verde-tenue p-4 text-center dark:bg-verde-tenue/30"
        >
          <p className="font-display text-lg font-bold text-verde-scuro dark:text-verde">
            <CheckCircle2 className="mr-1.5 inline h-5 w-5" aria-hidden="true" />
            Lettura completata · {total}/{total} huecos
          </p>
          <p className="mt-1 text-xs text-muted-it">
            Cada palabra deducida del contexto vale más que diez memorizadas. +5 XP
          </p>
        </motion.div>
      ) : (
        <p className="mt-4 text-center text-xs font-semibold text-muted-it">
          {solvedCount}/{total} huecos completados — toca un hueco y elige la palabra que encaja
        </p>
      )}
    </div>
  );
}

/* ── Sección completa: 3 lecturas con pestañas ───────────────────── */
export function ClozeReadings({ unitId }: { unitId: string }) {
  const texts = CB_CLOZE[unitId] ?? [];
  const addXp = useLms((s) => s.addXp);
  const markCambridgeSection = useLms((s) => s.markCambridgeSection);
  const progress = useLms((s) => s.cambridgeProgress[unitId]);
  const [tab, setTab] = useState(0);
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  const allDone = useMemo(
    () => texts.length > 0 && texts.every((_, i) => completed[i]),
    [texts, completed]
  );

  if (texts.length === 0) return null;

  const handleComplete = (i: number) => {
    if (completed[i]) return;
    setCompleted((c) => ({ ...c, [i]: true }));
    addXp(5, "lettura");
    // al completar las 3, se marca la sección lettura
    if (texts.every((_, k) => k === i || completed[k])) {
      if (!progress?.sections.includes("lettura")) markCambridgeSection(unitId, "lettura");
    }
  };

  return (
    <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
          <BookOpen className="h-5 w-5 text-oro" aria-hidden="true" />
          Tre letture · comprensione del testo
        </h3>
        <span className="rounded-full bg-oro-tenue px-3 py-1.5 text-[11px] font-bold text-oro-scuro dark:text-oro">
          {Object.keys(completed).length}/{texts.length} completate
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
        Lee cada texto y completa los huecos <strong>deduciendo la palabra por el contexto</strong>:
        las tres opciones son posibles en italiano, pero solo una encaja con el sentido.
      </p>

      {/* pestañas */}
      <div className="mt-4 flex gap-1.5" role="tablist" aria-label="Lecturas de la unidad">
        {texts.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
            className={cn(
              "flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all",
              tab === i
                ? "bg-verde text-white shadow-md shadow-verde/20"
                : "bg-crema-scura text-muted-it hover:bg-verde-tenue hover:text-verde-scuro dark:bg-inchiostro/10 dark:hover:text-verde"
            )}
          >
            {completed[i] && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            Lettura {i + 1}
          </button>
        ))}
      </div>

      {/* lectura activa */}
      <div className="mt-5">
        <ClozeReadingCard key={texts[tab].id} text={texts[tab]} onCompleted={() => handleComplete(tab)} />
      </div>

      {allDone && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl bg-verde p-4 text-center text-white"
        >
          <p className="font-display text-lg font-bold">🎉 Tutte e tre le letture completate!</p>
          <p className="mt-1 text-sm opacity-90">
            Paso 8 · Lettura superado · +15 XP · la sección quedó registrada en tu progreso
          </p>
        </motion.div>
      )}
    </div>
  );
}
