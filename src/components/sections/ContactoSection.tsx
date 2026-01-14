"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const EMAIL = "enzothome1@gmail.com";

export default function ContactoSection() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = EMAIL;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacto"
      className="border-t border-slate-800/80 py-20 sm:py-24"
    >
      <Reveal className="flex max-w-3xl flex-col gap-6">
<div className="flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-300/40" />
              <span className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">
                Contacto
              </span>
</div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          Si creés que puedo ayudarte a ordenar tu situación, escribime directo o contactame por mis redes.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg font-medium text-slate-100 underline decoration-white/20 underline-offset-8 transition hover:decoration-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:text-xl"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copiar mail"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
          >
            {copied ? "Copiado" : "Copiar mail"}
          </button>
        </div>
        <p className="text-sm text-slate-400">Te responderé lo más pronto que me sea posible.</p>
      </Reveal>
    </section>
  );
}
