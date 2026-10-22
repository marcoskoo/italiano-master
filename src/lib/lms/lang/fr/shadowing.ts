import type { ShadowPhrase } from "../../shadowing";

/* ── Shadowing FR · guiones para escuchar → repetir → comparar ────
   Français de France. Espejo del archivo canónico italiano: cada
   guion es una frase graduada con traducción española y un tip de
   pronunciación contrastiva para hispanohablantes. Se usa la misma
   re-escritura fonética del proyecto: ã/õ/ĩ nasales, zh = j/g, sh =
   ch, ö = eu/œu, ó = eau/au, la sílaba tónica lleva tilde y la
   consonante final suele ser muda. Tipografía francesa: espacio
   antes de ? ! : ;.                                                 */

export type ShadowingScript = ShadowPhrase;

export const FR_SHADOWING: ShadowingScript[] = [
  /* ── A1 · survie ── */
  {
    id: "fr-sh-a1-01", level: "A1",
    it: "Bonjour ! Comment allez-vous aujourd'hui ?",
    es: "¡Buenos días! ¿Cómo está usted hoy?",
    tip: "« vous » suena /vu/; « aujourd'hui » se dice entero y con acento al final: /o-zhur-DUÍ/.",
  },
  /* ── A2 · vie quotidienne ── */
  {
    id: "fr-sh-a2-01", level: "A2",
    it: "D'habitude, je me réveille à sept heures et je prends un café à la boulangerie.",
    es: "Normalmente me despierto a las siete y tomo un café en la boulangerie.",
    tip: "« je me réveille »: la e de « me » casi desaparece: /zhm-re-VE-y/. La r es de garganta, suave.",
  },
  /* ── B1 · opinions ── */
  {
    id: "fr-sh-b1-01", level: "B1",
    it: "À mon avis, apprendre une langue demande de la régularité et un peu de patience.",
    es: "En mi opinión, aprender un idioma requiere regularidad y algo de paciencia.",
    tip: "« apprendre » lleva nasal /ã/: /a-PRÃ-dre/; « patience » acentúa la última sílaba: /pa-SYÃS/.",
  },
  /* ── B2 · argumenter ── */
  {
    id: "fr-sh-b2-01", level: "B2",
    it: "À vrai dire, je ne suis pas du tout d'accord avec cette décision.",
    es: "A decir verdad, no estoy nada de acuerdo con esta decisión.",
    tip: "La negación se encadena: /zhö-swi-pa-dy-tu-da-KOR/. No pronuncies la r final de « d'accord » con fuerza: se desvanece.",
  },
  /* ── C1 · registre soutenu ── */
  {
    id: "fr-sh-c1-01", level: "C1",
    it: "Il est indéniable que la chanson française a façonné le goût poétique de plusieurs générations.",
    es: "Es innegable que la chanson francesa moldeó el gusto poético de varias generaciones.",
    tip: "« a façonné » = /a-fa-so-NE/, con s sonora como en « rose ». Mantén el ritmo parejo, sin golpear cada palabra.",
  },
  /* ── C2 · maîtrise ── */
  {
    id: "fr-sh-c2-01", level: "C2",
    it: "N'eût-il pas fallu ce détour, je ne me serais jamais découvert une passion pour le terroir.",
    es: "Si no hubiera hecho falta ese rodeo, jamás habría descubierto mi pasión por el terroir.",
    tip: "« N'eût-il pas fallu »: plus-que-parfait du subjonctif literario con elisión; pronúncialo /nö-ti-pa-fa-LÜ/ sin pausas.",
  },
];
