"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingChipProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function FloatingChip({ children, className, delay = 0, yOffset = 15 }: FloatingChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn("absolute z-10", className)}
    >
      <motion.div
        animate={{ y: [0, -yOffset, 0] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className="bg-white px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(20,20,43,0.08)] border border-[#14142B]/5 text-sm font-semibold text-[#14142B] flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#3B6BFF]"></span>
        {children}
      </motion.div>
    </motion.div>
  );
}
