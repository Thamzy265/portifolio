// Single source of truth for site content + config.
// Edit values here to update content across the site.

export const GITHUB_URL = 'https://github.com/thamzy265';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/william-nasoni';
export const EMAIL = 'william5nasoni@gmail.com';
export const CV_PATH = '/cv/William-Nasoni-CV.pdf'; // TODO: drop the PDF here.

// Profile photo — set to null to show the styled "WN" initials placeholder instead.
export const PROFILE_PHOTO: string | null = '/profile.jpg';

// Intro video config — swap source to switch between local file and embed.
// type: 'local' → native <video> with /video/intro.mp4
// type: 'embed' → <iframe> with YouTube/Vimeo embed URL
export const INTRO_VIDEO: {
  type: 'local' | 'embed' | 'placeholder';
  src: string;
  poster?: string;
} = {
  type: 'placeholder', // TODO: change to 'local' or 'embed' once a video is ready.
  src: '/video/intro.mp4',
  // For embed example: type: 'embed', src: 'https://www.youtube.com/embed/VIDEO_ID'
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#industries', label: 'Industries' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const;

export const INDUSTRIES = [
  {
    id: 'education',
    name: 'Education',
    headline: { value: '300+', label: 'Schools served' },
    build:
      'Data-management and reporting systems for ministries, schools, and development organisations — national teacher registries, school and early-childhood data platforms, and tablet-based field data collection that works in low-connectivity settings.',
    proof:
      'A national system covering 300+ schools, a paper-to-digital data platform running in 3 countries, and systems delivered for the World Bank and international education organisations.',
  },
  {
    id: 'finance',
    name: 'Finance',
    headline: { value: '3-level', label: 'Approval workflow' },
    build:
      'Payment and accounting systems — multi-level approval workflows, automated accounting-system integration, and compliant document generation such as tax certificates, bank letters, and cheques.',
    proof:
      'End-to-end payment processing with a 3-level approval workflow and automated Sage 50 integration — no manual re-entry.',
  },
  {
    id: 'customer-engagement',
    name: 'Call Centre & Customer Engagement',
    headline: { value: '600+', label: 'Agents served' },
    build:
      'Dynamic campaign-management platforms that let teams configure and launch new campaigns without rebuilding anything — plus call-QA, audit trails, and agent scorecards so managers can track agent performance on calls.',
    proof:
      'A unified platform serving 600+ agents — campaign launches cut from 3–5 days to hours, ~15 separate systems consolidated into one.',
  },
] as const;

export const CAPABILITIES = [
  {
    title: 'Analytics & reporting',
    body:
      'Dashboards, charts, and real-time reports that turn raw operational data into decisions — including replacing manual ministry report compilation with on-demand reporting.',
  },
  {
    title: 'Mobile data capture',
    body:
      'Android and Flutter apps that collect data in the field — offline-first, low-connectivity-ready — and feed straight into the dashboards. I build both ends.',
  },
  {
    title: 'Legacy modernisation',
    body:
      'Rebuilding outdated systems to modern standards: a Microsoft Access frontend used by 600+ agents migrated to Angular; a Java/Android platform rebuilt in Flutter, consolidating 2 codebases into 1.',
  },
  {
    title: 'Configurable platforms',
    body:
      'Dynamic forms and configuration engines so non-technical teams run systems themselves — cutting developer involvement per campaign by ~90%.',
  },
  {
    title: 'Automation & documents',
    body:
      'One-click generation of compliant documents and reports — Excel exports, tax certificates, cheques, formatted bank letters.',
  },
  {
    title: 'System integration',
    body:
      'Making separate systems talk to each other (e.g. payments flowing straight into Sage 50) so data moves without manual re-entry.',
  },
  {
    title: 'End-to-end delivery',
    body:
      'Database → API → web → mobile → deployment (Docker, CI/CD, AWS). From nothing to live, in peer-reviewed, QA-driven teams.',
  },
] as const;

export const EXPERIENCE = [
  {
    company: 'CGA Technologies UK',
    role: 'Full Stack Developer / IT Associate (Contract)',
    location: 'Remote',
    period: '2020 – Present',
    summary:
      'Delivering full stack web and mobile software for clients worldwide using modern JS frameworks; CI/CD pipelines, Docker, AWS deployment, Linux server/hosting/DNS management.',
  },
  {
    company: 'MarketSA',
    role: 'Full Stack Developer (Contract)',
    location: 'Remote',
    period: '2024 – Present',
    summary:
      'Angular · Node.js · MSSQL · Docker. Call-centre campaign management platform and dynamic forms engine.',
  },
  {
    company: 'Computer Accountant',
    role: 'Software Developer (Full-time)',
    location: 'Malawi',
    period: '2019 – 2020',
    summary:
      'Accounting & business-management software for SME clients; SQL-driven features; UI/UX and new modules.',
  },
  {
    company: 'Trinitatis Tech',
    role: 'Full Stack Web Developer (Full-time)',
    location: 'Malawi',
    period: '2018 – 2019',
    summary:
      'Full stack web apps, frontend + backend APIs, database design and deployment.',
  },
] as const;

// Selected work — understated, supporting evidence only.
// Lead with what each thing IS; names kept light.
export const SELECTED_WORK = [
  {
    what: 'National Teacher Management Information System',
    detail: '300+ schools; real-time dashboards, teacher licensing module, and on-demand ministry reporting.',
    tech: ['Vue.js', 'Laravel', 'GraphQL', 'Docker'],
  },
  {
    what: 'Cross-platform field data-capture app rebuild (Java/Android → Flutter)',
    detail: '2 codebases consolidated into 1, adding iOS support; delivered for an international development organisation.',
    tech: ['Flutter', 'Dart'],
  },
  {
    what: 'Education data-management application',
    detail: 'Near-real-time monitoring app, dashboard, and a Ministry-hosted community platform; delivered for the World Bank.',
    tech: ['PHP', 'JavaScript'],
  },
  {
    what: 'Call-centre campaign management platform',
    detail: '600+ agents, launches cut from 3–5 days to hours, ~15 systems consolidated into one; call-QA, audit, and agent scorecard modules.',
    tech: ['Angular', 'Node.js', 'MSSQL', 'Docker'],
  },
  {
    what: 'Tablet-based early-childhood data system',
    detail: 'Replaced paper-based collection across 3 countries, publishing data in real time as it\'s collected.',
    tech: ['Node.js', 'Vue.js', 'Android'],
  },
  {
    what: 'Multi-tier payment system',
    detail: '3-level approval workflow with automated accounting integration and document generation.',
    tech: ['VB.NET', 'SQL Server', 'Sage 50'],
  },
] as const;

export const SKILLS = [
  {
    group: 'Frontend',
    items: ['Angular', 'React', 'Vue.js', 'JavaScript / TypeScript', 'Bootstrap / Tailwind'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'PHP / Laravel', 'C# / ASP.NET MVC', 'RESTful API design', 'GraphQL'],
  },
  {
    group: 'Mobile',
    items: ['Flutter / Dart', 'Java (Android)', 'Kotlin (Android)'],
  },
  {
    group: 'Databases',
    items: ['MSSQL / SQL Server', 'PostgreSQL / MySQL', 'MongoDB'],
  },
  {
    group: 'DevOps & Tooling',
    items: ['Docker', 'CI/CD pipelines', 'AWS', 'Linux', 'Git / GitHub / GitLab', 'npm / Vite / Webpack'],
  },
  {
    group: 'Ways of working',
    items: ['Agile / Scrum', 'UI/UX design', 'Hosting & deployment'],
  },
] as const;

export const PERSONAL_ATTRIBUTES = [
  'Team player',
  'Excellent communicator',
  'Self-starter',
  'Strong leadership',
  'Problem solver',
  'Attention to detail',
] as const;
