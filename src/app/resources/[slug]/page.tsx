"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SeoHead } from "@/components/site/SeoHead";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { RESOURCES } from "../data";
import { notFound } from "next/navigation";

import { use } from "react";

export default function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) notFound();

  const Icon = resource.icon;
  const others = RESOURCES.filter((r) => r.slug !== resource.slug);

  return (
    <>
      <SeoHead
        title={`${resource.title} | Concepful Resources`}
        description={resource.description}
        path={`/resources/${resource.slug}`}
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://conceptful.agency/resources/${resource.slug}" },
            { "@type": "ListItem", "position": 3, "name": "${resource.title}", "item": "https://conceptful.agency/resources/${resource.slug}" }
          ]
        }`}
      </script>

      <section className="relative overflow-hidden pt-32 pb-24">
        <HexDecor variant="nested" color="coral" className="top-20 -left-20 w-[300px] h-[300px]" rotate={-12} opacity={0.4} />
        <HexDecor variant="dashed" color="blue" className="top-40 right-12 w-[180px] h-[180px]" rotate={14} opacity={0.4} />
        <HexDecor variant="outline" color="coral" className="bottom-10 left-1/4 w-[140px] h-[140px]" rotate={20} opacity={0.35} />

        <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#FFF4F1] border border-[#FF3951]/15">
              <span className="text-[#FF3951]" aria-hidden>
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#FF3951]">
                Resources / {resource.title}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#14142B] tracking-tight mb-6 leading-[1.05]">
              {resource.title}.
            </h1>

            <p className="text-xl text-[#6E7191] mb-10 leading-relaxed max-w-xl mx-auto">
              {resource.description}
            </p>

            <div className="bg-[#FAFAFC] rounded-3xl p-8 md:p-10 border border-[#14142B]/5 text-left mb-12">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-3">
                Coming Soon
              </span>
              <p className="text-[#14142B] text-lg leading-relaxed">
                {resource.bodyParagraph}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PillButton href="/contact">Let&apos;s Make It Clear</PillButton>
              <PillButton href="/case-studies" variant="secondary">View Case Studies</PillButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFC]">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-3xl font-bold text-[#14142B] mb-10 text-center">More resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="group bg-white rounded-3xl p-8 border border-[#14142B]/5 hover:border-[#FF3951]/30 hover:shadow-[0_8px_30px_rgba(20,20,43,0.06)] transition-all block"
                >
                  <span aria-hidden className="inline-flex w-10 h-10 rounded-xl bg-[#FFF4F1] items-center justify-center text-[#FF3951] mb-4">
                    <RIcon className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-[#14142B] group-hover:text-[#FF3951] transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[#6E7191] text-sm leading-snug">
                    {r.tagline}.
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
