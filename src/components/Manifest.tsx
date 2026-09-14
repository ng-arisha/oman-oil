import Link from "next/link";

export type ManifestItem = { tag: string; name: string; desc: string; href: string };

export default function Manifest({ items, dark = false }: { items: ManifestItem[]; dark?: boolean }) {
  const line = dark ? "border-[color:rgba(233,227,214,0.14)]" : "border-[color:rgba(21,19,15,0.13)]";
  return (
    <ul className={`border-t ${line}`}>
      {items.map((it) => (
        <li key={it.href} className={`border-b ${line}`}>
          <Link
            href={it.href}
            className="grid grid-cols-[44px_1fr] items-center gap-5 px-1 py-6 transition-colors hover:bg-amber/6 sm:grid-cols-[60px_1fr_auto]"
          >
            <span className="font-mono text-[13px] text-amber">{it.tag}</span>
            <span>
              <span className="block font-display text-[21px]">{it.name}</span>
              <span className={`mt-1 block text-[14.5px] font-normal ${dark ? "text-steel-on-dark" : "text-steel"}`}>
                {it.desc}
              </span>
            </span>
            <span className="col-span-2 mt-2 block font-mono text-xs text-steel sm:col-span-1 sm:mt-0 sm:justify-self-end">
              View spec &#8594;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}