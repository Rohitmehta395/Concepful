"use client";

import { useRef } from "react";
import { HexDecor } from "@/components/site/HexDecor";
import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import { caseStudies } from "@/data/case-studies";

interface CaseStudyHeroProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewType: "list" | "grid";
  onViewTypeChange: (view: "list" | "grid") => void;
}

export function CaseStudyHero({ 
  activeCategory, 
  onCategoryChange,
  viewType,
  onViewTypeChange
}: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useHeroReveal(containerRef, [headingRef, descRef]);

  // Compute category counts dynamically
  const allCategories = caseStudies.flatMap(cs => cs.categories);
  const categoryCounts = allCategories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filters = [
    { name: 'ALL', count: caseStudies.length },
    ...Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
  ].sort((a, b) => b.count - a.count);

  return (
    <SectionWrapper className="pt-24 pb-16 md:pt-24 md:pb-8 border-b border-[#14142B]/5">
      <HexDecor variant="dashed" color="coral" className="top-20 -right-12 w-[200px] h-[200px]" rotate={-10} opacity={0.45} />
      <HexDecor variant="cluster" color="blue" className="-bottom-12 left-1/2 w-[240px] h-[240px]" rotate={12} opacity={0.4} />
      <HexDecor variant="outline" color="ink" className="top-1/4 right-1/2 w-[100px] h-[100px]" rotate={22} opacity={0.15} />
      <ContentContainer>
        <div ref={containerRef} className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Left Side: Title, Desc, and Buttons */}
          <div className="max-w-2xl">
            <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold tracking-tight text-[#14142B] uppercase leading-[1.05] mb-8 opacity-0">
              Work that makes sense.
            </h1>
            <p ref={descRef} className="text-xl md:text-1xl text-[#6E7191] leading-relaxed opacity-0 mb-12">
              We help companies turn complex ideas into clear narratives and scalable design systems. See how clarity builds better outcomes.
            </p>

            <div className="flex gap-3">
              {/* List View Button */}
              <button 
                onClick={() => onViewTypeChange("list")}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 ${
                  viewType === "list" 
                    ? "bg-[#F5F5F0] text-[#14142B]" 
                    : "bg-[#14142B]/5 text-[#14142B]/40 hover:bg-[#14142B]/10 hover:text-[#14142B]"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                </svg>
              </button>
              {/* Grid View Button */}
              <button 
                onClick={() => onViewTypeChange("grid")}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 ${
                  viewType === "grid" 
                    ? "bg-[#F5F5F0] text-[#14142B]" 
                    : "bg-[#14142B]/5 text-[#14142B]/40 hover:bg-[#14142B]/10 hover:text-[#14142B]"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Filters */}
          <div className="flex flex-wrap lg:justify-end gap-x-6 gap-y-2 lg:max-w-xl lg:text-right lg:pt-4">
            {filters.map((filter) => {
              const isActive = activeCategory === filter.name;
              return (
                <button 
                  key={filter.name} 
                  onClick={() => onCategoryChange(filter.name)}
                  className={`font-bold tracking-tight text-2xl md:text-3xl lg:text-[34px] uppercase transition-colors flex items-start ${isActive ? 'text-[#14142B]' : 'text-[#14142B]/30 hover:text-[#14142B]'}`}
                >
                  {filter.name}
                  <span className="text-sm font-medium ml-1.5 mt-1">{filter.count}</span>
                </button>
              );
            })}
          </div>
          
        </div>
      </ContentContainer>
    </SectionWrapper>
  );
}
