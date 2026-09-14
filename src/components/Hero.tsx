import type { ReactNode } from "react";

export type HeroMeta = { value: string; label: string };

export default function Hero({
  crumb,
  lines,
  lead,
  meta,
}: {
  crumb: ReactNode;
  lines: [string, string];
  lead: string;
  meta: HeroMeta[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 90% at 82% 0%, rgba(224,72,54,0.22), transparent 60%), radial-gradient(50% 70% at 100% 100%, rgba(90,188,191,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-max px-5 pb-19 pt-24 sm:px-8">
        <p className="mb-4.5 font-mono text-[12.5px] text-steel-on-dark">{crumb}</p>

        <h1 className="max-w-[15ch] overflow-hidden text-[34px] leading-[1.04] sm:text-[46px] lg:text-[60px]">
          <span className="hero-line">{lines[0]}</span>
          <span className="hero-line hero-line-delay">{lines[1]}</span>
        </h1>

        <div className="hero-rule my-6.5 h-0.5 bg-red" />

        <p className="max-w-[52ch] text-lg font-normal text-[#c9d0e6]">{lead}</p>

        <div className="mt-11 flex flex-wrap gap-6 sm:gap-12">
          {meta.map((m) => (
            <div key={m.label} className="border-l border-[rgba(255,255,255,0.14)] pl-4">
              <b className="block font-display text-xl text-red sm:text-[28px]">{m.value}</b>
              <span className="font-mono text-[11.5px] text-steel-on-dark">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}