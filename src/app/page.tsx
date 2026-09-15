import CardCarousel from "@/components/CardCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import HoverRevealCard from "@/components/HoverRevealCard";
import IconGrid from "@/components/IconGrid";
import ProgressGrid from "@/components/ProgressGrid";
import { Section } from "@/components/Section";
import StatRings from "@/components/StatRings";
import ValueBlocks from "@/components/ValueBlocks";
import {
  IconClock,
  IconEngineer,
  IconGear,
  IconHandshake,
  IconPerson,
  IconPhone,
  IconShield,
  IconStar,
  IconThumbsUp,
} from "@/components/figures/Figures";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* About teaser + capability stats */}
      <Section>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-2.5 font-mono text-[12.5px] text-red-deep">
              About us
            </p>
            <h2 className="mb-8 max-w-[14ch] text-[26px] sm:text-[32px] lg:text-[38px]">
              Working to reduce the stress you feel over fuel
            </h2>
            <p className="mb-4 max-w-[62ch] text-[#23253f]">
              Since 1979, we have concentrated on providing transportation,
              commercial, jobber and government customers with great service, in
              addition to turnkey wholesale gasoline and wholesale diesel fuels.
              With more than a billion gallons supplied annually, our goal is to
              simplify your job and, in the end, give you peace of mind.
            </p>
            <p className="max-w-[62ch] text-[#23253f]">
              We are aware of the effect fuel has on your company and the
              particular requirements you have. Because of this, we approach
              each problem with a unique solution.
            </p>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/about-refinery.jpg"
              alt="Aerial night view of an illuminated oil refinery"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-14">
          <StatRings
            items={[
              { label: "Oil storage", value: 80 },
              { label: "Distribution", value: 88 },
              { label: "Marketing", value: 76 },
              { label: "Exploration", value: 52 },
            ]}
          />
        </div>
        <div className="mt-14">
          <ValueBlocks
            items={[
              {
                heading: "Our key",
                tone: "purple",
                icon: <IconGear />,
                text: "On the basis of good asset management of shareholders, ensuring the Company's development as one of the major vertically integrated producers of oil and gas, oil and gas processing, and petrochemical products.",
              },
              {
                heading: "Our mission",
                tone: "slate",
                icon: <IconClock />,
                text: "Our ambition is to expand our business in the oil and gas sector while reducing our environmental effect and boosting our social impact, drawing on our specific purpose and operational experience.",
              },
              {
                heading: "Our vision",
                tone: "green",
                icon: <IconHandshake />,
                text: "Our mission and operational skills in our business model enable us to expand our oil and gas company while reducing our environmental effects and raising social impact.",
              },
              {
                heading: "Our strategy",
                tone: "red",
                icon: <IconStar />,
                text: "In order to realize our vision of a world where sustainable living is the norm, we have invested in a long-term strategy of divisions and brands that generate growth for the good of all stakeholders.",
              },
              {
                heading: "Reliability",
                tone: "orange",
                icon: <IconThumbsUp />,
                text: "Oman Oil Company has a long history of delivering reliable results. We have a vast range of competencies in the petroleum industry and a leading collective global expertise in the subject.",
              },
              {
                heading: "Dependable supplier",
                tone: "wine",
                icon: <IconHandshake />,
                text: "A long history of reliability, a vast range of competencies in the petroleum industry, and a leading collective global expertise in the subject.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Secured Supply */}
      {/* Secured Supply */}
      <Section white>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="mb-6 text-[26px] uppercase text-red sm:text-[32px] lg:text-[38px]">
              Secured supply
            </h2>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Our skilled staff is committed to assisting you in achieving your
              objective, and our vast transportation network provides you with
              the best combination of affordable and secure supply and delivery
              throughout the Oman region.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Even during times of national emergency, delivery is guaranteed
              and customer service is available 24/7/365.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Long-haul deliveries, wet-hosing coordination for off-site
              vehicles or equipment, temporary tank placement, and dedicated
              truck services are all capabilities that can be used in response
              to emergency supply outages.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              The coast-to-coast supply and logistics network provides pipeline
              shipment via direct terminal access or delivery.
            </p>
            <p className="mb-8 max-w-[58ch] text-[#23253f]">
              Intraday market trends are examined to determine the best delivery
              windows and dates, while keeping abreast of developments that
              could shake the market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border-2 border-red px-7 py-3 font-display text-[15px] text-red hover:bg-red hover:text-white"
            >
              Contact us
            </Link>
          </div>
          <div className="overflow-hidden">
            <div className="h-32 bg-teal sm:h-40" />
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/secured-supply.jpg"
                alt="Engineer descending stairs beside an insulated pipeline in the snow"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="h-32 bg-teal sm:h-40" />
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <HoverRevealCard
            src="/images/esg-environmental.webp"
            alt="Oil rig and tanker at sea"
            title="Environmental"
            text="Successful experience in profitable operations in small fields with unbalanced development systems; knowledge of the specifics of work in various regions of the world. Extensive experience in the implementation of international oil and gas projects, stable long-term relations with leading oil companies in Oman, and the world entirely, conducting research and distinctively impact synergistic experiences."
          />
          <HoverRevealCard
            src="/images/about-refinery.jpg"
            alt="Aerial night view of an illuminated oil refinery"
            title="Social"
            text="The activities of Oman Oil Company includes a significant portion of social policy and charity. The company kept a close on initiatives in 2019 that supported culture, preserved and revived Oman national values and spiritual legacy, promoted and integrated Oman art into the global cultural landscape, and advanced mass and high-performance sports. Oman Oil Company undertakes projects to raise living standards and maintain the unique cultural identity of Oman citizens and enters into agreements with local governments within the company's geographic footprint."
          />
          <HoverRevealCard
            src="/images/esg-national-value.webp"
            alt="Industrial storage tanks under a clear sky"
            title="National value"
            text="The activities of Oman Oil Company includes a significant portion of social policy and charity. The company kept a close on initiatives in 2019 that supported culture, preserved and revived Oman national values and spiritual legacy, promoted and integrated Oman art into the global cultural landscape, and advanced mass and high-performance sports. Oman Oil Company undertakes projects to raise living standards and maintain the unique cultural identity of Oman citizens and enters into agreements with local governments within the company's geographic footprint."
          />
        </div>
      </Section>

      {/* Low Cost */}
      {/* Low Cost */}
      <Section white>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="mb-6 text-[26px] uppercase text-red sm:text-[32px] lg:text-[38px]">
              Low cost
            </h2>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              We can provide price-management plans that enable customers to
              boost earnings by reducing gasoline expenses thanks to our more
              than 30 years of cost management expertise.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Price-management strategies that limit the impact of supply
              shortages, eliminate the volatility of fuel cost charges, and
              safeguard and deliver predictable budgets.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Price protection, ongoing discounts, 365 days a year dispatch
              access, and customized delivery follow-ups.
            </p>
            <p className="mb-4 max-w-[58ch] text-[#23253f]">
              Technology support, including specialized reporting and
              cutting-edge industry analytics.
            </p>
            <p className="max-w-[58ch] text-[#23253f]">
              To save time, money, and to guard against fuel shortages, repeated
              daily remote tank checks are performed.
            </p>
          </div>
          <div className="group relative aspect-16/10 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/low-cost.jpg"
              alt="Refinery lit at dusk, reflected in water"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-out group-hover:[clip-path:inset(0_0%_0_0)]"
            >
              <Image
                src="/images/low-cost.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={{
                  filter:
                    "sepia(0.5) hue-rotate(175deg) saturate(2.4) brightness(0.92)",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Focused on you — carousel */}
      {/* Focused on you */}
      <Section>
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <CardCarousel
            slides={[
              {
                src: "/images/focused-1.webp",
                alt: "Storage tanks with a tanker truck parked alongside",
              },
              {
                src: "/images/focused-2.webp",
                alt: "Storage tanks with a tanker truck parked alongside",
              },
              {
                src: "/images/focused-3.webp",
                alt: "Pipeline valves and manifold at a terminal",
              },
              {
                src: "/images/focused-4.webp",
                alt: "Oil rig and supply vessel at sunset",
              },
            ]}
          />
          <div>
            <p
              className="font-display text-[26px] sm:text-[32px]"
              style={{ color: "#09105c" }}
            >
              The
            </p>
            <h2 className="mb-2 font-display text-[32px] uppercase text-red sm:text-[42px]">
              Oman Oil Company
            </h2>
            <p
              className="mb-6 font-display text-[26px] sm:text-[32px]"
              style={{ color: "#09105c" }}
            >
              Is Focused On You
            </p>
            <p className="max-w-[58ch] text-[#23253f]">
              Oman Oil Company is the largest pure wholesale gasoline seller in
              the Oman. We work hard to provide customers with the ideal blend
              of inexpensive, bulk fuel and secured supply and delivery
              throughout the Oman Federation — all built on the cornerstone of
              exceptional service. This includes wholesale gasoline and diesel
              as well as cost-saving price-management programs like fixed price
              and firm price.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      {/* Why Choose Us */}
      <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.14)] py-19 text-paper">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-refinery.jpg"
            alt="Aerial night view of an illuminated oil refinery"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/80" />
        </div>
        <div className="mx-auto max-w-max px-5 sm:px-8">
          <h2 className="mb-6 text-[26px] uppercase sm:text-[32px] lg:text-[38px]">
            Why choose us
          </h2>
          <p className="mb-14 max-w-[80ch] text-[#c9d0e6]">
            We guarantee high quality of petroleum and gas products that we
            supply globally! We have been in full cooperation with the largest
            companies and laboratories in the country, our Buyers have unique
            opportunity to quickly and efficiently carry out further analysis of
            the acquired oil.
          </p>
          <IconGrid
            items={[
              {
                icon: <IconEngineer />,
                heading: "Expert engineers",
                text: "Complemented by several organisations with long-lasting experience in Oil & Gas — mainly engineering, refining and trading.",
              },
              {
                icon: <IconPerson />,
                heading: "Experience & skills",
                text: "The management team is supported by a Board of Directors and Advisors with deep track records in finance and Oil & Gas projects.",
              },
              {
                icon: <IconPhone />,
                heading: "Guarantee service",
                text: "In-depth knowledge of Oil and Gas production, combined with Board and management experience, to deliver well-refined products.",
              },
              {
                icon: <IconShield />,
                heading: "Schedule productions",
                text: "A 200,000 barrel-per-day modular crude oil refinery plant is moving forward on the basis of a full techno-economic feasibility study.",
              },
            ]}
          />
        </div>
      </section>

      {/* Work Experience */}
      <Section>
        <h2 className="mb-14 text-center text-[26px] uppercase text-red sm:text-[32px] lg:text-[38px]">
          Work experience
        </h2>

        <ProgressGrid
          items={[
            {
              heading: "Transport of products by railway",
              text: [
                "Organized the railway shipment of any petroleum products in a professional manner.",
                "The materials are moved through railroad transport that complies with both Oman and international legal requirements as well as recognized norms and standards, making it possible to guarantee the entire safety of petroleum product transportation.",
              ],
              pillLabel: "Railway Transportation",
              value: 77,
            },
            {
              heading: "Storage and loading",
              text: [
                "We have strong partnerships with owners of Storage Facility across Oman through our networks. The Department of Petroleum Resources (DPR) has fully authorized these storage facilities to store and trade a range of clean petroleum products. The facilities can be leased exclusively or under a sharing agreement.",
              ],
              pillLabel: "Storage and Loading",
              value: 83,
            },
            {
              heading: "Management",
              text: [
                "Our management is in charge of privately owned tank storage in Oman, and other world-safe ports that are not under the jurisdiction of oil giants. Our management bills all oil companies for the expenses related to handling and storing their products.",
              ],
              pillLabel: "Management",
              value: 92,
            },
            {
              heading: "Dependable vendor",
              text: [
                "Oman Oil Company has a long history of reliability. We have a vast range of competencies in the petroleum industry and a leading collective global expertise in the subject.",
              ],
              pillLabel: "Dependable Vendor",
              value: 73,
            },
          ]}
        />
      
      </Section>

     

     

     
    </>
  );
}


