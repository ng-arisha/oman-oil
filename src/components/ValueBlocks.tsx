export type ValueBlock = { heading: string; text: string };

const TONES = [
  { bg: "#15130f", text: "#d8d2c2" }, // ink
  { bg: "#93540f", text: "#f3e6d4" }, // amber-deep
  { bg: "#2f6f6b", text: "#dbf0ee" }, // teal
  { bg: "#443461", text: "#e6ddf2" }, // violet
];

export default function ValueBlocks({ items }: { items: ValueBlock[] }) {
  return (
    <div className={`grid gap-4 ${items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((it, i) => {
        const tone = TONES[i % TONES.length];
        return (
          <div key={it.heading} className="p-7" style={{ background: tone.bg }}>
            <h3 className="mb-3 font-display text-lg" style={{ color: "#fff" }}>
              {it.heading}
            </h3>
            <p className="text-[15px] leading-relaxed" style={{ color: tone.text }}>
              {it.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}