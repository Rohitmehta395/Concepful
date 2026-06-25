"use client";

import { motion } from "framer-motion";
import { HexDecor } from "@/components/site/HexDecor";
import { PillButton } from "@/components/site/PillButton";
import { SectionWrapper } from "./layouts/SectionWrapper";
import { ContentContainer } from "./layouts/ContentContainer";

export function CaseStudyCTA() {
  return (
    <SectionWrapper className="py-32 bg-[#14142B] text-white text-center">
      <HexDecor variant="nested" color="white" className="top-1/2 -translate-y-1/2 -left-16 w-[260px] h-[260px]" rotate={-12} opacity={0.1} />
      <HexDecor variant="dashed" color="coral" className="top-12 right-16 w-[180px] h-[180px]" rotate={14} opacity={0.5} />
      <ContentContainer size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-10">
            Ready to clarify your message?
          </h2>
          <PillButton href="/contact">Start a Conversation</PillButton>
        </motion.div>
      </ContentContainer>
    </SectionWrapper>
  );
}
