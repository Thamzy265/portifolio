import Section from './Section';
import { SKILLS, LANGUAGES } from '@/lib/site';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolbox."
      className="bg-paper-alt/40"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((g) => (
          <div
            key={g.group}
            className="reveal rounded-2xl border border-paper-line bg-paper p-6"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {g.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-paper-line bg-paper-alt/60 px-3 py-1 text-sm text-ink-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal mt-12 grid gap-3 sm:grid-cols-2" id="languages">
        {LANGUAGES.map((l) => (
          <div
            key={l.name}
            className="flex items-baseline justify-between rounded-xl border border-paper-line bg-paper px-5 py-4"
          >
            <span className="text-base font-medium text-ink">{l.name}</span>
            <span className="text-sm text-ink-muted">{l.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
