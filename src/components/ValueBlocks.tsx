export type ValueBlock = { heading: string; text: string };

// Sampled from the live site: navy, teal (Secured Supply), red (Our Strategy),
// orange (Reliability), wine (Dependable Supplier).
const TONES = [
  { bg: "#0b0b3a", text: "#c9d0e6" }, // navy
  { bg: "#5abcbf", text: "#0b2b2c" }, // teal
  { bg: "#e04836", text: "#fbe4e0" }, // red
  { bg: "#f19d38", text: "#3a2405" }, // orange
  { bg: "#9c2546", text: "#f6dde4" }, // wine
];

export default function ValueBlocks({ items, startIndex = 0 }: { items: ValueBlock[]; startIndex?: number }) {
  return (
    <div className={`grid gap-4 ${items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {items.map((it, i) => {
        const tone = TONES[(i + startIndex) % TONES.length];
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