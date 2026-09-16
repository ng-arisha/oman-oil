import { IconCoinLg, IconCompassLg, IconGearLg, IconOrgChartLg, IconSafeLg } from "@/components/figures/Figures";
import HeroCarousel from "@/components/HeroCarousel";
import { Section } from "@/components/Section";
import SquareFeatureGrid from "@/components/SquareFeatureGrid";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About us" };

export default function AboutUsPage() {
  return (
    <>
      <HeroCarousel cta={false} title="About us" text="" />
      <Section>
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-2.5 font-mono text-[12.5px] text-red-deep">
              About us
            </p>
            <h2 className="mb-8 max-w-[14ch] text-[26px] sm:text-[32px] lg:text-[38px]">
              Working to make fuel one less thing you have to worry about.
            </h2>
            <p className="mb-4 max-w-[62ch] text-[#23253f]">
              Since 1979, we have concentrated on providing transportation,
              commercial, jobber, and government customers with great service in
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
        
        <SquareFeatureGrid
          items={[
            {
              icon: <IconGearLg />,
              heading: "Operational Services",
              text: "Asian countries, is built with professional performance in provision of petrochemicals products services in the field of oil and natural gas production international marketing. Production of petroleum products, Crude oil production. Extraction of oil (associated gas), Provision of drilling services related to the production of oil, gas and gas condensate, Separation and extraction of fractions from oil (associated) gas.",
            },
            {
              icon: <IconCompassLg />,
              heading: "Comprehensive Experience",
              text: "Successful experience in profitable operations in small fields with unbalanced development systems; knowledge of the specifics of work in various regions of the world. extensive experience in the implementation of international oil and gas projects, stable long-term relations with leading oil companies in Oman, and the world entirely, conducting research and Distinctively impact synergistic experiences.",
            },
            {
              icon: <IconOrgChartLg />,
              heading: "Management Implementation",
              text: "Our deep industry know-how, an individual IT system, the successful implementation of best management practices and the dedication of our employees, we can offer our customers an unrivaled level of service at competitive prices and provide our customers with high-quality domestic and international transportation services, customs clearance, and integrated supply chain solutions.",
            },
            {
              icon: <IconCompassLg />,
              heading: "Integrated Production System",
              text: "Integration of the production system allows the Company to improve its competitive ability, ensure efficient and safe production, and, what is most important, contribute to the enhancement of professional competence of the employees and improvement of their working and social conditions.",
            },
            {
              icon: <IconCoinLg />,
              heading: "State-Of-The-Art Technology",
              text: "Asian countries, investment in targeted companies in Oman and abroad consists of acquiring a raw material base for production and ensuring a huge growth in our production capacity. The company uses state-of-the-art technology in its exploration work to improve exploration efficiency.",
            },
            {
              icon: <IconSafeLg />,
              heading: "High Standard Upstream Sector",
              text: "The Oman Oil Company exploration drilling success rate is approximately 86%. The upstream sector is a strategically important part of the vertically integrated Oman Oil Company, ensuring the smooth operation of the entire company.",
            },
          ]}
        />
      </Section>
    </>
  );
}
