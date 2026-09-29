"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Check, Globe, Library, Link2, Plus, Sparkles, Trash2, Wand2, X,
} from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";
import { newCard } from "@/lib/lms/srs";
import { CATEGORY_META, CEFR_LEVELS, LEVEL_LABELS, type CefrLevel } from "@/lib/lms/types";
import {
  analyze, allNewWords, lookupWord, recommendWords, tokenize, TOTAL_LEMMAS, TYPE_LABELS,
} from "@/lib/lms/importer";
import type { VocabWord } from "@/lib/lms/types";

/* ── Vista: Importatore di testi ──────────────────────────────────── */

const DEMO_TEXT =
  "Ieri mattina sono andato al mercato con mia nonna. Abbiamo comprato delle pesche dolci, il pane fresco e un po' di formaggio. Il venditore era molto gentile e ci ha regalato due mele rosse. Nel pomeriggio ho studiato l'italiano e poi ho preparato la cena per tutta la famiglia.";

export function ImporterView() {
  const srs = useLms((s) => s.srs);
  const upsertSrs = useLms((s) => s.upsertSrs);
  const trackQuest = useLms((s) => s.trackQuest);
  const addXp = useLms((s) => s.addXp);
  const saveImportedText = useLms((s) => s.saveImportedText);
  const deleteImportedText = useLms((s) => s.deleteImportedText);
  const importedTexts = useLms((s) => s.importedTexts);
  const userLevel = useLms((s) => s.level);

  const [source, setSource] = useState<"paste" | "url">("paste");
  const [pasted, setPasted] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [active, setActive] = useState<{ title: string; text: string } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [justAdded, setJustAdded] = useState<string[]>([]); // ids añadidos en esta sesión
  const [bulkMsg, setBulkMsg] = useState<string | null>(null);

  const stats = useMemo(() => (active ? analyze(active.text, srs) : null), [active, srs]);
  const tokens = useMemo(() => (active ? tokenize(active.text) : []), [active]);
  const recommendations = useMemo(
    () => (active ? recommendWords(active.text, srs, userLevel ?? "B1", 9) : []),
    [active, srs, userLevel]
  );
  const selectedHit = useMemo(() => (selected ? lookupWord(selected) : null), [selected]);

  const knownTotal = Object.keys(srs).length;

  const loadText = useCallback((title: string, text: string, persist = true) => {
    const clean = text.trim();
    if (clean.length < 10) return;
    setActive({ title: title.trim() || "Testo senza titolo", text: clean.slice(0, 20_000) });
    setSelected(null);
    setJustAdded([]);
    setBulkMsg(null);
    setLoadError(null);
    if (persist) saveImportedText({ title: title.trim() || "Testo senza titolo", text: clean.slice(0, 20_000), words: clean.split(/\s+/).length });
  }, [saveImportedText]);

  const importUrl = useCallback(async () => {
    setLoadError(null);
    if (!url.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = (await res.json()) as { title?: string; text?: string; error?: string };
      if (!res.ok || !data.text) {
        setLoadError(data.error ?? "No se pudo importar la página.");
      } else {
        loadText(data.title || url, data.text);
        setUrl("");
      }
    } catch {
      setLoadError("Error de red al importar. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }, [url, loadText]);

  const addWord = useCallback((w: VocabWord) => {
    if (w.id in srs || justAdded.includes(w.id)) return;
    upsertSrs(w.id, newCard(w.id));
    setJustAdded((prev) => [...prev, w.id]);
    trackQuest("import");
    addXp(2, "vocabolario");
  }, [srs, upsertSrs, trackQuest, addXp, justAdded]);

  const addAllRecommended = useCallback(() => {
    const pool = allNewWords(active?.text ?? "", srs);
    const cap = CEFR_LEVELS.indexOf(userLevel ?? "B1");
    const eligible = pool.filter((w) => CEFR_LEVELS.indexOf(w.level) <= cap);
    if (eligible.length === 0) { setBulkMsg("No hay palabras nuevas de tu nivel en este texto: ¡todo dominado!"); return; }
    for (const w of eligible.slice(0, 30)) {
      upsertSrs(w.id, newCard(w.id));
    }
    trackQuest("import", eligible.length);
    addXp(Math.min(20, 2 + eligible.length), "vocabolario");
    setJustAdded((prev) => [...prev, ...eligible.map((w) => w.id)]);
    setBulkMsg(`Añadidas ${Math.min(30, eligible.length)} palabras al repaso inteligente. ¡Ripassale oggi stesso!`);
  }, [active, srs, userLevel, upsertSrs, trackQuest, addXp]);

  const inSrs = (id: string) => id in srs || justAdded.includes(id);

  return (
    <div className="space-y-6">
      {/* intro */}
      <section className="rounded-3xl border border-verde/25 bg-verde-tenue/60 p-6">
        <h2 className="font-display text-2xl font-semibold">📥 Contenuto infinito</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-it">
          Pega cualquier texto italiano (noticia, canción, cuento, email) o importa una URL: se convierte en
          una lección interactiva donde cada palabra es clicable. Las que no conozcas, las añades a tu
          repaso espaciado con un toque. Como LingQ, pero gratis.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold text-verde-scuro dark:bg-black/20 dark:text-verde">
          <Library className="h-3.5 w-3.5" aria-hidden="true" />
          Palabras conocidas: {knownTotal.toLocaleString("es")} / {TOTAL_LEMMAS.toLocaleString("es")} lemas ({Math.round((knownTotal / TOTAL_LEMMAS) * 100)}%)
        </p>
      </section>

      {/* fuente */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <div className="flex gap-2 rounded-2xl bg-crema-scura/60 p-1.5 dark:bg-inchiostro/10">
          {([["paste", "📝 Pegar texto"], ["url", "🔗 Importar URL"]] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setSource(id)}
              className={cn(
                "flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
                source === id ? "bg-verde text-white shadow-md" : "text-muted-it hover:text-inchiostro dark:hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {source === "paste" ? (
          <div className="mt-4 space-y-3">
            <textarea
              value={pasted}
              onChange={(e) => setPasted(e.target.value)}
              placeholder="Pega aquí tu texto en italiano… (canción, artículo, mensaje, lo que quieras)"
              rows={6}
              className="w-full resize-y rounded-2xl border border-soft bg-crema/60 p-4 font-mono text-sm leading-relaxed outline-none transition-colors focus:border-verde/50 dark:bg-inchiostro/10"
              aria-label="Texto en italiano para estudiar"
            />
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => loadText("Testo incollato", pasted)}
                disabled={pasted.trim().length < 10}
                className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-40"
              >
                <Wand2 className="h-4 w-4" aria-hidden="true" /> Convertir en lección
              </button>
              <button
                onClick={() => { setPasted(DEMO_TEXT); }}
                className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-soft px-5 py-3 text-sm font-bold text-muted-it transition-all hover:border-verde/40 active:scale-95"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" /> Probar con un texto de ejemplo
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Link2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.ilmessaggero.it/…"
                  className="w-full rounded-2xl border border-soft bg-crema/60 py-3.5 pl-11 pr-4 text-sm outline-none transition-colors focus:border-verde/50 dark:bg-inchiostro/10"
                  aria-label="URL de la página a importar"
                  onKeyDown={(e) => { if (e.key === "Enter") void importUrl(); }}
                />
              </div>
              <button
                onClick={() => void importUrl()}
                disabled={loading || !url.trim()}
                className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-40"
              >
                {loading ? "Importando…" : <><Globe className="h-4 w-4" aria-hidden="true" /> Importar</>}
              </button>
            </div>
            {loadError && <p className="rounded-xl border border-rosso/30 bg-rosso-tenue px-4 py-2.5 text-sm font-semibold text-rosso">{loadError}</p>}
            <p className="text-xs text-muted-it">Consejo: artículos de ANSA, Il Messaggero, Corriere o letras de canciones funcionan muy bien.</p>
          </div>
        )}
      </section>

      {/* textos guardados */}
      {importedTexts.length > 0 && (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h3 className="font-display text-lg font-semibold">📚 I tuoi testi ({importedTexts.length}/8)</h3>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {importedTexts.map((t) => (
              <div key={t.id} className="group flex items-center gap-3 rounded-2xl border border-soft bg-crema-scura/40 px-4 py-3 dark:bg-inchiostro/10">
                <BookOpen className="h-4 w-4 shrink-0 text-verde" aria-hidden="true" />
                <button onClick={() => { setActive({ title: t.title, text: t.text }); setSelected(null); setJustAdded([]); }} className="min-w-0 flex-1 text-left">
                  <p className="truncate text-sm font-bold">{t.title}</p>
                  <p className="text-[11px] text-muted-it">{t.words.toLocaleString("es")} parole · {new Date(t.date).toLocaleDateString("es")}</p>
                </button>
                <button
                  onClick={() => deleteImportedText(t.id)}
                  aria-label={`Eliminar ${t.title}`}
                  className="rounded-lg p-2 text-muted-it opacity-0 transition-all hover:bg-rosso-tenue hover:text-rosso group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* lección activa */}
      {active && stats && (
        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          {/* stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Parole totali", value: stats.totalWords.toLocaleString("es"), tone: "text-inchiostro dark:text-foreground" },
              { label: "Lemmi unici", value: stats.uniqueWords.toLocaleString("es"), tone: "text-terracotta" },
              { label: "Nel dizionario", value: `${stats.coverage}%`, tone: "text-verde-scuro dark:text-verde" },
              { label: "Già nel ripaso", value: stats.known.toLocaleString("es"), tone: "text-oro-scuro dark:text-oro" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-soft bg-surface p-3.5 text-center">
                <p className={cn("font-display text-2xl font-bold", s.tone)}>{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-it">{s.label}</p>
              </div>
            ))}
          </div>

          {/* recomendaciones (o confirmación de adición masiva) */}
          {(recommendations.length > 0 || bulkMsg) && (
            <div className="rounded-3xl border border-oro/30 bg-oro-tenue/50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">✨ Parole nuove da imparare</h3>
                {recommendations.length > 0 && (
                  <button onClick={addAllRecommended} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-95">
                    <Plus className="h-4 w-4" aria-hidden="true" /> Añadir todas (≤ {userLevel ?? "B1"})
                  </button>
                )}
              </div>
              {bulkMsg && <p className="mt-2 rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold text-verde-scuro dark:bg-black/20 dark:text-verde">{bulkMsg}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                {recommendations.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => addWord(w)}
                    disabled={inSrs(w.id)}
                    className={cn(
                      "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all active:scale-95",
                      inSrs(w.id)
                        ? "border-verde/40 bg-verde text-white opacity-70"
                        : "border-soft bg-surface hover:border-verde/50"
                    )}
                  >
                    {inSrs(w.id) && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                    {w.it}
                    <span className="text-[11px] font-normal opacity-75">{w.es}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* texto interactivo */}
          <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="min-w-0 truncate font-display text-xl font-semibold">{active.title}</h3>
              <button onClick={() => setActive(null)} aria-label="Cerrar texto" className="rounded-lg p-2 text-muted-it transition-colors hover:bg-rosso-tenue hover:text-rosso">
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold text-muted-it">
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-verde/25" /> sin marcar</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-verde/70" /> en tu repaso</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-rosso/40" /> no está en el diccionario</span>
            </div>

            <p className="mt-5 max-h-[28rem] overflow-y-auto whitespace-pre-line text-lg leading-loose scrollbar-thin">
              {tokens.map((t, i) => {
                if (!t.isWord) return <span key={i}>{t.raw}</span>;
                const hit = lookupWord(t.raw);
                const known = hit && inSrs(hit.word.id);
                const missing = !hit;
                const isSel = selected === t.raw;
                return (
                  <button
                    key={i}
                    onClick={() => setSelected(t.raw)}
                    className={cn(
                      "rounded-md px-0.5 transition-colors hover:bg-verde/15",
                      known && "bg-verde/15 underline decoration-verde/40",
                      missing && "bg-rosso/10 underline decoration-rosso/30 decoration-dotted",
                      isSel && "bg-verde text-white"
                    )}
                  >
                    {t.raw}
                  </button>
                );
              })}
            </p>
          </div>

          {/* tarjeta de palabra seleccionada */}
          {selected && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border-2 border-verde/30 bg-verde-tenue/40 p-6">
              {selectedHit ? (
                <WordCard hit={selectedHit} inSrs={inSrs(selectedHit.word.id)} onAdd={() => addWord(selectedHit.word)} onClose={() => setSelected(null)} />
              ) : (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-semibold">«{selected}»</p>
                    <p className="mt-1 text-sm text-muted-it">
                      No está en el diccionario (puede ser un verbo conjugado, un nombre propio o una forma rara).
                      Usa el <b>Analizador de frases</b> para analizarla en contexto.
                    </p>
                  </div>
                  <button onClick={() => setSelected(null)} aria-label="Cerrar" className="rounded-lg p-2 text-muted-it hover:text-rosso">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.section>
      )}
    </div>
  );
}

/* ── Tarjeta de entrada del diccionario ───────────────────────────── */

function WordCard({ hit, inSrs, onAdd, onClose }: {
  hit: { word: VocabWord; inflected?: string };
  inSrs: boolean;
  onAdd: () => void;
  onClose: () => void;
}) {
  const w = hit.word;
  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <AudioButton text={w.it} />
          <p className="font-display text-2xl font-bold">{w.it}</p>
          <span className="rounded-full bg-verde/15 px-2.5 py-0.5 text-[11px] font-bold text-verde-scuro dark:text-verde">{w.level}</span>
          <span className="rounded-full bg-terracotta/15 px-2.5 py-0.5 text-[11px] font-bold text-terracotta">{TYPE_LABELS[w.type]}</span>
          {w.gender && <span className="text-sm font-bold text-muted-it">{w.gender === "m" ? "il (m)" : "la (f)"}</span>}
        </div>
        <button onClick={onClose} aria-label="Cerrar tarjeta" className="rounded-lg p-2 text-muted-it transition-colors hover:text-rosso">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {hit.inflected && (
        <p className="mt-2 inline-block rounded-lg bg-oro-tenue px-3 py-1 text-xs font-semibold text-oro-scuro dark:text-oro">
          «{w.it}» encontrada como forma flexionada ({hit.inflected})
        </p>
      )}

      <p className="mt-3 text-lg font-semibold text-verde-scuro dark:text-verde">{w.es}</p>
      <p className="mt-1 text-sm text-muted-it">/{w.pron}/ · {CATEGORY_META[w.cat]?.es ?? w.cat}</p>

      <div className="mt-3 rounded-2xl bg-white/60 p-4 text-sm dark:bg-black/20">
        <p className="flex items-start gap-2">
          <AudioButton text={w.example.it} size="sm" />
          <span>
            <i>{w.example.it}</i>
            <br />
            <span className="text-muted-it">{w.example.es}</span>
          </span>
        </p>
      </div>

      <button
        onClick={onAdd}
        disabled={inSrs}
        className={cn(
          "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold transition-all active:scale-95 sm:w-auto",
          inSrs
            ? "cursor-default bg-verde/20 text-verde-scuro dark:text-verde"
            : "bg-verde text-white shadow-lg shadow-verde/25 hover:scale-[1.02]"
        )}
      >
        {inSrs ? (<><Check className="h-4 w-4" aria-hidden="true" /> Nel ripaso inteligente</>) : (<><Plus className="h-4 w-4" aria-hidden="true" /> Añadir al repaso (+2 XP)</>)}
      </button>
    </div>
  );
}
