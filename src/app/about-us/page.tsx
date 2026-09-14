import CtaBand from "@/components/CtaBand";
import { Grid, RouteMap } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About us" };

export default function AboutUsPage() {
  return (
    <>
      <Hero
        crumb="About us"
        lines={["A trading house built", "on the full barrel"]}
        lead="Since 1979 we have supplied transport, commercial, jobber and government customers with wholesale fuels and bitumen — more than a billion gallons moved a year, with the paperwork and logistics handled end to end."
        meta={[
          { value: "1979", label: "founded" },
          { value: "1bn+", label: "gallons supplied yearly" },
          { value: "2", label: "core terminals" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Overview"
          heading="One supplier, the whole product list"
          note="Crude oil, diesel, lubricants, aviation kerosene, LPG, bitumen, fuel oil, polypropylene and urea move through the same desk."
        />
        <Split
          paragraphs={[
            "We built the business around a single idea: a buyer shouldn't need five suppliers to cover a fuel programme. Crude oil, diesel fuel, lubricants, aviation kerosene, LPG, bitumen, fuel oil, polypropylene and urea all move through the same contracting and logistics desk.",
            "That range only works with a route map behind it. Our supply corridors run through Asian markets on dedicated freight lanes, built specifically for petrochemical cargo rather than adapted from general freight.",
          ]}
          figure={<RouteMap />}
          caption="Primary trade corridors — terminal to hub to port"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Track record"
          heading="Small fields, unbalanced systems, still delivered"
          note="Field experience across regions with uneven infrastructure is where a trading desk earns its margin."
          dark
        />
        <Split
          dark
          reverse
          paragraphs={[
            "Most of our operating experience comes from fields with unbalanced development systems — the kind of asset where standard playbooks don't apply. That's built familiarity with the specifics of working across very different regulatory and physical environments.",
            "Long-term relationships with producers in Oman and abroad, paired with an internal IT system for contract and shipment tracking, let us offer customs clearance and integrated supply chain handling as one service rather than three separate vendors.",
          ]}
          figure={<Grid />}
          caption="Coverage nodes across active trade regions"
        />
      </Section>

      <CtaBand heading="Read our strategy and vision" btnText="Strategy and vision" btnHref="/strategy-and-vision" />
    </>
  );
}