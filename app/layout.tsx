import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";

import "./globals.css";
import { AppProvider } from "./context";
import { Toaster } from "sonner";

const wonderfulBranding = localFont({
  src: "../public/Wonderful Branding.ttf",
  variable: "--font-wonderful-branding",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XK Malerfirma",
  description: "XK Malerfirma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wonderfulBranding.variable} ${geistSans.variable} font-sans antialiased`}
      >
        <AppProvider>{children}</AppProvider>
        <Toaster />
      </body>
    </html>
  );
}



