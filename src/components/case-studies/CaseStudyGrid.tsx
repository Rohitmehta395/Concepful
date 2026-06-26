"use client";

import { useRef } from "react";
import { PillButton } from "@/components/site/PillButton";
import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";
import { AnimatedCaseStudyCard } from "./card/AnimatedCaseStudyCard";
import { CaseStudyListing } from "@/types/case-study";
import { useStackCards } from "@/hooks/useStackCards";

export function CaseStudyGrid({ projects }: { projects: CaseStudyListing[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize the single animation controller for the entire section
  // Re-run when the projects change (due to filtering)
  useStackCards(containerRef, [projects]);

  return (
    <SectionWrapper overflowHidden={false} className="py-24 lg:py-20">
      <ContentContainer size="wide">
        <div
          ref={containerRef}
          className="flex flex-col gap-[15vh] lg:gap-[30vh] relative pb-10"
        >
          {projects.map((project, index) => (
            <AnimatedCaseStudyCard
              key={project.slug}
              caseStudy={project}
              index={index}
            />
          ))}
        </div>

        {/* Editorial Placeholder for future case studies */}
        {/* <div className="border-t border-[#14142B]/10 pt-16 mt-16 flex flex-col items-center justify-center text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-[#14142B] tracking-tight mb-8">
            More work coming soon
          </h3>
          <p className="text-[#6E7191] text-xl leading-relaxed max-w-xl mb-12 font-light">
            We are currently wrapping up several major brand and web system
            projects. Check back soon for deeper insights.
          </p>
          <PillButton href="/contact" variant="secondary">
            Start Your Project
          </PillButton>
        </div> */}
      </ContentContainer>
    </SectionWrapper>
  );
}
