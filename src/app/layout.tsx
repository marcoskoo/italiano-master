import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Italiano Master — LMS de italiano desde cero hasta C2",
  description:
    "Sistema integral de aprendizaje de italiano para hispanohablantes: cursos A1–C2, gramática paso a paso, vocabulario con repetición espaciada, escucha, lectura, escritura, conversación, pronunciación interactiva, situaciones reales, cultura, tutor IA y certificados.",
  keywords: [
    "italiano", "aprender italiano", "curso de italiano", "gramática italiana",
    "vocabulario italiano", "italiano para hispanohablantes", "LMS", "MCER",
    "A1", "A2", "B1", "B2", "C1", "C2", "conjugador", "diccionario italiano",
  ],
  authors: [{ name: "Italiano Master" }],
  icons: {
    icon: "/italia.svg",
  },
  openGraph: {
    title: "Italiano Master — LMS de italiano desde cero hasta C2",
    description:
      "Tu plataforma integral de italiano: lecciones conectadas, 4 destrezas, repaso inteligente, tutor IA y certificados. Da zero a C2.",
    siteName: "Italiano Master",
    type: "website",
  },
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
