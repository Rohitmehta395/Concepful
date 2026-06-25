"use client";

import { useRef } from "react";
import { PillButton } from "@/components/site/PillButton";
import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";
import { AnimatedCaseStudyCard } from "./card/AnimatedCaseStudyCard";
import { CaseStudyListing } from "@/types/case-study";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CaseStudyGrid({ projects }: { projects: CaseStudyListing[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".case-study-card") as HTMLElement[];
      if (cards.length === 0) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          const innerCard = card.querySelector(".case-study-inner");

          if (!innerCard) return;

          gsap.to(innerCard, {
            scale: 0.985,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top top+=496px", // Start receding 400px before overlap
              end: "top top+=96px", // Complete receding when perfectly overlapped
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper overflowHidden={false} className="py-24 lg:py-40">
      <ContentContainer size="wide">
        <div
          ref={containerRef}
          className="flex flex-col gap-16 lg:gap-32 relative pb-32"
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
        <div className="border-t border-[#14142B]/10 pt-32 mt-16 flex flex-col items-center justify-center text-center">
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
        </div>
      </ContentContainer>
    </SectionWrapper>
  );
}
