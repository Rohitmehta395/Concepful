"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";

export default function NotFound() {
  return (
    <>
      <SeoHead 
        title="404 - Page Not Found | Concepful"
        description="The page you are looking for does not exist."
        noindex
      />
      <div className="relative min-h-[80vh] w-full flex items-center justify-center bg-white px-6 overflow-hidden">
        <HexDecor variant="nested" color="coral" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" rotate={12} opacity={0.08} />
        <HexDecor variant="dashed" color="blue" className="top-12 left-12 w-[180px] h-[180px]" rotate={-15} opacity={0.35} />
        <HexDecor variant="outline" color="coral" className="bottom-12 right-12 w-[220px] h-[220px]" rotate={18} opacity={0.3} />
        <HexDecor variant="cluster" color="blue" className="bottom-20 left-20 w-[140px] h-[140px]" rotate={6} opacity={0.3} />
        <div className="relative text-center max-w-lg z-10">
          <h1 className="text-[120px] md:text-[180px] font-bold text-[#FF3951] leading-none tracking-tight mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#14142B] mb-4">
            We couldn't find that page.
          </h2>
          <p className="text-lg text-[#6E7191] mb-10">
            It looks like the link is broken or the page has been removed. Let's get you back to something that makes sense.
          </p>
          <PillButton href="/">Return Home</PillButton>
        </div>
      </div>
    </>
  );
}
