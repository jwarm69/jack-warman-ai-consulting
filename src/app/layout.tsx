import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack Warman AI Consulting - AI Expert Across the Universe",
  description: "Transform your small business with cutting-edge AI solutions. Jack Warman brings universal AI expertise to help SMBs unlock growth, efficiency, and competitive advantage.",
  keywords: ["AI consulting", "artificial intelligence", "small business AI", "machine learning", "automation", "Jack Warman"],
  authors: [{ name: "Jack Warman" }],
  creator: "Jack Warman",
  openGraph: {
    title: "Jack Warman AI Consulting - AI Expert Across the Universe",
    description: "Transform your small business with cutting-edge AI solutions from universal AI expert Jack Warman.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Warman AI Consulting",
    description: "AI Expert Across the Universe - Transforming SMBs with cutting-edge AI solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
