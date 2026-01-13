import Background from "@/src/components/sections/Background";
import ContactoSection from "@/src/components/sections/ContactoSection";
import HeroSection from "@/src/components/sections/HeroSection";
import MetricasSection from "@/src/components/sections/MetricasSection";
import QueHagoSection from "@/src/components/sections/QueHagoSection";
import QuienSoySection from "@/src/components/sections/QuienSoySection";
import TrabajosRealesSection from "@/src/components/sections/TrabajosRealesSection";
import SocialRail from "@/components/SocialRail";
import BackgroundDiagonals from "@/components/BackgroundDiagonals";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e1117]">
      {/* Fondo superior (solo hero) */}
      <BackgroundDiagonals />

      {/* Fondo base (tu luz / gradientes) */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      <div className="relative z-20">
        <SocialRail />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <main className="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
          <MetricasSection />
          <QueHagoSection />
          <QuienSoySection />
          <TrabajosRealesSection />
          <ContactoSection />
        </main>
      </div>
    </div>
  );
}

