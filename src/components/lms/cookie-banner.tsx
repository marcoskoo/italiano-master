"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings2, Check } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ═══ v9.17 · Banner de consentimiento ePrivacy/GDPR ═════════════════
   Aparece una sola vez (hasta decisión) al usar la app. Solo existen
   dos estados posibles de analítica: opt-in o solo-esenciales.
   Nunca bloqueamos el estudio por no decidir.                      */

export function CookieBanner() {
  const legal = useLms((s) => s.legalConsent);
  const setLegalConsent = useLms((s) => s.setLegalConsent);
  const onboarded = useLms((s) => s.onboarded);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || legal.bannerSeen) return null;
  // esperamos a que el usuario vea primero la app (post-onboarding) para no solapar diálogos
  if (!onboarded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        role="dialog"
        aria-label="Consentimiento de cookies"
        className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-2xl rounded-3xl border-2 border-soft bg-surface/95 p-5 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-surface/85 sm:bottom-5 sm:p-6"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-oro-tenue text-oro-scuro dark:text-oro" aria-hidden="true">
            <Cookie className="h-6 w-6" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold">Tu privacidad, tus reglas</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-it">
              Usamos almacenamiento esencial para que la app funcione (sesión, tema, progreso) y, <strong>solo si lo
              aceptas</strong>, telemetría anónima para mejorarla. Sin cookies de terceros, sin publicidad, sin venta de datos.
              Puedes cambiarlo cuando quieras en <strong>Privacidad y legal</strong>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setLegalConsent({ bannerSeen: true, analytics: false })}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft bg-surface px-4 py-2.5 text-sm font-bold text-muted-it transition-colors hover:border-verde hover:text-verde"
              >
                <Settings2 className="h-4 w-4" aria-hidden="true" /> Solo esenciales
              </button>
              <button
                type="button"
                onClick={() => setLegalConsent({ bannerSeen: true, analytics: true })}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-transform hover:scale-[1.02]"
              >
                <Check className="h-4 w-4" aria-hidden="true" /> Aceptar analítica
              </button>
              <a
                href="#/legal"
                onClick={(e) => { e.preventDefault(); useLms.getState().navigate("legal"); setLegalConsent({ bannerSeen: true, analytics: false }); }}
                className="min-h-11 px-2 py-2.5 text-sm font-bold text-muted-it underline decoration-dotted underline-offset-4 hover:text-verde"
              >
                Configurar más tarde
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
