/* ── Italiano Master · Service Worker (v6.0) ────────────────────────
   Estrategia offline sin servicios de pago:
   · Pre-cache: shell + offline + assets de marca
   · /_next/static/* → cache-first (assets inmutables con hash)
   · navegación y demás GET → network-first con fallback a caché
     y, si no hay red, /offline.html
   · /api/* → solo red (nunca se cachea el backend) */

const VERSION = "im-v6-0-0";
const CACHE = `italiano-master-${VERSION}`;

const PRECACHE = [
  "/",
  "/offline.html",
  "/manifest.json",
  "/logo.svg",
  "/italia.svg",
  "/icon-192.png",
  "/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(PRECACHE.map((u) => cache.add(u)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // cross-origin: fuera
  if (url.pathname.startsWith("/api/")) return;              // backend: solo red

  // assets estáticos de Next (con hash inmutable) → cache-first
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ??
          fetch(req).then((res) => {
            if (res.ok) {
              const clone = res.clone();
              caches.open(CACHE).then((c) => c.put(req, clone));
            }
            return res;
          })
      )
    );
    return;
  }

  // navegación y demás → network-first
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => {
          if (hit) return hit;
          if (req.mode === "navigate") return caches.match("/offline.html");
          return Response.error();
        })
      )
  );
});
