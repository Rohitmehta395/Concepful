"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroData } from "@/types/case-study";

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-0">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <Link href="/case-studies" className="text-sm font-medium text-[#6E7191] hover:text-[#FF3951] transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-semibold tracking-widest uppercase text-[#434355] border border-[#14142B]/10 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-0 mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tight leading-[0.95] text-[#14142B]">
            {data.title}
          </h1>
        </motion.div>

        <div className="w-full h-px bg-[#14142B]/8 my-8" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-start flex-wrap gap-6 mb-12 md:mb-16"
        >
          <div className="flex gap-8 md:gap-16 flex-wrap">
            {data.metadata.map((meta) => (
              <div key={meta.label} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191]">{meta.label}</span>
                <span className="text-base font-semibold text-[#14142B]">{meta.value}</span>
              </div>
            ))}
          </div>

          {data.highlightMetric && (
            <div className="bg-[#FF3951]/6 rounded-2xl px-6 py-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-[#FF3951]">{data.highlightMetric.value}</span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#6E7191] mt-1">{data.highlightMetric.label}</span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full h-[420px] md:h-[600px] rounded-t-3xl overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-full object-cover"
            />
            {data.image.label && (
              <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF3951] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#14142B]">{data.image.label}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
