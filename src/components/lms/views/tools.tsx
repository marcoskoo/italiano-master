"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { conjugatorFor, type ConjugatorVerb } from "@/lib/lms/conjugators";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";
import type { LangCode } from "@/lib/lms/types";

/* ════════ Vista: CONJUGADOR (v9.39 multilingüe) ═══════════════════
   El motor (tiempos, pronombres, verbos, formas) se resuelve por
   lengua de estudio vía conjugatorFor(): IT histórico + EN/PT/FR/DE.
   La vista DICCIONARIO sigue en ./dictionary.tsx.                    */

export function ConjugatorView() {
  const activeLang = (useLms((s) => s.activeLang) ?? "it") as LangCode;
  const pack = useMemo(() => conjugatorFor(activeLang), [activeLang]);

  const [query, setQuery] = useState(pack.popular[3] ?? "parlare");
  const [selected, setSelected] = useState(pack.popular[3] ?? "parlare");
  const [tense, setTense] = useState(pack.tenses[0].id);
  const [quizForm, setQuizForm] = useState<string | null>(null);

  /* al cambiar de lengua: recarga un verbo popular del pack nuevo
     (patrón React «adjusting state during render») */
  const [prevLang, setPrevLang] = useState(activeLang);
  if (prevLang !== activeLang) {
    setPrevLang(activeLang);
    const seed = pack.popular[3] ?? pack.popular[0];
    setSelected(seed);
    setQuery(seed);
    setTense(pack.tenses[0].id);
    setQuizForm(null);
  }

  const verb = pack.findVerb(selected);
  const suggestions = useMemo(() => pack.searchVerbs(query, 8), [pack, query]);
  const conjugated = useMemo(() => (verb ? pack.conjugate(verb, tense) : null), [pack, verb, tense]);

  const startQuiz = (pronounIdx: number) => {
    if (!conjugated) return;
    setQuizForm(conjugated.forms[pronounIdx]?.form ?? null);
  };

  return (
    <div className="space-y-6">
      {/* buscador */}
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && suggestions[0]) setSelected(suggestions[0].infinitive); }}
          placeholder={`Escribe un verbo en infinitivo… (${pack.popular.slice(0, 3).join(", ")}…)`}
          aria-label="Buscar verbo"
          className="min-h-12 w-full rounded-2xl border-2 border-soft bg-surface pl-11 pr-4 text-base outline-none transition-colors focus:border-verde"
        />
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
        {query !== selected && suggestions.length > 0 && (
          <div className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-2xl border border-soft bg-surface shadow-xl">
            {suggestions.map((v) => (
              <SuggestionRow key={v.infinitive} v={v} onPick={(inf) => { setSelected(inf); setQuery(inf); }} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {pack.popular.map((v) => (
          <button
            key={v}
            onClick={() => { setSelected(v); setQuery(v); }}
            className={cn("min-h-9 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all", selected === v ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft text-muted-it hover:border-verde/40")}
          >
            {v}
          </button>
        ))}
      </div>

      {verb && conjugated && (
        <>
          {/* info del verbo */}
          <div className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-4xl font-semibold">{verb.infinitive}</h2>
                  <AudioButton text={verb.infinitive} lang={activeLang} />
                </div>
                <p className="mt-1.5 text-sm text-muted-it">
                  <strong>{verb.es}</strong> · {verb.infoEs}
                </p>
              </div>
            </div>
          </div>

          {/* tiempos */}
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Tiempo verbal">
            {pack.tenses.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tense === t.id}
                onClick={() => setTense(t.id)}
                className={cn(
                  "min-h-10 rounded-xl border-2 px-3.5 py-2 text-xs font-bold transition-all",
                  tense === t.id ? "border-verde bg-verde text-white" : "border-soft bg-surface text-muted-it hover:border-verde/40"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* tabla de conjugación */}
          <motion.div key={`${activeLang}-${tense}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-3xl border border-soft bg-surface">
            <div className="border-b border-soft bg-crema-scura px-5 py-3.5 dark:bg-inchiostro/10">
              <p className="font-display text-lg font-semibold">{pack.tenses.find((t) => t.id === tense)?.label}</p>
              <p className="text-xs text-muted-it">{pack.tenses.find((t) => t.id === tense)?.hint}</p>
            </div>
            <div className="divide-y divide-inchiostro/5 dark:divide-inchiostro/15">
              {conjugated.forms.map((f, i) => (
                <button
                  key={i}
                  onClick={() => startQuiz(i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left transition-colors hover:bg-verde-tenue/50"
                  aria-label={`Escuchar ${f.form}`}
                >
                  <span className="font-mono text-xs font-bold uppercase text-muted-it">{f.pronoun}</span>
                  <span className="flex items-center gap-2.5">
                    <span className={cn("font-display text-xl font-semibold", f.irregular && "text-rosso-scuro dark:text-rosso")}>
                      {f.form}
                    </span>
                    <span onClick={(e) => e.stopPropagation()}>
                      <AudioButton text={f.form.split("/")[0]} size="sm" lang={activeLang} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* nota de forma formal */}
          <p className="rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm leading-relaxed text-oro-scuro dark:text-oro">
            💡 {pack.formalNote(verb, tense)}
          </p>

          {/* práctica flash del tiempo */}
          {quizForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-verde/40 bg-verde-tenue/60 p-5 text-center dark:bg-verde-tenue/25">
              <p className="text-sm leading-relaxed">
                🎧 Práctica: escucha y repite <strong>“{quizForm.split("/")[0]}”</strong> con la voz del navegador,
                luego en voz alta. +1 XP por forma escuchada.
              </p>
              <button onClick={() => setQuizForm(null)} className="mt-3 text-xs font-bold text-muted-it underline underline-offset-2">
                Cerrar
              </button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

function SuggestionRow({ v, onPick }: { v: ConjugatorVerb; onPick: (inf: string) => void }) {
  return (
    <button
      onClick={() => onPick(v.infinitive)}
      className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-verde-tenue"
    >
      {v.infinitive}
      <span className="text-xs font-normal text-muted-it">{v.es} · {v.patternLabel}</span>
    </button>
  );
}
