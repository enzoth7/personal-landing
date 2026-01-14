"use client";

import Image from "next/image";

type Tool = {
  name: string;
  src: string;
  invert?: boolean;
};

const tools: Tool[] = [
  { name: "Excel", src: "/logos/excel4.png", invert: true },
  { name: "Word", src: "/logos/word.png", invert: true },
  { name: "PDF Editor", src: "/logos/pdf.png", invert: true },
  { name: "PowerBI", src: "/logos/powerbi.png", invert: true },
  { name: "Tableau", src: "/logos/tableau.png", invert: true },
  { name: "Notion", src: "/logos/notion2.png", invert: true },
  { name: "VS Code", src: "/logos/vscode.png", invert: true },
  { name: "SQL", src: "/logos/sql1.png", invert: true },
  { name: "Python", src: "/logos/python.png", invert: true },
  { name: "TypeScript", src: "/logos/typescript2.png", invert: true },
  { name: "Jira", src: "/logos/jira.png", invert: true },
  { name: "Postman", src: "/logos/postman.png", invert: true },
  { name: "App Script", src: "/logos/appscript.png", invert: true },


];

function ToolTile({ tool }: { tool: Tool }) {
  return (
    <div
      className="flex items-center justify-center px-4 py-3 opacity-50 transition-opacity duration-200 hover:opacity-80"
      role="img"
      aria-label={tool.name}
      title={tool.name}
    >
<Image
  src={tool.src}
  alt=""
  width={28}
  height={28}
  className={[
    "h-10 w-auto opacity-60 transition-opacity duration-200 hover:opacity-90",
    "grayscale brightness-0",
    tool.invert === false ? "" : "invert",
  ].join(" ")}
/>
    </div>
  );
}

export default function ToolsMarquee() {
  return (
    <section className="border-t border-white/10 py-6 sm:py-8" aria-label="Herramientas">
      <div
        className="tools-marquee relative overflow-x-auto overflow-y-hidden sm:overflow-hidden"
        tabIndex={0}
      >
<div
  className="tools-marquee-track flex w-max"
  style={{ animation: "tools-marquee-scroll 54s linear infinite" }}
>
          <div className="tools-marquee-group flex items-center gap-6 pr-6">
            {tools.map((tool) => (
              <ToolTile key={tool.name} tool={tool} />
            ))}
          </div>

          <div className="tools-marquee-group tools-marquee-duplicate flex items-center gap-6 pr-6" aria-hidden="true">
            {tools.map((tool) => (
              <ToolTile key={`dup-${tool.name}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
