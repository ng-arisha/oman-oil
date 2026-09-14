import CtaBand from "@/components/CtaBand";
import { Gauge, Grid } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Hero
        crumb="Services"
        lines={["Price protection, without", "the spreadsheet homework"]}
        lead="No two customers buy fuel the same way, so we don't sell it the same way either. Fixed-price and firm-price programmes, and a market desk that watches the variables so you don't have to."
        meta={[
          { value: "24/7", label: "market monitoring" },
          { value: "2", label: "pricing programmes" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Price management"
          heading="A known cost, working as insurance"
          note="Fixed-price and firm-price plans turn an unpredictable market into a number you can budget against."
        />
        <Split
          paragraphs={[
            "We're aware that no two customers' needs are ever the same, which is why we offer price-management plans built to reduce exposure — chief among them a fixed price set against the reference index of your choosing.",
            "Compared to buying at spot, a known cost functions as insurance against the kind of sudden market move that wrecks a quarterly budget. You trade some upside for a number you can actually plan around.",
          ]}
          figure={<Gauge />}
          caption="Reference price vs. fixed contract price — illustrative"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Market intelligence"
          heading="We watch the variables that move fuel prices"
          note="Weather, politics and freight all move the number on your invoice before you see it."
          dark
        />
        <Split
          dark
          reverse
          paragraphs={[
            "Time spent tracking intraday pricing, production and export data, political developments and severe weather is time not spent running your own business — so our desk does that tracking and passes on what's actionable.",
            "We back-test historical purchasing patterns against seasonal demand so a buying window can be flagged before it closes, not after.",
          ]}
          figure={<Grid />}
          caption="Inputs the desk tracks daily"
        />
      </Section>

      <CtaBand heading="Ask about a fixed-price programme" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}