"use client";
import { ProcessData } from "@/types/case-study";

export function ProcessSection({ data }: { data: ProcessData }) {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 28s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 32s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-12">
          {/* Label row */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E7191] flex items-center gap-3">
              <span className="w-8 h-px bg-[#14142B]/20 inline-block" />
              {data.sectionLabel}
            </span>
            {data.sectionTitle && (
              <span className="text-[13px] text-[#6E7191] font-medium hidden md:block">
                {data.sectionTitle}
              </span>
            )}
          </div>
        </div>

        {/* MARQUEE ROWS — full bleed, overflow-hidden */}
        <div className="overflow-hidden flex flex-col gap-4">

          {/* ROW 1 — scrolls left */}
          <div className="overflow-hidden">
            <div className="marquee-left flex gap-4 w-max">
              {/* Render twice for infinite marquee effect */}
              {[...data.marqueeItems1, ...data.marqueeItems1].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-[#14142B]/8 bg-white p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191]">{item.number}</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF3951] mt-1" />
                  </div>
                  <h3 className="text-base font-bold text-[#14142B]">{item.title}</h3>
                  <p className="text-[#6E7191] text-sm leading-relaxed">{item.description}</p>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FF3951] border border-[#FF3951]/15 rounded-full px-3 py-1 self-start">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 — scrolls right, offset cards */}
          <div className="overflow-hidden">
            <div className="marquee-right flex gap-4 w-max">
              {[...data.marqueeItems2, ...data.marqueeItems2].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-[#14142B]/8 bg-white p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E7191]">{item.number}</span>
                    <span className="w-2 h-2 rounded-full bg-[#3B6BFF] mt-1" />
                  </div>
                  <h3 className="text-base font-bold text-[#14142B]">{item.title}</h3>
                  <p className="text-[#6E7191] text-sm leading-relaxed">{item.description}</p>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#3B6BFF] border border-[#3B6BFF]/15 rounded-full px-3 py-1 self-start">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>
    </>
  );
}
