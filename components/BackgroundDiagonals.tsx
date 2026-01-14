'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import React from 'react';

const PARALLAX_RANGE = 90;



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

type BandProps = {
  top: string;
  height: number;
  rotateDeg: number;
  speed: number;
  patternOpacity: number;
  scrollY: MotionValue<number>;
};

function Band({
  top,
  height,
  rotateDeg,
  speed,
  patternOpacity,
  scrollY,
}: BandProps) {
const y = useTransform(scrollY, (v) => (v * 0.03) * speed);
const x = useTransform(scrollY, (v) => (v * 0.015) * speed);



  const bgImage = React.useMemo(() => iconPatternDataUri(patternOpacity), [patternOpacity]);



  
  return (
    <div
      className="pointer-events-none absolute left-[-40%] right-[-40%] will-change-transform"
      style={{
        top,
        height,
        transform: `rotate(${rotateDeg}deg)`,
        transformOrigin: 'center',
      }}
    >

<motion.div
  className="h-full w-full will-change-transform"
  style={{
    y,
    x, // 👈 esto hace que “viaje” diagonal y se perciba más
    backgroundImage: bgImage,
    backgroundRepeat: 'repeat',
    backgroundSize: '240px 120px',
    mixBlendMode: 'soft-light',
    opacity: 0.65,
  }}
/>
    </div>
  );
}

export default function BackgroundDiagonals() {
  const { scrollY } = useScroll();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
    >
      <Band
        top="5vh"
        height={220}
        rotateDeg={-12}
        speed={5}
        patternOpacity={0.04}
        scrollY={scrollY}
      />
      <Band
        top="45%"
        height={260}
        rotateDeg={-12}
        speed={5}
        patternOpacity={0.035}
        scrollY={scrollY}
      />
      <Band
        top="80%"
        height={240}
        rotateDeg={-12}
        speed={5}
        patternOpacity={0.03}
        scrollY={scrollY}
      />
    </div>
  );
}
