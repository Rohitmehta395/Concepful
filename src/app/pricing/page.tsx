"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles, Compass, Layers, Infinity as InfinityIcon, ArrowRight, ArrowDown } from "lucide-react";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { cn } from "@/lib/utils";

type Tier = {
  id: string;
  title: string;
  icon: typeof Sparkles;
  tagline: string;
  investment: string;
  timeline: string;
  scope: string;
  included: string[];
  outcome: string;
  cta: string;
  featured: boolean;
};

const TIERS: Tier[] = [
  {
    id: "clarity-sprint",
    title: "Clarity Sprint",
    icon: Compass,
    tagline: "Figure out what actually matters before you spend on production.",
    investment: "$5,000 to $12,000 fixed",
    timeline: "2 to 4 weeks",
    scope: "Best for founders, SMBs, and early-stage firms who need direction before they invest in production.",
    included: [
      "Positioning audit",
      "Messaging architecture",
      "Brand narrative",
      "Strategic recommendations",
      "Initial visual direction",
    ],
    outcome: "You leave knowing what matters, what to say, and what to build next.",
    cta: "Start a Clarity Sprint",
    featured: false,
  },
  {
    id: "strategic-build",
    title: "Strategic Build",
    icon: Layers,
    tagline: "Build the signal system: positioning, identity, narrative, and the workflows to scale them.",
    investment: "$20,000 to $75,000+",
    timeline: "6 to 16 weeks",
    scope: "Best for growing SMBs, lower mid-market, and firms that need a real repositioning, not a refresh.",
    included: [
      "Positioning, identity, and narrative system",
      "Content strategy and executive communication alignment",
      "Custom prompt systems and tone-alignment workflows",
      "Editorial acceleration and image-generation pipelines",
      "Onboarding, configuration, and infrastructure setup",
    ],
    outcome: "A signal system, human and AI-enhanced, that scales with your team.",
    cta: "Build the System",
    featured: true,
  },
  {
    id: "embedded-partner",
    title: "Embedded Partner",
    icon: InfinityIcon,
    tagline: "Institutionalize clarity. Strategic steering plus an agentic layer trained on you.",
    investment: "$6k to $20k/mo retainer, plus infrastructure scoped to usage",
    timeline: "Ongoing, by application",
    scope: "Best for mid-market, advisory firms, funds, media organizations, and complex operators.",
    included: [
      "Strategic context engine trained on your brand voice and positioning",
      "Executive narrative assistant for messaging and analysis",
      "Signal scout for competitor, policy, and market monitoring",
      "Creative direction agent for on-brand visuals and ideation",
      "Ongoing strategic steering with the Concepful team",
    ],
    outcome: "Institutional memory and signal systems your team owns and compounds over time.",
    cta: "Apply for Embedded Partner",
    featured: false,
  },
];

const POLISH = {
  id: "polish",
  title: "Polish",
  investment: "From $1,500",
  timeline: "1 to 2 weeks",
  description: "Polish is a focused refinement of one specific thing: an existing landing page, deck, brand asset, or campaign creative made deployment-ready. Talk to us if it's something we can turn around fast.",
  cta: "Start a Polish Project",
};

const NOT_PAYING_FOR = [
  "More design files",
  "More content",
  'More "activity"',
];

const PAYING_FOR = [
  "Clarity people instantly understand",
  "Systems that scale with your team",
  "Strategic context that becomes yours over time",
];

const FIT_IF = [
  "You want clarity that compounds, not deliverables that pile up",
  "You're choosing differentiation over volume",
  "You want strategy and systems that scale with your team",
];

const NOT_FIT_IF = [
  "You want unlimited revisions on someone else's plan",
  "You're optimizing purely for the lowest price",
  "You want execution without strategic direction",
];

const STARTING_POINTS = [
  {
    id: "polish",
    label: "I just need something specific sharpened",
    result: "Start with Polish.",
    blurb: "We'll take one focused piece of existing work, a landing page, deck, brand asset, or campaign creative, and make it deployment-ready.",
    tierTitle: "Polish",
  },
  {
    id: "clarity-sprint",
    label: "I need to figure out what actually matters",
    result: "Start with a Clarity Sprint.",
    blurb: "We'll run a positioning audit, build a messaging architecture and brand narrative, and give you the direction to invest in production with confidence.",
    tierTitle: "Clarity Sprint",
  },
  {
    id: "strategic-build",
    label: "I need a full repositioning and signal system",
    result: "Start with a Strategic Build.",
    blurb: "We'll build positioning, identity, narrative, content strategy, and the AI-enhanced workflows your team uses to scale them.",
    tierTitle: "Strategic Build",
  },
  {
    id: "embedded-partner",
    label: "I want strategic steering as a long-term partner",
    result: "Start with Embedded Partner.",
    blurb: "We embed with leadership for ongoing strategic steering, with an agentic layer trained on your brand voice, positioning, and prior work. By application.",
    tierTitle: "Embedded Partner",
  },
];

