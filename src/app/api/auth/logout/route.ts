import { NextResponse } from "next/server";
import { clearAdminToken, getSetting, KEY_ADMIN_TOKEN } from "@/lib/admin/server";

export const runtime = "nodejs";

/* POST /api/auth/logout → cierra la sesión admin (invalida el token) */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { token?: string };
    if (body.token) {
      const stored = await getSetting<{ token: string } | null>(KEY_ADMIN_TOKEN, null);
      if (stored?.token === body.token) await clearAdminToken();
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
