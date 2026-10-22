/* ═══ v9.39 · Conjugador alemán (Hochdeutsch) ═══════════════════════
   Pack DE de la interfaz ConjugatorPack (src/lib/lms/conjugators.ts):
   7 tiempos (Präsens, Präteritum, Perfekt, Futur I, Konjunktiv II,
   Plusquamperfekt, Imperativ), 6 pronombres (ich/du/er-sie-es/wir/ihr/
   sie-Sie) y 63 verbos frecuentes A1-B1 con auxiliary haben/sein y
   Partizip II. Motor data-driven: ablaut, Präteritum fuerte y
   Konjunktiv II propio van como datos explícitos; las formas regulares
   se generan con las terminaciones -e/-st/-t/-en/-t/-en. El Perfekt no
   tiene concordancia (sin barras): ich bin gegangen. El wiring en
   conjugators.ts lo hace el orquestador (v9.39).                    */

import type {
  ConjugatorPack, ConjugatorVerb, PackForm, PackTenseResult,
} from "../../conjugators";

/* ── Tipos internos ────────────────────────────────────────────────── */

type Forms6 = [string, string, string, string, string, string];
type Pattern = "schwach" | "stark" | "unregelmäßig";

interface DeVerbData {
  infinitive: string;
  es: string;
  pattern: Pattern;
  aux: "haben" | "sein";
  partizip: string;
  /** Präteritum 3ª persona singular (base de las 6 formas). */
  praeteritum: string;
  /** Override du/ihr del Präteritum cuando la regla general no aplica (aßest/aßt…). */
  praet?: [string, string];
  /** Präsens completo para ablaut e irregulares (bin…, du nimmst…). */
  praesens?: Forms6;
  /** Qué personas del Präsens se pintan en rojo. */
  praesensIrr?: "du-er" | "ich-du-er" | "alle";
  /** Konjunktiv II 3ª sg propia (wäre, ginge…); si falta → würde + Infinitiv (regulares). */
  konj2?: string;
  /** Override du/ihr del Konjunktiv II (solo sein: wärst/wärt). */
  konj2duIhr?: [string, string];
  /** Verbos sin imperativo (modales): las 6 formas son "—". */
  noImp?: boolean;
  /** Imperativo du cuando hay cambio vocálico (nimm, lies…) o e final (heiße). */
  impDu?: string;
  /** Imperativo wir/Sie cuando no sale del infinitivo (sein: seien wir/seien Sie). */
  impWirSie?: [string, string];
  /** Qué formas del imperativo se pintan en rojo. */
  impIrr?: "du" | "alle";
}

const PRONOUNS_DE = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];

/* ── Datos: 63 verbos (14 unregelmäßig · 25 stark · 24 schwach) ────── */

