import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: "Goff-Yu",
  description: "Goff-Yu helps organisations build stronger brands, products and digital experiences through strategy, design and marketing.",
  metadataBase: new URL("https://goff-yu.com"),
  openGraph: {
    title: "Goff-Yu",
    description: "Goff-Yu helps organisations build stronger brands, products and digital experiences through strategy, design and marketing.",
    url: "https://goff-yu.com",
    siteName: "Goff-Yu",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Goff-Yu",
    description: "Goff-Yu helps organisations build stronger brands, products and digital experiences through strategy, design and marketing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
