import type { Metadata } from "next";
import {
  Rubik,
  Nunito,
  Caveat,
  Fraunces,
  Space_Grotesk,
  DM_Mono,
} from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Backyard Place — Website Proposal & Concepts",
  description:
    "Proposal and three design directions for The Backyard Place — Kalibo's favorite seafood grill bar. Prepared by Fishbone Creative Solutions.",
  authors: [{ name: "Fishbone Creative Solutions" }],
  openGraph: {
    title: "The Backyard Place — Website Proposal & Concepts",
    description:
      "Proposal and three website concepts for The Backyard Place, Kalibo's favorite seafood grill bar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${nunito.variable} ${caveat.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
