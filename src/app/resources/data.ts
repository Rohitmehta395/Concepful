import { PlayCircle, BookOpen, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Resource = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bodyParagraph: string;
  icon: LucideIcon;
};

export const RESOURCES: Resource[] = [
  {
    slug: "videos",
    title: "Videos",
    tagline: "Talks, walkthroughs, and brand films",
    description:
      "Short videos on positioning, narrative, and the craft of clarity-first creative.",
    bodyParagraph:
      "We are putting together a small library of talks, walkthroughs, and brand films that show how clarity-first creative actually gets made. Check back soon, or get in touch if you want a private walkthrough of the process.",
    icon: PlayCircle,
  },
  {
    slug: "blog",
    title: "Blog",
    tagline: "Notes on clarity, brand, and craft",
    description:
      "Field notes on clarity, brand strategy, and what makes creative work actually land.",
    bodyParagraph:
      "Field notes from running positioning audits, narrative work, and brand systems are on the way. Until the first posts go live, the fastest way to learn how we think is to start a conversation.",
    icon: BookOpen,
  },
  {
    slug: "latest-projects",
    title: "Latest Projects",
    tagline: "What we have been shipping",
    description:
      "Recent client work, behind-the-scenes process, and what we are learning as we ship.",
    bodyParagraph:
      "We are gathering recent client work and behind-the-scenes notes from each engagement. While the gallery comes together, the case studies page has the deepest look at how we work.",
    icon: Sparkles,
  },
];
