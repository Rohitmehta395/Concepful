"use client";
import Link from "next/link";
import { RESOURCES } from "@/app/resources/data";
import { cn } from "@/lib/utils";

interface ResourcesDropdownProps {
  open: boolean;
  id?: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ResourcesDropdown({ open, id, onClose, onMouseEnter, onMouseLeave }: ResourcesDropdownProps) {
  return (
    <div
      id={id}
      role="region"
      aria-label="Resources menu"
      aria-hidden={!open}
      inert={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] z-40 transition-all duration-200",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(20,20,43,0.18)] border border-[#14142B]/8 overflow-hidden p-2">
        <ul className="flex flex-col">
          {RESOURCES.map((r) => {
            const Icon = r.icon;
            return (
              <li key={r.slug}>
                <Link
                  href={`/resources/${r.slug}`}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-xl p-3 hover:bg-[#FFF4F1] transition-colors"
                >
                  <span aria-hidden className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#FFF4F1] group-hover:bg-white flex items-center justify-center text-[#FF3951] transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[14px] font-bold text-[#14142B] group-hover:text-[#FF3951] transition-colors leading-tight">
                      {r.title}
                    </span>
                    <span className="block text-[12px] text-[#6E7191] leading-snug mt-0.5">
                      {r.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
