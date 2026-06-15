"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ACHIEVEMENTS, ACHIEVEMENT_COLORS } from "@/lib/constants";
import { staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CATEGORY_ICONS: Record<string, string> = {
  "Work Experience": "💼",
  Certification: "📜",
  Competition: "🏆",
  Leadership: "👥",
  Academic: "🎓",
};

export default function Achievements() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });

  // Group achievements by category
  const categories = Array.from(new Set(ACHIEVEMENTS.map((a) => a.category)));

  return (
    <SectionWrapper id="achievements" hasBg>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">Milestones</div>
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subheading">
            Recognition and milestones across internships, competitions,
            certifications, and leadership.
          </p>
        </motion.div>

        {/* Category filters row */}
        <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tech-tag-purple"
            >
              {CATEGORY_ICONS[cat] ?? "✨"}
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((achievement, i) => {
            const colors = ACHIEVEMENT_COLORS[achievement.color];
            return (
              <motion.article
                key={achievement.id}
                variants={staggerItemScale}
                custom={i}
                className="portfolio-card p-5 flex items-start gap-4 group gradient-border-animated"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    boxShadow: `0 0 0 0 ${colors.glow}`,
                  }}
                  aria-hidden="true"
                >
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="font-semibold text-sm leading-tight"
                      style={{ color: "var(--color-text)" }}
                    >
                      {achievement.title}
                    </h3>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md flex-shrink-0"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                      }}
                    >
                      {achievement.year}
                    </span>
                  </div>

                  <span
                    className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-md mb-2"
                    style={{
                      background: colors.bg,
                      color: colors.text,
                    }}
                  >
                    {achievement.category}
                  </span>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Summary numbers */}
        <motion.div
          variants={staggerItem}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Internships", value: "3", color: "purple" },
            { label: "Certifications", value: "3+", color: "cyan" },
            { label: "Competitions", value: "1+", color: "amber" },
            { label: "Leadership Roles", value: "1+", color: "green" },
          ].map(({ label, value, color }) => {
            const colors = ACHIEVEMENT_COLORS[color];
            return (
              <div
                key={label}
                className="portfolio-card p-4 text-center"
              >
                <div
                  className="text-2xl font-black font-display"
                  style={{ color: colors.text }}
                >
                  {value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
