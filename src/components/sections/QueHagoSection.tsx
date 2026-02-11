"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/src/context/LanguageContext";

export default function QueHagoSection() {
  const { t } = useLanguage();
  return (
    <section id="que-hago" className="border-t border-slate-800/80 py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:gap-12 sm:px-10">
        <Reveal className="max-w-3xl space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-300/40" />
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                {t.whatIDo.subtitle}
              </span>
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              {t.whatIDo.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.whatIDo.description}
          </p>
        </Reveal>

        <Reveal className="max-w-3xl">
          <ul className="space-y-4">
            {t.whatIDo.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-white/75 sm:text-lg">
                <span className="mt-[0.8em] h-px w-6 bg-emerald-300/30" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="max-w-3xl">
          <p className="text-base leading-relaxed text-slate-300">
            {t.whatIDo.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
