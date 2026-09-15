export type ProgressItem = { heading: string; text: string[]; pillLabel: string; value: number };

export default function ProgressGrid({ items, dark = false }: { items: ProgressItem[]; dark?: boolean }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.heading}
          className={`rounded-xl p-8 shadow-[0_10px_30px_rgba(11,11,58,0.10)] ${dark ? "bg-ink-soft" : "bg-white"}`}
        >
          <h3 className="mb-4 font-display text-[20px] uppercase text-red">{it.heading}</h3>
          {it.text.map((p, i) => (
            <p
              key={i}
              className={`mb-4 text-[15px] last:mb-6 ${dark ? "text-[#b9c0d6]" : "text-[#4b5068]"}`}
            >
              {p}
            </p>
          ))}
          <div
            className={`relative h-8 w-full overflow-hidden rounded-full ${dark ? "bg-ink" : "bg-paper-soft"}`}
          >
            <div
              className="absolute inset-y-0 left-0 flex items-center rounded-full bg-red px-3.5"
              style={{ width: `${it.value}%` }}
            >
              <span className="whitespace-nowrap font-mono text-[11.5px] text-white">{it.pillLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}