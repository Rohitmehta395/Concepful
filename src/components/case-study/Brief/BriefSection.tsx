"use client";
import { motion } from "framer-motion";
import { BriefData, StatsData } from "@/types/case-study";

export function BriefSection({ data, statsData }: { data: BriefData, statsData?: StatsData }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top rule */}
        <div className="w-full h-px bg-[#14142B]/8 mb-16" />

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF3951] flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-[#FF3951] inline-block" />
              {data.sectionLabel}
            </span>
            
            {data.paragraphs.map((para, i) => (
              <p 
                key={i} 
                className={i === 0 
                  ? "text-[#14142B] text-xl md:text-2xl font-medium leading-[1.5] mb-8" 
                  : "text-[#6E7191] text-lg leading-relaxed mb-10"
                }
              >
                {para}
              </p>
            ))}

            <div className="rounded-2xl border border-[#3B6BFF]/15 bg-[#3B6BFF]/4 p-6 md:p-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3B6BFF] block mb-3">{data.keyChallenge.label}</span>
              <p className="text-[#14142B] text-lg font-medium leading-relaxed">
                {data.keyChallenge.quote}
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="sticky top-28 flex flex-col gap-8">
              
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] block mb-4">What We Delivered</span>
                <div className="flex flex-col gap-2">
                  {data.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-[#14142B]/6 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3951] flex-shrink-0" />
                      <span className="text-[#14142B] text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] block mb-4">Project Details</span>
                <div className="grid grid-cols-2 gap-4">
                  {data.projectDetails.map((detail, i) => (
                    <div key={i} className="rounded-xl bg-[#14142B]/3 p-4">
                      <span className="text-[10px] uppercase tracking-widest text-[#6E7191] block mb-1">{detail.label}</span>
                      <span className={`text-sm font-semibold ${detail.isHighlight ? 'text-[#FF3951]' : 'text-[#14142B]'}`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* STATS BAR */}
        {statsData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 border-t border-[#14142B]/8 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {statsData.items.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className={`text-4xl md:text-5xl font-bold tracking-tight ${i < 2 ? 'text-[#FF3951]' : 'text-[#14142B]'}`}>
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6E7191]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
