"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver is unavailable, reveal immediately so
    // content is never left hidden.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }

    const reveal = () => el.classList.add("visible");

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          obs.disconnect();
        }
      },
      // threshold 0 fires as soon as any part of the element enters the
      // viewport. A percentage threshold (e.g. 0.12) can never be reached by
      // elements taller than the viewport — like a full long-form article —
      // which left those permanently hidden at opacity:0.
      { threshold: 0 },
    );
    obs.observe(el);

    // Safety net: if the observer somehow hasn't fired shortly after mount
    // (e.g. layout edge cases), reveal anyway so text is always shown.
    const timer = window.setTimeout(reveal, 1200);

    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
