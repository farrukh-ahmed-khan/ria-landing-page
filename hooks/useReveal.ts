// Legacy hook kept for any non-framer fallback use
// Main animations now handled by Framer Motion
"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const targets = section.querySelectorAll<HTMLElement>(".reveal");
    const all: HTMLElement[] = section.classList.contains("reveal")
      ? [section, ...Array.from(targets)]
      : Array.from(targets);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add("visible");
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    all.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
