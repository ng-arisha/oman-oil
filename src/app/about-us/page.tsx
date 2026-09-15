import HeroCarousel from "@/components/HeroCarousel";
import { Section } from "@/components/Section";
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
        
       
      </Section>
    </>
  );
}
