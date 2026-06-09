import Section from './Section';
import { ADDITIONAL_WORK } from '@/lib/site';

export default function AdditionalWork() {
  return (
    <Section
      id="additional-work"
      eyebrow="Selected additional work"
      title="More projects."
      className="bg-paper-alt/40"
    >
      <ul className="reveal divide-y divide-paper-line rounded-2xl border border-paper-line bg-paper">
        {ADDITIONAL_WORK.map((item) => (
          <li
            key={item.title}
            className="grid gap-2 px-5 py-5 sm:grid-cols-[1.4fr_1fr_auto] sm:items-center sm:gap-6 sm:px-7"
          >
            <div>
              <div className="text-[15px] font-semibold text-ink">{item.title}</div>
              <div className="text-sm text-ink-muted">{item.client}</div>
              {item.note && (
                <div className="mt-1 text-sm text-ink-subtle">{item.note}</div>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-paper-line bg-paper-alt/60 px-2.5 py-0.5 text-xs text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="text-sm tabular-nums text-ink-subtle sm:text-right">
              {item.year}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
