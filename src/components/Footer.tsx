import Link from "next/link";

const hairline = "border-[color:rgba(255,255,255,0.14)]";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="mx-auto max-w-max px-5 sm:px-8">
        <div className={`grid grid-cols-2 gap-8 border-b ${hairline} pb-11 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:gap-14`}>
          <div className="col-span-2 md:col-span-1">
            <span
              aria-hidden
              className="mb-3.5 block h-6.5 w-5 rounded-bl-[60%] rounded-br-[60%] rounded-tr-[60%] bg-linear-to-br from-red to-red-deep"
            />
            <p className="max-w-[34ch] text-[14.5px] text-[#b9c0d6]">
              Exploration, development and operation of onshore and offshore oil and gas fields in Oman and abroad
              &mdash; trading crude, refined fuels and bitumen with storage and transport across Europe and the Gulf.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-normal tracking-wide text-steel-on-dark">Products</h4>
            <ul className="space-y-2.5">
              <FootLink href="/oil-and-gas" label="Oil and gas" />
              <FootLink href="/bitumen" label="Bitumen" />
              <FootLink href="/kerosene" label="Kerosene" />
              <FootLink href="/gasoline-ai-92" label="Gasoline AI-92" />
              <FootLink href="/dt-analogs" label="DT analogs" />
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-normal tracking-wide text-steel-on-dark">Company</h4>
            <ul className="space-y-2.5">
              <FootLink href="/about-us" label="About us" />
              <FootLink href="/strategy-and-vision" label="Strategy and vision" />
              <FootLink href="/service" label="Services" />
              <FootLink href="/storage" label="Storage" />
              <FootLink href="/transportation" label="Transportation" />
              <FootLink href="/sustainability" label="Sustainability" />
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs font-normal tracking-wide text-steel-on-dark">Head office</h4>
            <p className="text-[14.5px] text-[#b9c0d6]">
              Microdistrict 12, Building 79/1
              <br />
              Aktau, Mangistau Region
            </p>
            <p className="mt-3 text-[14.5px] text-[#b9c0d6]">
              +77 47 465 8669
              <br />
              info@omanoilcompany.com
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-6 font-mono text-xs text-steel-on-dark">
          <span>&copy; 2024 Oman Oil Company Limited</span>
          <span>Prototype redesign &mdash; not a live production site</span>
        </div>
      </div>
    </footer>
  );
}

function FootLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-red">
        {label}
      </Link>
    </li>
  );
}