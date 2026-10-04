import { NextRequest, NextResponse } from "next/server";
import { lookup } from "dns/promises";
import { getClientIp, rateLimit } from "@/lib/admin/security";

/* ── POST /api/import · Importa texto de una URL (v6.0) ─────────────
   El fetch se hace en el servidor para evitar CORS. Devuelve el texto
   plano extraído del HTML.

   Endurecimiento v9.10.1 (auditoría de seguridad — anti-SSRF):
   · Solo http/https y hosts cuyas IPs resueltas (DNS) sean PÚBLICAS
     (bloquea loopback, privadas, link-local 169.254.169.254, ULA…).
   · Redirecciones SEGUIDAS MANUALMENTE: cada salto se re-valida
     (antes, `redirect:"follow"` permitía redirigir a hosts internos).
   · Rate limit por IP (10/min) para impedir uso como proxy abierto.
   · Timeout 10 s por salto, tamaño máximo 2 MB.                       */

const MAX_BYTES = 2 * 1024 * 1024;
const TIMEOUT_MS = 10_000;
const MAX_REDIRECTS = 3;

class ImportError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

function isPrivateIp(ip: string): boolean {
  // IPv4
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
    const parts = ip.split(".").map(Number);
    const [a, b] = parts;
    if (a === 0 || a === 10 || a === 127) return true;                    // this-network, privado, loopback
    if (a === 169 && b === 254) return true;                              // link-local (metadata 169.254.169.254)
    if (a === 192 && b === 168) return true;                              // privado
    if (a === 172 && b >= 16 && b <= 31) return true;                     // privado
    if (a === 100 && b >= 64 && b <= 127) return true;                    // CGNAT
    if (a >= 224) return true;                                            // multicast / reservado
    return false;
  }
  // IPv6 (incluye representaciones mapeadas de IPv4)
  const v6 = ip.toLowerCase();
  if (v6 === "::" || v6 === "::1") return true;                           // unspecified / loopback
  if (v6.startsWith("fe80") || v6.startsWith("fc") || v6.startsWith("fd")) return true; // link-local / ULA
  if (v6.startsWith("::ffff:")) return isPrivateIp(v6.slice(7));          // IPv4-mapped
  if (v6.startsWith("ff")) return true;                                   // multicast
  return false;
}

/** Valida la URL y que su DNS resuelva SOLO a IPs públicas. */
async function assertPublicHttpUrl(rawUrl: string): Promise<URL> {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new ImportError("URL no válida.", 400);
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    throw new ImportError("Solo se aceptan URLs http/https.", 400);
  }
  const host = parsed.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  // literales de host interno sin DNS
  if (
    host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") || host.endsWith(".vercel") ||
    host.includes(":") || // IPv6 literal (se valida como IP abajo si aplica)
    isPrivateIp(host)
  ) {
    throw new ImportError("Host no permitido.", 403);
  }
  // resolución DNS: TODAS las IPs deben ser públicas (anti DNS-rebinding)
  try {
    const addrs = await lookup(host, { all: true, verbatim: true });
    if (addrs.length === 0 || addrs.some((a) => isPrivateIp(a.address))) {
      throw new ImportError("Host no permitido.", 403);
    }
  } catch (err) {
    if (err instanceof ImportError) throw err;
    throw new ImportError("El dominio no resuelve.", 400);
  }
  return parsed;
}

function htmlToText(html: string): { title: string; text: string } {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
  let t = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|noscript|svg|nav|footer|header|aside|form|iframe)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|div|li|h[1-6]|tr|blockquote|section|article)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<[^>]+>/g, " ");
  // decodificar entidades básicas + numéricas
  t = t
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&laquo;/gi, "«")
    .replace(/&raquo;/gi, "»")
    .replace(/&egrave;/gi, "è")
    .replace(/&eacute;/gi, "é")
    .replace(/&agrave;/gi, "à")
    .replace(/&ugrave;/gi, "ù")
    .replace(/&igrave;/gi, "ì")
    .replace(/&ograve;/gi, "ò")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, x) => String.fromCodePoint(parseInt(x, 16)));
  // normalizar espacios y líneas
  const lines = t
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean);
  return { title, text: lines.join("\n") };
}

export async function POST(req: NextRequest) {
  // rate limit: impedir el uso del endpoint como proxy abierto / escáner
  const rl = rateLimit(`import:${getClientIp(req)}`, { limit: 10, windowMs: 60_000, blockMs: 120_000 });
  if (!rl.ok) {
    return NextResponse.json({ error: "Demasiadas importaciones. Espera un momento." }, { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } });
  }

  let url: string;
  try {
    const body = await req.json();
    url = String(body?.url ?? "");
  } catch {
    return NextResponse.json({ error: "Cuerpo JSON inválido." }, { status: 400 });
  }

  /* Fetch con redirecciones manuales: cada destino se re-valida contra
     DNS/IP pública antes de seguirlo (un redirect a 169.254.169.254 o a
     una IP interna queda bloqueado aquí).                               */
  try {
    let current = await assertPublicHttpUrl(url);
    let res: Response | null = null;

    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
      try {
        res = await fetch(current.toString(), {
          signal: controller.signal,
          redirect: "manual", // NUNCA automático: cada salto se valida
          headers: {
            "User-Agent": "ItalianoMaster/1.0 (importatore di testi)",
            "Accept": "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
            "Accept-Language": "it-IT,it;q=0.9",
          },
        });
      } finally {
        clearTimeout(timeout);
      }

      if ([301, 302, 303, 307, 308].includes(res.status)) {
        const location = res.headers.get("location");
        if (!location) {
          return NextResponse.json({ error: `La página respondió ${res.status} sin destino.` }, { status: 502 });
        }
        if (hop === MAX_REDIRECTS) {
          return NextResponse.json({ error: "Demasiadas redirecciones." }, { status: 508 });
        }
        current = await assertPublicHttpUrl(new URL(location, current).toString());
        continue; // siguiente salto validado
      }
      break; // respuesta definitiva
    }

    if (!res) return NextResponse.json({ error: "No se pudo descargar la página." }, { status: 502 });
    if (!res.ok) {
      return NextResponse.json({ error: `La página respondió ${res.status}.` }, { status: 502 });
    }
    const len = Number(res.headers.get("content-length") ?? 0);
    if (len > MAX_BYTES) {
      return NextResponse.json({ error: "La página es demasiado grande (máx. 2 MB)." }, { status: 413 });
    }
    const html = (await res.text()).slice(0, MAX_BYTES);
    const { title, text } = htmlToText(html);
    if (text.length < 40) {
      return NextResponse.json({ error: "No se pudo extraer texto legible de esa página." }, { status: 422 });
    }
    return NextResponse.json({ title, text, chars: text.length });
  } catch (err) {
    if (err instanceof ImportError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    const aborted = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      { error: aborted ? "Tiempo de espera agotado (10 s)." : "No se pudo descargar la página." },
      { status: aborted ? 504 : 502 }
    );
  }
}
