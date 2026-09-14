import CtaBand from "@/components/CtaBand";
import { Octane } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gasoline AI-92" };

export default function GasolineAI92Page() {
  return (
    <>
      <Hero
        crumb="Products / Gasoline AI-92"
        lines={["Unleaded, RON 92,", "built for the daily fleet"]}
        lead="AI-92 is the standard unleaded grade for passenger vehicles across the markets we serve — a 92 research octane number, blended and tested to stay inside spec batch to batch."
        meta={[
          { value: "92", label: "research octane number" },
          { value: "Unleaded", label: "formulation" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="What AI-92 is"
          heading="The everyday grade, held to spec"
          note="Octane rating measures resistance to knock — 92 RON covers the great majority of passenger vehicles on the road today."
        />
        <Split
          paragraphs={[
            "AI-92 denotes an unleaded gasoline with a research octane number (RON) of 92 — the grade most passenger vehicles are designed to run on, as distinct from higher-octane grades built for higher-compression engines.",
            "Blending is controlled at the terminal, with each batch checked against the same octane, vapour-pressure and sulphur-content limits before release, so a tank fill in one delivery window performs the same as the next.",
          ]}
          figure={<Octane />}
          caption="Octane rating vs. compression tolerance"
        />
      </Section>

      <CtaBand heading="Request an AI-92 delivery schedule" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}