"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function QuienSoySection() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.whoAmI.title1,
      description: t.whoAmI.desc1,
    },
    {
      title: t.whoAmI.title2,
      description: t.whoAmI.desc2,
    },
  ];

  return (
    <section id="quien-soy" className="border-t border-slate-800/80 py-20 sm:py-24">
      <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-300/40" />
                <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                  {t.whoAmI.subtitle}
                </span>
              </div>
            </div>

            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-l-2 border-emerald-500/30 pl-6">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/presente.jpg"
                alt="Enzo Thome"
                fill
                quality={100}
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 80vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.16)_45%,rgba(2,6,23,0.72)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
