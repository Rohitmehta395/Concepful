"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  heading: string;
  subheading?: string;
  cards: { id: string; title: string; body: string }[];
}

export function AnimatedSection({ heading, subheading, cards }: AnimatedSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useScrollAnimation(
    containerRef,
    ({ gsap, ScrollTrigger }) => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Heading reveal
        gsap.from(".heading-word", {
          y: 60,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        });

        // 2. Subheading fade
        if (subheading) {
          gsap.from(".subheading", {
            y: 20,
            opacity: 0,
            delay: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          });
        }

        // 3. Card stagger
        gsap.from(".animated-card", {
          opacity: 0,
          scale: 0.92,
          y: 40,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });

        // 4. Scrub progress bar
        gsap.fromTo(
          ".progress-bar",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".heading-word, .subheading, .animated-card", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".progress-bar", { scaleX: 1 });
      });
    },
    [heading, subheading, cards]
  );

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight overflow-hidden flex flex-wrap gap-x-3 gap-y-2">
            {heading.split(" ").map((word, i) => (
              <span key={i} className="heading-word inline-block">
                {word}
              </span>
            ))}
          </h2>
          {subheading && (
            <p className="subheading mt-6 text-xl text-muted-foreground max-w-2xl">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={cn(
                "animated-card",
                "p-6 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col"
              )}
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground flex-grow">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress Bar Container anchored at the bottom of the section */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-muted/50">
        <div className="progress-bar h-full w-full bg-primary origin-left scale-x-0" />
      </div>
    </section>
  );
}
