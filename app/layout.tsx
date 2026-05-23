import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"; // Fixed: Updated to match your absolute path configuration
import "@/app/globals.css";

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

// Your unified Cloudinary logo URL
const LOGO_URL = "https://res.cloudinary.com/dinnmia6e/image/upload/v1775933355/logo-minimal_2_t2zb9g.png";

export const metadata: Metadata = {
  title: "KP Reliable Technique India Pvt. Ltd. | Quality & Inspection Services",
  description: "Your trusted partner in Third Party Inspection (TPI), Quality Assurance, Quality Control, and technical auditing services across India.",
  keywords: ["KP Reliable", "Third Party Inspection", "TPI India", "Quality Inspection", "QA QC Services"],
  metadataBase: new URL("https://www.kpreliableindia.com"),
  openGraph: {
    title: "KP Reliable Technique India Pvt. Ltd.",
    description: "Your trusted partner in Third Party Inspection (TPI), Quality Assurance, and technical auditing services across India.",
    url: "https://www.kpreliableindia.com",
    siteName: "KP Reliable",
    images: [
      {
        url: LOGO_URL,
        width: 1200, 
        height: 630,
        alt: "KP Reliable Technique India Pvt. Ltd.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KP Reliable Technique India Pvt. Ltd.",
    description: "Your trusted partner in Third Party Inspection (TPI) and Quality Services.",
    images: [LOGO_URL],
  },
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
        <Footer />
      </body>
    </html>
  );
}   