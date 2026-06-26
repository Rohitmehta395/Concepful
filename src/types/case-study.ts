export interface HeroData {
  tags: string[];
  title: React.ReactNode;
  metadata: {
    label: string;
    value: string;
  }[];
  highlightMetric: {
    value: string;
    label: string;
  };
  image: {
    src: string;
    alt: string;
    label?: string;
  };
}

export interface BriefData {
  sectionLabel: string;
  paragraphs: string[];
  keyChallenge: {
    label: string;
    quote: string;
  };
  deliverables: string[];
  projectDetails: {
    label: string;
    value: string;
    isHighlight?: boolean;
  }[];
}

export interface StatsData {
  items: {
    value: string;
    label: string;
  }[];
}

export interface ChallengeData {
  sectionLabel: string;
  title: React.ReactNode;
  introParagraphs: string[];
  challenges: {
    number: string;
    title: string;
    description: string;
  }[];
  cards: {
    quote: {
      text: string;
      authorRole: string;
      authorDescription: string;
    };
    metrics: {
      value: string;
      unit?: string;
      description: string;
      isHighlight?: boolean;
    }[];
    complexity: number;
  };
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface ProcessData {
  sectionLabel: string;
  sectionTitle?: string;
  marqueeItems1: ProcessItem[];
  marqueeItems2: ProcessItem[];
}

export interface StrategyData {
  sectionLabel: string;
  phases: {
    number: string;
    title: string;
    description: string;
    outputs: string[];
  }[];
}

export interface BrandSystemData {
  sectionLabel: string;
  title: React.ReactNode;
  description: string;
  primaryIdentity: {
    label: string;
    wordmark: string;
    tagline: string;
    colors: { hex: string; class: string }[];
  };
  typeSystem: {
    label: string;
    fontName: string;
    weights: string;
  };
  palette: {
    name: string;
    hex: string;
    class: string;
  }[];
  designTokens: {
    items: { label: string; value: string }[];
    tags: string[];
  };
  deliverables: string[];
}

export interface ResultsData {
  sectionLabel: string;
  title: React.ReactNode;
  stats: {
    value: string;
    label: string;
    description: string;
    isHighlight?: boolean;
  }[];
  quote: {
    text: string;
    authorRole: string;
    authorName: string;
    authorDescription: string;
    clientLabel: string;
  };
  beforeAfter: {
    before: string;
    after: string;
  }[];
}

export interface CTAData {
  sectionLabel: string;
  title: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  secondaryLinkText: string;
  secondaryLinkUrl: string;
  includesLabel: string;
  includes: string[];
  footerText: string;
}

export interface CaseStudyData {
  slug: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
  hero: HeroData;
  brief: BriefData;
  statsBar: StatsData;
  challenge: ChallengeData;
  process: ProcessData;
  strategy: StrategyData;
  brandSystem: BrandSystemData;
  results: ResultsData;
  cta: CTAData;
}

export const SERVICE_CATEGORIES = [
  "Marketing",
  "UX",
  "Branding",
  "Experimental",
  "Robotics",
  "Automation",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export interface CaseStudyListing {
  slug: string;
  client?: string;
  title: string;
  categories: ServiceCategory[];
  description: string;
  href: string;
  heroImage: string;
  backgroundImage?: string;
  metrics?: { label: string; value: string }[];
}
