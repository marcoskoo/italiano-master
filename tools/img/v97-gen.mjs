#!/usr/bin/env node
/* v97 · Motor de generación fotográfica (receta v9.6/v9.7).
   Uso:
     node scripts/img/v97-gen.mjs --families=grammatica --no-dark
     node scripts/img/v97-gen.mjs --families=grammatica --dark-only
     node scripts/img/v97-gen.mjs --only=g-a1-genero,ff-cibo
     node scripts/img/v97-gen.mjs --dry-run
   Idempotente: salta archivos finales ya válidos (sharp metadata).
   429 → backoff exponencial; 4 consecutivos → salida limpia para reanudar. */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";

const { ICONS, STYLE } = await import("./v97-p1-icons.mjs");
const { SCENES_A } = await import("./v97-p2-scenes-a.mjs");
const { SCENES_B } = await import("./v97-p3-scenes-b.mjs");

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public/images");
const RAW = path.join(ROOT, "scripts/img/raw");

/* Familias: dir, tipo (icon|scene), prompts, dark?, tamaño final */
const FAMILIES = {
  grammatica: { dir: "grammatica", type: "icon", dark: true, prompts: ICONS.grammatica },
  falsamici: { dir: "falsamici", type: "icon", dark: true, prompts: ICONS.falsamici },
  strumenti: { dir: "strumenti", type: "icon", dark: true, prompts: ICONS.strumenti },
  ascolto: { dir: "ascolto", type: "scene", dark: false, size: [1008, 576], prompts: SCENES_A.ascolto },
  conversazione: { dir: "conversazione", type: "scene", dark: false, size: [1008, 576], prompts: SCENES_A.conversazione },
  cultura: { dir: "cultura", type: "scene", dark: false, size: [1008, 576], prompts: SCENES_A.cultura },
  letture: { dir: "letture", type: "scene", dark: false, size: [1344, 768], prompts: SCENES_B.letture },
  situazioni: { dir: "situazioni", type: "scene", dark: false, size: [1008, 576], prompts: SCENES_B.situazioni },
  testi: { dir: "testi", type: "scene", dark: false, size: [1008, 576], prompts: SCENES_B.testi },
};

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([a-z-]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));

const famSel = args.families ? args.families.split(",") : Object.keys(FAMILIES);
const onlyIds = args.only ? new Set(args.only.split(",")) : null;
const NO_DARK = !!args["no-dark"];
const DARK_ONLY = !!args["dark-only"];
const LIMIT = args.limit ? parseInt(args.limit) : Infinity;
const DRY = !!args["dry-run"];

async function validFile(p) {
  try { await sharp(p).metadata(); return true; } catch { return false; }
}

function buildJobs() {
  const jobs = [];
  for (const fam of famSel) {
    const F = FAMILIES[fam];
    if (!F) { console.error(`familia desconocida: ${fam}`); process.exit(1); }
    for (const [id, subject] of Object.entries(F.prompts)) {
      if (onlyIds && !onlyIds.has(id)) continue;
      const ext = F.type === "icon" ? "webp" : "jpg";
      const light = path.join(PUB, F.dir, `${id}.${ext}`);
      const dark = F.dark ? path.join(PUB, F.dir, `${id}-dark.${ext}`) : null;
      jobs.push({ fam, id, subject, type: F.type, size: F.size, light, dark, ext });
    }
  }
  return jobs;
}

