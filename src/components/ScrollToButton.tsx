"use client";

import React from "react";
import { useLenis } from "@/hooks/useLenis";
import { cn } from "@/lib/utils";

interface ScrollToButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  target: string | HTMLElement;
  label: string;
  className?: string;
}

export function ScrollToButton({ target, label, className, children, ...props }: ScrollToButtonProps) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e);
    if (!e.defaultPrevented) {
      lenis?.scrollTo(target, {
        offset: -80,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(className)}
      onClick={handleClick}
      {...props}
    >
      {children || label}
    </button>
  );
}
