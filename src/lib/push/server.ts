/* ── Web Push server-side (v9.0) ──────────────────────────────────────
   Envío de notificaciones push 100% gratuito:
   · VAPID (claves en env) + librería web-push
   · Suscripciones guardadas en Vercel Blob (private) con fallback
     a archivo/memoria para desarrollo
   · Un recordatorio diario por cron (vercel.json)                    */

import webpush from "web-push";
import { get as blobGet, put as blobPut } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";

export interface PushSubscriptionRow {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  username: string | null;
  displayName: string | null;
  createdAt: string;
}

const SUBS_PATH = "im-push-subs.json";
const FILE_PATH = path.join(process.cwd(), ".push-subs.json");

let configured = false;
function ensureConfig() {
  if (configured) return;
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) throw new Error("VAPID no configurado");
  webpush.setVapidDetails("mailto:rkoo131077@gmail.com", pub, priv);
  configured = true;
}

export function pushConfigured(): boolean {
  return Boolean(process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
}

async function readSubs(): Promise<PushSubscriptionRow[]> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const res = await blobGet(SUBS_PATH, { access: "private", useCache: false });
      if (!res) return [];
      return (JSON.parse(await res.text()) as PushSubscriptionRow[]) ?? [];
    } catch {
      return [];
    }
  }
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(raw) as PushSubscriptionRow[];
  } catch {
    return [];
  }
}

async function writeSubs(subs: PushSubscriptionRow[]): Promise<void> {
  const json = JSON.stringify(subs, null, 2);
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await blobPut(SUBS_PATH, json, { access: "private", allowOverwrite: true });
    return;
  }
  await fs.writeFile(FILE_PATH, json, "utf-8");
}

export async function upsertSubscription(row: Omit<PushSubscriptionRow, "createdAt">): Promise<void> {
  const subs = await readSubs();
  const idx = subs.findIndex((s) => s.endpoint === row.endpoint);
  const next: PushSubscriptionRow = { ...row, createdAt: idx >= 0 ? subs[idx].createdAt : new Date().toISOString() };
  if (idx >= 0) subs[idx] = next;
  else subs.push(next);
  await writeSubs(subs);
}

export async function removeSubscription(endpoint: string): Promise<void> {
  const subs = await readSubs();
  await writeSubs(subs.filter((s) => s.endpoint !== endpoint));
}

export async function listSubscriptions(username?: string | null): Promise<PushSubscriptionRow[]> {
  const subs = await readSubs();
  return username ? subs.filter((s) => s.username === username) : subs;
}

export interface PushResult { sent: number; failed: number; removed: number; }

/** Envía un payload a un conjunto de suscripciones; limpia las que dan 404/410. */
export async function sendToSubs(
  subs: PushSubscriptionRow[],
  payload: { title: string; body: string; url?: string; tag?: string }
): Promise<PushResult> {
  ensureConfig();
  const dead: string[] = [];
  let sent = 0;
  let failed = 0;
  await Promise.all(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: s.keys },
          JSON.stringify(payload)
        );
        sent += 1;
      } catch (err) {
        failed += 1;
        const status = (err as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) dead.push(s.endpoint);
      }
    })
  );
  if (dead.length > 0) {
    const subsAll = await readSubs();
    await writeSubs(subsAll.filter((s) => !dead.includes(s.endpoint)));
  }
  return { sent, failed, removed: dead.length };
}

/* Mensajes del recordatorio diario: rotan por día del mes, sin coste. */
const DAILY_MESSAGES: { title: string; body: string }[] = [
  { title: "Il tuo italiano ti aspetta 🔥", body: "Ripassa le tue carte: ci vogliono solo 5 minuti per non perdere la racha." },
  { title: "Missione di oggi ⚡", body: "Hai 3 missioni nuove che ti aspettano: XP extra e monete!" },
  { title: "Gira la ruota! 🎡", body: "Il tuo giro giornaliero della Ruota della fortuna è disponibile." },
  { title: "Una lettura al giorno 📜", body: "Storia d'Italia, dialoghi o testi attuali: leggi e ascolta con l'audio." },
  { title: "Dettato veloce ✍️", body: "5 minuti di dettato oggi = una settimana di progresso domani." },
  { title: "Parla con Marco 🗣️", body: "Il Tutor IA è pronto: una conversazione breve e la tua parlato migliora." },
  { title: "Le tue carte scadono 🔁", body: "Il ripasso spaziato funziona solo se torni: oggi è il giorno giusto." },
];

export function dailyMessage(): { title: string; body: string; url: string; tag: string } {
  const idx = new Date().getDate() % DAILY_MESSAGES.length;
  return { ...DAILY_MESSAGES[idx], url: "/", tag: "im-daily" };
}
