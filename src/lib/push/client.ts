"use client";

/* ── Web Push client-side (v9.0) ─────────────────────────────────────
   Suscripción push del navegador (Notification + PushManager + VAPID).
   Requiere HTTPS + service worker registrado (producción/PWA).       */

export function pushSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window
  );
}

function urlBase64ToUint8Array(base64: string): Uint8Array {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = window.atob(b64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

export async function currentSubscription(): Promise<PushSubscription | null> {
  if (!pushSupported()) return null;
  try {
    const reg = await navigator.serviceWorker.ready;
    return await reg.pushManager.getSubscription();
  } catch {
    return null;
  }
}

export interface PushEnableResult { ok: boolean; reason?: string; }

export async function enablePush(username: string | null, displayName: string | null): Promise<PushEnableResult> {
  if (!pushSupported()) return { ok: false, reason: "unsupported" };
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return { ok: false, reason: "denied" };

    const keyRes = await fetch("/api/push/key");
    if (!keyRes.ok) return { ok: false, reason: "nokey" };
    const { publicKey } = (await keyRes.json()) as { publicKey: string };

    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
    }

    const res = await fetch("/api/push/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscription: sub.toJSON(), username, displayName }),
    });
    if (!res.ok) return { ok: false, reason: "server" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "error" };
  }
}

export async function disablePush(): Promise<void> {
  const sub = await currentSubscription();
  if (sub) {
    await fetch("/api/push/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: sub.endpoint }),
    }).catch(() => undefined);
    await sub.unsubscribe().catch(() => undefined);
  }
}

export async function sendTestPush(username: string | null): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch("/api/push/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = (await res.json()) as { sent?: number; error?: string };
    if (!res.ok) return { ok: false, message: data.error ?? "Error" };
    return { ok: true, message: `Inviata! (${data.sent ?? 1} dispositivi)` };
  } catch {
    return { ok: false, message: "Error de red" };
  }
}
