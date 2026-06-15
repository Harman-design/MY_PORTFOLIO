"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import {
  PERSONAL,
  TYPING_ROLES,
  HERO_STATS,
  FLOATING_ICONS,
} from "@/lib/constants";
import {
  heroBadgeVariants,
  heroNameVariants,
  heroRoleVariants,
  heroDescVariants,
  heroBtnsVariants,
  heroStatsVariants,
  heroStatItemVariants,
} from "@/lib/animations";
import { useTypingEffect } from "@/hooks/useTypingEffect";

function FloatingIcon({
  icon,
  x,
  y,
  delay,
  duration,
  label,
}: {
  icon: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
  label: string;
}) {
  return (
    <motion.div
      className="absolute text-2xl select-none pointer-events-none hidden lg:block"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -16, -8, -18, 0],
        rotate: [0, 4, -2, 5, 0],
        scale: [1, 1.05, 0.98, 1.04, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      aria-hidden="true"
      title={label}
      style={{ left: x, top: y, opacity: 0.18 }}
    >
      {icon}
    </motion.div>
  );
}

export default function Hero() {
  const { displayText } = useTypingEffect({
    words: TYPING_ROLES,
    typingSpeed: 95,
    deletingSpeed: 52,
    pauseDuration: 2200,
  });

  // Mouse parallax for profile card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const cardRotX = useTransform(springY, [-200, 200], [6, -6]);
  const cardRotY = useTransform(springX, [-200, 200], [-6, 6]);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", onMouse);
    return () => el?.removeEventListener("mousemove", onMouse);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(124,58,237,0.22), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "rgba(6,182,212,0.08)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "rgba(124,58,237,0.1)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Floating icons */}
      {FLOATING_ICONS.map((item) => (
        <FloatingIcon key={item.label} {...item} />
      ))}

      {/* Badge */}
      <motion.div
        variants={heroBadgeVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
        style={{
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.25)",
          color: "var(--color-purple-light)",
        }}
      >
        <span className="glow-dot w-1.5 h-1.5" />
        <Sparkles size={13} />
        Open to Internships · B.Tech CSE
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={heroNameVariants}
        initial="hidden"
        animate="visible"
        className="font-display font-black leading-none mb-5 tracking-tight"
        style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
      >
        <span className="gradient-text block">Harmanpreet</span>
        <span className="gradient-text block">Kaur</span>
      </motion.h1>

      {/* Typing role */}
      <motion.div
        variants={heroRoleVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-1 mb-4"
        style={{ minHeight: "2.5rem" }}
      >
        <span
          className="text-xl sm:text-2xl font-semibold"
          style={{ color: "var(--color-purple-light)" }}
        >
          {displayText}
        </span>
        <span
          className="inline-block w-0.5 ml-1 animate-blink"
          style={{
            height: "1.4em",
            background: "var(--color-purple-light)",
            animation: "blink 0.7s step-end infinite",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        variants={heroDescVariants}
        initial="hidden"
        animate="visible"
        className="text-base sm:text-lg max-w-2xl mb-8 leading-relaxed text-balance"
        style={{ color: "var(--color-text-muted)" }}
      >
        2nd-year B.Tech CSE student at{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--color-purple-light)" }}
        >
          SRM Institute of Science and Technology
        </span>
        , Chennai — passionate about AI, Data Science, and building full-stack
        solutions that solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={heroBtnsVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-3 mb-14"
      >
        <motion.button
          onClick={() => scrollTo("projects")}
          className="btn-primary"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <ArrowRight size={17} />
          View Projects
        </motion.button>

        <motion.a
          href={PERSONAL.resume}
          download
          className="btn-outline"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Download size={17} />
          Resume
        </motion.a>

        <motion.button
          onClick={() => scrollTo("contact")}
          className="btn-outline"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Mail size={17} />
          Contact
        </motion.button>

        <motion.a
          href={PERSONAL.github}
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label="GitHub profile"
        >
          <Github size={17} />
        </motion.a>

        <motion.a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label="LinkedIn profile"
        >
          <Linkedin size={17} />
        </motion.a>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={heroStatsVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-8 sm:gap-14"
      >
        {HERO_STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={heroStatItemVariants}
            className="text-center"
          >
            <div
              className="font-display font-black gradient-text-purple"
              style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1 }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs uppercase tracking-[0.15em] mt-1.5 font-medium"
              style={{ color: "var(--color-text-faint)" }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--color-text-faint)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-10 rounded-full"
          style={{
            background: "linear-gradient(180deg, var(--color-purple-light), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
