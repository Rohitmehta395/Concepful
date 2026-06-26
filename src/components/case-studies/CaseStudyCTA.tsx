"use client";

import Link from "next/link";
import { SectionWrapper } from "./layouts/SectionWrapper";

export function CaseStudyCTA() {
  return (
    <SectionWrapper
      overflowHidden={true}
      className="bg-[#14142B] text-white py-0 border-t border-[#14142B]/10"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* The animated flex container */}
      <div className="flex w-fit animate-marquee items-center py-8 md:py-12 cursor-pointer">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0 px-4 md:px-6">
            <h2 className="text-4xl md:text-6xl lg:text-[70px] font-bold tracking-tighter uppercase leading-none m-0 whitespace-nowrap text-white">
              Ready to push your platform?
            </h2>
            <div className="ml-6 md:ml-10">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 md:px-4 md:py-3 bg-[#FF3951] text-white rounded-full font-bold uppercase tracking-widest hover:scale-102 hover:bg-[#FF3951]/95 transition-all whitespace-nowrap text-base md:text-md shrink-0"
              >
                Get in touch today
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
