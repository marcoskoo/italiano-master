"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Hash, RefreshCcw, Sparkles, Trophy } from "lucide-react";
import { numberToItalian, ordinalToItalian, timeToItalian, randomNumber, italianEquals } from "@/lib/lms/numbers";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Laboratorio de números · plugin v1.1 ──────────────────── */

type Tab = "convertisseur" | "ora" | "pratica";
type Diff = "facile" | "medio" | "difficile";

function FeatureOff() {
  const navigate = useLms((s) => s.navigate);
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">🔢</span>
      <h2 className="mt-4 font-display text-xl font-semibold">Numeri Lab non disponibile</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-it">La administración ha desactivado este laboratorio.</p>
      <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
        Torna all'inizio
      </button>
    </div>
  );
}

export function NumberLabView() {
  const [tab, setTab] = useState<Tab>("convertisseur");
  const remoteConfig = useLms((s) => s.remoteConfig);
  if (remoteConfig && remoteConfig.features.numberLab === false) return <FeatureOff />;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Secciones del laboratorio">
        {([
          { id: "convertisseur", label: "Conversor", icon: Hash },
          { id: "ora", label: "La hora", icon: Clock },
          { id: "pratica", label: "Práctica", icon: Sparkles },
        ] as const).map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition-all",
              tab === t.id ? "border-verde bg-verde text-white shadow-md shadow-verde/20" : "border-soft bg-surface hover:bg-verde-tenue"
            )}
          >
            <t.icon className="h-4 w-4" aria-hidden="true" /> {t.label}
          </button>
        ))}
      </div>
      {tab === "convertisseur" && <Converter />}
      {tab === "ora" && <ClockLab />}
      {tab === "pratica" && <Practice />}
    </div>
  );
}

/* ── Convertidor número → italiano ── */
function Converter() {
  const [num, setNum] = useState(42);
  const [showOrdinal, setShowOrdinal] = useState(false);
  const words = numberToItalian(num);
  const ord = showOrdinal ? ordinalToItalian(num) : "";

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Número → parole</h2>
        <p className="mt-1 text-sm text-muted-it">Escribe un número (0 – 999.999.999) o mueve el control:</p>
        <input
          type="number"
          min={0}
          max={999999999}
          value={num}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!Number.isNaN(v)) setNum(Math.max(0, Math.min(999999999, Math.floor(v))));
          }}
          aria-label="Número a convertir"
          className="mt-4 w-full rounded-2xl border border-soft bg-crema px-4 py-3 font-mono text-2xl font-bold outline-none focus:ring-2 focus:ring-verde/40"
        />
        <input
          type="range"
          min={0}
          max={200}
          value={Math.min(num, 200)}
          onChange={(e) => setNum(Number(e.target.value))}
          aria-label="Deslizador de número"
          className="mt-4 w-full accent-[#0E7A4E]"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {[3, 17, 23, 48, 68, 100, 1998, 2024, 100000, 999999999].map((n) => (
            <button key={n} onClick={() => setNum(n)} className="min-h-9 rounded-lg border border-soft bg-crema px-2.5 py-1 font-mono text-xs font-bold hover:border-verde/40">
              {n.toLocaleString("es")}
            </button>
          ))}
        </div>
        <label className="mt-4 flex min-h-11 items-center gap-2 text-sm font-semibold">
          <input type="checkbox" checked={showOrdinal} onChange={(e) => setShowOrdinal(e.target.checked)} className="h-4 w-4 accent-[#0E7A4E]" />
          Mostrar también el ordinal
        </label>
      </section>

      <section className="flex flex-col justify-center rounded-3xl border-2 border-verde/40 bg-verde-tenue p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-verde-scuro dark:text-verde">In italiano</p>
        <motion.p key={num + String(showOrdinal)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 font-display text-3xl font-semibold leading-tight text-inchiostro sm:text-4xl">
          {words}
        </motion.p>
        {showOrdinal && (
          <p className="mt-2 font-display text-xl italic text-verde-scuro dark:text-verde">{num}º → {ord}</p>
        )}
        <div className="mt-4">
          <AudioButton text={words} variant="full" label="Escucha el número" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          Trampas del italiano: <b>ventuno</b> y <b>ventotto</b> (apócope), <b>ventitré</b> (acento), <b>cento</b> invariable, <b>mille</b> / <b>duemila</b>.
        </p>
      </section>
    </div>
  );
}

