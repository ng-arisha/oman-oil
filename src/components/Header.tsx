"use client";

import MobileNav from "@/components/MobileNav";
import { NAV } from "@/lib/nav";
import Link from "next/link";
import { useEffect, useState } from "react";

const hairline = "border-[color:rgba(255,255,255,0.14)]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300 ${
        scrolled ? "border-red bg-ink" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-19 max-w-max items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-paper">
          <span
            aria-hidden
            className="h-6.5 w-5 flex-none rounded-bl-[60%] rounded-br-[60%] rounded-tr-[60%] bg-linear-to-br from-red to-red-deep"
          />
          <span className="flex flex-col leading-tight">
            <b className="font-display text-base tracking-wide">Oman Oil Company</b>
            <span className="font-mono text-[10.5px] tracking-wider text-steel-on-dark">
              Limited &middot; trading &amp; refining
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV.map((item) => (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className="block border-b-2 border-transparent px-4 py-3.5 text-[14.5px] text-paper hover:border-red hover:text-red"
              >
                {item.label}
              </Link>
              {item.sub && (
                <div
                  className={`absolute left-0 top-full hidden min-w-50 border ${hairline} border-t-2 border-t-red bg-ink-soft p-1.5 shadow-[0_18px_30px_rgba(0,0,0,0.35)] group-hover:block group-focus-within:block`}
                >
                  {item.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2.5 text-sm text-paper hover:bg-red/10 hover:text-red"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <MobileNav />
      </div>
    </header>
  );
}