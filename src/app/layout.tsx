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
  title: "Lingua Viva — Learn Italian, Interactively",
  description:
    "An interactive Italian learning playground: drag vowels on a live IPA chart, sculpt intonation curves with sliders, pulse through quizzes and reveal grammar step by step.",
  keywords: [
    "Italian",
    "learn Italian",
    "italiano",
    "language learning",
    "vowels",
    "intonation",
    "grammar",
    "interactive",
  ],
  authors: [{ name: "Lingua Viva" }],
  icons: {
    icon: "/italia.svg",
  },
  openGraph: {
    title: "Lingua Viva — Learn Italian, Interactively",
    description:
      "Drag, slide, listen and quiz your way to living Italian. Un laboratorio linguistico interattivo.",
    siteName: "Lingua Viva",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
