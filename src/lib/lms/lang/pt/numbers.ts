/* ── Números · conversor números ↔ portugués europeo ─────────────────
   Espejo de la API de src/lib/lms/numbers.ts (IT): cardinales 0–999.999.999
   con «e» entre decenas y unidades (vinte e um), cem/cento, concordancia
   de centenas (duzentas), ordinais primeiro→milésimo, la hora en estilo
   hablado («são oito horas», «oito e um quarto», «e meia», «faltam quinze
   minutos para as nove», «é meio-dia / meia-noite») y comparación
   tolerante. randomNumber NO se re-exporta (queda en numbers.ts común). */

const UNITS: string[] = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "catorze", "quinze", "dezasseis", "dezassete", "dezoito", "dezanove",
]

const TENS: Record<number, string> = {
  2: "vinte", 3: "trinta", 4: "quarenta", 5: "cinquenta",
  6: "sessenta", 7: "setenta", 8: "oitenta", 9: "noventa",
}

/** Centenas con concordancia de género: duzentos/duzentas, trezentas… */
const HUNDREDS: Record<number, [string, string]> = {
  2: ["duzentos", "duzentas"],
  3: ["trezentos", "trezentas"],
  4: ["quatrocentos", "quatrocentas"],
  5: ["quinhentos", "quinhentas"],
  6: ["seiscentos", "seiscentas"],
  7: ["setecentos", "setecentas"],
  8: ["oitocentos", "oitocentas"],
  9: ["novecentos", "novecentas"],
}

/** Convierte 0–99: «e» obligatorio entre decenas y unidades (vinte e um) */
function under100(n: number, fem: boolean): string {
  if (n < 20) {
    if (fem && n === 1) return "uma"
    if (fem && n === 2) return "duas"
    return UNITS[n]
  }
  const t = Math.floor(n / 10)
  const u = n % 10
  if (u === 0) return TENS[t]
  return `${TENS[t]} e ${under100(u, fem)}`
}

/** Convierte 0–999: cem / cento e um / duzentas e uma… */
function under1000(n: number, fem: boolean): string {
  if (n < 100) return under100(n, fem)
  const h = Math.floor(n / 100)
  const r = n % 100
  if (h === 1) {
    if (r === 0) return "cem"
    return `cento e ${under100(r, fem)}`
  }
  const cent = HUNDREDS[h][fem ? 1 : 0]
  if (r === 0) return cent
  return `${cent} e ${under100(r, fem)}`
}

/** Une mil/milhões con su resto: «e» si el resto es < 100 o centena exacta
    (mil e um, dois mil e cem) y espacio si no (mil duzentos e trinta). */
function joinLarge(prefix: string, rest: number, fem: boolean): string {
  if (rest === 0) return prefix
  const tail = rest < 1000 ? under1000(rest, fem) : numberToPortuguese(rest, fem)
  const joiner = rest < 100 || rest % 100 === 0 ? " e " : " "
  return `${prefix}${joiner}${tail}`
}

/** Convierte un número entero (0–999.999.999) a portugués europeo.
    feminine=true da la forma femenina: uma, duas, duzentas, trezentas e
    vinte e uma… (mil/milhões son invariables, milhão siempre masculino). */
export function numberToPortuguese(n: number, feminine = false): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return ""
  if (n === 0) return "zero"
  if (n < 1000) return under1000(n, feminine)
  if (n < 1_000_000) {
    const m = Math.floor(n / 1000)
    const mil = m === 1 ? "mil" : `${under1000(m, feminine)} mil`
    return joinLarge(mil, n % 1000, feminine)
  }
  const mu = Math.floor(n / 1_000_000)
  const milhoes = mu === 1 ? "um milhão" : `${under1000(mu, false)} milhões`
  return joinLarge(milhoes, n % 1_000_000, feminine)
}

/** Ordinais 1.º–1000.º: primero los especiales y luego el patrón compuesto
    (décimo terceiro, vigésimo primeiro, centésimo, milésimo). */
