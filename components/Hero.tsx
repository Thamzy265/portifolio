import { ArrowRight, Download } from 'lucide-react';
import { CV_PATH } from '@/lib/site';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 sm:pt-16"
      aria-labelledby="hero-title"
    >
      {/* Atmospheric backdrop: dot grid + soft accent washes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-90" />
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent-soft/80 blur-3xl" />
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="hero-stagger mx-auto max-w-content px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <h1
          id="hero-title"
          className="text-[44px] font-semibold leading-[1.02] tracking-tightish text-ink sm:text-[68px] lg:text-[84px]"
        >
          William Nasoni
        </h1>

        <p className="mt-5 max-w-3xl font-mono text-[13px] uppercase tracking-[0.16em] text-ink-soft sm:text-sm">
          Senior Full Stack &amp; Mobile Developer
        </p>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
          I build data-driven systems and apps across{' '}
          <span className="text-ink">education</span>,{' '}
          <span className="text-ink">finance</span>, and{' '}
          <span className="text-ink">customer engagement</span> — from field data
          capture to the dashboards that make sense of it.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#industries"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            See what I do
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </a>
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
