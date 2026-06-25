import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function useHeroReveal(containerRef: RefObject<HTMLElement | null>, elements: RefObject<HTMLElement | null>[]) {
  useGSAP(() => {
    if (!containerRef.current || elements.length === 0) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = elements.map(e => e.current).filter(Boolean);
    
    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      targets,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 }
    );
  }, { scope: containerRef });
}
