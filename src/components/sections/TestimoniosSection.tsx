"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/src/context/LanguageContext";

const testimonials = [
  {
    name: "cristian_payret",
    country: "UY",
    stars: 5,
    month: "Diciembre 2025",
    text:
      "Todo fue claro desde el primer momento. Trabajar con Enzo fue una experiencia excelente y clave para lograr exactamente el resultado que estaba buscando. Destaco especialmente su profesionalismo.",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
  {
    name: "oriolramos1",
    country: "ES",
    stars: 5,
    month: "Enero 2026",
    text:
      "Todo perfecto, un gran profesional, muy rápido, muy buen precio. Perfecta comunicación. LO RECOMIENDO!!!!!!",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
    {
    name: "daphaneghw",
    country: "US",
    stars: 5,
    month: "Enero 2026",
    text: "Amazing job and exceeded expectations!",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
  {
    name: "tomwdallas",
    country: "US",
    stars: 5,
    month: "Febrero 2026",
    text:
      "Working with Enzo was great. Very good communicator and handled everything we needed with the Excel file.",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
  {
    name: "maverickhauling",
    country: "US",
    stars: 5,
    month: "Febrero 2026",
    text: "Grateful for people that know what they are doing",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
  {
    name: "dmoskat",
    country: "US",
    stars: 5,
    month: "Febrero 2026",
    text: "Accomplished everything I needed at a fair price. Thank you!",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
  {
    name: "anitabarry303",
    country: "AU",
    stars: 5,
    month: "Marzo 2026",
    text:
      "Enzo understood what I requested very well and delivered exactly what I needed. He provided efficient and clear communication & I'm so happy with the final result. I highly recommend Enzo and will return in the future. Thanks Enzo!!",
    link: "https://es.fiverr.com/enzoth98?public_mode=true",
    avatar: "/Fiverr.png",
  },
];

const AUTOPLAY_MS = 5000;
const TOTAL = testimonials.length;
const LOOPED_TESTIMONIALS = [...testimonials, ...testimonials, ...testimonials];
const MIDDLE_START = TOTAL;

const FlagIcon = ({ country }: { country: string }) => {
  const normalized = country.trim().toUpperCase();
  switch (normalized) {
    case "ES":
      return (
        <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
          <path fill="#c60b1e" d="M0 0h640v480H0z" />
          <path fill="#ffc400" d="M0 120h640v240H0z" />
        </svg>
      );
    case "US":
      return (
        <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
          <path fill="#bf0a30" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h640v480H0z" />
          <g fill="#bf0a30">
            <rect width="640" height="37" y="0" />
            <rect width="640" height="37" y="74" />
            <rect width="640" height="37" y="148" />
            <rect width="640" height="37" y="222" />
            <rect width="640" height="37" y="296" />
            <rect width="640" height="37" y="370" />
            <rect width="640" height="37" y="444" />
          </g>
          <rect fill="#002868" width="296" height="259" />
          <g fill="#fff">
            <circle cx="25" cy="25" r="8" />
            <circle cx="150" cy="25" r="8" />
            <circle cx="270" cy="25" r="8" />
            <circle cx="85" cy="130" r="8" />
            <circle cx="205" cy="130" r="8" />
            <circle cx="25" cy="230" r="8" />
            <circle cx="150" cy="230" r="8" />
            <circle cx="270" cy="230" r="8" />
          </g>
        </svg>
      );
    case "UY":
      return (
        <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
          <rect width="640" height="480" fill="#fff" />
          <g fill="#0038a8">
            <rect y="53.333" width="640" height="53.333" />
            <rect y="160" width="640" height="53.333" />
            <rect y="266.666" width="640" height="53.333" />
            <rect y="373.333" width="640" height="53.333" />
          </g>
          <rect width="240" height="266.666" fill="#fff" />
          <circle cx="120" cy="133.333" r="44" fill="#f7c948" />
          <circle cx="120" cy="133.333" r="30" fill="#f6b73c" />
        </svg>
      );
    case "AU":
    case "AUS":
      return (
        <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
          <rect width="640" height="480" fill="#012169" />
          <g>
            <rect width="320" height="240" fill="#012169" />
            <path fill="#fff" d="M0 0h40l280 200v40h-40L0 40z" />
            <path fill="#fff" d="M320 0h-40L0 200v40h40l280-200z" />
            <path fill="#c8102e" d="M0 0h20l300 220v20h-20L0 20z" />
            <path fill="#c8102e" d="M320 0h-20L0 220v20h20L320 20z" />
            <rect x="130" width="60" height="240" fill="#fff" />
            <rect y="90" width="320" height="60" fill="#fff" />
            <rect x="145" width="30" height="240" fill="#c8102e" />
            <rect y="105" width="320" height="30" fill="#c8102e" />
          </g>
          <g fill="#fff">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(130 255) scale(3)"
            />
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(455 95) scale(1.4)"
            />
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(415 190) scale(1.4)"
            />
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(545 200) scale(1.4)"
            />
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(500 245) scale(1.1)"
            />
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              transform="translate(485 330) scale(1.6)"
            />
          </g>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
          <rect width="640" height="480" fill="#1f2937" />
        </svg>
      );
  }
};

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimoniosSection() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(MIDDLE_START);
  const [, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Inicialización del scroll al medio
  useEffect(() => {
    const container = trackRef.current;
    if (!container) {
      return;
    }

    const initScroll = () => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-testimonial]")
      );
      if (!items.length || !items[MIDDLE_START]) {
        return;
      }

      container.scrollTo({
        left: items[MIDDLE_START].offsetLeft - container.offsetLeft,
        behavior: "auto",
      });
      currentIndexRef.current = MIDDLE_START;
      setActiveIndex(0);
    };

    const timer = setTimeout(initScroll, 100);
    return () => clearTimeout(timer);
  }, []);

  const syncIndex = useCallback((index: number) => {
    currentIndexRef.current = index;
    setActiveIndex(index % TOTAL);
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const container = trackRef.current;
      if (!container || isScrollingRef.current) {
        return;
      }

      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-testimonial]")
      );
      if (!items.length) {
        return;
      }

      isScrollingRef.current = true;

      const normalizedIndex =
        ((index % items.length) + items.length) % items.length;
      const target = items[normalizedIndex];

      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft,
        behavior: prefersReducedMotion ? "auto" : behavior,
      });

      syncIndex(normalizedIndex);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    },
    [prefersReducedMotion, syncIndex]
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const container = trackRef.current;
      if (!container) {
        return;
      }

      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-testimonial]")
      );
      if (!items.length) {
        return;
      }

      const scrollLeft = container.scrollLeft;
      const itemWidthWithGap = items[1].offsetLeft - items[0].offsetLeft;

      const setWidth = TOTAL * itemWidthWithGap;

      // Reset de scroll para bucle infinito si nos salimos del bloque central
      if (scrollLeft < setWidth - container.clientWidth) {
        container.scrollLeft += setWidth;
      } else if (scrollLeft > setWidth * 2) {
        container.scrollLeft -= setWidth;
      }

      // Actualizar índice visual basado en scroll
      const center = container.scrollLeft + container.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < nearestDistance) {
          nearestIndex = index;
          nearestDistance = distance;
        }
      });

      syncIndex(nearestIndex);
    });
  }, [syncIndex]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const id = window.setInterval(() => {
      scrollToIndex(currentIndexRef.current + 1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isPaused, prefersReducedMotion, scrollToIndex]);

  return (
    <section
      id="testimonios"
      className="border-t border-slate-800/80 py-20 sm:py-24"
    >
      <div className="flex flex-col gap-10 sm:gap-12">
        <Reveal className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-300/40" />
            <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
              {t.testimonials.subtitle}
            </span>
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            {t.testimonials.description}
          </p>
        </Reveal>

        <div
          className="relative px-4 sm:px-6 md:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndexRef.current - 1)}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-slate-200 shadow-xl backdrop-blur-sm transition hover:bg-white/10 lg:left-0"
            aria-label="Ver testimonio anterior"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(currentIndexRef.current + 1)}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-slate-200 shadow-xl backdrop-blur-sm transition hover:bg-white/10 lg:right-0"
            aria-label="Ver testimonio siguiente"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2"
          >
            {LOOPED_TESTIMONIALS.map((testimonial, index) => (
              <a
                key={`${testimonial.name}-${index}`}
                data-testimonial
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full w-[280px] shrink-0 snap-start flex-col gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] sm:w-[320px] lg:w-[calc((100%-3rem)/3)]"
                aria-label={`Ver reseña de ${testimonial.name}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/5">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar de ${testimonial.name}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                      <span className="font-display tracking-wide">
                        {testimonial.name}
                      </span>
                      <span
                        className="relative block h-3.5 w-5 overflow-hidden rounded-[2px] border border-white/15"
                        aria-label={testimonial.country}
                      >
                        <FlagIcon country={testimonial.country} />
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#facc15]">
                      {Array.from({ length: testimonial.stars }).map(
                        (_, starIndex) => (
                          <StarIcon key={starIndex} />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm font-light leading-relaxed text-slate-300 sm:text-base">
                  "{testimonial.text}"
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Fiverr.com</span>
                  <span className="text-xs italic text-slate-400">
                    {testimonial.month}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
