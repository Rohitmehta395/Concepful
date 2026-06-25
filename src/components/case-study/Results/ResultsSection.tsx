"use client";
import { motion } from "framer-motion";
import { ResultsData } from "@/types/case-study";

export function ResultsSection({ data }: { data: ResultsData }) {
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

        {/* LEAD HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#14142B] leading-[1.05] max-w-2xl">
            {data.title}
          </h2>
        </motion.div>

        {/* STATS ROW — 4 large stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#14142B]/8 rounded-2xl overflow-hidden mb-5"
        >
          {data.stats.map((stat, i) => (
            <div key={i} className="bg-white px-6 py-8 md:px-8 md:py-10 flex flex-col gap-2">
              <span className={`text-5xl md:text-6xl font-bold tracking-tight leading-none ${stat.isHighlight ? 'text-[#FF3951]' : 'text-[#14142B]'}`}>
                {stat.value}
              </span>
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6E7191] mt-1">{stat.label}</span>
              <p className="text-[13px] text-[#6E7191] leading-relaxed mt-2">{stat.description}</p>
            </div>
          ))}
        </motion.div>

        {/* QUOTE + BEFORE/AFTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* QUOTE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="rounded-2xl bg-[#14142B] p-8 md:p-12 h-full flex flex-col justify-between min-h-[340px]">
              <div>
                <span className="text-[80px] font-bold text-[#FF3951] leading-none block -mb-4">&quot;</span>
                <p className="text-white text-xl md:text-2xl font-medium leading-[1.5] mt-4">
                  {data.quote.text}
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF3951]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#FF3951] text-xs font-bold">{data.quote.authorRole}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{data.quote.authorName}</p>
                  <p className="text-white/40 text-xs mt-0.5">{data.quote.authorDescription}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">{data.quote.clientLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BEFORE / AFTER CARD */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-[#14142B]/8 p-6 md:p-8 h-full flex flex-col gap-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191]">Before vs. After</span>
              
              {data.beforeAfter.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FF3951]/4 border border-[#FF3951]/8">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF3951] mt-0.5 flex-shrink-0 w-12">Before</span>
                    <p className="text-[13px] text-[#14142B] leading-snug">{item.before}</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#3B6BFF]/5 border border-[#3B6BFF]/10">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#3B6BFF] mt-0.5 flex-shrink-0 w-12">After</span>
                    <p className="text-[13px] text-[#14142B] leading-snug">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
