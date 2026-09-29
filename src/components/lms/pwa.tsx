"use client";

/* ── PWA (v6.0): registro del service worker + prompt de instalación ──
   100% gratuito: manifest + SW + beforeinstallprompt, sin servicios push. */

import { useCallback, useEffect, useState } from "react";
import { Download, Smartphone, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

/** Registra el service worker (solo en producción, para no romper el dev HMR) */
export function PwaRegister() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* SW opcional: si falla, la app sigue funcionando online */
      });
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
    return () => window.removeEventListener("load", register);
  }, []);
  return null;
}

/** Hook de instalación: expone disponibilidad y el prompt nativo */
export function useInstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  // inicializador lazy: evita setState síncrono en efecto (reglas React Compiler)
  const [installed, setInstalled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice.catch(() => null);
    setDeferred(null);
  }, [deferred]);

  return { canInstall: deferred !== null && !installed, installed, install };
}

/** Botón "Instalar app" — se renderiza solo si el navegador permite instalar */
export function InstallButton({ className, compact }: { className?: string; compact?: boolean }) {
  const { canInstall, install } = useInstallPrompt();
  if (!canInstall) return null;
  return (
    <button
      onClick={() => void install()}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-verde/40 bg-verde-tenue px-5 py-2.5 font-bold text-verde-scuro transition-all hover:border-verde hover:scale-[1.02] active:scale-95 dark:text-verde",
        className
      )}
    >
      {compact ? <Smartphone className="h-4 w-4" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
      {compact ? "Instalar" : "Instalar la app"}
    </button>
  );
}

/** Aviso flotado discreto de instalación (una vez por sesión, solo si instalable) */
export function InstallBanner() {
  const { canInstall, install } = useInstallPrompt();
  const [closed, setClosed] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("im-install-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (!canInstall || closed) return null;

  const dismiss = () => {
    setClosed(true);
    try { sessionStorage.setItem("im-install-dismissed", "1"); } catch { /* noop */ }
  };

  return (
    <div className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-md rounded-2xl border border-verde/30 bg-surface p-4 shadow-2xl md:bottom-6" role="dialog" aria-label="Instalar la aplicación">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-verde text-xl text-white" aria-hidden="true">🇮🇹</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold">Installa Italiano Master</p>
          <p className="text-xs text-muted-it">Acceso directo, pantalla completa y funciona offline.</p>
        </div>
        <button onClick={() => void install()} className="inline-flex min-h-10 shrink-0 items-center rounded-xl bg-verde px-4 py-2 text-xs font-bold text-white transition-transform active:scale-95">
          Installa
        </button>
        <button onClick={dismiss} aria-label="Cerrar aviso" className="rounded-lg p-1.5 text-muted-it hover:text-rosso">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
