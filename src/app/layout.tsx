 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inzamam Sandhu - Creative Mind in Design, Marketing & Development",
  description: "Portfolio of Inzamam Sandhu, a creative professional skilled in Graphic Designing, Digital Marketing, SEO Optimization, and Web Development.",
  keywords: "Graphic Design, Digital Marketing, SEO, Web Development, Portfolio, Inzamam Sandhu",
  authors: [{ name: "Inzamam Sandhu" }],
  icons: {
    icon: "/inzi.ico",
    shortcut: "/inzi.ico",
    apple: "/inzi.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
