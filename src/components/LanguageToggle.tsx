"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed right-6 top-6 z-50 flex items-center rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur">
      <button
        onClick={() => language !== "es" && toggleLanguage()}
        className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${language === "es"
            ? "bg-white/15 text-white shadow-sm"
            : "text-slate-400 hover:text-slate-200"
          }`}
      >
        <span className="relative block h-3 w-4 overflow-hidden rounded-[1px]">
          <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
            <path fill="#c60b1e" d="M0 0h640v480H0z" />
            <path fill="#ffc400" d="M0 120h640v240H0z" />
          </svg>
        </span>
        ES
      </button>
      <button
        onClick={() => language !== "en" && toggleLanguage()}
        className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${language === "en"
            ? "bg-white/15 text-white shadow-sm"
            : "text-slate-400 hover:text-slate-200"
          }`}
      >
        <span className="relative block h-3 w-4 overflow-hidden rounded-[1px]">
          <svg viewBox="0 0 640 480" className="h-full w-full object-cover">
            <path fill="#bf0a30" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M0 0h640v480H0z" />
            {/* Stripes */}
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
            {/* Simple stars dots */}
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
        </span>
        EN
      </button>
    </div>
  );
}
