/* ── Numbers · conversor números ↔ inglés americano ──────────────────
   Espejo de la API de src/lib/lms/numbers.ts (IT): numberToEnglish
   (0–999.999.999, estilo EE. UU. sin «and», guiones en twenty-one),
   ordinalToEnglish (first→twentieth + patrón -th/-ieth y compuestos),
   timeToEnglish (o'clock, quarter past/to, half past, noon/midnight,
   reloj de 12 h), normalizeEnglish y englishEquals (tolerantes a
   apóstrofos, espacios y guiones; acepta «a hundred» = «one hundred»). */

const UNITS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const TENS: Record<number, string> = {
  2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty",
  7: "seventy", 8: "eighty", 9: "ninety",
};

/** Convierte 0–99 con guion en los compuestos (twenty-one) */
function under100(n: number): string {
  if (n < 20) return UNITS[n];
  const t = Math.floor(n / 10);
  const u = n % 10;
  return u === 0 ? TENS[t] : `${TENS[t]}-${UNITS[u]}`;
}

/** Convierte 0–999 estilo EE. UU.: one hundred five (sin «and») */
function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const r = n % 100;
  const hundreds = h === 1 ? "one hundred" : `${under100(h)} hundred`;
  return r === 0 ? hundreds : `${hundreds} ${under100(r)}`;
}

/** Convierte un número entero (0 – 999.999.999) a inglés americano */
export function numberToEnglish(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return "";
  if (n < 1000) return under1000(n);
  if (n < 1_000_000) {
    const t = Math.floor(n / 1000);
    const r = n % 1000;
    const thousands = t === 1 ? "one thousand" : `${under1000(t)} thousand`;
    return r === 0 ? thousands : `${thousands} ${under1000(r)}`;
  }
  const m = Math.floor(n / 1_000_000);
  const r = n % 1_000_000;
  const millions = m === 1 ? "one million" : `${under1000(m)} million`;
  return r === 0 ? millions : `${millions} ${numberToEnglish(r)}`;
}

/* ── Ordinales ────────────────────────────────────────────────────── */

const ORDINALS: Record<number, string> = {
  1: "first", 2: "second", 3: "third", 4: "fourth", 5: "fifth", 6: "sixth",
  7: "seventh", 8: "eighth", 9: "ninth", 10: "tenth", 11: "eleventh",
  12: "twelfth", 13: "thirteenth", 14: "fourteenth", 15: "fifteenth",
  16: "sixteenth", 17: "seventeenth", 18: "eighteenth", 19: "nineteenth",
  20: "twentieth",
};

/** Ordinales 1–99: first…twentieth, thirtieth (y→ie), twenty-first */
function ordinalUnder100(n: number): string {
  if (ORDINALS[n]) return ORDINALS[n];
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (u === 0) return `${TENS[t].slice(0, -1)}ieth`; // thirty → thirtieth
  return `${TENS[t]}-${ORDINALS[u]}`;
}

/** Ordinal 1–9999: one hundredth, one hundred fifth, two thousand twenty-fourth */
export function ordinalToEnglish(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 9999) return "";
  if (n < 100) return ordinalUnder100(n);
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const r = n % 100;
    const hundreds = h === 1 ? "one hundred" : `${under100(h)} hundred`;
    return r === 0 ? `${hundreds}th` : `${hundreds} ${ordinalUnder100(r)}`;
  }
  const t = Math.floor(n / 1000);
  const r = n % 1000;
  const thousands = t === 1 ? "one thousand" : `${under1000(t)} thousand`;
  return r === 0 ? `${thousands}th` : `${thousands} ${ordinalToEnglish(r)}`;
}

/* ── La hora (reloj de 12 h estilo hablado) ───────────────────────── */

/** hora en palabras de 12 h: 0 → twelve, 13 → one, 8 → eight */
function hourWord(h24: number): string {
  const h12 = h24 % 12;
  return h12 === 0 ? "twelve" : UNITS[h12];
}

/** La hora en inglés: timeToEnglish(8, 15) → "it's quarter past eight" */
export function timeToEnglish(h: number, m: number): string {
  const hh = ((h % 24) + 24) % 24;
  const mm = ((m % 60) + 60) % 60;
  if (hh === 0 && mm === 0) return "it's midnight";
  if (hh === 12 && mm === 0) return "it's noon";
  // quarter to: se refiere a la hora SIGUIENTE
  if (mm === 45) {
    const next = (hh + 1) % 24;
    if (next === 0) return "it's quarter to midnight";
    if (next === 12) return "it's quarter to noon";
    return `it's quarter to ${hourWord(next)}`;
  }
  const hw = hourWord(hh);
  if (mm === 0) return `it's ${hw} o'clock`;
  if (mm === 15) return `it's quarter past ${hw}`;
  if (mm === 30) return `it's half past ${hw}`;
  const mmw = mm < 10 ? `oh ${UNITS[mm]}` : under100(mm);
  return `it's ${hw} ${mmw}`;
}

/* ── Normalización y comparación ──────────────────────────────────── */

/** Normaliza la respuesta: minúsculas, sin puntuación; «a hundred» → «one hundred» */
export function normalizeEnglish(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’`]/g, "'")
    .replace(/[^a-z' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\ba (?=(hundred|thousand|million)\b)/g, "one ");
}

/** Comparación tolerante: acepta "twenty one", "twenty-one", "twentyone"… */
export function englishEquals(input: string, target: string): boolean {
  const a = normalizeEnglish(input);
  const b = normalizeEnglish(target);
  if (!a) return false;
  if (a === b) return true;
  // también sin espacios ni apóstrofos (o'clock = oclock)
  return a.replace(/[ ']/g, "") === b.replace(/[ ']/g, "");
}
