"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  hasBg?: boolean;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ id, children, className, innerClassName, hasBg = false, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {hasBg && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--color-bg-2)" }}
            aria-hidden="true"
          />
        )}
        <div className={cn("section-container relative z-10", innerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
