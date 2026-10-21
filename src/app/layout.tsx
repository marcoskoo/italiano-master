import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

/* Renderizado dinámico (v9.11): necesario para la CSP con nonce —
   el HTML debe generarse por-request para incrustar el nonce en los
   scripts inline del payload RSC. Coste: un render serverless por
   visita (la app es una SPA de una sola ruta).                    */
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Políglota Master — Aprende italiano, inglés, portugués, francés y alemán",
  description:
    "Sistema integral de aprendizaje de idiomas para hispanohablantes: italiano, inglés, portugués, francés y alemán con cursos A1–C2, gramática paso a paso, vocabulario con repetición espaciada, escucha, lectura, escritura, conversación, pronunciación interactiva, noticias con método VOA, cultura, tutor IA y certificados.",
  keywords: [
    "italiano", "aprender italiano", "inglés", "portugués", "francés", "alemán",
    "curso de idiomas", "gramática italiana", "vocabulario", "idiomas para hispanohablantes",
    "LMS", "MCER", "políglota", "aprender idiomas",
    "A1", "A2", "B1", "B2", "C1", "C2", "conjugador", "diccionario italiano",
  ],
  authors: [{ name: "Políglota Master" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Políglota Master",
  },
  openGraph: {
    title: "Políglota Master — Aprende italiano, inglés, portugués, francés y alemán",
    description:
      "Tu plataforma integral de idiomas: lecciones conectadas, 4 destrezas, repaso inteligente, tutor IA y certificados. Da zero a C2 en 5 lenguas.",
    siteName: "Políglota Master",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  /* el teclado virtual redimensiona el layout (p. ej. el chat del tutor) */
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ee" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1814" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
