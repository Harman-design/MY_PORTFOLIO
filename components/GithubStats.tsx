"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  GITHUB_STATS,
  GITHUB_LANGUAGES,
  GITHUB_USERNAME,
} from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  staggerItemScale,
} from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function ContribCell({ level }: { level: number }) {
  return (
    <div
      className={`contrib-cell contrib-level-${level}`}
      role="img"
      aria-label={`Contribution level ${level}`}
    />
  );
}

export default function GithubStats() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.08 });
  const [contribData, setContribData] = useState<number[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 364 }, (_, index) => {
      const wave = Math.sin(index / 12);

      if (wave > 0.7) return 4;
      if (wave > 0.3) return 3;
      if (wave > -0.1) return 2;
      if (wave > -0.5) return 1;
      return 0;
    });

    setContribData(data);
  }, []);

  return (
    <SectionWrapper id="github">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">Open Source</div>
          <h2 className="section-heading">GitHub Activity</h2>
          <p className="section-subheading">
            A snapshot of my coding activity, repositories, and technologies.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerItem}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        >
          {GITHUB_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItemScale}
              className="portfolio-card p-4 text-center"
            >
              <div className="text-xl mb-1">{stat.icon}</div>

              <div className="text-xl font-black gradient-text-purple">
                {stat.value}
              </div>

              <div className="text-xs text-slate-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          variants={staggerItem}
          className="portfolio-card p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <Github size={18} />
            <span className="font-semibold">
              Contribution Activity
            </span>
          </div>

          {contribData.length > 0 && (
            <div
              className="grid gap-[2px] overflow-x-auto"
              style={{
                gridTemplateColumns: "repeat(52, 12px)",
                gridTemplateRows: "repeat(7, 12px)",
              }}
            >
              {contribData.map((level, i) => (
                <ContribCell key={i} level={level} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={staggerItem}
          className="portfolio-card p-6"
        >
          <h3 className="font-semibold mb-5">
            Most Used Technologies
          </h3>

          <div className="space-y-4">
            {GITHUB_LANGUAGES.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <span>{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: lang.color }}
                    initial={{ width: 0 }}
                    animate={
                      visible
                        ? { width: `${lang.percentage}%` }
                        : { width: 0 }
                    }
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          className="mt-8 flex justify-center"
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View GitHub Profile
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}