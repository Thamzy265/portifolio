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
  { href: '/projects', label: 'Projects' },
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
    headline: { value: '300+', label: 'Agents served' },
    build:
      'Dynamic campaign-management platforms that let teams configure and launch new campaigns without rebuilding anything — plus call-QA, audit trails, and agent scorecards so managers can track agent performance on calls.',
    proof:
      'A platform serving 300+ agents, moved off per-PC installs into the browser so every agent runs the same version, with campaign launches cut from 3–5 days to hours.',
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
      'Rebuilding outdated systems to modern standards: a Microsoft Access frontend used by 300+ agents migrated to Angular; a Java/Android platform rebuilt in Flutter, consolidating 2 codebases into 1.',
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
    period: '2024 – Jul 2026',
    summary:
      'Angular · Node.js · MSSQL · Docker. Moved a legacy Microsoft Access desktop install to browser-based Angular/Node.js front ends, plus a dynamic forms engine.',
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
    detail: '300+ agents moved from a per-campaign desktop install to the browser; launches cut from 3–5 days to hours; call-QA, audit, and agent scorecard modules.',
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

// ─── /projects page ──────────────────────────────────────────────────────────

// Walkthrough of the campaign platform. Local file so there is no third-party
// embed to load; the player only fetches it once the visitor presses play.
export const PROJECT_VIDEO = {
  src: '/video/campaign-platform-walkthrough.mp4',
  poster: '/video/campaign-platform-poster.jpg',
} as const;

export const FEATURED_PROJECT = {
  title: 'MarketSA — call-centre campaign platform',
  period: '2024–Jul 2026',

  story: [
    {
      label: 'Situation',
      body:
        'A call centre with 300+ agents running on a legacy Microsoft Access front end \u2014 a separate executable per campaign, installed on every agent\u2019s PC. The brief was to move it to a web-based system.',
    },
    {
      label: 'What I found',
      body:
        'Keeping those installs current was the running cost. IT had to touch each machine to update it, and PCs drifted out of date \u2014 so agents on the same campaign could be working on different versions of the application without anyone noticing.',
    },
    {
      label: 'What I built',
      body:
        'Angular/TypeScript front ends over Node.js REST APIs and MSSQL, served in the browser instead of installed per machine; a configurable forms-and-calculations engine so non-technical teams set up campaign logic themselves; call-QA, audit and agent-scorecard dashboards.',
    },
    {
      label: 'What changed',
      body:
        'Nothing to install and nothing to keep in step: a change ships once and every agent has it at their next page load, so the outdated-client problem disappeared and IT stopped updating desks one at a time. Opening a new site or onboarding an agent became a login rather than a visit, with no per-machine Windows or Access dependency to carry. New-campaign launch time fell from 3–5 days to hours and developer involvement per campaign dropped by roughly 90%.',
    },
  ],
} as const;

// The platform the walkthrough video shows. This is NOT the MarketSA system —
// it is a separate, multi-campaign build. Everything below is verifiable from
// the running application; the TODOs are the facts only you can supply.
export const OWN_PROJECT = {
  // TODO: confirm the name you want shown publicly.
  title: 'Akasi CRM — multi-campaign call-centre platform',
  // TODO: add the period, e.g. '2026–present'.
  period: '',
  status:
    'A product I am building, inspired by the work I did at MarketSA: one platform that runs any number of campaigns from configuration, instead of a separate build for each.',
  videoCaption: 'A short walkthrough of the platform.',
  videoNote:
    'Recorded against generated demo data — names, ID numbers and bank details are invented.',
  points: [
    'An Angular front end over Node.js APIs, where each campaign points at its own database — SQL Server or PostgreSQL.',
    'A form builder where an admin picks the campaign database table and maps each field to a real column, so captured leads write straight back.',
    'QA and audit scorecards configured per campaign, with the pass/fail rules set by an admin rather than in code.',
    'Fields an admin marks sensitive are masked for reviewers; revealing one returns a single value and writes an audit record of who looked, at what, and when.',
  ],
} as const;

