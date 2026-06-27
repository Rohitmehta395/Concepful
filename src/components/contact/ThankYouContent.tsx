"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  CLARITY_SPRINT_INCLUDED,
  STRATEGIC_BUILD_INCLUDED,
  RETAINER_INCLUDED,
} from "./ContactConstants";

const Particles = () => {
  return (
    <div className="absolute top-14 left-1/2 -translate-x-1/2 pointer-events-none z-0">
      {[...Array(16)].map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const fixedDistance = 80 + (i % 3) * 40; 
        const x = Math.cos(angle) * fixedDistance;
        const y = Math.sin(angle) * fixedDistance;
        const colors = ['bg-[#FF3951]', 'bg-[#3B82F6]', 'bg-[#FFC107]'];
        const color = colors[i % colors.length];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              x: x,
              y: y
            }}
            transition={{ 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 + (i % 3) * 0.1
            }}
            className={`absolute w-2.5 h-2.5 rounded-full ${color}`}
          />
        );
      })}
    </div>
  );
};

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const budget = parseInt(searchParams.get("budget") || "15000", 10);
  const isMonthlyRetainer = searchParams.get("retainer") === "true";

  const showClaritySprint = budget >= 5000 && budget <= 12000 && !isMonthlyRetainer;
  const showStrategicBuild = budget >= 13000 && budget <= 75000 && !isMonthlyRetainer;
  const showRetainer = isMonthlyRetainer || budget > 75000;

  let includedItems: string[] = [];
  let planName = "";

  if (showRetainer) {
    includedItems = RETAINER_INCLUDED;
    planName = "Monthly Retainer Partnership";
  } else if (showStrategicBuild) {
    includedItems = STRATEGIC_BUILD_INCLUDED;
    planName = "Strategic Build";
  } else if (showClaritySprint) {
    includedItems = CLARITY_SPRINT_INCLUDED;
    planName = "Clarity Sprint";
  }

  return (
    <section className="relative overflow-hidden min-h-screen pt-32 pb-32 flex items-center justify-center">
      <HexDecor
        variant="nested"
        color="coral"
        className="top-16 -left-20 w-[400px] h-[400px]"
        rotate={12}
        opacity={0.3}
      />
      <HexDecor
        variant="dashed"
        color="blue"
        className="bottom-16 -right-20 w-[300px] h-[300px]"
        rotate={-14}
        opacity={0.3}
      />
      
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_24px_60px_rgba(20,20,43,0.08)] border border-[#14142B]/5 text-center relative overflow-hidden"
        >
          {/* Subtle gradient accent inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFF4F1] to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#F0F4FF] to-transparent rounded-tr-full opacity-60 pointer-events-none"></div>

          <div className="relative">
            <Particles />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 bg-[#FFF4F1] rounded-full flex items-center justify-center mx-auto mb-8 text-[#FF3951] shadow-lg shadow-[#FF3951]/20 relative z-10"
            >
              <Check size={40} strokeWidth={3} />
            </motion.div>
          </div>

          <SectionHeading
            as="h1"
            title={`Thank you, ${name.split(" ")[0]}.`}
            description="We've received your inquiry and will be in touch shortly to discuss next steps."
          />

          {includedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 text-left bg-[#F9F9FB] rounded-3xl p-8 border border-[#14142B]/5 relative z-10"
            >
              <h3 className="text-[#14142B] font-bold text-xl mb-2">Based on your goals</h3>
              <p className="text-[#6E7191] mb-6">
                It looks like our <span className="font-semibold text-[#FF3951]">{planName}</span> might be a great fit. Here's a reminder of what that typically includes:
              </p>
              
              <ul className="space-y-4">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#FF3951] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#14142B] text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex justify-center relative z-10"
          >
            <PillButton href="/" className="h-14 px-8 text-lg shadow-[0_8px_20px_rgba(255,57,81,0.25)] hover:shadow-[0_12px_25px_rgba(255,57,81,0.35)] hover:-translate-y-1 transition-all duration-300">
              Return to Home
            </PillButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

