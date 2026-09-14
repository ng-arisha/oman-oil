"use client";

import Image from "next/image";
import { useState } from "react";

export type ImageSlide = { src: string; alt: string; caption: string };

export default function ImageCarousel({ slides }: { slides: ImageSlide[] }) {
  const [index, setIndex] = useState(0);
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="border border-[rgba(233,227,214,0.14)] bg-ink-soft p-2">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(21,19,15,.55) 0%, transparent 35%)" }}
        />
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-paper hover:bg-amber hover:text-ink"
        >
          &#8592;
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-paper hover:bg-amber hover:text-ink"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between px-1 pb-1">
        <figcaption className="font-mono text-[11.5px] text-steel-on-dark">{slides[index].caption}</figcaption>
        <div className="flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
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