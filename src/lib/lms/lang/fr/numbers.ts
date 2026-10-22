/* ── Nombres · conversor números ↔ français de France ────────────────
   Espejo de la API de src/lib/lms/numbers.ts (IT): numberToFrench
   (0–999.999.999 con soixante-dix, soixante et onze, quatre-vingts,
   quatre-vingt-dix; cents plural y mille invariable; vingt/cent
   pierden la s ante mille: quatre-vingt mille, deux cent mille; ante
   million la conservan: quatre-vingts millions; «un million», con
   «de» ante sustantivo: un million d'euros), ordinalToFrench
   (premier/second y el patrón -ième hasta 9999 con las elisiones
   cinquième y neuvième), timeToFrench (il est huit heures et quart /
   et demie / moins le quart / midi / minuit), normalizeFrench y
   frenchEquals (tolerantes a acentos, apóstrofos, guiones y
   espacios). randomNumber NO se re-exporta (queda en numbers.ts).    */

const UNITS = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
  "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];

/** Convierte 0–99: vingt et un · soixante-dix · soixante et onze · quatre-vingts · quatre-vingt-onze */
function under100(n: number): string {
  if (n < 20) return UNITS[n];
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (t <= 6) {
    const base = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante"][t];
    if (u === 0) return base;
    if (u === 1) return `${base} et un`;
    return `${base}-${UNITS[u]}`;
  }
  if (t === 7) {
    if (n === 70) return "soixante-dix";
    if (n === 71) return "soixante et onze";
    return `soixante-${UNITS[u + 10]}`; // soixante-douze … soixante-dix-neuf
  }
  if (t === 8) {
    if (n === 80) return "quatre-vingts"; // s solo cuando termina el número
    return `quatre-vingt-${UNITS[u]}`; // quatre-vingt-un … quatre-vingt-neuf
  }
  if (n === 90) return "quatre-vingt-dix";
  if (n === 91) return "quatre-vingt-onze";
  return `quatre-vingt-${UNITS[u + 10]}`; // quatre-vingt-douze … quatre-vingt-dix-neuf
}

/** Convierte 0–999: cent · deux cents · deux cent un · cent soixante-quinze */
function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (r === 0) return h === 1 ? "cent" : `${UNITS[h]} cents`; // cents solo al final
  const cent = h === 1 ? "cent" : `${UNITS[h]} cent`;
  return `${cent} ${under100(r)}`;
}

/** Convierte un número entero (0 – 999.999.999) a francés de Francia */
export function numberToFrench(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return "";
  if (n < 1000) return under1000(n);
  if (n < 1_000_000) {
    const m = Math.floor(n / 1000);
    const r = n % 1000;
    // mille es invariable y vingt/cent pierden la s ante mille
    const mille = m === 1
      ? "mille"
      : `${under1000(m).replace(/quatre-vingts$/, "quatre-vingt").replace(/cents$/, "cent")} mille`;
    return r === 0 ? mille : `${mille} ${under1000(r)}`;
  }
  const mu = Math.floor(n / 1_000_000);
  const r = n % 1_000_000;
  // million es nombre: admite el s del multiplicador (quatre-vingts millions)
  const millions = mu === 1 ? "un million" : `${under1000(mu)} millions`;
  return r === 0 ? millions : `${millions} ${numberToFrench(r)}`;
}

/* ── Ordinales ────────────────────────────────────────────────────── */

/** Ordinal 1–9999: premier · second · troisième · cinquième · neuvième · vingtième · millième */
export function ordinalToFrench(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 9999) return "";
  if (n === 1) return "premier"; // también première en femenino
  if (n === 2) return "second"; // equivalente: deuxième
  const card = numberToFrench(n)
    .replace(/quatre-vingts$/, "quatre-vingt") // 80 → quatre-vingtième
    .replace(/cents$/, "cent") // 200 → deux centième
    .replace(/e$/, "") // trente → trent-, mille → mill-
    .replace(/cinq$/, "cinqu") // elisión con u: cinquième
    .replace(/neuf$/, "neuv"); // f → v: neuvième
  return `${card}ième`;
}

/* ── La hora (reloj hablado, 24 h + midi/minuit) ──────────────────── */

/** hora en palabras: 0 → minuit · 12 → midi · 1 → une heure · 21 → vingt et une heures */
function hourWord(h: number): string {
  if (h === 0) return "minuit";
  if (h === 12) return "midi";
  if (h === 1) return "une heure";
  return `${numberToFrench(h).replace(/un$/, "une")} heures`; // heures es femenino
}

/** La hora en francés: timeToFrench(8, 15) → "il est huit heures et quart" */
export function timeToFrench(h: number, m: number): string {
  const hh = ((h % 24) + 24) % 24;
  const mm = ((m % 60) + 60) % 60;
  if (hh === 0 && mm === 0) return "il est minuit";
  if (hh === 12 && mm === 0) return "il est midi";
  // moins le quart: se refiere a la hora SIGUIENTE
  if (mm === 45) {
    const next = (hh + 1) % 24;
    if (next === 0) return "il est minuit moins le quart";
    if (next === 12) return "il est midi moins le quart";
    const nh = next > 12 ? next - 12 : next; // 13 → 1 (hablado)
    return `il est ${hourWord(nh)} moins le quart`;
  }
  const base = hourWord(hh);
  if (mm === 0) return `il est ${base}`;
  if (mm === 15) return `il est ${base} et quart`;
  // demi tras midi/minuit, demie tras heures (femenino)
  if (mm === 30) return `il est ${base} et demi${hh === 0 || hh === 12 ? "" : "e"}`;
  // minutos: "un" concuerda en femenino con minutes sobreentendidas
  const mmw = mm === 1 ? "une" : numberToFrench(mm).replace(/un$/, "une");
  return `il est ${base} ${mmw}`;
}

/* ── Normalización y comparación ──────────────────────────────────── */

/** Normaliza la respuesta: minúsculas, sin acentos, apóstrofo recto, guiones como espacios */
export function normalizeFrench(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`]/g, "'")
    .replace(/[^a-z' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Comparación tolerante: acepta "quatre vingt dix", "quatre-vingt-dix", "quatrevingtdix"… */
export function frenchEquals(input: string, target: string): boolean {
  const a = normalizeFrench(input);
  const b = normalizeFrench(target);
  if (!a) return false;
  if (a === b) return true;
  // también sin espacios ni apóstrofos (l'heure = lheure)
  return a.replace(/[ ']/g, "") === b.replace(/[ ']/g, "");
}
