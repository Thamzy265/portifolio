'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      // Trigger as soon as any part of the element nears the viewport. A positive
      // bottom margin extends the root downwards so blocks fade in just before
      // they are scrolled to; the previous negative margin plus an 8% threshold
      // left a tall block blank while its own heading was already on screen.
      { threshold: 0, rootMargin: '0px 0px 15% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
