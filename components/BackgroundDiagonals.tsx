'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

function svgToDataUri(svg: string) {
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
  return `url("data:image/svg+xml,${encoded}")`;
}

function iconPatternDataUri(opacity = 0.05) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120">
    <g fill="rgba(255,255,255,${opacity})">
      <path d="M22 26h44c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H22c-2.2 0-4-1.8-4-4V30c0-2.2 1.8-4 4-4zm6 40h32v6H28v-6z"/>
      <path d="M98 34h18l6 6h28c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H98c-2.2 0-4-1.8-4-4V38c0-2.2 1.8-4 4-4z"/>
      <path d="M186 26h26l10 10v40c0 2.2-1.8 4-4 4h-32c-2.2 0-4-1.8-4-4V30c0-2.2 1.8-4 4-4zm24 2v10h10"/>
      <path d="M186 52h36v4h-36zm0 10h36v4h-36zm0 10h24v4h-24z"/>
    </g>
  </svg>
  `.trim();

  return svgToDataUri(svg);
}

function Band({
  top,
  height,
  rotateDeg,
  speed,
  patternOpacity,
}: {
  top: number;
  height: number;
  rotateDeg: number;
  speed: number;
  patternOpacity: number;
}) {
  const { scrollY } = useScroll();

  // CLAMP: no se va al medio de la página
  const y = useTransform(scrollY, [0, 1200], [0, 120 * speed], { clamp: true });

  const bgImage = iconPatternDataUri(patternOpacity);

  return (
    <div
      className="pointer-events-none absolute left-[-35%] right-[-35%]"
      style={{
        top,
        height,
        transform: `rotate(${rotateDeg}deg)`, // rotación fuera de framer
        transformOrigin: 'center',
      }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          y, // solo movimiento acá
          backgroundImage: bgImage,
          backgroundRepeat: 'repeat',
          backgroundSize: '240px 120px',
          opacity: 0.6,
          mixBlendMode: 'soft-light',
          filter: 'blur(0.35px)',
        }}
      />
    </div>
  );
}

export default function BackgroundDiagonals() {
  return (
    // IMPORTANTE: solo arriba
    <div className="pointer-events-none fixed left-0 top-0 z-0 h-[520px] w-full overflow-hidden">
      {/* Fade hacia abajo para que muera antes del contenido */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e1117]" />

      <Band top={-120} height={240} rotateDeg={-12} speed={0.8} patternOpacity={0.045} />
      <Band top={120}  height={260} rotateDeg={-12} speed={1.0} patternOpacity={0.040} />
      <Band top={320}  height={220} rotateDeg={-12} speed={1.2} patternOpacity={0.035} />
    </div>
  );
}