/* ── La hora ── */
function ClockLab() {
  const [h, setH] = useState(9);
  const [m, setM] = useState(30);
  const sentence = timeToItalian(h, m);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Che ora è?</h2>
        <p className="mt-1 text-sm text-muted-it">Ajusta las manecillas:</p>
        <div className="mt-5 grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="nl-h" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Horas</label>
            <input id="nl-h" type="range" min={0} max={23} value={h} onChange={(e) => setH(Number(e.target.value))} className="w-full accent-[#0E7A4E]" />
            <p className="text-center font-mono text-2xl font-bold">{String(h).padStart(2, "0")}</p>
          </div>
          <div>
            <label htmlFor="nl-m" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Minutos</label>
            <input id="nl-m" type="range" min={0} max={59} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full accent-[#0E7A4E]" />
            <p className="text-center font-mono text-2xl font-bold">{String(m).padStart(2, "0")}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[[8, 0], [8, 15], [8, 30], [8, 45], [12, 0], [0, 0], [1, 45], [13, 30]].map(([hh, mm]) => (
            <button key={`${hh}:${mm}`} onClick={() => { setH(hh); setM(mm); }} className="min-h-9 rounded-lg border border-soft bg-crema px-2.5 py-1 font-mono text-xs font-bold hover:border-verde/40">
              {String(hh).padStart(2, "0")}:{String(mm).padStart(2, "0")}
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center rounded-3xl border-2 border-oro/50 bg-oro-tenue p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-oro-scuro">Risposta</p>
        <motion.p key={`${h}-${m}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 font-display text-3xl font-semibold leading-tight text-inchiostro sm:text-4xl">
          {sentence}
        </motion.p>
        <div className="mt-4">
          <AudioButton text={sentence} variant="full" label="Escucha la hora" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          Recuerda: <b>è l'una</b> (singular), <b>sono le…</b> (plural), <b>e un quarto / e mezza / meno un quarto</b>, y los astros: <b>mezzogiorno</b> y <b>mezzanotte</b>.
        </p>
      </section>
    </div>
  );
}

/* ── Práctica con XP ── */
function Practice() {
  const [diff, setDiff] = useState<Diff>("facile");
  const [target, setTarget] = useState(() => randomNumber("facile"));
  const [input, setInput] = useState("");
  const [state, setState] = useState<"idle" | "ok" | "ko">("idle");
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);

  const next = useCallback(() => {
    setTarget(randomNumber(diff));
    setInput("");
    setState("idle");
    setReveal(false);
  }, [diff]);

  const check = () => {
    const good = italianEquals(input, numberToItalian(target));
    setState(good ? "ok" : "ko");
    setReveal(true);
    setScore((s) => ({ ok: s.ok + (good ? 1 : 0), total: s.total + 1 }));
    if (good) {
      addXp(6, "vocabolario");
      recordCorrect("numeri");
    } else {
      recordError("numeri");
    }
  };

  const pct = score.total > 0 ? Math.round((score.ok / score.total) * 100) : 0;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(["facile", "medio", "difficile"] as const).map((d) => (
            <button
              key={d}
              onClick={() => { setDiff(d); setTarget(randomNumber(d)); setInput(""); setState("idle"); setReveal(false); }}
              className={cn("min-h-11 rounded-xl border px-4 text-sm font-bold capitalize transition-all", diff === d ? "border-verde bg-verde text-white" : "border-soft bg-surface hover:bg-verde-tenue")}
            >
              {d === "facile" ? "0–99" : d === "medio" ? "0–999" : "0–99.999"}
            </button>
          ))}
        </div>
        <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold", pct >= 70 ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-oro-tenue text-oro-scuro")}>
          <Trophy className="h-3.5 w-3.5" aria-hidden="true" /> {score.ok}/{score.total} · {pct}%
        </span>
      </div>

      <div className={cn(
        "rounded-3xl border-2 bg-surface p-8 text-center transition-colors",
        state === "ok" ? "border-verde bg-verde-tenue quiz-correct" : state === "ko" ? "border-rosso bg-rosso-tenue quiz-wrong" : "border-soft"
      )}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Come si dice</p>
        <motion.p key={target} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="my-5 font-mono text-6xl font-bold text-inchiostro">
          {target.toLocaleString("es")}
        </motion.p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && state !== "idle" && reveal) next(); else if (e.key === "Enter" && input.trim()) check(); }}
          disabled={reveal}
          placeholder="scrivi in italiano… (p. ej. trentaquattro)"
          aria-label="Tu respuesta en italiano"
          className="w-full rounded-2xl border border-soft bg-crema px-4 py-3 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-verde/40 disabled:opacity-60"
        />
        {!reveal ? (
          <button onClick={check} disabled={!input.trim()} className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40">
            Verifica
          </button>
        ) : (
          <div className="mt-4">
            <p className={cn("rounded-2xl p-3 font-bold", state === "ok" ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
              {state === "ok" ? "🎉 Perfetto! +6 XP" : `Quasi! Era: ${numberToItalian(target)}`}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <AudioButton text={numberToItalian(target)} variant="full" label="Escucha" />
              <button onClick={next} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-5 py-2.5 text-sm font-bold text-crema transition-all hover:scale-105 dark:bg-verde dark:text-inchiostro">
                <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Prossimo
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-muted-it">La comparación ignora acentos, espacios y apóstrofos: <b>venti tre</b> y <b>ventitré</b> cuentan como correctas.</p>
    </div>
  );
}
