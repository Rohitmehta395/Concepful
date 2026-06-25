import { CaseStudyData } from "@/types/case-study";

export const claritySystemData: CaseStudyData = {
  slug: "clarity-system",
  seo: {
    title: "Case Study: From scattered message to scalable brand system | Concepful",
    description: "A case study showing how Concepful helped a complex business clarify its positioning, rebuild its narrative, and translate that into a sharper digital presence.",
    image: "/images/case-study-hero.png"
  },
  hero: {
    tags: ["Brand Strategy", "Narrative", "Visual Identity", "Web Design", "Design Systems"],
    title: (
      <>
        From scattered<br/>
        <em className="not-italic font-bold text-[#FF3951]">message</em> to<br/>
        scalable brand system.
      </>
    ),
    metadata: [
      { label: "Agency", value: "Concepful" },
      { label: "Deliverable", value: "Brand System" },
      { label: "Timeline", value: "3 Weeks" }
    ],
    highlightMetric: {
      value: "2.5x",
      label: "Inbound leads"
    },
    image: {
      src: "/images/case-study-hero.png",
      alt: "Concepful brand system case study",
      label: "Placeholder Case Study"
    }
  },
  brief: {
    sectionLabel: "The Brief",
    paragraphs: [
      "Our client had built something genuinely valuable — a robust product with a clear competitive advantage. But their growth had stalled. The website spoke in features, not outcomes. Their pitch decks contradicted their homepage. And their visual identity looked like every other SaaS company in the market.",
      "They weren't losing deals to a better competitor. They were losing deals to confusion. Every conversation started with the same 15-minute explanation of what they actually did. The brand had no consistent voice, no scalable system, and no clear north star. We were brought in to fix all of it."
    ],
    keyChallenge: {
      label: "Key Challenge",
      quote: "\"They weren't losing deals to competitors. They were losing deals to confusion.\""
    },
    deliverables: [
      "Brand Strategy & Positioning",
      "Messaging Architecture",
      "Visual Identity System",
      "Website Design",
      "Design System & Guidelines"
    ],
    projectDetails: [
      { label: "Industry", value: "B2B SaaS" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Format", value: "Placeholder" },
      { label: "Status", value: "Completed", isHighlight: true }
    ]
  },
  statsBar: {
    items: [
      { value: "40%", label: "Sales Cycle Reduction" },
      { value: "2.5×", label: "Inbound Lead Growth" },
      { value: "7", label: "Brand Touchpoints" },
      { value: "3 wks", label: "Full Delivery" }
    ]
  },
  challenge: {
    sectionLabel: "02 — The Challenge",
    title: (
      <>
        The brand had no<br />
        <span className="text-[#FF3951]">consistent voice.</span>
      </>
    ),
    introParagraphs: [
      "The client came to us at a critical inflection point. They had built a genuinely strong product over three years — one that solved a real problem for a specific set of buyers. But their growth had plateaued, and they couldn't figure out why.",
      "After our initial audit, the answer became clear: every channel told a different story. The website spoke in technical features. The pitch deck led with the founding team. The sales team improvised a different narrative on every call. There was no single, clear answer to the question every buyer asks in the first 30 seconds: what do you actually do, and why should I care?"
    ],
    challenges: [
      { number: "01", title: "No positioning clarity", description: "The company could not define who they were for and why they were different from alternatives in one sentence." },
      { number: "02", title: "Disconnected brand touchpoints", description: "Website, sales deck, social profiles, and onboarding emails each had a different visual language and tone — there was no recognisable brand." },
      { number: "03", title: "Visual identity that signalled nothing", description: "A generic color palette, stock typography, and templated layouts gave the impression of a company still figuring itself out." }
    ],
    cards: {
      quote: {
        text: "\"Our sales team spends the first 15 minutes of every call just explaining what we do. By then we've already lost them.\"",
        authorRole: "CEO",
        authorDescription: "Placeholder Client — Founder & CEO"
      },
      metrics: [
        { value: "15", unit: "min", description: "Average spent explaining the product on every sales call" },
        { value: "0", description: "Consistent brand assets across all touchpoints", isHighlight: true }
      ],
      complexity: 4
    }
  },
  process: {
    sectionLabel: "03 — Our Process",
    sectionTitle: "How we go from unclear to undeniable",
    marqueeItems1: [
      { number: "01", title: "Discovery & Audit", description: "We interview leadership, map competitor positioning, and audit every brand touchpoint — website, deck, social, onboarding.", tag: "Research" },
      { number: "02", title: "Positioning Workshop", description: "A focused session to define the single true differentiator. We find the intersection of what you do best and what your buyers care about most.", tag: "Strategy" },
      { number: "03", title: "Narrative Architecture", description: "We build the complete messaging framework — the headline, the story arc, the proof points — so every channel speaks from the same source.", tag: "Messaging" },
      { number: "04", title: "Visual Identity", description: "Logo, colour, typography, motion. A visual language built from your positioning up — not chosen from a mood board.", tag: "Design" },
      { number: "05", title: "Design System", description: "A component library and brand guidelines that let your team build new touchpoints without reinventing the wheel each time.", tag: "Systems" },
      { number: "06", title: "Web Design", description: "The website is redesigned from the customer journey outward. Every page earns its place by answering a specific buyer question.", tag: "Digital" },
    ],
    marqueeItems2: [
      { number: "A", title: "Unified brand voice", description: "Every team member — sales, marketing, product — now tells the same story in their own words.", tag: "Outcome" },
      { number: "B", title: "Scalable asset system", description: "50+ on-brand templates, components, and assets handed off to the internal team on day one.", tag: "Outcome" },
      { number: "C", title: "40% faster sales cycles", description: "When buyers understand what you do immediately, the qualification conversation moves faster.", tag: "Result" },
      { number: "D", title: "2.5× inbound leads", description: "Clear positioning attracts the right buyers before a single sales call happens.", tag: "Result" },
      { number: "E", title: "Zero design debt", description: "A documented system means no more one-off requests or inconsistent collateral.", tag: "Outcome" },
      { number: "F", title: "Founder confidence", description: "For the first time, the founding team could hand anyone a single document and say: this is who we are.", tag: "Outcome" },
    ]
  },
  strategy: {
    sectionLabel: "04 — Strategy & Discovery",
    phases: [
      {
        number: "1",
        title: "Discovery Sprint",
        description: "Five days of structured research. We interview every stakeholder, audit all brand touchpoints, and map the full competitive landscape before forming a single opinion.",
        outputs: [
          "Competitive landscape map",
          "Brand audit report",
          "Stakeholder insight synthesis",
          "Buyer interview themes"
        ]
      },
      {
        number: "2",
        title: "Positioning Workshop",
        description: "A single focused session with the founding team to define the one true differentiator — the intersection of what you do best and what your buyers care about most.",
        outputs: [
          "Positioning statement",
          "ICP definition",
          "Differentiation framework",
          "Messaging hierarchy"
        ]
      },
      {
        number: "3",
        title: "Narrative Build",
        description: "With the positioning locked, we construct the full messaging architecture — headlines, story arc, proof points — so every channel can speak from the same source of truth.",
        outputs: [
          "Brand narrative document",
          "Messaging framework",
          "Tone of voice guide",
          "Copy templates"
        ]
      }
    ]
  },
  brandSystem: {
    sectionLabel: "05 — Brand System",
    title: (
      <>
        A system built<br />
        to <span className="text-[#FF3951]">scale.</span>
      </>
    ),
    description: "Every visual decision traces back to the positioning work. Colour, type, spacing, and motion — all derived from who the brand is for and what it needs to communicate.",
    primaryIdentity: {
      label: "Primary Identity",
      wordmark: "Concepful",
      tagline: "Clarity · Strategy · Brand",
      colors: [
        { hex: "#FF3951", class: "bg-[#FF3951]" },
        { hex: "#3B6BFF", class: "bg-[#3B6BFF]" },
        { hex: "#FFFFFF", class: "bg-white" }
      ]
    },
    typeSystem: {
      label: "Type System",
      fontName: "Inter Variable",
      weights: "300 · 400 · 600 · 700 · 800"
    },
    palette: [
      { name: "Coral Red", hex: "#FF3951", class: "bg-[#FF3951]" },
      { name: "Electric Blue", hex: "#3B6BFF", class: "bg-[#3B6BFF]" },
      { name: "Ink Black", hex: "#14142B", class: "bg-[#14142B]" },
      { name: "Mid Grey", hex: "#6E7191", class: "bg-[#6E7191]" },
      { name: "Off White", hex: "#F5F5F7", class: "bg-[#F5F5F7] border border-[#14142B]/8" }
    ],
    designTokens: {
      items: [
        { label: "--radius-base", value: "12px" },
        { label: "--space-unit", value: "8px" },
        { label: "--transition", value: "0.3s ease" },
        { label: "--shadow-md", value: "0 8px 24px" },
        { label: "--grid-cols", value: "12" }
      ],
      tags: ["Spacing", "Motion", "Elevation"]
    },
    deliverables: [
      "Brand guidelines (48 pages)",
      "Logo system & variants",
      "Full colour & type system",
      "Component library (Figma)",
      "Website redesign (8 pages)",
      "Messaging framework doc"
    ]
  },
  results: {
    sectionLabel: "06 — Results",
    title: (
      <>
        Clarity delivered.<br />
        <span className="text-[#FF3951]">Results followed.</span>
      </>
    ),
    stats: [
      { value: "40%", label: "Sales cycle reduction", description: "Buyers reached a decision faster once the value was clear from the first touchpoint.", isHighlight: true },
      { value: "2.5×", label: "Inbound lead growth", description: "Clear positioning attracted the right buyers before a single sales conversation began.", isHighlight: true },
      { value: "7", label: "Brand touchpoints unified", description: "Website, deck, social, onboarding, email, ads, and docs — all speaking from the same system." },
      { value: "3wk", label: "Full delivery", description: "From kickoff to a fully handed-off brand system, guidelines, and redesigned website." }
    ],
    quote: {
      text: "For the first time in three years, our entire company sounds like they work for the same organisation. The design is beautiful, but the real value is that people finally understand what we do in the first 30 seconds.",
      authorRole: "CEO",
      authorName: "Placeholder Client",
      authorDescription: "Founder & CEO — Placeholder Co.",
      clientLabel: "Concepful Client"
    },
    beforeAfter: [
      { before: "No consistent answer to 'what do you do?'", after: "A single positioning statement every team member uses" },
      { before: "7 disconnected brand touchpoints", after: "One unified visual system across all channels" },
      { before: "15-minute product explanation on every sales call", after: "Buyers arrive pre-qualified from the website alone" },
      { before: "Generic visual identity with no differentiation", after: "A distinct brand that signals authority and clarity" }
    ]
  },
  cta: {
    sectionLabel: "Start your project",
    title: (
      <>
        Ready to build a brand<br />
        your team can{" "}
        <span className="text-[#FF3951]">actually use?</span>
      </>
    ),
    buttonText: "Start Your Clarity Project",
    buttonLink: "/contact",
    secondaryLinkText: "View all work",
    secondaryLinkUrl: "/case-studies",
    includesLabel: "What's included",
    includes: [
      "Discovery & brand audit",
      "Positioning workshop",
      "Full visual identity",
      "Design system & guidelines",
      "Website redesign"
    ],
    footerText: "Every engagement starts with a free 30-minute clarity call. No obligations."
  }
};
