/* /.well-known/security.txt · RFC 9116 (divulgación responsable) */
export const runtime = "edge";

export function GET() {
  const body = `Contact: mailto:security@italiano-master.app
Expires: 2027-10-19T00:00:00.000Z
Preferred-Languages: es, en, it
Canonical: https://italiano-master.vercel.app/.well-known/security.txt
Policy: https://italiano-master.vercel.app/ (Privacidad y legal > Seguridad)
Hiring: no

# Italiano Master · divulgacion responsable
# No publiques hallazgos antes de 90 dias desde el reporte.
# Alcance: *.italiano-master.vercel.app (solo esta plataforma).
# Fuera de alcance: ataques volumetricos, ingenieria social, reportes automaticos.
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=86400" },
  });
}
