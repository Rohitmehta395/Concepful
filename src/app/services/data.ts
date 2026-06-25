import {
  Megaphone,
  PenTool,
  Briefcase,
  Sparkles,
  Video,
  FileText,
  Rocket,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type ServiceFAQ = { q: string; a: string };
export type ServiceProcessStep = { phase: string; title: string; desc: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  icon: LucideIcon;
  intro: string[];
  bestFor: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
  outcomes: string[];
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
  related: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "marketing-campaigns",
    title: "Marketing Campaigns",
    category: "Activation",
    tagline: "Strategic, end-to-end campaigns built to move audiences from passive interest to real action.",
    icon: Megaphone,
    intro: [
      "Most campaigns die in the gap between brand teams and demand teams. The story is sharp in one room and the targeting is sharp in another, but the work that ships in the middle does neither job well.",
      "We design and run integrated marketing campaigns that connect the strategic narrative to the channel mechanics, so the work actually moves the metric you are accountable for."
    ],
    bestFor: [
      "Founders launching a new product or category",
      "Marketing leaders who need senior firepower without a 12-week ramp",
      "Brands replacing scattered channel work with a coordinated push",
      "Teams whose campaigns look polished but quietly underperform"
    ],
    deliverables: [
      "Campaign strategy and creative concept",
      "Audience definition and targeting plan",
      "Creative system that scales across channels",
      "Paid media direction and brief",
      "Landing page or campaign microsite",
      "Measurement framework and dashboard",
      "Post-campaign learnings report"
    ],
    process: [
      { phase: "01", title: "Diagnose", desc: "Audit current performance, audience signals, and competitive positioning to find where attention is actually leaking." },
      { phase: "02", title: "Design", desc: "Lock the concept, channel plan, and creative system. Everything ladders to a single, testable idea." },
      { phase: "03", title: "Deploy", desc: "Production across surfaces. Paid, organic, web, and lifecycle all launch from the same brief." },
      { phase: "04", title: "Refine", desc: "Live optimization, mid-flight adjustments, and a clear post-campaign report your team can act on." }
    ],
    outcomes: [
      "Sharper message-market fit",
      "Higher quality leads, not just higher volume",
      "Lower cost per acquisition",
      "A repeatable campaign system the team can run again"
    ],
    faqs: [
      { q: "Do you handle paid media buying directly?", a: "Yes, with vetted media partners. We own the creative and strategic direction; partners handle the daily buying." },
      { q: "How long does a typical engagement run?", a: "Most campaigns run 6 to 12 weeks end to end, depending on scope and number of channels." },
      { q: "Can you work with our existing agency or internal team?", a: "Yes. We can lead the work, supplement an internal team, or sit in a creative director role over your existing partners." },
      { q: "Do you provide post-launch reporting?", a: "Yes. Every campaign closes with a written debrief covering performance, learnings, and recommendations for the next round." }
    ],
    ctaTitle: "Ready to launch a campaign that earns attention?",
    ctaSubtitle: "Tell us the moment, the metric, and the audience. We will tell you what it would take to do it right.",
    related: ["graphic-design", "content-creation", "one-off-campaigns"]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Craft",
    tagline: "Purpose-driven visual design that brings your brand to life across every surface, channel, and format.",
    icon: PenTool,
    intro: [
      "Design should reinforce the idea, not just decorate around it. Most marketing creative is produced reactively, piece by piece, and the result is a brand that looks slightly different in every place it shows up.",
      "We produce graphic design work that ladders up to a strategy and a system, so what you ship feels intentional and consistent without slowing the team down."
    ],
    bestFor: [
      "Teams without a senior designer in-house",
      "Brands shipping high volume marketing creative",
      "Founders preparing for a fundraise, launch, or major announcement",
      "Companies that have a logo but no actual visual system"
    ],
    deliverables: [
      "Marketing and campaign creative",
      "Social and ad templates",
      "Pitch decks and investor materials",
      "Sales collateral and one-pagers",
      "Event and conference assets",
      "Illustration and iconography",
      "Print collateral and packaging"
    ],
    process: [
      { phase: "01", title: "Brief", desc: "Objectives, audience, brand inputs, and what success looks like for the work." },
      { phase: "02", title: "Direction", desc: "Visual approach and a sample piece so you can react to the system, not just the deliverable." },
      { phase: "03", title: "Production", desc: "Full creative system or individual pieces, depending on scope." },
      { phase: "04", title: "Handoff", desc: "Source files, templates, and usage notes so the team can run with it." }
    ],
    outcomes: [
      "A consistent visual system across every surface",
      "Faster creative production, fewer rounds",
      "Design that supports the message instead of fighting it",
      "Templates the internal team can confidently apply"
    ],
    faqs: [
      { q: "Do you work to existing brand guidelines?", a: "Yes. If you have a system, we extend it. If you do not, we can build one as part of the engagement." },
      { q: "Can you create templates our team can reuse?", a: "Yes. Reusable templates are usually the most valuable deliverable, especially for social, decks, and recurring campaigns." },
      { q: "Do you do print as well as digital?", a: "Yes. Both digital and print, including packaging and event collateral." },
      { q: "How fast can you turn around a deck or one-pager?", a: "Often within a week, depending on complexity and how clear the source content is." }
    ],
    ctaTitle: "Need design that means something?",
    ctaSubtitle: "Send us the brief or the chaos. We can help shape both.",
    related: ["brand-development", "content-creation", "marketing-campaigns"]
  },
  {
    slug: "fractional-cmo",
    title: "Fractional CMO",
    category: "Leadership",
    tagline: "Senior marketing leadership without the full-time hire. Strategy, oversight, and direction when you need it.",
    icon: Briefcase,
    intro: [
      "Founders often hit a point where marketing stops being a part-time problem but is not yet a full-time CMO hire. The result is usually a patchwork of agencies, freelancers, and good intentions that never quite add up.",
      "We embed for a defined window to set the strategy, structure the team, and run the function with you, so the next senior hire walks into a working system instead of a mess to clean up."
    ],
    bestFor: [
      "Series A and Series B startups without a marketing leader",
      "Founders running marketing themselves on top of everything else",
      "Companies between full-time CMOs",
      "Growth-stage businesses where marketing reports up to a non-marketer"
    ],
    deliverables: [
      "Marketing strategy and operating plan",
      "Team structure and hiring plan",
      "Monthly executive reporting",
      "Performance review of channels and agencies",
      "Recruiting support for senior marketing hires",
      "Board-level marketing materials"
    ],
    process: [
      { phase: "01", title: "Audit", desc: "Weeks 1 to 2: diagnose the current state, the goals, and the gap between them." },
      { phase: "02", title: "Set Strategy", desc: "Weeks 3 to 4: priorities, plan, budget, and the operating model behind it." },
      { phase: "03", title: "Operate", desc: "Months 2 to 6: lead the function in regular working hours alongside your team." },
      { phase: "04", title: "Transition", desc: "Hand off cleanly to a permanent marketing leader, or extend the engagement." }
    ],
    outcomes: [
      "Clarity on marketing strategy and priorities",
      "A team and operating model that fits your stage",
      "Fewer wasted dollars on the wrong channels",
      "Board confidence in the marketing function"
    ],
    faqs: [
      { q: "How many hours per week?", a: "Typically 8 to 16 hours, structured around weekly leadership rhythms and monthly reporting." },
      { q: "Do you replace our agencies?", a: "No. We direct, evaluate, and hold them accountable. Replacing an agency is a separate decision." },
      { q: "What is the minimum engagement length?", a: "Three months. Anything shorter does not let us land a real strategy." },
      { q: "Can this convert to a full-time role?", a: "Sometimes, by mutual fit. Most engagements end with a clean handoff to a permanent CMO instead." }
    ],
    ctaTitle: "Need a senior marketing leader without the full-time commitment?",
    ctaSubtitle: "We will tell you in the first call whether a fractional engagement is the right move or not.",
    related: ["marketing-campaigns", "brand-development", "one-off-campaigns"]
  },
  {
    slug: "brand-development",
    title: "Brand Development",
    category: "Brand",
    tagline: "Standalone identity sprints for new ventures, sub-brands, and product lines that need a sharp visual mark fast.",
    icon: Sparkles,
    intro: [
      "Sometimes you do not need a full strategy engagement. You need a credible, distinctive identity in hand within weeks so the rest of the launch can move.",
      "Our brand development sprint compresses naming direction, visual identity, and core touchpoints into a tight, focused project, built for teams that already know what they are launching."
    ],
    bestFor: [
      "New companies pre-launch",
      "Internal product or platform launches",
      "Teams spinning up a sub-brand or productized offer",
      "Founders who already know the positioning but need the visual layer"
    ],
    deliverables: [
      "Logo system and lockups",
      "Color and typography system",
      "Brand mark applications",
      "Lightweight brand guidelines",
      "Social profile and avatar assets",
      "Business essentials (cards, signatures, slide template)"
    ],
    process: [
      { phase: "01", title: "Inputs", desc: "Brief, audience, competitive scan, and the constraints that matter." },
      { phase: "02", title: "Direction", desc: "Three distinct visual routes presented in real applications, not just on a logo." },
      { phase: "03", title: "Refinement", desc: "Selected route refined into a usable system across the core touchpoints." },
      { phase: "04", title: "Handoff", desc: "Source files, exports, and a guidelines doc the team can actually use." }
    ],
    outcomes: [
      "A confident, ownable identity",
      "A system the team can apply consistently",
      "Momentum to launch without waiting on a six-month rebrand",
      "A foundation that can scale into a fuller brand system later"
    ],
    faqs: [
      { q: "How long does a sprint take?", a: "Typically four to six weeks from kickoff to final files." },
      { q: "Do you do naming?", a: "Naming direction is included. Full naming research and trademark work is a separate engagement we can scope." },
      { q: "Can you also build the website?", a: "Yes. See Custom Web Development for engineering, or pair this with a website design engagement." },
      { q: "What if we need full strategy first?", a: "Then start with Clarity Strategy. A sprint works best when positioning is already locked." }
    ],
    ctaTitle: "Need a brand built fast and built right?",
    ctaSubtitle: "Send a brief. We will come back with a real timeline, scope, and price.",
    related: ["graphic-design", "custom-web-development", "marketing-campaigns"]
  },
  {
    slug: "video-animation",
    title: "Video Animation",
    category: "Production",
    tagline: "High-impact animated video that captivates audiences and explains complex ideas in seconds.",
    icon: Video,
    intro: [
      "A great explainer compresses what would take a meeting into 60 seconds of attention. A bad one quietly tells your audience that you are not sure what you do.",
      "We script, design, and animate brand and product videos that work as the headline asset for a website, a campaign, or a sales motion."
    ],
    bestFor: [
      "Companies with complex products that take effort to explain",
      "Teams launching a new feature or platform",
      "Founders who need a strong asset for fundraising",
      "Brands pushing into paid social and needing scroll-stopping creative"
    ],
    deliverables: [
      "Concept and script",
      "Storyboard and visual style frames",
      "Full motion design and animation",
      "Voiceover direction and production",
      "Music and sound design",
      "Multiple cuts (hero, social, paid)"
    ],
    process: [
      { phase: "01", title: "Concept", desc: "Script, message, and the visual direction that carries it." },
      { phase: "02", title: "Storyboard", desc: "Scene-by-scene approval before a single frame is animated." },
      { phase: "03", title: "Animate", desc: "Full production, including design, motion, and voiceover." },
      { phase: "04", title: "Polish", desc: "Sound design, color, and final cuts sized for every surface." }
    ],
    outcomes: [
      "A premium asset that carries weight on the homepage",
      "Sales decks that finally land the value prop",
      "Social and paid creative that stops the scroll",
      "Pitch and demo materials that match the ambition of the company"
    ],
    faqs: [
      { q: "Typical length?", a: "30 to 90 seconds for hero or explainer pieces. Shorter cuts for paid and social." },
      { q: "How long does production take?", a: "Four to eight weeks end to end, depending on complexity and revisions." },
      { q: "Do you write the script?", a: "Yes. The script is part of the engagement, written to the strategy and the audience." },
      { q: "Can you adapt an existing brand style?", a: "Yes. We work to existing systems or build a motion language from scratch." }
    ],
    ctaTitle: "Ready to turn the explanation into a video people watch?",
    ctaSubtitle: "Tell us the message. We will tell you what kind of video it should be.",
    related: ["content-creation", "marketing-campaigns", "graphic-design"]
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    category: "Production",
    tagline: "Project-based content production: hero pieces, launch assets, and one-time deliverables built to perform.",
    icon: FileText,
    intro: [
      "Some content needs to do real work: a category-defining post, a launch story, an investor narrative, a piece that has to land the first time it is published.",
      "We build single, high-leverage content pieces that earn attention and survive past the publish date, paired with the design and distribution thinking they need to actually perform."
    ],
    bestFor: [
      "Teams launching a category narrative",
      "Companies preparing for a major announcement",
      "Founders who need a sharp thought-leadership piece",
      "Marketing teams that need a campaign anchor asset"
    ],
    deliverables: [
      "Long-form articles and essays",
      "Launch and announcement narratives",
      "Executive thought-leadership",
      "Sales and pitch narratives",
      "Anchor pages and editorial features",
      "Distribution-ready cuts for social and email"
    ],
    process: [
      { phase: "01", title: "Brief", desc: "Audience, objective, and the change you want the piece to create." },
      { phase: "02", title: "Outline", desc: "Structure, key claims, and proof points before any writing happens." },
      { phase: "03", title: "Draft", desc: "Writing, editing, and tightening to the voice and the brief." },
      { phase: "04", title: "Polish", desc: "Design pass, distribution cuts, and publication support." }
    ],
    outcomes: [
      "Content that gets quoted, shared, and remembered",
      "A clearer external story for the company",
      "A piece that sales and marketing actively use",
      "Distribution-ready assets, not just a file in a doc"
    ],
    faqs: [
      { q: "Do you handle SEO?", a: "Yes, when relevant. We build for both human attention and search visibility, not one at the expense of the other." },
      { q: "Can you ghostwrite for executives?", a: "Yes. Ghostwriting is a regular part of executive thought-leadership work." },
      { q: "Will you handle distribution?", a: "Optional. We can hand off ready-to-publish assets, or coordinate distribution across owned and earned channels." },
      { q: "Do you also produce ongoing content programs?", a: "For ongoing programs, see Content + Campaign Systems in our core practice areas." }
    ],
    ctaTitle: "Have a story worth telling well?",
    ctaSubtitle: "Send the rough idea. We will help you decide if it is a piece worth publishing.",
    related: ["video-animation", "marketing-campaigns", "graphic-design"]
  },
  {
    slug: "one-off-campaigns",
    title: "One-off Campaigns",
    category: "Activation",
    tagline: "Strategic, creative campaign sprints designed to launch a product, moment, or message with impact.",
    icon: Rocket,
    intro: [
      "Not every initiative justifies a long retainer. A funding announcement, a product launch, a flagship event needs a tight, dedicated effort, not a quarterly plan.",
      "We build and run the entire campaign in a single sprint, then hand back a clean asset library when it is done."
    ],
    bestFor: [
      "Funding round announcements",
      "New product or feature launches",
      "Conference and event pushes",
      "Rebrand reveals and category repositions",
      "Seasonal or moment-based marketing"
    ],
    deliverables: [
      "Campaign concept and message",
      "Hero creative and copy",
      "Landing page or microsite",
      "Social and paid asset library",
      "PR-ready materials and talking points",
      "Internal launch playbook",
      "Post-campaign reporting and asset archive"
    ],
    process: [
      { phase: "01", title: "Brief", desc: "The moment, the audience, and the metric that defines success." },
      { phase: "02", title: "Concept", desc: "Idea, creative direction, and channel plan in one tight document." },
      { phase: "03", title: "Build", desc: "Production across every surface in parallel, on a launch-week timeline." },
      { phase: "04", title: "Launch", desc: "Live execution, monitoring, and rapid response during launch week." }
    ],
    outcomes: [
      "A coordinated launch instead of a scattered one",
      "Brand presence that matches the size of the moment",
      "Assets the team keeps and reuses long after launch",
      "Clear performance read on what actually moved attention"
    ],
    faqs: [
      { q: "Typical timeline?", a: "Three to eight weeks from kickoff to launch, depending on the surfaces involved." },
      { q: "Do you handle PR?", a: "We coordinate with PR partners and produce the assets they need to do their job well." },
      { q: "Can you support during the launch week itself?", a: "Yes. Launch-week support is built into the engagement." },
      { q: "Do you measure results?", a: "Yes. Every campaign closes with a written debrief and asset archive." }
    ],
    ctaTitle: "Have a moment that deserves a real campaign?",
    ctaSubtitle: "Tell us the date and the goal. We will tell you what is realistic.",
    related: ["marketing-campaigns", "content-creation", "graphic-design"]
  },
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    category: "Build",
    tagline: "Build and engineering for sites and landing pages, taking approved designs from concept to live in production.",
    icon: Code2,
    intro: [
      "Beautiful design lives or dies in implementation. A site that loads slowly, breaks on mobile, or makes the marketing team file a ticket every time they need a copy change quietly cancels out the design work that came before it.",
      "We engineer fast, accessible, conversion-focused websites and landing pages on modern stacks, so the experience users actually get matches the work that went into the design."
    ],
    bestFor: [
      "Companies replacing slow or template sites",
      "Teams launching a new marketing site",
      "Brands shipping campaign landing pages",
      "Businesses that need a CMS the marketing team can actually use"
    ],
    deliverables: [
      "Front-end engineering and component library",
      "CMS setup and content modeling",
      "Integrations (analytics, CRM, marketing tools)",
      "Performance and SEO optimization",
      "Accessibility review and remediation",
      "Deployment and hosting setup",
      "Training and documentation"
    ],
    process: [
      { phase: "01", title: "Plan", desc: "Scope, stack, integrations, and the success criteria for launch." },
      { phase: "02", title: "Build", desc: "Component library and pages built against approved designs." },
      { phase: "03", title: "Integrate", desc: "CMS, analytics, marketing tools, and any required back-end services." },
      { phase: "04", title: "Launch", desc: "QA, performance pass, deploy, and team handoff." }
    ],
    outcomes: [
      "A site that loads fast and converts",
      "A CMS that does not slow the marketing team down",
      "A codebase that is easy to extend, not rebuild",
      "Confidence that the live site matches the approved design"
    ],
    faqs: [
      { q: "What stacks do you build on?", a: "React, Next.js, and Astro for custom builds. Webflow or Framer when those tools are the right call." },
      { q: "Do you also design?", a: "We build off approved designs. Design itself is available via Brand Development or Graphic Design engagements." },
      { q: "Do you maintain the site after launch?", a: "Optional retainer. Most clients move to a lightweight monthly support arrangement after launch." },
      { q: "Can you migrate from an existing CMS?", a: "Yes. CMS migrations and content modeling are a regular part of these engagements." }
    ],
    ctaTitle: "Ready to build a site that actually performs?",
    ctaSubtitle: "Send the designs or the brief. We will scope the build honestly.",
    related: ["brand-development", "graphic-design", "marketing-campaigns"]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
