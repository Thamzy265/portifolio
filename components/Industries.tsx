import { GraduationCap, Banknote, Headset } from 'lucide-react';
import Section from './Section';
import AnimatedNumber from './AnimatedNumber';
import { INDUSTRIES } from '@/lib/site';

const ICONS = {
  education: GraduationCap,
  finance: Banknote,
  'customer-engagement': Headset,
} as const;

export default function Industries() {
  return (
    <Section
      id="industries"
      index="03"
      eyebrow="Industries"
      title="Where my work lives."
      intro="Three sectors where I've built and shipped production systems — each with its own constraints, and a common thread: turning data into something people can actually act on."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line md:grid-cols-3">
        {INDUSTRIES.map((industry, i) => {
          const Icon = ICONS[industry.id];
          const num = String(i + 1).padStart(2, '0');
          return (
            <article
              key={industry.id}
              className="reveal group relative flex flex-col gap-6 bg-paper p-7 transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(15,111,106,0.25)] sm:p-9"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <header className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-wider text-ink-subtle">
                  {num} / {String(INDUSTRIES.length).padStart(2, '0')}
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
              </header>

              <h3 className="text-2xl font-semibold leading-tight tracking-tightish text-ink sm:text-[26px]">
                {industry.name}
              </h3>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                  {industry.headline.label}
                </div>
                <div className="mt-1 text-4xl font-semibold tracking-tightish text-accent sm:text-5xl">
                  <AnimatedNumber value={industry.headline.value} />
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-ink-soft">
                {industry.build}
              </p>

              <footer className="mt-auto border-t border-paper-line pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                  Proof
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {industry.proof}
                </p>
              </footer>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
