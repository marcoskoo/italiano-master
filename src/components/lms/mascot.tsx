/* ═══ v9.34 · Pappagallo — mascota de Políglota Master (componente compartido) ═══
   Tres poses (assets WebP 512, ~11-15 KB, generadas en v9.33):
     · hello — saludo (hero Home, banners)
     · study — estudia/lee (estados vacíos, secciones de estudio)
     · party — celebra (completar quiz, logros, finalizaciones)
   Decorativa: aria-hidden + alt="" (los textos adyacentes ya describen el contexto). */

import { cn } from "@/lib/utils";

export type MascotPose = "hello" | "study" | "party";

const POSE_SRC: Record<MascotPose, string> = {
  hello: "/mascot/hello.webp",
  study: "/mascot/study.webp",
  party: "/mascot/party.webp",
};

export function Mascot({
  pose = "hello",
  className,
  eager = false,
}: {
  pose?: MascotPose;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={POSE_SRC[pose]}
      alt=""
      aria-hidden="true"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("rounded-full border-2 border-soft bg-crema object-cover shadow-sm", className)}
    />
  );
}
