import Section from './Section';
import { SKILLS } from '@/lib/site';

export default function Skills() {
  return (
    <Section
      id="skills"
      index="07"
      eyebrow="Skills"
      title="The toolbox."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((g) => (
          <div
            key={g.group}
            className="reveal rounded-2xl border border-paper-line bg-paper p-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
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
    </Section>
  );
}
