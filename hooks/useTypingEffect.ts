"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 55,
  pauseDuration = 2000,
}: UseTypingEffectOptions): { displayText: string; isTyping: boolean } {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        if (charIndexRef.current < currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndexRef.current + 1));
          charIndexRef.current++;
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        if (charIndexRef.current > 0) {
          setDisplayText(currentWord.slice(0, charIndexRef.current - 1));
          charIndexRef.current--;
          setIsTyping(false);
        } else {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }
      }
    };

    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping };
}
