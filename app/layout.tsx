import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
  title: "Enzo Thome | Arquitecto de Datos y Automatización",
  description:
    "Estratega en automatización de procesos y optimización de datos. Transformo el caos operativo en sistemas eficientes para PYMES y emprendedores que buscan escalar sin fricciones.",
  keywords: ["automatización de procesos", "n8n", "sistemas de datos", "optimización de PYMES", "arquitecto de software", "Uruguay", "España"],
  openGraph: {
    title: "Enzo Thome | Sistemas y Automatización de Alto Impacto",
    description: "Multiplicando la eficiencia de tu negocio a través de sistemas inteligentes y deterministas.",
    url: "https://enzothome.com", // Cambiar por tu dominio final
    siteName: "Enzo Thome",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzo Thome | Arquitecto de Sistemas",
    description: "Sistemas escalables para emprendedores y empresas.",
  },
  robots: {
    index: true,
    follow: true,
  }
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
