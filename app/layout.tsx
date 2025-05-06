import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Plants Doc",
  description: "Application for documenting plants",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: [
        "next15",
        "pwa",
        "next-pwa",
        "plant-app",
        "plant-documentation",
        "plant-collection",
    ],
    category: "application",
    authors: [
        {
            name: "Monika Cilińska",
            url: "https://www.linkedin.com/in/monika-cilinska/",
        },
    ],
    icons: [{ rel: "icon", url: "/images/web-app-manifest-192x192.png" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
