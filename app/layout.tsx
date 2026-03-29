import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SEO_DESCRIPTION =
  "Workflow Waves dise\u00f1a sistemas escalables de automatizaci\u00f3n, datos y operaciones para empresas que quieren crecer con control.";

export const metadata: Metadata = {
  title: "Workflow Waves | Arquitectura de Datos y Automatizaci\u00f3n",
  description: SEO_DESCRIPTION,
  keywords: [
    "Workflow Waves",
    "automatizaci\u00f3n de procesos",
    "arquitectura de datos",
    "sistemas eficientes",
    "sistemas escalables",
    "n8n",
    "optimizaci\u00f3n de PYMES",
    "Uruguay",
    "Espa\u00f1a",
  ],
  icons: {
    icon: "/logo1.png",
  },
  openGraph: {
    title: "Workflow Waves | Arquitectura de Datos y Automatizaci\u00f3n",
    description: SEO_DESCRIPTION,
    url: "https://workflowwaves.vercel.app",
    siteName: "Workflow Waves",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Waves | Arquitectura de Datos y Automatizaci\u00f3n",
    description: SEO_DESCRIPTION,
    images: ["/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plexSans.variable} ${newsreader.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
