import Link from "next/link";

export default function CtaBand({
  heading,
  sub,
  btnText,
  btnHref,
}: {
  heading: string;
  sub?: string;
  btnText: string;
  btnHref: string;
}) {
  return (
    <section
      className="py-16 text-paper"
      style={{ background: "linear-gradient(115deg, #0b0b3a 0%, #3a1030 55%, #a8331f 130%)" }}
    >
      <div className="mx-auto flex max-w-max flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
        <div>
          <h2 className="max-w-[16ch] text-2xl sm:text-[32px]">{heading}</h2>
          {sub && <p className="mt-2 max-w-[44ch] text-[#c9d0e6]">{sub}</p>}
        </div>
        <Link
          href={btnHref}
          className="inline-flex items-center gap-2.5 whitespace-nowrap border border-paper bg-paper px-6.5 py-3.5 font-display text-[15px] text-ink hover:bg-transparent hover:text-paper"
        >
          {btnText}
        </Link>
      </div>
    </section>
  );
}