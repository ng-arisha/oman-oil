import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import { Section, SectionHead, Split } from "@/components/Section";
import { Distillation } from "@/components/figures/Figures";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Oil and gas" };

export default function OilAndGasPage() {
  return (
    <>
      <Hero
        crumb="Products / Oil and gas"
        lines={["Upstream barrels,", "downstream grades"]}
        lead="From crude and natural gas through to the refined products that reach a forecourt or a roofline — one catalogue, laboratory-verified at every stage."
        meta={[
          { value: "5", label: "product lines" },
          { value: "100%", label: "lab-certified batches" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Upstream"
          heading="Crude oil and natural gas, sourced and scheduled"
          note="Supply agreements built for consistency first, price second."
        />
        <Split
          paragraphs={[
            "Our upstream desk secures crude oil and natural gas volumes against long-term agreements with producers in Oman and abroad, then schedules delivery against each customer's actual draw-down rather than a fixed calendar.",
            "Natural gas supply is managed for a consistent, cost-effective, balanced flow — the strategic objective is market leadership through reliability and operational effectiveness, not through being the lowest bidder in any single quarter.",
          ]}
          figure={<Distillation />}
          caption="Crude feed to refined cut, indicative"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Downstream"
          heading="Four refined product lines"
          note="Each with its own specification sheet and standard."
          dark
        />
        <Manifest
          dark
          items={[
            { tag: "01", name: "Bitumen", desc: "Road, airport and roofing grades, oxidised and straight-run.", href: "/bitumen" },
            { tag: "02", name: "Kerosene", desc: "Aviation and heating grades under lab-verified specification.", href: "/kerosene" },
            { tag: "03", name: "Gasoline AI-92", desc: "Unleaded RON 92 for the passenger vehicle market.", href: "/gasoline-ai-92" },
            { tag: "04", name: "DT analogs", desc: "Summer, winter and arctic diesel fuel equivalents.", href: "/dt-analogs" },
          ]}
        />
      </Section>
    </>
  );
}