import Reveal from "@/components/Reveal";

export default function ContactoSection() {
  return (
    <section
              id="contacto"
              className="border-t border-slate-800/80 py-20 sm:py-24"
            >
              <Reveal className="flex max-w-3xl flex-col gap-4">
                <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">
                  Contacto
                </h2>
                <p className="text-base leading-relaxed text-slate-300">
                  Contacto simple y directo para evaluar tu caso sin fricción.
                </p>
              </Reveal>
            </section>
  );
}