async function convert(rawPng, out, type, size) {
  if (type === "icon") {
    await sharp(rawPng).resize(512, 512, { fit: "cover" }).webp({ quality: 85 }).toFile(out);
  } else {
    await sharp(rawPng).resize(size[0], size[1], { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
  }
}

let zai;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genWithBackoff(fn, label) {
  let last429 = 0;
  for (let att = 1; att <= 8; att++) {
    try { return await fn(); }
    catch (e) {
      const msg = String(e?.message || e);
      const is429 = /429|rate|quota|too many/i.test(msg);
      if (is429) {
        last429++;
        if (last429 >= 4) throw new Error("QUOTA");
        const wait = 20000 * att;
        console.log(`  ⏳ 429 en ${label}, espera ${wait / 1000}s (intento ${att})`);
        await sleep(wait);
      } else if (att < 8) {
        await sleep(3000 * att);
      } else throw e;
    }
  }
}

async function genLight(job) {
  const rawPng = path.join(RAW, job.fam, `${job.id}.png`);
  if (fs.existsSync(rawPng) && !DARK_ONLY) {
    // raw ya existe (p. ej. regeneración tras QA fail) → solo convertir
    await convert(rawPng, job.light, job.type, job.size);
    return "reconvert";
  }
  const style = job.type === "icon" ? STYLE.icon : STYLE.scene;
  const prompt = style.replace("{S}", job.subject);
  const size = job.type === "icon" ? "1024x1024" : "1344x768";
  const res = await genWithBackoff(
    () => zai.images.generations.create({ prompt, size }),
    `${job.id} (gen)`
  );
  const b64 = res?.data?.[0]?.base64;
  if (!b64) throw new Error("respuesta sin imagen");
  fs.mkdirSync(path.dirname(rawPng), { recursive: true });
  fs.writeFileSync(rawPng, Buffer.from(b64, "base64"));
  await convert(rawPng, job.light, job.type, job.size);
  return "gen";
}

async function genDark(job) {
  if (!job.dark) return;
  const rawPng = path.join(RAW, job.fam, `${job.id}.png`);
  if (!fs.existsSync(rawPng)) throw new Error(`falta raw light para dark de ${job.id}`);
  const darkRaw = path.join(RAW, job.fam, `${job.id}-dark.png`);
  const dataUrl = `data:image/png;base64,${fs.readFileSync(rawPng).toString("base64")}`;
  const res = await genWithBackoff(
    () => zai.images.generations.edit({ prompt: STYLE.darkEdit, images: [{ url: dataUrl }], size: "1024x1024" }),
    `${job.id} (dark)`
  );
  const b64 = res?.data?.[0]?.base64;
  if (!b64) throw new Error("respuesta sin imagen (dark)");
  fs.writeFileSync(darkRaw, Buffer.from(b64, "base64"));
  await sharp(darkRaw).resize(512, 512, { fit: "cover" }).webp({ quality: 85 }).toFile(job.dark);
  return "dark";
}

async function main() {
  const jobs = buildJobs();
  console.log(`Trabajos: ${jobs.length} · familias: ${famSel.join(",")} · noDark=${NO_DARK} darkOnly=${DARK_ONLY} limit=${LIMIT}`);
  if (DRY) { for (const j of jobs) console.log(` [dry] ${j.fam}/${j.id}`); return; }

  zai = await ZAI.create();
  let done = 0, skipped = 0, fails = 0, quota = false;
  const t0 = Date.now();

  for (const job of jobs) {
    if (done + skipped >= LIMIT) break;
    try {
      /* luz */
      if (!DARK_ONLY && (await validFile(job.light))) {
        skipped++;
      } else if (!DARK_ONLY) {
        const r = await genLight(job);
        done++;
        console.log(` ✓ ${job.id} (${r}) [${done + skipped}/${jobs.length}] ${(Date.now() - t0) / 1000 | 0}s`);
      }
      /* oscura */
      if (job.dark && !NO_DARK) {
        if (await validFile(job.dark)) { if (DARK_ONLY) skipped++; }
        else {
          await genDark(job);
          if (DARK_ONLY) { done++; console.log(` ✓ ${job.id}-dark [${done + skipped}/${jobs.length}]`); }
        }
      }
    } catch (e) {
      if (String(e?.message) === "QUOTA") {
        quota = true;
        console.log(`⛔ CUOTA AGOTADA tras ${done + skipped} trabajos. Reanudar más tarde con el mismo comando.`);
        break;
      }
      fails++;
      console.error(` ✗ ${job.id}: ${e?.message}`);
    }
  }
  console.log(`\nResumen: generados=${done} existentes=${skipped} fallos=${fails}${quota ? " · CUOTA" : ""}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
