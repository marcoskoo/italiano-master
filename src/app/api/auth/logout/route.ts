import { NextResponse } from "next/server";
import { revokeAdminToken } from "@/lib/admin/server";
import { revokeStudentToken } from "@/lib/admin/security";

export const runtime = "nodejs";

/* POST /api/auth/logout → cierra SOLO la sesión del dispositivo que lo pide
   (revoca el token admin o de estudiante correspondiente). */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as { token?: string };
    if (body.token) {
      await revokeStudentToken(body.token); // sin efecto si no es un token de estudiante
      await revokeAdminToken(body.token); // sin efecto si no es un token admin
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
