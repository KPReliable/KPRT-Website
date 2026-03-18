import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Header from "@/app/components/Header";
import "@/app/styles/header.css";
import "@/app/globals.css"
// import "./globals.css"; // your existing global styles

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QualityInspect | Inspection & Quality Services",
  description: "Your trusted partner in quality & inspection services across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}