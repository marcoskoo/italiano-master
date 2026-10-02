#!/usr/bin/env node
/* v97 · Regen de fallos de QA con prompts CORREGIDOS.
   Los nuevos subjects evitan: texto legible (cartas, mapas, teclados, placas,
   carteles), anatomía en primer plano (manos, tijeras, rostros, peces) y
   geometría imposible (arcos, conteo de torres).
   Uso: node scripts/img/v97-fix.mjs [--dry-run]                       */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";

const { ICONS, STYLE } = await import("./v97-p1-icons.mjs");
const { SCENES_B } = await import("./v97-p3-scenes-b.mjs");

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public/images");
const RAW = path.join(ROOT, "scripts/img/raw");

/* id → nuevo subject (mismo sujeto pedagógico, composición sin riesgos) */
const FIXES = {
  /* grammatica: scopa imposible sin texto → banter de café (registro coloquial) */
  "grammatica/g3-c2-substandard":
    "two elderly Italian men in animated conversation at a neighborhood café table, gesturing expressively, espresso cups on the marble table, warm afternoon Rome light",

  /* letture: texto en camiseta rosa → pelotón lejano sin letra legible */
  "letture/cult-sport-26":
    "the Giro d'Italia peloton climbing a spectacular mountain switchback road, fans waving flags along the barriers, sweeping drone view, colorful jerseys without any readable lettering",

  /* situazioni */
  "situazioni/sit-hotel":
    "a cozy Italian hotel reception: wooden front desk with brass bell and room-number drawers, warm lamps, staircase with carpet in the background",
  "situazioni/sit-ristorante":
    "a rustic Italian trattoria dining room set for dinner: red-checkered tablecloths, wine glasses, chalkboard-free walls with framed photos, candles lit, no people",
  "situazioni/sit-supermercato":
    "a bright Italian supermarket aisle with shelves of pasta boxes and sauce jars neatly stacked, clean modern interior, no readable labels",
  "situazioni/sit-direzioni":
    "a friendly Italian local giving directions with clear hand gestures to a tourist couple on a sunlit cobblestone street corner, old ochre buildings, no map visible",
  "situazioni/sit-banca":
    "the grand interior of a classic Italian bank: marble hall, brass and glass teller counters in a row, velvet rope queue barriers, soft light from tall windows",
  "situazioni/sit-oggetti":
    "a tidy lost-and-found shelf at an Italian train station: a lonely umbrella, a small worn suitcase, reading glasses prominently in front, and a teddy bear, warm shelf light",
  "situazioni/sit-treno":
    "the clean interior of an Italian regional train carriage: rows of blue seats with a passenger reading by the window, aisle perspective, soft daylight",
  "situazioni/sit-museo":
    "a bright museum gallery corridor with gilded framed paintings along the wall, parquet floor and visitors admiring the art from behind at a respectful distance",
  "situazioni/sit-barbiere":
    "a vintage Italian barber shop interior: a leather barber chair facing a large round warm-lit mirror, checkered floor, cabinet with shaving brushes and cream jars, no scissors",
  "situazioni/sit-vigili":
    "an Italian traffic warden in a distinct navy-blue uniform seen from behind while writing in a notebook, parked Vespa nearby, narrow old-town street with ochre walls",

  /* testi */
  "testi/rd-2":
    "a lively Saturday morning street market: canvas awnings over crates of colorful vegetables and fruit, shoppers browsing between the stalls, warm morning light",
  "testi/rd-5":
    "a young traveler with a backpack walking and waving on a sunny Italian piazza, seen from a distance, historic facades behind",
  "testi/rd-9":
    "a fresh first-day-at-work desk seen from the side: a closed silver laptop, a brand-new notebook, a small green plant and an espresso cup, soft morning office window light",
  "testi/rd-10":
    "Bologna skyline at dusk: medieval terracotta rooftops and two leaning brick towers rising above the city, warm street lights coming on, seen from a rooftop terrace",
  "testi/rd-15":
    "the Rialto fish market in Venice at dawn: wooden crates packed with crushed ice under green-striped awnings, vendors arranging produce, canal in the background, catch mostly covered by ice",
  "testi/rd-16":
    "university students walking and chatting under Bologna's long medieval stone porticoes at golden hour, warm light through the arches, terracotta facades",
  "testi/rd-18":
    "a red Italian regional train crossing an old stone railway bridge over a lush green valley, wide landscape view from the hills at golden hour",
  "testi/rd-21":
    "a rustic Italian family kitchen on a Sunday: a big pot simmering on the stove, grandmother telling stories near the hearth, grandchildren sitting at the long wooden table listening, cozy warm light",
  "testi/rd-27":
    "an Italian bar counter at dawn: barista pouring espresso in warm amber light, steam rising from cups, blurred regulars chatting at the marble counter",
  "testi/rd-30":
    "a charming Christmas market at dusk: wooden huts glowing with warm string lights, snow-dusted garlands, people browsing with hot drinks in hand, no signage",
};

