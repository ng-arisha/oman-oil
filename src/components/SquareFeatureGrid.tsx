import type { ReactNode } from "react";

export type SquareFeatureItem = { icon: ReactNode; heading: string; text: string };

export default function SquareFeatureGrid({ items }: { items: SquareFeatureItem[] }) {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.heading}>
          <div className="mb-5">{it.icon}</div>
          <h3 className="mb-3 font-display text-xl text-red">{it.heading}</h3>
          <p className="max-w-[42ch] text-[15px] text-[#4b5068]">{it.text}</p>
        </div>
      ))}
    </div>
  );
}