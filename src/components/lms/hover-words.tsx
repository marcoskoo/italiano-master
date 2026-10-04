"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Volume2 } from "lucide-react";
import { lookupWord } from "@/lib/lms/dict/lookup";
import { speak } from "@/lib/lms/tts";
import type { VocabWord } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

/* ═══ v9.14 · HoverWords — traducción al pasar el cursor ═══════════
   Renderiza un texto italiano envolviendo cada palabra resoluble en el
   dizionario didattico (≈8000 lemas + suplemento v9.14). Al pasar el
   cursor (o tocar en móvil) aparece un tooltip con:
   · palabra + IPA + traducción al español
   · categoría gramatical y nivel MCER (entradas reales)
   · botón de pronunciación TTS
   · ejemplo y nota contrastiva cuando el lema los trae               */

interface TipState {
  x: number;
  top: number;        // borde superior de la palabra
  bottom: number;     // borde inferior de la palabra
  below: boolean;     // colocar el tooltip debajo de la palabra
  raw: string;
  entry: VocabWord;
}

const SHOW_DELAY = 70;    // ms antes de mostrar (evita parpadeo al pasar)
const HIDE_DELAY = 180;   // ms antes de ocultar (permite entrar al tooltip)

export function HoverWords({ text, className }: { text: string; className?: string }) {
  const [tip, setTip] = useState<TipState | null>(null);
  const [mounted, setMounted] = useState(false);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => () => {
    if (showTimer.current) clearTimeout(showTimer.current);
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  /* tokenizar preservando los espacios; resolver cada palabra */
  const tokens = useMemo(
    () => text.split(/(\s+)/).map((t) => (/\S/.test(t) ? { t, e: lookupWord(t) } : { t, e: undefined as VocabWord | undefined })),
    [text]
  );

  const clearTimers = () => {
    if (showTimer.current) { clearTimeout(showTimer.current); showTimer.current = null; }
    if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
  };

  const showFor = (el: HTMLElement, raw: string, entry: VocabWord) => {
    clearTimers();
    const r = el.getBoundingClientRect();
    setTip({
      x: r.left + r.width / 2,
      top: r.top,
      bottom: r.bottom,
      below: r.top < 190,   // si la palabra queda muy arriba, el tooltip va debajo
      raw,
      entry,
    });
  };

  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setTip(null), HIDE_DELAY);
  };

  /* en táctil: cerrar al tocar fuera */
  useEffect(() => {
    if (!tip) return;
    const close = (ev: PointerEvent) => {
      const target = ev.target as HTMLElement | null;
      if (target?.closest?.("[data-hw-tip]") || target?.closest?.("[data-hw-word]")) return;
      clearTimers();
      setTip(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [tip]);

  return (
    <span className={className}>
      {tokens.map((p, i) => (
        <Fragment key={i}>
          {p.e ? (
            <span
              data-hw-word
              tabIndex={0}
              role="button"
              aria-label={`${p.t}: ${p.e.es}`}
              onMouseEnter={(ev) => {
                if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
                if (showTimer.current) clearTimeout(showTimer.current);
                /* ev.currentTarget se anula al salir del handler: capturar el nodo ANTES del timer */
                const el = ev.currentTarget;
                const entry = p.e!;
                showTimer.current = setTimeout(() => showFor(el, p.t, entry), SHOW_DELAY);
              }}
              onMouseLeave={scheduleHide}
              onFocus={(ev) => showFor(ev.currentTarget, p.t, p.e!)}
              onBlur={scheduleHide}
              onClick={(ev) => {
                ev.stopPropagation();
                if (tip && tip.raw === p.t && !tip.below) { clearTimers(); setTip(null); }
                else showFor(ev.currentTarget, p.t, p.e!);
              }}
              className={cn(
                "cursor-help rounded-[3px] underline decoration-dotted decoration-inchiostro/35 underline-offset-[5px] transition-colors hover:bg-verde-tenue hover:decoration-verde focus-visible:outline-none focus-visible:bg-verde-tenue dark:decoration-surface/35"
              )}
            >
              {p.t}
            </span>
          ) : (
            p.t
          )}
        </Fragment>
      ))}

      {/* tooltip (portal para no quedar recortado por overflow) */}
      {mounted && tip && createPortal(
        <span
          data-hw-tip
          role="tooltip"
          onMouseEnter={() => { if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; } }}
          onMouseLeave={scheduleHide}
          style={{
            position: "fixed",
            left: Math.min(Math.max(tip.x, 150), (typeof window !== "undefined" ? window.innerWidth : 400) - 150),
            top: tip.below ? tip.bottom + 8 : undefined,
            bottom: tip.below ? undefined : `calc(100vh - ${tip.top}px + 10px)`,
            transform: "translateX(-50%)",
            zIndex: 90,
          }}
          className="block w-max max-w-[85vw] rounded-2xl border-2 border-verde/35 bg-surface p-3.5 text-left shadow-xl shadow-inchiostro/10 dark:shadow-black/40"
        >
          <span className="flex items-start gap-2.5">
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-display text-base font-bold leading-snug">{tip.entry.it}</span>
                {tip.entry.ipa && (
                  <span className="font-mono text-xs text-muted-it">[{tip.entry.ipa}]</span>
                )}
              </span>
              <span className="mt-0.5 block text-base font-semibold leading-snug text-verde-scuro dark:text-verde">
                {tip.entry.es}
              </span>
              <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-crema-scura px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted-it dark:bg-inchiostro/10">
                  {tip.entry.type}
                </span>
                {!tip.entry.id.startsWith("fw-") && !tip.entry.id.startsWith("sup-") && (
                  <span className="rounded-full bg-azzurro/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-azzurro-scuro dark:text-azzurro">
                    {tip.entry.level}
                  </span>
                )}
                {tip.entry.ff && (
                  <span className="rounded-full bg-rosso-tenue px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rosso-scuro dark:text-rosso">
                    falso amigo
                  </span>
                )}
              </span>
              {tip.entry.note && (
                <span className="mt-1.5 block text-xs leading-relaxed text-muted-it">{tip.entry.note}</span>
              )}
              {tip.entry.example?.it && (
                <span className="mt-1.5 block border-l-2 border-verde/30 pl-2 text-xs italic leading-relaxed text-muted-it">
                  {tip.entry.example.it}
                  {tip.entry.example.es && <span className="block not-italic">{tip.entry.example.es}</span>}
                </span>
              )}
            </span>
            <button
              type="button"
              onClick={(ev) => {
                ev.stopPropagation();
                speak(tip.entry.it, { rate: 0.85 });
              }}
              aria-label={`Ascolta la pronuncia di ${tip.entry.it}`}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-verde/30 bg-verde-tenue text-verde-scuro transition-all hover:scale-110 dark:text-verde"
            >
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </span>
        </span>
      , document.body)}
    </span>
  );
}
