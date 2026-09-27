import { NextResponse } from "next/server";
import { clearAdminToken, getSetting, KEY_ADMIN_TOKEN } from "@/lib/admin/server";
import { revokeStudentToken } from "@/lib/admin/security";

export const runtime = "nodejs";

/* POST /api/auth/logout → cierra la sesión (invalida el token admin o de estudiante) */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { token?: string };
    if (body.token) {
      // token de estudiante: revocación directa
      await revokeStudentToken(body.token);
      // token admin: solo si coincide con la sesión activa
      const stored = await getSetting<{ token: string } | null>(KEY_ADMIN_TOKEN, null);
      if (stored?.token === body.token) await clearAdminToken();
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
