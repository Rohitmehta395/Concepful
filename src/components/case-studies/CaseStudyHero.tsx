"use client";

import { useRef } from "react";
import { HexDecor } from "@/components/site/HexDecor";
import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";
import { useHeroReveal } from "@/hooks/useHeroReveal";

export function CaseStudyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useHeroReveal(containerRef, [headingRef, descRef]);

  return (
    <SectionWrapper className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
      <HexDecor variant="dashed" color="coral" className="top-20 -right-12 w-[280px] h-[280px]" rotate={-10} opacity={0.45} />
      <HexDecor variant="cluster" color="blue" className="-bottom-16 left-12 w-[240px] h-[240px]" rotate={12} opacity={0.4} />
      <HexDecor variant="outline" color="ink" className="top-1/3 right-1/3 w-[100px] h-[100px]" rotate={22} opacity={0.15} />
      <ContentContainer>
        <div ref={containerRef} className="max-w-4xl">
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8 opacity-0">
            Work that makes sense.
          </h1>
          <p ref={descRef} className="text-xl md:text-2xl text-[#6E7191] leading-relaxed opacity-0">
            We help companies turn complex ideas into clear narratives and scalable design systems. See how clarity builds better outcomes.
          </p>
        </div>
      </ContentContainer>
    </SectionWrapper>
  );
}
