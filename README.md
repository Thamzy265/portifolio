# William Nasoni — Portfolio

A clean, minimal, light-theme personal portfolio for William Nasoni — Full Stack & Mobile Developer based in Manchester, UK.

The site is **industry-led**: it presents the **industries** William works in (Education, Finance, Customer Engagement) and the **capabilities** he offers across all of them — with Selected Work kept light as supporting evidence.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS** (Geist + Geist Mono via `next/font`), configured as a **static export** ready to deploy to **Netlify** (free tier) with **Netlify Forms** wired up for the contact form.

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build (static export)

```bash
npm run build
```

Output lands in `out/` and can be served by any static host. `netlify.toml` is preconfigured so this just works on Netlify.

---

## Where to drop assets

All assets go into `public/` (referenced from the root, e.g. `/cv/...`).

| Asset            | Drop it here                          | Notes                                                                                            |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| CV PDF           | `public/cv/William-Nasoni-CV.pdf`     | The hero **Download CV** button links here.                                                      |
| Profile photo    | `public/profile.jpg` (or similar)     | Currently a styled "WN" placeholder in the About section — see `components/About.tsx`.           |
| Intro video      | `public/video/intro.mp4` **or** an embed URL | See below.                                                                              |
| Favicon          | `public/favicon.svg`                  | Already set (initials block).                                                                    |

### Setting the intro video

Open `lib/site.ts` and edit `INTRO_VIDEO`:

```ts
// For a local file:
export const INTRO_VIDEO = { type: 'local', src: '/video/intro.mp4' };

// For YouTube/Vimeo embed:
export const INTRO_VIDEO = { type: 'embed', src: 'https://www.youtube.com/embed/VIDEO_ID' };
```

Leaving it as `placeholder` shows the styled "Video coming soon" block.

### Updating the GitHub URL

`GITHUB_URL` in `lib/site.ts` is set to `https://github.com/thamzy265`. Change it there if it moves.

---

## Contact form (Netlify Forms)

The contact form uses **Netlify Forms** — no backend, no API keys.

How it works:

- `public/__forms.html` is a static HTML file containing a plain HTML form with the `name="contact"` attribute. Netlify's build-time form parser discovers this file and registers the form.
- The real React form in `components/Contact.tsx` POSTs to `/__forms.html` with `application/x-www-form-urlencoded`, matching field names.
- Submissions appear in **Netlify dashboard → Site → Forms**.

**Important:** After your first deploy, go to **Site settings → Forms → Form notifications** in Netlify and add an email notification so you get notified of new messages.

The form also has a hidden `bot-field` honeypot.

---

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → Pick this repo**.
3. Netlify will auto-detect `netlify.toml` (build command `npm run build`, publish dir `out`). Confirm and deploy.
4. Once deployed, enable email notifications for the contact form (see above).
5. (Optional) Set a custom domain in **Site settings → Domain management**.

---

## Things flagged to confirm

- **Years of experience** — CV says "5+ years"; bio says "7 years". The site uses **7 years** consistently (the more current source). Confirm or adjust in `lib/site.ts` and the About component if needed.
- **Domain** — `SITE_URL` in `app/layout.tsx` is set to `https://williamnasoni.com`. Update if the production domain is different (affects OG tags and sitemap).
- **Phone number** — intentionally not displayed anywhere (per spec).

---

## Project structure

```
app/
  layout.tsx       # root layout, fonts (Geist + Geist Mono), metadata, OG/twitter, favicon
  page.tsx         # single-page composition of all sections
  sitemap.ts       # sitemap.xml generator
  globals.css      # Tailwind base + design tokens + reveal animation
components/
  Nav.tsx          # sticky nav + mobile hamburger
  Hero.tsx
  About.tsx
  IntroVideo.tsx
  Industries.tsx   # three industry cards (Education / Finance / CX) — the core
  Capabilities.tsx # cross-cutting capability grid ("What I do")
  Experience.tsx   # timeline
  SelectedWork.tsx # compact, understated list of representative builds
  Skills.tsx       # grouped skill tags
  Contact.tsx      # Netlify Forms contact form
  Footer.tsx
  RevealOnScroll.tsx # fade-in IntersectionObserver, respects reduced-motion
  Section.tsx      # shared section shell (eyebrow + title + intro)
lib/
  site.ts          # ALL site content + URLs — edit here
public/
  __forms.html     # hidden static form for Netlify detection (do not delete)
  favicon.svg
  robots.txt
netlify.toml
next.config.mjs    # output: 'export' (static export)
tailwind.config.ts
```

Edit `lib/site.ts` to update any content — `INDUSTRIES`, `CAPABILITIES`, `EXPERIENCE`, `SELECTED_WORK`, `SKILLS`, `NAV_LINKS`, plus contact URLs and the intro-video config. Restart the dev server after edits.
