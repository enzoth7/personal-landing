import MobileLanguageToggle from "@/components/MobileLanguageToggle";
import Navbar from "@/components/Navbar";
import SocialRail from "@/components/SocialRail";
import Background from "@/src/components/sections/Background";
import ContactoSection from "@/src/components/sections/ContactoSection";
import HeroSection from "@/src/components/sections/HeroSection";
import MetricasSection from "@/src/components/sections/MetricasSection";
import QueHagoSection from "@/src/components/sections/QueHagoSection";
import TestimoniosSection from "@/src/components/sections/TestimoniosSection";
import ToolsMarquee from "@/src/components/sections/ToolsMarquee";
import VideoSection from "@/src/components/sections/VideoSection";
import { LanguageProvider } from "@/src/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#171717]">
        <div className="absolute inset-0 z-0">
          <Background variant="wallpaper" />
        </div>

        <div className="relative z-40">
          <SocialRail />
        </div>

        <div className="relative z-50">
          <Navbar />
        </div>

        <MobileLanguageToggle />

        <div className="relative z-20">
          <HeroSection />
          <div className="relative z-30 px-3 pb-24 sm:px-5 sm:pb-28 lg:px-8">
            <main className="relative z-30 mx-auto max-w-[1400px] overflow-hidden bg-[#FAF9F6] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <div className="px-6 sm:px-10 lg:px-12">
                <MetricasSection />
                <VideoSection />
                <QueHagoSection />
                <TestimoniosSection />
                <ToolsMarquee />
                <ContactoSection />
              </div>
            </main>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
