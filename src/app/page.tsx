import CtaBand from "@/components/CtaBand";
import EsgTriad from "@/components/EsgTriad";
import Hero from "@/components/Hero";
import IconGrid from "@/components/IconGrid";
import ImageCarousel from "@/components/ImageCarousel";
import Manifest from "@/components/Manifest";
import ProgressGrid from "@/components/ProgressGrid";
import { Section, SectionHead, Split } from "@/components/Section";
import SpecStrip from "@/components/SpecStrip";
import StatRings from "@/components/StatRings";
import ValueBlocks from "@/components/ValueBlocks";
import {
  Distillation,
  Gauge,
  IconEngineer,
  IconGauge,
  IconPerson,
  IconShield,
  Leaf,
  RouteMap,
  Shield,
  Tank,
} from "@/components/figures/Figures";

export default function HomePage() {
  return (
    <>
      <Hero
        crumb="Home"
        lines={["Crude, fuels and bitumen,", "moved with precision"]}
        lead="We trade, refine and store petroleum products across Oman and abroad — crude oil, diesel, kerosene, LPG and bitumen — backed by tank terminals in Rotterdam and Novorossiysk and a road fleet built for schedules that can't slip."
        meta={[
          { value: "900,000 t", label: "storage capacity" },
          { value: "5,000+", label: "trucks in fleet" },
          { value: "16", label: "terminals, owned & joint venture" },
          { value: "1979", label: "in continuous trade" },
        ]}
      />

      {/* About teaser + capability stats */}
      <Section>
        <SectionHead
          eyebrow="About us"
          heading="Working to reduce the stress you feel over fuel"
          note="Since 1979, transportation, commercial, jobber and government customers have relied on us for turnkey wholesale gasoline and diesel."
        />
        <Split
          paragraphs={[
            "Since 1979, we have concentrated on providing transportation, commercial, jobber and government customers with great service, in addition to turnkey wholesale gasoline and wholesale diesel fuels. With more than a billion gallons supplied annually, our goal is to simplify your job and, in the end, give you peace of mind.",
            "We are aware of the effect fuel has on your company and the particular requirements you have. Because of this, we approach each problem with a unique solution.",
          ]}
          figure={<Distillation />}
          caption="Simplified atmospheric distillation — indicative cut points"
        />
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
      </Section>

      {/* Our Key / Mission / Vision */}
      <Section dark>
        <SectionHead
          eyebrow="Direction"
          heading="Our key, mission and vision"
          note="What guides the shareholders, the business model, and the growth plan."
          dark
        />
        <ValueBlocks
          items={[
            {
              heading: "Our key",
              text: "On the basis of good asset management of shareholders, ensuring the Company's development as one of the major vertically integrated producers of oil and gas, oil and gas processing, and petrochemical products.",
            },
            {
              heading: "Our mission",
              text: "Our ambition is to expand our business in the oil and gas sector while reducing our environmental effect and boosting our social impact, drawing on our specific purpose and operational experience.",
            },
            {
              heading: "Our vision",
              text: "Our mission and operational skills in our business model enable us to expand our oil and gas company while reducing our environmental effects and raising social impact.",
            },
          ]}
        />
      </Section>

      {/* Our Strategy / Reliability / Dependable Supplier */}
      <Section>
        <SectionHead eyebrow="What sets us apart" heading="Strategy, reliability, dependability" />
        <ValueBlocks
          startIndex={2}
          items={[
            {
              heading: "Our strategy",
              text: "In order to realize our vision of a world where sustainable living is the norm, we have invested in a long-term strategy of divisions and brands that generate growth for the good of all stakeholders.",
            },
            {
              heading: "Reliability",
              text: "Oman Oil Company has a long history of delivering reliable results. We have a vast range of competencies in the petroleum industry and a leading collective global expertise in the subject.",
            },
            {
              heading: "Dependable supplier",
              text: "A long history of reliability, a vast range of competencies in the petroleum industry, and a leading collective global expertise in the subject.",
            },
          ]}
        />
      </Section>

      {/* Secured Supply */}
      <Section dark>
        <SectionHead
          eyebrow="Logistics"
          heading="Secured supply"
          note="Delivery is guaranteed even during times of national emergency — customer service runs 24/7/365."
          dark
        />
        <Split
          dark
          paragraphs={[
            "Our skilled staff is committed to assisting you in achieving your objective, and our transportation network provides you with the best combination of affordable and secure supply and delivery throughout the Oman region.",
            "Long-haul deliveries, wet-hosing coordination for off-site vehicles or equipment, temporary tank placement, and dedicated truck services are all standing capabilities that can be used in response to emergency supply outages.",
            "The coast-to-coast supply and logistics network provides pipeline shipment via direct terminal access or delivery, with intraday market trends examined to determine the best delivery windows while keeping abreast of developments that could shake the market.",
          ]}
          figure={<RouteMap />}
          caption="Terminal → gantry → depot → customer"
        />
        <div className="mt-10">
          <CtaBandInline />
        </div>
      </Section>

      {/* Environmental / Social / Governance */}
      <Section>
        <SectionHead
          eyebrow="Sustainability"
          heading="Environmental, social, governance"
          note="Growth and impact, managed against the same set of internal metrics."
        />
        <EsgTriad
          items={[
            {
              label: "Environmental",
              text: "Terminal safety management systems are inspected annually by local authorities at every site we operate, with efficiency and emissions intensity tracked against the same metrics as growth.",
              figure: <Leaf />,
            },
            {
              label: "Social",
              text: "Our activities include a significant portion of social policy and charity — supporting culture, national values and community sport, and raising living standards where we operate.",
              figure: <Tank />,
            },
            {
              label: "Governance",
              text: "A Board and advisory group with long track records across finance and Oil & Gas project delivery oversee the Company's development and stakeholder reporting.",
              figure: <Shield />,
            },
          ]}
        />
      </Section>

      {/* Low Cost */}
      <Section dark>
        <SectionHead
          eyebrow="Pricing"
          heading="Low cost, held for decades"
          note="More than 30 years of cost-management expertise, built into every price-management plan."
          dark
        />
        <Split
          dark
          reverse
          paragraphs={[
            "We provide price-management plans that enable customers to boost earnings by reducing gasoline expenses, thanks to more than 30 years of cost-management expertise.",
            "Price-management strategies limit the impact of supply shortages, eliminate the volatility of fuel cost charges, and safeguard predictable budgets — with price protection, ongoing discounts, 365-day dispatch access and customised delivery follow-ups.",
            "Technology support, including specialised reporting and industry analytics, plus repeated daily remote tank checks, saves time and money and guards against fuel shortages before they happen.",
          ]}
          figure={<Gauge />}
          caption="Reference price vs. fixed contract price — illustrative"
        />
      </Section>

      {/* Focused on you — carousel */}
      <Section>
        <SectionHead eyebrow="Positioning" heading="Oman Oil Company is focused on you" />
        <div className="grid items-start gap-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <ImageCarousel
            slides={[
              { src: "/images/carousel-1.webp", alt: "LNG storage tanks and valve manifold at a terminal", caption: "Terminal valve manifold — storage & loading" },
              { src: "/images/carousel-2.webp", alt: "Refinery towers at sunset behind green fields", caption: "Refining — crude through to finished grades" },
              { src: "/images/carousel-3.png", alt: "Aerial view of a snow-covered industrial facility", caption: "Novorossiysk-region facility, winter operations" },
              { src: "/images/carousel-4.jpg", alt: "Aerial view of a riverside refinery and tank farm", caption: "Tank farm and refinery, riverside terminal" },
            ]}
          />
          <div className="prose">
            <p className="mb-4 max-w-[52ch] text-[#23253f]">
              Oman Oil Company is a leading wholesale gasoline supplier serving Oman. We work to provide customers
              with the ideal blend of inexpensive, bulk fuel and secured supply and delivery, built on the
              cornerstone of exceptional service.
            </p>
            <p className="max-w-[52ch] text-[#23253f]">
              This includes wholesale gasoline and diesel as well as cost-saving price-management programmes like
              fixed price and firm price.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section dark>
        <SectionHead
          eyebrow="Why choose us"
          heading="What buyers get from working with us"
          note="Full cooperation with major laboratories means buyers can independently verify what they've bought."
          dark
        />
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
              icon: <IconShield />,
              heading: "Guarantee of service",
              text: "In-depth knowledge of Oil and Gas production, combined with Board and management experience, to deliver well-refined products.",
            },
            {
              icon: <IconGauge />,
              heading: "Scheduled production",
              text: "A 200,000 barrel-per-day modular crude oil refinery plant is moving forward on the basis of a full techno-economic feasibility study.",
            },
          ]}
        />
      </Section>

      {/* Work Experience */}
      <Section>
        <SectionHead eyebrow="Track record" heading="Work experience" />
        <ProgressGrid
          items={[
            {
              heading: "Transport of products by railway",
              text: "Railway shipment of petroleum products, organised professionally and moved through transport that complies with both Oman and international legal requirements.",
              pillLabel: "Railway transportation",
              value: 82,
            },
            {
              heading: "Storage and loading",
              text: "Strong partnerships with storage-facility owners across Oman, authorised to store and trade a range of clean petroleum products — leased exclusively or under a sharing agreement.",
              pillLabel: "Storage and loading",
              value: 88,
            },
            {
              heading: "Management",
              text: "In charge of privately owned tank storage in Oman and other world-safe ports outside the jurisdiction of oil giants, billing companies for handling and storage.",
              pillLabel: "Management",
              value: 70,
            },
            {
              heading: "Dependable vendor",
              text: "A long history of reliability, with a vast range of competencies in the petroleum industry and leading collective global expertise.",
              pillLabel: "Dependable vendor",
              value: 85,
            },
            {
              heading: "Reliability",
              text: "A long history of delivering reliable results, with a vast range of competencies in the petroleum industry.",
              pillLabel: "Reliability",
              value: 90,
            },
            {
              heading: "Modern equipment",
              text: "Investment in modern equipment and innovation to gradually reduce the consumption of natural resources, materials and energy while maintaining maximum output.",
              pillLabel: "Modern equipment",
              value: 78,
            },
          ]}
        />
      </Section>

      {/* Product manifest */}
      <Section dark>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-2.5 font-mono text-[12.5px] text-red">Product range</p>
            <h2 className="max-w-[14ch] text-[26px] sm:text-[32px] lg:text-[38px]">Browse by grade</h2>
          </div>
          <p className="max-w-70 font-mono text-[12.5px] text-steel-on-dark">
            Specifications, typical uses and standards for each product.
          </p>
        </div>
        <Manifest
          dark
          items={[
            { tag: "01", name: "Oil and gas", desc: "Crude oil and natural gas supply, upstream to midstream.", href: "/oil-and-gas" },
            { tag: "02", name: "Bitumen", desc: "Road, airport and roofing grades, oxidised and straight-run.", href: "/bitumen" },
            { tag: "03", name: "Kerosene", desc: "Aviation and heating grades under lab-verified specification.", href: "/kerosene" },
            { tag: "04", name: "Gasoline AI-92", desc: "Unleaded RON 92 for the passenger vehicle market.", href: "/gasoline-ai-92" },
            { tag: "05", name: "DT analogs", desc: "Summer, winter and arctic diesel fuel equivalents.", href: "/dt-analogs" },
          ]}
        />
      </Section>

      <Section>
        <SectionHead eyebrow="Why buyers stay" heading="What holds the supply chain together" />
        <SpecStrip
          items={[
            { num: "A", heading: "Expert engineers", text: "Refining and trading specialists drawn from established Oil & Gas organisations, not generalist brokers." },
            { num: "B", heading: "Board experience", text: "A Board and advisory group with long track records across finance and Oil & Gas project delivery." },
            { num: "C", heading: "Guaranteed service", text: "Combined technical knowledge and management practice, built into every refined product we release." },
            { num: "D", heading: "Scheduled production", text: "A 200,000 barrel-per-day modular refinery is moving through feasibility toward construction." },
          ]}
        />
      </Section>

      <CtaBand
        heading="Talk to us about a supply schedule"
        sub="Our team responds with indicative pricing and lead times, usually within two working days."
        btnText="Contact the desk"
        btnHref="/contact"
      />
    </>
  );
}

function CtaBandInline() {
  return (
    
      <a href="/contact"
      className="inline-flex items-center gap-2.5 border border-red px-6.5 py-3.5 font-display text-[15px] text-red hover:bg-red hover:text-ink"
    >
      Contact us
    </a>
  );
}