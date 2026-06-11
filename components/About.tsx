import Section from './Section';
import AnimatedNumber from './AnimatedNumber';
import { PROFILE_PHOTO } from '@/lib/site';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="A developer who builds for the long haul.">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="reveal space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
          <p>
            Software development is like being an artist — you start with nothing and build
            something people actually use.
          </p>
          <p>
            I&apos;m self-taught, and what started as a joke has turned into 7 years of
            delivering production systems for organisations across the world — the World Bank,
            Corus International, and government agencies across Africa. My code has gone
            where I haven&apos;t, and I&apos;m proud of that.
          </p>
          <p>
            What keeps me going is curiosity. That&apos;s how I&apos;ve gone from Java and C# to
            Kotlin, Flutter, and writing JavaScript and TypeScript every day — and I&apos;m still
            learning. Right now I&apos;m exploring how to leverage AI in the products I build,
            because I think that&apos;s where things get interesting.
          </p>
          <p>
            Some of my best work has come from the hardest situations — inheriting broken
            legacy systems, stepping into complex problems mid-flight, and delivering under
            pressure. That&apos;s where I&apos;m most comfortable.
          </p>
          <p>
            I work across the full stack and mobile — Angular, Node.js, Flutter, Vue.js,
            Laravel, Docker — and I adapt to whatever the project needs.
          </p>
          <p>
            These days, I&apos;m building a unified call-centre campaign platform serving
            600+ agents, and rebuilding a cross-platform field data-capture app in Flutter.
          </p>

          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg italic text-ink sm:text-xl">
            &ldquo;My code has gone where I haven&apos;t, and I&apos;m proud of that.&rdquo;
          </blockquote>
        </div>

        <aside className="reveal space-y-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-paper-line bg-gradient-to-br from-paper-alt to-accent-soft">
            {PROFILE_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={PROFILE_PHOTO}
                alt="William Nasoni"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center" aria-label="Profile photo placeholder">
                <span className="text-7xl font-semibold tracking-tightish text-accent">WN</span>
              </div>
            )}
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line">
            <Stat value="7" suffix="years" label="Experience" />
            <Stat value="10+" label="Production systems" />
            <Stat value="6" label="Countries" />
            <Stat value="Web + Mobile" label="Stack" small />
          </dl>
        </aside>
      </div>
    </Section>
  );
}

function Stat({
  value,
  suffix,
  label,
  small,
}: {
  value: string;
  suffix?: string;
  label: string;
  small?: boolean;
}) {
  return (
    <div className="bg-paper p-5">
      <div
        className={`text-ink ${
          small ? 'text-base font-semibold' : 'text-3xl font-semibold tracking-tightish sm:text-4xl'
        }`}
      >
        {small ? value : <AnimatedNumber value={value} />}
        {suffix && (
          <span className="ml-1 text-sm font-normal text-ink-muted">{suffix}</span>
        )}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </div>
    </div>
  );
}
