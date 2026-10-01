#!/usr/bin/env node
/* Sonda de cuota: espera y reintenta una generación mínima hasta que el
   gateway libere la ventana. Uso: node scripts/img/v97-probe.mjs [rondas] [espera_s] */
import ZAI from "z-ai-web-dev-sdk";

const rounds = parseInt(process.argv[2] || "6");
const waitS = parseInt(process.argv[3] || "90");
const zai = await ZAI.create();

for (let i = 1; i <= rounds; i++) {
  try {
    const r = await zai.images.generations.create({
      prompt: "minimal photo of an espresso cup on a white table, soft light",
      size: "1024x1024",
    });
    const ok = !!r?.data?.[0]?.base64;
    console.log(`RONDA ${i}: ${ok ? "CUOTA LIBRE ✔ (imagen recibida)" : "respuesta sin imagen"}`);
    process.exit(ok ? 0 : 1);
  } catch (e) {
    const msg = String(e?.message || e).slice(0, 60);
    console.log(`RONDA ${i}: 429/bloqueo (${msg}) — espera ${waitS}s`);
    await new Promise((r) => setTimeout(r, waitS * 1000));
  }
}
console.log("CUOTA AÚN BLOQUEADA tras todas las rondas");
process.exit(2);
