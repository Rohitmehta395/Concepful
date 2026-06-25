"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesIndex() {
  return (
    <>
      <SeoHead 
        title="Case Studies | Concepful"
        description="See how Concepful helps companies clarify their positioning, rebuild narratives, and translate strategy into scalable brand systems."
        path="/case-studies"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Concepful Case Studies",
          "url": "https://conceptful.agency/case-studies",
          "description": "Case studies showing how Concepful helps companies clarify their positioning, rebuild narratives, and translate strategy into scalable brand systems.",
          "isPartOf": { "@id": "https://conceptful.agency/#website" },
          "hasPart": [
            {
              "@type": "Article",
              "headline": "From scattered message to scalable brand system",
              "url": "https://conceptful.agency/case-studies/clarity-system"
            }
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://conceptful.agency/case-studies" }
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="dashed" color="coral" className="top-20 -right-12 w-[280px] h-[280px]" rotate={-10} opacity={0.45} />
        <HexDecor variant="cluster" color="blue" className="-bottom-16 left-12 w-[240px] h-[240px]" rotate={12} opacity={0.4} />
        <HexDecor variant="outline" color="ink" className="top-1/3 right-1/3 w-[100px] h-[100px]" rotate={22} opacity={0.15} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              Work that makes sense.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed">
              We help companies turn complex ideas into clear narratives and scalable design systems. See how clarity builds better outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Case Study Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/case-studies/clarity-system" className="block relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgba(20,20,43,0.06)] border border-[#14142B]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(20,20,43,0.1)] hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFF4F1] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#FF3951]/10 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full min-h-[300px]">
                  <span className="text-[#FF3951] text-[13px] font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-[#FF3951] rounded-full inline-block"></span>
                    Brand System
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-[#14142B] leading-tight mb-6">
                    From scattered message to scalable brand system
                  </h3>
                  
                  <p className="text-[#6E7191] text-lg mb-10 flex-1">
                    A placeholder case study showing how Concepful helped a complex business clarify its positioning, rebuild its narrative, and translate that into a sharper digital presence.
                  </p>
                  
                  <div className="flex items-center text-[#14142B] font-bold group-hover:text-[#FF3951] transition-colors mt-auto">
                    Read Case Study <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Placeholder for future case studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F7F7F9] rounded-[32px] p-8 md:p-10 border border-[#14142B]/5 flex flex-col items-center justify-center text-center min-h-[400px]"
            >
              <h3 className="text-2xl font-bold text-[#14142B] mb-4">More work coming soon</h3>
              <p className="text-[#6E7191] max-w-sm mb-8">
                We are currently wrapping up several major brand and web system projects.
              </p>
              <PillButton href="/contact" variant="secondary">Start Your Project</PillButton>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 bg-[#14142B] text-white text-center">
        <HexDecor variant="nested" color="white" className="top-1/2 -translate-y-1/2 -left-16 w-[260px] h-[260px]" rotate={-12} opacity={0.1} />
        <HexDecor variant="dashed" color="coral" className="top-12 right-16 w-[180px] h-[180px]" rotate={14} opacity={0.5} />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-10">
              Ready to clarify your message?
            </h2>
            <PillButton href="/contact">Start a Conversation</PillButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
