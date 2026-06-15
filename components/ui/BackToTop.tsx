"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group"
          style={{
            background: "rgba(13,13,31,0.9)",
            border: "1px solid rgba(124,58,237,0.3)",
            backdropFilter: "blur(12px)",
            color: "var(--color-purple-light)",
          }}
          aria-label="Back to top"
          whileHover={{
            scale: 1.1,
            borderColor: "rgba(124,58,237,0.7)",
            boxShadow: "0 0 20px rgba(124,58,237,0.3)",
          }}
          whileTap={{ scale: 0.93 }}
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
