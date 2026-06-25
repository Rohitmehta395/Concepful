"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ClaritySystemCaseStudy() {
  return (
    <>
      <SeoHead 
        title="Case Study: From scattered message to scalable brand system | Concepful"
        description="A case study showing how Concepful helped a complex business clarify its positioning, rebuild its narrative, and translate that into a sharper digital presence."
        path="/case-studies/clarity-system"
        type="article"
        image="/images/case-study-hero.png"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "From scattered message to scalable brand system",
          "description": "A case study showing how Concepful helped a complex business clarify its positioning, rebuild its narrative, and translate that into a sharper digital presence.",
          "url": "https://conceptful.agency/case-studies/clarity-system",
          "image": "https://conceptful.agency/images/case-study-hero.png",
          "author": { "@id": "https://conceptful.agency/#organization" },
          "publisher": { "@id": "https://conceptful.agency/#organization" },
          "mainEntityOfPage": "https://conceptful.agency/case-studies/clarity-system",
          "articleSection": "Case Study",
          "about": [
            "Brand strategy",
            "Positioning",
            "Narrative development",
            "Visual identity",
            "Website design"
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://conceptful.agency/case-studies" },
            { "@type": "ListItem", "position": 3, "name": "From scattered message to scalable brand system", "item": "https://conceptful.agency/case-studies/clarity-system" }
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="nested" color="blue" className="-top-16 -right-20 w-[320px] h-[320px]" rotate={-12} opacity={0.4} />
        <HexDecor variant="dashed" color="coral" className="top-40 left-12 w-[160px] h-[160px]" rotate={14} opacity={0.4} />
        <HexDecor variant="cluster" color="ink" className="bottom-12 right-1/4 w-[140px] h-[140px]" rotate={20} opacity={0.18} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link href="/case-studies" className="inline-flex items-center text-[#6E7191] hover:text-[#FF3951] font-medium mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              From scattered message to scalable brand system.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed mb-12">
              A placeholder case study showing how Concepful would help a company clarify its positioning, simplify its message, redesign its website narrative, and create reusable creative systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] md:h-[600px] rounded-[32px] overflow-hidden bg-[#FFF4F1] border border-[#14142B]/5 relative"
          >
            <img 
              src="/images/case-study-hero.png" 
              alt="Abstract brand system collage" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#14142B] mb-6">The Problem</h2>
            <p className="text-[#6E7191] text-xl leading-relaxed mb-6">
              The client had built an incredibly robust product, but their growth had plateaued. Their website was filled with complex technical jargon, their sales team was spending the first 15 minutes of every call just explaining what the company actually did, and their visual identity felt like a generic tech template from five years ago. 
            </p>
            <p className="text-[#6E7191] text-xl leading-relaxed">
              They weren't losing deals to competitors. They were losing deals to confusion. They needed to stop explaining their features and start communicating their value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#14142B] mb-6">The Clarity Work</h2>
            <p className="text-[#6E7191] text-xl leading-relaxed">
              We started by stripping away all the existing marketing language. Through leadership interviews and customer research, we found the true differentiator wasn't the number of features they had, but the specific operational bottleneck they eliminated for their users. We rebuilt their positioning around this core insight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#14142B] mb-6">The Narrative Shift</h2>
            <p className="text-[#6E7191] text-xl leading-relaxed mb-6">
              With the positioning locked, we rewrote the entire brand narrative. We moved from a feature-led "we do X, Y, and Z" approach to a value-led narrative. We created a comprehensive messaging architecture that gave the sales team, the marketing team, and the leadership team a unified way to talk about the company.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#14142B] mb-6">The Design System</h2>
            <p className="text-[#6E7191] text-xl leading-relaxed mb-6">
              Only after the narrative was clear did we touch the design. We built a visual identity that signaled authority and ease of use. The new website was structured around the customer journey rather than the company org chart. We delivered a scalable design system that allowed their internal team to spin up new campaigns without reinventing the wheel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#14142B] mb-6">The Outcome</h2>
            <div className="bg-[#FFF4F1] rounded-[24px] p-8 md:p-10 border border-[#FF3951]/10">
              <p className="text-[#14142B] text-xl font-medium leading-relaxed mb-8">
                "For the first time in three years, our entire company sounds like they work for the same organization. The design is beautiful, but the real value is that people finally understand what we do immediately."
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-[#14142B]/10 pt-8">
                <div>
                  <p className="text-4xl font-bold text-[#FF3951] mb-2">40%</p>
                  <p className="text-[#6E7191] font-medium">Decrease in sales cycle length</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#FF3951] mb-2">2.5x</p>
                  <p className="text-[#6E7191] font-medium">Increase in qualified inbound leads</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#14142B] text-white text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-10">
              Want results like these?
            </h2>
            <PillButton href="/contact">Start Your Clarity Project</PillButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
