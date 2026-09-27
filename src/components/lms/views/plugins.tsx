"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ArrowLeft, BookMarked, ChevronDown, Download, Ear, FileSpreadsheet,
  Keyboard, Quote, RefreshCcw, Search, Send, Sparkles, Volume2, X,
} from "lucide-react";
import { PROVERBS } from "@/lib/lms/proverbs";
import { FALSE_FRIENDS } from "@/lib/lms/falsefriends";
import { VOCAB, VOCAB_CATEGORIES } from "@/lib/lms/vocabulary";
import type { CefrLevel, WordCategory } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { speak } from "@/lib/lms/tts";
import { cn } from "@/lib/utils";

/* ── Plugin v4.0 · Estensioni de Italiano Master ────────────────────
   1. Proverbi e modi di dire (73 entradas)
   2. Falsi amici IT–ES (87 trampas)
   3. Dettato · dictado con TTS y corrección palabra a palabra
   4. Export Anki/CSV · mazos desde el diccionario o el SRS ───────── */

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

/* filtro de nivel reutilizable */
function LevelChips({ value, onChange }: { value: CefrLevel | "tutti"; onChange: (v: CefrLevel | "tutti") => void }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por nivel">
      <button
        onClick={() => onChange("tutti")}
        className={cn(
          "min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors",
          value === "tutti" ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde"
        )}
      >
        Tutti
      </button>
      {LEVELS.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={cn(
            "min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors",
            value === l ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <label className="relative block w-full sm:max-w-xs">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-11 w-full rounded-xl border border-soft bg-surface pl-10 pr-9 text-sm outline-none focus:ring-2 focus:ring-verde/40"
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Limpiar búsqueda" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-muted-it hover:bg-inchiostro/5">
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}

/* ════════════════════════════════════════════════════════════════════
   1 · PROVERBI E MODI DI DIRE
   ════════════════════════════════════════════════════════════════════ */

export function ProverbiView() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [kind, setKind] = useState<"tutti" | "proverbio" | "modo di dire">("tutti");

  const filtered = useMemo(() => {
    const nq = norm(q);
    return PROVERBS.filter(
      (p) =>
        (level === "tutti" || p.level === level) &&
        (kind === "tutti" || p.kind === kind) &&
        (!nq ||
          norm(p.it).includes(nq) ||
          norm(p.es).includes(nq) ||
          norm(p.literal).includes(nq) ||
          norm(p.meaning).includes(nq))
    );
  }, [q, level, kind]);

  return (
    <div>
      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
          <Quote className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · Paremiología italiana
        </p>
        <p className="mt-2 text-sm leading-relaxed text-inchiostro/80">
          {PROVERBS.length} proverbios y modismos con traducción literal, equivalente español y contexto de uso:
          la sabiduría que los italianos de verdad dicen en la vida diaria.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <SearchInput value={q} onChange={setQ} placeholder="Cerca: lupo, palle, magari…" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <LevelChips value={level} onChange={setLevel} />
            <div className="flex gap-1.5" role="group" aria-label="Filtrar por tipo">
              {(["tutti", "modo di dire", "proverbio"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setKind(k)}
                  className={cn(
                    "min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors",
                    kind === k ? "bg-rosso text-white" : "border border-soft bg-surface text-muted-it hover:text-rosso"
                  )}
                >
                  {k === "tutti" ? "Tutti" : k === "proverbio" ? "Proverbi" : "Modi di dire"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs font-semibold text-muted-it" role="status">
        {filtered.length} de {PROVERBS.length} entradas
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.015, 0.3) }}
            className="flex flex-col rounded-2xl border border-soft bg-surface p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold leading-snug text-verde-scuro dark:text-verde sm:text-xl">{p.it}</h3>
              <button
                onClick={() => speak(p.it, { rate: 0.85 })}
                aria-label={`Escuchar: ${p.it}`}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-verde/30 bg-verde-tenue text-verde transition-all hover:scale-105 active:scale-95"
              >
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-1 text-xs italic text-muted-it">«{p.literal}»</p>
            <p className="mt-2.5 text-sm font-bold text-rosso-scuro dark:text-rosso">{p.es}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-inchiostro/80">{p.meaning}</p>
            {p.example && (
              <div className="mt-3 rounded-xl bg-crema-scura p-3 dark:bg-inchiostro/10">
                <p className="text-sm font-semibold italic text-inchiostro">{p.example.it}</p>
                <p className="mt-0.5 text-xs text-muted-it">{p.example.es}</p>
              </div>
            )}
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-verde-tenue px-2.5 py-1 text-[10px] font-bold text-verde-scuro dark:text-verde">{p.level}</span>
              <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 text-[10px] font-bold text-muted-it">
                {p.kind === "proverbio" ? "Proverbio" : "Modo di dire"}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-it">Nessun risultato per «{q}». Prova con otra palabra.</p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   2 · FALSI AMICI IT–ES
   ════════════════════════════════════════════════════════════════════ */

export function FalsiAmiciView() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const nq = norm(q);
    return FALSE_FRIENDS.filter(
      (f) =>
        (level === "tutti" || f.level === level) &&
        (!nq ||
          norm(f.it).includes(nq) ||
          norm(f.es).includes(nq) ||
          norm(f.itMeaning).includes(nq) ||
          norm(f.trap).includes(nq))
    );
  }, [q, level]);

  return (
    <div>
      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · Trampas léxicas
        </p>
        <p className="mt-2 text-sm leading-relaxed text-inchiostro/80">
          {FALSE_FRIENDS.length} falsos amigos entre italiano y español: la palabra que parece igual pero no lo es.
          Toca cada tarjeta para descubrir la trampa y el ejemplo real.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <SearchInput value={q} onChange={setQ} placeholder="Cerca: burro, salire, largo…" />
          <LevelChips value={level} onChange={setLevel} />
        </div>
      </div>

      <p className="mt-4 text-xs font-semibold text-muted-it" role="status">
        {filtered.length} de {FALSE_FRIENDS.length} trampas
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((f, i) => {
          const open = openId === f.id;
          return (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.012, 0.3) }}
              onClick={() => setOpenId(open ? null : f.id)}
              aria-expanded={open}
              className={cn(
                "flex flex-col rounded-2xl border p-4 text-left transition-all sm:p-5",
                open ? "border-rosso/40 bg-rosso-tenue/40 dark:bg-inchiostro/20" : "border-soft bg-surface hover:border-rosso/30"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="truncate font-display text-lg font-semibold text-inchiostro">{f.it}</span>
                  <span className="shrink-0 text-xs font-bold text-muted-it">≠</span>
                  <span className="truncate font-display text-lg font-semibold text-rosso-scuro dark:text-rosso">{f.es}</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-it transition-transform", open && "rotate-180")} aria-hidden="true" />
              </div>
              <p className="mt-1.5 truncate text-xs text-muted-it">
                <span className="font-semibold">{f.it}</span>: {f.itMeaning}
              </p>
              {open ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 flex flex-1 flex-col">
                  <p className="rounded-xl bg-surface p-3 text-xs leading-relaxed text-inchiostro/80">
                    <span className="font-bold text-rosso-scuro dark:text-rosso">La trampa: </span>
                    {f.trap}
                  </p>
                  <div className="mt-2.5 flex-1 rounded-xl bg-crema-scura p-3 dark:bg-inchiostro/10">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold italic text-inchiostro">{f.itExample}</p>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => { e.stopPropagation(); speak(f.itExample, { rate: 0.85 }); }}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); speak(f.itExample, { rate: 0.85 }); } }}
                        aria-label={`Escuchar: ${f.itExample}`}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-verde/30 bg-surface text-verde"
                      >
                        <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-it">{f.esExample}</p>
                  </div>
                </motion.div>
              ) : (
                <p className="mt-2 text-xs font-semibold text-muted-it">Toca para ver la trampa ↴</p>
              )}
              <span className="mt-3 inline-flex w-fit rounded-full bg-inchiostro/5 px-2.5 py-1 text-[10px] font-bold text-muted-it">{f.level}</span>
            </motion.button>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-it">Nessun risultato per «{q}».</p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   3 · DETTATO · dictado con TTS y corrección palabra a palabra
   ════════════════════════════════════════════════════════════════════ */

type DettatoState = "setup" | "playing" | "done";

const cleanWord = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

function diffWords(target: string, typed: string): { word: string; ok: boolean }[] {
  const t = target.split(/\s+/).filter(Boolean);
  const y = typed.split(/\s+/).filter(Boolean);
  return t.map((w, i) => ({ word: w, ok: cleanWord(w) === cleanWord(y[i] ?? "") }));
}

export function DettatoView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);

  const [state, setState] = useState<DettatoState>("setup");
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [rounds, setRounds] = useState<{ it: string; es: string; word: string }[]>([]);
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [checked, setChecked] = useState<null | { target: string; es: string; result: { word: string; ok: boolean }[] }>(null);
  const [score, setScore] = useState({ perfect: 0, ok: 0, total: 0 });
  const [slow, setSlow] = useState(false);

  const pool = useMemo(
    () => VOCAB.filter((w) => (level === "tutti" || w.level === level) && w.example?.it),
    [level]
  );

  function start() {
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    setRounds(shuffled.map((w) => ({ it: w.example.it, es: w.example.es, word: w.it })));
    setIdx(0);
    setTyped("");
    setChecked(null);
    setScore({ perfect: 0, ok: 0, total: 0 });
    setState("playing");
  }

  function check() {
    if (!rounds[idx] || checked) return;
    const r = rounds[idx];
    const result = diffWords(r.it, typed);
    const okWords = result.filter((x) => x.ok).length;
    const perfect = okWords === result.length;
    setChecked({ target: r.it, es: r.es, result });
    setScore((s) => ({ perfect: s.perfect + (perfect ? 1 : 0), ok: s.ok + (okWords / result.length >= 0.7 ? 1 : 0), total: s.total + 1 }));
  }

  function next() {
    if (idx + 1 >= rounds.length) {
      addXp(score.perfect * 5 + score.ok * 3, "ascolto");
      recordQuiz({ id: `dettato-${Date.now()}`, label: `Dettato (${level === "tutti" ? "mix" : level})`, score: score.ok, total: score.total, date: new Date().toISOString(), kind: "juego" });
      setState("done");
      return;
    }
    setIdx(idx + 1);
    setTyped("");
    setChecked(null);
  }

  /* ── setup ── */
  if (state === "setup") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
            <Keyboard className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · Dettato
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Dettato di italiano</h2>
          <p className="mt-3 text-sm leading-relaxed text-inchiostro/80">
            Escucha la frase en italiano (voz TTS) y escribela tal como la oyes. Al enviar, verás la corrección
            palabra por palabra. Diez frases por ronda, elegidas al azar del diccionario.
          </p>
          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-it">Nivel del diccionario</p>
            <LevelChips value={level} onChange={setLevel} />
            <p className="mt-2 text-xs text-muted-it">{pool.length} frases disponibles en este nivel.</p>
          </div>
          <button
            onClick={start}
            disabled={pool.length < 5}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro disabled:opacity-50 sm:w-auto"
          >
            <Ear className="h-4 w-4" aria-hidden="true" /> Inizia il dettato
          </button>
          {pool.length < 5 && <p className="mt-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">Sirven al menos 5 frases: elige otro nivel.</p>}
        </div>
      </div>
    );
  }

  /* ── resumen final ── */
  if (state === "done") {
    const accuracy = score.total > 0 ? Math.round((score.ok / score.total) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-soft bg-surface p-6 text-center sm:p-8">
          <p className="font-display text-5xl">{accuracy >= 90 ? "🏆" : accuracy >= 70 ? "👏" : "💪"}</p>
          <h2 className="mt-3 font-display text-2xl font-semibold">Dettato completato!</h2>
          <p className="mt-2 text-sm text-muted-it">Frases con al menos 70% de palabras correctas:</p>
          <p className="mt-3 font-display text-4xl font-bold text-verde-scuro dark:text-verde">
            {score.ok}/{score.total}
          </p>
          <p className="mt-2 text-sm font-semibold text-muted-it">
            {score.perfect} perfectas · precisión global {accuracy}%
          </p>
          <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
            <button onClick={start} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro">
              <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Ancora una volta
            </button>
            <button onClick={() => setState("setup")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-soft px-6 text-sm font-bold text-muted-it transition-colors hover:bg-inchiostro/5">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Cambia livello
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── ronda activa ── */
  const r = rounds[idx];
  const okWords = checked ? checked.result.filter((x) => x.ok).length : 0;
  const pct = checked && checked.result.length ? Math.round((okWords / checked.result.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-2xl">
      {/* progreso */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-inchiostro/10">
          <div className="h-full rounded-full bg-verde transition-all" style={{ width: `${((idx + (checked ? 1 : 0)) / rounds.length) * 100}%` }} />
        </div>
        <p className="shrink-0 text-xs font-bold text-muted-it">
          {idx + 1}/{rounds.length}
        </p>
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <button
            onClick={() => speak(r.it, { rate: slow ? 0.6 : 0.9 })}
            className="inline-flex min-h-14 w-full max-w-xs items-center justify-center gap-2.5 rounded-2xl bg-verde px-6 text-sm font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.02] hover:bg-verde-scuro active:scale-95"
          >
            <Volume2 className="h-5 w-5" aria-hidden="true" /> Ascolta la frase
          </button>
          <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-xs font-semibold text-muted-it">
            <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} className="h-4 w-4 accent-verde" />
            Velocità lenta (0.6×)
          </label>
        </div>

        {!checked ? (
          <>
            <textarea
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Scrivi qui quello che senti…"
              rows={3}
              autoFocus
              className="mt-5 w-full resize-none rounded-2xl border border-soft bg-crema px-4 py-3 text-base leading-relaxed outline-none focus:ring-2 focus:ring-verde/40"
            />
            <button
              onClick={check}
              disabled={!typed.trim()}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" /> Controlla
            </button>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-it">Correzione · {pct}% ({okWords}/{checked.result.length} parole)</p>
            <p className="flex flex-wrap gap-x-1.5 gap-y-2 text-lg font-semibold leading-relaxed">
              {checked.result.map((w, i) => (
                <span key={i} className={cn("rounded-md px-1.5 py-0.5", w.ok ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro line-through decoration-2 dark:text-rosso")}>
                  {w.word}
                </span>
              ))}
            </p>
            <div className="mt-4 rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
              <p className="text-sm font-semibold italic text-inchiostro">{checked.target}</p>
              <p className="mt-1 text-xs text-muted-it">{checked.es} · parola chiave: <span className="font-bold">{r.word}</span></p>
            </div>
            <button
              onClick={next}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro"
            >
              {idx + 1 >= rounds.length ? "Vedi il risultato" : "Prossima frase →"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   4 · EXPORT ANKI/CSV
   ════════════════════════════════════════════════════════════════════ */

type ExportSource = "tutto" | "categoria" | "srs";

export function AnkiExportView() {
  const srs = useLms((s) => s.srs);
  const [source, setSource] = useState<ExportSource>("tutto");
  const [cat, setCat] = useState<WordCategory | "">("");
  const [fromLevel, setFromLevel] = useState<CefrLevel>("A1");
  const [toLevel, setToLevel] = useState<CefrLevel>("C2");
  const [withIpa, setWithIpa] = useState(true);
  const [withExample, setWithExample] = useState(true);
  const [format, setFormat] = useState<"tsv" | "csv">("tsv");

  const LEVEL_ORDER: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };

  const words = useMemo(() => {
    const inRange = (l: CefrLevel) => LEVEL_ORDER[l] >= LEVEL_ORDER[fromLevel] && LEVEL_ORDER[l] <= LEVEL_ORDER[toLevel];
    if (source === "srs") return VOCAB.filter((w) => srs[w.id] && inRange(w.level));
    if (source === "categoria" && cat) return VOCAB.filter((w) => w.cat === cat && inRange(w.level));
    return VOCAB.filter((w) => inRange(w.level));
  }, [source, cat, fromLevel, toLevel, srs]);

  const rows = useMemo(() => {
    const esc = (s: string) => (format === "csv" ? `"${s.replace(/"/g, '""')}"` : s);
    return words.map((w) => {
      const backParts = [w.es];
      if (withIpa && (w.ipa || w.pron)) backParts.push(`[${w.ipa ?? w.pron}]`);
      if (withExample && w.example) backParts.push(`„${w.example.it}" (${w.example.es})`);
      return [esc(w.it), esc(backParts.join(" · "))].join(format === "tsv" ? "\t" : ",");
    });
  }, [words, withIpa, withExample, format]);

  function download() {
    const header = format === "tsv" ? "#separator:tab\n#html:false\n#columns:Italiano\tEspañol\n" : "Italiano,Español\n";
    const blob = new Blob([header + rows.join("\n") + "\n"], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `italiano-master-${source === "srs" ? "srs" : source === "categoria" ? cat : "dizionario"}-${fromLevel}-${toLevel}.${format === "tsv" ? "txt" : "csv"}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
          <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · Export
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Mazzi Anki / CSV</h2>
        <p className="mt-3 text-sm leading-relaxed text-inchiostro/80">
          Exporta cualquier slice del diccionario (o tus tarjetas de repaso) a un archivo listo para importar en
          Anki, Quizlet, Excel o Google Sheets. Elige origen, niveles y campos.
        </p>

        {/* origen */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-it">Origine</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {([
              { id: "tutto" as const, label: "Diccionario completo", icon: BookMarked },
              { id: "categoria" as const, label: "Por categoría", icon: FileSpreadsheet },
              { id: "srs" as const, label: "Mi SRS (repaso)", icon: RefreshCcw },
            ]).map((o) => (
              <button
                key={o.id}
                onClick={() => setSource(o.id)}
                className={cn(
                  "flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-bold transition-colors",
                  source === o.id ? "border-verde bg-verde text-white" : "border-soft bg-surface text-muted-it hover:text-verde"
                )}
              >
                <o.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{o.label}</span>
              </button>
            ))}
          </div>
          {source === "categoria" && (
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as WordCategory)}
              className="mt-2.5 min-h-11 w-full rounded-xl border border-soft bg-crema px-3 text-sm outline-none focus:ring-2 focus:ring-verde/40 sm:max-w-xs"
              aria-label="Elegir categoría"
            >
              <option value="">— elige categoría —</option>
              {VOCAB_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
        </div>

        {/* niveles */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-it">Dal livello</span>
            <select value={fromLevel} onChange={(e) => setFromLevel(e.target.value as CefrLevel)} className="min-h-11 w-full rounded-xl border border-soft bg-crema px-3 text-sm outline-none focus:ring-2 focus:ring-verde/40">
              {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-it">Al livello</span>
            <select value={toLevel} onChange={(e) => setToLevel(e.target.value as CefrLevel)} className="min-h-11 w-full rounded-xl border border-soft bg-crema px-3 text-sm outline-none focus:ring-2 focus:ring-verde/40">
              {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </label>
        </div>

        {/* campos + formato */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-xs font-semibold text-inchiostro/80">
            <input type="checkbox" checked={withIpa} onChange={(e) => setWithIpa(e.target.checked)} className="h-4 w-4 accent-verde" /> Pronuncia (IPA)
          </label>
          <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-xs font-semibold text-inchiostro/80">
            <input type="checkbox" checked={withExample} onChange={(e) => setWithExample(e.target.checked)} className="h-4 w-4 accent-verde" /> Ejemplo
          </label>
          <div className="flex gap-1.5" role="group" aria-label="Formato de archivo">
            {(["tsv", "csv"] as const).map((f) => (
              <button key={f} onClick={() => setFormat(f)} className={cn("min-h-9 rounded-full px-4 text-xs font-bold transition-colors", format === f ? "bg-verde text-white" : "border border-soft text-muted-it hover:text-verde")}>
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* preview + descarga */}
        <div className="mt-5 rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-it">Anteprima ({words.length} carte)</p>
          <pre className="overflow-x-auto whitespace-pre text-xs leading-relaxed text-inchiostro/90">
            {rows.slice(0, 5).join("\n")}
            {rows.length > 5 ? "\n…" : ""}
          </pre>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <button
            onClick={download}
            disabled={words.length === 0}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro disabled:opacity-50"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Scarica {words.length} carte
          </button>
          <button
            onClick={() => { setSource("tutto"); setCat(""); setFromLevel("A1"); setToLevel("C2"); setWithIpa(true); setWithExample(true); }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-soft px-6 text-sm font-bold text-muted-it transition-colors hover:bg-inchiostro/5"
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Reset
          </button>
        </div>
        {source === "srs" && words.length === 0 && (
          <p className="mt-3 text-xs font-semibold text-muted-it">Todavía no tienes palabras en el repaso: añade palabras desde Vocabulario o las lecciones.</p>
        )}
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-verde-tenue p-3 text-[11px] leading-relaxed text-verde-scuro dark:text-verde">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          En Anki: Archivo → Importar → selecciona el archivo descargado. El formato TSV ya incluye las cabeceras
          que Anki entiende (separador: tabulador, 2 columnas).
        </p>
      </div>
    </div>
  );
}
