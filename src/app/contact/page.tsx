import ContactForm from "@/components/ContactForm";
import { Pin } from "@/components/figures/Figures";
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import SpecStrip from "@/components/SpecStrip";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Hero
        crumb="Contact"
        lines={["Get in touch with", "the trading desk"]}
        lead="We attach real importance to service quality, product range and customer loyalty — reach us directly, or send a message and we'll route it to the right desk."
        meta={[
          { value: "Mon–Sat", label: "office hours" },
          { value: "48hr", label: "typical response window" },
        ]}
      />

      <Section>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />
          <figure className="border border-[rgba(21,19,15,0.13)] bg-paper-soft p-5">
            <Pin />
            <figcaption className="mt-3 font-mono text-[11.5px] text-steel">
              Head office — Aktau, Mangistau region
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section dark>
        <SpecStrip
          dark
          items={[
            { num: "Address", heading: "Head office", text: "Microdistrict 12, Building 79/1, Aktau, Mangistau Region" },
            { num: "Phone", heading: "Call the desk", text: "+77 47 465 8669" },
            { num: "Email", heading: "Write to us", text: "info@omanoilcompany.com" },
            { num: "Hours", heading: "When we're open", text: "Monday – Saturday" },
          ]}
        />
      </Section>
    </>
  );
}