const FAM = {
  grammatica: { dir: "grammatica", type: "icon", dark: true, size: null },
  letture: { dir: "letture", type: "scene", dark: false, size: [1344, 768] },
  situazioni: { dir: "situazioni", type: "scene", dark: false, size: [1008, 576] },
  testi: { dir: "testi", type: "scene", dark: false, size: [1008, 576] },
};

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([a-z-]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));
const DRY = !!args["dry-run"];
const onlyKeys = args.only ? new Set(args.only.split(",")) : null;

let zai;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genWithBackoff(fn, label) {
  let last429 = 0;
  for (let att = 1; att <= 8; att++) {
    try { return await fn(); }
    catch (e) {
      const msg = String(e?.message || e);
      if (/429|rate|quota|too many/i.test(msg)) {
        last429++;
        if (last429 >= 4) throw new Error("QUOTA");
        const wait = 20000 * att;
        console.log(`  ⏳ 429 en ${label}, espera ${wait / 1000}s`);
        await sleep(wait);
      } else if (att < 8) { await sleep(3000 * att); } else throw e;
    }
  }
}

async function convert(rawPng, out, type, size) {
  if (type === "icon") await sharp(rawPng).resize(512, 512, { fit: "cover" }).webp({ quality: 85 }).toFile(out);
  else await sharp(rawPng).resize(size[0], size[1], { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
}

async function main() {
  const entries = Object.entries(FIXES).filter(([k]) => !onlyKeys || onlyKeys.has(k));
  console.log(`Regen de ${entries.length} fallos de QA${DRY ? " (dry-run)" : ""}`);
  if (DRY) { for (const [k, v] of entries) console.log(` [dry] ${k}: ${v.slice(0, 70)}…`); return; }

  zai = await ZAI.create();
  let ok = 0, quota = false;

  for (const [key, subject] of entries) {
    const [fam, id] = key.split("/");
    const F = FAM[fam];
    if (!F) { console.error(`familia desconocida: ${fam}`); continue; }
    const ext = F.type === "icon" ? "webp" : "jpg";
    const light = path.join(PUB, F.dir, `${id}.${ext}`);
    try {
      /* light */
      const rawPng = path.join(RAW, fam, `${id}.png`);
      fs.mkdirSync(path.dirname(rawPng), { recursive: true });
      const style = F.type === "icon" ? STYLE.icon : STYLE.scene;
      const prompt = style.replace("{S}", subject);
      const size = F.type === "icon" ? "1024x1024" : "1344x768";
      const res = await genWithBackoff(() => zai.images.generations.create({ prompt, size }), `${id} (gen)`);
      const b64 = res?.data?.[0]?.base64;
      if (!b64) throw new Error("respuesta sin imagen");
      fs.writeFileSync(rawPng, Buffer.from(b64, "base64"));
      fs.mkdirSync(path.dirname(light), { recursive: true });
      await convert(rawPng, light, F.type, F.size);
      console.log(` ✓ ${key} (light)`);

      /* dark (solo grammatica) */
      if (F.dark) {
        const darkRaw = path.join(RAW, fam, `${id}-dark.png`);
        const darkOut = path.join(PUB, F.dir, `${id}-dark.${ext}`);
        const dataUrl = `data:image/png;base64,${fs.readFileSync(rawPng).toString("base64")}`;
        const r2 = await genWithBackoff(
          () => zai.images.generations.edit({ prompt: STYLE.darkEdit, images: [{ url: dataUrl }], size: "1024x1024" }),
          `${id} (dark)`
        );
        const b2 = r2?.data?.[0]?.base64;
        if (!b2) throw new Error("sin imagen dark");
        fs.writeFileSync(darkRaw, Buffer.from(b2, "base64"));
        await sharp(darkRaw).resize(512, 512, { fit: "cover" }).webp({ quality: 85 }).toFile(darkOut);
        console.log(` ✓ ${key} (dark)`);
      }
      ok++;
    } catch (e) {
      if (String(e?.message) === "QUOTA") { quota = true; console.log(`⛔ CUOTA — reanudar luego (${ok}/${entries.length} hechos)`); break; }
      console.error(` ✗ ${key}: ${e?.message}`);
    }
  }
  console.log(`\nRegen: ${ok}/${entries.length}${quota ? " · CUOTA" : ""}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
