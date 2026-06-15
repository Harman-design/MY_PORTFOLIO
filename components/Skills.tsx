"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CATEGORY_COLORS: Record<string, { accent: string; bg: string; border: string }> = {
  programming: {
    accent: "#a78bfa",
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
  },
  frontend: {
    accent: "#67e8f9",
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
  },
  backend: {
    accent: "#fcd34d",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
  },
  tools: {
    accent: "#86efac",
    bg: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.25)",
  },
};

function SkillBar({
  name,
  level,
  icon,
  animate,
  accent,
}: {
  name: string;
  level: number;
  icon: string;
  animate: boolean;
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden="true">{icon}</span>
          <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
            {name}
          </span>
        </div>
        <span
          className="text-xs font-semibold font-code tabular-nums"
          style={{ color: "var(--color-text-muted)" }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${accent}, var(--color-cyan))`,
            boxShadow: animate ? `0 0 8px ${accent}60` : "none",
            transition: animate
              ? "width 1.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 1.4s ease"
              : "none",
          }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}%`}
        />
      </div>
    </div>
  );
}

function SkillCategoryCard({
  category,
  index,
  visible,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
  index: number;
  visible: boolean;
}) {
  const colors = CATEGORY_COLORS[category.id] ?? CATEGORY_COLORS.programming;
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimateBars(true), index * 120);
      return () => clearTimeout(t);
    }
  }, [visible, index]);

  return (
    <motion.div
      variants={staggerItemScale}
      className="portfolio-card p-6 flex flex-col gap-5 gradient-border-animated"
      whileHover={{ y: -6, transition: { duration: 0.28 } }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
          aria-hidden="true"
        >
          {category.icon}
        </div>
        <div>
          <h3
            className="font-display font-bold text-base"
            style={{ color: "var(--color-text)" }}
          >
            {category.label}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
            {category.skills.length} technologies
          </p>
        </div>
      </div>

      <div
        className="h-px"
        style={{ background: "var(--color-border)" }}
        aria-hidden="true"
      />

      {/* Skills */}
      <div className="flex flex-col gap-4">
        {category.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            animate={animateBars}
            accent={colors.accent}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });

  return (
    <SectionWrapper id="skills">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">What I Know</div>
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading">
            A curated toolkit built through internships, projects, and continuous
            self-learning across the full stack.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((category, i) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom tech cloud */}
        <motion.div variants={staggerItem} className="mt-10">
          <div
            className="portfolio-card p-6"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-4 text-center"
              style={{ color: "var(--color-text-faint)" }}
            >
              Also familiar with
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Flutter",
                "Dart",
                "Firebase",
                "Docker",
                "Vercel",
                "NumPy",
                "Pandas",
                "Matplotlib",
                "Scikit-learn",
                "Jupyter",
                "Google Cloud",
                "SQL",
              ].map((tech) => (
                <span key={tech} className="tech-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
