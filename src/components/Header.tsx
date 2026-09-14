
import { NAV } from "@/lib/nav";
import Link from "next/link";
import MobileNav from "./MobileNav";

const hairline = "border-[color:rgba(233,227,214,0.14)]";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-amber bg-ink">
      <div className="mx-auto flex h-19 max-w-max items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-paper">
          <span
            aria-hidden
            className="h-6.5 w-5 flex-none rounded-bl-[60%] rounded-br-[60%] rounded-tr-[60%] bg-linear-to-br from-amber to-amber-deep"
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
                className="block border-b-2 border-transparent px-4 py-3.5 text-[14.5px] text-paper hover:border-amber hover:text-amber"
              >
                {item.label}
              </Link>
              {item.sub && (
                <div
                  className={`absolute left-0 top-full hidden min-w-50 border ${hairline} border-t-2 border-t-amber bg-ink-soft p-1.5 shadow-[0_18px_30px_rgba(0,0,0,0.35)] group-hover:block group-focus-within:block`}
                >
                  {item.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2.5 text-sm text-paper hover:bg-amber/10 hover:text-amber"
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