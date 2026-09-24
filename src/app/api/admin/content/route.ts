import { NextResponse } from "next/server";
import { getSetting, KEY_CUSTOM_EX, KEY_LESSON_OVR, KEY_VOCAB_OVR, logAdminAction, requireAdmin, setSetting } from "@/lib/admin/server";
import type { AppConfigBundle } from "@/lib/lms/appconfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/admin/content → overrides de contenido (vocabulario, lecciones, ejercicios) */
export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  const [vocabOverrides, lessonOverrides, customExercises] = await Promise.all([
    getSetting<AppConfigBundle["vocabOverrides"]>(KEY_VOCAB_OVR, {}),
    getSetting<AppConfigBundle["lessonOverrides"]>(KEY_LESSON_OVR, {}),
    getSetting<AppConfigBundle["customExercises"]>(KEY_CUSTOM_EX, []),
  ]);
  return NextResponse.json({ vocabOverrides, lessonOverrides, customExercises });
}

interface ContentPayload {
  vocabOverrides?: AppConfigBundle["vocabOverrides"];
  lessonOverrides?: AppConfigBundle["lessonOverrides"];
  customExercises?: AppConfigBundle["customExercises"];
}

/* PUT /api/admin/content?section=vocab|lessons|exercises → reemplaza una sección completa */
export async function PUT(req: Request) {
  const guard = await requireAdmin(req);
  if (!guard.ok) return guard.res;
  try {
    const section = new URL(req.url).searchParams.get("section");
    const body = (await req.json()) as ContentPayload;

    if (section === "vocab" && body.vocabOverrides) {
      await setSetting(KEY_VOCAB_OVR, body.vocabOverrides);
    } else if (section === "lessons" && body.lessonOverrides) {
      await setSetting(KEY_LESSON_OVR, body.lessonOverrides);
    } else if (section === "exercises" && body.customExercises) {
      await setSetting(KEY_CUSTOM_EX, body.customExercises);
    } else {
      return NextResponse.json({ error: "Sección inválida o payload vacío" }, { status: 400 });
    }
    await logAdminAction(req, "content_update", { section });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
