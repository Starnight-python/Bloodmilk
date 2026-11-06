import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BLOODMILK — NU-METAL REINCARNATION",
  description:
    "BLOODMILK — новая кровь тяжёлой сцены. Синглы Dark Water, Our Souls, Signal, To Pieces. Слушай на Яндекс Музыке, VK, TikTok и Telegram.",
  keywords: [
    "BLOODMILK",
    "blood_m1lk",
    "nu-metal",
    "метал",
    "тяжёлая музыка",
    "Dark Water",
    "Our Souls",
    "Signal",
    "To Pieces",
  ],
  authors: [{ name: "BLOODMILK" }],
  openGraph: {
    title: "BLOODMILK — NU-METAL REINCARNATION",
    description:
      "Новая кровь тяжёлой сцены. Dark Water · Our Souls · Signal · To Pieces.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOODMILK — NU-METAL REINCARNATION",
    description:
      "Новая кровь тяжёлой сцены. Dark Water · Our Souls · Signal · To Pieces.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${manrope.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
