import type { CefrLevel, VocabWord, WordCategory, WordType } from "../types";

/* ── Dizionario didattico v3.0 · formato compacto por líneas ──────────
   Permite empaquetar miles de entradas con calidad lexicográfica
   (IPA/AFI, frecuencia, registro, colocaciones, notas contrastivas)
   en un formato de líneas legible y verificable:

     it|es|ipa|T|cat|freq|exIt|exEs[|extras]

   · T      → código de categoría gramatical (S V A D E P R C T N I L)
   · cat    → código temático (sal fam cas ali cmp tra vig htl sla lav
              stu cit cli rop tec spt mus cin rel fin ris pro att sci
              let col cor ani nat tmp sve emo cmu ist cnn ast)
   · freq   → 1–5 (banda de frecuencia, cf. De Mauro/DIB)
   · extras → pares `k=v` separados por `;`
       g= m|f            género (sustantivos)
       p= plural         plural (obligatorio en irregulares)
       r= inf|neu|for|col|let|tec   registro
       n= nota           nota de uso contrastiva (sin `;`)
       c= colo1,colo2    colocaciones típicas
       s= sin1,sin2      sinónimos
       a= ant1,ant2      antónimos
       v= var1,var2      variantes / formas alternativas
       rel= r1,r2        palabras relacionadas
       ff= 1             falso amigo IT–ES

   El género y el plural regular se infieren automáticamente:
   -o→m/-i · -a→f/-e · -e→-i · -io→-i · -ista→-isti/-iste ·
   -ca/-ga f→-che/-ghe · terminación acentuada/consonante→invariable.
   Casos ambiguos (m. -co/-go, f. -o, m. -a con plural irregular, -ie)
   exigen `p=` explícito: el validador los reporta. */

const TYPE_CODES: Record<string, WordType> = {
  S: "sostantivo", V: "verbo", A: "aggettivo", D: "avverbio", E: "espressione",
  P: "pronome", R: "preposizione", C: "congiunzione", T: "articolo",
  N: "numerale", I: "interiezione", L: "locuzione",
};

const CAT_CODES: Record<string, WordCategory> = {
  sal: "saluti", fam: "famiglia", cas: "casa", ali: "alimentazione", cmp: "compras",
  tra: "transporte", vig: "viaggi", htl: "hotel", sla: "salud", lav: "lavoro",
  stu: "studi", cit: "citta", cli: "clima", rop: "ropa", tec: "tecnologia",
  spt: "sport", mus: "musica", cin: "cinema", rel: "relazioni", fin: "finanze",
  ris: "ristorante", pro: "professioni", att: "attualita", sci: "scienza",
  let: "letteratura", col: "colori", cor: "corpo", ani: "animali", nat: "natura",
  tmp: "tempo", sve: "svago", emo: "emozioni", cmu: "comunicazione",
  ist: "istituzioni", cnn: "connettivi", ast: "astratto", art: "arte",
};

const REG_CODES: Record<string, NonNullable<VocabWord["register"]>> = {
  inf: "informale", neu: "neutro", for: "formale", col: "colloquiale",
  let: "letterario", tec: "tecnico",
};

