import Section from './Section';
import HeroIllustration from './HeroIllustration';

export default function Showcase() {
  return (
    <Section
      id="showcase"
      index="02"
      eyebrow="What I build"
      title="Mobile data capture, web dashboards, the works."
      intro="A typical day: a Flutter or Android app collecting data in the field, a React or Angular dashboard turning it into something people can act on, and the API and database holding it together."
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <ul className="space-y-5 text-base leading-relaxed text-ink-soft">
            <Bullet label="Field-ready mobile apps">
              Built for offline use and slow networks — sync when there&apos;s
              signal, never lose data.
            </Bullet>
            <Bullet label="Dashboards that get used">
              Real-time charts and reports that operations teams open every
              morning — not just on launch day.
            </Bullet>
            <Bullet label="One codebase, two stores">
              Flutter for cross-platform mobile, native Android where it earns
              its place.
            </Bullet>
            <Bullet label="Owned end-to-end">
              Database → API → web → mobile → deployment. I build the whole
              loop, so the pieces fit.
            </Bullet>
          </ul>
        </div>

        <div className="reveal order-1 lg:order-2">
          <HeroIllustration />
        </div>
      </div>
    </Section>
  );
}

function Bullet({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden
        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
      />
      <div>
        <span className="font-medium text-ink">{label}</span>
        <span className="text-ink-muted"> — {children}</span>
      </div>
    </li>
  );
}
