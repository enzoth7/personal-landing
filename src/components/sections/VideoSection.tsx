"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

const OVERLAY_EASE = [0.22, 1, 0.36, 1] as const;

export default function VideoSection() {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playedSrc, setPlayedSrc] = useState<string | null>(null);

  const videoSrc = language === "en" ? "/VideoEN.mp4" : "/VideoES.mp4";
  const isPlaying = playedSrc === videoSrc;

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    try {
      await video.play();
      setPlayedSrc(videoSrc);
    } catch {
      setPlayedSrc(null);
    }
  };

  return (
    <section aria-label="Video showcase" className="-mx-6 py-6 sm:-mx-10 sm:py-8 lg:-mx-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-none bg-black">
          <video
            ref={videoRef}
            key={videoSrc}
            src={videoSrc}
            className="h-full w-full object-cover"
            playsInline
            preload="metadata"
            controls={isPlaying}
          />

          <AnimatePresence>
            {!isPlaying ? (
              <motion.button
                key="video-overlay"
                type="button"
                onClick={handlePlay}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.7, ease: OVERLAY_EASE } }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xl"
                aria-label={language === "en" ? "Play showcase video" : "Reproducir video showcase"}
              >
                <span className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-500 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-1 h-7 w-7"
                  >
                    <path d="M8.5 6.5v11l9-5.5-9-5.5z" />
                  </svg>
                </span>
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>
    </section>
  );
}
