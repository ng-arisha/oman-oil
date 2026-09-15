import type { ReactNode } from "react";

export type IconGridItem = { icon: ReactNode; heading: string; text: string };

export default function IconGrid({ items }: { items: IconGridItem[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.heading} className="flex gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white">
            {it.icon}
          </div>
          <div>
            <h3 className="mb-1.5 text-[18px]">{it.heading}</h3>
            <p className="text-[14.5px] text-[#b9c0d6]">{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}