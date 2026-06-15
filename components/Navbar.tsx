"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Code2, ExternalLink } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navbarVariants, mobileMenuVariants, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5 bg-transparent"
        )}
        style={
          scrolled
            ? {
                background: "rgba(6,6,18,0.82)",
                borderBottomColor: "rgba(255,255,255,0.06)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }
            : {}
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Back to top"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <span
              className="font-display font-bold text-lg hidden sm:block gradient-text-purple"
            >
              HK.
            </span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "hover:text-white"
                  )}
                  style={{ color: isActive ? "var(--color-text)" : "var(--color-text-muted)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
                whileHover={{ scale: 1.1, color: "var(--color-text)" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}

            {/* Resume button */}
            <motion.a
              href={PERSONAL.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
              }}
              whileHover={{ scale: 1.04, y: -1, boxShadow: "0 8px 30px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Resume
              <ExternalLink size={13} />
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-[4.5rem] left-4 right-4 z-40 md:hidden rounded-2xl p-4 overflow-hidden"
              style={{
                background: "rgba(13,13,31,0.98)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.li
                      key={link.label}
                      variants={staggerItem}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{
                          color: isActive ? "var(--color-purple-light)" : "var(--color-text-muted)",
                          background: isActive ? "rgba(124,58,237,0.12)" : "transparent",
                          border: isActive ? "1px solid rgba(124,58,237,0.2)" : "1px solid transparent",
                        }}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}

                <motion.li variants={staggerItem} initial="hidden" animate="visible" custom={NAV_LINKS.length}>
                  <div className="h-px my-2" style={{ background: "rgba(255,255,255,0.06)" }} />
                  <a
                    href={PERSONAL.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Download Resume
                    <ExternalLink size={13} />
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
