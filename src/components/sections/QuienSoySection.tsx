import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function QuienSoySection() {
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
                Quién soy
              </span>
</div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                Creo que cuando tenés un orden en tu trabajo, tenes claridad para decidir.
              </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Vengo de la administración real. De trabajar con números que tenían
                consecuencias, no con dashboards de muestra.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Por eso hoy priorizo sistemas simples, claros y que se sostengan en
                el tiempo.
              </p>
            </Reveal>
<Reveal className="relative">
                <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02]">
  <Image
    src="/presentehoy1.jpg"
    alt="Enzo trabajando hoy"
    fill
    quality={95}
                    className="object-cover opacity-90"
                    sizes="(min-width: 1024px) 360px, 80vw"
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
                    src="/admin.png"
                    alt="Foto administrativa"
                    fill
                    quality={95}
                    className="object-cover opacity-90"
                    sizes="(min-width: 1024px) 360px, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 flex flex-col gap-4 lg:order-2">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                2018–2021
              </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
  Administración y responsabilidad
</h2>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Entre 2018 y 2021 trabajé en como administrativo y auxiliar contable, tanto en el sector
                público como privado en Uruguay.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Ahí entendí algo clave: cuando la información está desordenada,
                todo se vuelve más pesado.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
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
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <Reveal className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                2021–2024
              </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
  Adaptación y flexibilidad
</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                En 2021 decidí dar un salto.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Me fui a estudiar idiomas a Europa, vivir en otra cultura y abrirme a otra forma de vida.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                No solo para conocer, sino para aprender a adaptarme, convivir con otros
                sistemas y crecer en habilidades.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Esa experiencia me dio algo más valioso que cualquier herramienta: criterio.
                Saber cuándo algo suma y cuándo es mejor descartarlo.
              </p>
            </Reveal>
            <Reveal className="relative">
<div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <div className="relative mx-auto w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02]">
                    <Image
                      src="/europa.jpg"
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
                2025
              </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
  Ordenamiento y criterio
</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                En 2025 decidí frenar, evaluar los ultimos años y reordenar mi camino. No fue
                gratis, pero fue necesario.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Hoy cuento con experiencia administrativa, formación técnica continua
                y una visión de como funciona el mundo real, no solo en papeles.
              </p>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Trabajo con personas y equipos que necesitan claridad para tomar decisiones.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
