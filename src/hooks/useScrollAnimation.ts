import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  setup: (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  deps?: React.DependencyList
): void {
  useGSAP(
    () => {
      setup({ gsap, ScrollTrigger });
    },
    {
      scope: containerRef,
      dependencies: deps as unknown[],
    }
  );
}
