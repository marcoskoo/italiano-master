import { NextResponse } from "next/server";
import { pushConfigured } from "@/lib/push/server";

export const runtime = "nodejs";

/* GET /api/push/key → clave pública VAPID para suscribirse desde el cliente */
export async function GET() {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  if (!publicKey) {
    return NextResponse.json({ error: "Push no configurado" }, { status: 503 });
  }
  return NextResponse.json({ publicKey, configured: pushConfigured() });
}
