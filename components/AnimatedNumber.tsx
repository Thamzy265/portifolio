'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  value: string; // e.g. "7", "10+", "300+", "3-level", "Web + Mobile"
  duration?: number; // ms
  className?: string;
};

// Parses a value like "300+" or "3-level" into a numeric portion and a suffix.
// If no leading number, returns null → component renders the value verbatim.
function parse(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function AnimatedNumber({ value, duration = 1200, className }: Props) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<number>(parsed ? 0 : 0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!parsed || !ref.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplay(parsed.num);
      return;
    }

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            observer.unobserve(entry.target);
            const start = performance.now();
            const target = parsed.num;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, duration]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {parsed.suffix}
    </span>
  );
}
