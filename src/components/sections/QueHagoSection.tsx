import Reveal from "@/components/Reveal";

export default function QueHagoSection() {
  return (
    <section id="que-hago" className="border-t border-slate-800/80 py-20 sm:py-24">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
                <Reveal className="flex flex-col gap-6">
                  <h2 className="font-display text-2xl text-slate-50 sm:text-3xl">
                    Qué hago
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-300">
                    Ordeno tu información financiera y administrativa para que tengas claridad
                    mensual y decisiones con respaldo, sin sumar complejidad.
                  </p>
                  <div className="mt-2 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      En la práctica:
                    </p>
                    <p className="text-base leading-relaxed text-slate-300">
                      Reviso la base y ordeno lo esencial.
                    </p>
                    <p className="text-base leading-relaxed text-slate-300">
                      Simplifico el flujo y reduzco pasos repetidos.
                    </p>
                    <p className="text-base leading-relaxed text-slate-300">
                      Dejo una lectura mensual clara y sostenida.
                    </p>
                  </div>
                </Reveal>

                <Reveal className="relative">
                  <div className="space-y-6">
                    <div className="relative rounded-[28px] border border-white/5 bg-white/[0.01] p-6 sm:p-8 lg:border-white/0 lg:bg-transparent">
                      <div className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-center lg:flex">
                        <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.015)_45%,rgba(255,255,255,0)_70%)]" />
                      </div>

                      <div className="flex flex-col gap-5 lg:hidden">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                          Lo que suele pasar
                        </p>
                        <div className="divide-y divide-white/10">
                          <p className="py-3 text-base font-medium text-slate-200/90">
                            Tengo varias planillas y ninguna me da confianza.
                          </p>
                          <p className="py-3 text-base font-medium text-slate-200/85">
                            Pierdo tiempo copiando datos y se me escapan errores.
                          </p>
                          <p className="py-3 text-base text-slate-200/80">
                            No sé cuánto gano realmente por mes.
                          </p>
                          <p className="py-3 text-sm font-medium text-slate-200/80">
                            La administración depende de mí y me frena.
                          </p>
                          <p className="py-3 text-sm text-slate-200/75">
                            Necesito orden sin meter un sistema complejo.
                          </p>
                          <p className="py-3 text-sm text-slate-200/70">
                            Me cuesta delegar porque está todo desordenado.
                          </p>
                        </div>
                      </div>

                      <div className="relative hidden min-h-[420px] lg:block">
                        <p className="absolute left-[10%] top-[10%] max-w-[22ch] text-base font-medium leading-snug text-slate-200/90">
                          Tengo varias planillas y ninguna me da confianza.
                        </p>
                        <p className="absolute right-[8%] top-[22%] max-w-[24ch] text-base leading-snug text-slate-200/80">
                          Pierdo tiempo copiando datos y se me escapan errores.
                        </p>
                        <p className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[18ch] text-2xl font-medium leading-tight text-slate-200/90">
                          No sé cuánto gano por mes.
                        </p>
                        <p className="absolute left-[12%] top-[62%] max-w-[20ch] text-[15px] leading-snug text-slate-200/80">
                          La administración depende de mí y me frena.
                        </p>
                        <p className="absolute left-[20%] bottom-[16%] max-w-[22ch] text-[15px] leading-snug text-slate-200/75">
                          Necesito orden sin meter un sistema complejo.
                        </p>
                        <p className="absolute right-[12%] bottom-[20%] max-w-[22ch] text-[15px] leading-snug text-slate-200/75">
                          Me cuesta delegar porque está todo desordenado.
                        </p>
                      </div>
                    </div>

                    <p className="border-t border-white/10 pt-4 text-sm text-slate-300/80">
                      Trabajo con lo que ya usás, ordeno la base y dejo un sistema simple, claro y sostenido.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
  );
}
