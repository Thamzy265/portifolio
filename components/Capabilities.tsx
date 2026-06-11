import {
  BarChart3,
  Smartphone,
  Wrench,
  Settings2,
  FileText,
  Network,
  Workflow,
} from 'lucide-react';
import Section from './Section';
import { CAPABILITIES } from '@/lib/site';

const ICONS = [BarChart3, Smartphone, Wrench, Settings2, FileText, Network, Workflow];

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="04"
      eyebrow="Capabilities"
      title="What I do — across all of it."
      intro="The cross-cutting work that turns up in every project, regardless of industry."
      className="bg-paper-alt"
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap, i) => {
          const Icon = ICONS[i] ?? BarChart3;
          const num = String(i + 1).padStart(2, '0');
          return (
            <li
              key={cap.title}
              className="reveal group relative flex flex-col gap-4 bg-paper p-6 transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgba(17,20,24,0.16)] sm:p-7"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-paper-line text-ink-soft"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-ink-subtle">
                  {num}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold leading-snug tracking-tightish text-ink">
                {cap.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-muted">{cap.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
