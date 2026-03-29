"use client";

import { useLanguage } from "@/src/context/LanguageContext";

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-[#064e3b]/28" />
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function QueHagoSection() {
  const { t } = useLanguage();

  return (
    <section id="que-hago" className="border-t border-neutral-200 py-24 sm:py-28">
      <div className="flex flex-col gap-10 sm:gap-12">
        <div className="max-w-4xl space-y-8">
          <SectionEyebrow label={t.whatIDo.subtitle} />
          <h2 className="font-sans text-4xl font-black tracking-tighter text-neutral-900 sm:text-5xl lg:text-6xl">
            {t.whatIDo.title}
          </h2>
          <p className="max-w-3xl text-base font-light leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-lg">
            {t.whatIDo.description}
          </p>
        </div>

        <div className="max-w-4xl">
          <ul className="space-y-6">
            {t.whatIDo.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-base font-light leading-relaxed tracking-[0.04em] text-neutral-700 sm:text-lg"
              >
                <span className="mt-[0.9em] h-px w-10 shrink-0 bg-[#064e3b]/24" aria-hidden="true" />
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-4xl">
          <p className="pl-14 text-base font-light italic leading-relaxed tracking-[0.04em] text-neutral-500">
            {t.whatIDo.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
