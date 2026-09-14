import CtaBand from "@/components/CtaBand";
import { Flame } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kerosene" };

export default function KerosenePage() {
  return (
    <>
      <Hero
        crumb="Products / Kerosene"
        lines={["A steady supply for", "aviation and heating"]}
        lead="Consistent, cost-effective and balanced supply is the whole strategy — kerosene is a product where a missed delivery window costs more than a missed price target."
        meta={[
          { value: "2", label: "grade families" },
          { value: "Lab", label: "verified per batch" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Supply strategy"
          heading="Market leadership through reliability"
          note="Expanding the customer base only works if steady supply comes first — that ordering is deliberate."
        />
        <Split
          paragraphs={[
            "Our goal with kerosene is to provide consumers with a consistent, cost-effective and balanced supply of natural-gas-derived energy sources and their derivatives.",
            "The strategic objective is to become a market leader in the energy sector by expanding the customer base, maintaining steady supply, increasing operational effectiveness and applying scientific and technological capability — in that order of priority.",
            "Every batch is checked in cooperation with independent laboratories before release, so buyers can run their own confirmatory analysis without disputing our figures first.",
          ]}
          figure={<Flame />}
          caption="Flash point reference — Jet A-1 / TS-1 analog"
        />
      </Section>

      <CtaBand heading="Ask about kerosene lead times" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}