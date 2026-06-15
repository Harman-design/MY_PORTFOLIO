"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  loadingScreenVariants,
  loadingLogoVariants,
  loadingBarVariants,
} from "@/lib/animations";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 300);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          className="loading-screen"
          variants={loadingScreenVariants}
          initial="visible"
          exit="hidden"
        >
          {/* Background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="orb w-[500px] h-[500px] -top-40 -left-40"
              style={{ background: "rgba(124,58,237,0.18)" }}
            />
            <div
              className="orb w-[400px] h-[400px] -bottom-20 -right-20"
              style={{ background: "rgba(6,182,212,0.14)" }}
            />
          </div>

          {/* Logo */}
          <motion.div
            variants={loadingLogoVariants}
            initial="initial"
            animate="animate"
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white font-display"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  boxShadow: "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2)",
                }}
              >
                HK
              </div>
              {/* Spinning ring */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4, #7c3aed) border-box",
                  WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  animation: "spin 2s linear infinite",
                }}
              />
            </div>

            {/* Name */}
            <div className="text-center space-y-1">
              <h1
                className="text-2xl font-bold font-display gradient-text"
              >
                Harmanpreet Kaur
              </h1>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Portfolio Loading...
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 space-y-2">
              <motion.div
                className="h-0.5 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  variants={loadingBarVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full rounded-full origin-left"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                    boxShadow: "0 0 12px rgba(124,58,237,0.7)",
                  }}
                />
              </motion.div>
              <div
                className="text-center text-xs font-code"
                style={{ color: "var(--color-purple-light)" }}
              >
                {progress}%
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-purple-light)" }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
