/* ── Zahlen · conversor números ↔ alemán (Hochdeutsch) ──────────────
   Espejo de la API de src/lib/lms/numbers.ts (IT): cardinal, ordinal,
   hora, normalización y comparación. Rango 0–999.999.999.
   Reglas alemanas: orden INVERTIDO (einundzwanzig), sechzehn/siebzig
   (nunca sechszehn/siebentzig), hundert/tausend invariables y pegados,
   "eine Million", dreißig con ß tras diptongo y la hora hablada con
   halb/Viertel (halb neun = 8:30) más Uhr en estilo 24 h.            */

const UNITS = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn",
  "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];

const TENS: Record<number, string> = {
  2: "zwanzig", 3: "dreißig", 4: "vierzig", 5: "fünfzig", 6: "sechzig",
  7: "siebzig", 8: "achtzig", 9: "neunzig",
};

/** Convierte 0–99 con el orden INVERTIDO alemán: unidades + und + decenas */
function under100(n: number): string {
  if (n < 20) return UNITS[n];
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (u === 0) return TENS[t];
  const unit = u === 1 ? "ein" : UNITS[u]; // einundzwanzig, pero: eins
  return unit + "und" + TENS[t];
}

/** Convierte 0–999: hundert invariable y todo pegado (hundertneunundneunzig) */
function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const r = n % 100;
  const cent = h === 1 ? "hundert" : UNITS[h] + "hundert";
  if (r === 0) return cent;
  return cent + under100(r);
}

/** Convierte un número entero (0 – 999.999.999) a alemán */
export function numberToGerman(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return "";
  if (n < 1000) return under1000(n);
  if (n < 1_000_000) {
    const m = Math.floor(n / 1000);
    const r = n % 1000;
    const tausend = m === 1 ? "tausend" : under1000(m) + "tausend";
    return r === 0 ? tausend : tausend + under1000(r); // pegado: tausendeins
  }
  const mu = Math.floor(n / 1_000_000);
  const resto = n % 1_000_000;
  const millionen = mu === 1 ? "eine Million" : under1000(mu) + " Millionen";
  if (resto === 0) return millionen;
  if (resto < 1000) return millionen + " " + under1000(resto);
  return millionen + " " + numberToGerman(resto);
}

/** Ordinales: 0–19 como dato (dritte, siebte, elfte…) y -ste a partir
    de 20 (zwanzigste, einundzwanzigste, hundertste, tausendste). */
export function ordinalToGerman(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 9999) return "";
  const irr: Record<number, string> = {
    0: "nullte", 1: "erste", 2: "zweite", 3: "dritte", 4: "vierte", 5: "fünfte",
    6: "sechste", 7: "siebte", 8: "achte", 9: "neunte", 10: "zehnte", 11: "elfte",
    12: "zwölfte", 13: "dreizehnte", 14: "vierzehnte", 15: "fünfzehnte", 16: "sechzehnte",
    17: "siebzehnte", 18: "achtzehnte", 19: "neunzehnte",
  };
  if (n < 100) {
    if (irr[n]) return irr[n];
    return numberToGerman(n) + "ste"; // 20–99: zwanzigste, dreiundneunzigste
  }
  const last = n % 100;
  if (last === 0) return numberToGerman(n) + "ste"; // hundertste, tausendste
  if (last < 20) return numberToGerman(n - last) + irr[last]; // hundertdritte, tausendneunzehnte
  return numberToGerman(n) + "ste"; // hunderteinundzwanzigste
}

/** La hora en alemán hablado: timeToGerman(8, 30) → "es ist halb neun"
    (halb X = 30 minutos ANTES de X). Reloj 24 h con Uhr en la hora exacta. */
const CASUAL_HOURS = ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"];

function casualHour(n: number): string {
  return CASUAL_HOURS[((n - 1) % 12 + 12) % 12]; // 13:30 → halb zwei
}

export function timeToGerman(h: number, m: number): string {
  const hh = ((h % 24) + 24) % 24;
  const mm = ((m % 60) + 60) % 60;
  if (hh === 0 && mm === 0) return "es ist Mitternacht";
  if (hh === 12 && mm === 0) return "es ist mittags";
  if (mm === 0) return "es ist " + (hh === 1 ? "ein" : numberToGerman(hh)) + " Uhr";
  if (mm === 15) return "es ist Viertel nach " + casualHour(hh);
  if (mm === 30) return "es ist halb " + casualHour(hh + 1);
  if (mm === 45) return "es ist Viertel vor " + casualHour(hh + 1);
  if (mm < 30) return "es ist " + numberToGerman(mm) + " nach " + casualHour(hh);
  return "es ist " + numberToGerman(60 - mm) + " vor " + casualHour(hh + 1);
}

/** Normaliza la respuesta del usuario: minúsculas, ß→ss (heiße = heisse)
    y espacios. Los umlauts QUEDAN (son distintivos: fünf ≠ fuenf). */
export function normalizeGerman(s: string): string {
  return s
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-zäöü ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Comparación tolerante: acepta "ein und zwanzig", "DREISSIG"… */
export function germanEquals(input: string, target: string): boolean {
  const a = normalizeGerman(input);
  const b = normalizeGerman(target);
  if (!a) return false;
  if (a === b) return true;
  return a.replace(/ /g, "") === b.replace(/ /g, "");
}
