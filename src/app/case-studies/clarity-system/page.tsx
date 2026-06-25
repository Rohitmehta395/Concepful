"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { claritySystemData } from "@/data/case-studies/clarity-system";
import { HeroSection } from "@/components/case-study/Hero/HeroSection";
import { BriefSection } from "@/components/case-study/Brief/BriefSection";
import { ChallengeSection } from "@/components/case-study/Challenge/ChallengeSection";
import { ProcessSection } from "@/components/case-study/Process/ProcessSection";
import { StrategySection } from "@/components/case-study/Process/StrategySection";
import { SystemSection } from "@/components/case-study/System/SystemSection";
import { ResultsSection } from "@/components/case-study/Results/ResultsSection";
import { CTASection } from "@/components/case-study/CTA/CTASection";

export default function ClaritySystemCaseStudy() {
  const data = claritySystemData;

  return (
    <>
      <SeoHead 
        title={data.seo.title}
        description={data.seo.description}
        path={`/case-studies/${data.slug}`}
        type="article"
        image={data.seo.image}
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "From scattered message to scalable brand system",
          "description": "${data.seo.description}",
          "url": "https://conceptful.agency/case-studies/${data.slug}",
          "image": "https://conceptful.agency${data.seo.image}",
          "author": { "@id": "https://conceptful.agency/#organization" },
          "publisher": { "@id": "https://conceptful.agency/#organization" },
          "mainEntityOfPage": "https://conceptful.agency/case-studies/${data.slug}",
          "articleSection": "Case Study",
          "about": [
            "Brand strategy",
            "Positioning",
            "Narrative development",
            "Visual identity",
            "Website design"
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://conceptful.agency/case-studies" },
            { "@type": "ListItem", "position": 3, "name": "From scattered message to scalable brand system", "item": "https://conceptful.agency/case-studies/${data.slug}" }
          ]
        }`}
      </script>

      <HeroSection data={data.hero} />
      <BriefSection data={data.brief} statsData={data.statsBar} />
      <ChallengeSection data={data.challenge} />
      <ProcessSection data={data.process} />
      <StrategySection data={data.strategy} />
      <SystemSection data={data.brandSystem} />
      <ResultsSection data={data.results} />
      <CTASection data={data.cta} />
    </>
  );
}
