"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      inner.style.left = `${mouseX}px`;
      inner.style.top = `${mouseY}px`;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      // Smooth outer cursor following inner
      outerX += (mouseX - outerX) * 0.14;
      outerY += (mouseY - outerY) * 0.14;
      outer.style.left = `${outerX}px`;
      outer.style.top = `${outerY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onHoverStart = () => setIsHovered(true);
    const onHoverEnd = () => setIsHovered(false);

    const interactiveEls = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart);
      el.addEventListener("mouseleave", onHoverEnd);
    });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={outerRef}
        className={`custom-cursor-outer ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className="custom-cursor-inner"
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
}
