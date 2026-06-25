import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useHeaderScroll(headerRef: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!headerRef.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Use y instead of yPercent for better performance, or yPercent if exact height is unknown.
    // yPercent is generally safer for headers.
    const showHeader = gsap.fromTo(
      headerRef.current,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.4, ease: "power2.out", paused: true }
    ).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrollPos = self.scroll();
        // Hide only after the user has scrolled down a reasonable distance
        if (self.direction === 1 && scrollPos > 200) {
          showHeader.reverse();
        } else if (self.direction === -1) {
          // Reappear immediately when scrolling upward
          showHeader.play();
        } else if (scrollPos <= 200) {
           // Ensure it shows if we are at the very top
           showHeader.play();
        }
      }
    });
  }, { scope: headerRef });
}
