import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* PNG centrado (detrás del texto) */}
    <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
      {/* Halo */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          className="
            mb-[40px]
            h-[820px] w-[820px]
            rounded-full
            blur-2xl
            translate-x-0
            md:translate-x-24
            lg:translate-x-40
            bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0.0)_60%)]
          "
        />
      </div>

      <Image
        src="/autor.png"
        alt="Retrato profesional"
        width={1100}
        height={1400}
        priority
        className="
          mb-[-30px]
          w-[min(860px,94vw)]
          h-auto
          object-contain
          opacity-95
          translate-x-0
          md:translate-x-24
          lg:translate-x-40
          drop-shadow-[0_70px_140px_rgba(0,0,0,0.7)]
        "
      />
    </div>



      {/* Overlay extra para asegurar legibilidad del texto */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,23,0.92)_0%,rgba(11,15,23,0.78)_35%,rgba(11,15,23,0.35)_70%,rgba(11,15,23,0.15)_100%)]" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6">
        <div className="w-full text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-yellow-400">
      <span className="h-[1px] w-10 bg-white/15" />
      Enzo Thome · Data & Automation
    </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Ordeno sistemas.<br />
            Aclaro números.
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base text-slate-300 md:mx-0 md:text-lg">
            Ayudo a emprendedores y PYMES a organizar su información, controlar su
            dinero y simplificar procesos con Excel, Google Sheets y automatizaciones simples.
          </p>



          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200">
              Ver ejemplos reales
            </button>
    <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/25 hover:bg-white/5">
      Contactarme
    </button>
          </div>
        </div>
      </div>
    </section>
  );
}
