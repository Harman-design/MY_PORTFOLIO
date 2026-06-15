"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL, ABOUT_STATS } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  fadeLeft,
  fadeRight,
  scaleIn,
} from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function About() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.12 });

  return (
    <SectionWrapper id="about" hasBg>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">Who I Am</div>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            A passionate developer who loves turning ideas into beautiful, functional
            experiences.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Profile card */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-5">
            {/* Profile card */}
            <motion.div
              className="portfolio-card p-6 relative overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Aurora shimmer */}
              <div className="aurora-line" aria-hidden="true" />

              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-black text-white font-display shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                      boxShadow: "0 0 40px rgba(124,58,237,0.4)",
                    }}
                    aria-label="Harmanpreet Kaur initials"
                  >
                    HK
                  </div>
                  {/* Online indicator */}
                  <div
                    className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{
                      background: "rgba(34,197,94,0.15)",
                      border: "1px solid rgba(34,197,94,0.3)",
                      color: "#4ade80",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to Work
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold font-display"
                    style={{ color: "var(--color-text)" }}
                  >
                    {PERSONAL.name}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-purple-light)" }}
                  >
                    {PERSONAL.subtitle}
                  </p>
                </div>

                {/* Meta info */}
                <div className="flex flex-col gap-2 w-full text-sm">
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <GraduationCap size={15} style={{ color: "var(--color-purple-light)" }} />
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {PERSONAL.degree}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <MapPin size={15} style={{ color: "var(--color-cyan)" }} />
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {PERSONAL.university}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Calendar size={15} style={{ color: "var(--color-amber)" }} />
                    <span style={{ color: "var(--color-text-muted)" }}>
                      {PERSONAL.year}
                    </span>
                  </div>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {PERSONAL.traits.map((trait) => (
                    <span
                      key={trait.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium tech-tag-purple"
                    >
                      <span>{trait.icon}</span>
                      {trait.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {ABOUT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  custom={i}
                  className="portfolio-card p-4 text-center"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div
                    className="text-2xl font-black font-display gradient-text-purple"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1 leading-tight"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div variants={fadeRight} className="flex flex-col gap-6">
            <div className="space-y-4">
              {PERSONAL.bio.map((para, i) => (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="leading-[1.85] text-base"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {i === 0 ? (
                    <>
                      I&apos;m a passionate{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        2nd-year B.Tech Computer Science Engineering student
                      </span>{" "}
                      at SRM Institute of Science and Technology, Chennai, with a
                      deep interest in{" "}
                      <span style={{ color: "var(--color-purple-light)" }}>
                        AI, Data Science,
                      </span>{" "}
                      and building impactful technology solutions.
                    </>
                  ) : (
                    para
                  )}
                </motion.p>
              ))}
            </div>

            {/* Education highlight */}
            <motion.div
              variants={staggerItem}
              className="portfolio-card p-5 flex items-start gap-4"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
                aria-hidden="true"
              >
                🎓
              </div>
              <div>
                <div
                  className="font-bold text-base"
                  style={{ color: "var(--color-text)" }}
                >
                  {PERSONAL.degree}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {PERSONAL.university}
                </div>
                <div
                  className="text-xs mt-1 font-medium"
                  style={{ color: "var(--color-purple-light)" }}
                >
                  {PERSONAL.year} · SGPA: 10
                </div>
              </div>
            </motion.div>

            {/* Currently learning */}
            <motion.div variants={staggerItem} className="portfolio-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star size={15} style={{ color: "var(--color-amber)" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Currently Exploring
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "LLM Fine-tuning",
                  "System Design",
                  "DSA",
                  "Next.js 15",
                  "GraphQL",
                ].map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="flex gap-3 flex-wrap">
              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Connect
              </motion.button>
              <motion.a
                href={PERSONAL.resume}
                download
                className="btn-outline"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
