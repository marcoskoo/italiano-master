#!/usr/bin/env node
/* v97 · Extracción robusta del inventario de imágenes por familia.
   Los bloques TS varían en orden de claves → se parsea por fragmentos
   alrededor de cada `id: "..."`.  Salida: scripts/img/v97-manifest.json */
import fs from "node:fs";

const R = (p) => fs.readFileSync(p, "utf8");

/** Toma el fragmento de texto que sigue a un `id:` y extrae pares clave-cadena. */
function chunks(src, idRe, span = 600) {
  const out = [];
  const re = new RegExp(idRe, "g");
  let m;
  while ((m = re.exec(src))) {
    const frag = src.slice(m.index, m.index + span);
    const get = (k) => {
      const mm = frag.match(new RegExp(k + ':\\s*"([^"]+)"'));
      return mm ? mm[1] : "";
    };
    out.push({ id: m[1], level: get("level"), es: get("title"), it: get("titleIt"), cat: get("category"), kind: get("kind") });
  }
  return out;
}

/* Escanea el archivo base + todos los extra/* del mismo dominio. */
function scanAll(base, extras, idRe, span) {
  let src = R(base);
  for (const e of extras) {
    const p = "src/lib/lms/extra/" + e;
    if (fs.existsSync(p)) src += "\n" + R(p);
  }
  return chunks(src, idRe, span);
}

const grammar = scanAll("src/lib/lms/grammar.ts", ["grammar-extra.ts", "grammar-full-a.ts", "grammar-full-b.ts", "grammar-full-c.ts"], 'id:\\s*"(g[3x]?-[a-z0-9-]+)"', 400);
const listening = scanAll("src/lib/lms/listening.ts", ["listening-extra.ts", "listening-extra2.ts", "listening-extra3.ts"], 'id:\\s*"(ls-\\d+)"', 300);
const conv = scanAll("src/lib/lms/conversation.ts", ["conversation-extra.ts", "conversation-extra2.ts"], 'id:\\s*"(cs-\\d+)"', 300);
const cult = scanAll("src/lib/lms/culture.ts", ["culture-extra.ts", "culture-extra2.ts"], 'id:\\s*"(cul-\\d+)"', 300);
const sit = scanAll("src/lib/lms/situations.ts", ["situations-extra.ts", "situations-extra2.ts"], 'id:\\s*"(sit-[a-z]+)"', 400);
const rd = scanAll("src/lib/lms/reading.ts", ["reading-extra.ts", "reading-extra2.ts", "reading-extra3.ts"], 'id:\\s*"(rd-\\d+)"', 300);
const lettSrc = R("src/lib/lms/letture.ts") + "\n" + R("src/lib/lms/letture-storia.ts") + "\n" + R("src/lib/lms/letture-cultura.ts");
const lett = chunks(lettSrc, 'id:\\s*"(dia-[a-z]+-\\d+|inf-[a-z]+-\\d+|it-[a-z]+-\\d+|mon-[a-z]+-\\d+|cult-[a-z]+-\\d+)"', 500);

const ff = Object.entries(
  (async () => ({}))(),
).length; // placeholder — falsamici fijo abajo
const falsamici = [
  { id: "ff-classici", es: "Los grandes clásicos" },
  { id: "ff-corpo-casa", es: "Cuerpo, ropa y casa" },
  { id: "ff-cibo", es: "Comida y bebida" },
  { id: "ff-sociale", es: "Vida social y sentimientos" },
  { id: "ff-lavoro", es: "Trabajo, dinero y estudios" },
  { id: "ff-natura", es: "Naturaleza, tiempo y lugares" },
];
const strumenti = [
  { id: "print-vocab", es: "Hoja de vocabulario" },
  { id: "print-verbi", es: "Hoja de verbos" },
  { id: "print-gram", es: "Hoja de gramática" },
];

const man = { grammar, listening, conv, cult, sit, rd, lett, falsamici, strumenti };
fs.writeFileSync("scripts/img/v97-manifest.json", JSON.stringify(man, null, 1));
const counts = Object.fromEntries(Object.entries(man).map(([k, v]) => [k, v.length]));
console.log(counts);
console.log("letture:", lett.map((x) => x.id).join(" "));
console.log("grammar titles:", grammar.map((g) => g.id + "=" + (g.it || g.es)).slice(0, 80).join("\n  "));
