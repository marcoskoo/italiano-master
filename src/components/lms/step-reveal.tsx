"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Revelado línea a línea (paso a paso) ─────────────────────────── */

export interface StepRevealProps {
  title: string;
  question?: string;
  steps: string[];
  conclusion?: string;
  compact?: boolean;
  accent?: "verde" | "oro" | "terracotta";
}

export function StepReveal({ title, question, steps, conclusion, compact, accent = "verde" }: StepRevealProps) {
  const [shown, setShown] = useState(0);
  const complete = shown >= steps.length;

  const accents = {
    verde: { node: "bg-verde text-white", line: "bg-verde/40", final: "text-verde-scuro dark:text-verde", ring: "border-verde/40 bg-verde-tenue" },
    oro: { node: "bg-oro text-white", line: "bg-oro/40", final: "text-oro-scuro dark:text-oro", ring: "border-oro/40 bg-oro-tenue" },
    terracotta: { node: "bg-terracotta text-white", line: "bg-terracotta/40", final: "text-terracotta", ring: "border-terracotta/40 bg-rosso-tenue" },
  }[accent];

  return (
    <div className={cn("rounded-3xl border border-soft bg-surface", compact ? "p-5" : "p-6 sm:p-7")}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-lg font-semibold leading-snug">{title}</h4>
          {question && <p className="mt-1.5 text-sm text-muted-it">{question}</p>}
        </div>
        {shown > 0 && (
          <button
            onClick={() => setShown(0)}
            className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg border border-soft px-2.5 py-1.5 text-xs font-semibold text-muted-it transition-colors hover:border-rosso/40 hover:text-rosso"
            aria-label="Reiniciar revelado"
          >
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* timeline */}
      <ol className="relative mt-6 space-y-0" aria-label={`Pasos revelados: ${shown} de ${steps.length}`}>
        {steps.map((step, i) => {
          const visible = i < shown;
          return (
            <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
              {/* conector */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn("absolute left-[15px] top-8 h-[calc(100%-2rem)] w-0.5 rounded transition-colors duration-500", i + 1 < shown ? accents.line : "bg-inchiostro/10 dark:bg-inchiostro/20")}
                />
              )}
              {/* nodo */}
              <span
                aria-hidden="true"
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                  visible ? accents.node : "border-2 border-dashed border-inchiostro/20 text-muted-it dark:border-inchiostro/30"
                )}
              >
                {visible ? "✓" : i + 1}
              </span>
              {/* texto */}
              <div className="min-h-8 flex-1 pt-1">
                <AnimatePresence>
                  {visible && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="text-sm leading-relaxed sm:text-[0.95rem]"
                    >
                      {step}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ol>

      {/* conclusión */}
      <AnimatePresence>
        {complete && conclusion && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={cn("mt-5 rounded-2xl border px-4 py-3.5 font-display text-lg font-semibold italic", accents.ring, accents.final)}
          >
            <Sparkles className="mr-2 inline h-4 w-4" aria-hidden="true" />
            {conclusion}
          </motion.div>
        )}
      </AnimatePresence>

      {/* botón */}
      <div className="mt-5">
        {!complete ? (
          <button
            onClick={() => setShown(shown + 1)}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-[1.01] hover:border-verde active:scale-95 dark:text-verde"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            {shown === 0 ? "Revelar el primer paso" : `Revelar paso ${shown + 1} de ${steps.length}`}
            <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </button>
        ) : (
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-it">
            Solución completa · {steps.length} passi
          </p>
        )}
      </div>
    </div>
  );
}
