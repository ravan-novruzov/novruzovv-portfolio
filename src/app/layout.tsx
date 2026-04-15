import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ravan Novruzov | Bilgisayar Mühendisi",
  description:
    "Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi. Web geliştirme, ağ teknolojileri ve yazılım projeleri.",
  keywords: [
    "Ravan Novruzov",
    "Bilgisayar Mühendisi",
    "Portfolio",
    "Web Geliştirici",
    "Bursa Uludağ Üniversitesi",
  ],
  authors: [{ name: "Ravan Novruzov" }],
  openGraph: {
    title: "Ravan Novruzov | Bilgisayar Mühendisi",
    description:
      "Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi. Web geliştirme, ağ teknolojileri ve yazılım projeleri.",
    url: "https://ravannovruzov.vercel.app",
    siteName: "Ravan Novruzov",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <body className="noise-bg min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
