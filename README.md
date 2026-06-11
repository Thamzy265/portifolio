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

## Where my assets live

Everything lives in `public/` (referenced from the root, e.g. `/cv/...`).

| Asset            | Path                                  | Notes                                                                                            |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| CV PDF           | `public/cv/William-Nasoni-CV.pdf`     | The hero **Download CV** button links here.                                                      |
| Profile photo    | `public/profile.jpg`                  | Wired up via `PROFILE_PHOTO` in `lib/site.ts`. Set to `null` to fall back to the "WN" placeholder. |
| Intro video      | `public/video/intro.mp4` **or** an embed URL | The `IntroVideo` component is currently not rendered — I'll add it back when the video is ready. |
| Favicon          | `public/favicon.svg`                  | Initials block.                                                                                  |

### Adding the intro video back

When I'm ready to add the video:

1. Drop the file in `public/video/intro.mp4` (or set up an embed URL).
2. In `lib/site.ts`, switch `INTRO_VIDEO`:
   ```ts
   // Local file:
   export const INTRO_VIDEO = { type: 'local', src: '/video/intro.mp4' };

   // YouTube / Vimeo embed:
   export const INTRO_VIDEO = { type: 'embed', src: 'https://www.youtube.com/embed/VIDEO_ID' };
   ```
3. Add `<IntroVideo />` back into `app/page.tsx`.

---

## Contact form (Netlify Forms)

The contact form uses **Netlify Forms** — no backend, no API keys.

How it works:

- `public/__forms.html` is a static HTML file containing a plain HTML form with the `name="contact"` attribute. Netlify's build-time form parser discovers this file and registers the form.
- The real React form in `components/Contact.tsx` POSTs to `/__forms.html` as `application/x-www-form-urlencoded` with matching field names.
- Submissions appear in **Netlify dashboard → Site → Forms**.

**After the first deploy:** I need to go to **Site settings → Forms → Form notifications** in Netlify and add an email notification so I get pinged about new messages.

The form also has a hidden `bot-field` honeypot.

---

## Deploying to Netlify

1. Push to GitHub.
2. In Netlify: **Add new site → Import an existing project → pick this repo**.
3. Netlify auto-detects `netlify.toml` (build command `npm run build`, publish dir `out`). Confirm and deploy.
4. Enable email notifications for the contact form (see above).
5. (Optional) Set a custom domain in **Site settings → Domain management**.

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

To update any content, edit `lib/site.ts` — `INDUSTRIES`, `CAPABILITIES`, `EXPERIENCE`, `SELECTED_WORK`, `SKILLS`, `NAV_LINKS`, plus contact URLs, the intro-video config, and the profile-photo path. The dev server hot-reloads on save.
