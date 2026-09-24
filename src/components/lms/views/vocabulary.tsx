"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Library, Play, Sparkles } from "lucide-react";
import { VOCAB, VOCAB_BY_ID, wordsByCategory } from "@/lib/lms/vocabulary";
import { CATEGORY_META, type WordCategory } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { newCard } from "@/lib/lms/srs";
import { FlashcardSession } from "../flashcards";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Vocabulario ───────────────────────────────────────────── */

export function VocabularyView() {
  const navParams = useLms((s) => s.navParams);
  const navigate = useLms((s) => s.navigate);
  const srs = useLms((s) => s.srs);
  const upsertSrs = useLms((s) => s.upsertSrs);
  const addXp = useLms((s) => s.addXp);

  const [openCat, setOpenCat] = useState<WordCategory | null>(navParams.category ?? null);
  const [session, setSession] = useState<string[] | null>(null);
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const cats: WordCategory[] = Array.from(new Set(VOCAB.map((w) => w.cat)));
    return cats;
  }, []);

  const searchResults = useMemo(
    () => (search.trim() ? VOCAB.filter((w) => w.it.toLowerCase().includes(search.toLowerCase()) || w.es.toLowerCase().includes(search.toLowerCase())).slice(0, 24) : []),
    [search]
  );

  if (session) {
    return (
      <div>
        <button onClick={() => setSession(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Torna alle categorie
        </button>
        <FlashcardSession cardIds={session} />
      </div>
    );
  }

  const startCategorySession = (cat: WordCategory) => {
    const ids = wordsByCategory(cat).map((w) => w.id);
    ids.forEach((id) => { if (!srs[id]) upsertSrs(id, newCard(id)); });
    setSession(ids);
  };

  const searchOpen = search.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* buscador */}
      <div className="relative">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cerca una parola… (p. ej. “casa”, “comer”, “treno”)"
          aria-label="Buscar palabra"
          className="min-h-12 w-full rounded-2xl border-2 border-soft bg-surface pl-11 pr-4 text-base outline-none transition-colors focus:border-verde"
        />
        <Library className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-it" aria-hidden="true" />
      </div>

      {searchOpen ? (
        /* resultados de búsqueda */
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {searchResults.length === 0 && (
            <p className="col-span-full rounded-2xl border border-soft bg-surface p-6 text-center text-sm text-muted-it">
              Nessun risultato. Prova con un'altra parola.
            </p>
          )}
          {searchResults.map((w, i) => (
            <motion.div key={w.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="rounded-2xl border border-soft bg-surface p-4">
              <WordCard w={w} srs={srs} onAdd={(id) => { upsertSrs(id, newCard(id)); addXp(2, "vocabolario"); }} onOpenDict={() => navigate("dizionario")} />
            </motion.div>
          ))}
        </div>
      ) : openCat ? (
        /* categoría abierta */
        <div>
          <button onClick={() => setOpenCat(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutte le categorie
          </button>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
            <div>
              <h2 className="font-display text-3xl font-semibold">
                {CATEGORY_META[openCat].emoji} {CATEGORY_META[openCat].es}
              </h2>
              <p className="mt-1 text-sm text-muted-it">{wordsByCategory(openCat).length} parole · livello A1–C2</p>
            </div>
            <button
              onClick={() => startCategorySession(openCat)}
              className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03]"
            >
              <Play className="h-4 w-4" aria-hidden="true" /> Studia con le flashcard
            </button>
          </div>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {wordsByCategory(openCat).map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-soft bg-surface p-4"
              >
                <WordCard w={w} srs={srs} onAdd={(id) => { upsertSrs(id, newCard(id)); addXp(2, "vocabolario"); }} onOpenDict={() => navigate("dizionario")} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* grid de categorías */
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const words = wordsByCategory(cat);
            const inSrs = words.filter((w) => srs[w.id]).length;
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setOpenCat(cat)}
                className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
              >
                <p className="text-3xl" aria-hidden="true">{CATEGORY_META[cat].emoji}</p>
                <p className="mt-2.5 font-display text-lg font-semibold leading-tight">{CATEGORY_META[cat].es}</p>
                <p className="mt-1.5 text-xs text-muted-it">
                  {words.length} parole{inSrs > 0 && <span className="text-verde-scuro dark:text-verde"> · {inSrs} en repaso</span>}
                </p>
              </motion.button>
            );
          })}
        </div>
      )}

      <div className="rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm leading-relaxed text-oro-scuro dark:text-oro">
        <Sparkles className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
        Al estudiar con flashcards, cada palabra entra en el <strong>repaso inteligente</strong>: el algoritmo de
        repetición espaciada decide cuándo volverás a verla según tu memoria.
      </div>
    </div>
  );
}

/* ── tarjeta de palabra ── */
function WordCard({ w, srs, onAdd, onOpenDict }: {
  w: (typeof VOCAB)[number];
  srs: Record<string, unknown>;
  onAdd: (id: string) => void;
  onOpenDict: () => void;
}) {
  const [flip, setFlip] = useState(false);
  const inSrs = !!srs[w.id];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-2">
        <button onClick={() => setFlip(!flip)} className="min-w-0 flex-1 text-left" aria-label={flip ? "Ver italiano" : "Ver traducción"}>
          <p className="font-display text-xl font-semibold leading-tight">{flip ? w.es : w.it}</p>
          <p className="mt-0.5 font-mono text-xs text-muted-it">{flip ? "tocca per l'italiano" : `/${w.pron}/ · tocca per lo spagnolo`}</p>
        </button>
        <AudioButton text={w.it} size="sm" />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="rounded-full bg-inchiostro/5 px-2 py-0.5 font-bold uppercase text-muted-it dark:bg-inchiostro/15">{w.level}</span>
        {w.type === "sostantivo" && w.gender && (
          <span className={cn("rounded-full px-2 py-0.5 font-bold", w.gender === "m" ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
            {w.gender === "m" ? "m." : "f."}{w.plural ? ` · pl. ${w.plural}` : ""}
          </span>
        )}
      </div>
      <p className="mt-2 line-clamp-2 text-xs italic text-muted-it">“{w.example.it}”</p>
      <div className="mt-auto flex gap-1.5 pt-3">
        <button
          onClick={() => onAdd(w.id)}
          disabled={inSrs}
          className={cn(
            "flex-1 rounded-lg border px-2 py-1.5 text-[10px] font-bold transition-all",
            inSrs ? "border-verde/30 bg-verde-tenue text-verde-scuro dark:text-verde" : "border-oro/40 bg-oro-tenue text-oro-scuro hover:scale-105 dark:text-oro"
          )}
        >
          {inSrs ? "✓ en repaso" : "+ repaso"}
        </button>
        <button onClick={onOpenDict} className="rounded-lg border border-soft px-2 py-1.5 text-[10px] font-bold text-muted-it transition-colors hover:border-verde/40 hover:text-verde-scuro dark:hover:text-verde">
          dizionario
        </button>
      </div>
    </div>
  );
}
