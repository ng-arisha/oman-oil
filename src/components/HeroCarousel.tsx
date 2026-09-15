"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/carousel-1.webp", alt: "LNG storage tanks and valve manifold at a terminal" },
  { src: "/images/carousel-2.webp", alt: "Refinery towers at sunset behind green fields" },
  { src: "/images/carousel-3.png", alt: "Aerial view of a snow-covered industrial facility" },
  { src: "/images/carousel-4.jpg", alt: "Aerial view of a riverside refinery and tank farm" },
];

const INTERVAL_MS = 5500;

export default function HeroCarousel({title,text,cta}: {title?: string,text?: string,cta: boolean}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-140 overflow-hidden bg-ink text-paper sm:h-155 lg:h-170">
      {/* background — auto-advancing photo carousel */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,11,58,.92) 0%, rgba(11,11,58,.72) 42%, rgba(11,11,58,.35) 75%, rgba(11,11,58,.15) 100%), linear-gradient(0deg, rgba(11,11,58,.55) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-1.5 sm:right-8">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-5 transition-colors ${i === index ? "bg-red" : "bg-[rgba(255,255,255,0.35)]"}`}
          />
        ))}
      </div>

      <div className="relative z-1 mx-auto flex h-full max-w-max flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
        <h1 className="max-w-[18ch] overflow-hidden text-[32px] uppercase leading-[1.04] sm:text-[46px] lg:text-[58px]">
          {title || (<>
            <span className="hero-line block">Oil &amp; and gas</span>
            <span className="hero-line hero-line-delay block">refinery</span>
          </>)}
          
        </h1>

        <div className="hero-rule my-5 h-0.5 bg-red sm:my-6" />

       {
        text ? <p className="max-w-[42ch] text-[15px] leading-normal sm:text-[17px]">{text}</p>:  <p className="max-w-[52ch] text-base font-normal text-[#c9d0e6] sm:text-lg">
        No matter how unpredictable the market becomes, Oman Oil Company is the company you can count on.
      </p>
       }

        
        {cta && (
          <Link
            href="/about-us"
            className="mt-6 inline-block rounded-full bg-red px-6 py-3 text-[15px] font-semibold uppercase leading-none text-paper transition-colors hover:bg-red-deep sm:mt-8 sm:px-8 sm:py-4 sm:text-[17px] w-60"
          >
            Learn more
          </Link>
        )}
      </div>
    </section>
  );
}