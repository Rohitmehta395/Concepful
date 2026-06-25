/**
 * Motion Tokens for Case Studies
 * Provides consistent motion values across all case study components.
 * These will be used heavily in Phase 2.
 */

export const motionTokens = {
  duration: {
    fast: 0.3,
    base: 0.6,
    slow: 0.8,
  },
  ease: {
    default: "easeOut",
    spring: [0.22, 1, 0.36, 1],
    snappy: [0.4, 0, 0.2, 1],
  },
  delay: {
    staggerBase: 0.1,
  },
};

export const defaultTransition = {
  duration: motionTokens.duration.base,
  ease: motionTokens.ease.spring,
};

export const standardRevealConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: defaultTransition,
};
