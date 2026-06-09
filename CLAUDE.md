# Claude Code Prompt — William Nasoni Portfolio Website

> Paste everything below the line into Claude Code. It is self-contained: it includes the full content, the design direction, the tech stack, and the deployment setup. Anything I couldn't supply is marked clearly as a `TODO` placeholder for you to fill in.

---

## Role & Goal

You are building a personal portfolio website for **William Nasoni**, a Full Stack & Mobile Developer based in Manchester, UK. The site must look polished and professional, load fast, and be **fully responsive — flawless on mobile, tablet, and desktop**. Build it end to end, set up the project, write all the code, and make sure it builds and runs cleanly.

Do not ask me to make design decisions you can reasonably make yourself — use good taste and the direction below. Where I've left a `TODO`, leave a clean, obvious placeholder I can swap later.

## Tech Stack & Constraints

- **Framework:** Next.js (latest stable), **App Router**, **TypeScript**.
- **Styling:** Tailwind CSS. Keep a small, consistent design system (spacing scale, type scale, one accent colour). No CSS-in-JS libraries.
- **Output:** Configure for **static export** (`output: 'export'` in `next.config`) so it deploys cheaply and reliably as a static site. Avoid features that require a Node server at runtime.
- **Hosting target:** **Netlify** (free tier). Include a `netlify.toml` with the correct build command and publish directory, and make sure the static export works on Netlify out of the box.
- **No heavy dependencies.** Use small, well-maintained libraries only if they clearly earn their place (e.g. a lightweight icon set like `lucide-react`). Prefer native solutions.
- Use **mobile-first** Tailwind breakpoints. Test the layout mentally at ~360px, 768px, 1024px, and 1440px and make sure nothing overflows, crowds, or breaks.

## Design Direction

**Aesthetic: clean, minimal, light theme.** Think calm, confident, lots of whitespace, strong typography, restrained colour. Professional enough to send to enterprise clients and recruiters.

- **Theme:** Light. Near-white background, dark charcoal text (not pure black), one tasteful accent colour (pick something professional — a deep blue or teal works well; choose one and use it consistently for links, buttons, and small highlights).
- **Typography:** A clean, modern sans-serif (e.g. Inter or similar via `next/font`). Clear hierarchy — large confident headings, comfortable body line-height, generous section spacing.
- **Layout:** Single-page site with smooth-scrolling anchored sections and a sticky, minimal top navigation. Section order below.
- **Motion:** Subtle and tasteful only — gentle fade/slide-in on scroll, smooth hover states. Nothing flashy or distracting. Respect `prefers-reduced-motion`.
- **No images required for v1.** Design the layout so it looks complete and intentional **without** photos. Where a profile photo or project screenshots would go, leave a tidy, styled placeholder (e.g. an initials avatar block, and neutral placeholder cards for projects) that I can replace later without breaking the layout.

## Site Structure (single page, anchored sections)

1. **Sticky nav** — name/logo on the left, links to sections on the right (About, Projects, Experience, Skills, Contact). Collapses to a clean mobile menu (hamburger) on small screens.
2. **Hero** — name, title, one-line value proposition, primary CTA buttons ("View Work" → projects, "Get in touch" → contact), and a **"Download CV"** button (links to `/cv/William-Nasoni-CV.pdf` — `TODO: I'll add the PDF`).
3. **About** — written in **William's own first-person voice** (full copy in the content section — use it largely as-is, it's deliberately personal). Pair it with a short highlights row (years of experience, notable clients, web + mobile) and a profile-photo placeholder.
4. **Intro Video** — a section for a short video of William introducing himself. For now, render a clean, responsive video placeholder (16:9, rounded, styled to match the site) with a play-button affordance and a `TODO` note. Build it so I can later drop in either a local `/video/intro.mp4` (use a native `<video>` element with `controls`, `playsInline`, no autoplay-with-sound) **or** an embed URL (YouTube/Vimeo) by changing one variable. Lazy-load it so it never hurts page performance. It must stay fully responsive on mobile.
5. **Featured Projects** — the curated projects below, as cards. Each card: title, client, year, tech tags, and the 1–2 most impressive bullet points. Keep it scannable.
6. **Selected Additional Work** — a compact list (title · client · tech) of the remaining projects, lower visual weight than the featured cards.
7. **Experience** — work history as a clean timeline or stacked list.
8. **Skills** — grouped by category (see below), displayed as neat tag groups or columns. Don't show the year numbers as bars/percentages — just clean groupings.
9. **Languages** — compact (no Education section).
10. **Contact** — short intro line, a **working contact form** (Netlify Forms — see setup below), plus visible **email** and **LinkedIn / GitHub** links.
11. **Footer** — name, copyright year (dynamic), and social links.

## Contact Form — Netlify Forms setup (important)

Use **Netlify Forms** (free on all Netlify plans). Because this is a Next.js static export, Netlify's build-time bot won't detect a React-rendered form on its own. Implement the standard workaround:

