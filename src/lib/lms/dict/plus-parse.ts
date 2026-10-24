import type { VocabWord, WordType, WordCategory } from "../types";

/* ═══ v9.41 · Parser de packs «plus» con nivel MCER explícito ════════
   La base (lang-XX.ts) deriva el nivel de la banda de frecuencia y solo
   llega a B1. Los packs plus traen el nivel en la 6.ª columna:

     word|es|ipa|T|cat|LVL|exWord|exEs[|extras]

   · LVL → B1 | B2 | C1 | C2 (explícito, sin derivación)
   · freq derivado: B1→3 · B2→2 · C1→2 · C2→1
     (escala de la base: 4-5 = muy frecuente = A1; 1 = raro)
   · id: <prefijo>-<lvl>-<slug> → jamás colisiona con la base
     (base: <prefijo>-<slug> sin nivel)
   · extras: p= plural · g= m|f · n= nota · ff=1 (falso amigo)
             s= sinónimos · a= antónimos · rel= relacionados
             r= inf|neu|for|col|let|tec (registro) · c= colocaciones  */

const TYPE: Record<string, WordType> = {
  S: "sostantivo", V: "verbo", A: "aggettivo", D: "avverbio", E: "espressione",
  P: "pronome", R: "preposizione", C: "congiunzione", T: "articolo",
  N: "numerale", I: "interiezione", L: "locuzione",
};
const CAT: Record<string, WordCategory> = {
  sal: "saluti", fam: "famiglia", cas: "casa", ali: "alimentazione", cmp: "compras",
  tra: "transporte", vig: "viaggi", htl: "hotel", sla: "salud", lav: "lavoro",
  stu: "studi", cit: "citta", cli: "clima", rop: "ropa", tec: "tecnologia",
  spt: "sport", mus: "musica", cin: "cinema", rel: "relazioni", fin: "finanze",
  ris: "ristorante", pro: "professioni", att: "attualita", sci: "scienza",
  let: "letteratura", col: "colori", cor: "corpo", ani: "animali", nat: "natura",
  tmp: "tempo", sve: "svago", emo: "emozioni", cmu: "comunicazione",
  ist: "istituzioni", cnn: "connettivi", ast: "astratto", art: "arte",
};
const REG: Record<string, NonNullable<VocabWord["register"]>> = {
  inf: "informale", neu: "neutro", for: "formale", col: "colloquiale",
  let: "letterario", tec: "tecnico",
};
const FREQ: Record<string, 1 | 2 | 3> = { B1: 3, B2: 2, C1: 2, C2: 1 };

function slug(w: string): string {
  return w.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/['’\s]+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/(^-|-$)/g, "");
}

export function parsePlus(lines: string, prefix: string): VocabWord[] {
  const out: VocabWord[] = [];
  const seen = new Set<string>();
  for (const raw of lines.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const f = line.split("|");
    if (f.length < 8) continue;
    const lvl = (f[5] ?? "").trim().toUpperCase();
    if (!/^(B1|B2|C1|C2)$/.test(lvl)) continue;
    const id = `${prefix}-${lvl.toLowerCase()}-${slug(f[0])}`;
    if (seen.has(id)) continue; // dedup por id
    seen.add(id);
    const extras = new Map<string, string>();
    for (const kv of (f[8] ?? "").split(";")) {
      const i = kv.indexOf("=");
      if (i > 0) extras.set(kv.slice(0, i).trim(), kv.slice(i + 1).trim());
    }
    const ipa = f[2];
    out.push({
      id,
      it: f[0],
      es: f[1],
      pron: ipa,
      ipa,
      type: TYPE[f[3]] ?? "sostantivo",
      gender: extras.get("g") === "m" ? "m" : extras.get("g") === "f" ? "f" : undefined,
      plural: extras.get("p"),
      cat: CAT[f[4]] ?? "astratto",
      level: lvl as VocabWord["level"],
      freq: FREQ[lvl],
      example: { it: f[6], es: f[7] },
      syn: extras.get("s")?.split(",").map((x) => x.trim()).filter(Boolean),
      ant: extras.get("a")?.split(",").map((x) => x.trim()).filter(Boolean),
      related: extras.get("rel")?.split(",").map((x) => x.trim()).filter(Boolean),
      register: REG[extras.get("r") ?? ""] ?? undefined,
      collocations: extras.get("c")?.split(",").map((x) => x.trim()).filter(Boolean),
      note: extras.get("n"),
      ff: extras.get("ff") === "1",
    });
  }
  return out;
}
