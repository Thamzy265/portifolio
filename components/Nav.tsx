'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';

  // The section links are in-page anchors, which resolve to nothing on any
  // other route — so off the home page they are prefixed to point back at it.
  const resolve = (href: string) =>
    href.startsWith('#') && !onHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? 'border-paper-line bg-paper/85 backdrop-blur'
          : 'border-transparent bg-paper/0'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a
          href={onHome ? '#top' : '/'}
          className="text-[16px] font-semibold tracking-tightish text-ink"
          aria-label="William Nasoni — home"
        >
          William Nasoni<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={resolve(l.href)}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`font-mono text-[13px] uppercase tracking-[0.14em] transition-colors hover:text-ink ${
                  pathname === l.href ? 'text-ink' : 'text-ink-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle" data-open={open} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-paper-line bg-paper`}
      >
        <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={resolve(l.href)}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`block rounded-md px-2 py-3 text-base hover:bg-paper-alt ${
                  pathname === l.href ? 'font-medium text-ink' : 'text-ink-soft'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
