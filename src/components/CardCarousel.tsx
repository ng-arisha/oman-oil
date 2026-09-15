"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CardSlide = { src: string; alt: string };

const INTERVAL_MS = 5000;

export default function CardCarousel({ slides }: { slides: CardSlide[] }) {
  const [index, setIndex] = useState(0);
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(11,11,58,0.12)]">
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md hover:bg-white"
      >
        &#8249;
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-md hover:bg-white"
      >
        &#8250;
      </button>
    </div>
  );
}