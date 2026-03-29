import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Al habilitar esta configuración permitimos que Next.js pida imágenes de mayor ancho 
     para densidades Retina y controlamos mejor la compresión. */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
  },
};

export default nextConfig;
