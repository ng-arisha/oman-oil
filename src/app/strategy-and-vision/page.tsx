import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import SpecStrip from "@/components/SpecStrip";
import { Calendar } from "@/components/figures/Figures";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Strategy and vision" };

export default function StrategyPage() {
  return (
    <>
      <Hero
        crumb="About us / Strategy and vision"
        lines={["Trade that gets goods", "to where they're needed"]}
        lead="Our corporate concept rests on two things: accountability and trust. Everything downstream of that — safety, logistics, timing — is process."
        meta={[
          { value: "100%", label: "trade-flow ownership" },
          { value: "24/7", label: "shipment tracking" },
        ]}
      />

      <Section>
        <SectionHead heading="Four working principles" />
        <SpecStrip
          items={[
            { num: "01", heading: "Sincere by default", text: "We're consistent in conduct, corporate ethics and moral position — the same answer whether the customer is large or small." },
            { num: "02", heading: "Full trade flow", text: "We don't hand a shipment off between vendors partway through. Procurement, delivery and specification sign-off sit with one desk." },
            { num: "03", heading: "Safety first", text: "Every stage carries its own safety measures, checked before the next stage starts, not audited after the fact." },
            { num: "04", heading: "Built to improve", text: "Systems and functionality get revisited on a schedule, not only when something breaks." },
          ]}
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Why it matters"
          heading="Attention to service, start to finish"
          note="Continuous improvement is a discipline we apply to the process, not a slogan we apply to the marketing."
          dark
        />
        <Split
          dark
          paragraphs={[
            "From the moment a trade is agreed to the moment goods clear at the destination port, the same team stays accountable for it. That continuity is what lets us commit to specification and timing at the same time.",
            "We treat every completed trade as a chance to tighten the next one — updated logistics data, updated safety checklists, updated supplier vetting. None of that is visible to a buyer directly, but it shows up in on-time delivery rates.",
          ]}
          figure={<Calendar />}
          caption="Feasibility → build → commission, applied to every commitment"
        />
      </Section>
    </>
  );
}