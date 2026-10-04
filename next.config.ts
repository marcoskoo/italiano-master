import type { NextConfig } from "next";

/* ── Cabeceras de seguridad (v9.11) ──────────────────────────────────────
   La CSP con nonce se gestiona en src/middleware.ts (permite eliminar
   'unsafe-inline' y 'unsafe-eval' de script-src en producción).
   Aquí quedan HSTS, anti-clickjacking, anti-MIME-sniffing, referrer
   estricto y políticas de permisos.                              */

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(self), geolocation=(), payment=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false, // no revelar la pila tecnológica
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai", "*.chat.z.ai"],
  async headers() {
    return [
      { source: "/(.*)", headers: SECURITY_HEADERS },
    ];
  },
};

export default nextConfig;
