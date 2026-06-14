import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Studio Plot — лендинги и сайты под ключ",
  description:
    "Разрабатываю лендинги и сайты на заказ. Без конструкторов, только код.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sora.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0A0A0A] text-[#F5F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}
