#!/usr/bin/env node
/* v97 · QA VLM por lotes de 6 imágenes (base64) contra el archivo final.
   Uso: node scripts/img/v97-qa.mjs --families=grammatica [--dark] [--delete-fails] [--batch=N]
   Informe incremental: scripts/img/qa-v97-<family>.json                              */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";

const { ICONS } = await import("./v97-p1-icons.mjs");
const { SCENES_A } = await import("./v97-p2-scenes-a.mjs");
const { SCENES_B } = await import("./v97-p3-scenes-b.mjs");

const ROOT = process.cwd();
const PUB = path.join(ROOT, "public/images");

const FAMILIES = {
  grammatica: { dir: "grammatica", type: "icon", dark: true, prompts: ICONS.grammatica },
  falsamici: { dir: "falsamici", type: "icon", dark: true, prompts: ICONS.falsamici },
  strumenti: { dir: "strumenti", type: "icon", dark: true, prompts: ICONS.strumenti },
  ascolto: { dir: "ascolto", type: "scene", dark: false, prompts: SCENES_A.ascolto },
  conversazione: { dir: "conversazione", type: "scene", dark: false, prompts: SCENES_A.conversazione },
  cultura: { dir: "cultura", type: "scene", dark: false, prompts: SCENES_A.cultura },
  letture: { dir: "letture", type: "scene", dark: false, prompts: SCENES_B.letture },
  situazioni: { dir: "situazioni", type: "scene", dark: false, prompts: SCENES_B.situazioni },
  testi: { dir: "testi", type: "scene", dark: false, prompts: SCENES_B.testi },
};

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([a-z-]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));
const famSel = args.families ? args.families.split(",") : Object.keys(FAMILIES);
const onlyIds = args.only ? new Set(args.only.split(",")) : null;
const WANT_DARK = !!args.dark;
const DELETE_FAILS = !!args["delete-fails"];
const BATCH = args.batch ? parseInt(args.batch) : 6;

const QA_PROMPT = `You are a strict QA reviewer for photorealistic images used in an Italian-learning app. For EACH of the images (they are numbered in order), judge:
1. PHOTO-REALISM: does it look like a real professional photograph (not illustration/3D/painting)?
2. GARBAGE TEXT: any gibberish, garbled or unreadable text rendered by AI? (tiny blurred background text is acceptable ONLY if unreadable and not distracting)
3. ANATOMY/PHYSICS: distorted hands, faces, limbs or impossible objects?
4. SUBJECT: does it plausibly match its expected subject (given after each number)?
Reply ONLY with a JSON array, one entry per image:
[{"n":1,"pass":true,"note":"ok"}, {"n":2,"pass":false,"note":"garbled text on sign","fail":"text"}]
"fail" ∈ "realism" | "text" | "anatomy" | "subject" | null.`;

async function buildTargets() {
  const targets = [];
  for (const fam of famSel) {
    const F = FAMILIES[fam];
    if (!F) continue;
    for (const [id, subject] of Object.entries(F.prompts)) {
      if (onlyIds && !onlyIds.has(id)) continue;
      const ext = F.type === "icon" ? "webp" : "jpg";
      const light = path.join(PUB, F.dir, `${id}.${ext}`);
      if (fs.existsSync(light)) targets.push({ fam, id, subject, path: light, kind: "light" });
      if (F.dark && WANT_DARK) {
        const dark = path.join(PUB, F.dir, `${id}-dark.${ext}`);
        if (fs.existsSync(dark)) targets.push({ fam, id, subject: subject + " — night variant with warm lamp and teal shadows", path: dark, kind: "dark" });
      }
    }
  }
  return targets;
}

async function fileToDataUrl(p) {
  const buf = await sharp(p).jpeg({ quality: 80 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function parseJson(txt) {
  const m = txt.match(/\[[\s\S]*\]/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}

const zai = await ZAI.create();
const targets = await buildTargets();
console.log(`QA sobre ${targets.length} imágenes · familias: ${famSel.join(",")} · dark=${WANT_DARK} · deleteFails=${DELETE_FAILS}`);

const reports = {};
for (const fam of famSel) {
  const repPath = path.join(ROOT, "scripts/img", `qa-v97-${fam}.json`);
  reports[fam] = fs.existsSync(repPath) ? JSON.parse(fs.readFileSync(repPath, "utf8")) : {};
}

let idx = 0, calls = 0;
while (idx < targets.length) {
  const batch = targets.slice(idx, idx + BATCH);
  idx += BATCH;
  const content = [{ type: "text", text: QA_PROMPT + "\n\nExpected subjects:\n" + batch.map((t, i) => `${i + 1}. ${t.subject}`).join("\n") }];
  for (const t of batch) content.push({ type: "image_url", image_url: { url: await fileToDataUrl(t.path) } });

  let verdicts = null;
  for (let att = 0; att < 3 && !verdicts; att++) {
    try {
      const r = await zai.chat.completions.createVision({ messages: [{ role: "user", content }], thinking: { type: "disabled" } });
      calls++;
      verdicts = parseJson(r.choices[0]?.message?.content || "");
    } catch (e) {
      const msg = String(e?.message || e);
      if (/429|rate|quota/i.test(msg)) {
        console.log(`  ⏳ 429 en QA lote — espera 60s`);
        await new Promise((r) => setTimeout(r, 60000));
      } else { console.log(`  ✗ err lote: ${msg.slice(0, 60)}`); break; }
    }
  }
  if (!verdicts) { console.log(`  ⚠️ lote sin veredicto (${batch[0].id}..${batch[batch.length - 1].id}) — se omite`); continue; }

  for (let i = 0; i < batch.length; i++) {
    const v = verdicts[i];
    const t = batch[i];
    const pass = !!(v && v.pass);
    reports[t.fam][`${t.id}${t.kind === "dark" ? ":dark" : ""}`] = { pass, note: v?.note || "", fail: v?.fail || null };
    const mark = pass ? "✔" : `✘${v?.fail || "?"}`;
    console.log(`  ${mark} ${t.fam}/${t.id}${t.kind === "dark" ? "-dark" : ""} ${pass ? "" : "— " + (v?.note || "")}`);
    if (!pass && DELETE_FAILS) {
      const p = t.path;
      if (fs.existsSync(p)) { fs.unlinkSync(p); console.log(`    🗑 borrada ${path.basename(p)}`); }
    }
  }
  for (const fam of famSel) fs.writeFileSync(path.join(ROOT, "scripts/img", `qa-v97-${fam}.json`), JSON.stringify(reports[fam], null, 1));
}

const all = Object.values(reports).flatMap((r) => Object.values(r));
const fails = all.filter((x) => !x.pass).length;
console.log(`\nQA terminada: ${all.length} verificadas, ${fails} fallos (${calls} llamadas VLM)`);
