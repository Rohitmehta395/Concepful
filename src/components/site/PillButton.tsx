"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface PillButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  showArrow?: boolean;
}

export function PillButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  showArrow = true,
}: PillButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[40px] px-7 py-3.5 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-[#FF3951] text-white shadow-[0_8px_22px_rgba(255,57,81,0.28)] hover:shadow-[0_12px_28px_rgba(255,57,81,0.35)]",
    secondary: "bg-white text-[#FF3951] shadow-[0_8px_20px_rgba(20,20,43,0.06)] hover:shadow-[0_12px_24px_rgba(20,20,43,0.1)] border border-transparent",
  };

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-5 w-5" />}
    </>
  );

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={cn(baseStyles, variants[variant], className)} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
          {content}
        </a>
      );
    }
    // Internal link
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
}
