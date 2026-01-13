"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";


type Trabajo = {
  title: string;
  subtitle: string;
  body: string;
  impact: [string, string];
  tags: [string, string];
  image: string;
};


const trabajos: Trabajo[] = [
  {
    title: "Orden de planillas financieras",
    subtitle: "Productora audiovisual · trabajo puntual",
    body:
      "Había varias planillas con datos duplicados y poca confianza. Ordené la base, definí reglas simples y un cierre mensual claro.",
    impact: ["Antes: varias planillas sin confianza", "Después: base única + cierre mensual claro"],
    tags: ["Base única", "Cierre mensual"],
    image: "/planillas.jpg",

  },
  {
    title: "Dashboard de control mensual",
    subtitle: "Cliente de Fiverr · servicio puntual",
    body:
      "El archivo era lento y confuso. Simplifiqué la estructura y armé un control mensual claro que se usa semanalmente.",
    impact: ["Antes: archivo lento y confuso", "Después: control mensual claro, uso semanal"],
    tags: ["Control mensual", "Uso semanal"],
        image: "/planillas.jpg",

  },
  {
    title: "Automatización simple de carga de datos",
    subtitle: "Trabajo puntual · procesos",
    body:
      "La carga manual era diaria. Implementé una automatización simple que redujo errores y tiempo perdido.",
    impact: ["Antes: carga manual diaria", "Después: automatización simple + menos errores"],
    tags: ["Carga automática", "Menos errores"],
        image: "/planillas.jpg",

  },
  {
    title: "Sistematización de procesos",
    subtitle: "Trabajo puntual · procesos",
    body:
      "Estandaricé pasos y reglas para que el proceso sea repetible y más fácil de delegar, sin sumar complejidad.",
    impact: ["Antes: todo dependía de una persona", "Después: proceso claro + menos fricción"],
    tags: ["Estandarizar", "Delegable"],
        image: "/planillas.jpg",

  },
];

const tabBase =
  "whitespace-nowrap border-b pb-1 text-sm transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-200/60 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950/60";

function TabButton({
  title,
  active,
  onClick,
  inert,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  inert?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={inert ? -1 : 0}
      aria-hidden={inert ? "true" : undefined}
      className={`${tabBase} ${
        active ? "border-slate-200/70 text-slate-100" : "border-transparent text-slate-400 hover:text-slate-200"
      }`}
    >
      {title}
    </button>
  );
}

export default function TrabajosRealesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => trabajos[activeIndex], [activeIndex]);

  return (
    <section
      id="trabajos-reales"
      className="scroll-mt-24 border-t border-slate-800/80 pt-20 pb-24 sm:pt-24 sm:pb-28"
    >
      <div className="flex flex-col gap-8 sm:gap-12">
        <Reveal className="max-w-2xl space-y-3">
          <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">Trabajos reales</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Intervenciones puntuales, hechas con criterio y foco en claridad operativa.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
            <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,180px)] lg:items-center">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium text-slate-100 sm:text-xl">{active.title}</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{active.subtitle}</p>

                <p className="text-base leading-relaxed text-slate-300">{active.body}</p>

                <div className="mt-2 flex flex-col gap-1 border-l border-white/10 pl-4 text-sm leading-relaxed text-slate-400">
                  {active.impact.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>

<div className="hidden lg:flex items-center justify-end">
  <div className="w-full max-w-[180px] overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02]">
    <div className="relative h-[110px] w-full">
      <Image
        src={active.image}
        alt=""
        fill
        className="object-cover opacity-80"
        sizes="180px"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
    </div>

    <div className="px-4 py-3">
      <div className="flex flex-col gap-2">
        {active.tags.map((tag) => (
          <span key={tag} className="text-xs uppercase tracking-[0.2em] text-slate-300/80">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="flex flex-col gap-3">
          {/* Mobile: scroll */}
          <div className="flex gap-4 overflow-x-auto pb-1 lg:hidden">
            {trabajos.map((t, i) => (
              <TabButton
                key={t.title}
                title={t.title}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Desktop: marquee */}
          <div className="hidden lg:block">
            <div className="marquee group overflow-hidden">
              {/* IMPORTANTE: gap en el track (no entre grupos) para evitar “huecos” raros */}
              <div className="marquee-track flex w-max items-center gap-4 pb-1">
                <div className="marquee-group flex shrink-0 items-center gap-4">
                  {trabajos.map((t, i) => (
                    <TabButton
                      key={`${t.title}-a`}
                      title={t.title}
                      active={activeIndex === i}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>

                <div className="marquee-group flex shrink-0 items-center gap-4" aria-hidden="true">
                  {trabajos.map((t, i) => (
                    <TabButton
                      key={`${t.title}-b`}
                      title={t.title}
                      active={activeIndex === i}
                      onClick={() => setActiveIndex(i)}
                      inert
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (min-width: 1024px) {
          .marquee-track {
            animation: marquee 42s linear infinite;
            will-change: transform;
          }

          .marquee:hover .marquee-track,
          .marquee:focus-within .marquee-track {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
