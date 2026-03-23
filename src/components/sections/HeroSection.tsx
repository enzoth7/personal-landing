"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-white"
    >
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.94)_0%,rgba(7,10,16,0.84)_28%,rgba(7,10,16,0.52)_58%,rgba(7,10,16,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0)_0%,rgba(15,23,42,0.12)_45%,rgba(15,23,42,0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[84rem] items-center px-6 py-28 sm:px-10 sm:py-32">
        <div className="w-full">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-100/80">
              <span className="h-[1px] w-8 bg-emerald-300/60" />
              {t.hero.subtitle}
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t.hero.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(135deg,#05070b_0%,#09111f_45%,#111827_100%)] shadow-[0_35px_120px_rgba(0,0,0,0.72)] ring-1 ring-white/10">
              <video
                ref={videoRef}
                src={language === "en" ? "/VideoEN.mp4#t=0.001" : "/VideoES.mp4#t=0.001"}
                className="h-full w-full object-contain rounded-2xl"
                controls
                playsInline
                preload="metadata"
                autoPlay={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {!isPlaying && (
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Play video"
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 backdrop-blur-[2px]"
                  onClick={() => void togglePlay()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      void togglePlay();
                    }
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                    <PlayIcon />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-center">
            <a
              href="https://calendly.com/enzothome1/consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition hover:bg-slate-100"
            >
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-white/15 bg-black/10 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
