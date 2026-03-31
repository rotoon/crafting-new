import type { Metadata } from "next";
import { DM_Sans, Outfit, Syncopate } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

const pbio = localFont({
  src: "../../public/fonts/pbio.ttf",
  variable: "--font-pbio",
});

export const metadata: Metadata = {
  title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
  description: "CRAFTING LAB - We provide online marketing services by a team of experienced people. Build a strong brand in the online business world through creative content and data analytics.",
  icons: {
    icon: "/assets/brand/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} ${syncopate.variable} ${pbio.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
