import { RefObject, DependencyList } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useStackCards(containerRef: RefObject<HTMLElement | null>, dependencies: DependencyList = []) {
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wrappers = gsap.utils.toArray(
        ".case-study-wrapper",
      ) as HTMLElement[];
      if (wrappers.length === 0) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        // Just reveal everything instantly
        gsap.set(".case-study-content-reveal, .case-study-metrics > div", {
          opacity: 1,
          y: 0,
        });
        gsap.set(".case-study-divider", { scaleX: 1 });
        return;
      }

      let mm = gsap.matchMedia();

      // --- DESKTOP (Sticky Stack enabled) ---
      mm.add("(min-width: 1024px)", () => {
        wrappers.forEach((wrapper, i) => {
          const imageContainer = wrapper.querySelector(
            ".case-study-image-container",
          );
          const contentReveals = wrapper.querySelectorAll(
            ".case-study-content-reveal",
          );
          const divider = wrapper.querySelector(".case-study-divider");
          const metrics = wrapper.querySelectorAll(".case-study-metrics > div");

          // 1. Scrubbed Parallax for Image
          if (imageContainer) {
            gsap.fromTo(
              imageContainer,
              { scale: 1.05, y: 20 },
              {
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top bottom",
                  end: "top top+=96px",
                  scrub: true,
                  invalidateOnRefresh: true,
                },
              },
            );
          }

          // 2. Play-once content reveal (Triggered naturally)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top 70%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          if (contentReveals.length > 0) {
            tl.fromTo(
              contentReveals,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.out",
                stagger: 0.03,
              },
            );
          }
          if (divider) {
            tl.fromTo(
              divider,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 0.3,
                ease: "power3.out",
                transformOrigin: "left",
              },
              "-=0.2",
            );
          }
          if (metrics.length > 0) {
            tl.fromTo(
              metrics,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power3.out",
                stagger: 0.03,
              },
              "-=0.2",
            );
          }

          // 3. Scrubbed Stacking Animation (when next card pushes up)
          if (i < wrappers.length - 1) {
            const nextWrapper = wrappers[i + 1];

            gsap.to(wrapper, {
              scale: 0.94,
              y: -50,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top+=96px", // Start exactly when this card sticks
                endTrigger: nextWrapper,
                end: "top top+=96px", // Finish exactly when next card hits its sticky position
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      });

      // --- MOBILE / TABLET (No Sticky Stack, just reveals) ---
      mm.add("(max-width: 1023px)", () => {
        wrappers.forEach((wrapper) => {
          const imageContainer = wrapper.querySelector(
            ".case-study-image-container",
          );
          const contentReveals = wrapper.querySelectorAll(
            ".case-study-content-reveal",
          );
          const divider = wrapper.querySelector(".case-study-divider");
          const metrics = wrapper.querySelectorAll(".case-study-metrics > div");

          // Ensure wrapper height doesn't force huge gaps on mobile
          // Since the wrapper uses responsive classes (h-[100vh] lg:h-[150vh]),
          // mobile already has less height, but we can also just let them stack naturally.

          // Play-once content reveal
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top 80%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          if (imageContainer) {
            tl.fromTo(
              imageContainer,
              { scale: 1.05, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
            );
          }

          if (contentReveals.length > 0) {
            tl.fromTo(
              contentReveals,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.out",
                stagger: 0.03,
              },
              "-=0.3",
            );
          }
          if (divider) {
            tl.fromTo(
              divider,
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 0.3,
                ease: "power3.out",
                transformOrigin: "left",
              },
              "-=0.2",
            );
          }
          if (metrics.length > 0) {
            tl.fromTo(
              metrics,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power3.out",
                stagger: 0.03,
              },
              "-=0.2",
            );
          }
        });
      });

      // Add ResizeObserver to force ScrollTrigger recalculation if the DOM layout shifts
      // (e.g. from late image loading or fonts snapping in).
      let resizeTimeout: NodeJS.Timeout;
      const ro = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      });
      ro.observe(document.body);

      return () => {
        clearTimeout(resizeTimeout);
        ro.disconnect();
        mm.revert(); // Clean up matchMedia
      };
    },
    { scope: containerRef, dependencies: dependencies as unknown[] }
  );
}
