import CtaBand from "@/components/CtaBand";
import { RouteMap, Tank } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section, SectionHead, Split } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Storage" };

export default function StoragePage() {
  return (
    <>
      <Hero
        crumb="Storage"
        lines={["Nine hundred thousand tonnes,", "under one safety system"]}
        lead="Terminal capacity at the port of Rotterdam and the Novorossiysk tank farm, run to one safety management standard and inspected annually by local authorities."
        meta={[
          { value: "900,000t", label: "Rotterdam capacity" },
          { value: "580,000 m³", label: "Novorossiysk by expansion" },
          { value: "9km", label: "internal rail" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Rotterdam terminal"
          heading="Three distillation units, one inspection standard"
          note="Positioned at the centre of the port, with safety management reviewed by local authorities every year."
        />
        <Split
          paragraphs={[
            "Our Rotterdam terminal runs an expanded safety management system to meet worldwide standard directives, inspected yearly by local port authorities rather than on a self-reported basis.",
            "The same system was adopted across every terminal the Antipina Tank Farm operates, so a customer storing cargo at any of our sea-port terminals is working to one consistent rule set.",
            "Three separate multipurpose distillation units run at the storage terminal, with more than 900,000 tonnes of storage space available in total.",
          ]}
          figure={<Tank />}
          caption="Terminal tank — fill level & outlet, schematic"
        />
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Novorossiysk terminal"
          heading="A four-tank farm built for expansion"
          note="580,000 cubic metres of near-term capacity, connected by nine kilometres of internal rail."
          dark
        />
        <Split
          dark
          reverse
          paragraphs={[
            "Alongside Rotterdam, we operate a dedicated storage farm at Novorossiysk: a four-tank oil farm with total capacity being expanded toward 580,000 cubic metres.",
            "A sizeable internal rail system, roughly nine kilometres long, connects the tank farm directly to loading points, cutting the handling steps between storage and onward transport.",
          ]}
          figure={<RouteMap />}
          caption="Novorossiysk tank farm → internal rail → loading"
        />
      </Section>

      <CtaBand heading="Need terminal space for a cargo?" btnText="Contact the desk" btnHref="/contact" />
    </>
  );
}