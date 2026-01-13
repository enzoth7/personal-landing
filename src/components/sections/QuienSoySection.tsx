import Reveal from "@/components/Reveal";

export default function QuienSoySection() {
  return (
    <section
              id="quien-soy"
              className="border-t border-slate-800/80 py-20 sm:py-24"
            >
              <Reveal className="flex max-w-3xl flex-col gap-4">
                <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">
                  Quién soy / Por qué hago esto
                </h2>
                <p className="text-base leading-relaxed text-slate-300">
                  Experiencia en administración, orden de procesos y criterio
                  práctico para implementar mejoras que se sostienen.
                </p>
              </Reveal>
            </section>
  );
}
