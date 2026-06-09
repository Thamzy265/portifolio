import { ArrowRight, Download, MapPin } from 'lucide-react';
import { CV_PATH } from '@/lib/site';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-12 sm:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-accent-soft/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-content px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16">
        <div className="reveal flex items-center gap-2 text-sm text-ink-muted">
          <MapPin size={14} className="text-accent" />
          <span>Manchester, UK · Available for contract work</span>
        </div>

        <h1
          id="hero-title"
          className="reveal mt-6 text-4xl font-semibold leading-[1.05] tracking-tightish text-ink sm:text-6xl lg:text-7xl"
        >
          William Nasoni
        </h1>

        <p className="reveal mt-4 max-w-3xl text-lg font-medium text-ink-soft sm:text-xl">
          Full Stack Developer · Mobile Application Developer · Systems Engineer
        </p>

        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          I build scalable web and mobile applications for organisations around the world —
          the World Bank, Corus International, and government agencies across Africa.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            View work <ArrowRight size={16} />
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
