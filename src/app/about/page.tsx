"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <SeoHead 
        title="About Concepful | Clarity-First Creative Design Agency"
        description="Concepful helps companies make complex ideas clear through strategy, narrative, design, and scalable creative systems. Founder-led from Miami, FL."
        path="/about"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Concepful",
          "url": "https://conceptful.agency/about",
          "description": "Concepful is a clarity-first creative agency helping companies make complex ideas clear through strategy, narrative, and design.",
          "mainEntity": { "@id": "https://conceptful.agency/#organization" }
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://conceptful.agency/about" }
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <HexDecor variant="nested" color="blue" className="top-12 -left-24 w-[320px] h-[320px]" rotate={12} opacity={0.45} />
        <HexDecor variant="dashed" color="coral" className="top-24 -right-16 w-[220px] h-[220px]" rotate={-8} opacity={0.4} />
        <HexDecor variant="outline" color="ink" className="-bottom-12 left-1/3 w-[180px] h-[180px]" rotate={20} opacity={0.12} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              We make ideas make sense.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed mb-6">
              Concepful exists for companies with real value, complex ideas, and a message that has not fully clicked yet.
            </p>
            <p className="text-xl md:text-2xl text-[#14142B] font-medium leading-relaxed">
              Most companies do not have a bad product. They have a clarity problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#FFF7F4]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <SectionHeading 
              eyebrow="Philosophy"
              title="Good design starts before design."
            />
            <div className="flex items-end">
              <p className="text-xl text-[#6E7191] leading-relaxed">
                We believe clarity is a competitive advantage. Simplicity is harder than complexity. And the best creative work starts with a sharp understanding of what needs to be said.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Clarity before aesthetics",
              "Meaning before motion",
              "Systems before one-offs",
              "Truth before trends"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(20,20,43,0.04)] border border-[#14142B]/5 text-2xl font-bold text-[#14142B] flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFF4F1] flex items-center justify-center shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#FF3951]"></span>
                </div>
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="flex flex-col gap-16 relative before:absolute before:inset-0 before:ml-6 md:before:ml-12 before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-[#14142B]/10">
            {[
              { num: "01", title: "The Gap", desc: "Too many companies had strong ideas and weak explanations." },
              { num: "02", title: "The Method", desc: "Concepful was built around clarity-first creative thinking." },
              { num: "03", title: "The System", desc: "Strategy, narrative, design, and execution became one connected process." },
              { num: "04", title: "The Work", desc: "Today, Concepful helps companies turn complexity into brand experiences people understand." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex gap-8 md:gap-12"
              >
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#14142B]/10 flex items-center justify-center shrink-0 z-10 font-bold text-[#FF3951] text-lg md:text-3xl shadow-sm">
                  {step.num}
                </div>
                <div className="pt-2 md:pt-6 pb-8 border-b border-[#14142B]/5 flex-1">
                  <h3 className="text-[#FF3951] font-bold text-[13px] tracking-widest uppercase mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-[#FF3951] rounded-full inline-block"></span>
                    {step.title}
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold text-[#14142B] leading-tight">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-32 bg-[#14142B] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-12">
              Have an idea that is hard to explain?
            </h2>
            <PillButton href="/contact">Let's Make It Clear</PillButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
