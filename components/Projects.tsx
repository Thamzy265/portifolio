import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { FEATURED_PROJECTS } from '@/lib/site';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Production work, shipped."
      intro="A selection of recent work for international organisations, government ministries, and private-sector clients."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {FEATURED_PROJECTS.map((p) => (
          <article
            key={p.title}
            className="reveal group flex flex-col gap-5 rounded-2xl border border-paper-line bg-paper p-6 transition-shadow hover:shadow-[0_2px_24px_-12px_rgba(15,111,106,0.25)] sm:p-7"
          >
            {/* Screenshot placeholder — TODO: drop screenshot in /public/projects/{slug}.png and replace this block with <Image/> */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-paper-line bg-gradient-to-br from-paper-alt to-accent-soft/60">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-subtle">
                  {p.client.split(' · ')[0]}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug tracking-tightish text-ink sm:text-xl">
                {p.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-ink-subtle transition-colors group-hover:text-accent"
              />
            </div>

            <div className="-mt-2 text-sm text-ink-muted">
              <div className="font-medium text-ink-soft">{p.role}</div>
              <div>{p.client}</div>
              <div className="text-ink-subtle">{p.period}</div>
            </div>

            <ul className="space-y-2 text-sm leading-relaxed text-ink-soft">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-paper-line bg-paper-alt/60 px-2.5 py-1 text-xs font-medium text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
