"use client";
import { motion } from "framer-motion";
import { ChallengeData } from "@/types/case-study";

export function ChallengeSection({ data }: { data: ChallengeData }) {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section label row */}
        <div className="flex items-center justify-between mb-14 md:mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] flex items-center gap-3">
            <span className="w-8 h-px bg-[#14142B]/20 inline-block" />
            {data.sectionLabel}
          </span>
        </div>

        {/* 2-column grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              {data.title}
            </h2>

            {data.introParagraphs.map((para, i) => (
              <p key={i} className="text-[#6E7191] text-lg leading-relaxed mb-5">
                {para}
              </p>
            ))}

            <div className="mt-10 flex flex-col gap-0">
              {data.challenges.map((challenge, i) => (
                <div key={i} className="flex gap-5 py-5 border-b border-[#14142B]/8 last:border-0">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#FF3951] mt-1 flex-shrink-0 w-6">
                    {challenge.number}
                  </span>
                  <div>
                    <p className="text-[#14142B] font-semibold text-base mb-1">{challenge.title}</p>
                    <p className="text-[#6E7191] text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <div className="flex flex-col gap-5">
              
              {/* Card A */}
              <div className="rounded-2xl bg-[#14142B] p-8 md:p-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 block mb-6">Heard in the first meeting</span>
                <p className="text-white text-xl md:text-2xl font-medium leading-[1.45]">
                  {data.cards.quote.text}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF3951]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FF3951] text-xs font-bold">{data.cards.quote.authorRole}</span>
                  </div>
                  <span className="text-white/50 text-sm">{data.cards.quote.authorDescription}</span>
                </div>
              </div>

              {/* Card B */}
              <div className="rounded-2xl border border-[#14142B]/8 p-6 grid grid-cols-2 gap-6">
                {data.cards.metrics.map((metric, i) => (
                  <div key={i}>
                    <span className={`text-3xl font-bold ${metric.isHighlight ? 'text-[#FF3951]' : 'text-[#14142B]'}`}>
                      {metric.value}
                      {metric.unit && <span className="text-lg">{metric.unit}</span>}
                    </span>
                    <p className="text-[#6E7191] text-xs font-medium mt-1 leading-snug">{metric.description}</p>
                  </div>
                ))}
              </div>

              {/* Card C */}
              <div className="rounded-xl bg-[#FF3951]/5 border border-[#FF3951]/10 px-5 py-4 flex items-center justify-between">
                <span className="text-[#14142B] text-sm font-medium">Complexity level</span>
                <div className="flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={`w-2.5 h-2.5 rounded-full ${i < data.cards.complexity ? 'bg-[#FF3951]' : 'bg-[#FF3951]/20'}`} 
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
