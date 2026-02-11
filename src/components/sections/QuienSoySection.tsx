"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/src/context/LanguageContext";
import Image from "next/image";

export default function QuienSoySection() {
  const { t } = useLanguage();
  return (
    <section id="quien-soy" className="border-t border-slate-800/80 py-14 sm:py-16">
      <div className="flex flex-col gap-12 lg:gap-14">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <Reveal className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-300/40" />
                <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                  {t.whoAmI.subtitle}
                </span>
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {t.whoAmI.title1}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc1}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc2}
              </p>
            </Reveal>
            <Reveal className="relative">
              <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
                <Image
                  src="/presente.jpg"
                  alt="Presente"
                  fill
                  quality={100}
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 950px, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>

            </Reveal>

          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="grid gap-4">
                <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
                  <Image
                    src="/admin2.png"
                    alt="Foto administrativa"
                    fill
                    quality={95}
                    className="object-cover opacity-90"
                    sizes="(min-width: 1024px) 950px, 200vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                {t.whoAmI.subtitle2}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {t.whoAmI.title2}
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc3}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc4}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc5}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <Reveal className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                {t.whoAmI.subtitle3}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {t.whoAmI.title3}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc6}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc7}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc8}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc9}
              </p>
            </Reveal>
            <Reveal className="relative">
              <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02]">
                    <Image
                      src="/europa1.jpg"
                      alt="Europa"
                      fill
                      quality={90}
                      className="object-cover opacity-90"
                      sizes="(min-width: 1024px) 360px, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
                <Image
                  src="/hoy.png"
                  alt="Foto actual"
                  fill
                  quality={90}
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 360px, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                {t.whoAmI.subtitle4}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {t.whoAmI.title4}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc10}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc11}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                {t.whoAmI.desc12}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
