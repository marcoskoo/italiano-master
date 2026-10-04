"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle2, Ear, HelpCircle, ListOrdered, Search, Sparkles, Target, X } from "lucide-react";
import type { CefrLevel } from "@/lib/lms/types";
import type { MindTheme } from "@/lib/lms/cambridge-mind";
import { MIND_THEME_LABEL } from "@/lib/lms/cambridge-mind";
import { MIND_LIBRARY, mindLevel } from "@/lib/lms/extra/readings-mind";
import { CB_UNIT_BY_ID, CB_LEVEL_OF } from "@/lib/lms/cambridge";
import { useLms } from "@/lib/lms/store";
import { MindReadingCard } from "./mind-readings";
import { cn } from "@/lib/utils";

/* ═══ v9.14 · Colección "Meditazione e consapevolezza" ═════════════
   Las 198 letture tematiche de las unidades comunicativas (v9.13),
   navegables también desde la biblioteca Letture con filtros por
   tema y nivel. El lector reutiliza MindReadingCard: predicción,
   texto con traducción al hover, y las 7 estrategias de comprensión
   lectora y de escucha.                                               */

const THEMES: (MindTheme | "tutti")[] = [
  "tutti", "meditazione", "spiritualità", "qui e ora", "relax fisico", "relax mentale",
];
const LEVELS: (CefrLevel | "tutti")[] = ["tutti", "A1", "A2", "B1", "B2", "C1", "C2"];

const THEME_EMOJI: Record<MindTheme, string> = {
  "meditazione": "🧘",
  "spiritualità": "🕊️",
  "qui e ora": "⏳",
  "relax fisico": "🌿",
  "relax mentale": "💭",
};

const STRATEGY_ICONS = {
  predict: <Sparkles className="h-3.5 w-3.5 text-oro" aria-hidden="true" />,
  quiz: <HelpCircle className="h-3.5 w-3.5 text-verde" aria-hidden="true" />,
  vf: <Target className="h-3.5 w-3.5 text-rosso" aria-hidden="true" />,
  ideas: <BookOpen className="h-3.5 w-3.5 text-oro" aria-hidden="true" />,
  intruder: <Search className="h-3.5 w-3.5 text-verde-scuro" aria-hidden="true" />,
  sequence: <ListOrdered className="h-3.5 w-3.5 text-oro" aria-hidden="true" />,
  listen: <Ear className="h-3.5 w-3.5 text-verde" aria-hidden="true" />,
};

/* ── v9.15 · Buscador por palabras clave ────────────────────────────
   Normaliza acentos (perche → perché) y busca en título IT/ES, tema,
   unidad de origen y texto completo (IT + ES). Varias palabras = TODAS
   deben estar presentes (búsqueda AND).                              */
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const SEARCH_TEXT: Record<string, string> = Object.fromEntries(
  MIND_LIBRARY.map((e) => {
    const u = CB_UNIT_BY_ID[e.unitId];
    return [e.reading.id, norm([
      e.reading.title,
      e.reading.titleEs,
      MIND_THEME_LABEL[e.reading.theme],
      u ? `${u.title} ${u.titleIt}` : "",
      e.reading.paragraphs.map((p) => `${p.it} ${p.es}`).join(" "),
    ].join(" "))];
  })
);

