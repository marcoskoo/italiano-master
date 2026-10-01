#!/usr/bin/env node
/* v97 · Sonda + maratón: espera a que la cuota se libere y genera todo lo
   pendiente hasta agotar la ventana o el tiempo de la invocación.
   Uso: node scripts/img/v97-auto.mjs <minutos_totales> [familias_csv]
   Cada invocación reanuda donde quedó (idempotente por archivos).       */
import { spawn } from "node:child_process";
import ZAI from "z-ai-web-dev-sdk";

const totalMin = parseFloat(process.argv[2] || "9");
const fams = process.argv[3] || "";
const t0 = Date.now();
const deadline = t0 + totalMin * 60 * 1000;

const zai = await ZAI.create();

async function probe() {
  try {
    const r = await zai.images.generations.create({
      prompt: "minimal photo of an espresso cup, soft light",
      size: "1024x1024",
    });
    return !!r?.data?.[0]?.base64;
  } catch { return false; }
}

/* Fase 1: sondeo cada 60s hasta liberar o deadline */
let free = false;
let round = 0;
while (!free && Date.now() < deadline) {
  round++;
  free = await probe();
  if (!free) {
    const left = ((deadline - Date.now()) / 60000).toFixed(1);
    console.log(`probe ${round}: bloqueada (${left} min restantes)`);
    await new Promise((r) => setTimeout(r, Math.min(60000, Math.max(0, deadline - Date.now()))));
  }
}
if (!free) { console.log("RESULTADO: cuota bloqueada toda la invocación"); process.exit(2); }
console.log(`probe ${round}: LIBRE ✔ — arranca generación (${((deadline - Date.now()) / 60000).toFixed(1)} min disponibles)`);

/* Fase 2: maratón de generación con el tiempo restante */
const args = ["scripts/img/v97-gen.mjs"];
if (fams) args.push(`--families=${fams}`);
const child = spawn(process.execPath, args, { stdio: "inherit" });
const killTimer = setTimeout(() => {
  console.log("\n⏰ tiempo de invocación agotado — se cierra limpio (reinvocar para continuar)");
  child.kill("SIGTERM");
}, Math.max(0, deadline - Date.now() - 5000));

child.on("exit", (code) => {
  clearTimeout(killTimer);
  console.log(`RESULTADO: gen terminó con código ${code}`);
  process.exit(code ?? 0);
});
