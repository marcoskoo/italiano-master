import { NextResponse } from "next/server";
import { clearAdminToken, logAdminAction, requireAdmin } from "@/lib/admin/server";
import { revokeStudentSessions } from "@/lib/admin/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SecurityAction { action?: string }

/* POST /api/admin/security → acciones de seguridad extrema del Panel Admin
   · revoke_all: invalida TODAS las sesiones (admin + estudiantes)
   · revoke_students: invalida solo las sesiones de estudiantes         */
export async function POST(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const body = (await req.json().catch(() => ({}))) as SecurityAction;
    switch (body.action) {
      case "revoke_all": {
        const revoked = await revokeStudentSessions();
        await clearAdminToken();
        await logAdminAction(req, "security_revoke_all", { sessions: revoked });
        return NextResponse.json({ ok: true, revoked, adminToo: true });
      }
      case "revoke_students": {
        const revoked = await revokeStudentSessions();
        await logAdminAction(req, "security_revoke_students", { sessions: revoked });
        return NextResponse.json({ ok: true, revoked, adminToo: false });
      }
      default:
        return NextResponse.json({ error: "Acción no válida" }, { status: 400 });
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
