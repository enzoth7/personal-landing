import Background from "@/src/components/sections/Background";
import ContactoSection from "@/src/components/sections/ContactoSection";
import HeroSection from "@/src/components/sections/HeroSection";
import QueHagoSection from "@/src/components/sections/QueHagoSection";
import QuienSoySection from "@/src/components/sections/QuienSoySection";
import SocialRail from "@/components/SocialRail";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1117]">
      <Background />
      <SocialRail />
      <HeroSection />
      <main className="mx-auto max-w-6xl px-6 pb-28 sm:px-10">
        <QueHagoSection />
        <QuienSoySection />
        <ContactoSection />
      </main>
    </div>
  );
}
