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
  title: "Ravan Novruzov (Rəvan Novruzov) | Bilgisayar Mühendisi",
  description:
    "Ravan Novruzov (Rəvan Novruzov / Revan Novruzov) — Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi. Siber güvenlik, ağ teknolojileri ve web geliştirme alanlarında projeler geliştiriyor.",
  keywords: [
    "Ravan Novruzov",
    "Rəvan Novruzov",
    "Revan Novruzov",
    "Ravan Novruzov portfolio",
    "Ravan Novruzov LinkedIn",
    "Ravan Novruzov GitHub",
    "Bilgisayar Mühendisi",
    "Computer Engineer",
    "Kompüter Mühəndisi",
    "Portfolio",
    "Siber Güvenlik",
    "Kibertəhlükəsizlik",
    "Ağ Teknolojileri",
    "Web Geliştirici",
    "Bursa Uludağ Üniversitesi",
    "Yazılım Mühendisi",
  ],
  authors: [{ name: "Ravan Novruzov" }, { name: "Rəvan Novruzov" }],
  creator: "Ravan Novruzov",
  metadataBase: new URL("https://www.ravannovruzov.me"),
  alternates: {
    canonical: "https://www.ravannovruzov.me",
  },
  openGraph: {
    title: "Ravan Novruzov (Rəvan Novruzov) | Bilgisayar Mühendisi",
    description:
      "Ravan Novruzov (Rəvan Novruzov / Revan Novruzov) — Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi. Siber güvenlik, ağ teknolojileri ve web geliştirme.",
    url: "https://www.ravannovruzov.me",
    siteName: "Ravan Novruzov",
    locale: "tr_TR",
    alternateLocale: ["az_AZ", "en_US"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ravan Novruzov (Rəvan Novruzov) | Bilgisayar Mühendisi",
    description:
      "Ravan Novruzov — Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ravan Novruzov",
  alternateName: ["Rəvan Novruzov", "Revan Novruzov"],
  url: "https://www.ravannovruzov.me",
  jobTitle: "Bilgisayar Mühendisliği Öğrencisi",
  description:
    "Bursa Uludağ Üniversitesi Bilgisayar Mühendisliği öğrencisi. Siber güvenlik, ağ teknolojileri ve web geliştirme alanlarında çalışıyor.",
  knowsAbout: [
    "Siber Güvenlik",
    "Ağ Teknolojileri",
    "Web Geliştirme",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bursa Uludağ Üniversitesi",
  },
  sameAs: [
    "https://github.com/ravan-novruzov",
    "https://www.linkedin.com/in/ravan-novruzov-8260772a5/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <body className="noise-bg min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
