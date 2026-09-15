const COLORS = ["#ed9cbd", "#b6ca56", "#f2ab49", "#8bd7df"];

export type StatRingItem = { label: string; value: number };

function Ring({ value, color, label }: { value: number; color: string; label: string }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center text-center">
      <svg viewBox="0 0 120 120" className="w-28 sm:w-32" role="img" aria-label={`${label}: ${value}%`}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" className="text-paper-soft" strokeWidth="9" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="66" textAnchor="middle" className="fill-ink font-display text-[26px]">
          {value}%
        </text>
      </svg>
      <span className="mt-3 font-mono text-[12.5px] text-steel">{label}</span>
    </div>
  );
}

export default function StatRings({ items }: { items: StatRingItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
      {items.map((it, i) => (
        <Ring key={it.label} label={it.label} value={it.value} color={COLORS[i % COLORS.length]} />
      ))}
    </div>
  );
}