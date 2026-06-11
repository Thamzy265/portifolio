# William Nasoni — Portfolio

My personal portfolio site — Senior Full Stack & Mobile Developer, based in Manchester, UK.

The site is **industry-led**: it leads with the industries I work in (Education, Finance, Customer Engagement) and the capabilities I offer across all of them, with a compact Selected Work list as supporting evidence.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS** (Geist + Geist Mono via `next/font`), configured as a **static export** and deployed to **Netlify** (free tier) with **Netlify Forms** wired up for the contact form.

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build (static export)

```bash
npm run build
```

The output lands in `out/` and can be served by any static host. `netlify.toml` is preconfigured so it just works on Netlify.

---


## Project structure

```
app/
  layout.tsx          # root layout, fonts (Geist + Geist Mono), metadata, OG/twitter, favicon
  page.tsx            # single-page composition of all sections
  sitemap.ts          # sitemap.xml generator
  globals.css         # Tailwind base + design tokens + reveal/hero-stagger animations
components/
  Nav.tsx             # sticky nav + animated hamburger
  Hero.tsx            # name, subtitle, value prop, CTAs (with on-load stagger)
  About.tsx           # bio + stat strip + profile photo
  Showcase.tsx        # "What I build" — bullets + animated phone/code illustration
  HeroIllustration.tsx # the inline-SVG phone + code window used by Showcase
  TechStrip.tsx       # "Built with" — monochrome inline-SVG tech logos
  IntroVideo.tsx      # video placeholder/embed (currently not in page.tsx)
  Industries.tsx      # three industry cards with count-up headline stats — the core
  Capabilities.tsx    # cross-cutting capability grid
  Experience.tsx      # timeline
  SelectedWork.tsx    # compact, understated list of representative builds
  Skills.tsx          # grouped skill tags
  Contact.tsx         # Netlify Forms contact form
  Footer.tsx
  AnimatedNumber.tsx  # IntersectionObserver-driven count-up
  RevealOnScroll.tsx  # fade-in IntersectionObserver, respects reduced-motion
  Section.tsx         # shared section shell (eyebrow + index + title + intro)
lib/
  site.ts             # ALL site content + URLs — edit here
public/
  __forms.html        # hidden static form for Netlify detection (do not delete)
  cv/William-Nasoni-CV.pdf
  profile.jpg
  favicon.svg
  robots.txt
netlify.toml
next.config.mjs       # output: 'export' (static export)
tailwind.config.ts
```

