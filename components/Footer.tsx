"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: <Github size={18} />, href: PERSONAL.github, label: "GitHub" },
  { icon: <Linkedin size={18} />, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: <Mail size={18} />, href: `mailto:${PERSONAL.email}`, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: "var(--color-bg-2)",
        borderTopColor: "var(--color-border)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                aria-hidden="true"
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span
                className="font-display font-bold text-lg gradient-text-purple"
              >
                HK.
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              {PERSONAL.name} — {PERSONAL.subtitle}. Building impactful
              technology, one commit at a time.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(124,58,237,0.15)",
                    borderColor: "rgba(124,58,237,0.35)",
                    color: "var(--color-purple-light)",
                  }}
                  whileTap={{ scale: 0.93 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-purple-400"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="hover:text-purple-400 transition-colors duration-200 break-all"
              >
                {PERSONAL.email}
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                LinkedIn Profile
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                GitHub Profile
              </a>
            </div>

            {/* Availability */}
            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#4ade80",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-xs"
          style={{
            borderTopColor: "var(--color-border)",
            color: "var(--color-text-faint)",
          }}
        >
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()}</span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-text-muted)" }}
            >
              {PERSONAL.name}
            </span>
            <span>· Built with</span>
            <Heart size={11} className="text-red-400" aria-hidden="true" />
            <span>using Next.js, Tailwind CSS & Framer Motion</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--color-border)",
            }}
            whileHover={{
              scale: 1.06,
              background: "rgba(124,58,237,0.12)",
              borderColor: "rgba(124,58,237,0.3)",
              color: "var(--color-purple-light)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={12} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
