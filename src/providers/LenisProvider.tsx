"use client";

import React, { useEffect, createContext, useRef, Suspense } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useSearchParams } from "next/navigation";

export const LenisContext = createContext<Lenis | null>(null);

function LenisRouterTracker({ lenis }: { lenis: Lenis | null }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isPopStateRef = useRef(false);
  const isNavigatingRef = useRef(false);

  // Track popstate (browser back/forward buttons)
  useEffect(() => {
    const onPopState = () => {
      isPopStateRef.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Lock saving during navigation to prevent overwriting the destination's scroll position with the old page's scroll
  useEffect(() => {
    isNavigatingRef.current = true;
    const timer = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 150); // Give Lenis and Next.js enough time to settle
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Continuously save current scroll position to sessionStorage
  useEffect(() => {
    if (!lenis) return;
    const url = pathname + (searchParams?.toString() || "");
    const onScroll = () => {
      // CRITICAL: Do not save while a route transition is happening!
      if (isNavigatingRef.current) return;
      sessionStorage.setItem(`scroll-${url}`, lenis.scroll.toString());
    };
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [lenis, pathname, searchParams]);

  // Handle Scroll Restoration & Animation Refresh
  useEffect(() => {
    if (!lenis) return;
    const url = pathname + (searchParams?.toString() || "");

    const timer = setTimeout(() => {
      if (isPopStateRef.current) {
        // Back navigation: restore saved scroll position
        const savedScroll = sessionStorage.getItem(`scroll-${url}`);
        if (savedScroll !== null) {
          lenis.scrollTo(Number(savedScroll), { immediate: true });
        }
        isPopStateRef.current = false; // reset
      } else {
        // Forward navigation: start at the top
        lenis.scrollTo(0, { immediate: true });
      }

      // CRITICAL: Refresh GSAP ScrollTrigger after the page renders and scroll is restored
      // This prevents the text animations from misfiring or disappearing.
      ScrollTrigger.refresh();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, lenis]);

  return null;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);

  // Initialize Lenis
  useEffect(() => {
    const lenisInstance = new Lenis({
      autoRaf: false,
    });

    setLenis(lenisInstance);
    lenisInstance.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
      <Suspense fallback={null}>
        <LenisRouterTracker lenis={lenis} />
      </Suspense>
    </LenisContext.Provider>
  );
}
