import {
  IconClock,
  IconGear,
  IconHandshake,
  IconStar,
  IconThumbsUp,
} from "@/components/figures/Figures";
import HeroCarousel from "@/components/HeroCarousel";
import { Section } from "@/components/Section";
import StatRings from "@/components/StatRings";
import ValueBlocks from "@/components/ValueBlocks";
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
    </>
  );
}
