import { NextRequest, NextResponse } from "next/server";

/* ── POST /api/import · Importa texto de una URL (v6.0) ─────────────
   El fetch se hace en el servidor para evitar CORS. Devuelve el texto
   plano extraído del HTML. Protecciones: solo http/https, sin hosts
   internos, timeout 10 s, tamaño máximo 2 MB. */

const MAX_BYTES = 2 * 1024 * 1024;
const TIMEOUT_MS = 10_000;

function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === "localhost" || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (/^127\./.test(h) || /^10\./.test(h) || /^192\.168\./.test(h) || /^169\.254\./.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(h)) return true;
  if (h === "0.0.0.0" || h === "::1" || h.includes(":")) return true; // IPv6 literal
  return false;
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
  let url: string;
  try {
    const body = await req.json();
    url = String(body?.url ?? "");
  } catch {
    return NextResponse.json({ error: "Cuerpo JSON inválido." }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return NextResponse.json({ error: "URL no válida." }, { status: 400 });
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    return NextResponse.json({ error: "Solo se aceptan URLs http/https." }, { status: 400 });
  }
  if (isBlockedHost(parsed.hostname)) {
    return NextResponse.json({ error: "Host no permitido." }, { status: 403 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(parsed.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "ItalianoMaster/1.0 (importatore di testi)",
        "Accept": "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
        "Accept-Language": "it-IT,it;q=0.9",
      },
    });
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
    const aborted = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      { error: aborted ? "Tiempo de espera agotado (10 s)." : "No se pudo descargar la página." },
      { status: aborted ? 504 : 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
