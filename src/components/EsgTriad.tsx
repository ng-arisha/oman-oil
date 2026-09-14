import type { ReactNode } from "react";

export type EsgItem = { label: string; text: string; figure: ReactNode };

export default function EsgTriad({ items }: { items: EsgItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <div key={it.label} className="border border-[rgba(21,19,15,0.13)] bg-paper-soft p-5">
          {it.figure}
          <h3 className="mt-4 font-display text-lg text-amber-deep">{it.label}</h3>
          <p className="mt-2 text-[14.5px] text-[#4a4636]">{it.text}</p>
        </div>
      ))}
    </div>
  );
}