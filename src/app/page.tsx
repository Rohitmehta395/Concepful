"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { FloatingChip } from "@/components/site/FloatingChip";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <SeoHead 
        title="Concepful | Creative Strategy, Narrative & Design Agency"
        description="Concepful helps companies clarify complex ideas, sharpen messaging, and build brand experiences people understand, trust, and act on."
        keywords="creative design agency, brand strategy, messaging strategy, website design, positioning, narrative development, Miami creative agency"
        path="/"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://conceptful.agency/#organization",
          "name": "Concepful",
          "alternateName": "Concepful Agency",
          "url": "https://conceptful.agency",
          "logo": "https://conceptful.agency/favicon.svg",
          "image": "https://conceptful.agency/opengraph.jpg",
          "description": "Concepful is a creative strategy and design agency helping companies clarify complex ideas, sharpen messaging, improve brand positioning, and build scalable creative systems.",
          "slogan": "Clarity builds everything.",
          "founder": {
            "@type": "Person",
            "name": "Peter Sierra",
            "jobTitle": "Creative Director / Owner"
          },
          "foundingLocation": "Miami, FL",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10020 SW 228th Ter.",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33190",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-305-562-8802",
            "contactType": "Sales",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"]
          }
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://conceptful.agency/#localbusiness",
          "name": "Concepful",
          "description": "Creative strategy and design agency helping companies clarify complex ideas, sharpen messaging, and build scalable brand and website systems.",
          "url": "https://conceptful.agency",
          "image": "https://conceptful.agency/opengraph.jpg",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10020 SW 228th Ter.",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33190",
            "addressCountry": "US"
          },
          "telephone": "+1-305-562-8802",
          "founder": {
            "@type": "Person",
            "name": "Peter Sierra",
            "jobTitle": "Creative Director / Owner"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": [
            "Creative strategy",
            "Brand positioning",
            "Narrative development",
            "Website design",
            "Visual identity",
            "Campaign systems"
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://conceptful.agency/#website",
          "url": "https://conceptful.agency",
          "name": "Concepful",
          "description": "Creative strategy, narrative, and design agency. Clarity builds everything.",
          "publisher": { "@id": "https://conceptful.agency/#organization" },
          "inLanguage": "en-US"
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does Concepful only do design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Design without strategy is decoration. Concepful starts with positioning and narrative to ensure that anything designed actually communicates the right message."
              }
            },
            {
              "@type": "Question",
              "name": "Who does Concepful work best with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Founders, advisory firms, and expert-led companies that have a strong underlying business but struggle to explain it clearly or look the part."
              }
            },
            {
              "@type": "Question",
              "name": "How long do Concepful projects take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Strategy sprints typically take 3 to 4 weeks. Full brand and website systems take 8 to 12 weeks depending on complexity."
              }
            },
            {
              "@type": "Question",
              "name": "Does Concepful build the websites?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Concepful designs and develops high-performing marketing websites, often using Webflow or custom React, that internal teams can easily manage and scale."
              }
            },
            {
              "@type": "Question",
              "name": "What does a Concepful engagement cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing is custom based on the value and scope of the system being built. Engagements typically start around $15,000."
              }
            }
          ]
        }`}
      </script>

      {/* Hero — isolate creates a fresh stacking context so z-indexes stay scoped here */}
      <section className="relative isolate overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-32 bg-white">
        {/* Single soft warm glow */}
        <div className="absolute -bottom-20 left-0 w-[520px] h-[520px] bg-[#FFF4F1] rounded-full blur-[140px] opacity-60 z-0 pointer-events-none"></div>

        {/* Honeycomb background video — full hero on mobile, right 62% on md+ */}
        <div aria-hidden className="absolute inset-0 md:left-auto md:right-0 md:w-[62%] z-0 pointer-events-none overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={`/videos/hex-honeycomb.mp4`}
            poster={`/videos/hex-honeycomb-poster.jpg`}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ filter: "saturate(0.6) contrast(1.05)" }}
          />
          {/* Mobile wash — keeps the headline + body area readable */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-white via-white/85 to-white/55"></div>
          {/* Desktop left-edge fade so the video melts into the white headline area */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/55 to-white/0"></div>
          {/* Top + bottom soft fades so the section meets neighboring blocks cleanly */}
          <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: editorial copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start gap-8"
            >
              {/* Editorial headline */}
              <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px] font-extrabold tracking-[-0.035em] leading-[0.95] text-[#14142B]">
                <span className="text-[#FF3951]">Clarity</span>
                <br />
                builds everything.
              </h1>

              <p className="text-xl text-[#6E7191] max-w-xl leading-relaxed">
                Strategy, narrative, and design built to cut through noise, not add to it. We take ideas that are almost there and turn them into something people actually understand, trust, and act on.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <PillButton href="/contact">Let's Make It Clear</PillButton>
                <PillButton href="/services" variant="secondary">See How We Work</PillButton>
              </div>

              {/* Proof / stats row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 sm:pt-10 mt-2 border-t border-[#14142B]/10 w-full max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14142B]">12+</div>
                  <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#6E7191] mt-1">Years of practice</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14142B]">40+</div>
                  <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#6E7191] mt-1">Brands sharpened</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14142B]">100%</div>
                  <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[#6E7191] mt-1">Founder-led work</div>
                </div>
              </div>
            </motion.div>

            {/* Right: 3-step process panel — Noise → Strategy → Clarity (static) */}
            <div className="lg:col-span-5 relative h-[680px] w-full hidden lg:block">
              {/* Soft backdrop card */}
              <div
                aria-hidden
                className="absolute inset-x-2 top-2 bottom-2 bg-white/40 backdrop-blur-sm rounded-[36px] border border-[#14142B]/5"
              ></div>

              {/* Top label */}
              <div className="absolute top-7 left-7 right-7 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#6E7191]">
                <span className="font-semibold">The Concepful Method</span>
                <span className="font-mono text-[#14142B]/40">3 STEPS</span>
              </div>

              {/* Vertical connector line */}
              <div
                aria-hidden
                className="absolute left-[58px] top-[100px] bottom-[60px] w-px bg-gradient-to-b from-[#14142B]/15 via-[#3B6BFF]/40 to-[#FF3951] z-0"
              ></div>

              {/* STEP 01 — Listen / Noise */}
              <div className="absolute top-[88px] left-7 right-7 z-10 flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-[34px] h-[34px] rounded-full bg-white border-2 border-[#14142B]/15 flex items-center justify-center text-[11px] font-bold font-mono text-[#14142B]">
                    01
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-[20px] p-5 shadow-[0_12px_40px_rgba(20,20,43,0.08)] border border-[#14142B]/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[15px] font-bold text-[#14142B]">Listen</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#6E7191]">The Noise</div>
                  </div>
                  <p className="text-xs text-[#6E7191] leading-relaxed mb-4">
                    Audit messaging, audience, and visual chaos. Find what is being said and what is being missed.
                  </p>
                  {/* Static word cloud — buzzword noise */}
                  <div className="relative h-[64px] overflow-hidden rounded-lg bg-[#F7F7FB] border border-[#14142B]/5">
                    {[
                      { word: "synergy", className: "top-2 left-3 text-[11px] font-semibold text-[#14142B]/30", rot: -6 },
                      { word: "disrupt", className: "top-1 right-4 text-[14px] font-bold text-[#14142B]/40", rot: 3 },
                      { word: "scalable", className: "top-7 left-12 text-[10px] font-semibold text-[#14142B]/30", rot: 2 },
                      { word: "next-gen", className: "bottom-2 left-4 text-[12px] font-bold text-[#14142B]/35", rot: -2 },
                      { word: "solutions", className: "bottom-1 right-2 text-[11px] font-semibold text-[#14142B]/30", rot: 6 },
                      { word: "end-to-end", className: "bottom-3 right-16 text-[10px] font-semibold text-[#14142B]/30", rot: -3 },
                    ].map((w) => (
                      <span
                        key={w.word}
                        style={{ transform: `rotate(${w.rot}deg)` }}
                        className={`absolute ${w.className}`}
                      >
                        {w.word}
                      </span>
                    ))}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] font-bold text-[#14142B]/45">
                      platform
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 02 — Sharpen / Strategy */}
              <div className="absolute top-[300px] left-7 right-7 z-10 flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="relative w-[34px] h-[34px] rounded-full bg-white border-2 border-[#3B6BFF]/50 flex items-center justify-center text-[11px] font-bold font-mono text-[#3B6BFF]">
                    02
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-[20px] p-5 shadow-[0_12px_40px_rgba(20,20,43,0.08)] border border-[#14142B]/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[15px] font-bold text-[#14142B]">Sharpen</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#3B6BFF]">The Strategy</div>
                  </div>
                  <p className="text-xs text-[#6E7191] leading-relaxed mb-4">
                    Define positioning, narrative, and the single idea that earns attention.
                  </p>
                  {/* Positioning statement card */}
                  <div className="relative rounded-lg bg-[#EEF2FF] border border-[#3B6BFF]/15 p-3 overflow-hidden">
                    <div className="text-[9px] uppercase tracking-[0.18em] text-[#3B6BFF] font-semibold mb-1.5 relative">Positioning</div>
                    <p className="text-[13px] font-semibold text-[#14142B] leading-snug relative">
                      The brand that makes ideas make sense.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 03 — Build / Clarity */}
              <div className="absolute bottom-7 left-7 right-7 z-10 flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div
                    className="relative w-[34px] h-[34px] rounded-full bg-[#FF3951] border-2 border-[#FF3951] flex items-center justify-center text-[11px] font-bold font-mono text-white shadow-[0_6px_18px_rgba(255,57,81,0.35)]"
                  >
                    03
                  </div>
                </div>
                <div className="flex-1 bg-[#14142B] rounded-[20px] p-5 shadow-[0_20px_50px_rgba(20,20,43,0.25)] border border-[#14142B]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[15px] font-bold text-white">Build</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#FF3951]">The Clarity</div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Brand mark output */}
                    <div className="flex items-end gap-0.5 leading-none flex-shrink-0">
                      <span className="text-[56px] font-extrabold tracking-[-0.05em] text-white leading-[0.8]">C</span>
                      <span className="text-[56px] font-extrabold tracking-[-0.05em] text-[#FF3951] leading-[0.8]">.</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2">Output</div>
                      <div className="flex items-center gap-1 mb-2">
                        {[
                          "bg-[#FF3951]",
                          "bg-[#3B6BFF]",
                          "bg-white",
                          "bg-white/20",
                        ].map((color, i) => (
                          <div
                            key={i}
                            className={`flex-1 h-3 rounded-sm ${color}`}
                          ></div>
                        ))}
                      </div>
                      <div className="text-[10px] text-white/60">Brand · Voice · System</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative overflow-hidden py-24 bg-[#FFF7F4]">
        <HexDecor variant="dashed" color="coral" className="top-12 -left-16 w-[260px] h-[260px]" rotate={-10} opacity={0.4} />
        <HexDecor variant="nested" color="blue" className="-bottom-12 right-8 w-[280px] h-[280px]" rotate={14} opacity={0.35} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-6">
              Most companies are not unclear by accident.
            </h2>
            <p className="text-xl text-[#6E7191]">
              They are just building in the wrong order.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Saying too much and meaning too little",
                desc: "When everything matters, nothing lands."
              },
              {
                title: "Chasing trends instead of building positioning",
                desc: "Looking modern is not the same as being understood."
              },
              {
                title: "Designing before defining the message",
                desc: "The result is confusion dressed up as branding."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[28px] p-10 shadow-[0_8px_30px_rgba(20,20,43,0.06)] border border-[#14142B]/5 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-[#6E7191] text-lg">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 lg:sticky lg:top-32 self-start"
            >
              <SectionHeading 
                eyebrow="What We Do"
                title="We don't just “brand.”"
              />
              <p className="text-xl text-[#6E7191] mt-6">
                We pressure-test ideas and build them into something real.
              </p>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { num: "01", title: "Clarity First", desc: "We figure out what you actually do, why it matters, and where you win." },
                { num: "02", title: "Narrative That Holds Up", desc: "Messaging that sounds human, survives scrutiny, and cuts through crowded markets." },
                { num: "03", title: "Design That Means Something", desc: "Visual systems that reinforce the idea instead of decorating around it." },
                { num: "04", title: "Systems, Not One-Offs", desc: "Content pipelines, scalable creative frameworks, and brand systems built to last." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[28px] p-10 shadow-[0_8px_30px_rgba(20,20,43,0.06)] border border-[#14142B]/5 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="text-[#FF3951] font-bold text-3xl">{service.num}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-[#6E7191]">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative overflow-hidden py-24 bg-[#14142B] text-white">
        <HexDecor variant="nested" color="white" className="-top-16 -left-20 w-[320px] h-[320px]" rotate={-12} opacity={0.1} />
        <HexDecor variant="dashed" color="coral" className="bottom-12 right-12 w-[200px] h-[200px]" rotate={18} opacity={0.45} />
        <HexDecor variant="cluster" color="white" className="top-1/3 right-1/3 w-[140px] h-[140px]" rotate={6} opacity={0.08} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading 
            title="A clearer way to build creative work."
            align="center"
            className="mb-16 [&_h2]:text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-[28px] p-10 border border-white/10"
            >
              <h3 className="text-[#6E7191] font-bold text-xl mb-8 uppercase tracking-widest">Old Method</h3>
              <ul className="space-y-6">
                {["Start with visuals", "Follow trends", "Say everything", "Create one-off assets", "Look polished but unclear"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#6E7191] text-lg opacity-80">
                    <span className="w-6 h-[2px] bg-[#6E7191]/50 rounded-full shrink-0"></span>
                    <span className="line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white text-[#14142B] rounded-[28px] p-10 shadow-[0_8px_30px_rgba(255,57,81,0.15)] border-2 border-[#FF3951]"
            >
              <h3 className="text-[#FF3951] font-bold text-xl mb-8 uppercase tracking-widest">Concepful Method</h3>
              <ul className="space-y-6">
                {["Start with clarity", "Build positioning", "Say what matters", "Build reusable systems", "Look sharp because the idea is sharp"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#14142B] text-lg font-medium">
                    <div className="bg-[#FFF4F1] rounded-full p-1 mt-0.5 shrink-0">
                      <Check className="w-4 h-4 text-[#FF3951]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Block */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#14142B]/5">
        <HexDecor variant="dashed" color="blue" className="-top-10 -left-16 w-[220px] h-[220px]" rotate={-12} opacity={0.25} />
        <HexDecor variant="outline" color="coral" className="bottom-8 left-[38%] w-[140px] h-[140px]" rotate={18} opacity={0.3} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <SectionHeading
                eyebrow="What Concepful Does"
                title="We make ideas make sense."
              />
              <p className="mt-8 text-xl text-[#6E7191] leading-relaxed">
                Concepful is a creative strategy and design agency that helps companies clarify complex ideas, sharpen their messaging, improve brand positioning, and build website and creative systems that make their value easier to understand.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#6E7191]">Clarify</div>
                  <div className="mt-2 h-1 w-full bg-[#FF3951] rounded-full"></div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#6E7191]">Sharpen</div>
                  <div className="mt-2 h-1 w-full bg-[#3B6BFF] rounded-full"></div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#6E7191]">Build</div>
                  <div className="mt-2 h-1 w-full bg-[#14142B] rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Right: hexagon stamp video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 relative"
            >
              {/* Soft brand backdrop */}
              <div aria-hidden className="absolute -inset-6 -z-10">
                <div className="absolute top-6 -left-4 w-40 h-40 bg-[#FF3951]/15 rounded-full blur-[60px]"></div>
                <div className="absolute -bottom-2 right-2 w-48 h-48 bg-[#3B6BFF]/15 rounded-full blur-[70px]"></div>
              </div>

              <div className="relative rounded-[28px] overflow-hidden bg-[#F7F7FB] border border-[#14142B]/8 shadow-[0_20px_60px_rgba(20,20,43,0.10)]">
                <video
                  className="block w-full h-auto aspect-video object-cover"
                  src={`/videos/hex-stamp.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />

                {/* Gradient wash to tie video to brand palette */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF3951]/15 via-transparent to-[#3B6BFF]/15 mix-blend-multiply"
                ></div>

                {/* Editorial caption overlay */}
                <div className="pointer-events-none absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#14142B]/70 font-semibold">
                      Brand Language
                    </div>
                    <div className="mt-1 text-base font-bold text-[#14142B]">
                      Built from clear parts.
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1.5 border border-[#14142B]/8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3951] animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#14142B]/80">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating annotation tag */}
              <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#14142B]/8 shadow-[0_8px_24px_rgba(20,20,43,0.10)]">
                <span className="w-2 h-2 rounded-full bg-[#3B6BFF]"></span>
                <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#14142B]">
                  The Concepful System
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading 
            eyebrow="Who This Is For"
            title="Built for teams with something real to say."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Founders", desc: "For founders who know something is off, but can't articulate it yet.", tone: "coral" },
              { title: "Advisory Firms", desc: "For expert-led companies trying to stand out without sounding like everyone else.", tone: "blue" },
              { title: "Growth Teams", desc: "For teams building something valuable, but struggling to communicate it clearly.", tone: "coral" },
              { title: "Brand Leaders", desc: "For people tired of branding that looks good but does nothing.", tone: "blue" }
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={
                  audience.tone === "blue"
                    ? "bg-[#EEF2FF] rounded-[24px] p-8 border border-[#3B6BFF]/15"
                    : "bg-[#FFF4F1] rounded-[24px] p-8 border border-[#FF3951]/10"
                }
              >
                <span
                  className={
                    "inline-block w-10 h-1.5 rounded-full mb-5 " +
                    (audience.tone === "blue" ? "bg-[#3B6BFF]" : "bg-[#FF3951]")
                  }
                ></span>
                <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                <p className="text-[#6E7191]">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator & AI Chat */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-12">
                You are not buying creativity. You are buying discernment.
              </h2>
              
              <div className="flex flex-col gap-10">
                {[
                  { title: "Discernment", desc: "We separate what matters from what does not.", color: "#FF3951" },
                  { title: "Translation", desc: "We turn complex ideas into clear, usable language.", color: "#3B6BFF" },
                  { title: "Execution", desc: "We design systems that people understand, remember, and act on.", color: "#FF3951" }
                ].map((feat, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <span
                        className="w-1.5 h-6 rounded-full inline-block"
                        style={{ backgroundColor: feat.color }}
                      ></span>
                      {feat.title}
                    </h3>
                    <p className="text-[#6E7191] text-lg pl-4.5">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Chat Module */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_12px_40px_rgba(20,20,43,0.08)] border border-[#14142B]/5 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#3B6BFF]/25 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FF3951]/15 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-center mb-8">Not sure what's unclear?</h3>
              
              <div className="flex flex-col gap-6 mb-8 text-[15px]">
                {/* User Bubble */}
                <div className="self-end bg-[#F7F7F9] text-[#14142B] p-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                  Our company does too many things and our website feels confusing.
                </div>
                
                {/* AI Bubble */}
                <div className="self-start flex gap-3 max-w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-[#FF3951] shrink-0 mt-1 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="2" height="6" rx="1" fill="white"/>
                      <rect x="6" y="2" width="2" height="10" rx="1" fill="white"/>
                      <rect x="10" y="8" width="2" height="4" rx="1" fill="white"/>
                    </svg>
                  </div>
                  <div className="bg-[#FFF4F1] text-[#14142B] p-4 rounded-2xl rounded-tl-sm border border-[#FF3951]/10 shadow-sm">
                    Then the issue probably isn't design yet. It's hierarchy. Let's clarify what you do, who it's for, and why anyone should care.
                  </div>
                </div>

                {/* User Bubble */}
                <div className="self-end bg-[#F7F7F9] text-[#14142B] p-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                  Can you help us explain it better?
                </div>

                {/* AI Bubble */}
                <div className="self-start flex gap-3 max-w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-[#FF3951] shrink-0 mt-1 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="2" height="6" rx="1" fill="white"/>
                      <rect x="6" y="2" width="2" height="10" rx="1" fill="white"/>
                      <rect x="10" y="8" width="2" height="4" rx="1" fill="white"/>
                    </svg>
                  </div>
                  <div className="bg-[#FFF4F1] text-[#14142B] p-4 rounded-2xl rounded-tl-sm border border-[#FF3951]/10 shadow-sm">
                    Yes. That's where we start.
                  </div>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask us what's not working" 
                  className="w-full bg-[#F7F7F9] border-none rounded-full py-4 pl-6 pr-14 text-[15px] outline-none focus:ring-2 focus:ring-[#FF3951]/50 placeholder:text-[#6E7191]/60"
                  disabled
                />
                <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#FF3951] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#E0293F] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FFF7F4]">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionHeading 
            title="Common Questions"
            align="center"
            className="mb-12"
          />
          <Accordion type="single" collapsible className="w-full bg-white rounded-[28px] p-6 md:p-8 shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#FF3951]">Do you just do design?</AccordionTrigger>
              <AccordionContent className="text-[#6E7191] text-[16px] leading-relaxed">
                No. Design without strategy is decoration. We start with positioning and narrative to ensure what we design actually communicates the right message.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#FF3951]">Who do you work best with?</AccordionTrigger>
              <AccordionContent className="text-[#6E7191] text-[16px] leading-relaxed">
                Founders, advisory firms, and expert-led companies who have a strong underlying business but struggle to explain it clearly or look the part.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#FF3951]">How long do projects take?</AccordionTrigger>
              <AccordionContent className="text-[#6E7191] text-[16px] leading-relaxed">
                Strategy sprints typically take 3-4 weeks. Full brand and website systems take 8-12 weeks depending on complexity. We move fast because we eliminate agency bloat.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#FF3951]">Do you build the websites?</AccordionTrigger>
              <AccordionContent className="text-[#6E7191] text-[16px] leading-relaxed">
                Yes. We design and develop high-performing websites (often using Webflow or custom React) that are easy for your team to manage and scale.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-[#FF3951]">What is your pricing?</AccordionTrigger>
              <AccordionContent className="text-[#6E7191] text-[16px] leading-relaxed">
                We price based on the value and scope of the system we are building. Every engagement is custom, but our projects typically start around $15k. Contact us to discuss your specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32">
        <HexDecor variant="solid" color="coral" className="top-12 -left-16 w-[260px] h-[260px]" rotate={-12} opacity={0.5} />
        <HexDecor variant="nested" color="blue" className="-bottom-16 -right-20 w-[320px] h-[320px]" rotate={15} opacity={0.35} />
        <HexDecor variant="dashed" color="ink" className="bottom-12 left-1/4 w-[140px] h-[140px]" rotate={20} opacity={0.18} />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-6">
              Good ideas don't fail because they're bad.<br/>
              They fail because no one understands them.
            </h2>
            <div className="mt-12">
              <PillButton href="/contact">Let's Fix That</PillButton>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
