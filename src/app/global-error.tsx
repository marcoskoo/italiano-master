"use client";

/* ── global-error.tsx · Red de seguridad para excepciones del cliente ──
   v9.5.1: pantalla de marca con recuperación en 1 clic.
   v9.5.2: · auto-recarga única ante CUALQUIER error (Safari no emite
             "ChunkLoadError": sus fallos de chunk llegan como
             TypeError "Load failed" y no matcheaban el regex anterior)
           · "Dettagli tecnici" desplegable: mensaje + stack → el usuario
             puede copiar/pegar el diagnóstico exacto
           · telemetría client_error al servidor (fire & forget) para
             diagnosticar errores no reproducibles desde el panel admin  */

import { useEffect, useState } from "react";

const CHUNK_ERR = /(ChunkLoadError|Loading chunk|Loading CSS chunk|Load failed|NetworkError|error loading dynamically imported module|Importing a module script failed|Failed to fetch dynamically imported module|fetch\(\) failed)/i;
const RELOADED_FLAG = "im-chunk-reloaded";

/** Lee con seguridad un par de campos del estado persistido (para el diagnóstico) */
function readPersistedContext(): string {
  try {
    const raw = localStorage.getItem("italiano-master-v1");
    if (!raw) return "sin estado local";
    const st = JSON.parse(raw)?.state ?? {};
    const bits: string[] = [];
    if (typeof st.view === "string") bits.push(`view=${st.view}`);
    const np = st.navParams;
    if (np && typeof np === "object") bits.push(`navParams=${JSON.stringify(np).slice(0, 120)}`);
    if (typeof st.xp === "number") bits.push(`xp=${st.xp}`);
    if (st.account?.username) bits.push(`user=${st.account.username}`);
    return bits.join(" ") || "estado vacío";
  } catch {
    return "estado ilegible";
  }
}

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const isChunk = CHUNK_ERR.test(error.message ?? "");
  const ctx = typeof window === "undefined" ? "" : readPersistedContext();
  const stackTop = (error.stack ?? "").split("\n").slice(0, 4).join("\n");

  useEffect(() => {
    /* telemetría SIEMPRE (fire & forget): nunca bloquea ni rompe */
    try {
      const payload = JSON.stringify({
        event: "client_error",
        detail: {
          msg: (error.message ?? String(error)).slice(0, 300),
          stack: stackTop.slice(0, 500),
          digest: error.digest ?? null,
          chunk: isChunk,
          ctx,
          href: window.location.href.slice(0, 200),
          ua: navigator.userAgent.slice(0, 200),
        },
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/telemetry", new Blob([payload], { type: "application/json" }));
      } else {
        void fetch("/api/telemetry", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).catch(() => {});
      }
    } catch {
      /* nada que hacer */
    }

    /* auto-recarga UNA sola vez por sesión, para cualquier error:
       - chunk obsoleto (deploy con la app abierta) → se recupera solo
       - error determinista → recarga, vuelve a fallar y ya muestra la pantalla */
    try {
      if (sessionStorage.getItem(RELOADED_FLAG) === "1") return;
      sessionStorage.setItem(RELOADED_FLAG, "1");
    } catch {
      /* sessionStorage bloqueado: cae al botón manual */
      return;
    }
    window.location.reload();
  }, []);

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
            .im-err-ghost { color: #ece7dc !important; border-color: rgba(236,231,220,.2) !important; }
            .im-err-code { color: rgba(236,231,220,.4); }
            .im-err-details { background: rgba(236,231,220,.06); border-color: rgba(236,231,220,.12); color: #ece7dc; }
          }
          .im-err-details { border: 1px solid rgba(38,34,30,.12); }
          .im-err-details pre { white-space: pre-wrap; word-break: break-word; }
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
            maxWidth: 460,
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
              Ripristina l&apos;app (borra solo los datos locales)
            </button>
          )}

          {/* diagnóstico: mensaje + stack + contexto del estado */}
          <button
            onClick={() => setDetailsOpen((d) => !d)}
            className="im-err-code"
            style={{
              display: "block", margin: "16px auto 0", background: "none", border: "none",
              cursor: "pointer", textDecoration: "underline", fontSize: 12, padding: 4,
            }}
          >
            {detailsOpen ? "▾ Nascondi dettagli tecnici" : "▸ Dettagli tecnici"}
          </button>
          {detailsOpen && (
            <div
              className="im-err-details"
              style={{ marginTop: 10, borderRadius: 14, padding: "12px 14px", textAlign: "left" }}
            >
              <pre className="im-err-code" style={{ fontSize: 11.5, margin: 0, lineHeight: 1.5 }}>
                {error.message ?? String(error)}
                {stackTop ? `\n\n${stackTop}` : ""}
                {ctx ? `\n\n[${ctx}]` : ""}
                {error.digest ? `\n[digest: ${error.digest}]` : ""}
              </pre>
            </div>
          )}

          <p className="im-err-code" style={{ fontSize: 11.5, marginTop: 18, fontFamily: "ui-monospace, monospace" }}>
            {error.digest ? `cod: ${error.digest}` : "italiano master · v9.5.2"}
          </p>
        </div>
      </body>
    </html>
  );
}
