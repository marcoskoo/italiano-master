"use client";

/* ── Cliente remoto: configuración de la app, telemetría y auth ────── */

import type { AppConfigBundle } from "./appconfig";

const CLIENT_ID_KEY = "im-client-id";

export function getClientId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = window.localStorage.getItem(CLIENT_ID_KEY);
  if (!id) {
    id = `c-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
    window.localStorage.setItem(CLIENT_ID_KEY, id);
  }
  return id;
}

export const ADMIN_TOKEN_KEY = "im-admin-token";
export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(ADMIN_TOKEN_KEY);
}
export function setAdminToken(token: string | null): void {
  if (typeof window === "undefined") return;
  if (token) window.localStorage.setItem(ADMIN_TOKEN_KEY, token);
  else window.localStorage.removeItem(ADMIN_TOKEN_KEY);
}

/* ── Config + overrides ────────────────────────────────────────────── */

export async function fetchAppConfig(): Promise<AppConfigBundle> {
  const res = await fetch("/api/app-config", { cache: "no-store" });
  if (!res.ok) throw new Error(`app-config ${res.status}`);
  return (await res.json()) as AppConfigBundle;
}

/* ── Telemetría (fire & forget) ────────────────────────────────────── */

export function telemetry(event: string, detail?: unknown, username?: string | null): void {
  if (typeof window === "undefined") return;
  try {
    void fetch("/api/telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: getClientId(), username: username ?? null, event, detail }),
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    /* nunca rompe la app */
  }
}

/* ── Auth ──────────────────────────────────────────────────────────── */

export interface SessionUser {
  id: string;
  username: string;
  displayName: string;
  role: "admin" | "student";
  level: string;
  plan: string;
  xp: number;
  streak: number;
  lessonsDone: number;
  wordsInSrs: number;
}

export async function loginRequest(username: string, password: string): Promise<{ user: SessionUser; token: string | null }> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, clientId: getClientId() }),
  });
  const data = (await res.json()) as { user?: SessionUser; token?: string | null; error?: string };
  if (!res.ok || !data.user) throw new Error(data.error ?? "Error de acceso");
  return { user: data.user, token: data.token ?? null };
}

export async function logoutRequest(token: string | null): Promise<void> {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
  } catch {
    /* ok */
  }
}

export interface ProfileSyncPayload {
  xp: number; level: string; plan: string; streak: number;
  lessonsDone: number; wordsInSrs: number;
}

export async function fetchServerProgress(userId: string): Promise<{ xp: number; streak: number } | null> {
  try {
    const res = await fetch(`/api/auth/profile?userId=${encodeURIComponent(userId)}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = (await res.json()) as { xp?: number; streak?: number };
    return { xp: data.xp ?? 0, streak: data.streak ?? 0 };
  } catch {
    return null;
  }
}

export async function syncProfileRequest(userId: string, payload: ProfileSyncPayload): Promise<void> {
  try {
    await fetch("/api/auth/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, ...payload }),
    });
  } catch {
    /* offline: se reintenta en el próximo cambio */
  }
}

/* ── API del panel admin (con token bearer) ────────────────────────── */

export async function adminFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getAdminToken();
  const res = await fetch(path, {
    ...init,
    cache: "no-store",
    headers: {
      ...(init?.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
    },
  });
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(data.error ?? `Error ${res.status}`);
  return data;
}