function slug(it: string): string {
  return it
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/* Plural regular inferido; `undefined` = ambiguo → exige p= */
function autoPlural(w: string, g: "m" | "f"): string | undefined {
  const last = w[w.length - 1];
  /* vocal tónica final o consonante final → invariable (città, caffè, bar) */
  if (/[àèéìòú]/.test(last) || !/[aeiou]/.test(last)) return w;
  if (w.endsWith("i")) return w; // crisi, analisi → invariables
  if (w.endsWith("ista")) return g === "f" ? w.slice(0, -1) + "e" : w.slice(0, -1) + "i";
  if (g === "f" && w.endsWith("o")) return undefined; // mano, foto → exige p=
  if (g === "m" && (w.endsWith("co") || w.endsWith("go"))) return undefined; // amico/luogo → exige p=
  if (w.endsWith("ie")) return undefined; // moglie, serie → exige p=
  if (w.endsWith("ca") && g === "f") return w.slice(0, -1) + "he"; // amica → amiche
  if (w.endsWith("ga") && g === "f") return w.slice(0, -1) + "he"; // riga → righe
  if (w.endsWith("io")) return w.slice(0, -2) + "i"; // figlio → figli
  if (w.endsWith("o")) return w.slice(0, -1) + "i"; // libro → libri
  if (w.endsWith("a")) return g === "m" ? w.slice(0, -1) + "i" : w.slice(0, -1) + "e"; // problema → problemi · casa → case
  if (w.endsWith("e")) return w.slice(0, -1) + "i"; // pane → pani
  return undefined;
}

export function parsePack(raw: string, level: CefrLevel, prefix: string): VocabWord[] {
  const out: VocabWord[] = [];
  const seenIds = new Set<string>();
  for (const rawLine of raw.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const f = line.split("|");
    if (f.length < 8 || f.length > 9) {
      throw new Error(`[${prefix}] campos=${f.length} (esperados 8-9): «${line.slice(0, 70)}»`);
    }
    const [it, es, ipa, tc, cc, fq, exIt, exEs, extraRaw] = f.map((s) => s.trim());
    const type = TYPE_CODES[tc];
    if (!type) throw new Error(`[${prefix}] código de tipo «${tc}» desconocido: «${it}»`);
    const cat = CAT_CODES[cc];
    if (!cat) throw new Error(`[${prefix}] código temático «${cc}» desconocido: «${it}»`);
    const freq = Number(fq) as 1 | 2 | 3 | 4 | 5;
    if (freq < 1 || freq > 5) throw new Error(`[${prefix}] freq inválida «${fq}»: «${it}»`);
    if (!it || !es || !ipa || !exIt || !exEs) {
      throw new Error(`[${prefix}] campo vacío: «${line.slice(0, 70)}»`);
    }

    const w: VocabWord = {
      id: `${prefix}-${slug(it)}`,
      it, es, ipa, pron: ipa,
      type, cat, level, freq,
      example: { it: exIt, es: exEs },
    };
    if (seenIds.has(w.id)) throw new Error(`[${prefix}] id duplicado: «${it}»`);
    seenIds.add(w.id);

    /* extras k=v;k=v — solo los pares con clave conocida (g p r n c s a v
       rel ff) abren un campo nuevo; cualquier otro segmento (por ejemplo
       texto de una nota con "=" o ";") se anexa al par anterior */
    if (extraRaw) {
      const KEY_RE = /^(g|p|r|n|c|s|a|v|rel|ff)=/;
      const pairs: { k: string; v: string }[] = [];
      for (const seg of extraRaw.split(";")) {
        const eq = seg.indexOf("=");
        if (eq < 0 || !KEY_RE.test(seg)) {
          if (pairs.length === 0) throw new Error(`[${prefix}] extra sin '=' inicial: «${seg}» en «${it}»`);
          pairs[pairs.length - 1].v += ";" + seg.trim();
          continue;
        }
        pairs.push({ k: seg.slice(0, eq).trim(), v: seg.slice(eq + 1).trim() });
      }
      for (const { k, v } of pairs) {
        if (!v) continue;
        const list = () => v.split(",").map((s) => s.trim()).filter(Boolean);
        switch (k) {
          case "g":
            if (v !== "m" && v !== "f") throw new Error(`[${prefix}] g inválido «${v}»: «${it}»`);
            w.gender = v;
            break;
          case "p": w.plural = v; break;
          case "r": {
            const reg = REG_CODES[v];
            if (!reg) throw new Error(`[${prefix}] registro «${v}» desconocido: «${it}»`);
            w.register = reg;
            break;
          }
          case "n": w.note = v; break;
          case "c": w.collocations = list(); break;
          case "s": w.syn = list(); break;
          case "a": w.ant = list(); break;
          case "v": w.alt = list(); break;
          case "rel": w.related = list(); break;
          case "ff": if (v === "1") w.ff = true; break;
          default: throw new Error(`[${prefix}] clave extra «${k}» desconocida en «${it}»`);
        }
      }
    }

    /* sustantivos: género y plural */
    if (type === "sostantivo") {
      if (!w.gender) {
        const last = it.toLowerCase()[it.length - 1];
        if (last === "o") w.gender = "m";
        else if (last === "a") w.gender = "f";
        else if (last === "e") throw new Error(`[${prefix}] sustantivo -e sin g=: «${it}»`);
        else w.gender = "m"; /* bar, film, tram… */
      }
      if (!w.plural) {
        const auto = autoPlural(it.toLowerCase(), w.gender);
        if (auto === undefined) {
          throw new Error(`[${prefix}] plural ambiguo, exige p=: «${it}»`);
        }
        w.plural = auto;
      }
    }

    out.push(w);
  }
  return out;
}
