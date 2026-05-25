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
  title: {
    template: "%s | KPZone Stays - Hostels in Greater Noida",
    default: "KPZone Stays - Find The Best Hostels in Greater Noida",
  },
  description:
    "Discover the best boys and girls hostels in Greater Noida. Affordable, safe, and comfortable PGs and rooms for students and professionals near you.",
  keywords: [
    "hostels in Greater Noida",
    "boys hostel",
    "girls hostel",
    "PG in Greater Noida",
    "student accommodation",
    "KPZone Stays",
  ],
  icons: {
    icon: "/favicon.svg",
  },
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