const VERBS: DeVerbData[] = [
  /* unregelmäßig: sein/haber/wissen + modales + mixtas (brachte, dachte…) */
  { infinitive: "sein", es: "ser/estar", pattern: "unregelmäßig", aux: "sein", partizip: "gewesen", praeteritum: "war",
    praesens: ["bin", "bist", "ist", "sind", "seid", "sind"], praesensIrr: "alle",
    konj2: "wäre", konj2duIhr: ["wärst", "wärt"],
    impDu: "sei", impWirSie: ["seien wir", "seien Sie"], impIrr: "alle" },
  { infinitive: "haben", es: "tener", pattern: "unregelmäßig", aux: "haben", partizip: "gehabt", praeteritum: "hatte",
    praesens: ["habe", "hast", "hat", "haben", "habt", "haben"], praesensIrr: "du-er", konj2: "hätte" },
  { infinitive: "werden", es: "llegar a ser/volverse", pattern: "unregelmäßig", aux: "sein", partizip: "geworden", praeteritum: "wurde",
    praesens: ["werde", "wirst", "wird", "werden", "werdet", "werden"], praesensIrr: "du-er", konj2: "würde" },
  { infinitive: "wissen", es: "saber", pattern: "unregelmäßig", aux: "haben", partizip: "gewusst", praeteritum: "wusste",
    praesens: ["weiß", "weißt", "weiß", "wissen", "wisst", "wissen"], praesensIrr: "ich-du-er", konj2: "wüsste",
    impDu: "wisse" },
  { infinitive: "bringen", es: "traer", pattern: "unregelmäßig", aux: "haben", partizip: "gebracht", praeteritum: "brachte", konj2: "brächte" },
  { infinitive: "denken", es: "pensar", pattern: "unregelmäßig", aux: "haben", partizip: "gedacht", praeteritum: "dachte", konj2: "dächte" },
  { infinitive: "kennen", es: "conocer", pattern: "unregelmäßig", aux: "haben", partizip: "gekannt", praeteritum: "kannte", konj2: "kennte" },
  { infinitive: "nennen", es: "nombrar/llamar", pattern: "unregelmäßig", aux: "haben", partizip: "genannt", praeteritum: "nannte", konj2: "nennte" },
  { infinitive: "können", es: "poder", pattern: "unregelmäßig", aux: "haben", partizip: "gekonnt", praeteritum: "konnte",
    praesens: ["kann", "kannst", "kann", "können", "könnt", "können"], praesensIrr: "ich-du-er", konj2: "könnte", noImp: true },
  { infinitive: "müssen", es: "deber/tener que", pattern: "unregelmäßig", aux: "haben", partizip: "gemusst", praeteritum: "musste",
    praesens: ["muss", "musst", "muss", "müssen", "müsst", "müssen"], praesensIrr: "ich-du-er", konj2: "müsste", noImp: true },
  { infinitive: "wollen", es: "querer", pattern: "unregelmäßig", aux: "haben", partizip: "gewollt", praeteritum: "wollte",
    praesens: ["will", "willst", "will", "wollen", "wollt", "wollen"], praesensIrr: "ich-du-er", konj2: "wollte", noImp: true },
  { infinitive: "sollen", es: "deber (mandato)", pattern: "unregelmäßig", aux: "haben", partizip: "gesollt", praeteritum: "sollte",
    praesens: ["soll", "sollst", "soll", "sollen", "sollt", "sollen"], praesensIrr: "ich-du-er", konj2: "sollte", noImp: true },
  { infinitive: "dürfen", es: "poder (permiso)", pattern: "unregelmäßig", aux: "haben", partizip: "gedurft", praeteritum: "durfte",
    praesens: ["darf", "darfst", "darf", "dürfen", "dürft", "dürfen"], praesensIrr: "ich-du-er", konj2: "dürfte", noImp: true },
  { infinitive: "mögen", es: "querer (gustar)", pattern: "unregelmäßig", aux: "haben", partizip: "gemocht", praeteritum: "mochte",
    praesens: ["mag", "magst", "mag", "mögen", "mögt", "mögen"], praesensIrr: "ich-du-er", konj2: "möchte", noImp: true },

  /* stark: ablaut en Präteritum y Partizip II (ging, gingst, gegangen) */
  { infinitive: "gehen", es: "ir (a pie)", pattern: "stark", aux: "sein", partizip: "gegangen", praeteritum: "ging", konj2: "ginge" },
  { infinitive: "kommen", es: "venir", pattern: "stark", aux: "sein", partizip: "gekommen", praeteritum: "kam", konj2: "käme" },
  { infinitive: "sehen", es: "ver", pattern: "stark", aux: "haben", partizip: "gesehen", praeteritum: "sah",
    praesens: ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"], praesensIrr: "du-er", konj2: "sähe",
    impDu: "sieh", impIrr: "du" },
  { infinitive: "geben", es: "dar", pattern: "stark", aux: "haben", partizip: "gegeben", praeteritum: "gab",
    praesens: ["gebe", "gibst", "gibt", "geben", "gebt", "geben"], praesensIrr: "du-er", konj2: "gäbe",
    impDu: "gib", impIrr: "du" },
  { infinitive: "essen", es: "comer", pattern: "stark", aux: "haben", partizip: "gegessen", praeteritum: "aß",
    praet: ["aßest", "aßt"],
    praesens: ["esse", "isst", "isst", "essen", "esst", "essen"], praesensIrr: "du-er", konj2: "äße",
    impDu: "iss", impIrr: "du" },
  { infinitive: "nehmen", es: "tomar/coger", pattern: "stark", aux: "haben", partizip: "genommen", praeteritum: "nahm",
    praesens: ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"], praesensIrr: "du-er", konj2: "nähme",
    impDu: "nimm", impIrr: "du" },
  { infinitive: "sprechen", es: "hablar", pattern: "stark", aux: "haben", partizip: "gesprochen", praeteritum: "sprach",
    praesens: ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"], praesensIrr: "du-er", konj2: "spräche",
    impDu: "sprich", impIrr: "du" },
  { infinitive: "lesen", es: "leer", pattern: "stark", aux: "haben", partizip: "gelesen", praeteritum: "las",
    praet: ["last", "last"],
    praesens: ["lese", "liest", "liest", "lesen", "lest", "lesen"], praesensIrr: "du-er", konj2: "läse",
    impDu: "lies", impIrr: "du" },
  { infinitive: "schreiben", es: "escribir", pattern: "stark", aux: "haben", partizip: "geschrieben", praeteritum: "schrieb", konj2: "schriebe" },
  { infinitive: "fahren", es: "ir (en vehículo)/conducir", pattern: "stark", aux: "sein", partizip: "gefahren", praeteritum: "fuhr",
    praesens: ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"], praesensIrr: "du-er", konj2: "führe",
    impDu: "fahr", impIrr: "du" },
  { infinitive: "fliegen", es: "volar", pattern: "stark", aux: "sein", partizip: "geflogen", praeteritum: "flog", konj2: "flöge" },
  { infinitive: "bleiben", es: "quedarse", pattern: "stark", aux: "sein", partizip: "geblieben", praeteritum: "blieb", konj2: "bliebe" },
  { infinitive: "finden", es: "encontrar", pattern: "stark", aux: "haben", partizip: "gefunden", praeteritum: "fand",
    praet: ["fandest", "fandet"], konj2: "fände" },
  { infinitive: "schlafen", es: "dormir", pattern: "stark", aux: "haben", partizip: "geschlafen", praeteritum: "schlief",
    praesens: ["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"], praesensIrr: "du-er", konj2: "schliefe",
    impDu: "schlaf", impIrr: "du" },
  { infinitive: "fallen", es: "caer", pattern: "stark", aux: "sein", partizip: "gefallen", praeteritum: "fiel",
    praesens: ["falle", "fällst", "fällt", "fallen", "fallt", "fallen"], praesensIrr: "du-er", konj2: "fiele",
    impDu: "fall", impIrr: "du" },
  { infinitive: "tragen", es: "llevar (puesto)", pattern: "stark", aux: "haben", partizip: "getragen", praeteritum: "trug",
    praesens: ["trage", "trägst", "trägt", "tragen", "tragt", "tragen"], praesensIrr: "du-er", konj2: "trüge",
    impDu: "trag", impIrr: "du" },
  { infinitive: "waschen", es: "lavar", pattern: "stark", aux: "haben", partizip: "gewaschen", praeteritum: "wusch",
    praesens: ["wasche", "wäschst", "wäscht", "waschen", "wascht", "waschen"], praesensIrr: "du-er", konj2: "wüsche",
    impDu: "wasch", impIrr: "du" },
  { infinitive: "laufen", es: "correr/andar", pattern: "stark", aux: "sein", partizip: "gelaufen", praeteritum: "lief",
    praesens: ["laufe", "läufst", "läuft", "laufen", "lauft", "laufen"], praesensIrr: "du-er", konj2: "liefe",
    impDu: "lauf", impIrr: "du" },
  { infinitive: "heißen", es: "llamarse", pattern: "stark", aux: "haben", partizip: "geheißen", praeteritum: "hieß",
    praet: ["hießest", "hießt"], konj2: "hieße", impDu: "heiße" },
  { infinitive: "trinken", es: "beber", pattern: "stark", aux: "haben", partizip: "getrunken", praeteritum: "trank", konj2: "tränke" },
  { infinitive: "lassen", es: "dejar", pattern: "stark", aux: "haben", partizip: "gelassen", praeteritum: "ließ",
    praet: ["ließest", "ließt"],
    praesens: ["lasse", "lässt", "lässt", "lassen", "lasst", "lassen"], praesensIrr: "du-er", konj2: "ließe",
    impDu: "lass", impIrr: "du" },
  { infinitive: "bekommen", es: "recibir", pattern: "stark", aux: "haben", partizip: "bekommen", praeteritum: "bekam", konj2: "bekäme" },
  { infinitive: "stehen", es: "estar de pie", pattern: "stark", aux: "haben", partizip: "gestanden", praeteritum: "stand",
    praet: ["standst", "standt"], konj2: "stände" },
  { infinitive: "verstehen", es: "entender", pattern: "stark", aux: "haben", partizip: "verstanden", praeteritum: "verstand",
    praet: ["verstandest", "verstandet"], konj2: "verstände" },
  { infinitive: "treffen", es: "encontrarse con", pattern: "stark", aux: "haben", partizip: "getroffen", praeteritum: "traf",
    praesens: ["treffe", "triffst", "trifft", "treffen", "trefft", "treffen"], praesensIrr: "du-er", konj2: "träfe",
    impDu: "triff", impIrr: "du" },

  /* schwach: regulares en -te y ge- (machte, gemacht) */
  { infinitive: "machen", es: "hacer", pattern: "schwach", aux: "haben", partizip: "gemacht", praeteritum: "machte" },
  { infinitive: "sagen", es: "decir", pattern: "schwach", aux: "haben", partizip: "gesagt", praeteritum: "sagte" },
  { infinitive: "lernen", es: "aprender", pattern: "schwach", aux: "haben", partizip: "gelernt", praeteritum: "lernte" },
  { infinitive: "kaufen", es: "comprar", pattern: "schwach", aux: "haben", partizip: "gekauft", praeteritum: "kaufte" },
  { infinitive: "spielen", es: "jugar/tocar", pattern: "schwach", aux: "haben", partizip: "gespielt", praeteritum: "spielte" },
  { infinitive: "wohnen", es: "vivir (residir)", pattern: "schwach", aux: "haben", partizip: "gewohnt", praeteritum: "wohnte" },
  { infinitive: "arbeiten", es: "trabajar", pattern: "schwach", aux: "haben", partizip: "gearbeitet", praeteritum: "arbeitete" },
  { infinitive: "fragen", es: "preguntar", pattern: "schwach", aux: "haben", partizip: "gefragt", praeteritum: "fragte" },
  { infinitive: "hören", es: "oír/escuchar", pattern: "schwach", aux: "haben", partizip: "gehört", praeteritum: "hörte" },
  { infinitive: "glauben", es: "creer", pattern: "schwach", aux: "haben", partizip: "geglaubt", praeteritum: "glaubte" },
  { infinitive: "brauchen", es: "necesitar", pattern: "schwach", aux: "haben", partizip: "gebraucht", praeteritum: "brauchte" },
  { infinitive: "lieben", es: "amar", pattern: "schwach", aux: "haben", partizip: "geliebt", praeteritum: "liebte" },
  { infinitive: "kochen", es: "cocinar", pattern: "schwach", aux: "haben", partizip: "gekocht", praeteritum: "kochte" },
  { infinitive: "tanzen", es: "bailar", pattern: "schwach", aux: "haben", partizip: "getanzt", praeteritum: "tanzte" },
  { infinitive: "reisen", es: "viajar", pattern: "schwach", aux: "sein", partizip: "gereist", praeteritum: "reiste" },
  { infinitive: "besuchen", es: "visitar", pattern: "schwach", aux: "haben", partizip: "besucht", praeteritum: "besuchte" },
  { infinitive: "warten", es: "esperar", pattern: "schwach", aux: "haben", partizip: "gewartet", praeteritum: "wartete" },
  { infinitive: "zeigen", es: "mostrar", pattern: "schwach", aux: "haben", partizip: "gezeigt", praeteritum: "zeigte" },
  { infinitive: "holen", es: "ir a buscar", pattern: "schwach", aux: "haben", partizip: "geholt", praeteritum: "holte" },
  { infinitive: "sammeln", es: "coleccionar", pattern: "schwach", aux: "haben", partizip: "gesammelt", praeteritum: "sammelte" },
  { infinitive: "erklären", es: "explicar", pattern: "schwach", aux: "haben", partizip: "erklärt", praeteritum: "erklärte" },
  { infinitive: "antworten", es: "responder", pattern: "schwach", aux: "haben", partizip: "geantwortet", praeteritum: "antwortete" },
  { infinitive: "studieren", es: "estudiar (carrera)", pattern: "schwach", aux: "haben", partizip: "studiert", praeteritum: "studierte" },
  { infinitive: "telefonieren", es: "llamar por teléfono", pattern: "schwach", aux: "haben", partizip: "telefoniert", praeteritum: "telefonierte" },
];

