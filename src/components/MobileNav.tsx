"use client";

import { NAV } from "@/lib/nav";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex h-10.5 w-10.5 flex-col items-center justify-center gap-1.25 border border-[rgba(255,255,255,0.14)]"
      >
        <span className="block h-0.5 w-5 bg-paper" />
        <span className="block h-0.5 w-5 bg-paper" />
        <span className="block h-0.5 w-5 bg-paper" />
      </button>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden fixed inset-x-0 top-19 bottom-0 z-40 overflow-auto bg-ink px-6 pb-10 pt-2"
        >
          {NAV.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[rgba(255,255,255,0.14)] py-3.5 font-display text-xl text-paper"
              >
                {item.label}
              </Link>
              {item.sub && (
                <div className="pl-4">
                  {item.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-[rgba(255,255,255,0.14)] py-3 text-base text-steel-on-dark"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}