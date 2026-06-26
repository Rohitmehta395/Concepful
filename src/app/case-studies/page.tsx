"use client";

import { useState } from "react";
import { SeoHead } from "@/components/site/SeoHead";
import { PageContainer } from "@/components/case-studies/layouts/PageContainer";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { CaseStudyGridVariant } from "@/components/case-studies/CaseStudyGridVariant";
import { CaseStudyCTA } from "@/components/case-studies/CaseStudyCTA";
import { caseStudies } from "@/data/case-studies";
import { ServiceCategory } from "@/types/case-study";

export default function CaseStudiesIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [viewType, setViewType] = useState<"list" | "grid">("list");

  const filteredProjects = activeCategory === "ALL" 
    ? caseStudies 
    : caseStudies.filter(p => p.categories.includes(activeCategory as ServiceCategory));

  return (
    <>
      <SeoHead 
        title="Case Studies | Concepful"
        description="See how Concepful helps companies clarify their positioning, rebuild narratives, and translate strategy into scalable brand systems."
        path="/case-studies"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Concepful Case Studies",
          "url": "https://conceptful.agency/case-studies",
          "description": "Case studies showing how Concepful helps companies clarify their positioning, rebuild narratives, and translate strategy into scalable brand systems.",
          "isPartOf": { "@id": "https://conceptful.agency/#website" },
          "hasPart": [
            {
              "@type": "Article",
              "headline": "From scattered message to scalable brand system",
              "url": "https://conceptful.agency/case-studies/clarity-system"
            }
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://conceptful.agency/case-studies" }
          ]
        }`}
      </script>

      <PageContainer>
        <CaseStudyHero 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
          viewType={viewType}
          onViewTypeChange={setViewType}
        />
        {viewType === "list" ? (
          <CaseStudyGrid projects={filteredProjects} />
        ) : (
          <CaseStudyGridVariant projects={filteredProjects} />
        )}
        <CaseStudyCTA />
      </PageContainer>
    </>
  );
}