/* ── Auxiliares y formas del motor ─────────────────────────────────── */

const AUX_PRÄSENS: Record<"haben" | "sein", Forms6> = {
  haben: ["habe", "hast", "hat", "haben", "habt", "haben"],
  sein: ["bin", "bist", "ist", "sind", "seid", "sind"],
};
const AUX_PRÄTERITUM: Record<"haben" | "sein", Forms6> = {
  haben: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
  sein: ["war", "warst", "war", "waren", "wart", "waren"],
};
const WERDEN_PRÄSENS: Forms6 = ["werde", "wirst", "wird", "werden", "werdet", "werden"];
const WÜRDE: Forms6 = ["würde", "würdest", "würde", "würden", "würdet", "würden"];

function map6(fn: (i: number) => string): Forms6 {
  return [fn(0), fn(1), fn(2), fn(3), fn(4), fn(5)];
}

function bool6(x: boolean): boolean[] {
  return [x, x, x, x, x, x];
}

function toForms(forms: Forms6, irr: boolean[]): PackForm[] {
  return forms.map((form, i) => ({ pronoun: PRONOUNS_DE[i], form, irregular: irr[i] }));
}

function stemOf(infinitive: string): string {
  return infinitive.endsWith("en") ? infinitive.slice(0, -2) : infinitive.slice(0, -1);
}

