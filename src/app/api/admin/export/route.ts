import { NextResponse } from "next/server";
import { logAdminAction, requireAdmin } from "@/lib/admin/server";
import { db } from "@/lib/admin/store";
import { maskAccount, maskIban } from "@/lib/admin/security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/export → dump completo de la plataforma en JSON.
   v5.0: datos sensibles enmascarados también en el backup (hashes
   truncados, IBAN parcial, tokens de sesión eliminados).            */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;

  const [users, settings, events] = await Promise.all([
    db.user.findMany({ orderBy: { createdAt: "asc" } }),
    db.setting.findMany(),
    db.telemetryEvent.findMany({ orderBy: { createdAt: "desc" }, take: 2000 }),
  ]);

  await logAdminAction(req, "data_export");

  // claves cuyo contenido nunca debe salir completo del servidor
  const SENSITIVE_KEYS = new Set(["adminToken", "studentTokens"]);

  const dump = {
    exportedAt: new Date().toISOString(),
    platform: "Italiano Master",
    users: users.map((u) => ({ ...u, passwordHash: `(${u.passwordHash.slice(0, 8)}…)` })), // hash truncado por seguridad
    settings: settings.map((s) => {
      if (SENSITIVE_KEYS.has(s.key)) return { key: s.key, value: "[protegido]" };
      try {
        const parsed = JSON.parse(s.value) as { billing?: { bank?: { iban?: string; accountNumber?: string } } };
        if (parsed?.billing?.bank?.iban) {
          parsed.billing.bank.iban = maskIban(parsed.billing.bank.iban); // IBAN enmascarado
        }
        if (parsed?.billing?.bank?.accountNumber) {
          parsed.billing.bank.accountNumber = maskAccount(parsed.billing.bank.accountNumber); // n.º de cuenta enmascarado
        }
        return { key: s.key, value: parsed };
      } catch {
        return { key: s.key, value: "[no serializable]" };
      }
    }),
    telemetryEvents: events,
  };

  return new NextResponse(JSON.stringify(dump, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="italiano-master-backup-${new Date().toISOString().slice(0, 10)}.json"`,
    },
  });
}
