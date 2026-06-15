"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, staggerItem, staggerItemScale } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Project = (typeof PROJECTS)[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="w-full max-w-2xl rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          style={{
            background: "var(--color-bg-2)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal thumb */}
          <div
            className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`,
              }}
              aria-hidden="true"
            />
            <motion.div
              className="relative z-10 text-6xl"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {project.emoji}
            </motion.div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{ background: "rgba(0,0,0,0.4)", color: "#fff" }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Status badge */}
            <div
              className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: project.status === "Completed"
                  ? "rgba(34,197,94,0.2)"
                  : "rgba(245,158,11,0.2)",
                border: project.status === "Completed"
                  ? "1px solid rgba(34,197,94,0.4)"
                  : "1px solid rgba(245,158,11,0.4)",
                color: project.status === "Completed" ? "#4ade80" : "#fbbf24",
              }}
            >
              {project.status}
            </div>
          </div>

          {/* Modal content */}
          <div className="p-6 sm:p-8">
            <h2
              className="font-display font-bold text-2xl mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {project.title}
            </h2>
            <p
              className="text-sm font-medium mb-4"
              style={{ color: "var(--color-purple-light)" }}
            >
              {project.tagline}
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              {project.longDescription}
            </p>

            <div className="mb-5">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-text-faint)" }}
              >
                All Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{ color: "var(--color-purple-light)", flexShrink: 0 }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <Github size={15} />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={staggerItemScale}
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer group gradient-border-animated"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={{
        y: -8,
        boxShadow: `0 30px 70px rgba(0,0,0,0.5), 0 0 50px ${project.glowColor}`,
        borderColor: "rgba(124,58,237,0.35)",
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`,
            opacity: hovered ? 0.8 : 0.5,
          }}
          aria-hidden="true"
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
        >
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white"
            style={{ background: "var(--color-purple)" }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={13} />
            Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={13} />
            Code
          </motion.a>
        </motion.div>

        <motion.div
          className="text-5xl relative z-10"
          animate={{ y: hovered ? -6 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          {project.emoji}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: "rgba(124,58,237,0.25)",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "var(--color-purple-light)",
            }}
          >
            Featured
          </div>
        )}

        {/* Status badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-semibold"
          style={{
            background: project.status === "Completed"
              ? "rgba(34,197,94,0.15)"
              : "rgba(245,158,11,0.15)",
            border: project.status === "Completed"
              ? "1px solid rgba(34,197,94,0.3)"
              : "1px solid rgba(245,158,11,0.3)",
            color: project.status === "Completed" ? "#4ade80" : "#fbbf24",
          }}
        >
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3
              className="font-display font-bold text-base"
              style={{ color: "var(--color-text)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-xs mt-0.5 font-medium"
              style={{ color: "var(--color-purple-light)" }}
            >
              {project.tagline}
            </p>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <p
          className="text-xs leading-relaxed mb-4 flex-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-1.5 mb-4">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span style={{ color: "var(--color-purple-light)" }} aria-hidden="true">
                →
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag text-[11px] px-2 py-0.5">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span
              className="text-[11px] px-2 py-0.5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-faint)",
              }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Bottom: stats + actions */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-text-faint)" }}>
            <span className="flex items-center gap-1">
              <Star size={11} />
              {project.stats.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={11} />
              {project.stats.forks}
            </span>
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
              style={{ background: "var(--color-purple)" }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={11} />
              Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={11} />
              Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.07 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">What I&apos;ve Built</div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            A selection of projects spanning AI, mobile, and full-stack — each
            engineered to solve a meaningful real-world problem.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={staggerItem} className="mt-10 flex justify-center">
          <motion.a
            href="https://github.com/Harman-design"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            View All Projects on GitHub
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionWrapper>
  );
}
