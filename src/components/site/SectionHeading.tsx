"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeading({ eyebrow, title, description, className, align = "left", as = "h2" }: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <div className={cn("flex flex-col gap-6", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span className="text-[#FF3951] text-[13px] font-bold tracking-widest uppercase flex items-center gap-2">
          <span className="w-6 h-[2px] bg-[#FF3951] rounded-full inline-block"></span>
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#14142B] leading-[1.05]">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-[#6E7191] text-lg md:text-xl max-w-[580px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
