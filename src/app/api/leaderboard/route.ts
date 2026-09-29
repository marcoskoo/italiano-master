import { NextResponse } from "next/server";
import { leaderboardFor } from "@/lib/admin/store";
import { isAdminToken } from "@/lib/admin/server";
import { requireSession } from "@/lib/admin/security";
import { nextResetMs } from "@/lib/lms/leagues";

export const runtime = "nodejs";

/* GET /api/leaderboard?userId=… → clasificación semanal de la liga del
   usuario (v8.0). Requiere sesión válida del propio usuario o de un admin:
   nunca se expone la lista completa sin autenticación.                  */
export async function GET(req: Request) {
  try {
    const userId = new URL(req.url).searchParams.get("userId");
    if (!userId) return NextResponse.json({ error: "userId requerido" }, { status: 400 });

    const session = await requireSession(req, userId, isAdminToken);
    if (!session.ok) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await leaderboardFor(userId);
    return NextResponse.json({ ...data, resetAt: nextResetMs() });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
