"use client";

import { Fragment } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px w-10 bg-[#064e3b]/28" />
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

export default function MetricasSection() {
  const { t } = useLanguage();

  const metrics = [
    {
      id: "uptime",
      value: "20+",
      label: t.precisionMetrics.uptimeLabel,
    },
    {
      id: "tasks",
      value: "5k",
      label: t.precisionMetrics.tasksLabel,
    },
    {
      id: "turnaround",
      value: "x3",
      label: t.precisionMetrics.turnaroundLabel,
    },
    {
      id: "hours-saved",
      value: "50h+",
      label: t.precisionMetrics.hoursSavedLabel,
    },
  ];

  return (
    <section aria-label="Metricas de precision" className="py-24 sm:py-28 border-t border-neutral-200">
      <div className="flex flex-col">
        <SectionEyebrow label={t.precisionMetrics.eyebrow} />
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 xl:flex xl:flex-row xl:items-center xl:gap-8">
          {metrics.map((metric, index) => (
            <Fragment key={metric.id}>
              <div className="flex flex-1 items-center justify-center">
                <div className={`flex flex-col items-center text-center`}>
                  <p className="font-sans text-4xl font-black tracking-tighter text-neutral-900 sm:text-6xl">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-[10px] font-light uppercase tracking-widest leading-5 text-slate-600 sm:text-xs sm:leading-6">
                    {metric.label}
                  </p>
                </div>
              </div>
              {index < metrics.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="hidden h-20 w-[1px] shrink-0 self-center bg-neutral-200 xl:block"
                />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
