import type { ReactNode } from "react";

export function Section({
  dark = false,
  id,
  children,
}: {
  dark?: boolean;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        dark
          ? "border-t border-[rgba(233,227,214,0.14)] bg-ink py-19 text-paper"
          : "border-t border-[rgba(21,19,15,0.13)] py-19"
      }
    >
      <div className="mx-auto max-w-max px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  heading,
  note,
  dark = false,
}: {
  eyebrow?: string;
  heading: string;
  note?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
      <div>
        {eyebrow && (
          <p className={`mb-2.5 font-mono text-[12.5px] ${dark ? "text-amber" : "text-amber-deep"}`}>{eyebrow}</p>
        )}
        <h2 className="max-w-[14ch] text-[26px] sm:text-[32px] lg:text-[38px]">{heading}</h2>
      </div>
      {note && (
        <p className={`max-w-70 font-mono text-[12.5px] ${dark ? "text-steel-on-dark" : "text-steel"}`}>
          {note}
        </p>
      )}
    </div>
  );
}

export function Split({
  paragraphs,
  figure,
  caption,
  reverse = false,
  dark = false,
}: {
  paragraphs: string[];
  figure: ReactNode;
  caption: string;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr] ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {paragraphs.map((p, i) => (
          <p key={i} className={`mb-4 max-w-[62ch] last:mb-0 ${dark ? "text-[#cfc9b9]" : "text-[#332f26]"}`}>
            {p}
          </p>
        ))}
      </div>
      <figure
        className={`border p-5 ${dark ? "border-[rgba(233,227,214,0.14)] bg-ink-soft" : "border-[rgba(21,19,15,0.13)] bg-paper-soft"}`}
      >
        {figure}
        <figcaption className={`mt-3 font-mono text-[11.5px] ${dark ? "text-steel-on-dark" : "text-steel"}`}>
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}