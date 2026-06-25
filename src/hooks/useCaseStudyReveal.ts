import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useCaseStudyReveal(refs: {
  wrapper: RefObject<HTMLElement | null>;
  card: RefObject<HTMLElement | null>;
  categories: RefObject<HTMLElement | null>;
  title: RefObject<HTMLElement | null>;
  description: RefObject<HTMLElement | null>;
  cta: RefObject<HTMLElement | null>;
  divider: RefObject<HTMLElement | null>;
  metrics: RefObject<HTMLElement | null>;
}) {
  useGSAP(
    () => {
      if (!refs.card.current || !refs.wrapper.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        gsap.set(
          [
            refs.categories.current,
            refs.title.current,
            refs.description.current,
            refs.cta.current,
            refs.divider.current,
            refs.metrics.current,
          ].filter(Boolean),
          { opacity: 1, scale: 1, y: 0, x: 0, scaleX: 1 },
        );
        if (refs.metrics.current) {
          gsap.set(refs.metrics.current.children, { opacity: 1, y: 0 });
        }
        return;
      }

      // 1. FAST TEXT REVEAL TIMELINE
      // The sequence completes very quickly when the card becomes active.
      // It is played once, not scrubbed.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refs.card.current,
          start: "top 70%", // Play when card is significantly visible
          once: true,
        },
      });

      const textElements = [
        refs.categories.current,
        refs.title.current,
        refs.description.current,
        refs.cta.current,
      ].filter(Boolean);

      if (textElements.length > 0) {
        tl.fromTo(
          textElements,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
            stagger: 0.04,
          },
        );
      }

      if (refs.divider.current) {
        tl.fromTo(
          refs.divider.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.25,
            ease: "power2.out",
            transformOrigin: "left",
          },
          "-=0.1",
        );
      }

      if (refs.metrics.current) {
        const metricItems = refs.metrics.current.children;
        if (metricItems && metricItems.length > 0) {
          tl.fromTo(
            metricItems,
            { opacity: 0, y: 5 },
            {
              opacity: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
              stagger: 0.03,
            },
            "-=0.15",
          );
        }
      }

    },
    { scope: refs.wrapper },
  );
}
