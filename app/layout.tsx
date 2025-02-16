import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { AppProvider } from "./context";
import { Toaster } from "sonner";

const GTM_ID = "G-FPF0F36J1B";

const wonderfulBranding = localFont({
  src: "../public/Wonderful Branding.ttf",
  variable: "--font-wonderful-branding",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XK Malerfirma | Profesjonell Maling og Oppussing i Oslo",
  description:
    "Profesjonelt malerfirma i Oslo som tilbyr kvalitetstjenester innen maling, tapetsering og oppussing. Få et gratis prisoverslag i dag.",
  keywords:
    "malerfirma oslo, profesjonell maler, oppussing, tapetsering, maling innendørs, maling utendørs, kvalitetsmaling",
  openGraph: {
    title: "XK Malerfirma | Profesjonell Maling og Oppussing i Oslo",
    description:
      "Profesjonelt malerfirma i Oslo som tilbyr kvalitetstjenester innen maling, tapetsering og oppussing. Få et gratis prisoverslag i dag.",
    type: "website",
    locale: "nb_NO",
    siteName: "XK Malerfirma",
  },
  alternates: {
    canonical: "https://xkmalerfirma.no",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "XK Malerfirma" }],
  generator: "Next.js",
  applicationName: "XK Malerfirma",
  referrer: "origin-when-cross-origin",
  creator: "XK Malerfirma",
  publisher: "XK Malerfirma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${wonderfulBranding.variable} ${geistSans.variable} font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AppProvider>{children}</AppProvider>
        <Toaster />
      </body>
    </html>
  );
}



