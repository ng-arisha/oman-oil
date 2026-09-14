import CtaBand from "@/components/CtaBand";
import { Distillation, Gauge, Shield } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import SpecTable from "@/components/SpecTable";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bitumen" };

export default function BitumenPage() {
  return (
    <>
      <Hero
        crumb="Products / Bitumen"
        lines={["Binder for roads, roofs", "and airport runways"]}
        lead="The Bitumen Material Plant (BMP) produces road, roofing and airport-grade bitumen, including a modified binder that extends resurfacing intervals from three years to seven."
        meta={[
          { value: "745,000t", label: "sold in 2018" },
          { value: "3→7yr", label: "resurfacing interval, modified binder" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="What bitumen is"
          heading="A refined residue, or a natural deposit"
          note="Thick, sticky and dark: bitumen is either the last fraction off the distillation column, or found ready-formed in the ground."
        />
        <Split
          paragraphs={[
            "Bitumen is petroleum in its thickest, stickiest form — a dark liquid or semi-solid that can be a refined product or a natural deposit. Before the twentieth century it was more commonly called asphaltum, a term borrowed from Ancient Greek.",
            "\u201cCrude bitumen\u201d describes the naturally occurring form. \u201cRefined bitumen\u201d is what's left after fractional distillation of crude oil boiling at 525°C (977°F) — by that point its viscosity is close to cold molasses.",
            "About 70% of the asphalt made from bitumen goes into roads, mixed with aggregate to form asphalt concrete. Most of the rest goes into roofing felt and bituminous waterproofing for flat roofs.",
          ]}
          figure={<Gauge />}
          caption="Penetration & softening point, by temperature"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Bitumen for roads"
          heading="Oxidised, separated, or compounded"
          note="Three production routes, one binder standard, checked against a Customs Union technical regulation."
          dark
        />
        <Split
          dark
          paragraphs={[
            "Road-oil bitumen is produced by oxidising the byproducts of direct oil distillation and selectively separating oil products — de-asphalting asphalts and selective refining extracts. Compounding, or mixing, is the alternative production route.",
            "It's used as a binder for new and repaired coatings on both roads and airports. Our production programme was set up to meet GOST 33133-2014, the Customs Union technical regulation standard, which expanded the testing procedures products have to pass.",
            "Beyond conditional viscosity and resistance to high-temperature impact, the standard also regulates how the bitumen resists ageing — both in transit and during asphalt-mix production.",
          ]}
          figure={<Shield />}
          caption="GOST 33133-2014 compliance mark"
        />
      </Section>

      <Section>
        <SectionHead
          eyebrow="Bitumen for roofing and buildings"
          heading="Lighter feedstock, lower oxidation temperature"
          note="Roofing grade takes a gentler production process than road-grade, by design."
        />
        <Split
          reverse
          paragraphs={[
            "Roofing-grade bitumen is produced by oxidising oil waste left over after atmospheric vacuum distillation. Compared with road bitumen, the process uses lighter, less viscous raw material and a lower oxidation temperature.",
            "That difference in process is what gives roofing bitumen the flexibility it needs to move with a building rather than crack against it.",
          ]}
          figure={<Distillation />}
          caption="Feedstock differences — road grade vs. roofing grade"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Reference"
          heading="Typical grade sheet"
          note="Penetration-graded bitumens, indicative values for planning purposes."
          dark
        />
        <SpecTable
          dark
          caption="Penetration grades — indicative, confirm against certificate of analysis"
          headers={["Grade", "Penetration (0.1mm, 25°C)", "Softening point", "Typical use"]}
          monoCols={[1, 2]}
          rows={[
            ["40/50", "40–50", "49–56°C", "Airport pavements, hot climates"],
            ["60/70", "60–70", "46–54°C", "General road paving"],
            ["80/100", "80–100", "42–51°C", "Cooler-climate road paving"],
            ["Modified (PMB)", "—", "≥60°C", "High-stress roads, 3→7yr resurfacing interval"],
          ]}
        />
      </Section>

      <CtaBand heading="Request a certificate of analysis" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}