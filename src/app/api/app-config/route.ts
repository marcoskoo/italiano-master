import { NextResponse } from "next/server";
import { getAppConfig, getSetting, KEY_CUSTOM_EX, KEY_LESSON_OVR, KEY_VOCAB_OVR } from "@/lib/admin/server";
import type { AppConfigBundle } from "@/lib/lms/appconfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* hash djb2 corto: detecta cualquier cambio de contenido, no solo de config */
function shortHash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

/* GET /api/app-config → bundle público: config + overrides de contenido */
export async function GET() {
  try {
    const config = await getAppConfig();
    const [vocabOverrides, lessonOverrides, customExercises] = await Promise.all([
      getSetting<AppConfigBundle["vocabOverrides"]>(KEY_VOCAB_OVR, {}),
      getSetting<AppConfigBundle["lessonOverrides"]>(KEY_LESSON_OVR, {}),
      getSetting<AppConfigBundle["customExercises"]>(KEY_CUSTOM_EX, []),
    ]);
    const contentHash = shortHash(
      `${JSON.stringify(vocabOverrides)}|${JSON.stringify(lessonOverrides)}|${JSON.stringify(customExercises)}`
    );
    const bundle: AppConfigBundle = {
      config,
      vocabOverrides,
      lessonOverrides,
      customExercises,
      version: `${config.updatedAt || "init"}-${contentHash}`,
    };
    return NextResponse.json(bundle, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
