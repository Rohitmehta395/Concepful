"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";

export default function Campaigns() {
  const campaigns = [
    {
      title: "Service Launches",
      desc: "Turn a new offer into a focused landing page with one clear action."
    },
    {
      title: "Industry Campaigns",
      desc: "Adapt the message for specific markets, audiences, or verticals."
    },
    {
      title: "Event Promotions",
      desc: "Build pages for conferences, webinars, workshops, and lead generation."
    },
    {
      title: "Productized Offers",
      desc: "Package expertise into a clear, conversion-ready experience."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Campaigns | Concepful"
        description="Build focused campaign experiences for service launches, industry outreach, events, and productized offers."
        path="/campaigns"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Campaigns", "item": "https://conceptful.agency/campaigns" }
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="nested" color="coral" className="-top-12 -right-16 w-[300px] h-[300px]" rotate={-10} opacity={0.4} />
        <HexDecor variant="cluster" color="blue" className="bottom-8 left-1/2 w-[200px] h-[200px]" rotate={6} opacity={0.4} />
        <HexDecor variant="dashed" color="ink" className="top-1/3 left-8 w-[100px] h-[100px]" rotate={20} opacity={0.18} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              One sharp campaign can change how people understand you.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed mb-10">
              Use this as a flexible landing page template for future promotions, service launches, and industry-specific campaigns.
            </p>
            <PillButton href="/contact">Build a Campaign</PillButton>
          </motion.div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaigns.map((camp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-10 shadow-[0_8px_30px_rgba(20,20,43,0.06)] border border-[#14142B]/5 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-[#14142B] mb-4">{camp.title}</h3>
                <p className="text-[#6E7191] text-lg">{camp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 bg-[#FFF7F4] text-center">
        <HexDecor variant="solid" color="coral" className="top-12 -left-12 w-[200px] h-[200px]" rotate={-12} opacity={0.6} />
        <HexDecor variant="nested" color="blue" className="-bottom-12 -right-16 w-[260px] h-[260px]" rotate={15} opacity={0.4} />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-10">
              Need a campaign that does more than look good?
            </h2>
            <PillButton href="/contact">Let's Build One</PillButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
