"use client";

import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import SystemMap from "./SystemMap";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white">
      {/* Background System Architecture Layer */}
      <SystemMap />

      <div className="relative z-10 grid min-h-screen w-full grid-cols-1 gap-16 px-6 pt-25 pb-66 text-center sm:px-10 sm:pt-20 sm:pb-20 md:grid-cols-2 md:gap-0 md:px-12 md:py-0">
        <div className="order-1 flex items-start justify-center md:order-2 md:items-center md:justify-end md:pr-28">
          <div className="flex max-w-md flex-col items-center md:w-full md:max-w-[36rem] md:items-end md:text-right xl:max-w-[40rem]">
            <h1 className="font-sans text-6xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl md:max-w-[min-content] md:text-7xl xl:text-[9.5rem]">
              <span className="block text-right opacity-90">{t.hero.titleLine1}</span>
              <span className="block opacity-80 md:ml-auto">{t.hero.titleLine2}</span>
              <span className="block opacity-90">{t.hero.titleLine3}</span>
            </h1>
            <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent md:mt-8 md:w-24 md:bg-gradient-to-l md:from-white/40 md:via-transparent md:to-transparent" />
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/60 sm:text-base md:mt-8 md:max-w-sm">
              {t.hero.description}
            </p>
          </div>
        </div>

        <div className="order-2 flex items-start justify-center md:order-1 md:items-center">
          <div className="flex max-w-sm flex-col items-center text-center">
            {/* Raiz del Mindmap a partir de este botón */}
            <Link
              href="/onboarding"
              className="group relative rounded-[1.125rem] border border-white/10 bg-white/5 px-12 py-5 text-sm font-medium tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {t.hero.ctaPrimary}
              {/* Sutil resplandor interior */}
              <div className="absolute inset-0 rounded-[1.125rem] bg-gradient-to-tr from-white/0 to-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </Link>
            <p className="mt-6 max-w-[18rem] text-center text-[10px] font-extralight uppercase tracking-[0.3em] text-white/30">
              {t.hero.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
