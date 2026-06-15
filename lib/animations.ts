import type { Variants, Transition } from "framer-motion";

// ─── Base Transitions ─────────────────────────────────────────────────────────

export const smoothTransition: Transition = {
  duration: 0.75,
  ease: [0.4, 0, 0.2, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 28,
};

// ─── Fade Variants ────────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
  },
};

// ─── Scale Variants ───────────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

// ─── Container / Stagger Variants ────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
};

// ─── Nav Variants ─────────────────────────────────────────────────────────────

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
};

// ─── Card Hover ───────────────────────────────────────────────────────────────

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const cardHoverSubtle = {
  rest: { y: 0, transition: { duration: 0.25 } },
  hover: { y: -4, transition: { duration: 0.25 } },
};

// ─── Loading Screen ───────────────────────────────────────────────────────────

export const loadingScreenVariants: Variants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const loadingLogoVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 240, damping: 22, delay: 0.1 },
  },
};

export const loadingBarVariants: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 },
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroNameVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroRoleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroDescVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroBtnsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.85, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroStatsVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 1.05,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.08,
    },
  },
};

export const heroStatItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

// ─── Chatbot ──────────────────────────────────────────────────────────────────

export const chatbotPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 28 },
  },
};

export const chatMessageVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── Skill bar ────────────────────────────────────────────────────────────────

export const skillBarVariants: Variants = {
  hidden: { width: "0%" },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 },
  }),
};

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const timelineLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
  },
};

export const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
  }),
};
