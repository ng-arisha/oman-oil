export type SpecItem = { num: string; heading: string; text: string };

export default function SpecStrip({ items, dark = false }: { items: SpecItem[]; dark?: boolean }) {
  const line = dark ? "border-[color:rgba(233,227,214,0.14)]" : "border-[color:rgba(21,19,15,0.13)]";
  return (
    <div className={`grid grid-cols-1 border-y ${line} md:grid-cols-4`}>
      {items.map((it) => (
        <div
          key={it.heading}
          className={`border-t px-5 py-7.5 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 ${line}`}
        >
          <span className="mb-2.5 block font-mono text-[13px] text-amber">{it.num}</span>
          <h3 className="mb-2 text-[19px]">{it.heading}</h3>
          <p className={`text-[15px] ${dark ? "text-[#c4beac]" : "text-[#4a4636]"}`}>{it.text}</p>
        </div>
      ))}
    </div>
  );
}