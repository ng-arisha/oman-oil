"use client";

import Image from "next/image";
import { useState } from "react";

export type HoverCardProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

export default function HoverRevealCard({
  src,
  alt,
  title,
  text,
}: HoverCardProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive((a) => !a)}
      aria-expanded={active}
      className="group relative block h-110 w-full overflow-hidden text-left rounded-lg"
    >
      {/* photo — subtle zoom as it goes behind the wash */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: active ? "scale(1.06)" : "scale(1)" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* default state: bottom scrim + title, fades out first */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(0deg, rgba(11,11,58,.8) 0%, transparent 55%)",
          opacity: active ? 0 : 1,
        }}
      />
      <h3
        className="absolute bottom-6 left-6 font-display text-2xl text-white transition-all duration-300"
        style={{
          opacity: active ? 0 : 1,
          transform: active ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {title}
      </h3>

      {/* hover state: color wash fades in over the photo, then the text rises and fades in after it */}
      <div
        className="absolute inset-0 flex flex-col justify-center p-7 transition-opacity duration-500"
        style={{ background: "rgba(11,11,58,.94)", opacity: active ? 1 : 0 }}
      >
        <div
          className="transition-all duration-500 ease-out"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(14px)",
            transitionDelay: active ? "120ms" : "0ms",
          }}
        >
          <h3 className="mb-3 font-display text-2xl text-white">{title}</h3>
          <p className="text-[14.5px] leading-relaxed text-[#c9d0e6]">{text}</p>
        </div>
      </div>
    </button>
  );
}
