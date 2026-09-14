export type SpecItem = { num: string; heading: string; text: string };

export default function SpecStrip({ items, dark = false }: { items: SpecItem[]; dark?: boolean }) {
  const line = dark ? "border-[color:rgba(255,255,255,0.14)]" : "border-[color:rgba(11,11,58,0.13)]";
  return (
    <div className={`grid grid-cols-1 border-y ${line} md:grid-cols-4`}>
      {items.map((it) => (
        <div
          key={it.heading}
          className={`border-t px-5 py-7.5 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 ${line}`}
        >
          <span className="mb-2.5 block font-mono text-[13px] text-red">{it.num}</span>
          <h3 className="mb-2 text-[19px]">{it.heading}</h3>
          <p className={`text-[15px] ${dark ? "text-[#b9c0d6]" : "text-[#4b5068]"}`}>{it.text}</p>
        </div>
      ))}
    </div>
  );
}