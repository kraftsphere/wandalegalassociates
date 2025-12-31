import { DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import SmoothScroll from "@/components/ui/lenis/smoothScroll";
import MobileNavbar from "@/components/layout/Navbar/MobileNavbar";
import LaunchOverlay from "@/components/Launch/LaunchOverlay";

// Load fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// SEO Metadata
export const metadata = {
  title:
    "W and A Legal Associates | Trusted Legal Experts in Mumbai Since 1997",

  description:
    "W and A Legal Associates is a Mumbai-based full-service law firm established in 1997, offering expert legal services in civil, criminal, property, corporate, and dispute resolution matters with integrity and professionalism.",

  keywords: [
    "W and A Legal Associates",
    "law firm in Mumbai",
    "legal services Mumbai",
    "civil lawyer Mumbai",
    "criminal lawyer Mumbai",
    "property lawyer Mumbai",
    "corporate legal advisory",
    "real estate legal services",
    "litigation lawyers India",
    "trusted advocates Mumbai",
    "stamp duty and registration",
    "legal dispute resolution",
    "arbitration services Mumbai",
    "legal consultation India",
    "experienced lawyers Mumbai",
    "full-service law firm",
    "legal expertise India",
    "legal documentation drafting",
    "family and matrimonial law",
    "cyber law and digital offences",
    "white collar crime defense",
    "estate planning and wills",
    "NGO legal support",
    "startup legal advisory",
    "legal ethics and professionalism",
  ],

  authors: [{ name: "W and A Legal Associates" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "W and A Legal Associates | Full-Service Law Firm in Mumbai",
    description:
      "Established in 1997, W and A Legal Associates provides ethical, practical, and result-oriented legal solutions across civil, criminal, property, corporate, and arbitration matters.",
    url: "https://www.wandalegalassociates.in",
    siteName: "W and A Legal Associates",
    images: [
      {
        url: "https://www.wandalegalassociates.in/ogimage.png",
        width: 1200,
        height: 630,
        alt: "W and A Legal Associates - Trusted Legal Expertise",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "W and A Legal Associates | Trusted Legal Expertise Since 1997",
    description:
      "Mumbai-based full-service law firm delivering ethical and result-oriented legal solutions across diverse practice areas.",
    images: ["https://www.wandalegalassociates.in/ogimage.png"],
  },

  alternates: {
    canonical: "https://www.wandalegalassociates.in",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} antialiased`}>
        {/* <LaunchOverlay /> */}
        <SmoothScroll />
        <Navbar />
        <MobileNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
