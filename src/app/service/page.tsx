import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import type { Metadata } from "next";
import Image from "next/image";

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
        <h2 className="mb-6 text-center text-[26px] uppercase text-red sm:text-[32px] lg:text-[38px]">Services</h2>
        <p className="mx-auto max-w-[86ch] text-center text-[#4b5068]">
          Services that are tailored to each customer&rsquo;s needs and budget. What distinguishes a top-notch
          wholesale fuel supplier from the rest? Exceptional service in two words. Simply said, we don&rsquo;t
          believe in just offering turnkey wholesale fuel. In order to simplify your job and, in the end, give you
          peace of mind, Oman Oil Company goes above and above with the services we provide.
        </p>
      </Section>

      <Section>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="mb-6 text-[26px] uppercase leading-tight text-red sm:text-[32px] lg:text-[38px]">
              Advanced price-management strategies for the industry
            </h2>
            <p className="mb-6 max-w-[58ch] text-[#23253f]">
              At Oman Oil Company, we are aware that no two customers&rsquo; needs are ever the same, which is why
              we provide specialized price-management plans intended to reduce costs significantly by providing a
              fixed price. A known cost functions as &ldquo;insurance&rdquo; against unanticipated market events
              when compared to the pricing reference of your choosing.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">A sample of price-management programs we offer:</p>
            <ul className="list-disc space-y-2 pl-5 text-[#23253f]">
              <li>Firm Price Contracts</li>
              <li>Index Based Contracts</li>
              <li>Inventory Management Programs</li>
              <li>Customized Contracts Tailored to Your Company&rsquo;s Needs</li>
              <li>Fuel Swap Contracts</li>
              <li>Daily Pricing Deals</li>
            </ul>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/low-cost.jpg"
              alt="Waterside refinery terminal reflected in the water"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/low-cost.jpg"
              alt="Waterside refinery terminal reflected in the water"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-[26px] uppercase leading-tight text-red sm:text-[32px] lg:text-[38px]">
              Advanced market analytics
            </h2>
            <p className="mb-6 max-w-[62ch] text-[#23253f]">
              Your time has worth. In addition, time cannot be wasted on monitoring constantly changing statistics,
              graphs, or charts that influence your purchase choices in the unpredictable fuel sector. That&rsquo;s
              where we come in.
            </p>
            <p className="max-w-[62ch] text-[#23253f]">
              Oman Oil Company keeps a close eye on the most recent intraday market pricing as well as
              Russia&rsquo;s production, imports, and exports, political news, and significant weather occurrences.
              In an effort to keep you informed and to save you time and money, we back-test historical research
              that reflect seasonal purchasing patterns and market trends to identify when it is best to make your
              purchases.
            </p>
          </div>
        </div>
      </Section>

     
    </>
  );
}