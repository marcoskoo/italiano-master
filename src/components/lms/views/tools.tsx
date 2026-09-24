"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookA, Calculator, Search, Volume2 } from "lucide-react";
import {
  conjugate, findVerb, searchVerbs, TENSES, verbInfo, type TenseId, PRONOUNS,
} from "@/lib/lms/conjugator";
import { VOCAB, VOCAB_BY_ID, searchVocab } from "@/lib/lms/vocabulary";
import { CATEGORY_META, CEFR_LEVELS } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { newCard } from "@/lib/lms/srs";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ════════ Vista: CONJUGADOR (Coniugatore) ════════ */

const POPULAR = ["essere", "avere", "fare", "andare", "parlare", "venire", "prendere", "capire", "volere", "dovere"];

export function ConjugatorView() {
  const [query, setQuery] = useState("parlare");
  const [selected, setSelected] = useState("parlare");
  const [tense, setTense] = useState<TenseId>("presente");
  const [quizForm, setQuizForm] = useState<string | null>(null);

  const verb = findVerb(selected);
  const suggestions = useMemo(() => searchVerbs(query, 8), [query]);
  const conjugated = useMemo(() => (verb ? conjugate(verb, tense) : null), [verb, tense]);

  const startQuiz = (pronounIdx: number) => {
    if (!conjugated) return;
    setQuizForm(conjugated.forms[pronounIdx].form);
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
          placeholder="Scrivi un verbo all'infinito… (parlare, essere, andare…)"
          aria-label="Buscar verbo"
          className="min-h-12 w-full rounded-2xl border-2 border-soft bg-surface pl-11 pr-4 text-base outline-none transition-colors focus:border-verde"
        />
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
        {query !== selected && suggestions.length > 0 && (
          <div className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-2xl border border-soft bg-surface shadow-xl">
            {suggestions.map((v) => (
              <button
                key={v.infinitive}
                onClick={() => { setSelected(v.infinitive); setQuery(v.infinitive); }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-verde-tenue"
              >
                {v.infinitive}
                <span className="text-xs font-normal text-muted-it">{v.es} · {v.pattern === "irregular" ? "irregular" : v.pattern}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {POPULAR.map((v) => (
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
                  <AudioButton text={verb.infinitive} />
                </div>
                <p className="mt-1.5 text-sm text-muted-it">
                  {verbInfo(verb).es} · patrón <strong>{verb.pattern === "irregular" ? "irregular" : verb.pattern}</strong> ·
                  auxiliar <strong className={verb.auxiliary === "essere" ? "text-rosso" : "text-verde-scuro dark:text-verde"}>{verb.auxiliary}</strong>
                  {verb.auxiliary === "essere" && " (participio concuerda)"} · participio <strong>{verb.participle}</strong> · gerundio <strong>{verb.gerund}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* tiempos */}
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Tiempo verbal">
            {TENSES.map((t) => (
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
          <motion.div key={tense} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden rounded-3xl border border-soft bg-surface">
            <div className="border-b border-soft bg-crema-scura px-5 py-3.5 dark:bg-inchiostro/10">
              <p className="font-display text-lg font-semibold">{TENSES.find((t) => t.id === tense)?.label}</p>
              <p className="text-xs text-muted-it">{TENSES.find((t) => t.id === tense)?.hint}</p>
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
                    <span className={cn("font-display text-xl font-semibold", f.irregular && tense !== "passato_prossimo" && "text-rosso-scuro dark:text-rosso")}>
                      {f.form}
                    </span>
                    <span onClick={(e) => e.stopPropagation()}>
                      <AudioButton text={f.form.split("/")[0]} size="sm" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* nota de forma formal */}
          <p className="rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm leading-relaxed text-oro-scuro dark:text-oro">
            💡 Para el registro formal usa <strong>Lei</strong> con las formas de 3ª persona: {PRONOUNS[2]} →{" "}
            <strong>{conjugated.forms[2].form.split("/")[0]}</strong> con “Lei”. Las formas irregulares se
            muestran en <span className="font-bold text-rosso-scuro dark:text-rosso">rojo</span>.
          </p>

          {/* práctica flash del tiempo */}
          {quizForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-3xl border border-verde/40 bg-verde-tenue/60 p-5 text-center dark:bg-verde-tenue/25">
              <p className="text-sm leading-relaxed">
                🎧 Pratica: escucha y repite <strong>“{quizForm.split("/")[0]}”</strong> con la voz del navegador,
                luego en voz alta. +1 XP por forma escuchada.
              </p>
              <button onClick={() => setQuizForm(null)} className="mt-3 text-xs font-bold text-muted-it underline underline-offset-2">
                Chiudi
              </button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

/* ════════ Vista: DICCIONARIO (Dizionario) ════════ */

const TYPE_LABELS: Record<string, string> = {
  sostantivo: "sustantivo", verbo: "verbo", aggettivo: "adjetivo", avverbio: "adverbio", espressione: "expresión",
};

export function DictionaryView() {
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [catFilter, setCatFilter] = useState<string>("all");
  const [selected, setSelected] = useState<string | null>(null);

  const srs = useLms((s) => s.srs);
  const upsertSrs = useLms((s) => s.upsertSrs);
  const addXp = useLms((s) => s.addXp);

  const results = useMemo(() => {
    let list = query.trim() ? searchVocab(query) : VOCAB;
    if (levelFilter !== "all") list = list.filter((w) => w.level === levelFilter);
    if (catFilter !== "all") list = list.filter((w) => w.cat === catFilter);
    return list.slice(0, 60);
  }, [query, levelFilter, catFilter]);

  const word = selected ? VOCAB_BY_ID[selected] : undefined;

  if (word) {
    const related = (word.related ?? []).map((r) => VOCAB.find((v) => v.it === r || v.it.toLowerCase() === r.split(" ")[0].toLowerCase())).filter(Boolean);
    return (
      <div>
        <button onClick={() => setSelected(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna al dizionario
        </button>

        <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="font-display text-5xl font-semibold">{word.it}</h2>
                <AudioButton text={word.it} size="lg" />
              </div>
              <p className="mt-2 font-mono text-lg text-muted-it">/{word.pron}/</p>
              <p className="mt-3 text-2xl text-verde-scuro dark:text-verde">{word.es}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro dark:text-verde">{word.level}</span>
              <button
                onClick={() => { if (!srs[word.id]) { upsertSrs(word.id, newCard(word.id)); addXp(2, "vocabolario"); } }}
                disabled={!!srs[word.id]}
                className={cn(
                  "rounded-xl border-2 px-4 py-2.5 text-xs font-bold transition-all",
                  srs[word.id] ? "border-verde/40 bg-verde-tenue text-verde-scuro dark:text-verde" : "border-oro/50 bg-oro-tenue text-oro-scuro hover:scale-105 dark:text-oro"
                )}
              >
                {srs[word.id] ? "✓ nel ripasso" : "+ aggiungi al ripasso"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-it">Categoria grammaticale</p>
              <p className="mt-2 text-lg font-semibold">
                {TYPE_LABELS[word.type]}
                {word.gender && <span className={cn("ml-2 text-sm", word.gender === "m" ? "noun-m" : "noun-f")}>({word.gender === "m" ? "masculino" : "femenino"})</span>}
                {word.plural && <span className="ml-2 font-mono text-sm text-muted-it">· pl. {word.plural}</span>}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-it">Categoria tematica</p>
              <p className="mt-1.5 text-lg">{CATEGORY_META[word.cat].emoji} {CATEGORY_META[word.cat].es}</p>
            </div>
            <div className="rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-it">Esempio</p>
              <p className="mt-2 font-display text-xl italic leading-snug">“{word.example.it}”</p>
              <p className="mt-1.5 text-sm text-muted-it">{word.example.es}</p>
            </div>
          </div>

          {(word.syn || word.ant || related.length > 0) && (
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {word.syn && (
                <div className="rounded-2xl border border-verde/25 bg-verde-tenue/50 p-4 dark:bg-verde-tenue/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-verde-scuro dark:text-verde">Sinonimi</p>
                  <ul className="mt-2 space-y-1 text-sm font-semibold">
                    {word.syn.map((s, i) => <li key={i}>≈ {s}</li>)}
                  </ul>
                </div>
              )}
              {word.ant && (
                <div className="rounded-2xl border border-rosso/25 bg-rosso-tenue/50 p-4 dark:bg-rosso-tenue/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-rosso-scuro dark:text-rosso">Contrari</p>
                  <ul className="mt-2 space-y-1 text-sm font-semibold">
                    {word.ant.map((s, i) => <li key={i}>≠ {s}</li>)}
                  </ul>
                </div>
              )}
              {related.length > 0 && (
                <div className="rounded-2xl border border-oro/25 bg-oro-tenue/50 p-4 dark:bg-oro-tenue/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-oro-scuro dark:text-oro">Correlati</p>
                  <ul className="mt-2 space-y-1 text-sm font-semibold">
                    {related.map((r, i) => (
                      <li key={i}>
                        <button onClick={() => setSelected(r!.id)} className="underline decoration-dotted underline-offset-2 hover:text-verde">
                          {r!.it} <span className="font-normal text-muted-it">({r!.es})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </motion.article>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* buscador */}
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca in italiano o spagnolo… (casa, aeroporto, comprar…)"
          aria-label="Buscar en el diccionario"
          className="min-h-12 w-full rounded-2xl border-2 border-soft bg-surface pl-11 pr-4 text-base outline-none transition-colors focus:border-verde"
        />
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
      </div>

      {/* filtros */}
      <div className="flex flex-wrap gap-2">
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          aria-label="Filtrar por categoría"
          className="min-h-10 rounded-xl border-2 border-soft bg-surface px-3 text-sm font-semibold outline-none focus:border-verde"
        >
          <option value="all">Tutte le categorie</option>
          {Object.entries(CATEGORY_META).map(([k, v]) => (
            <option key={k} value={k}>{v.emoji} {v.es}</option>
          ))}
        </select>
        {["all", ...CEFR_LEVELS].map((lv) => (
          <button
            key={lv}
            onClick={() => setLevelFilter(lv)}
            aria-pressed={levelFilter === lv}
            className={cn("min-h-10 rounded-xl border-2 px-3.5 py-2 text-xs font-bold transition-all", levelFilter === lv ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft text-muted-it hover:border-verde/40")}
          >
            {lv === "all" ? "Tutti" : lv}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-it">{results.length} risultati{query && ` per “${query}”`}</p>

      {/* resultados */}
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {results.length === 0 && (
          <div className="col-span-full rounded-3xl border border-soft bg-surface p-8 text-center">
            <BookA className="mx-auto h-8 w-8 text-muted-it" aria-hidden="true" />
            <p className="mt-3 font-display text-xl font-semibold">Nessun risultato</p>
            <p className="mt-1.5 text-sm text-muted-it">Prueba con otra grafía: el diccionario busca en italiano y español ({VOCAB.length} voci).</p>
          </div>
        )}
        {results.map((w, i) => (
          <motion.button
            key={w.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.02, 0.3) }}
            onClick={() => setSelected(w.id)}
            className="group flex items-center gap-3 rounded-2xl border border-soft bg-surface p-4 text-left transition-all hover:-translate-y-0.5 hover:border-verde/40 hover:shadow-md"
          >
            <AudioButton text={w.it} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 font-display text-lg font-semibold leading-tight">
                {w.it}
                {w.gender && <span className={cn("text-[10px] font-sans font-bold", w.gender === "m" ? "noun-m" : "noun-f")}>{w.gender === "m" ? "m" : "f"}</span>}
              </span>
              <span className="mt-0.5 block truncate text-sm text-muted-it">{w.es}</span>
              <span className="mt-1 block text-[10px] font-bold uppercase text-muted-it">
                {CATEGORY_META[w.cat].emoji} {w.level} {srs[w.id] && "· ✓ ripasso"}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-it opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
