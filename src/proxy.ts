/* ── Proxy (antes middleware) · CSP con nonce (v9.11) ─────────────────────
   Endurece la Content-Security-Policy respecto a next.config:
   · script-src 'self' 'nonce-…'  → los scripts inline de Next reciben el
     nonce automáticamente (Next lee el header CSP del request inyectado
     aquí). Se eliminan 'unsafe-inline' y 'unsafe-eval' en producción.
   · 'unsafe-eval' SOLO en desarrollo (React Fast Refresh lo exige).
   · style-src mantiene 'unsafe-inline': Next/Tailwind inyectan estilos
     inline (práctica estándar, sin riesgo de ejecución de código).
   · Sin 'strict-dynamic' a propósito: 'self' debe seguir válido para el
     registro del Service Worker (/sw.js) y los chunks de webpack.
   El resto de cabeceras de seguridad sigue en next.config.ts.          */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "media-src 'self' data: blob:",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Next.js lee el header CSP del request, extrae el nonce y lo aplica a
  // sus scripts bootstrap automáticamente.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  /* Todo excepto API y assets estáticos (no necesitan CSP de documento) */
  matcher: [
    "/((?!api|_next/static|_next/image|images|icons|sw.js|offline.html|manifest.json|italia.svg|icon-192.png|icon-512.png|icon-maskable-192.png|icon-maskable-512.png|favicon.ico).*)",
  ],
};