/* Präsens: -e/-st/-t/-en/-t/-en sobre el raíz; -est/-et tras t/d (du arbeitest),
   solo -t tras s/ß/z (du heißt). El ablaut (du nimmst, er fährt) va como dato. */
function buildPraesens(v: DeVerbData): { forms: Forms6; irr: boolean[] } {
  if (v.praesens) {
    const irr = v.praesensIrr === "alle" ? bool6(true)
      : v.praesensIrr === "ich-du-er" ? [true, true, true, false, false, false]
        : v.praesensIrr === "du-er" ? [false, true, true, false, false, false]
          : bool6(false);
    return { forms: v.praesens, irr };
  }
  const stem = stemOf(v.infinitive);
  const eln = v.infinitive.endsWith("eln");
  const tStem = /[td]$/.test(stem);
  const sStem = /(s|ß|z|x)$/.test(stem);
  const forms: Forms6 = [
    eln ? v.infinitive.slice(0, -3) + "le" : stem + "e", // ich sammle
    tStem ? stem + "est" : sStem ? stem + "t" : stem + "st", // du arbeitest / du heißt
    tStem ? stem + "et" : stem + "t",
    v.infinitive,
    tStem ? stem + "et" : stem + "t",
    v.infinitive,
  ];
  return { forms, irr: bool6(false) };
}

