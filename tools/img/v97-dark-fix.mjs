#!/usr/bin/env node
/* v97 · Regen de variantes oscuras desde el archivo final claro (sin raw). */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import ZAI from "z-ai-web-dev-sdk";
import { STYLE } from "./v97-p1-icons.mjs";

const PUB = path.join(process.cwd(), "public/images");
const argIds = new Set((process.argv[2] || "").split(",").filter(Boolean));
const ALL = [
  { dir: "strumenti", id: "print-vocab" },
  { dir: "falsamici", id: "ff-sociale" },
  { dir: "falsamici", id: "ff-cibo" },
];
const TARGETS = argIds.size ? ALL.filter((t) => argIds.has(t.id)) : ALL;

const zai = await ZAI.create();
for (const t of TARGETS) {
  const light = path.join(PUB, t.dir, `${t.id}.webp`);
  const darkOut = path.join(PUB, t.dir, `${t.id}-dark.webp`);
  const png = await sharp(light).png().toBuffer();
  const dataUrl = `data:image/png;base64,${png.toString("base64")}`;
  const res = await zai.images.generations.edit({ prompt: STYLE.darkEdit, images: [{ url: dataUrl }], size: "1024x1024" });
  const b64 = res?.data?.[0]?.base64;
  if (!b64) { console.error(`✗ ${t.id}: sin imagen`); continue; }
  await sharp(Buffer.from(b64, "base64")).resize(512, 512, { fit: "cover" }).webp({ quality: 85 }).toFile(darkOut);
  console.log(`✓ ${t.id}-dark`);
}
