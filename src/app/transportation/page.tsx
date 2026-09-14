import CtaBand from "@/components/CtaBand";
import { RouteMap, Tank } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Transportation" };

export default function TransportationPage() {
  return (
    <>
      <Hero
        crumb="Transportation"
        lines={["Over five thousand trucks,", "one automated gantry"]}
        lead="Critical commodities still have to arrive on schedule no matter what happens upstream — that's the job of the fleet, the terminals and Europe's first fully automated loading gantry."
        meta={[
          { value: "5,000+", label: "specialised trucks" },
          { value: "16", label: "terminals, owned & JV" },
          { value: "1st", label: "fully automated gantry in Europe" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Road fleet"
          heading="Coast-to-coast, with contingency built in"
          note="Price-management programmes only work if delivery is dependable enough to plan against."
        />
        <Split
          paragraphs={[
            "Over 5,000 specialised trucks, two company-owned terminals and fourteen joint-venture terminals make up the logistics network across Europe, supplemented by maritime fleet capacity serving both group companies and third-party upstream and downstream businesses.",
            "The network is built for emergencies as much as for routine delivery: long-haul deliveries, wet-hosing coordination for off-site vehicles or equipment, temporary tank placement, and dedicated truck services are all standing capabilities, not one-off arrangements.",
          ]}
          figure={<RouteMap />}
          caption="Terminal → gantry → depot → customer"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Automated gantry"
          heading="Consistency built into the loading process"
          note="A fully automated gantry removes the variability that comes from manual loading procedures."
          dark
        />
        <Split
          dark
          reverse
          paragraphs={[
            "We own and operate the first fully automated gantry in Europe, built to keep loading consistent, hygienic, secure, safe, efficient and dependable in line with our operating objectives.",
            "Automation doesn't replace the safety inspection regime — it reduces the number of manual steps where something can go wrong before that inspection ever happens.",
          ]}
          figure={<Tank />}
          caption="Automated loading sequence, terminal side"
        />
      </Section>

      <CtaBand heading="Plan a delivery route with us" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}