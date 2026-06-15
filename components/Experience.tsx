"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, Calendar } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EXPERIENCES } from "@/lib/constants";
import { staggerContainer, staggerItem, timelineItemVariants } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Experience() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <SectionWrapper id="experience" hasBg>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">Work History</div>
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">
            Real-world internships that transformed textbook knowledge into
            production-grade engineering skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Vertical line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={visible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={timelineItemVariants}
                custom={i}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" aria-hidden="true" />

                {/* Card */}
                <motion.div
                  className="portfolio-card p-6 sm:p-7 ml-4 sm:ml-6 gradient-border-animated"
                  whileHover={{ x: 6, transition: { duration: 0.25 } }}
                >
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Company logo */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black text-white font-display flex-shrink-0 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${exp.logoColor}, ${exp.logoColor}cc)`,
                          boxShadow: `0 4px 20px ${exp.logoColor}50`,
                        }}
                        aria-label={`${exp.company} logo`}
                      >
                        {exp.logo}
                      </div>

                      <div>
                        <h3
                          className="font-display font-bold text-lg leading-tight"
                          style={{ color: "var(--color-text)" }}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="font-semibold text-sm mt-0.5"
                          style={{ color: exp.logoColor }}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: "rgba(124,58,237,0.12)",
                          border: "1px solid rgba(124,58,237,0.25)",
                          color: "var(--color-purple-light)",
                        }}
                      >
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: "rgba(6,182,212,0.1)",
                          border: "1px solid rgba(6,182,212,0.2)",
                          color: "#67e8f9",
                        }}
                      >
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: "rgba(245,158,11,0.1)",
                          border: "1px solid rgba(245,158,11,0.2)",
                          color: "#fcd34d",
                        }}
                      >
                        <Briefcase size={11} />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px mb-4"
                    style={{ background: "var(--color-border)" }}
                    aria-hidden="true"
                  />

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Key Achievements
                    </p>
                    <ul className="flex flex-col gap-2">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: exp.logoColor }}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "More coming" indicator */}
        <motion.div variants={staggerItem} className="mt-10 flex justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.18)",
              color: "var(--color-text-muted)",
            }}
          >
            <span className="glow-dot w-1.5 h-1.5" />
            Actively seeking new opportunities
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