- Add a **hidden static HTML form** that Netlify can detect at build time — create `public/__forms.html` containing a plain HTML `<form name="contact" netlify netlify-honeypot="bot-field">` with the same field names as the real form (`name`, `email`, `message`, plus the hidden `bot-field`).
- In the React contact component, build a normal controlled form that submits via `fetch` (POST, `application/x-www-form-urlencoded`) to `/__forms.html`, including the hidden `form-name=contact` field and a honeypot `bot-field`.
- Show clear success and error states after submission. Validate required fields and email format client-side.
- Submissions should appear in the Netlify dashboard under Forms. Add a comment in the code reminding me to enable email notifications in Netlify.

If you believe a cleaner, currently-recommended Netlify approach exists, you may use it instead — but it must work with a static export, require no paid services, and need no API keys from me.

## Quality Requirements

- **Responsive:** mobile-first, tested across the breakpoints above. No horizontal scroll, no broken layouts, tap targets comfortable on mobile.
- **Accessible:** semantic HTML, proper heading order, alt text on any imagery, keyboard-navigable nav and form, visible focus states, sufficient colour contrast (WCAG AA), `prefers-reduced-motion` respected.
- **SEO:** sensible `<title>`, meta description, Open Graph + Twitter card tags, favicon, and a basic `sitemap`/`robots`. Use Next.js metadata APIs.
- **Performance:** lightweight, no layout shift, fonts via `next/font`, lazy-load anything heavy. Aim for a strong Lighthouse score.
- **Code quality:** clean, well-organised components; sensible file structure; a short `README.md` explaining how to run locally, where to drop the CV PDF / photo / screenshots, and how to deploy to Netlify.

## Placeholders to leave for me (mark each clearly with `TODO`)

- **GitHub URL** — I'll provide it; use `https://github.com/TODO` as a placeholder and make it easy to find/replace.
- **Profile photo** — styled placeholder for now.
- **Project screenshots** — neutral placeholder cards for now.
- **CV PDF** — link to `/cv/William-Nasoni-CV.pdf`; leave a note that I'll add the file.
- **Intro video** — I'll add this later. Default to a styled placeholder, and make the source swappable via a single variable (local `/video/intro.mp4` **or** a YouTube/Vimeo embed URL).
- **Do NOT display a phone number** anywhere on the public site.

---

## CONTENT (use exactly this)

### Identity
- **Name:** William Nasoni
- **Title / role:** Full Stack Developer · Mobile Application Developer · Systems Engineer
- **Location:** Manchester, UK
- **Email:** william5nasoni@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/william-nasoni
- **GitHub:** `TODO` (placeholder for now)

### Hero one-liner (you may refine the wording, keep the meaning)
Full Stack & Mobile Developer building scalable web and mobile applications for organisations around the world — the World Bank, Corus International, and government agencies across Africa.

> **NOTE on years of experience:** The CV says "5+ years"; the LinkedIn bio below says "7 years." Use **7 years** consistently across the site (hero, highlights, About) since the personal bio is the more current source — but flag this in the README so I can confirm.

### About — use William's own first-person voice (largely as-is)
This is the personal bio; keep its voice and personality. You may lightly adjust line breaks/paragraphing for the web, but do not corporate-ify it.

> Software development is like being an artist — you start with nothing and build something people actually use.
>
> I'm self-taught, and what started as a joke has turned into 7 years of delivering production systems for organisations across the world — the World Bank, Corus International, and government agencies across Africa. My code has gone where I haven't, and I'm proud of that.
>
> What keeps me going is curiosity. That's how I've gone from Java and C# to Kotlin, Flutter, and writing JavaScript and TypeScript every day — and I'm still learning. Right now I'm exploring how to leverage AI in the products I build, because I think that's where things get interesting.
>
> Some of my best work has come from the hardest situations — inheriting broken legacy systems, stepping into complex problems mid-flight, and delivering under pressure. That's where I'm most comfortable.
>
> I work across the full stack and mobile — Angular, Node.js, Flutter, Vue.js, Laravel, Docker — and I adapt to whatever the project needs.

**Highlights row (short stats):** 7 years experience · Web + Mobile · Clients incl. World Bank, Corus International, government ministries.

**Optional pull-quote for design emphasis:** "My code has gone where I haven't, and I'm proud of that." — you may surface this as a styled callout near the About or hero.

### Featured Projects (curated — show as cards)

**1. Corus 3D Platform — Flutter Rebuild**
Mobile Developer (Contract) · Client: Corus International · via CGA Technologies UK · Oct 2024 – Present · *Flutter · Dart · Android · iOS*
- Led the full rebuild of the Corus 3D data-capture platform from Java/Android to Flutter, enabling a single cross-platform codebase for Android and iOS.
- Re-architected the app around Flutter's widget system, improving UI consistency, performance, and long-term maintainability while reaching feature parity with the original.

