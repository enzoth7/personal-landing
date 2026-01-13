

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">


      {/* Base oscura */}
      <div className="absolute inset-0 bg-[#0e1117]" />

      {/* Spotlight central (más claro) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0.02)_45%,rgba(0,0,0,0)_70%)]" />

      {/* Viñeta (bordes más oscuros) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.65)_100%)]" />

      {/* Tinte sutil (da cohesión azul/gray) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17] via-transparent to-[#0b0f17] opacity-60" />

      {/* Noise sutil */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
