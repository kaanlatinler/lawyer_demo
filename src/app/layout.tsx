import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Kaya & Partners — Hukuk ve Danışmanlık",
  description:
    "Ticaret, gayrimenkul ve şirketler hukuku alanında kurumsal temsil ve danışmanlık.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans bg-[#F9F8F6] text-[#141413] selection:bg-[#141413] selection:text-[#F9F8F6] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
