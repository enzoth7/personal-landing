import Reveal from "@/components/Reveal";

const metrics = [
  {
    value: "+7",
    label: "Años de experiencia",
  },
  {
    value: "+20",
    label: "Trabajos realizados como Freelance",
  },
  {
    value: "+3 ",
    label: "Idiomas dominados",
  },
];
export default function MetricasSection() {
  return (
    <section aria-label="Señales de realidad" className="py-12 sm:py-14">
      <Reveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 divide-y divide-white/10 text-center sm:flex-row sm:gap-0 sm:divide-y-0 sm:divide-x sm:divide-white/10">
          {metrics.map((metric) => (
            <Reveal key={metric.value}>
              <div className="flex flex-col items-center gap-2 py-4 sm:px-10">
                <p className="text-4xl font-semibold leading-none text-slate-50 sm:text-5xl">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