**2. Teacher Management Information System (TMIS)**
Full Stack Web Developer (Contract) · Client: Teaching Service Commission (TSC), Sierra Leone · 2023 – 2024 · *Vue.js · Laravel · GraphQL · Docker*
- Built and maintained a national Teacher Management Information System used by government education administrators.
- Designed real-time dashboards, dynamic charts, and an automated report-generation system to support data-driven decision-making across the ministry.

**3. Malawi Education Sector Improvement Project**
Technical Lead (Contract) · Client: World Bank · 2021 · *PHP · JavaScript*
- Led technical delivery of an education data-management application for the World Bank.
- Developed new system modules, built Excel data-export reporting, deployed to production, and trained government officers on system usage.

**4. MarketSA — Call Centre Campaign Platform**
Full Stack Developer (Contract) · South Africa (Remote) · 2024 – Present · *Angular · Node.js · MSSQL · Docker*
- Architected a dynamic call-centre campaign management platform that lets teams configure and deploy new campaign frontends from a single unified system — eliminating per-campaign rebuilds.
- Built a dynamic forms-and-calculations engine so business teams configure campaign logic independently, and migrated a legacy Microsoft Access frontend to a modern Angular app.

**5. Perivoli Early Childhood Development Data System**
Lead Developer (Contract) · Client: Perivoli School Trust · 2020 – Present · *Node.js · Vue.js · Android*
- Led full stack development of a tablet-based data collection and management application.
- Built RESTful APIs and data models in Node.js, the Vue.js frontend, and optimised the Android app for fast, reliable data synchronisation.

### Selected Additional Work (compact list — title · client · tech)
- **Field Sales App** — Telekom Networks Malawi (TNM), 2023 — *Android · Kotlin · REST API* — QR scanning for nationwide field agents, MVVM + Dagger Hilt.
- **Corus 3D MERL Platform** — Corus International, 2021–2022 — *Java · Android* — global monitoring/evaluation data-capture app.
- **Education Development Trust MERL Platform** — Education Development Trust, Ethiopia, 2021–2022 — *Java · Android* — dynamic form-based data collection for low-connectivity environments.
- **SICOI Information Management System** — Sempha Investments, 2020 — *ASP.NET · C# · Vue.js · SQL Server* — improved record-keeping efficiency by 80%.
- **Declaration System** — Office of Director of Public Officers Declarations, 2020 — *ASP.NET MVC · C# · SQL Server*.
- **Gons Payment System** — via Computer Accountant, 2019–2020 — *VB.NET · Windows Forms · SQL Server · Sage 50* — multi-tier payment app with a 3-level approval workflow and automated Sage 50 integration.

### Work Experience (timeline / stacked list)
- **CGA Technologies UK** — Full Stack Developer / IT Associate (Contract) · Remote · 2020 – Present. Client-facing role delivering full stack web apps for UK clients using modern JS frameworks; CI/CD pipelines, Docker, AWS deployment, Linux server/hosting/DNS management.
- **MarketSA** — Full Stack Developer (Contract) · South Africa (Remote) · 2024 – Present. Angular · Node.js · MSSQL · Docker (see featured project above).
- **Computer Accountant** — Software Developer (Full-time) · Malawi · 2019 – 2020. Accounting & business-management software for SME clients; SQL-driven features; UI/UX and new modules.
- **Trinitatis Tech** — Full Stack Web Developer (Full-time) · Malawi · 2018 – 2019. Full stack web apps, frontend + backend APIs, database design and deployment.

### Skills (group exactly like this; clean tag groups, no percentage bars)
- **Frontend:** Angular, React, Vue.js, JavaScript / TypeScript, Bootstrap / Tailwind
- **Backend:** Node.js, PHP / Laravel, C# / ASP.NET MVC, RESTful API design, GraphQL
- **Mobile:** Flutter / Dart, Java (Android), Kotlin (Android)
- **Databases:** MSSQL / SQL Server, PostgreSQL / MySQL, MongoDB
- **DevOps & Tooling:** Docker, CI/CD pipelines, AWS, Linux, Git / GitHub / GitLab, npm / Vite / Webpack
- **Ways of working:** Agile / Scrum, UI/UX design, Hosting & deployment

### Languages
- English — Fluent (spoken & written)
- Chichewa — Native

### Personal Attributes (optional small row in About or footer)
Team player · Excellent communicator · Self-starter · Strong leadership · Problem solver · Attention to detail

---

## Deliverables
1. A complete, runnable Next.js + TypeScript + Tailwind project, statically exportable.
2. `netlify.toml` configured for the static export.
3. The Netlify Forms contact form wired up per the setup above.
4. A `README.md` with: how to run locally, where to drop the CV PDF / profile photo / project screenshots / intro video (and how to switch the video between a local file and a YouTube/Vimeo embed), how to set the GitHub URL, and how to deploy to Netlify.
5. Clean, accessible, responsive, SEO-ready code that builds with no errors.

Build it now.

