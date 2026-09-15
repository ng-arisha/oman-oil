import type { ReactNode } from "react";

export type ValueTone = "purple" | "slate" | "green" | "red" | "orange" | "wine";

export type ValueBlock = {
  heading: string;
  text: string;
  tone: ValueTone;
  icon: ReactNode;
};

// Sampled directly from the live site's two card triads.
const TONES: Record<ValueTone, { bg: string; text: string }> = {
  purple: { bg: "#9031aa", text: "#f3e0f8" },
  slate: { bg: "#54b9d1", text: "#eafaff" },
  green: { bg: "#67ad5b", text: "#e6f5e2" },
  red: { bg: "#e04836", text: "#fbe4e0" },
  orange: { bg: "#f19d38", text: "#3a2405" },
  wine: { bg: "#d63864", text: "#fbdde7" },
};

export default function ValueBlocks({ items }: { items: ValueBlock[] }) {
  return (
    <div className={`grid gap-4 ${items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((it) => {
        const tone = TONES[it.tone];
        return (
          <div key={it.heading} className="p-7 rounded-lg" style={{ background: tone.bg }}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80">
              {it.icon}
            </div>
            <h3 className="mb-3 font-display text-lg text-white">{it.heading}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: tone.text }}>
              {it.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}