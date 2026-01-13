import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function QuienSoySection() {
  return (
    <section id="quien-soy" className="border-t border-slate-800/80 py-20 sm:py-24">
      <div className="flex flex-col gap-16 lg:gap-20">
        <div className="relative">
          <div
            aria-hidden="true"
  className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <Reveal className="flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Presente
              </p>
              <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">
                Quién soy / Por qué hago esto
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Hoy hago esto porque ya vi lo que pasa cuando no hay orden.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Vengo de la administración real. De trabajar con números que tenían
                consecuencias, no con dashboards de muestra.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Por eso hoy priorizo sistemas simples, claros y que se sostengan en
                el tiempo.
              </p>
            </Reveal>
<Reveal className="relative">
  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10">
    <Image
      src="/presentehoy.jpg"
      alt="Enzo trabajando hoy"
      fill
      quality={90}
      className="object-cover opacity-90"
      sizes="(min-width: 1024px) 420px, 90vw"
      priority
    />
    {/* overlay para integrarla al fondo */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
  </div>
</Reveal>

          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
  className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <Reveal className="order-2 lg:order-1">
<div className="grid gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
                  <Image
                    src="/admin-1.jpg"
                    alt="Foto administrativa"
                    fill
                    quality={90}
                    className="object-cover opacity-90"
                    sizes="(min-width: 1024px) 18vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                2018–2021
              </p>
<h3 className="mt-0 text-xl font-medium uppercase tracking-[0.08em] text-yellow-400 sm:text-2xl">
  Administración y responsabilidad
</h3>

              <p className="text-base leading-relaxed text-slate-300">
                Entre 2018 y 2021 trabajé en administración, tanto en el sector
                público como privado, en Paysandú.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Ahí entendí algo clave: cuando la información está desordenada,
                todo se vuelve más pesado.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Los errores cuestan tiempo, plata y energía.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
  className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] opacity-60"
          />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <Reveal className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                2021–2024
              </p>
<h3 className="mt-0 text-xl font-medium uppercase tracking-[0.08em] text-yellow-400 sm:text-2xl">
  Adaptación, idiomas y flexibilidad
</h3>
              <p className="text-base leading-relaxed text-slate-300">
                En 2021 decidí salir de ese esquema.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Me fui a trabajar, estudiar inglés y vivir en otros países, sin red.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                No para viajar, sino para aprender a adaptarme, convivir con otros
                sistemas y entender cómo trabajan personas distintas.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Esa experiencia me dio algo más valioso que herramientas: criterio.
                Saber cuándo algo suma y cuándo solo complica.
              </p>
            </Reveal>
            <Reveal className="relative">
<div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02]">
                    <Image
                      src="/Europa.jpg"
                      alt="Europa"
                      fill
                      quality={90}
                      className="object-cover opacity-90"
                      sizes="(min-width: 1024px) 12vw, 100vw"
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
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
                <Image
                  src="/hoy.jpg"
                  alt="Foto actual"
                  fill
                  quality={90}
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                2025
              </p>
              <h3 className="mt-0 text-xl font-medium uppercase tracking-[0.08em] text-yellow-400 sm:text-2xl">
  Ordenamiento y criterio
</h3>
              <p className="text-base leading-relaxed text-slate-300">
                En 2025 decidí frenar, repensar y reordenar mi camino. No fue
                gratis, pero fue necesario.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Hoy combino experiencia administrativa, formación técnica continua
                y una obsesión sana por el orden.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Trabajo con personas y equipos que necesitan claridad, no más ruido.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
