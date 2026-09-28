import type { Metadata } from 'next';
import { ArrowUpRight, Download, Github } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProjectVideo from '@/components/ProjectVideo';
import {
  CLIENT_PROJECTS,
  CV_PATH,
  FEATURED_PROJECT,
  GITHUB_URL,
  OWN_PROJECT,
} from '@/lib/site';

const PAGE_TITLE = 'William Nasoni – Selected Projects';
// Written for a search result: says who, what and the evidence, inside the
// ~155 characters Google renders.
const PAGE_DESCRIPTION =
  'Client projects by William Nasoni, full stack engineer — national teacher and ' +
  'attendance systems, cash-transfer and M&E platforms across six countries, with ' +
  'a product walkthrough.';
const PAGE_PATH = '/projects';
const PAGE_IMAGE = '/video/campaign-platform-poster.jpg';

export const metadata: Metadata = {
  title: 'Selected Projects',
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    type: 'article',
    images: [{ url: PAGE_IMAGE, width: 1280, height: 720, alt: PAGE_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        // Static, author-controlled string — no user input reaches this.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            author: {
              '@type': 'Person',
              name: 'William Nasoni',
              jobTitle: 'Senior Full Stack Engineer',
              url: GITHUB_URL,
            },
            hasPart: CLIENT_PROJECTS.map((p) => ({
              '@type': 'CreativeWork',
              name: p.name,
              about: p.story,
              url: p.href,
            })),
          }),
        }}
      />
      <main id="main">
        {/* ── Page header ───────────────────────────────────────────────── */}
        <section
          id="top"
          className="relative overflow-hidden"
          aria-labelledby="projects-title"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[24rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
          </div>

          <div className="mx-auto max-w-content px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
            <h1
              id="projects-title"
              className="text-[38px] font-semibold leading-[1.05] tracking-tightish text-ink sm:text-[58px] lg:text-[68px]"
            >
              Selected Projects
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Seven years embedded with clients across six countries, building the
              systems that capture data in the field and turn it into decisions.
            </p>

            <div className="mt-8 max-w-3xl space-y-3 text-base leading-relaxed text-ink-muted">
              <p>
                I build the apps that capture data and the dashboards and reports
                that turn it into information.
              </p>
              <p>
                I run discovery with non-technical stakeholders, ship, and hand over
                so the client&rsquo;s own team can run the system without me.
              </p>
              <p>I have joined projects mid-stream and taken them to the end.</p>
            </div>
          </div>
        </section>

        {/* ── Featured project ──────────────────────────────────────────── */}
        <Section
          id="featured"
          index="01"
          eyebrow="Featured"
          title={`${FEATURED_PROJECT.title} (${FEATURED_PROJECT.period})`}
          className="bg-paper-alt"
        >
          <dl className="reveal grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:mt-12 sm:grid-cols-2">
            {FEATURED_PROJECT.story.map((block) => (
              <div key={block.label} className="bg-paper p-6 sm:p-7">
                <dt className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
                  {block.label}
                </dt>
                <dd className="mt-3 text-[16px] leading-relaxed text-ink-muted">
                  {block.body}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ── Own platform, with the walkthrough ────────────────────────── */}
        <Section
          id="platform"
          index="02"
          eyebrow="Built independently"
          title={
            OWN_PROJECT.period
              ? `${OWN_PROJECT.title} (${OWN_PROJECT.period})`
              : OWN_PROJECT.title
          }
          intro={OWN_PROJECT.status || undefined}
        >
          <ProjectVideo
            caption={OWN_PROJECT.videoCaption}
            note={OWN_PROJECT.videoNote}
            label={OWN_PROJECT.title}
          />

          <ul className="reveal mt-10 space-y-3 sm:mt-12">
            {OWN_PROJECT.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-[16px] leading-relaxed text-ink-muted"
              >
                <span
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Client projects ───────────────────────────────────────────── */}
        <Section
          id="client-projects"
          index="03"
          eyebrow="Client work"
          title="Client projects delivered through CGA Technologies"
          intro="The code for these belongs to the clients, so each links to the public project page; my role is stated under each."
        >
          <ol className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {CLIENT_PROJECTS.map((p, i) => (
              <li
                key={p.name}
                className="reveal flex flex-col rounded-2xl border border-paper-line bg-paper p-6 transition-colors hover:border-ink-subtle sm:p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] leading-6 tracking-wider text-ink-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[18px] font-semibold leading-snug text-ink">
                    {p.name}
                  </h3>
                </div>

                <p className="mt-2 pl-8 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-subtle">
                  {[p.client, p.country, p.period].filter(Boolean).join(' · ')}
                </p>

                <p className="mt-4 pl-8 text-[16px] leading-relaxed text-ink-muted">
                  {p.story}
                </p>

                {p.tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5 pl-8">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="inline-flex items-center rounded-full border border-paper-line bg-paper px-3 py-1 font-mono text-[12px] leading-none text-ink-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 border-t border-paper-line pt-4 pl-8">
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
                    My role
                  </p>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">
                    {p.role}
                  </p>
                </div>

                <p className="mt-auto pt-2 pl-8">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    View project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Code and CV ───────────────────────────────────────────────── */}
        <Section
          id="code-and-cv"
          index="04"
          eyebrow="More"
          title="Code and CV"
          className="bg-paper-alt"
        >
          <div className="reveal">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                <Github size={16} aria-hidden="true" /> GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                <Download size={16} aria-hidden="true" /> Download CV
              </a>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
              The common thread: sit with the client, work out what they actually
              need, build it, and hand it over so their own team can run it.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
