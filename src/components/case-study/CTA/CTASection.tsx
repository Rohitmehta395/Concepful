"use client";
import { motion } from "framer-motion";
import { CTAData } from "@/types/case-study";
import { PillButton } from "@/components/site/PillButton";
import Link from "next/link";

export function CTASection({ data }: { data: CTAData }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* TOP RULE */}
        <div className="w-full h-px bg-[#14142B]/8 mb-16" />

        {/* MAIN CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-[#14142B] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">

            {/* LEFT PANEL */}
            <div className="md:col-span-8 p-10 md:p-14 lg:p-16 flex flex-col justify-between gap-12">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 flex items-center gap-3 mb-8">
                  <span className="w-5 h-px bg-white/20 inline-block" />
                  {data.sectionLabel}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.05]">
                  {data.title}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <PillButton href={data.buttonLink}>{data.buttonText}</PillButton>

                <Link href={data.secondaryLinkUrl} className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors">
                  {data.secondaryLinkText}
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="md:col-span-4 bg-[#FF3951] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-0">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">{data.includesLabel}</span>

              <ul className="flex flex-col gap-3 my-6">
                {data.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/20 pt-5">
                <p className="text-white/50 text-xs leading-relaxed">
                  {data.footerText}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191]">This was a placeholder case study</span>
            <p className="text-[13px] text-[#6E7191] max-w-sm leading-relaxed">
              Designed to demonstrate Concepful&apos;s process, design thinking, and web design capabilities while real client case studies are in progress.
            </p>
          </div>

          <Link href="/case-studies" className="group flex items-center gap-4 rounded-2xl border border-[#14142B]/8 px-6 py-4 hover:border-[#FF3951]/30 transition-colors flex-shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191]">Back to</span>
              <span className="text-sm font-semibold text-[#14142B] group-hover:text-[#FF3951] transition-colors">All Case Studies</span>
            </div>
            <span className="text-[#14142B]/30 group-hover:text-[#FF3951] transition-colors text-lg leading-none">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
