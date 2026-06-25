"use client";
import Link from "next/link";
import { ArrowRight, Compass, ScrollText, Layers, Globe2, Repeat } from "lucide-react";
import { SERVICES } from "@/app/services/data";
import { PillButton } from "./PillButton";
import { cn } from "@/lib/utils";

type CorePractice = {
  id: string;
  title: string;
  desc: string;
  icon: typeof Compass;
};

const CORE_PRACTICES: CorePractice[] = [
  {
    id: "clarity-strategy",
    title: "Clarity Strategy",
    desc: "Audit positioning, sharpen the core message.",
    icon: Compass,
  },
  {
    id: "narrative-development",
    title: "Narrative Development",
    desc: "Pillars, voice, and language the team can ship.",
    icon: ScrollText,
  },
  {
    id: "brand-visual-systems",
    title: "Brand + Visual Systems",
    desc: "Identity systems built to scale beyond a logo.",
    icon: Layers,
  },
  {
    id: "website-experience-design",
    title: "Website + Experience Design",
    desc: "High-performing marketing sites that explain the value.",
    icon: Globe2,
  },
  {
    id: "content-campaign-systems",
    title: "Content + Campaign Systems",
    desc: "Repeatable creative pipelines for ongoing work.",
    icon: Repeat,
  },
];

interface ServicesMegaMenuProps {
  open: boolean;
  id?: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ServicesMegaMenu({ open, id, onClose, onMouseEnter, onMouseLeave }: ServicesMegaMenuProps) {
  // `inert` (React 19 supports it as a boolean prop) removes the subtree from
  // focus order and the accessibility tree when closed, so descendants cannot
  // be tabbed into while the panel is invisible.
  return (
    <>
      {/* Backdrop fade behind the panel */}
      <div
        aria-hidden="true"
        inert={!open}
        className={cn(
          "fixed inset-x-0 top-[88px] bottom-0 z-30 bg-[#14142B]/20 backdrop-blur-[2px] transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onMouseEnter={onClose}
      />

      {/* Panel — disclosure pattern (region with a label), not an ARIA menu */}
      <div
        id={id}
        role="region"
        aria-label="Services menu"
        aria-hidden={!open}
        inert={!open}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 top-[84px] z-40 w-[min(calc(100vw-32px),1040px)] origin-top transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-[28px] shadow-[0_30px_80px_rgba(20,20,43,0.18)] border border-[#14142B]/8 overflow-hidden">
          {/* Body grid */}
          <div className="grid grid-cols-12 gap-0">
            {/* Core practices */}
            <div className="col-span-12 lg:col-span-5 p-8 lg:p-10 lg:border-r border-[#14142B]/8 bg-white">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF3951]">
                  Core Practices
                </span>
                <span className="text-[11px] font-medium text-[#6E7191]">5 offerings</span>
              </div>

              <ul className="flex flex-col gap-1">
                {CORE_PRACTICES.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.id}>
                      <a
                        href={`/services#${p.id}`}
                        onClick={onClose}
                        className="group flex items-start gap-3 rounded-2xl p-3 -mx-3 hover:bg-[#FFF4F1] transition-colors"
                      >
                        <span aria-hidden className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FFF4F1] group-hover:bg-white flex items-center justify-center text-[#FF3951] transition-colors">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[15px] font-bold text-[#14142B] group-hover:text-[#FF3951] transition-colors leading-tight">
                            {p.title}
                          </span>
                          <span className="block text-[13px] text-[#6E7191] leading-snug mt-0.5">
                            {p.desc}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Also available */}
            <div className="col-span-12 lg:col-span-7 p-8 lg:p-10 bg-[#FAFAFC]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF]">
                  Also Available
                </span>
                <span className="text-[11px] font-medium text-[#6E7191]">{SERVICES.length} services</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        className="group flex items-start gap-3 rounded-2xl p-3 -mx-3 hover:bg-white hover:shadow-[0_2px_14px_rgba(20,20,43,0.06)] transition-all"
                      >
                        <span aria-hidden className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center text-[#3B6BFF] group-hover:bg-[#3B6BFF] group-hover:text-white transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[14px] font-bold text-[#14142B] group-hover:text-[#3B6BFF] transition-colors leading-tight">
                            {s.title}
                          </span>
                          <span className="block text-[12px] text-[#6E7191] leading-snug mt-0.5 line-clamp-2">
                            {s.tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 lg:px-10 py-5 bg-[#14142B] text-white">
            <div className="flex flex-col">
              <span className="text-[15px] font-bold leading-tight">Not sure where to start?</span>
              <span className="text-[13px] text-white/70 leading-snug mt-0.5">
                Tell us the goal. We will tell you which engagement actually fits.
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/services"
                onClick={onClose}
                className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-bold text-white/80 hover:text-white transition-colors"
              >
                View all services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <PillButton href="/contact" onClick={onClose}>
                Let&apos;s Talk
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CORE_PRACTICES };
