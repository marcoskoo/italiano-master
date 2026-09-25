/* ── Numeri · conversor números ↔ italiano ─────────────────────────── */

const UNITS = ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci",
  "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"];

const TENS: Record<number, string> = {
  2: "venti", 3: "trenta", 4: "quaranta", 5: "cinquanta", 6: "sessanta",
  7: "settanta", 8: "ottanta", 9: "novanta",
};

/** Convierte 0–99 a palabras con las reglas de apócope y elisión */
function under100(n: number): string {
  if (n < 20) return UNITS[n];
  const t = Math.floor(n / 10);
  const u = n % 10;
  const base = TENS[t];
  if (u === 0) return base;
  if (u === 1 || u === 8) return base.slice(0, -1) + UNITS[u]; // ventuno, ventotto
  return base + UNITS[u];
}

/** Convierte 0–999 */
function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const r = n % 100;
  const cent = h === 1 ? "cento" : UNITS[h] + "cento";
  if (r === 0) return cent;
  return cent + under100(r);
}

/** Convierte un número entero (0 – 999.999.999) a italiano */
export function numberToItalian(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return "";
  let out: string;
  if (n < 1000) out = under1000(n);
  else if (n < 1_000_000) {
    const m = Math.floor(n / 1000);
    const r = n % 1000;
    const mila = m === 1 ? "mille" : under1000(m) + "mila";
    out = r === 0 ? mila : mila + under1000(r);
  } else {
    const mu = Math.floor(n / 1_000_000);
    const resto = n % 1_000_000;
    const milioni = mu === 1 ? "un milione" : under1000(mu) + " milioni";
    if (resto === 0) out = milioni;
    else if (resto < 1000) out = milioni + " " + under1000(resto);
    else out = milioni + " " + numberToItalian(resto);
  }
  // regla del acento: todo compuesto > 3 terminado en 3 lleva acento (ventitré, centotré, milletré)
  if (n > 3 && out.endsWith("tre")) out = out.slice(0, -3) + "tré";
  return out;
}

/** Ordinales 1–20 + patrón -esimo */
export function ordinalToItalian(n: number): string {
  const irr: Record<number, string> = {
    1: "primo", 2: "secondo", 3: "terzo", 4: "quarto", 5: "quinto", 6: "sesto",
    7: "settimo", 8: "ottavo", 9: "nono", 10: "decimo", 11: "undicesimo",
    12: "dodicesimo", 13: "tredicesimo", 14: "quattordicesimo", 15: "quindicesimo",
    16: "sedicesimo", 17: "diciassettesimo", 18: "diciottesimo", 19: "diciannovesimo",
    20: "ventesimo", 100: "centesimo", 1000: "millesimo",
  };
  if (irr[n]) return irr[n];
  if (n < 0 || !Number.isInteger(n) || n > 9999) return "";
  const word = numberToItalian(n).replace(/é$/, "e"); // ventitré → ventitre
  // tre y seis añaden -esimo directo (ventitreesimo, ventiseiesimo);
  // el resto pierde la vocal final (ventunesimo, diciottesimo, ventiquattresimo)
  if (word.endsWith("tre") || word.endsWith("sei")) return word + "esimo";
  return word.slice(0, -1) + "esimo";
}

/** La hora en italiano: timeToItalian(8, 15) → "le otto e un quarto" */
export function timeToItalian(h: number, m: number): string {
  const hh = ((h % 24) + 24) % 24;
  const mm = ((m % 60) + 60) % 60;
  if (hh === 0 && mm === 0) return "è mezzanotte";
  if (hh === 12 && mm === 0) return "è mezzogiorno";
  // menos un cuarto: se refiere a la hora SIGUIENTE
  if (mm === 45) {
    const next = (hh + 1) % 24;
    if (next === 0) return "è mezzanotte meno un quarto";
    if (next === 12) return "è mezzogiorno meno un quarto";
    if (next === 1) return "è l'una meno un quarto";
    return "sono le " + numberToItalian(next) + " meno un quarto";
  }
  const hourWord = hh === 1 ? "una" : numberToItalian(hh);
  const prefix = hh === 1 ? "è l'" : "sono le ";
  if (mm === 0) return prefix + hourWord;
  if (mm === 15) return prefix + hourWord + " e un quarto";
  if (mm === 30) return prefix + hourWord + " e mezza";
  return prefix + hourWord + (mm === 1 ? " e una" : " e " + numberToItalian(mm));
}

/** Normaliza la respuesta del usuario para comparar (acentos, guiones, espacios) */
export function normalizeItalian(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`]/g, "'")
    .replace(/[^a-z' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Comparación tolerante: acepta "venti tre", "ventitre", "ventitré"… */
export function italianEquals(input: string, target: string): boolean {
  const a = normalizeItalian(input);
  const b = normalizeItalian(target);
  if (!a) return false;
  if (a === b) return true;
  // también sin espacios ni apóstrofos
  return a.replace(/[ ']/g, "") === b.replace(/[ ']/g, "");
}

/** Número aleatorio con niveles de dificultad */
export function randomNumber(level: "facile" | "medio" | "difficile"): number {
  if (level === "facile") return Math.floor(Math.random() * 100);
  if (level === "medio") return Math.floor(Math.random() * 1000);
  return Math.floor(Math.random() * 100000);
}
