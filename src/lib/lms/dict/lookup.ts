import { DICTIONARY } from "./dictionary";
import type { VocabWord } from "../types";

/* ── v9.14 · Lookup rápido IT→ES para el tooltip de palabras ─────────
   Índice del Dizionario didattico (≈8000 lemas) + heurística de
   lematización contrastiva para hispanohablantes:
   · formas con acento/apóstrofo distintivo: è, può, c'è, po'…
   · forma exacta (normalizada: sin acentos ni artículos)
   · irregulares de altísima frecuencia (essere, avere, fare, andare…)
   · preposizioni articolate: della → di, sullo → su
   · clíticos apocopados: l'aria → aria, dell'acqua → acqua
   · participios y gerundios: respirato → respirare
   · plurales de sustantivo/adjetivo: respiri → respiro
   · presente/imperfetto regular: respiriamo → respirare
   · adverbios en -mente: lentamente → lento

   Es una heurística didáctica (no un lematizador completo): ante
   ambigüedad gana la primera coincidencia por orden de prioridad. */

/* ── índice perezoso ──────────────────────────────────────────────── */
let IDX: Map<string, VocabWord> | null = null;

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\s+/i, "")
    .replace(/['’\s]/g, "")
    .trim();
}

function index(): Map<string, VocabWord> {
  if (IDX) return IDX;
  IDX = new Map<string, VocabWord>();
  for (const w of DICTIONARY) {
    const key = norm(w.it);
    if (!IDX.has(key)) IDX.set(key, w);
  }
  return IDX;
}

function find(form: string): VocabWord | undefined {
  const key = norm(form);
  const hit = index().get(key);
  if (hit) return hit;
  const sup = SUPPLEMENT[key];
  return sup ? synthEntry(key, sup) : undefined;
}

function byLemma(lemma: string): VocabWord | undefined {
  return find(lemma);
}

/* ── pre-check: formas cuya normalización borraría información ───────
   «è» se volvería «e» (conjunción) y «c'era» se volvería «cera».      */
const PRECHECK: Record<string, string> = {
  "è": "essere", "é": "essere",
  "c'è": "esserci", "c’è": "esserci",
  "c'era": "esserci", "c’era": "esserci",
  "c'erano": "esserci", "c’erano": "esserci",
  "c'è stata": "esserci",
  "po'": "poco", "po’": "poco",
  "com'è": "come", "com’è": "come",
  "cos'è": "cosa", "cos’è": "cosa",
  "dov'è": "dove", "dov’è": "dove",
  "l'è": "essere",
};

/* ── preposiciones articolate ─────────────────────────────────────── */
const PREP_ARTICOLATE: Record<string, string> = {
  del: "di", dello: "di", della: "di", dei: "di", degli: "di", delle: "di",
  al: "a", allo: "a", alla: "a", ai: "a", agli: "a", alle: "a",
  dal: "da", dallo: "da", dalla: "da", dai: "da", dagli: "da", dalle: "da",
  nel: "in", nello: "in", nella: "in", nei: "in", negli: "in", nelle: "in",
  sul: "su", sullo: "su", sulla: "su", sui: "su", sugli: "su", sulle: "su",
  col: "con", coi: "con",
};

/* prefijos apocopados que van pegados al nombre: dell'acqua… */
const CLITIC_PREFIXES = ["l'", "l’", "un'", "un’", "bell'", "bell’", "quell'", "quell’", "quest'", "quest’", "dell'", "dell’", "nell'", "nell’", "all'", "all’", "sull'", "sull’", "dall'", "dall’", "d'", "d’"];

/* ── irregulares de máxima frecuencia (claves NORMALIZADAS) ────────── */
const IRREGULAR: Record<string, string> = {
  // essere
  sono: "essere", sei: "essere", siamo: "essere", siate: "essere",
  era: "essere", eri: "essere", eravamo: "essere", eravate: "essere",
  erano: "essere", fui: "essere", fosti: "essere", fu: "essere",
  fummo: "essere", foste: "essere", furono: "essere", fossi: "essere",
  fosse: "essere", fossimo: "essere", fossero: "essere",
  saro: "essere", sarai: "essere", sara: "essere", saremo: "essere",
  sarete: "essere", saranno: "essere", sarei: "essere", saresti: "essere",
  sarebbe: "essere", saremmo: "essere", sareste: "essere",
  sarebbero: "essere", essendo: "essere", sia: "essere", siano: "essere",
  // avere
  ho: "avere", hai: "avere", ha: "avere", abbiamo: "avere",
  avete: "avere", hanno: "avere", avevo: "avere", avevi: "avere",
  aveva: "avere", avevamo: "avere", avevate: "avere", avevano: "avere",
  ebbi: "avere", avemmo: "avere", aveste: "avere", ebbero: "avere",
  avro: "avere", avrai: "avere", avra: "avere", avremo: "avere",
  avrete: "avere", avranno: "avere", avrei: "avere", avresti: "avere",
  avrebbe: "avere", avremmo: "avere", avreste: "avere",
  avrebbero: "avere", avuto: "avere", avuta: "avere", avuti: "avere",
  avute: "avere", avendo: "avere", abbia: "avere", abbiano: "avere",
  avessi: "avere", avesse: "avere", avessimo: "avere", avessero: "avere",
  // fare
  faccio: "fare", fai: "fare", fa: "fare", facciamo: "fare", fate: "fare",
  fanno: "fare", facevo: "fare", facevi: "fare", faceva: "fare",
  facevamo: "fare", facevate: "fare", facevano: "fare", feci: "fare",
  facemmo: "fare", faceste: "fare", fecero: "fare", faro: "fare",
  farai: "fare", fara: "fare", faremo: "fare", farete: "fare",
  faranno: "fare", farei: "fare", faresti: "fare", farebbe: "fare",
  faremmo: "fare", fareste: "fare", farebbero: "fare", fatto: "fare",
  fatta: "fare", fatti: "fare", fatte: "fare", facendo: "fare",
  faccia: "fare", facciano: "fare", facessi: "fare",
  facesse: "fare", facessimo: "fare", facessero: "fare",
  // andare
  vado: "andare", vai: "andare", va: "andare", andiamo: "andare",
  andate: "andare", vanno: "andare", andavo: "andare", andavi: "andare",
  andava: "andare", andavamo: "andare", andavate: "andare",
  andavano: "andare", andai: "andare", andammo: "andare",
  andaste: "andare", andarono: "andare", andro: "andare", andrai: "andare",
  andra: "andare", andremo: "andare", andrete: "andare",
  andranno: "andare", andrei: "andare", andresti: "andare",
  andrebbe: "andare", andremmo: "andare", andreste: "andare",
  andrebbero: "andare", andato: "andare", andata: "andare",
  andati: "andare", andando: "andare", vada: "andare", vadano: "andare",
  // stare
  sto: "stare", stai: "stare", sta: "stare", stiamo: "stare", state: "stare",
  stanno: "stare", stavo: "stare", stavi: "stare", stava: "stare",
  stavamo: "stare", stavate: "stare", stavano: "stare", stetti: "stare",
  steste: "stare", stettero: "stare", staro: "stare", starai: "stare",
  stara: "stare", staremo: "stare", starete: "stare", staranno: "stare",
  staresti: "stare", starebbe: "stare", staremmo: "stare",
  stando: "stare", stia: "stare", stiano: "stare", stessi: "stesso",
  stesse: "stesso", stessimo: "stesso", stessero: "stesso", stesso: "stesso",
  // dare
  do: "dare", dai: "dare", diamo: "dare", diedi: "dare",
  diede: "dare", demmo: "dare", deste: "dare", diedero: "dare",
  dero: "dare", daro: "dare", darai: "dare", dara: "dare",
  daremo: "dare", darete: "dare", daranno: "dare", darei: "dare",
  daresti: "dare", darebbe: "dare", dando: "dare", dia: "dare",
  diano: "dare", dessi: "dare", desse: "dare", dessimo: "dare",
  dessero: "dare",
  // dire
  dico: "dire", dici: "dire", dice: "dire", diciamo: "dire", dite: "dire",
  dicono: "dire", disse: "dire", dicevo: "dire", dicevi: "dire", diceva: "dire",
  dicevamo: "dire", dicevate: "dire", dicevano: "dire", dissi: "dire",
  dicemmo: "dire", diceste: "dire", dissero: "dire", diro: "dire",
  dirai: "dire", dira: "dire", diremo: "dire", direte: "dire",
  diranno: "dire", direi: "dire", diresti: "dire", direbbe: "dire",
  diremmo: "dire", direste: "dire", direbbero: "dire", detto: "dire",
  detta: "dire", dette: "dire", dicendo: "dire",
  dica: "dire", dicano: "dire", dicessi: "dire", dicesse: "dire",
  dicessimo: "dire", dicessero: "dire",
  // venire
  vengo: "venire", vieni: "venire", viene: "venire", veniamo: "venire",
  venite: "venire", vengono: "venire", venivo: "venire", venivi: "venire",
  veniva: "venire", venivamo: "venire", venivate: "venire",
  venivano: "venire", venni: "venire", venne: "venire", vennero: "venire",
  verro: "venire", verrai: "venire", verra: "venire", verremo: "venire",
  verrete: "venire", verranno: "venire", verrei: "venire",
  verresti: "venire", verrebbe: "venire", verremmo: "venire",
  verreste: "venire", verrebbero: "venire", venuto: "venire",
  venuta: "venire", venuti: "venire", venute: "venire", venendo: "venire",
  venga: "venire", vengano: "venire", venissi: "venire", venisse: "venire",
  venissimo: "venire", venissero: "venire",
  // potere
  posso: "potere", puoi: "potere", puo: "potere", possiamo: "potere",
  potete: "potere", possono: "potere", potevo: "potere", potevi: "potere",
  poteva: "potere", potevamo: "potere", potevate: "potere",
  potevano: "potere", potei: "potere", potemmo: "potere",
  poteste: "potere", poterono: "potere", potro: "potere", potrai: "potere",
  potra: "potere", potremo: "potere", potrete: "potere",
  potranno: "potere", potrei: "potere", potresti: "potere",
  potrebbe: "potere", potremmo: "potere", potreste: "potere",
  potrebbero: "potere", potuto: "potere", potuta: "potere",
  potuti: "potere", potute: "potere", potendo: "potere", possa: "potere",
  possano: "potere", potessi: "potere", potesse: "potere",
  potessimo: "potere", potessero: "potere",
  // volere
  voglio: "volere", vuoi: "volere", vuole: "volere", vogliamo: "volere",
  volete: "volere", vogliono: "volere", volevo: "volere", volevi: "volere",
  voleva: "volere", volevamo: "volere", volevate: "volere",
  volevano: "volere", volli: "volere", volemmo: "volere",
  voleste: "volere", vollero: "volere", vorro: "volere", vorrai: "volere",
  vorra: "volere", vorremo: "volere", vorrete: "volere",
  vorranno: "volere", vorrei: "volere", vorresti: "volere",
  vorrebbe: "volere", vorremmo: "volere", vorreste: "volere",
  vorrebbero: "volere", voluto: "volere", voluta: "volere",
  voluti: "volere", volute: "volere", volendo: "volere", voglia: "volere",
  vogliano: "volere", volessi: "volere", volesse: "volere",
  volessimo: "volere", volessero: "volere",
  // dovere
  devo: "dovere", devi: "dovere", deve: "dovere", dobbiamo: "dovere",
  dovete: "dovere", devono: "dovere", dovevo: "dovere", dovevi: "dovere",
  doveva: "dovere", dovevamo: "dovere", dovevate: "dovere",
  dovevano: "dovere", dovettero: "dovere", dovetti: "dovere",
  dovemmo: "dovere", doveste: "dovere", dovra: "dovere", dovrai: "dovere",
  dovremo: "dovere", dovrete: "dovere", dovranno: "dovere",
  dovrei: "dovere", dovresti: "dovere", dovrebbe: "dovere",
  dovremmo: "dovere", dovreste: "dovere", dovrebbero: "dovere",
  dovuto: "dovere", dovuta: "dovere", dovuti: "dovere", dovute: "dovere",
  dovendo: "dovere", debba: "dovere", debbano: "dovere", deva: "dovere",
  // sapere
  so: "sapere", sai: "sapere", sa: "sapere", sappiamo: "sapere",
  sapete: "sapere", sanno: "sapere", sapevo: "sapere", sapevi: "sapere",
  sapeva: "sapere", sapevamo: "sapere", sapevate: "sapere",
  sapevano: "sapere", seppi: "sapere", seppero: "sapere",
  sapro: "sapere", saprai: "sapere", sapra: "sapere",
  sapremo: "sapere", saprete: "sapere", sapranno: "sapere",
  saprei: "sapere", sapresti: "sapere", saprebbe: "sapere",
  sapremmo: "sapere", sapreste: "sapere", saprebbero: "sapere",
  saputo: "sapere", saputa: "sapere", saputi: "sapere", sapute: "sapere",
  sapendo: "sapere", sappia: "sapere", sappiano: "sapere",
  sapessi: "sapere", sapesse: "sapere", sapessimo: "sapere",
  sapessero: "sapere",
  // bere · vedere · uscire · prendere
  bevo: "bere", bevi: "bere", beve: "bere", beviamo: "bere",
  bevete: "bere", bevono: "bere", bevevo: "bere", beveva: "bere",
  bevvi: "bere", bevemmo: "bere", beveste: "bere", bevvero: "bere",
  bevuto: "bere", bevuta: "bere", bevuti: "bere", bevute: "bere",
  bevendo: "bere",
  vedo: "vedere", vedi: "vedere", vede: "vedere", vediamo: "vedere",
  vedete: "vedere", vedono: "vedere", vedevo: "vedere", vedevi: "vedere",
  vedeva: "vedere", vedevamo: "vedere", vedevate: "vedere",
  vedevano: "vedere", vidi: "vedere", vedemmo: "vedere", vedeste: "vedere",
  videro: "vedere", vedro: "vedere", vedrai: "vedere", vedra: "vedere",
  vedremo: "vedere", vedrete: "vedere", vedranno: "vedere",
  vedrei: "vedere", vedresti: "vedere", vedrebbe: "vedere",
  visto: "vedere", vista: "vedere", visti: "vedere", viste: "vedere",
  vedendo: "vedere", veda: "vedere", vedano: "vedere", vedessi: "vedere",
  vedesse: "vedere", vedessero: "vedere",
  esco: "uscire", esci: "uscire", esce: "uscire", usciamo: "uscire",
  uscite: "uscire", escono: "uscire", uscivo: "uscire", uscivi: "uscire",
  usciva: "uscire", uscivamo: "uscire", uscivate: "uscire",
  uscivano: "uscire", uscii: "uscire", usci: "uscire", uscimmo: "uscire",
  usciste: "uscire", uscirono: "uscire", uscito: "uscire",
  uscita: "uscire", usciti: "uscire", uscendo: "uscire", esca: "uscire",
  escano: "uscire", uscissi: "uscire", uscisse: "uscire",
  uscissero: "uscire", uomini: "uomo",
  // coda · passato remoto frecuente y otros
  rispose: "rispondere", risposi: "rispondere", risposero: "rispondere",
  chiese: "chiedere", chiesi: "chiedere", chiesero: "chiedere",
  trovo: "trovare", trovi: "trovare", trova: "trovare", trovarono: "trovare",
  // ronda 5 · participios irregulares sueltos
  rotto: "rompere", rotti: "rompere", rotta: "rompere", rotte: "rompere",
  rompo: "rompere", rompi: "rompere", rompe: "rompere", rompono: "rompere",
  rompeva: "rompere", rompevano: "rompere",
  sciolto: "sciogliere", sciolta: "sciogliere", sciolti: "sciogliere",
  sciolte: "sciogliere", scioglie: "sciogliere", sciolgo: "sciogliere",
  sciogli: "sciogliere", sciolgono: "sciogliere",
  // ronda 4 · tenere, contenere y otras
  tengo: "tenere", tieni: "tenere", tiene: "tenere", teniamo: "tenere",
  tengono: "tenere", teneva: "tenere", tenevano: "tenere", tenne: "tenere",
  tenuto: "tenere", tenuta: "tenere", tenuti: "tenere", tenute: "tenere",
  tenga: "tenere", tengano: "tenere", tenendo: "tenere",
  contiene: "contenere", contengono: "contenere", conteneva: "contenere",
  contenevano: "contenere", contenuto: "contenere", contenuta: "contenere",
  contenuti: "contenere", contengono_: "contenere",
  coltivo: "coltivare", coltivi: "coltivare", coltiva: "coltivare",
  coltiviamo: "coltivare", coltivano: "coltivare", coltivato: "coltivare",
  coltivava: "coltivare", coltivavano: "coltivare",
  riempio: "riempire", riempi: "riempire", riempie: "riempire",
  riempiamo: "riempire", riempiono: "riempire", riempiva: "riempire",
  riempivano: "riempire", riempito: "riempire", riempita: "riempire",
  riempiti: "riempire", riempite: "riempire",
  // ronda 3 · más formas detectadas
  nato: "nascere", nata: "nascere", nati: "nascere", nate: "nascere",
  nasce: "nascere", nasci: "nascere", nasco: "nascere", nasciamo: "nascere",
  nasceva: "nascere", nascevano: "nascere", nato_: "nascere",
  vale: "valere", vali: "valere", valgo: "valere", valgono: "valere",
  valga: "valere", valeva: "valere", valevano: "valere", valso: "valere",
  smesso: "smettere", smetto: "smettere", smetti: "smettere", smette: "smettere",
  smettono: "smettere", smetteva: "smettere", smettevano: "smettere",
  // ronda 2 · formas detectadas sin resolución
  ero: "essere",
  chiesto: "chiedere", chiesta: "chiedere", chiesti: "chiedere", chieste: "chiedere",
  perso: "perdere", persa: "perdere", persi: "perdere", perse: "perdere",
  aperto: "aprire", aperta: "aprire", aperti: "aprire", aperte: "aprire",
  scritto: "scrivere", scritta: "scrivere", scritti: "scrivere", scritte: "scrivere",
  rimasto: "rimanere", rimasta: "rimanere", rimasti: "rimanere", rimaste: "rimanere",
  muoio: "morire", muori: "morire", muore: "morire", muoiono: "morire",
  moriva: "morire", morivano: "morire", moriro: "morire", morira: "morire",
  moriranno: "morire", morimmo: "morire", moriste: "morire", morirono: "morire",
  siedo: "sedersi", siedi: "sedersi", siede: "sedersi", siedono: "sedersi",
  sedeva: "sedersi", sedevano: "sedersi", siediti: "sedersi", sedetevi: "sedersi",
  seduto: "sedersi", seduta: "sedersi", seduti: "sedersi", sedute: "sedersi",
  produco: "produrre", produce: "produrre", produciamo: "produrre",
  producono: "produrre", produceva: "produrre", prodotto: "produrre",
  prodotti: "produrre",
  prendo: "prendere", prendi: "prendere", prende: "prendere",
  prendiamo: "prendere", prendete: "prendere", prendono: "prendere",
  prendevo: "prendere", prendevi: "prendere", prendeva: "prendere",
  prendevamo: "prendere", prendevate: "prendere", prendevano: "prendere",
  presi: "prendere", prese: "prendere", presero: "prendere",
  prendemmo: "prendere", prendeste: "prendere",
  prendero: "prendere", prenderai: "prendere", prendera: "prendere",
  preso: "prendere", presa: "prendere",
  prendendo: "prendere", prenda: "prendere",
  prendano: "prendere", prendessi: "prendere", prendesse: "prendere",
  prendessero: "prendere",
  // dare/participi ambiguos resueltos arriba
};

/* ── suplemento v9.14 · formas y lemas ausentes del Dizionario ───────
   Palabras funcionales y contenido de altísima frecuencia que no
   existen como lema en los packs (detectadas midiendo la cobertura
   sobre las 198 letture tematiche y la biblioteca).              */
type SupKind = "fw" | "sup";

const SUPPLEMENT: Record<string, { it: string; es: string; type: VocabWord["type"]; kind: SupKind }> = {
  /* claves NORMALIZADAS (sin acentos ni apóstrofos) + forma de visualización */
  // artículos y determinantes
  una: { it: "una", es: "una (fem. de «uno»)", type: "articolo", kind: "fw" },
  le: { it: "le", es: "las / les (artículo o pronombre fem. pl.)", type: "articolo", kind: "fw" },
  lo: { it: "lo", es: "el (artículo) / lo (pronombre neutro)", type: "articolo", kind: "fw" },
  il: { it: "il", es: "el (artículo masculino)", type: "articolo", kind: "fw" },
  gli: { it: "gli", es: "los / a ellos (artículo o pronombre pl.)", type: "articolo", kind: "fw" },
  un: { it: "un", es: "un", type: "articolo", kind: "fw" },
  quel: { it: "quel", es: "ese / aquel (masc.)", type: "aggettivo", kind: "fw" },
  quello: { it: "quello", es: "ese / aquel (masc.)", type: "aggettivo", kind: "fw" },
  quella: { it: "quella", es: "esa / aquella (fem.)", type: "aggettivo", kind: "fw" },
  quei: { it: "quei", es: "esos (masc. pl.)", type: "aggettivo", kind: "fw" },
  quegli: { it: "quegli", es: "esos (masc. pl.)", type: "aggettivo", kind: "fw" },
  quelle: { it: "quelle", es: "esas (fem. pl.)", type: "aggettivo", kind: "fw" },
  // pronombres personales, reflexivos y posesivos
  mi: { it: "mi", es: "me", type: "pronome", kind: "fw" },
  ti: { it: "ti", es: "te / a ti", type: "pronome", kind: "fw" },
  ci: { it: "ci", es: "nos / allí", type: "pronome", kind: "fw" },
  vi: { it: "vi", es: "os / a vosotros", type: "pronome", kind: "fw" },
  me: { it: "me", es: "me / mí", type: "pronome", kind: "fw" },
  te: { it: "te", es: "ti / a ti", type: "pronome", kind: "fw" },
  lui: { it: "lui", es: "él", type: "pronome", kind: "fw" },
  lei: { it: "lei", es: "ella / usted", type: "pronome", kind: "fw" },
  noi: { it: "noi", es: "nosotros", type: "pronome", kind: "fw" },
  voi: { it: "voi", es: "vosotros / ustedes", type: "pronome", kind: "fw" },
  loro: { it: "loro", es: "ellos / su (posesivo)", type: "pronome", kind: "fw" },
  si: { it: "si / sì", es: "se (partícula reflexiva/impersonal); «sì» = sí", type: "pronome", kind: "fw" },
  ne: { it: "ne", es: "ne / de ello (partícula)", type: "pronome", kind: "fw" },
  suo: { it: "suo", es: "su (de él)", type: "aggettivo", kind: "fw" },
  sua: { it: "sua", es: "su (de ella)", type: "aggettivo", kind: "fw" },
  suoi: { it: "suoi", es: "sus (de él)", type: "aggettivo", kind: "fw" },
  sue: { it: "sue", es: "sus (de ella)", type: "aggettivo", kind: "fw" },
  mio: { it: "mio", es: "mi (mío)", type: "aggettivo", kind: "fw" },
  mia: { it: "mia", es: "mi (mía)", type: "aggettivo", kind: "fw" },
  miei: { it: "miei", es: "mis (míos)", type: "aggettivo", kind: "fw" },
  mie: { it: "mie", es: "mis (mías)", type: "aggettivo", kind: "fw" },
  tuo: { it: "tuo", es: "tu (tuyo)", type: "aggettivo", kind: "fw" },
  tua: { it: "tua", es: "tu (tuya)", type: "aggettivo", kind: "fw" },
  tuoi: { it: "tuoi", es: "tus (tuyos)", type: "aggettivo", kind: "fw" },
  tue: { it: "tue", es: "tus (tuyas)", type: "aggettivo", kind: "fw" },
  nostro: { it: "nostro", es: "nuestro", type: "aggettivo", kind: "fw" },
  nostra: { it: "nostra", es: "nuestra", type: "aggettivo", kind: "fw" },
  nostri: { it: "nostri", es: "nuestros", type: "aggettivo", kind: "fw" },
  nostre: { it: "nostre", es: "nuestras", type: "aggettivo", kind: "fw" },
  vostro: { it: "vostro", es: "vuestro", type: "aggettivo", kind: "fw" },
  vostra: { it: "vostra", es: "vuestra", type: "aggettivo", kind: "fw" },
  vostri: { it: "vostri", es: "vuestros", type: "aggettivo", kind: "fw" },
  vostre: { it: "vostre", es: "vuestras", type: "aggettivo", kind: "fw" },
  cui: { it: "cui", es: "que / el cual (relativo)", type: "pronome", kind: "fw" },
  cio: { it: "ciò", es: "ello / eso", type: "pronome", kind: "fw" },
  // adverbios, conectores y preposiciones
  piu: { it: "più", es: "más", type: "avverbio", kind: "fw" },
  meno: { it: "meno", es: "menos", type: "avverbio", kind: "fw" },
  ogni: { it: "ogni", es: "cada", type: "aggettivo", kind: "fw" },
  tra: { it: "tra", es: "entre (tiempo o espacio)", type: "preposizione", kind: "fw" },
  fra: { it: "fra", es: "entre", type: "preposizione", kind: "fw" },
  pero: { it: "però", es: "pero / sin embargo", type: "congiunzione", kind: "fw" },
  no: { it: "no", es: "no", type: "avverbio", kind: "fw" },
  ecco: { it: "ecco", es: "he aquí / aquí está", type: "avverbio", kind: "fw" },
  ora: { it: "ora", es: "ahora", type: "avverbio", kind: "fw" },
  ore: { it: "ore", es: "horas", type: "sostantivo", kind: "fw" },
  po: { it: "po'", es: "poco («un po'» = un poco)", type: "avverbio", kind: "fw" },
  // contenido de altísima frecuencia ausente de los packs
  corpo: { it: "corpo", es: "cuerpo", type: "sostantivo", kind: "sup" },
  corpi: { it: "corpi", es: "cuerpos", type: "sostantivo", kind: "sup" },
  anima: { it: "anima", es: "alma", type: "sostantivo", kind: "sup" },
  anime: { it: "anime", es: "almas", type: "sostantivo", kind: "sup" },
  attenzione: { it: "attenzione", es: "atención", type: "sostantivo", kind: "sup" },
  presente: { it: "presente", es: "presente", type: "sostantivo", kind: "sup" },
  passato: { it: "passato", es: "pasado", type: "sostantivo", kind: "sup" },
  futuro: { it: "futuro", es: "futuro", type: "sostantivo", kind: "sup" },
  famiglia: { it: "famiglia", es: "familia", type: "sostantivo", kind: "sup" },
  famiglie: { it: "famiglie", es: "familias", type: "sostantivo", kind: "sup" },
  preghiera: { it: "preghiera", es: "oración, rezo", type: "sostantivo", kind: "sup" },
  bisogno: { it: "bisogno", es: "necesidad («avere bisogno» = necesitar)", type: "sostantivo", kind: "sup" },
  rumore: { it: "rumore", es: "ruido", type: "sostantivo", kind: "sup" },
  rumori: { it: "rumori", es: "ruidos", type: "sostantivo", kind: "sup" },
  tecnica: { it: "tecnica", es: "técnica", type: "sostantivo", kind: "sup" },
  sera: { it: "sera", es: "tarde (del día)", type: "sostantivo", kind: "sup" },
  mattina: { it: "mattina", es: "mañana (del día)", type: "sostantivo", kind: "sup" },
  segreto: { it: "segreto", es: "secreto", type: "sostantivo", kind: "sup" },
  passi: { it: "passi", es: "pasos", type: "sostantivo", kind: "sup" },
  occhio: { it: "occhio", es: "ojo", type: "sostantivo", kind: "sup" },
  occhi: { it: "occhi", es: "ojos", type: "sostantivo", kind: "sup" },
  storia: { it: "storia", es: "historia", type: "sostantivo", kind: "sup" },
  italiano: { it: "italiano", es: "italiano", type: "aggettivo", kind: "sup" },
  italiana: { it: "italiana", es: "italiana", type: "aggettivo", kind: "sup" },
  italiani: { it: "italiani", es: "italianos", type: "aggettivo", kind: "sup" },
  italiane: { it: "italiane", es: "italianas", type: "aggettivo", kind: "sup" },
  commedia: { it: "commedia", es: "comedia", type: "sostantivo", kind: "sup" },
  euro: { it: "euro", es: "euro", type: "sostantivo", kind: "sup" },
  pochi: { it: "pochi", es: "pocos", type: "aggettivo", kind: "sup" },
  poche: { it: "poche", es: "pocas", type: "aggettivo", kind: "sup" },
  serata: { it: "serata", es: "velada, tarde-noche", type: "sostantivo", kind: "sup" },
  giornata: { it: "giornata", es: "jornada, día", type: "sostantivo", kind: "sup" },
  // nombres propios frecuentes en las letture
  italia: { it: "Italia", es: "Italia", type: "sostantivo", kind: "sup" },
  roma: { it: "Roma", es: "Roma", type: "sostantivo", kind: "sup" },
  milano: { it: "Milano", es: "Milán", type: "sostantivo", kind: "sup" },
  firenze: { it: "Firenze", es: "Florencia", type: "sostantivo", kind: "sup" },
  venezia: { it: "Venezia", es: "Venecia", type: "sostantivo", kind: "sup" },
  napoli: { it: "Napoli", es: "Nápoles", type: "sostantivo", kind: "sup" },
  torino: { it: "Torino", es: "Turín", type: "sostantivo", kind: "sup" },
  sicilia: { it: "Sicilia", es: "Sicilia", type: "sostantivo", kind: "sup" },
  toscana: { it: "Toscana", es: "Toscana", type: "sostantivo", kind: "sup" },
  // ── ronda 2 · infinitivos y lemas detectados midiendo cobertura ──
  vedere: { it: "vedere", es: "ver", type: "verbo", kind: "sup" },
  sentire: { it: "sentire", es: "sentir, oír", type: "verbo", kind: "sup" },
  sentirsi: { it: "sentirsi", es: "sentirse", type: "verbo", kind: "sup" },
  esistere: { it: "esistere", es: "existir", type: "verbo", kind: "sup" },
  sorridere: { it: "sorridere", es: "sonreír", type: "verbo", kind: "sup" },
  sedere: { it: "sedere", es: "estar sentado, sentarse", type: "verbo", kind: "sup" },
  sedersi: { it: "sedersi", es: "sentarse", type: "verbo", kind: "sup" },
  usare: { it: "usare", es: "usar, utilizar", type: "verbo", kind: "sup" },
  ritornare: { it: "ritornare", es: "regresar, volver", type: "verbo", kind: "sup" },
  iniziare: { it: "iniziare", es: "empezar, iniciar", type: "verbo", kind: "sup" },
  rilassarsi: { it: "rilassarsi", es: "relajarse", type: "verbo", kind: "sup" },
  concentrarsi: { it: "concentrarsi", es: "concentrarse", type: "verbo", kind: "sup" },
  sdraiarsi: { it: "sdraiarsi", es: "tumbarse, echarse", type: "verbo", kind: "sup" },
  distendere: { it: "distendere", es: "distender, estirar", type: "verbo", kind: "sup" },
  sciogliere: { it: "sciogliere", es: "soltar, deshacer (una tensión)", type: "verbo", kind: "sup" },
  sciogliersi: { it: "sciogliersi", es: "soltarse, liberarse", type: "verbo", kind: "sup" },
  praticare: { it: "praticare", es: "practicar", type: "verbo", kind: "sup" },
  produrre: { it: "produrre", es: "producir", type: "verbo", kind: "sup" },
  attesa: { it: "attesa", es: "espera", type: "sostantivo", kind: "sup" },
  mezzora: { it: "mezz'ora", es: "media hora", type: "sostantivo", kind: "sup" },
  lentezza: { it: "lentezza", es: "lentitud", type: "sostantivo", kind: "sup" },
  quiete: { it: "quiete", es: "quietud, calma", type: "sostantivo", kind: "sup" },
  cibo: { it: "cibo", es: "comida", type: "sostantivo", kind: "sup" },
  spazio: { it: "spazio", es: "espacio", type: "sostantivo", kind: "sup" },
  metodo: { it: "metodo", es: "método", type: "sostantivo", kind: "sup" },
  rituale: { it: "rituale", es: "ritual", type: "sostantivo", kind: "sup" },
  radice: { it: "radice", es: "raíz", type: "sostantivo", kind: "sup" },
  relax: { it: "relax", es: "relajación", type: "sostantivo", kind: "sup" },
  strumento: { it: "strumento", es: "instrumento, herramienta", type: "sostantivo", kind: "sup" },
  interiore: { it: "interiore", es: "interior", type: "aggettivo", kind: "sup" },
  perfetto: { it: "perfetto", es: "perfecto", type: "aggettivo", kind: "sup" },
  pagina: { it: "pagina", es: "página", type: "sostantivo", kind: "sup" },
  lettura: { it: "lettura", es: "lectura", type: "sostantivo", kind: "sup" },
  nessuno: { it: "nessuno", es: "nadie / ningún", type: "pronome", kind: "fw" },
  nessuna: { it: "nessuna", es: "ninguna / nadie (fem.)", type: "pronome", kind: "fw" },
  nessun: { it: "nessun", es: "ningún", type: "aggettivo", kind: "fw" },
  alcuni: { it: "alcuni", es: "algunos", type: "pronome", kind: "fw" },
  alcuno: { it: "alcuno", es: "alguno", type: "pronome", kind: "fw" },
  meglio: { it: "meglio", es: "mejor", type: "avverbio", kind: "fw" },
  rivoluzione: { it: "rivoluzione", es: "revolución", type: "sostantivo", kind: "sup" },
  nazionale: { it: "nazionale", es: "nacional", type: "aggettivo", kind: "sup" },
  dante: { it: "Dante", es: "Dante", type: "sostantivo", kind: "sup" },
  unito: { it: "unito", es: "unido", type: "aggettivo", kind: "sup" },
  pianeta: { it: "pianeta", es: "planeta", type: "sostantivo", kind: "sup" },
  sud: { it: "sud", es: "sur", type: "sostantivo", kind: "sup" },
  nord: { it: "nord", es: "norte", type: "sostantivo", kind: "sup" },
  contro: { it: "contro", es: "contra", type: "preposizione", kind: "fw" },
  re: { it: "re", es: "rey", type: "sostantivo", kind: "sup" },
  repubblica: { it: "repubblica", es: "república", type: "sostantivo", kind: "sup" },
  cinema: { it: "cinema", es: "cine", type: "sostantivo", kind: "sup" },
  nove: { it: "nove", es: "nueve", type: "numerale", kind: "fw" },
  social: { it: "social", es: "social (redes sociales)", type: "aggettivo", kind: "sup" },
  durante: { it: "durante", es: "durante", type: "preposizione", kind: "fw" },
  europa: { it: "Europa", es: "Europa", type: "sostantivo", kind: "sup" },
  impero: { it: "impero", es: "imperio", type: "sostantivo", kind: "sup" },
  soffice: { it: "soffice", es: "blando, suave", type: "aggettivo", kind: "sup" },
  profondita: { it: "profondità", es: "profundidad", type: "sostantivo", kind: "sup" },
  citta: { it: "città", es: "ciudad", type: "sostantivo", kind: "sup" },
  istante: { it: "istante", es: "instante", type: "sostantivo", kind: "sup" },
  emozione: { it: "emozione", es: "emoción", type: "sostantivo", kind: "sup" },
  sensazione: { it: "sensazione", es: "sensación", type: "sostantivo", kind: "sup" },
  sensazioni: { it: "sensazioni", es: "sensaciones", type: "sostantivo", kind: "sup" },
  tensione: { it: "tensione", es: "tensión", type: "sostantivo", kind: "sup" },
  fronte: { it: "fronte", es: "frente (parte del rostro)", type: "sostantivo", kind: "sup" },
  polmoni: { it: "polmoni", es: "pulmones", type: "sostantivo", kind: "sup" },
  posizione: { it: "posizione", es: "posición", type: "sostantivo", kind: "sup" },
  postura: { it: "postura", es: "postura", type: "sostantivo", kind: "sup" },
  terreno: { it: "terreno", es: "terreno, suelo", type: "sostantivo", kind: "sup" },
  principe: { it: "principe", es: "príncipe", type: "sostantivo", kind: "sup" },
  principi: { it: "principi", es: "principios", type: "sostantivo", kind: "sup" },
  tempio: { it: "tempio", es: "templo", type: "sostantivo", kind: "sup" },
  saggio: { it: "saggio", es: "sabio; ensayo", type: "sostantivo", kind: "sup" },
  saggezza: { it: "saggezza", es: "sabiduría", type: "sostantivo", kind: "sup" },
  allievo: { it: "allievo", es: "alumno, discípulo", type: "sostantivo", kind: "sup" },
  spirito: { it: "spirito", es: "espíritu", type: "sostantivo", kind: "sup" },
  coscienza: { it: "coscienza", es: "conciencia", type: "sostantivo", kind: "sup" },
  equilibrio: { it: "equilibrio", es: "equilibrio", type: "sostantivo", kind: "sup" },
  ombra: { it: "ombra", es: "sombra", type: "sostantivo", kind: "sup" },
  passo: { it: "passo", es: "paso", type: "sostantivo", kind: "sup" },
  // nombres propios de persona frecuentes en diálogos y letture
  luca: { it: "Luca", es: "Luca (nombre)", type: "sostantivo", kind: "sup" },
  marco: { it: "Marco", es: "Marco (nombre)", type: "sostantivo", kind: "sup" },
  giulia: { it: "Giulia", es: "Giulia (nombre)", type: "sostantivo", kind: "sup" },
  anna: { it: "Anna", es: "Anna (nombre)", type: "sostantivo", kind: "sup" },
  paolo: { it: "Paolo", es: "Paolo (nombre)", type: "sostantivo", kind: "sup" },
  maria: { it: "Maria", es: "Maria (nombre)", type: "sostantivo", kind: "sup" },
  elena: { it: "Elena", es: "Elena (nombre)", type: "sostantivo", kind: "sup" },
  davide: { it: "Davide", es: "Davide (nombre)", type: "sostantivo", kind: "sup" },
  // ── ronda 3 · cola de fallos frecuentes ──
  campo: { it: "campo", es: "campo", type: "sostantivo", kind: "sup" },
  spirituale: { it: "spirituale", es: "espiritual", type: "aggettivo", kind: "sup" },
  giu: { it: "giù", es: "abajo", type: "avverbio", kind: "fw" },
  toccare: { it: "toccare", es: "tocar; «mi tocca» = me toca", type: "verbo", kind: "sup" },
  qualcuno: { it: "qualcuno", es: "alguien / alguno", type: "pronome", kind: "fw" },
  intero: { it: "intero", es: "entero", type: "aggettivo", kind: "sup" },
  unico: { it: "unico", es: "único", type: "aggettivo", kind: "sup" },
  unica: { it: "unica", es: "única", type: "aggettivo", kind: "sup" },
  valere: { it: "valere", es: "valer", type: "verbo", kind: "sup" },
  compagnia: { it: "compagnia", es: "compañía", type: "sostantivo", kind: "sup" },
  studio: { it: "studio", es: "estudio", type: "sostantivo", kind: "sup" },
  studi: { it: "studi", es: "estudios", type: "sostantivo", kind: "sup" },
  smettere: { it: "smettere", es: "dejar de, cesar", type: "verbo", kind: "sup" },
  forma: { it: "forma", es: "forma", type: "sostantivo", kind: "sup" },
  lettore: { it: "lettore", es: "lector", type: "sostantivo", kind: "sup" },
  oggetto: { it: "oggetto", es: "objeto", type: "sostantivo", kind: "sup" },
  riposare: { it: "riposare", es: "descansar", type: "verbo", kind: "sup" },
  riposo: { it: "riposo", es: "descanso", type: "sostantivo", kind: "sup" },
  sacro: { it: "sacro", es: "sagrado", type: "aggettivo", kind: "sup" },
  pancia: { it: "pancia", es: "barriga, vientre", type: "sostantivo", kind: "sup" },
  sette: { it: "sette", es: "siete", type: "numerale", kind: "fw" },
  otto: { it: "otto", es: "ocho", type: "numerale", kind: "fw" },
  lettera: { it: "lettera", es: "carta; letra", type: "sostantivo", kind: "sup" },
  migliore: { it: "migliore", es: "mejor", type: "aggettivo", kind: "sup" },
  verita: { it: "verità", es: "verdad", type: "sostantivo", kind: "sup" },
  campana: { it: "campana", es: "campana", type: "sostantivo", kind: "sup" },
  ragione: { it: "ragione", es: "razón", type: "sostantivo", kind: "sup" },
  natura: { it: "natura", es: "naturaleza", type: "sostantivo", kind: "sup" },
  qualsiasi: { it: "qualsiasi", es: "cualquiera", type: "aggettivo", kind: "fw" },
  definizione: { it: "definizione", es: "definición", type: "sostantivo", kind: "sup" },
  dignita: { it: "dignità", es: "dignidad", type: "sostantivo", kind: "sup" },
  oppure: { it: "oppure", es: "o si no / o bien", type: "congiunzione", kind: "fw" },
  ce: { it: "ce", es: "ce (partícula: «c'è», «ce l'ho»)", type: "pronome", kind: "fw" },
  like: { it: "like", es: "me gusta (redes sociales)", type: "sostantivo", kind: "sup" },
  retorica: { it: "retorica", es: "retórica", type: "sostantivo", kind: "sup" },
  lessico: { it: "lessico", es: "léxico, vocabulario", type: "sostantivo", kind: "sup" },
  linguaggio: { it: "linguaggio", es: "lenguaje", type: "sostantivo", kind: "sup" },
  gratis: { it: "gratis", es: "gratis", type: "aggettivo", kind: "fw" },
  fabbrica: { it: "fabbrica", es: "fábrica", type: "sostantivo", kind: "sup" },
  chilometro: { it: "chilometro", es: "kilómetro", type: "sostantivo", kind: "sup" },
  mediterraneo: { it: "Mediterraneo", es: "Mediterráneo", type: "sostantivo", kind: "sup" },
  popolazione: { it: "popolazione", es: "población", type: "sostantivo", kind: "sup" },
  mercante: { it: "mercante", es: "mercader, comerciante", type: "sostantivo", kind: "sup" },
  galileo: { it: "Galileo", es: "Galileo", type: "sostantivo", kind: "sup" },
  infine: { it: "infine", es: "finalmente, por último", type: "avverbio", kind: "fw" },
  storico: { it: "storico", es: "histórico; historiador", type: "aggettivo", kind: "sup" },
  ed: { it: "ed", es: "y (ante vocal)", type: "congiunzione", kind: "fw" },
  nascere: { it: "nascere", es: "nacer", type: "verbo", kind: "sup" },
  // ── ronda 4 · cola final ──
  tenere: { it: "tenere", es: "tener, mantener", type: "verbo", kind: "sup" },
  contenere: { it: "contenere", es: "contener", type: "verbo", kind: "sup" },
  coltivare: { it: "coltivare", es: "cultivar", type: "verbo", kind: "sup" },
  riempire: { it: "riempire", es: "llenar", type: "verbo", kind: "sup" },
  dio: { it: "Dio", es: "Dios", type: "sostantivo", kind: "sup" },
  stress: { it: "stress", es: "estrés", type: "sostantivo", kind: "sup" },
  luogo: { it: "luogo", es: "lugar", type: "sostantivo", kind: "sup" },
  nemmeno: { it: "nemmeno", es: "ni siquiera", type: "avverbio", kind: "fw" },
  collega: { it: "collega", es: "colega", type: "sostantivo", kind: "sup" },
  protocollo: { it: "protocollo", es: "protocolo", type: "sostantivo", kind: "sup" },
  notifica: { it: "notifica", es: "notificación", type: "sostantivo", kind: "sup" },
  tecnologia: { it: "tecnologia", es: "tecnología", type: "sostantivo", kind: "sup" },
  psicologia: { it: "psicologia", es: "psicología", type: "sostantivo", kind: "sup" },
  letteratura: { it: "letteratura", es: "literatura", type: "sostantivo", kind: "sup" },
  televisione: { it: "televisione", es: "televisión", type: "sostantivo", kind: "sup" },
  problema: { it: "problema", es: "problema", type: "sostantivo", kind: "sup" },
  mentale: { it: "mentale", es: "mental", type: "aggettivo", kind: "sup" },
  religione: { it: "religione", es: "religión", type: "sostantivo", kind: "sup" },
  ospite: { it: "ospite", es: "huésped, invitado", type: "sostantivo", kind: "sup" },
  successo: { it: "successo", es: "éxito; suceso", type: "sostantivo", kind: "sup" },
  nemico: { it: "nemico", es: "enemigo", type: "sostantivo", kind: "sup" },
  ricetta: { it: "ricetta", es: "receta", type: "sostantivo", kind: "sup" },
  dieta: { it: "dieta", es: "dieta", type: "sostantivo", kind: "sup" },
  colore: { it: "colore", es: "color", type: "sostantivo", kind: "sup" },
  fuoco: { it: "fuoco", es: "fuego", type: "sostantivo", kind: "sup" },
  ala: { it: "ala", es: "ala", type: "sostantivo", kind: "sup" },
  parlante: { it: "parlante", es: "hablante", type: "sostantivo", kind: "sup" },
  design: { it: "design", es: "diseño", type: "sostantivo", kind: "sup" },
  slide: { it: "slide", es: "diapositiva", type: "sostantivo", kind: "sup" },
  leggio: { it: "leggio", es: "atril", type: "sostantivo", kind: "sup" },
  mal: { it: "mal(e)", es: "mal", type: "avverbio", kind: "fw" },
  nina: { it: "Nina", es: "Nina (nombre)", type: "sostantivo", kind: "sup" },
  trenta: { it: "trenta", es: "treinta", type: "numerale", kind: "fw" },
  trentanni: { it: "trent'anni", es: "treinta años", type: "sostantivo", kind: "sup" },
  usano: { it: "usano", es: "usan (usare)", type: "verbo", kind: "sup" },
  // ── ronda 5 · cola final ──
  bellezza: { it: "bellezza", es: "belleza", type: "sostantivo", kind: "sup" },
  spiritualita: { it: "spiritualità", es: "espiritualidad", type: "sostantivo", kind: "sup" },
  palco: { it: "palco", es: "escenario, tarima", type: "sostantivo", kind: "sup" },
  rompere: { it: "rompere", es: "romper", type: "verbo", kind: "sup" },
  // ── coda ──
  aria: { it: "aria", es: "aire; melodía", type: "sostantivo", kind: "sup" },
  ripetere: { it: "ripetere", es: "repetir", type: "verbo", kind: "sup" },
  candela: { it: "candela", es: "vela (de cera)", type: "sostantivo", kind: "sup" },
  mindfulness: { it: "mindfulness", es: "mindfulness (atención plena)", type: "sostantivo", kind: "sup" },
  fatica: { it: "fatica", es: "fatiga, esfuerzo", type: "sostantivo", kind: "sup" },
  miglior: { it: "migliore", es: "mejor (apócope de «migliore»)", type: "aggettivo", kind: "sup" },
  festa: { it: "festa", es: "fiesta", type: "sostantivo", kind: "sup" },
  zen: { it: "zen", es: "zen", type: "aggettivo", kind: "sup" },
  ripete: { it: "ripete", es: "repite (ripetere)", type: "verbo", kind: "sup" },
  weekend: { it: "weekend", es: "fin de semana", type: "sostantivo", kind: "sup" },
};

/* construye VocabWord sintéticos bajo demanda (id prefijado para que
   el tooltip sepa que son del suplemento y omita el badge MCER) */
function synthEntry(key: string, info: { it: string; es: string; type: VocabWord["type"]; kind: SupKind }): VocabWord {
  return {
    id: `${info.kind === "fw" ? "fw" : "sup"}-${key}`,
    it: info.it,
    es: info.es,
    pron: "",
    type: info.type,
    cat: "astratto",
    level: "A1",
    example: { it: "", es: "" },
  };
}



/** Busca la entrada del diccionario para una forma flexionada. */
export function lookupWord(form: string): VocabWord | undefined {
  const idx = index();
  const raw = form.trim();
  if (!raw) return undefined;

  // 0 · limpiar puntuación extrema (comillas, guiones de diálogo, etc.)
  let w = raw.toLowerCase().replace(/^[^a-zàèéìòóù'’]+|[^a-zàèéìòóù'’]+$/g, "");
  if (!w) return undefined;

  // 0.bis · formas con apóstrofo/acentos distintivos (è, c'è, po', può…)
  const pre = PRECHECK[w.replace(/’/g, "'")];
  if (pre) {
    const hit = byLemma(pre);
    if (hit) return hit;
  }

  // 1 · forma exacta
  const n = norm(w);
  let hit = find(w);
  if (hit) return hit;

  // 1.bis · suplemento v9.14 (funcionales y lemas ausentes, claves normalizadas)
  const sup = SUPPLEMENT[n];
  if (sup) return synthEntry(n, sup);

  // 2 · irregulares frecuentes (claves ya normalizadas)
  const irr = IRREGULAR[n];
  if (irr) {
    hit = byLemma(irr);
    if (hit) return hit;
  }

  // 3 · preposizioni articolate
  const prep = PREP_ARTICOLATE[n];
  if (prep) {
    hit = byLemma(prep);
    if (hit) return hit;
  }

  // 4 · clíticos apocopados: dell'acqua → acqua
  for (const p of CLITIC_PREFIXES) {
    if (w.startsWith(p) && w.length > p.length + 1) {
      const rest = w.slice(p.length);
      hit = find(rest);
      if (hit) return hit;
      const irrRest = IRREGULAR[norm(rest)];
      if (irrRest) {
        hit = byLemma(irrRest);
        if (hit) return hit;
      }
      w = rest; // sigue intentando con el resto (p. ej. l'aria → aria)
      break;
    }
  }

  /* a partir de aquí trabajamos con la forma normalizada (sin acentos):
     «parlerà» → «parlera» para que las reglas de desinencia funcionen */
  w = norm(w);

  // 5 · participios y gerundios → infinitivo
  const participle: [RegExp, string[]][] = [
    [/ando$/, ["are", "arsi"]],
    [/endo$/, ["ere", "ersi", "ire", "irsi"]],
    [/at[oi]$/, ["are", "arsi"]],
    [/at[ae]$/, ["are", "arsi"]],
    [/ut[oi]$/, ["ere", "ersi"]],
    [/ut[ae]$/, ["ere", "ersi"]],
    [/it[oi]$/, ["ire", "irsi", "ere", "ersi"]],
    [/it[ae]$/, ["ire", "irsi", "ere", "ersi"]],
  ];
  if (w.length > 4) {
    for (const [re, bases] of participle) {
      if (re.test(w)) {
        const stem = w.replace(re, "");
        for (const b of bases) {
          hit = find(stem + b);
          if (hit) return hit;
        }
      }
    }
  }

  // 6 · plurales de sustantivo/adjetivo (cambio de vocal final)
  if (w.length >= 3) {
    /* plurales ortográficos: -chi→-co, -che→-ca, -ghi→-go, -ghe→-ga */
    const ort = w.match(/^(.+?)(ch|gh)(i|e)$/);
    if (ort) {
      const root = ort[1] + (ort[2] === "ch" ? "c" : "g");
      const endings = ort[3] === "i" ? ["o", "a", "e"] : ["a", "o", "e"];
      for (const e of endings) {
        hit = find(root + e);
        if (hit) return hit;
      }
    }
    const swaps: Record<string, string[]> = {
      i: ["io", "o", "a", "e"], e: ["o", "a"], a: ["o"], o: ["a", "i"],
    };
    const last = w[w.length - 1];
    for (const target of swaps[last] ?? []) {
      hit = find(w.slice(0, -1) + target);
      if (hit) return hit;
    }
  }

  // 7 · presente/imperfetto regular → infinitivo (finales largos primero)
  const verbEndings: { end: string; stems: string[] }[] = [
    { end: "iamo", stems: ["are", "arsi", "ere", "ersi", "ire", "irsi"] },
    { end: "avamo", stems: ["are"] },
    { end: "avate", stems: ["are"] },
    { end: "avano", stems: ["are"] },
    { end: "evamo", stems: ["ere", "ire"] },
    { end: "evate", stems: ["ere", "ire"] },
    { end: "evano", stems: ["ere", "ire"] },
    { end: "ivamo", stems: ["ire"] },
    { end: "ivate", stems: ["ire"] },
    { end: "ivano", stems: ["ire"] },
    { end: "ate", stems: ["are", "arsi"] },
    { end: "ono", stems: ["are", "ere", "ire"] },
    { end: "ano", stems: ["are", "ire"] },
    { end: "ete", stems: ["ere", "ire"] },
    { end: "ite", stems: ["ire", "ere"] },
    { end: "avo", stems: ["are"] },
    { end: "avi", stems: ["are"] },
    { end: "ava", stems: ["are"] },
    { end: "evo", stems: ["ere", "ire"] },
    { end: "evi", stems: ["ere", "ire"] },
    { end: "eva", stems: ["ere", "ire"] },
    { end: "ivo", stems: ["ire"] },
    { end: "ivi", stems: ["ire"] },
    { end: "iva", stems: ["ire"] },
    { end: "isce", stems: ["ire", "irsi"] },
    { end: "isci", stems: ["ire", "irsi"] },
    { end: "isco", stems: ["ire", "irsi"] },
    { end: "iscono", stems: ["ire", "irsi"] },
    { end: "iscano", stems: ["ire", "irsi"] },
    // finales de una sílaba, al final para minimizar falsos positivos
    { end: "o", stems: ["are", "ere", "ire", "arsi", "ersi", "irsi"] },
    { end: "i", stems: ["are", "ere", "ire", "arsi", "ersi", "irsi"] },
    { end: "a", stems: ["are", "ere", "ire", "arsi", "ersi", "irsi"] },
    { end: "e", stems: ["ere", "ire"] },
  ];
  for (const { end, stems } of verbEndings) {
    // finales de 1 letra admiten raíces de 2+ («usa» → «us»+«are»)
    const minLen = end.length + (end.length === 1 ? 1 : 2);
    if (w.endsWith(end) && w.length > minLen) {
      const stem = w.slice(0, w.length - end.length);
      for (const s of stems) {
        hit = find(stem + s);
        if (hit) return hit;
      }
    }
  }

  // 7.ter · infinitivo + pronombre enclítico (guardarlo, vedermi, farlo…)
  const enclitic = w.match(/^([a-zàèéìòóù]+)(rlo|rla|rli|rle|rmi|rti|rci|rvi|rsi|rne)$/);
  if (enclitic) {
    const stemNoR = enclitic[1];
    /* «guardarlo» → guarda + re = guardare; «alzarsi» → alza + rsi = alzarsi */
    for (const base of ["re", "rsi"]) {
      hit = find(stemNoR + base);
      if (hit) return hit;
    }
  }

  // 7.bis · futuro/condizionale regular (parlero → parlare, finira → finire)
  const futEndings: { end: string; stems: string[] }[] = [
    { end: "erebbero", stems: ["are", "ere"] },
    { end: "eremmo", stems: ["are", "ere"] },
    { end: "ereste", stems: ["are", "ere"] },
    { end: "erebbe", stems: ["are", "ere"] },
    { end: "eresti", stems: ["are", "ere"] },
    { end: "erei", stems: ["are", "ere"] },
    { end: "eranno", stems: ["are", "ere"] },
    { end: "eremo", stems: ["are", "ere"] },
    { end: "erete", stems: ["are", "ere"] },
    { end: "erai", stems: ["are", "ere"] },
    { end: "ero", stems: ["are", "ere"] },
    { end: "era", stems: ["are", "ere"] },
    { end: "iranno", stems: ["ire"] },
    { end: "iremo", stems: ["ire"] },
    { end: "irete", stems: ["ire"] },
    { end: "irai", stems: ["ire"] },
    { end: "iro", stems: ["ire"] },
    { end: "ira", stems: ["ire"] },
  ];
  for (const { end, stems } of futEndings) {
    if (w.endsWith(end) && w.length > end.length + 2) {
      const stem = w.slice(0, w.length - end.length); // "parlero" → "parl"
      for (const s of stems) {
        hit = find(stem + s);
        if (hit) return hit;
      }
    }
  }

  // 8 · adverbios en -mente (base femenina: lenta+mente, semplic+emente)
  if (w.endsWith("mente") && w.length > 7) {
    const base = w.slice(0, -5); // «lentamente» → «lenta», «semplicemente» → «semplic»
    const swap = base.slice(0, -1);
    const candidates = [base, base + "e", base + "o", base + "a", base + "i", swap + "o", swap + "e", swap + "a", swap + "i"];
    for (const c of candidates) {
      hit = find(c);
      if (hit) return hit;
    }
  }

  return undefined;
}
