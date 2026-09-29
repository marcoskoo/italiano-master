"use client";

/* ── global-error.tsx · Red de seguridad para excepciones del cliente ──
   Antes de v9.5.1 cualquier excepción no capturada (p. ej. ChunkLoadError
   tras un deploy mientras la app estaba abierta) mostraba el mensaje
   crudo de Next.js en inglés. Ahora:
   1. ChunkLoadError / fallo de import dinámico → recarga automática
      (una sola vez por sesión, con flag en sessionStorage para no
      entrar en bucle).
   2. Cualquier otro error → pantalla de la marca en italiano/español
      con dos botones: recargar y limpiar caché + recargar.          */

import { useEffect } from "react";

const CHUNK_ERR = /(ChunkLoadError|Loading chunk|Loading CSS chunk|error loading dynamically imported module|Importing a module script failed|Failed to fetch dynamically imported module)/i;
const RELOADED_FLAG = "im-chunk-reloaded";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const isChunk = CHUNK_ERR.test(error.message ?? "");

  useEffect(() => {
    if (!isChunk) return;
    try {
      if (sessionStorage.getItem(RELOADED_FLAG) === "1") return;
      sessionStorage.setItem(RELOADED_FLAG, "1");
      window.location.reload();
    } catch {
      /* sessionStorage bloqueado: cae al botón manual */
    }
  }, [isChunk]);

  const purgeAndReload = async () => {
    try {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
      if (navigator.serviceWorker?.controller) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      }
    } catch {
      /* mejor esfuerzo */
    }
    window.location.replace(window.location.pathname + window.location.search);
  };

  /* último recurso: estado local corrupto → borrarlo y empezar limpio
     (el progreso de los usuarios con sesión se re-sincroniza del servidor) */
  const resetApp = async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      await purgeAndReload();
    } catch {
      window.location.replace("/");
    }
  };

  return (
    <html lang="it">
      <head>
        <style>{`
          @media (prefers-color-scheme: dark) {
            .im-err-body { background: #211d18; color: #ece7dc; }
            .im-err-card { background: #1b1814; border-color: rgba(236,231,220,.14); box-shadow: 0 20px 45px -18px rgba(0,0,0,.6); }
            .im-err-sub { color: rgba(236,231,220,.62); }
            .im-err-ghost { color: #ece7dc; border-color: rgba(236,231,220,.2) !important; }
            .im-err-code { color: rgba(236,231,220,.4); }
          }
        `}</style>
      </head>
      <body
        className="im-err-body"
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6ee",
          color: "#26221e",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          padding: "24px",
        }}
      >
        <div
          className="im-err-card"
          style={{
            maxWidth: 440,
            width: "100%",
            textAlign: "center",
            borderRadius: 24,
            border: "1px solid rgba(38,34,30,.12)",
            background: "#ffffff",
            padding: "36px 28px",
            boxShadow: "0 20px 45px -18px rgba(38,34,30,.25)",
          }}
        >
          <div style={{ fontSize: 44, lineHeight: 1 }} aria-hidden="true">🎡</div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: "14px 0 6px" }}>
            Ops! Qualcosa è andato storto
          </h1>
          <p className="im-err-sub" style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
            {isChunk ? (
              <>Hemos publicado una versión nueva de la app. Recargando la página…</>
            ) : (
              <>Ocurrió un error inesperado. Tu progreso está a salvo: se guarda en tu dispositivo y no se pierde.</>
            )}
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 22, flexWrap: "wrap" }}>
            {!isChunk && (
              <button
                onClick={() => reset()}
                style={{
                  minHeight: 44, padding: "0 22px", borderRadius: 14, border: "none",
                  background: "#128a54", color: "#fff", fontWeight: 700, fontSize: 14.5,
                  cursor: "pointer",
                }}
              >
                Riprova
              </button>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                minHeight: 44, padding: "0 22px", borderRadius: 14, border: "none",
                background: "#c9862b", color: "#fff", fontWeight: 700, fontSize: 14.5,
                cursor: "pointer",
              }}
            >
              Ricarica
            </button>
            <button
              onClick={() => void purgeAndReload()}
              className="im-err-ghost"
              style={{
                minHeight: 44, padding: "0 22px", borderRadius: 14,
                border: "2px solid rgba(38,34,30,.15)", background: "transparent",
                color: "#26221e", fontWeight: 700, fontSize: 14.5, cursor: "pointer",
              }}
            >
              Svuota cache
            </button>
          </div>
          {!isChunk && (
            <button
              onClick={() => void resetApp()}
              className="im-err-code"
              style={{
                marginTop: 14, background: "none", border: "none", cursor: "pointer",
                textDecoration: "underline", fontSize: 12, padding: 4,
              }}
            >
              Ripristina l'app (borra solo los datos locales)
            </button>
          )}
          <p className="im-err-code" style={{ fontSize: 11.5, marginTop: 18, fontFamily: "ui-monospace, monospace" }}>
            {error.digest ? `cod: ${error.digest}` : "italiano master · v9.5.1"}
          </p>
        </div>
      </body>
    </html>
  );
}