/* Präteritum: base 3ª sg + terminaciones; si la base acaba en -e (machte),
   du = raíz+est e ihr = raíz+et (machtest, machtet); +est en los casos
   dados como dato (du aßest). */
function buildPraeteritum(v: DeVerbData): { forms: Forms6; irr: boolean[] } {
  const p = v.praeteritum;
  const e = p.endsWith("e");
  const du = v.praet?.[0] ?? (e ? p.slice(0, -1) + "est" : p + "st");
  const ihr = v.praet?.[1] ?? (e ? p.slice(0, -1) + "et" : p + "t");
  const plural = e ? p + "n" : p + "en";
  const forms: Forms6 = [p, du, p, plural, ihr, plural];
  return { forms, irr: bool6(v.pattern !== "schwach") };
}

/* Konjunktiv II: propia en irregulares (wäre, hätte, ginge…, du +est / ihr +et
   sobre el raíz sin -e); würde + Infinitiv solo en schwach. */
function buildKonjunktiv2(v: DeVerbData): { forms: Forms6; irr: boolean[] } {
  if (!v.konj2) {
    const forms = map6((i) => `${WÜRDE[i]} ${v.infinitive}`);
    return { forms, irr: bool6(false) };
  }
  const base = v.konj2;
  const stem = base.slice(0, -1); // hätte → hätt, ginge → ging
  const du = v.konj2duIhr?.[0] ?? stem + "est";
  const ihr = v.konj2duIhr?.[1] ?? stem + "et";
  const plural = stem + "en";
  const forms: Forms6 = [base, du, base, plural, ihr, plural];
  return { forms, irr: bool6(true) };
}

