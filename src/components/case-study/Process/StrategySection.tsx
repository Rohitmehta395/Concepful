"use client";
import { motion } from "framer-motion";
import { StrategyData } from "@/types/case-study";

export function StrategySection({ data }: { data: StrategyData }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center justify-between mb-14 md:mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] flex items-center gap-3">
            <span className="w-8 h-px bg-[#14142B]/20 inline-block" />
            {data.sectionLabel}
          </span>
        </div>

        {/* PART 1 — Full-width lead row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              Beautiful design doesn&apos;t fix<br />
              <span className="text-[#3B6BFF]">broken positioning.</span>
            </h2>
            <p className="text-[#6E7191] text-lg leading-relaxed">
              We never start with wireframes or mood boards. We start by dismantling everything you think you know about your business and rebuilding it from the buyer&apos;s perspective. Strategy is the foundation; design is just the amplifier.
            </p>
          </motion.div>

          {/* Effort allocation bars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 md:col-start-8"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] block mb-6">Our Effort Allocation</span>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold text-[#14142B] w-28 flex-shrink-0">Discovery &amp; Audit</span>
                <div className="flex-1 h-1.5 bg-[#14142B]/8 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#14142B]" style={{ width: '40%' }} />
                </div>
                <span className="text-[11px] font-bold text-[#6E7191] w-8 text-right flex-shrink-0">40%</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold text-[#14142B] w-28 flex-shrink-0">Positioning &amp; Narrative</span>
                <div className="flex-1 h-1.5 bg-[#14142B]/8 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#3B6BFF]" style={{ width: '45%' }} />
                </div>
                <span className="text-[11px] font-bold text-[#6E7191] w-8 text-right flex-shrink-0">45%</span>
              </div>

              <div className="flex items-center gap-4 mb-0">
                <span className="text-[11px] font-bold text-[#14142B] w-28 flex-shrink-0">Design</span>
                <div className="flex-1 h-1.5 bg-[#14142B]/8 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[#14142B]/30" style={{ width: '15%' }} />
                </div>
                <span className="text-[11px] font-bold text-[#6E7191] w-8 text-right flex-shrink-0">15%</span>
              </div>

              <p className="text-[11px] text-[#6E7191] mt-5 leading-relaxed">
                Most agencies jump straight to design. We spend the majority of the engagement ensuring the thinking is airtight before we open Figma.
              </p>
            </div>
          </motion.div>

        </div>

        {/* PART 2 — 3 phase columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          
          {data.phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#14142B]/8 p-6 md:p-8 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl font-bold text-[#14142B]/10 leading-none">{phase.number}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                  i === 0 ? 'bg-[#FF3951]/10' : i === 1 ? 'bg-[#3B6BFF]/10' : 'bg-[#14142B]/8'
                }`}>
                  <div className={`w-3 h-3 rounded-sm ${
                    i === 0 ? 'bg-[#FF3951]' : i === 1 ? 'bg-[#3B6BFF]' : 'bg-[#14142B]/40'
                  }`} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#14142B]">{phase.title}</h3>
              <p className="text-[#6E7191] text-sm leading-relaxed flex-1">
                {phase.description}
              </p>
              <div className="w-full h-px bg-[#14142B]/6" />
              <div>
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191]">Key outputs</span>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {phase.outputs.map((output, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#14142B]">
                      <span className="w-1 h-1 rounded-full bg-[#FF3951] mt-2 flex-shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
