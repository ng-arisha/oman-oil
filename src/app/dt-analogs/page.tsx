import CtaBand from "@/components/CtaBand";
import { ColdFlow } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "DT analogs" };

export default function DtAnalogsPage() {
  return (
    <>
      <Hero
        crumb="Products / DT analogs"
        lines={["Diesel fuel, graded", "for the season it's sold in"]}
        lead="DT (diesel toplivo) analogs cover summer, winter and arctic diesel equivalents — the difference between them is how far the fuel keeps flowing as the temperature drops."
        meta={[
          { value: "3", label: "seasonal grades" },
          { value: "−45°C", label: "arctic grade cold filter point" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Why grade by season"
          heading="Cold filter plugging point is the number that matters"
          note="A diesel that gels in the fuel line at −10°C is a summer grade in the wrong tank, not a bad batch."
        />
        <Split
          paragraphs={[
            "Diesel fuel analogs are graded by how they behave in the cold, not just by cetane number. As temperature drops, paraffin wax in diesel starts to crystallise and can block fuel filters long before the fuel actually freezes solid.",
            "Summer grade is specified for operation above roughly 0°C, winter grade extends usable range down toward −25°C, and arctic grade is formulated to keep flowing to around −45°C — the cold filter plugging point (CFPP) is the specification figure that sets the boundary between them.",
            "Matching the grade to the season and region a fleet actually operates in avoids the two expensive failure modes: gelled fuel lines in a cold snap, or paying arctic-grade pricing for a fleet that never leaves a warm climate.",
          ]}
          figure={<ColdFlow />}
          caption="Flow vs. temperature by seasonal grade"
        />
      </Section>

      <CtaBand heading="Confirm the right grade for your region" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}