/* Imperativ: —/du!/—/wir!/ihr!/Sie!; el du con ablaut (Nimm!, Lies!) va como
   dato; modales sin imperativo. Sie siempre con 3ª persona plural. */
function buildImperativ(v: DeVerbData): { forms: Forms6; irr: boolean[] } {
  if (v.noImp) return { forms: ["—", "—", "—", "—", "—", "—"], irr: bool6(false) };
  const praesensIhr = buildPraesens(v).forms[4];
  const stem = stemOf(v.infinitive);
  const tStem = /[td]$/.test(stem);
  const eln = v.infinitive.endsWith("eln");
  const duBase = v.impDu ?? (eln ? v.infinitive.slice(0, -3) + "le" : tStem ? stem + "e" : stem);
  const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);
  const wirBase = v.impWirSie?.[0] ?? `${v.infinitive} wir`;
  const sieBase = v.impWirSie?.[1] ?? `${v.infinitive} Sie`;
  const forms: Forms6 = ["—", `${cap(duBase)}!`, "—", `${cap(wirBase)}!`, `${cap(praesensIhr)}!`, `${cap(sieBase)}!`];
  const irr = v.impIrr === "alle" ? [false, true, false, true, true, true]
    : v.impIrr === "du" ? [false, true, false, false, false, false]
      : bool6(false);
  return { forms, irr };
}

function conjugateData(v: DeVerbData, tenseId: string): PackTenseResult {
  switch (tenseId) {
    case "praesens": {
      const b = buildPraesens(v);
      return { tense: tenseId, forms: toForms(b.forms, b.irr) };
    }
    case "praeteritum": {
      const b = buildPraeteritum(v);
      return { tense: tenseId, forms: toForms(b.forms, b.irr) };
    }
    case "perfekt": {
      // haben/sein im Präsens + Partizip II; sin concordancia (ich bin gegangen)
      const irr = bool6(v.pattern !== "schwach");
      const forms = map6((i) => `${AUX_PRÄSENS[v.aux][i]} ${v.partizip}`);
      return { tense: tenseId, forms: toForms(forms, irr) };
    }
    case "futur-i": {
      // werden + Infinitiv (ich werde gehen); wirst/wird son irregulares
      const irr = [false, true, true, false, false, false];
      const forms = map6((i) => `${WERDEN_PRÄSENS[i]} ${v.infinitive}`);
      return { tense: tenseId, forms: toForms(forms, irr) };
    }
    case "konjunktiv-ii": {
      const b = buildKonjunktiv2(v);
      return { tense: tenseId, forms: toForms(b.forms, b.irr) };
    }
    case "plusquamperfekt": {
      // hatte/war + Partizip II (ich war gegangen)
      const irr = bool6(v.pattern !== "schwach");
      const forms = map6((i) => `${AUX_PRÄTERITUM[v.aux][i]} ${v.partizip}`);
      return { tense: tenseId, forms: toForms(forms, irr) };
    }
    case "imperativ": {
      const b = buildImperativ(v);
      return { tense: tenseId, forms: toForms(b.forms, b.irr) };
    }
    default:
      return { tense: tenseId, forms: [] };
  }
}

