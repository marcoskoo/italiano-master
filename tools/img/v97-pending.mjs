#!/usr/bin/env node
/* Lista los ítems pendientes (manifest id sin archivo final válido) por familia. */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const man = JSON.parse(fs.readFileSync("scripts/img/v97-manifest.json", "utf8"));
const { ICONS } = await import("./v97-p1-icons.mjs");
const { SCENES_A } = await import("./v97-p2-scenes-a.mjs");
const { SCENES_B } = await import("./v97-p3-scenes-b.mjs");
const PUB = path.join(process.cwd(), "public/images");

const FAM = {
  grammatica: { dir: "grammatica", type: "icon", prompts: ICONS.grammatica },
  falsamici: { dir: "falsamici", type: "icon", prompts: ICONS.falsamici },
  strumenti: { dir: "strumenti", type: "icon", prompts: ICONS.strumenti },
  ascolto: { dir: "ascolto", type: "scene", prompts: SCENES_A.ascolto },
  conversazione: { dir: "conversazione", type: "scene", prompts: SCENES_A.conversazione },
  cultura: { dir: "cultura", type: "scene", prompts: SCENES_A.cultura },
  letture: { dir: "letture", type: "scene", prompts: SCENES_B.letture },
  situazioni: { dir: "situazioni", type: "scene", prompts: SCENES_B.situazioni },
  testi: { dir: "testi", type: "scene", prompts: SCENES_B.testi },
};

async function valid(p) { try { await sharp(p).metadata(); return true; } catch { return false; } }

const out = {};
for (const [fam, F] of Object.entries(FAM)) {
  const missing = [];
  for (const id of Object.keys(F.prompts)) {
    const ext = F.type === "icon" ? "webp" : "jpg";
    const light = path.join(PUB, F.dir, `${id}.${ext}`);
    if (!(fs.existsSync(light) && (await valid(light)))) { missing.push(id); continue; }
    if (F.type === "icon") {
      const dark = path.join(PUB, F.dir, `${id}-dark.${ext}`);
      if (!(fs.existsSync(dark) && (await valid(dark)))) missing.push(id + "(dark)");
    }
  }
  if (missing.length) out[fam] = missing;
}
console.log(JSON.stringify(out, null, 1));
