import type { Metadata } from "next";
import {
  Inter,
  Outfit,
} from "next/font/google";

import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "KPZone Stays",
  description: "Find Your Perfect Stay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
