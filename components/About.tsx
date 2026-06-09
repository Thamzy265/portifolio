import Section from './Section';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who builds for the long haul.">
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

          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg italic text-ink sm:text-xl">
            &ldquo;My code has gone where I haven&apos;t, and I&apos;m proud of that.&rdquo;
          </blockquote>
        </div>

        <aside className="reveal space-y-8">
          {/* Profile photo placeholder — TODO: replace with an actual image in /public/profile.jpg */}
          <div
            aria-label="Profile photo placeholder"
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-paper-line bg-gradient-to-br from-paper-alt to-accent-soft"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-semibold tracking-tightish text-accent">WN</span>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-paper-line bg-paper-alt/40 p-5 text-center">
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">Years</dt>
              <dd className="mt-1 text-2xl font-semibold text-ink">7+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">Stack</dt>
              <dd className="mt-1 text-sm font-medium text-ink">Web + Mobile</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">Clients</dt>
              <dd className="mt-1 text-sm font-medium text-ink">Global</dd>
            </div>
          </dl>

          <p className="text-sm leading-relaxed text-ink-muted">
            Clients incl. <span className="text-ink">World Bank</span>,{' '}
            <span className="text-ink">Corus International</span>, and government ministries.
          </p>
        </aside>
      </div>
    </Section>
  );
}
