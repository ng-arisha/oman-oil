import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import { Leaf } from "@/components/figures/Figures";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sustainability" };

export default function SustainabilityPage() {
  return (
    <>
      <Hero
        crumb="Sustainability"
        lines={["Growing the business without", "growing the footprint"]}
        lead="Our ambition is to expand in the oil and gas sector while reducing environmental effect and increasing social impact — treated as one objective, not two competing ones."
        meta={[
          { value: "Annual", label: "safety system inspection" },
          { value: "Ongoing", label: "efficiency programme" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Operational approach"
          heading="Efficiency and safety, measured the same way"
          note="The specific purpose behind expansion is what determines whether it's compatible with a smaller footprint."
        />
        <Split
          paragraphs={[
            "Our specific purpose and operational experience in the business model are what we're relying on to expand responsibly — growth and environmental performance are managed against the same set of internal metrics, not separately.",
            "Terminal safety management systems are inspected annually by local authorities at every site we operate, and that inspection cadence applies uniformly rather than varying by jurisdiction.",
            "Social impact is treated as a deliverable of the operating model: stable long-term relationships with producer nations, consistent local employment at terminals, and transparent lab-verified product quality for every customer.",
          ]}
          figure={<Leaf />}
          caption="Output vs. emissions intensity, direction of travel"
        />
      </Section>
    </>
  );
}