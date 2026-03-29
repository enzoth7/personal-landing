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

export const metadata: Metadata = {
  title: "Workflow Waves | Arquitectura de Datos y Automatización",
  description:
    "Workflow Waves diseña sistemas eficientes y escalables para automatización de procesos, arquitectura de datos y operaciones con menos fricción y más control.",
  keywords: [
    "Workflow Waves",
    "automatización de procesos",
    "arquitectura de datos",
    "sistemas eficientes",
    "sistemas escalables",
    "n8n",
    "optimización de PYMES",
    "Uruguay",
    "España",
  ],
  icons: {
    icon: "/logo1.png",
  },
  openGraph: {
    title: "Workflow Waves | Arquitura de Datos y Automatización",
    description:
      "Workflow Waves crea sistemas inteligentes, eficientes y escalables para operaciones que necesitan crecer con precisión.",
    url: "workflowwaves.vercel.app",
    siteName: "Workflow Waves",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Waves | Arquitectura de Datos y Automatización",
    description:
      "Sistemas eficientes y escalables para empresas que buscan crecer con control.",
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