export function MindCollection({ initialId, onBack }: { initialId?: string | null; onBack: () => void }) {
  const [theme, setTheme] = useState<MindTheme | "tutti">("tutti");
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(initialId ?? null);

  const readingsRead = useLms((s) => s.readingsRead);
  const addXp = useLms((s) => s.addXp);
  const markReadingDone = useLms((s) => s.markReadingDone);

  const qTokens = useMemo(
    () => norm(query.trim()).split(/\s+/).filter(Boolean),
    [query]
  );
  const entries = useMemo(
    () => MIND_LIBRARY.filter((e) =>
      (theme === "tutti" || e.reading.theme === theme) &&
      (level === "tutti" || mindLevel(e.reading.id) === level) &&
      (qTokens.length === 0 || qTokens.every((t) => SEARCH_TEXT[e.reading.id]?.includes(t)))
    ),
    [theme, level, qTokens]
  );

  /* ── lector de una lectura ── */
  if (openId) {
    const entry = MIND_LIBRARY.find((e) => e.reading.id === openId);
    if (entry) {
      const unit = CB_UNIT_BY_ID[entry.unitId];
      const lvl = CB_LEVEL_OF[entry.unitId] ?? mindLevel(entry.reading.id);
      const idxInUnit = MIND_LIBRARY.filter((e) => e.unitId === entry.unitId).findIndex((e) => e.reading.id === openId);
      return (
        <div>
          <button
            onClick={onBack}
            className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Meditazione e consapevolezza
          </button>

          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full bg-oro-tenue px-3 py-1.5 text-oro-scuro dark:text-oro">
              {THEME_EMOJI[entry.reading.theme]} {MIND_THEME_LABEL[entry.reading.theme]}
            </span>
            <span className="rounded-full bg-inchiostro/5 px-3 py-1.5 font-mono uppercase text-muted-it dark:bg-inchiostro/15">
              {lvl}
            </span>
            {unit && (
              <span className="rounded-full border border-soft bg-surface px-3 py-1.5 text-muted-it">
                {lvl} · Unidad {unit.n} — {unit.title}
                {idxInUnit >= 0 ? ` · Lettura ${idxInUnit + 1} di 3` : ""}
              </span>
            )}
          </div>

          <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
            <MindReadingCard
              key={entry.reading.id}
              reading={entry.reading}
              onCompleted={() => {
                markReadingDone(entry.reading.id);   // +20 monedas la primera vez
                addXp(5, "lettura");
              }}
            />
          </div>

          {/* navegación anterior / siguiente dentro del filtro actual */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <NavButton
              disabled={entries.findIndex((e) => e.reading.id === openId) <= 0}
              onClick={() => {
                const i = entries.findIndex((e) => e.reading.id === openId);
                if (i > 0) setOpenId(entries[i - 1].reading.id);
              }}
              dir="prev"
            />
            <p className="text-center text-xs font-semibold text-muted-it">
              {readingsRead.filter((id) => id.startsWith("md-")).length}/{MIND_LIBRARY.length} letture della collezione completate
            </p>
            <NavButton
              disabled={entries.findIndex((e) => e.reading.id === openId) === -1 || entries.findIndex((e) => e.reading.id === openId) >= entries.length - 1}
              onClick={() => {
                const i = entries.findIndex((e) => e.reading.id === openId);
                if (i >= 0 && i < entries.length - 1) setOpenId(entries[i + 1].reading.id);
              }}
              dir="next"
            />
          </div>
        </div>
      );
    }
  }

  /* ── estantería de la colección ── */
  const doneCount = MIND_LIBRARY.filter((e) => readingsRead.includes(e.reading.id)).length;

  return (
    <div>
      {/* cabecera de la colección */}
      <div className="rounded-3xl border-2 border-oro/30 bg-gradient-to-br from-oro-tenue/70 via-crema to-verde-tenue/40 p-5 sm:p-6 dark:from-oro-tenue/20 dark:via-inchiostro/10 dark:to-verde-tenue/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 font-display text-xl font-bold sm:text-2xl">
              🧘 Meditazione e consapevolezza
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-it">
              198 lecturas de meditación, espiritualidad, presencia (aquí y ahora) y relajación física y mental —
              de A1 a C2, cada una con predicción, traducción palabra a palabra al pasar el cursor y las 7
              estrategias de comprensión lectora y de escucha.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-surface/80 px-4 py-2.5 shadow-sm">
            <span className="font-display text-lg font-bold text-verde-scuro dark:text-verde">{doneCount}/{MIND_LIBRARY.length}</span>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-it">completate</span>
          </div>
        </div>
      </div>

      {/* v9.15 · buscador por palabras clave */}
      <div className="mt-5 flex items-center gap-2 rounded-2xl border-2 border-soft bg-surface px-4 py-1.5 transition-colors focus-within:border-verde/60">
        <Search className="h-4 w-4 shrink-0 text-muted-it" aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca per parole chiave: respiro, silenzio, gratitudine…"
          aria-label="Cerca letture della collezione per parole chiave"
          className="min-h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-it/60"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Cancella la ricerca"
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-it transition-colors hover:bg-crema-scura hover:text-inchiostro dark:hover:bg-inchiostro/10 dark:hover:text-surface"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* filtros por tema */}
      <div className="mt-5 flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-pressed={theme === t}
            className={cn(
              "min-h-11 rounded-full border-2 px-4 py-2 text-sm font-bold transition-all",
              theme === t
                ? "border-verde bg-verde text-white shadow-md shadow-verde/25"
                : "border-soft bg-surface hover:border-verde/40"
            )}
          >
            {t === "tutti" ? "Tutti i temi" : `${THEME_EMOJI[t]} ${MIND_THEME_LABEL[t]}`}
          </button>
        ))}
      </div>
      {/* filtros por nivel */}
      <div className="mt-2 flex flex-wrap gap-2">
        {LEVELS.map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            aria-pressed={level === l}
            className={cn(
              "rounded-full border-2 px-3 py-1 text-xs font-bold transition-all",
              level === l
                ? "border-verde bg-verde text-white shadow-md shadow-verde/25"
                : "border-soft bg-surface hover:border-verde/40"
            )}
          >
            {l === "tutti" ? "MCER" : l}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-it">
        {entries.length} letture · comprensione di lettura e d'ascolto · traducción al pasar el cursor
        {qTokens.length > 0 && <> · ricerca: <strong className="text-inchiostro dark:text-surface">{query.trim()}</strong></>}
      </p>

      {qTokens.length > 0 && entries.length === 0 && (
        <div className="mt-3 rounded-2xl border-2 border-dashed border-soft bg-surface p-6 text-center">
          <p className="font-semibold">Nessun risultato per «{query.trim()}»</p>
          <p className="mt-1 text-sm text-muted-it">Prueba con otra palabra (puedes escribir sin acentos: «perche» encuentra «perché») o quita los filtros activos.</p>
          <button
            type="button"
            onClick={() => { setQuery(""); setTheme("tutti"); setLevel("tutti"); }}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-verde/40 bg-verde-tenue px-4 py-2.5 text-xs font-bold transition-all hover:border-verde"
          >
            <X className="h-4 w-4" aria-hidden="true" /> Azzera filtri e ricerca
          </button>
        </div>
      )}

      {/* tarjetas */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e, i) => {
          const done = readingsRead.includes(e.reading.id);
          const unit = CB_UNIT_BY_ID[e.unitId];
          const lvl = mindLevel(e.reading.id);
          return (
            <motion.button
              key={e.reading.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.4) }}
              onClick={() => setOpenId(e.reading.id)}
              className={cn(
                "group relative rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-oro/50 hover:shadow-lg",
                done && "border-verde/50"
              )}
            >
              {done && (
                <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-verde text-white shadow-md" title="Completata">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-oro-tenue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-oro-scuro dark:text-oro">
                  {THEME_EMOJI[e.reading.theme]} {MIND_THEME_LABEL[e.reading.theme]}
                </span>
                <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">
                  {lvl}
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-snug">{e.reading.title}</p>
              <p className="mt-0.5 text-sm italic text-muted-it">{e.reading.titleEs}</p>
              <p className="mt-2.5 text-xs text-muted-it">
                {e.reading.minutes} min · {e.reading.paragraphs.length} paragrafi{unit ? ` · Unidad ${unit.n}` : ""}
              </p>
              {/* estrategias incluidas */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {STRATEGY_ICONS.predict}
                <span className="text-[10px] font-bold uppercase tracking-wide text-muted-it">Predizione</span>
                {(e.reading.quiz ? ["quiz"] : []).concat(
                  e.reading.vf ? ["vf"] : [],
                  e.reading.ideas ? ["ideas"] : [],
                  e.reading.intruder ? ["intruder"] : [],
                  e.reading.sequence ? ["sequence"] : [],
                  e.reading.listen ? ["listen"] : []
                ).map((k) => (
                  <span key={k} className="inline-flex items-center gap-1" title={k}>
                    {STRATEGY_ICONS[k as keyof typeof STRATEGY_ICONS]}
                  </span>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function NavButton({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-soft bg-crema px-4 py-2.5 text-xs font-bold transition-all hover:border-verde/40 disabled:opacity-35 dark:bg-inchiostro/10",
        dir === "prev" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <ArrowLeft className={cn("h-4 w-4", dir === "next" && "rotate-180")} aria-hidden="true" />
      {dir === "prev" ? "Precedente" : "Successiva"}
    </button>
  );
}