export default function Pricing() {
  const [selectedStart, setSelectedStart] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const cardsSectionRef = useRef<HTMLDivElement | null>(null);
  const radioRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedOption = STARTING_POINTS.find((s) => s.id === selectedStart) ?? null;

  const scrollToCards = () => {
    cardsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTier = (tierId: string) => {
    const node = cardRefs.current[tierId];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const focusRadioAt = (idx: number) => {
    const len = STARTING_POINTS.length;
    const target = ((idx % len) + len) % len;
    const opt = STARTING_POINTS[target];
    setSelectedStart(opt.id);
    radioRefs.current[target]?.focus();
  };

  const handleRadioKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIdx: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusRadioAt(currentIdx + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusRadioAt(currentIdx - 1);
        break;
      case "Home":
        e.preventDefault();
        focusRadioAt(0);
        break;
      case "End":
        e.preventDefault();
        focusRadioAt(STARTING_POINTS.length - 1);
        break;
    }
  };

  // For roving tabindex: the selected radio is tabbable; if none selected, the first is.
  const tabbableIdx = selectedStart
    ? Math.max(0, STARTING_POINTS.findIndex((s) => s.id === selectedStart))
    : 0;

  return (
    <>
      <SeoHead
        title="Concepful Pricing | Clarity Sprint to Embedded Partner"
        description="Engagement models from a focused Polish to a Clarity Sprint, a full Strategic Build, and an Embedded Partner with strategic steering and agentic systems."
        path="/pricing"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://conceptful.agency/pricing" }
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Concepful",
          "url": "https://conceptful.agency/pricing",
          "description": "Creative strategy and design agency in Miami offering focused refinement (Polish), Clarity Sprints, full Strategic Builds, and Embedded Partner engagements with strategic steering and agentic systems.",
          "areaServed": "Worldwide",
          "priceRange": "$1,500 to $75,000+",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10020 SW 228th Ter.",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33190",
            "addressCountry": "US"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Concepful Engagement Models",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Polish",
                "description": "Focused refinement of one specific piece of existing work, an existing landing page, deck, brand asset, or campaign creative, made deployment-ready.",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "minPrice": 1500,
                  "maxPrice": 4500
                }
              },
              {
                "@type": "Offer",
                "name": "Clarity Sprint",
                "description": "Fixed-fee strategy sprint covering positioning audit, messaging architecture, brand narrative, strategic recommendations, and initial visual direction.",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "minPrice": 5000,
                  "maxPrice": 12000
                }
              },
              {
                "@type": "Offer",
                "name": "Strategic Build",
                "description": "Full repositioning and signal system: positioning, identity, narrative, content strategy, executive communication alignment, plus AI-enhanced workflows including custom prompt systems, tone alignment, editorial acceleration, and image-generation pipelines.",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "minPrice": 20000,
                  "maxPrice": 75000
                }
              },
              {
                "@type": "Offer",
                "name": "Embedded Partner",
                "description": "Ongoing strategic steering plus an agentic layer trained on your brand: a strategic context engine, executive narrative assistant, signal scout, and creative direction agent. Monthly retainer plus infrastructure scoped to usage. By application.",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "priceCurrency": "USD",
                  "minPrice": 6000,
                  "maxPrice": 20000,
                  "unitCode": "MON",
                  "billingIncrement": 1
                }
              }
            ]
          }
        }`}
      </script>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-28">
        <HexDecor variant="nested" color="coral" className="top-20 -left-24 w-[320px] h-[320px]" rotate={-12} opacity={0.4} />
        <HexDecor variant="dashed" color="blue" className="top-32 right-8 w-[200px] h-[200px]" rotate={14} opacity={0.4} />
        <HexDecor variant="outline" color="coral" className="bottom-12 left-1/4 w-[140px] h-[140px]" rotate={20} opacity={0.35} />
        <HexDecor variant="solid" color="blue" className="-bottom-10 -right-12 w-[220px] h-[220px]" rotate={-18} opacity={0.5} />

        <div className="relative mx-auto max-w-[900px] px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#FFF4F1] border border-[#FF3951]/15">
              <Sparkles aria-hidden className="w-3.5 h-3.5 text-[#FF3951]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#FF3951]">Pricing</span>
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-[#14142B] tracking-tight leading-[1.05] mb-8">
              From a Clarity Sprint to an Embedded Partner.
            </h1>

            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed max-w-2xl mx-auto mb-4">
              Three engagement models for founders, growing teams, and complex operators. Plus a Polish lane when you just need one specific thing sharpened.
            </p>
            <p className="text-base text-[#6E7191] leading-relaxed max-w-xl mx-auto mb-10">
              Start where you are. Scale when it makes sense.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PillButton href="/contact">Book a Clarity Call</PillButton>
              <PillButton variant="secondary" onClick={scrollToCards} showArrow={false}>
                <span className="inline-flex items-center gap-2">
                  Compare Options
                  <ArrowDown aria-hidden className="w-4 h-4" />
                </span>
              </PillButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW THIS WORKS - 2 column */}
      <section className="bg-[#14142B] text-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-[#FF3951] mb-6">
                How this works
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Not every project needs the same starting point.
              </h2>
              <span className="mt-8 block w-16 h-[3px] bg-[#FF3951] rounded-full" aria-hidden />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-lg md:text-xl text-white/75 leading-relaxed md:pt-2"
            >
              <p>Some teams just need a specific piece of work sharpened, a tightened landing page, a refined deck, a polished campaign asset.</p>
              <p>Some need a clarity sprint to figure out what actually matters before they spend on production.</p>
              <p>Some need a full strategic build: positioning, identity, narrative, content, and the AI-enhanced workflows to scale them.</p>
              <p>And some need an embedded partner who institutionalizes clarity over time.</p>
              <p className="text-white">
                We structure our work around how much clarity, scale, and institutional memory you actually need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section
        id="pricing-cards"
        ref={cardsSectionRef}
        className="relative py-24 md:py-32 bg-white scroll-mt-24"
      >
        <HexDecor variant="dashed" color="coral" className="top-24 -right-20 w-[220px] h-[220px]" rotate={-18} opacity={0.3} />
        <HexDecor variant="outline" color="blue" className="bottom-20 -left-16 w-[180px] h-[180px]" rotate={16} opacity={0.3} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Three ways to engage."
            description="Plus a Polish lane below for focused, deployment-ready refinements."
            align="center"
            className="mb-16 mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {TIERS.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  id={`tier-${tier.id}`}
                  ref={(el) => {
                    cardRefs.current[tier.id] = el;
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={cn(
                    "group relative flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1",
                    tier.featured
                      ? "bg-white border-2 border-[#FF3951]/30 shadow-[0_24px_60px_rgba(20,20,43,0.10)] hover:shadow-[0_32px_72px_rgba(255,57,81,0.18)] md:-translate-y-3 md:hover:-translate-y-4"
                      : "bg-[#FAFAFC] border border-[#14142B]/8 hover:border-[#14142B]/15 hover:shadow-[0_20px_48px_rgba(20,20,43,0.08)]"
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FF3951] text-white text-[11px] font-bold uppercase tracking-[0.18em] shadow-[0_8px_22px_rgba(255,57,81,0.28)]">
                      Most popular
                    </span>
                  )}

                  <span aria-hidden className={cn(
                    "inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-6",
                    tier.featured ? "bg-[#FF3951] text-white" : "bg-[#FFF4F1] text-[#FF3951]"
                  )}>
                    <Icon className="w-6 h-6" />
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#14142B] tracking-tight mb-3">
                    {tier.title}
                  </h3>
                  <p className="text-[#6E7191] leading-relaxed mb-7 min-h-[3rem]">
                    {tier.tagline}
                  </p>

                  <div className="border-t border-[#14142B]/8 pt-6 mb-6 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7191] mb-1.5">
                        Investment
                      </span>
                      <span className="block text-[15px] font-semibold text-[#14142B]">
                        {tier.investment}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7191] mb-1.5">
                        Timeline
                      </span>
                      <span className="block text-[15px] font-semibold text-[#14142B]">
                        {tier.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-[#14142B]/8 pt-6 mb-6">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-2">
                      Scope
                    </span>
                    <p className="text-[14px] text-[#14142B] leading-relaxed">
                      {tier.scope}
                    </p>
                  </div>

                  <div className="border-t border-[#14142B]/8 pt-6 mb-6">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-3">
                      Included
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {tier.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#14142B] leading-snug">
                          <Check aria-hidden className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FF3951]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#14142B]/8 pt-6 mb-8 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-2">
                      Outcome
                    </span>
                    <p className="text-[15px] text-[#14142B] leading-relaxed">
                      {tier.outcome}
                    </p>
                  </div>

                  <PillButton
                    href="/contact"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </PillButton>
                </motion.div>
              );
            })}
          </div>

          {/* POLISH LANE */}
          <motion.div
            id={`tier-${POLISH.id}`}
            ref={(el) => {
              cardRefs.current[POLISH.id] = el;
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 lg:mt-16 rounded-3xl bg-[#FFF4F1] border border-[#FF3951]/20 p-8 md:p-10 lg:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-10"
          >
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white border border-[#FF3951]/20">
                <Sparkles aria-hidden className="w-3.5 h-3.5 text-[#FF3951]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF3951]">Polish lane</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#14142B] tracking-tight mb-3">
                Just need one specific thing sharpened?
              </h3>
              <p className="text-[#14142B]/75 text-base md:text-lg leading-relaxed mb-5 max-w-2xl">
                {POLISH.description}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7191] mb-1">
                    Investment
                  </span>
                  <span className="block text-[15px] font-semibold text-[#14142B]">
                    {POLISH.investment}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7191] mb-1">
                    Timeline
                  </span>
                  <span className="block text-[15px] font-semibold text-[#14142B]">
                    {POLISH.timeline}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:flex-shrink-0">
              <PillButton href="/contact">{POLISH.cta}</PillButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE COMPARISON */}
      <section className="bg-[#FAFAFC] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeading
            eyebrow="What you're paying for"
            title="This isn't about more marketing."
            description="It's about making what you have actually work."
            align="center"
            className="mb-16 mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 border border-[#14142B]/8"
            >
              <span className="inline-flex items-center gap-2 mb-6">
                <span aria-hidden className="inline-flex w-9 h-9 rounded-xl bg-[#14142B]/5 text-[#6E7191] items-center justify-center">
                  <X className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E7191]">
                  You're not paying for
                </span>
              </span>
              <ul className="flex flex-col gap-4">
                {NOT_PAYING_FOR.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-[#6E7191] leading-snug">
                    <X aria-hidden className="w-5 h-5 mt-1 flex-shrink-0 text-[#6E7191]/60" />
                    <span className="line-through decoration-[#6E7191]/40 decoration-2">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#14142B] rounded-3xl p-10 text-white"
            >
              <span className="inline-flex items-center gap-2 mb-6">
                <span aria-hidden className="inline-flex w-9 h-9 rounded-xl bg-[#FF3951] text-white items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF3951]">
                  You're paying for
                </span>
              </span>
              <ul className="flex flex-col gap-4">
                {PAYING_FOR.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white leading-snug">
                    <Check aria-hidden className="w-5 h-5 mt-1 flex-shrink-0 text-[#FF3951]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Who this is for"
            title="We're not for everyone."
            description="And that's intentional."
            align="center"
            className="mb-16 mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFF4F1] rounded-3xl p-10 border border-[#FF3951]/15"
            >
              <h3 className="text-2xl font-bold text-[#14142B] mb-6">We're a fit if:</h3>
              <ul className="flex flex-col gap-4">
                {FIT_IF.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#14142B] text-lg leading-snug">
                    <Check aria-hidden className="w-5 h-5 mt-1 flex-shrink-0 text-[#FF3951]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAFAFC] rounded-3xl p-10 border border-[#14142B]/8"
            >
              <h3 className="text-2xl font-bold text-[#14142B] mb-6">We're not a fit if:</h3>
              <ul className="flex flex-col gap-4">
                {NOT_FIT_IF.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6E7191] text-lg leading-snug">
                    <X aria-hidden className="w-5 h-5 mt-1 flex-shrink-0 text-[#6E7191]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING PHILOSOPHY */}
      <section className="bg-[#FAFAFC] py-24 md:py-32">
        <div className="mx-auto max-w-[760px] px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-6">
              Pricing philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#14142B] tracking-tight leading-[1.05] mb-10">
              Start where you are. Scale when it makes sense.
            </h2>
            <div className="space-y-5 text-lg md:text-xl text-[#6E7191] leading-relaxed mb-10">
              <p>Most teams don't need everything upfront.</p>
              <p>Some start with a Polish, just sharpening what they already have.</p>
              <p>Some start with a Clarity Sprint to figure out what actually matters.</p>
              <p>Some are ready for a full Strategic Build.</p>
              <p>And some are ready for an Embedded Partner from day one.</p>
              <p>We'll help you choose the right starting point, and evolve from there.</p>
            </div>
            <p className="text-xl md:text-2xl text-[#14142B] font-semibold leading-snug border-t border-[#14142B]/10 pt-10">
              Most clients start with a Clarity Sprint or Strategic Build, then graduate into Embedded Partner once the systems start compounding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE STARTING-POINT SELECTOR */}
      <section className="relative py-24 md:py-32 bg-white">
        <HexDecor variant="outline" color="coral" className="top-12 -left-12 w-[160px] h-[160px]" rotate={-12} opacity={0.25} />
        <HexDecor variant="dashed" color="blue" className="bottom-12 -right-10 w-[180px] h-[180px]" rotate={14} opacity={0.25} />

        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Find your starting point"
            title="Where are you starting from?"
            align="center"
            className="mb-12 mx-auto"
          />

          <div
            role="radiogroup"
            aria-label="Where are you starting from?"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          >
            {STARTING_POINTS.map((opt, idx) => {
              const isSelected = selectedStart === opt.id;
              return (
                <button
                  key={opt.id}
                  ref={(el) => {
                    radioRefs.current[idx] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={tabbableIdx === idx ? 0 : -1}
                  onClick={() => setSelectedStart(opt.id)}
                  onKeyDown={(e) => handleRadioKeyDown(e, idx)}
                  className={cn(
                    "text-left rounded-2xl p-6 border-2 transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF3951]/30",
                    isSelected
                      ? "bg-[#FFF4F1] border-[#FF3951] shadow-[0_18px_42px_rgba(255,57,81,0.18)]"
                      : "bg-white border-[#14142B]/10 hover:border-[#FF3951]/50 hover:-translate-y-0.5"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "inline-flex w-7 h-7 rounded-full items-center justify-center mb-4 border-2 transition-colors",
                      isSelected
                        ? "border-[#FF3951] bg-[#FF3951] text-white"
                        : "border-[#14142B]/15 text-transparent"
                    )}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <p className={cn(
                    "text-[16px] md:text-[17px] font-semibold leading-snug",
                    isSelected ? "text-[#14142B]" : "text-[#14142B]"
                  )}>
                    {opt.label}
                  </p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selectedOption && (
              <motion.div
                key={selectedOption.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-10 rounded-3xl bg-[#14142B] text-white p-8 md:p-10 shadow-[0_24px_60px_rgba(20,20,43,0.18)]"
                aria-live="polite"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 md:justify-between">
                  <div className="flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF3951] mb-3">
                      Recommended for you
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                      {selectedOption.result}
                    </h3>
                    <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                      {selectedOption.blurb}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                    <PillButton
                      onClick={() => scrollToTier(selectedOption.id)}
                      variant="secondary"
                      showArrow={false}
                      className="whitespace-nowrap"
                    >
                      <span className="inline-flex items-center gap-2">
                        View {selectedOption.tierTitle}
                        <ArrowDown aria-hidden className="w-4 h-4 rotate-180" />
                      </span>
                    </PillButton>
                    <PillButton href="/contact" className="whitespace-nowrap">
                      Book a Clarity Call
                    </PillButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#14142B] text-white py-24 md:py-32 relative overflow-hidden">
        <HexDecor variant="outline" color="coral" className="top-12 -right-16 w-[220px] h-[220px]" rotate={-18} opacity={0.25} />
        <HexDecor variant="dashed" color="blue" className="bottom-8 -left-12 w-[200px] h-[200px]" rotate={14} opacity={0.25} />

        <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Not sure where you fit?
            </h2>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-12 max-w-2xl mx-auto">
              Book a Clarity Call. We'll look at what you've built or what you're trying to build, and point you to the right starting point, even if that's not us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PillButton href="/contact">Book a Clarity Call</PillButton>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-white hover:text-[#FF3951] font-semibold transition-colors"
              >
                See how we think
                <ArrowRight aria-hidden className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
