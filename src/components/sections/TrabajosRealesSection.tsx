"use client";

import { useMemo, useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";



type Trabajo = {
  title: string;
  subtitle: string;
  body: string;
  images: string[];
};



const trabajos: Trabajo[] = [
  {
    title: "Claridad financiera mensual",
    subtitle: "Operación chica · Control mensual",
    body:
      "Dejé una lectura mensual clara a partir de información que ya existía, sin duplicados ni versiones paralelas.",
    images: ["/ejemplos/1aa.png", "/ejemplos/1bb.png","/ejemplos/1cc.png"],

  },
  {
    title: "Presupuestos ágiles y confiables",
    subtitle: "Empresas de servicios · Presupuestación frecuente",
    body:
      "Ordené presupuestos para que calcular trabajos sea rápido, consistente y sin tener que “pensar todo de nuevo” cada vez.",
        images: ["/ejemplos/2aa.png","/ejemplos/2bb.png","/ejemplos/2cost.png"],

  },
  {
    title: "Sistemas simples que se pueden delegar",
    subtitle: "Equipos chicos · Tareas recurrentes",
    body:
      "Estructuré tareas, hábitos y procesos para que el sistema funcione incluso sin la persona que lo armó.",
        images: ["/ejemplos/3a.png", "/ejemplos/3b.png"],

  },
  {
    title: "Datos grandes convertidos en decisiones",
    subtitle: "Datos públicos · Análisis sectorial",
    body:
      "Transformé conjuntos de datos complejos en visualizaciones claras que permiten entender impactos y tendencias.",
        images: ["/ejemplos/4a.png","/ejemplos/4b.png","/ejemplos/4c.png"],

  },
      {
    title: "Ordenamiento de documentación",
    subtitle: "Trámite complejo · Gestión administrativa",
    body:
      "Busqué y encontré documentación dispersa, validé la información y armé un orden lógico para presentar un trámite de ciudadanía sin faltantes.",
        images: ["/ejemplos/6a.png","/ejemplos/6b.png","/ejemplos/6c.png"],

  },
        {
    title: "Planificación para proyecto personal",
    subtitle: "Uso personal · Control y planificación",
    body:
      "Estructuré un presupuesto con múltiples variables (ingresos, gastos fijos y variables, plazos) y un cronograma realista para tomar decisiones sin improvisar durante el viaje.",
        images: ["/ejemplos/7a.png"],

  },
    {
    title: "Información pública ordenada y usable",
    subtitle: "Proyecto comunitario · Datos abiertos",
    body:
      "Organicé datos abiertos y relevamientos para que cualquier persona pueda entenderlos y participar.",
        images: ["/ejemplos/5a.png","/ejemplos/5b.png"],

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
const [activeImageIndex, setActiveImageIndex] = useState(0);
const [isOpen, setIsOpen] = useState(false);

const active = useMemo(() => trabajos[activeIndex], [activeIndex]);

// cada vez que cambiás de trabajo, volvés a la primera imagen
useEffect(() => {
  setActiveImageIndex(0);
}, [activeIndex]);

  return (
    <section
      id="trabajos-reales"
      className="scroll-mt-24 border-t border-slate-800/80 pt-20 pb-24 sm:pt-24 sm:pb-28"
    >
      <div className="flex flex-col gap-8 sm:gap-12">
        <Reveal className="max-w-2xl space-y-3">
<div className="flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-300/40" />
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                Ejemplos reales
              </span>

</div>          
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Esto son algunos ejemplos de los problemas que soluciono.
          </p>
        </Reveal>

<Reveal>
  <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
    {/* Lista (pegada, cuadrada, sin colores) */}
    <div>
      <div className="border border-white/10">
        {trabajos.map((t, i) => {
          const isActive = i === activeIndex;

          return (
            <button
              key={t.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={[
                "w-full text-left",
                "px-4 py-4",
                "rounded-none", // puntas cuadradas
                "border-b border-white/10 last:border-b-0", // sin gap, separado por líneas
                "transition",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30",
                isActive
                  ? "bg-white/[0.05] text-slate-100"
                  : "bg-transparent text-slate-300 hover:bg-white/[0.03]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{t.title}</div>
                  <div className="truncate text-xs text-slate-500">{t.subtitle}</div>
                </div>

                {/* “brillo” blanco al hover (sin verde) */}
                <span
                  aria-hidden="true"
                  className={[
                    isActive ? "bg-white/70" : "bg-white/20",
                  ].join(" ")}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>

    {/* Detalle (sin contenedor tipo SaaS, solo imagen + texto) */}
    <div className="flex flex-col gap-5">
      <div
        className={[
          "relative overflow-hidden",
          "border border-white/10",
          // brillo blanco sutil (nada de emerald)
          "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_0_40px_rgba(255,255,255,0.06)]",
          "transition-shadow",
        ].join(" ")}
      >
       <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="relative aspect-[16/9] w-full cursor-zoom-in"
>

  <Image
  src={active.images[activeImageIndex]}
  alt={active.title}
  fill
  className="object-contain opacity-90"
  sizes="(min-width: 1024px) 900px, 100vw"
  quality={92}
/>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        </button>

{active.images.length > 1 && (
  <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
    {active.images.map((src, idx) => {
      const isOn = idx === activeImageIndex;
      return (
        <button
          key={src}
          type="button"
          onClick={() => setActiveImageIndex(idx)}
          className={[
            "relative h-14 w-20 shrink-0 overflow-hidden border transition",
            "border-white/10",
            isOn
              ? "shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
              : "opacity-80 hover:opacity-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16)]",
          ].join(" ")}
          aria-label={`Ver imagen ${idx + 1} de ${active.title}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
            quality={70}
          />
        </button>
      );
    })}
  </div>
)}





        {/* título simple, sin pill */}
      </div>

      <div className="border-l border-white/10 pl-4">
        <p className="text-sm leading-relaxed text-slate-300">
          {active.body}
        </p>
      </div>
    </div>
  </div>
</Reveal>



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
{isOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onClick={() => setIsOpen(false)}
  >
    <img
      src={active.images[activeImageIndex]}
      alt={active.title}
      className="max-h-[90vh] max-w-[90vw] object-contain"
    />
  </div>
)}





    </section>
  );
}
