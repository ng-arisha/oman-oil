"use client";

import { useState, type ReactNode } from "react";

export type Slide = { figure: ReactNode; caption: string };

export default function FigureCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="border border-[rgba(233,227,214,0.14)] bg-ink-soft p-5">
      <div className="relative">
        {slides[index].figure}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-paper hover:bg-amber hover:text-ink"
        >
          &#8592;
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-paper hover:bg-amber hover:text-ink"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <figcaption className="font-mono text-[11.5px] text-steel-on-dark">{slides[index].caption}</figcaption>
        <div className="flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-4 ${i === index ? "bg-amber" : "bg-[rgba(233,227,214,0.25)]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}