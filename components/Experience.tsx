import Section from './Section';
import { EXPERIENCE } from '@/lib/site';

export default function Experience() {
  return (
    <Section id="experience" index="05" eyebrow="Experience" title="Where I've worked.">
      <ol className="reveal relative border-l border-paper-line pl-6 sm:pl-8">
        {EXPERIENCE.map((e, i) => (
          <li key={`${e.company}-${i}`} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tightish text-ink">
                {e.company}
              </h3>
              <span className="text-sm tabular-nums text-ink-subtle">{e.period}</span>
            </div>
            <div className="text-sm text-ink-muted">
              {e.role} · <span className="text-ink-subtle">{e.location}</span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-[15px]">
              {e.summary}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