const ORDINAIS: Record<number, [string, string]> = {
  1: ["primeiro", "primeira"],
  2: ["segundo", "segunda"],
  3: ["terceiro", "terceira"],
  4: ["quarto", "quarta"],
  5: ["quinto", "quinta"],
  6: ["sexto", "sexta"],
  7: ["sétimo", "sétima"],
  8: ["oitavo", "oitava"],
  9: ["nono", "nona"],
  10: ["décimo", "décima"],
  11: ["undécimo", "undécima"],
  12: ["duodécimo", "duodécima"],
  20: ["vigésimo", "vigésima"],
  30: ["trigésimo", "trigésima"],
  40: ["quadragésimo", "quadragésima"],
  50: ["quinquagésimo", "quinquagésima"],
  60: ["sexagésimo", "sexagésima"],
  70: ["septuagésimo", "septuagésima"],
  80: ["octogésimo", "octogésima"],
  90: ["nonagésimo", "nonagésima"],
  100: ["centésimo", "centésima"],
  200: ["ducentésimo", "ducentésima"],
  300: ["trecentésimo", "trecentésima"],
  400: ["quadringentésimo", "quadringentésima"],
  500: ["quingentésimo", "quingentésima"],
  600: ["sexcentésimo", "sexcentésima"],
  700: ["septingentésimo", "septingentésima"],
  800: ["octingentésimo", "octingentésima"],
  900: ["nongentésimo", "nongentésima"],
  1000: ["milésimo", "milésima"],
}

/** Ordinal en palabras (feminine=true → primeira, vigésima primeira…). */
export function ordinalToPortuguese(n: number, feminine = false): string {
  const f = feminine ? 1 : 0
  if (ORDINAIS[n]) return ORDINAIS[n][f]
  if (!Number.isInteger(n) || n <= 0 || n > 1000) return ""
  if (n < 100) {
    const t = Math.floor(n / 10) * 10
    const u = n % 10
    return [ORDINAIS[t][f], ordinalToPortuguese(u, feminine)].filter(Boolean).join(" ")
  }
  const h = Math.floor(n / 100) * 100
  const r = n % 100
  return [ORDINAIS[h][f], r > 0 ? ordinalToPortuguese(r, feminine) : ""].filter(Boolean).join(" ")
}

/** La hora en portugués europeo: timeToPortuguese(8, 15) → "são oito e um
    quarto"; 8:45 → "faltam quinze minutos para as nove". */
export function timeToPortuguese(h: number, m: number): string {
  const hh = ((h % 24) + 24) % 24
  const mm = ((m % 60) + 60) % 60
  if (mm === 45) {
    const next = (hh + 1) % 24
    if (next === 0) return "faltam quinze minutos para a meia-noite"
    if (next === 12) return "faltam quinze minutos para o meio-dia"
    if (next === 1) return "faltam quinze minutos para a uma"
    return `faltam quinze minutos para as ${numberToPortuguese(next)}`
  }
  const minutes =
    mm === 15 ? "um quarto" : mm === 30 ? "meia" : mm === 1 ? "um" : numberToPortuguese(mm)
  if (hh === 0) return mm === 0 ? "é meia-noite" : `é meia-noite e ${minutes}`
  if (hh === 12) return mm === 0 ? "é meio-dia" : `é meio-dia e ${minutes}`
  if (mm === 0) return hh === 1 ? "é uma hora" : `são ${numberToPortuguese(hh)} horas`
  return hh === 1 ? `é uma e ${minutes}` : `são ${numberToPortuguese(hh)} e ${minutes}`
}

/** Normaliza la respuesta del usuario para comparar (acentos, cedilla,
    circunflejos, guiones de meio-dia, mayúsculas, espacios). */
export function normalizePortuguese(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`]/g, "'")
    .replace(/[^a-z' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/** Comparación tolerante: acepta "Vinte e Um", "vinte-e-um", "vinteum"… */
export function portugueseEquals(input: string, target: string): boolean {
  const a = normalizePortuguese(input)
  const b = normalizePortuguese(target)
  if (!a) return false
  if (a === b) return true
  return a.replace(/[ ']/g, "") === b.replace(/[ ']/g, "")
}