// Client work delivered through CGA Technologies. The code belongs to the
// clients, so each entry links to the public project page instead.
export const CLIENT_PROJECTS = [
  {
    name: 'Perivoli Early Childhood Development Data System',
    tech: ['Node.js', 'Vue.js', 'Android', 'AWS'] as string[],
    client: 'Perivoli Schools Trust',
    country: 'Malawi / Namibia / Zambia',
    period: '2020–2025',
    href: 'https://cgatechnologies.org.uk/projects/perivoli-early-childhood-development-data-collection-and-management-reforms-malawi-namibia',
    story:
      'The Trust trains nursery teachers in three countries and needed one standard way to collect and report training data as it grew. The brief was to digitise paper forms; the real need was for head office to see training activity as it happened. We built an offline-first tablet app and a database that publishes results to the Trust\u2019s website in real time, and digitised 5,000+ historic paper records. Forms were built as configurable templates so partner staff could change them without a developer.',
    role:
      'Lead developer for the Node.js APIs, Vue.js front end and Android capture app on AWS (ECS, RDS, S3, Lambda); ran UAT, trained partner teams, wrote the SOPs.',
  },
  {
    name: 'Teacher Management Information System (TMIS)',
    tech: ['Vue.js', 'Laravel', 'GraphQL', 'MySQL'] as string[],
    client: 'Teaching Service Commission (World Bank-funded)',
    country: 'Sierra Leone',
    period: '2023–2024',
    href: 'https://cgatechnologies.org.uk/projects/sierra-leone-teacher-management-information-system-tmis',
    story:
      'A national platform replacing paper workflows for 36,000+ payroll teachers, where a leave or transfer request used to mean a physical trip to headquarters. Live since January 2024 with 23,000+ teachers registered, 9,700+ licensing exams passed and 3,700 teachers recruited onto payroll through it.',
    role:
      'Full stack developer (Vue.js, Laravel, GraphQL, MySQL). Built the teacher licensing module to the Commission\u2019s specification, the SQL and analytics behind the departmental dashboards, and automated ministry reports.',
  },
  {
    name: 'Wi De Ya — One Tablet Per School',
    tech: ['Android', 'SQL'] as string[],
    client: 'Teaching Service Commission (World Bank-funded)',
    country: 'Sierra Leone',
    period: '2022–2023',
    href: 'https://cgatechnologies.org.uk/projects/wi-de-ya-one-tablet-school-sierra-leone',
    story:
      'A national attendance system where every school leader records daily teacher and pupil attendance on an offline-capable tablet that syncs to a secure database and public dashboard; rolled out to 300 primary schools and linked to teacher payroll records.',
    role:
      'Developed the data-capture app and the MIS dashboard and reports consolidating attendance data across schools and regions, giving the Ministry its first national view of attendance.',
  },
  {
    name: 'Social Cash Transfer Programme MIS',
    tech: ['Java', 'Spring Boot', 'MySQL'] as string[],
    client: 'Ministry of Gender (KfW/EU-funded)',
    country: 'Malawi',
    period: '2020–2023',
    href: 'https://cgatechnologies.org.uk/projects/social-cash-transfer-programme-sctp-lot-2-rebuilding-sctp-management-information-system',
    story:
      'Rebuild of the system behind a national cash transfer programme reaching 300,000+ households, adding an integrated grievance and case-management module linked to a call centre and real-time coverage indicators.',
    role:
      'Full stack developer on the Spring Boot/MySQL system; built the organisation and participant modules managing implementing partners and enrolled households.',
  },
  {
    name: 'Malawi Education Sector Improvement Programme',
    tech: ['PHP', 'JavaScript', 'MySQL'] as string[],
    client: 'Ministry of Education',
    country: 'Malawi',
    period: '2021',
    href: 'https://cgatechnologies.org.uk/projects/malawi-education-sector-improvement-programme-mesip-development-attendance-tracking-app',
    story:
      'A tablet-based real-time monitoring system for zonal officers covering 1,200 primary schools (21% of the country), and a Community Dialogue Platform through which 150 school communities raise issues with the Ministry by SMS and voice.',
    role:
      'Technical lead directing delivery of the monitoring app, dashboard and Excel reporting; trained ministry officers to run it without developer support.',
  },
  {
    name: 'PROSPER Monitoring & Reporting MIS',
    // TODO: stack not named on this page or in the CV. Add it here and
    // the chips appear automatically.
    tech: [] as string[],
    client: 'Concern Worldwide',
    country: 'Malawi',
    // TODO: PROSPER dates unknown. Fill in the years here (e.g. '2021–2023');
    // left empty so nothing broken shows on the page in the meantime.
    period: '',
    href: 'https://cgatechnologies.org.uk/projects/promotion-sustainable-partnerships-empowered-resilience-programme-prosper-development',
    story:
      'A shared reporting platform for a resilience programme covering 1.2 million people, letting five INGO and four UN partners submit field data and track progress against programme indicators.',
    role:
      'Built the MIS data-capture system through which partners submit their field data.',
  },
  {
    name: 'Monitoring, Evaluation & Learning Platform',
    tech: ['Java', 'Android'] as string[],
    client: 'Education Development Trust (FCDO-funded)',
    country: 'Ethiopia',
    period: '2021–2022',
    href: 'https://cgatechnologies.org.uk/projects/establish-monitoring-evaluation-and-learning-mel-platform',
    story:
      'A cloud-based M&E platform supporting the Ethiopian Ministry of Education, with a mobile app for offline entry and user-configurable dashboards, built as an open system the Ethiopian authorities own outright.',
    role:
      'Android developer on the offline-first capture app, in a four-person peer-reviewed team, building dynamic form schemas and sync.',
  },
  {
    name: '3D — CGA\u2019s field-to-insight data platform',
    tech: ['Flutter', 'Dart', 'GitHub Actions'] as string[],
    client: 'Corus International',
    country: '',
    period: 'Oct 2024–present',
    href: 'https://cgatechnologies.org.uk/3d',
    story:
      'CGA\u2019s product for development programmes: offline-first smart-form collection, submission review with a full audit trail, role-based permissions and real-time dashboards.',
    role:
      'Leading the rebuild of the mobile app in Flutter, merging the separate Android and iOS codebases into one, with GitHub Actions CI and automated tests.',
  },
] as const;
