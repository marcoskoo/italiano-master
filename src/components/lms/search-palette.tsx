"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BookMarked, Brain, CornerDownLeft, Search } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { NAV_FLAT, VIEW_TITLES } from "@/lib/lms/nav";
import { searchDictionary } from "@/lib/lms/dict/dictionary";
import { GRAMMAR } from "@/lib/lms/grammar";
import type { ViewId } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

/* ── Ricerca globale (v8.0) · paleta Ctrl+K / ⌘K ────────────────────
   Busca en tiempo real: secciones de la app, 8.022 lemas del diccionario
   y temas de gramática. 100% local: sin red, sin índices externos.     */

interface Hit {
  id: string;
  kind: "vista" | "parola" | "grammatica";
  title: string;
  sub: string;
  action: () => void;
}

export function SearchPalette() {
  const [open, setOpen] = useState(false);

  /* atajo global + apertura desde el botón «Cerca» del header */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("im:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("im:open-search", onOpen);
    };
  }, []);

  if (!open) return null;
  return <PaletteInner onClose={() => setOpen(false)} />;
}

/* contenido montado fresco en cada apertura: el estado (q, sel) arranca
   de cero sin necesitar setState dentro de efectos                    */
function PaletteInner({ onClose }: { onClose: () => void }) {
  const navigate = useLms((s) => s.navigate);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  /* foco inicial: sincronización con el DOM (sistema externo) */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hits = useMemo<Hit[]>(() => {
    const query = q.trim().toLowerCase();
    const out: Hit[] = [];

    /* 1 · secciones de la app */
    const views = query
      ? NAV_FLAT.filter((v) => v.label.toLowerCase().includes(query) || VIEW_TITLES[v.id].title.toLowerCase().includes(query))
      : NAV_FLAT.slice(0, 6);
    for (const v of views.slice(0, 6)) {
      out.push({
        id: `v-${v.id}`,
        kind: "vista",
        title: v.label,
        sub: v.group,
        action: () => navigate(v.id as ViewId),
      });
    }

    /* 2 · diccionario (solo con consulta) */
    if (query.length >= 2) {
      for (const w of searchDictionary(q.trim()).slice(0, 8)) {
        out.push({
          id: `p-${w.id}`,
          kind: "parola",
          title: w.it,
          sub: `${w.es} · ${w.level}`,
          action: () => navigate("dizionario", { wordId: w.id }),
        });
      }
    }

    /* 3 · gramática */
    if (query.length >= 2) {
      for (const g of GRAMMAR.filter((g) => g.title.toLowerCase().includes(query) || g.titleIt.toLowerCase().includes(query)).slice(0, 5)) {
        out.push({
          id: `g-${g.id}`,
          kind: "grammatica",
          title: g.title,
          sub: `Grammatica · ${g.level}`,
          action: () => navigate("grammatica", { grammarId: g.id }),
        });
      }
    }

    return out;
  }, [q, navigate]);

  /* reset de la selección al cambiar la consulta (ajuste en render) */
  const [prevQ, setPrevQ] = useState(q);
  if (prevQ !== q) {
    setPrevQ(q);
    setSel(0);
  }

  /* navegación con teclado (los handlers son callbacks, no efecto) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(hits.length - 1, s + 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
      if (e.key === "Enter" && hits[sel]) { e.preventDefault(); hits[sel].action(); onClose(); }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hits, sel, onClose]);

  /* scroll del seleccionado a la vista */
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-idx="${sel}"]`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Ricerca globale">
      <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-soft bg-surface shadow-2xl">
        {/* input */}
        <div className="flex items-center gap-3 border-b border-soft px-4">
          <Search className="h-5 w-5 shrink-0 text-verde" aria-hidden="true" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cerca: parole, grammatica, sezioni… (8.022 lemi)"
            className="min-h-14 w-full bg-transparent text-base outline-none placeholder:text-inchiostro/35"
            aria-label="Consulta de búsqueda"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="hidden shrink-0 rounded-md border border-soft bg-crema-scura px-1.5 py-0.5 font-mono text-[10px] font-bold text-muted-it sm:block dark:bg-inchiostro/10">ESC</kbd>
        </div>

        {/* resultados */}
        <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2 scrollbar-thin">
          {hits.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-it">
              Nessun risultato per «{q}». Prova con otra palabra o explora el diccionario.
            </p>
          ) : (
            <>
              {(["vista", "parola", "grammatica"] as const).map((kind) => {
                const group = hits.map((h, i) => ({ h, i })).filter((x) => x.h.kind === kind);
                if (group.length === 0) return null;
                const label = kind === "vista" ? "Sezioni" : kind === "parola" ? "Dizionario" : "Grammatica";
                return (
                  <div key={kind} className="mb-1">
                    <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/40 dark:text-inchiostro/50">{label}</p>
                    {group.map(({ h, i }) => (
                      <button
                        key={h.id}
                        data-idx={i}
                        onClick={() => { h.action(); onClose(); }}
                        onMouseEnter={() => setSel(i)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                          sel === i ? "bg-verde-tenue dark:bg-verde/20" : "hover:bg-inchiostro/[0.04]"
                        )}
                      >
                        <span className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                          h.kind === "vista" && "bg-verde/15 text-verde-scuro dark:text-verde",
                          h.kind === "parola" && "bg-oro/15 text-oro-scuro dark:text-oro",
                          h.kind === "grammatica" && "bg-rosso/10 text-rosso-scuro dark:text-rosso"
                        )}>
                          {h.kind === "vista" ? <BookMarked className="h-4 w-4" aria-hidden="true" /> : h.kind === "parola" ? <span className="font-display text-sm font-bold italic">I</span> : <Brain className="h-4 w-4" aria-hidden="true" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold">{h.title}</span>
                          <span className="block truncate text-xs text-muted-it">{h.sub}</span>
                        </span>
                        {sel === i && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-it" aria-hidden="true" />}
                      </button>
                    ))}
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-soft px-4 py-2 text-[10px] text-muted-it">
          <span>↑↓ navigare · ⏎ aprire</span>
          <span>Ricerca globale · {hits.length} risultati</span>
        </div>
      </div>
    </div>
  );
}
