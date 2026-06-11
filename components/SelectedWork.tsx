import Section from './Section';
import { SELECTED_WORK } from '@/lib/site';

export default function SelectedWork() {
  return (
    <Section
      id="selected-work"
      index="06"
      eyebrow="Selected work"
      title="A few representative builds."
      intro="Supporting evidence, kept understated. The industries and capabilities above are the point."
      className="bg-paper-alt"
    >
      <ul className="reveal divide-y divide-paper-line border-y border-paper-line">
        {SELECTED_WORK.map((item, i) => (
          <li
            key={item.what}
            className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-5 sm:grid-cols-[auto_1fr_auto] sm:gap-x-8 sm:py-6"
          >
            <span className="font-mono text-[11px] leading-7 tracking-wider text-ink-subtle">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="text-[15px] font-medium leading-snug text-ink">
                {item.what}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {item.detail}
              </p>
            </div>
            <div className="col-start-2 flex flex-wrap gap-1.5 sm:col-start-3 sm:justify-end sm:pl-4">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-paper-line bg-paper px-3 py-1 font-mono text-[11px] leading-none text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
