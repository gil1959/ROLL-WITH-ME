import type { Metadata } from "next";
import { Yellowtail, DM_Serif_Display, Bodoni_Moda, Courier_Prime, Special_Elite, Dancing_Script } from "next/font/google";
import "./globals.css";

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const specialElite = Special_Elite({
  variable: "--font-typewriter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ROLL WITH ME | Photobooth Co.",
  description: "Four flashes. Two printed strips. One moment that does not disappear into your camera roll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yellowtail.variable} ${dmSerif.variable} ${bodoniModa.variable} ${courierPrime.variable} ${specialElite.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-courier bg-[#eae4d9] text-[#2c1f17] selection:bg-[#382b22] selection:text-[#e8dfd1]">
        {children}
      </body>
    </html>
  );
}








