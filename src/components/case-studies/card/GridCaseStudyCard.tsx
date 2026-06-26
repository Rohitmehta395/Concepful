"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyListing } from "@/types/case-study";

interface GridCaseStudyCardProps {
  caseStudy: CaseStudyListing;
  index: number;
}

const CARD_COLORS = [
  { bg: "#E02931" },
  { bg: "#07A1C5" },
  { bg: "#2E1C5F" },
  { bg: "#66432C" },
  { bg: "#19414B" },
  { bg: "#FFF9EE" },
  { bg: "#483C39" },
  { bg: "#1D3B39" },
];

function generateLighterShade(hex: string): string {
  return `${hex}80`; // 50% opacity fallback
}

export function GridCaseStudyCard({
  caseStudy,
  index,
}: GridCaseStudyCardProps) {
  const colorTheme = CARD_COLORS[index % CARD_COLORS.length];

  const blurBackground = caseStudy.backgroundImage
    ? `url('${caseStudy.backgroundImage}')`
    : `linear-gradient(${generateLighterShade(colorTheme.bg)}, ${generateLighterShade(colorTheme.bg)})`;

  return (
    <div className="w-full flex flex-col gap-6 group">
      <Link href={caseStudy.href} className="block w-full">
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-[#14142B]">
          {/* Static Blurred Background */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-2xl scale-[1.3] opacity-90 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            style={{ backgroundImage: blurBackground }}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

          {/* Foreground Inner Image */}
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
            <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-700 ease-out">
              <Image
                fill
                src={caseStudy.heroImage}
                alt={caseStudy.title || "Case Study"}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col gap-4">
        {/* Title and Categories */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm tracking-widest uppercase font-semibold text-[#14142B]">
            {caseStudy.client || caseStudy.title}
          </span>
          
          {caseStudy.categories && caseStudy.categories.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {caseStudy.categories.map((cat, i) => (
                <span
                  key={i}
                  className="text-xs tracking-widest uppercase border border-[#14142B]/20 px-2 py-1 text-[#14142B]/80"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        {caseStudy.description && (
          <h3 className="text-xl md:text-2xl font-medium text-[#14142B]/90 leading-snug">
            {caseStudy.description}
          </h3>
        )}
      </div>
    </div>
  );
}
