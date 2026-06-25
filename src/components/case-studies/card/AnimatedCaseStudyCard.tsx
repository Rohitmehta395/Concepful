"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyListing } from "@/types/case-study";
import { useCaseStudyReveal } from "@/hooks/useCaseStudyReveal";

interface CaseStudyCardProps {
  caseStudy: CaseStudyListing;
  index: number;
}

const CARD_COLORS = [
  { bg: "#E02931", text: "text-white", border: "border-white/20" },
  { bg: "#07A1C5", text: "text-white", border: "border-white/20" },
  { bg: "#2E1C5F", text: "text-white", border: "border-white/20" },
  { bg: "#66432C", text: "text-white", border: "border-white/20" },
  { bg: "#19414B", text: "text-white", border: "border-white/20" },
  { bg: "#FFF9EE", text: "text-[#14142B]", border: "border-[#14142B]/20" },
  { bg: "#483C39", text: "text-white", border: "border-white/20" },
  { bg: "#1D3B39", text: "text-white", border: "border-white/20" },
];

function generateLighterShade(hex: string): string {
  return `${hex}80`; // 50% opacity fallback
}

export function AnimatedCaseStudyCard({
  caseStudy,
  index,
}: CaseStudyCardProps) {
  const isMediaLeft = index % 2 === 0;
  const colorTheme = CARD_COLORS[index % CARD_COLORS.length];

  // Refs for GSAP
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Apply scroll animation hook
  useCaseStudyReveal({
    wrapper: wrapperRef,
    card: cardRef,
    categories: categoriesRef,
    title: titleRef,
    description: descRef,
    cta: ctaRef,
    divider: dividerRef,
    metrics: metricsRef,
  });

  const blurBackground = caseStudy.backgroundImage
    ? `url('${caseStudy.backgroundImage}')`
    : `linear-gradient(${generateLighterShade(colorTheme.bg)}, ${generateLighterShade(colorTheme.bg)})`;

  return (
    <div
      ref={wrapperRef}
      className={`case-study-card sticky top-[96px] w-full h-[95vh] lg:h-[75vh] origin-top`}
      style={{
        zIndex: index + 10,
      }}
    >
      <Link
        href={caseStudy.href}
        ref={cardRef}
        className={`case-study-inner block w-full h-full group ${colorTheme.text} origin-top`}
      >
        <article
          className="relative w-full h-full flex flex-col lg:flex-row overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-[6px] will-change-transform shadow-[0_-8px_30px_rgba(0,0,0,0.12)] origin-top"
          style={{ backgroundColor: colorTheme.bg }}
        >
          {/* Image Half */}
          <div
            className={`w-full lg:w-1/2 p-6 md:p-6 lg:p-8 flex items-stretch ${
              isMediaLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              {/* Static Blurred Background */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-xl scale-125"
                style={{ backgroundImage: blurBackground }}
              />

              {/* Foreground */}
              <div className="relative z-10 w-[80%] max-w-[560px] aspect-[4/3] rounded-[8px] overflow-hidden shadow-xl transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] will-change-transform">
                <Image
                  fill
                  src={caseStudy.heroImage}
                  alt={caseStudy.title || "Case Study"}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Half */}
          <div
            className={`w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-10 lg:py-12 lg:px-12 xl:px-4 ${
              isMediaLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex flex-col items-start mb-16">
              {/* Title and Categories */}
              <div className="flex flex-wrap items-center gap-4 mb-6 relative z-30">
                {caseStudy.title && (
                  <span
                    ref={titleRef}
                    className="text-sm tracking-widest uppercase font-semibold opacity-0"
                  >
                    {caseStudy.title}
                  </span>
                )}
                {caseStudy.categories && caseStudy.categories.length > 0 && (
                  <div
                    ref={categoriesRef}
                    className="flex gap-4 flex-wrap opacity-0"
                  >
                    {caseStudy.categories.map((cat, i) => (
                      <span
                        key={i}
                        className={`text-sm tracking-widest uppercase border ${colorTheme.border} px-2 py-1`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              {caseStudy.description && (
                <h2
                  ref={descRef}
                  className={`text-2xl md:text-3xl xl:text-4xl font-bold uppercase leading-[1.2] mb-8 relative z-30 opacity-0 ${colorTheme.text}`}
                >
                  {caseStudy.description}
                </h2>
              )}

              {/* CTA Link */}
              <span
                ref={ctaRef}
                className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider transition-opacity opacity-0"
              >
                View Project
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-[400ms] ease-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7l10 10m0 0V7m0 10H7"
                  />
                </svg>
              </span>
            </div>

            {/* Metrics */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className={`w-full pt-8 relative z-30 pointer-events-none`}>
                <div
                  ref={dividerRef}
                  className={`absolute top-0 left-0 w-full border-t ${colorTheme.border} origin-left scale-x-0`}
                />
                <div ref={metricsRef} className="grid grid-cols-2 gap-8">
                  {caseStudy.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col gap-1 opacity-0">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-xs md:text-sm tracking-widest uppercase mt-1 font-semibold">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </Link>
    </div>
  );
}
