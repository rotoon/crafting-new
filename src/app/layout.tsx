import type { Metadata } from "next";
import { Outfit, Syncopate } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./works/detail.css";

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

const fcMinimal = localFont({
  src: [
    {
      path: "../../public/fonts/FC-Minimal/FC Minimal Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FC-Minimal/FC Minimal Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fc-minimal",
});

const pbio = localFont({
  src: "../../public/fonts/pbio.ttf",
  variable: "--font-pbio",
});

export const metadata: Metadata = {
  title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
  description:
    "CRAFTING LAB - We provide online marketing services by a team of experienced people. Build a strong brand in the online business world through creative content and data analytics.",
  icons: {
    icon: "/assets/brand/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${syncopate.variable} ${fcMinimal.variable} ${pbio.variable} antialiased`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
