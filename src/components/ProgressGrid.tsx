export type ProgressItem = { heading: string; text: string; pillLabel: string; value: number };

export default function ProgressGrid({ items, dark = false }: { items: ProgressItem[]; dark?: boolean }) {
  const line = dark ? "border-[color:rgba(233,227,214,0.14)]" : "border-[color:rgba(21,19,15,0.13)]";
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.heading} className={`border-t pt-6 ${line}`}>
          <h3 className="mb-2.5 text-[20px]">{it.heading}</h3>
          <p className={`mb-5 text-[15px] ${dark ? "text-[#c4beac]" : "text-[#4a4636]"}`}>{it.text}</p>
          <div
            className={`relative h-8 w-full overflow-hidden rounded-full ${dark ? "bg-ink-soft" : "bg-paper-soft"}`}
          >
            <div
              className="absolute inset-y-0 left-0 flex items-center rounded-full bg-amber px-3.5"
              style={{ width: `${it.value}%` }}
            >
              <span className="whitespace-nowrap font-mono text-[11.5px] text-ink">{it.pillLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}