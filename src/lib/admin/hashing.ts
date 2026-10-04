/* ── Hash de contraseñas (sin dependencias de otros módulos) ──────────
   Extraído a su propio módulo para que store.ts (semilla/migración) y
   security.ts (verificación) lo compartan sin crear imports circulares.

   Endurecimiento v9.10.1 (auditoría de seguridad):
   · scrypt con sal aleatoria por usuario (esquema actual)
   · compatibilidad con los hashes SHA-256 históricos (re-hash al entrar)
   · NINGUNA contraseña por defecto publicada en el código fuente:
     la cuenta admin se inicializa desde ADMIN_PASSWORD (env) o con una
     contraseña ALEATORIA si la variable no existe (repo público).     */

import { createHash, randomBytes, scryptSync, timingSafeEqual } from "crypto";

const SCRYPT_N = 16384, SCRYPT_r = 8, SCRYPT_p = 1, SCRYPT_KEYLEN = 64;

/** Nuevo hash: `scrypt$N$r$p$salt(b64)$hash(b64)` — sal aleatoria por usuario. */
export function scryptHash(password: string): string {
  const salt = randomBytes(16);
  const key = scryptSync(password, salt, SCRYPT_KEYLEN, { N: SCRYPT_N, r: SCRYPT_r, p: SCRYPT_p });
  return `scrypt$${SCRYPT_N}$${SCRYPT_r}$${SCRYPT_p}$${salt.toString("base64")}$${key.toString("base64")}`;
}

export function verifyScrypt(stored: string, password: string): boolean {
  try {
    const [tag, nS, rS, pS, saltB64, hashB64] = stored.split("$");
    if (tag !== "scrypt") return false;
    const key = scryptSync(password, Buffer.from(saltB64, "base64"), Buffer.from(hashB64, "base64").length, {
      N: Number(nS), r: Number(rS), p: Number(pS),
    });
    return timingSafeEqual(key, Buffer.from(hashB64, "base64"));
  } catch {
    return false;
  }
}

/** Hash histórico (sin sal): necesario para validar credenciales existentes
 *  y para la migración one-time de la contraseña filtrada. */
export function legacyHash(username: string, password: string): string {
  return createHash("sha256").update(`italiano-master::${username}::${password}`).digest("hex");
}

export interface PasswordVerify { ok: boolean; needsRehash: boolean }

/** Verifica una contraseña contra el hash almacenado (scrypt o legado).
 *  `needsRehash` = true cuando el hash es legado y conviene migrar a scrypt. */
export function verifyPassword(stored: string, username: string, password: string): PasswordVerify {
  if (stored.startsWith("scrypt$")) {
    return { ok: verifyScrypt(stored, password), needsRehash: false };
  }
  return { ok: timingSafeEqualStr(legacyHash(username, password), stored), needsRehash: true };
}

function timingSafeEqualStr(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a, "utf8"), bb = Buffer.from(b, "utf8");
    if (ba.length !== bb.length) return false;
    return timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}
