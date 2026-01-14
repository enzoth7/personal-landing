const DEBUG_NO_GLOW = false;

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0e1117]" />

      {!DEBUG_NO_GLOW && (
        <>
          {/* Subtle center lift (no fog) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_30%,rgba(0,0,0,0)_70%)]" />
          {/* Subtle side tint */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,23,0.12)_0%,rgba(11,15,23,0.0)_45%,rgba(11,15,23,0.12)_100%)]" />
        </>
      )}

      {/* Vignette (darker edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.45)_75%,rgba(0,0,0,0.6)_100%)]" />

      {/* Subtle noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
