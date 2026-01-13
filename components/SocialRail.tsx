export default function SocialRail() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/enzoth7",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.75 5.63.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.57-3.87-1.57-.52-1.35-1.28-1.71-1.28-1.71-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.79 2.7 1.27 3.36.97.1-.76.4-1.27.73-1.56-2.56-.3-5.26-1.3-5.26-5.8 0-1.28.45-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.32 3.2 1.2.93-.26 1.92-.4 2.9-.4.99 0 1.98.14 2.9.4 2.22-1.52 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.51-2.71 5.5-5.29 5.79.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.57A11.27 11.27 0 0 0 23.25 12C23.25 5.63 18.27.5 12 .5z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/enzo-thome-one",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/enzo.th",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75zm0 1.5A3.25 3.25 0 0 0 4.25 7.5v9A3.25 3.25 0 0 0 7.5 19.75h9a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 16.5 4.25h-9zM12 7.25A4.75 4.75 0 1 1 7.25 12 4.76 4.76 0 0 1 12 7.25zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75zm5.4-1.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
        </svg>
      ),
    },
    {
      label: "Sitio",
      href: "https://miadmi.com",
      icon: (
<img
  src="/miadmi.png"
  alt=""
  className="h-6.5 w-5 opacity-80 transition group-hover:opacity-100"
  style={{ filter: "grayscale(1) brightness(1.8) contrast(1.2)" }}
/>

      ),
    },
  ];

  return (
    <nav
      aria-label="Redes"
className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full p-2 text-slate-300/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label={l.label}
            title={l.label}
          >
            <span className="block opacity-80 transition group-hover:opacity-100">
              {l.icon}
            </span>
          </a>
        ))}
        <div className="mt-2 h-10 w-px bg-white/10" />
      </div>
    </nav>
  );
}
