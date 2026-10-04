#!/usr/bin/env node
/* v9.11: añade las 15 letture nuevas al manifiesto v97 (lett 43→58).
   Idempotente: re-ejecutar no duplica. */
import { readFileSync, writeFileSync } from "node:fs";

const NEW = [
  ["dia-pizzeria-08", "A1", "Por teléfono: una pizza a domicilio"],
  ["dia-dottore-09", "A2", "Del médico: ¡vaya dolor de garganta!"],
  ["dia-appartamento-10", "B2", "Alquilar un apartamento: una negociación exigente"],
  ["inf-trasporti-12", "A2", "Moverse por Italia: trenes, buses y metro"],
  ["inf-energia-13", "B2", "La transición energética: sol, viento y facturas"],
  ["inf-bufale-14", "C2", "Bulos y verificación de datos: defenderse de las noticias falsas"],
  ["it-medioevo-15", "B1", "Los comunas: cuando las ciudades se gobernaban solas"],
  ["it-piombo-16", "B2", "Los años de plomo: la Italia del miedo"],
  ["mon-vichinghi-20", "A2", "Los vikingos: navegantes del Norte"],
  ["mon-spazio-21", "B1", "La carrera espacial: del Sputnik a la Estación"],
  ["cult-gelato-31", "A1", "El helado artesanal: un pequeño placer italiano"],
  ["cult-ferragosto-32", "A2", "Ferragosto: las ciudades vacías y el mar lleno"],
  ["cult-calcio-33", "A2", "El fútbol: una pasión nacional"],
  ["cult-teatro-34", "C1", "La commedia dell'arte: las máscaras que todavía hacen reír"],
  ["cult-design-35", "C1", "El diseño italiano: la belleza de los objetos cotidianos"],
];

const files = ["scripts/img/v97-manifest.json", "tools/img/v97-manifest.json"];
for (const f of files) {
  const m = JSON.parse(readFileSync(f, "utf8"));
  const have = new Set(m.lett.map((x) => x.id));
  let added = 0;
  for (const [id, level, es] of NEW) {
    if (!have.has(id)) { m.lett.push({ id, level, es, it: "", cat: "", kind: "" }); added++; }
  }
  // ordenar por id para estabilidad
  m.lett.sort((a, b) => a.id.localeCompare(b.id));
  writeFileSync(f, JSON.stringify(m, null, 2) + "\n");
  console.log(`${f}: lett=${m.lett.length} (+${added})`);
}