/* ── Pack público ──────────────────────────────────────────────────── */

const BY_INF = new Map<string, DeVerbData>();
for (const v of VERBS) BY_INF.set(v.infinitive, v);

function drittePraesens(v: DeVerbData): string {
  return buildPraesens(v).forms[2];
}

function toPackVerb(v: DeVerbData): ConjugatorVerb {
  return {
    infinitive: v.infinitive,
    es: v.es,
    patternLabel: v.pattern,
    infoEs: `auxiliar ${v.aux} · Partizip II ${v.partizip} · 3ª pers. Präsens ${drittePraesens(v)}`,
  };
}

export const DE_CONJUGATOR: ConjugatorPack = {
  code: "de",
  tenses: [
    { id: "praesens", label: "Präsens", hint: "presente" },
    { id: "praeteritum", label: "Präteritum", hint: "pretérito simple (pasado narrativo)" },
    { id: "perfekt", label: "Perfekt", hint: "pretérito perfecto (haben/sein + Partizip II)" },
    { id: "futur-i", label: "Futur I", hint: "futuro (werden + infinitivo)" },
    { id: "konjunktiv-ii", label: "Konjunktiv II", hint: "condicional cortés (subjuntivo II)" },
    { id: "plusquamperfekt", label: "Plusquamperfekt", hint: "pretérito pluscuamperfecto" },
    { id: "imperativ", label: "Imperativ", hint: "imperativo" },
  ],
  pronouns: PRONOUNS_DE,
  popular: ["sein", "haben", "werden", "gehen", "kommen", "machen", "sagen", "sehen", "nehmen", "sprechen"],
  verbs: VERBS.map(toPackVerb),
  findVerb(infinitive) {
    const v = BY_INF.get(infinitive.trim().toLowerCase());
    return v ? toPackVerb(v) : undefined;
  },
  searchVerbs(query, limit = 8) {
    const q = query.trim().toLowerCase();
    const pool = q
      ? VERBS.filter((v) => v.infinitive.startsWith(q) || v.es.includes(q))
      : VERBS;
    return pool.slice(0, limit).map(toPackVerb);
  },
  conjugate(verb, tenseId) {
    const v = BY_INF.get(verb.infinitive.trim().toLowerCase());
    if (!v) return { tense: tenseId, forms: [] };
    return conjugateData(v, tenseId);
  },
  formalNote(verb, tenseId) {
    const res = this.conjugate(verb, tenseId);
    const sieForm = res.forms[5]?.form ?? "—";
    if (tenseId === "imperativ") {
      return `El imperativo formal se construye con el infinitivo + **Sie**: **${sieForm}** (nunca la forma de du).`;
    }
    if (tenseId === "konjunktiv-ii") {
      return `Para pedir con cortesía usa **Sie** con las formas de la 3ª persona plural: sie/Sie → **${sieForm}**. El Konjunktiv II suaviza peticiones y deseos.`;
    }
    return `Para el registro formal usa **Sie**, que en alemán toma siempre las formas de la 3ª persona plural: sie/Sie → **${sieForm}**. Las formas irregulares se pintan en rojo.`;
  },
};
