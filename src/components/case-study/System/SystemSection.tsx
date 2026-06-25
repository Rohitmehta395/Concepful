"use client";
import { motion } from "framer-motion";
import { BrandSystemData } from "@/types/case-study";

export function SystemSection({ data }: { data: BrandSystemData }) {
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

        {/* Lead headline row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#14142B] leading-[1.05]">
              {data.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex items-end"
          >
            <p className="text-[#6E7191] text-lg leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* SHOWCASE GRID — ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
          {/* TILE A */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="rounded-2xl bg-[#14142B] overflow-hidden h-full min-h-[360px] p-8 md:p-10 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">{data.primaryIdentity.label}</span>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF3951]" />
                  <span className="w-3 h-3 rounded-full bg-[#3B6BFF]" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">Wordmark</p>
                  <p className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-none">{data.primaryIdentity.wordmark}</p>
                  <p className="text-[#FF3951] text-sm font-semibold tracking-widest uppercase mt-2">{data.primaryIdentity.tagline}</p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap mt-6">
                {data.primaryIdentity.colors.map((color, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                    <span className={`w-3 h-3 rounded-full ${color.class} flex-shrink-0`} />
                    <span className="text-white/60 text-[11px] font-mono">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE B */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-[#14142B]/8 overflow-hidden h-full min-h-[360px] p-8 flex flex-col justify-between">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191]">{data.typeSystem.label}</span>
              
              <div className="flex-1 flex flex-col justify-center gap-1 my-6">
                <p className="text-[64px] font-bold text-[#14142B] leading-none">Aa</p>
                <div className="w-full h-px bg-[#14142B]/8 my-4" />
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191] mb-3">Type scale</p>
                <p className="text-3xl font-bold text-[#14142B] leading-none mb-1">Display</p>
                <p className="text-xl font-semibold text-[#14142B] leading-none mb-1">Heading</p>
                <p className="text-base font-medium text-[#6E7191] leading-none mb-1">Body text</p>
                <p className="text-sm text-[#6E7191] leading-none">Caption · Label</p>
              </div>

              <div className="rounded-xl bg-[#14142B]/3 px-4 py-3">
                <p className="text-[11px] font-bold text-[#14142B]">{data.typeSystem.fontName}</p>
                <p className="text-[11px] text-[#6E7191]">{data.typeSystem.weights}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SHOWCASE GRID — ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* TILE C */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-[#14142B]/8 p-6 flex flex-col gap-5 h-full">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191]">Colour Palette</span>
              
              {data.palette.map((color, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${color.class}`} />
                  <div>
                    <p className="text-[12px] font-semibold text-[#14142B]">{color.name}</p>
                    <p className="text-[11px] font-mono text-[#6E7191]">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TILE D */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl bg-[#FF3951]/5 border border-[#FF3951]/10 p-6 flex flex-col justify-between h-full min-h-[280px]">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF3951]">Design Tokens</span>
              
              <div className="flex-1 flex flex-col gap-3 my-6">
                {data.designTokens.items.map((token, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-[#14142B]">{token.label}</span>
                    <span className="text-[11px] font-mono text-[#6E7191]">{token.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {data.designTokens.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest uppercase text-[#FF3951] border border-[#FF3951]/20 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE E */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-[#14142B]/8 p-6 flex flex-col gap-4 h-full">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] block mb-1">What Was Delivered</span>
              
              {data.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-[#14142B]/6 last:border-0">
                  <div className="w-5 h-5 rounded-md bg-[#14142B]/5 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B6BFF]" />
                  </div>
                  <span className="text-[13px] font-medium text-[#14142B]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
