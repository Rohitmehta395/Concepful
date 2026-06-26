"use client";

import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";
import { GridCaseStudyCard } from "./card/GridCaseStudyCard";
import { CaseStudyListing } from "@/types/case-study";

export function CaseStudyGridVariant({
  projects,
}: {
  projects: CaseStudyListing[];
}) {
  return (
    <SectionWrapper overflowHidden={false} className="py-24 lg:py-32">
      <ContentContainer size="wide">
        {/* We use a CSS grid for this layout variant to match the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative pb-10">
          {projects.map((project, index) => (
            <GridCaseStudyCard
              key={project.slug}
              caseStudy={project}
              index={index}
            />
          ))}
        </div>
      </ContentContainer>
    </SectionWrapper>
  );
}
