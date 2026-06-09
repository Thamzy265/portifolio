// Single source of truth for site content + config.
// Edit values here to update content across the site.

// TODO: replace with William's actual GitHub URL when available.
export const GITHUB_URL = 'https://github.com/TODO';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/william-nasoni';
export const EMAIL = 'william5nasoni@gmail.com';
export const CV_PATH = '/cv/William-Nasoni-CV.pdf'; // TODO: drop the PDF here.

// Intro video config — swap source to switch between local file and embed.
// type: 'local' uses a native <video> element with /video/intro.mp4 (or whatever path).
// type: 'embed' uses an <iframe> with an embed URL (YouTube/Vimeo).
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
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;

export const FEATURED_PROJECTS = [
  {
    title: 'Corus 3D Platform — Flutter Rebuild',
    role: 'Mobile Developer (Contract)',
    client: 'Corus International · via CGA Technologies UK',
    period: 'Oct 2024 – Present',
    tech: ['Flutter', 'Dart', 'Android', 'iOS'],
    bullets: [
      "Led the full rebuild of the Corus 3D data-capture platform from Java/Android to Flutter, enabling a single cross-platform codebase for Android and iOS.",
      "Re-architected the app around Flutter's widget system, improving UI consistency, performance, and long-term maintainability while reaching feature parity with the original.",
    ],
  },
  {
    title: 'Teacher Management Information System (TMIS)',
    role: 'Full Stack Web Developer (Contract)',
    client: 'Teaching Service Commission (TSC), Sierra Leone',
    period: '2023 – 2024',
    tech: ['Vue.js', 'Laravel', 'GraphQL', 'Docker'],
    bullets: [
      'Built and maintained a national Teacher Management Information System used by government education administrators.',
      'Designed real-time dashboards, dynamic charts, and an automated report-generation system to support data-driven decision-making across the ministry.',
    ],
  },
  {
    title: 'Malawi Education Sector Improvement Project',
    role: 'Technical Lead (Contract)',
    client: 'World Bank',
    period: '2021',
    tech: ['PHP', 'JavaScript'],
    bullets: [
      'Led technical delivery of an education data-management application for the World Bank.',
      'Developed new system modules, built Excel data-export reporting, deployed to production, and trained government officers on system usage.',
    ],
  },
  {
    title: 'MarketSA — Call Centre Campaign Platform',
    role: 'Full Stack Developer (Contract)',
    client: 'South Africa (Remote)',
    period: '2024 – Present',
    tech: ['Angular', 'Node.js', 'MSSQL', 'Docker'],
    bullets: [
      'Architected a dynamic call-centre campaign management platform that lets teams configure and deploy new campaign frontends from a single unified system — eliminating per-campaign rebuilds.',
      'Built a dynamic forms-and-calculations engine so business teams configure campaign logic independently, and migrated a legacy Microsoft Access frontend to a modern Angular app.',
    ],
  },
  {
    title: 'Perivoli Early Childhood Development Data System',
    role: 'Lead Developer (Contract)',
    client: 'Perivoli School Trust',
    period: '2020 – Present',
    tech: ['Node.js', 'Vue.js', 'Android'],
    bullets: [
      'Led full stack development of a tablet-based data collection and management application.',
      'Built RESTful APIs and data models in Node.js, the Vue.js frontend, and optimised the Android app for fast, reliable data synchronisation.',
    ],
  },
] as const;

export const ADDITIONAL_WORK = [
  {
    title: 'Field Sales App',
    client: 'Telekom Networks Malawi (TNM)',
    year: '2023',
    tech: ['Android', 'Kotlin', 'REST API'],
    note: 'QR scanning for nationwide field agents, MVVM + Dagger Hilt.',
  },
  {
    title: 'Corus 3D MERL Platform',
    client: 'Corus International',
    year: '2021–2022',
    tech: ['Java', 'Android'],
    note: 'Global monitoring/evaluation data-capture app.',
  },
  {
    title: 'Education Development Trust MERL Platform',
    client: 'Education Development Trust, Ethiopia',
    year: '2021–2022',
    tech: ['Java', 'Android'],
    note: 'Dynamic form-based data collection for low-connectivity environments.',
  },
  {
    title: 'SICOI Information Management System',
    client: 'Sempha Investments',
    year: '2020',
    tech: ['ASP.NET', 'C#', 'Vue.js', 'SQL Server'],
    note: 'Improved record-keeping efficiency by 80%.',
  },
  {
    title: 'Declaration System',
    client: 'Office of Director of Public Officers Declarations',
    year: '2020',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server'],
    note: '',
  },
  {
    title: 'Gons Payment System',
    client: 'via Computer Accountant',
    year: '2019–2020',
    tech: ['VB.NET', 'Windows Forms', 'SQL Server', 'Sage 50'],
    note: 'Multi-tier payment app with a 3-level approval workflow and automated Sage 50 integration.',
  },
] as const;

export const EXPERIENCE = [
  {
    company: 'CGA Technologies UK',
    role: 'Full Stack Developer / IT Associate (Contract)',
    location: 'Remote',
    period: '2020 – Present',
    summary:
      'Client-facing role delivering full stack web apps for UK clients using modern JS frameworks; CI/CD pipelines, Docker, AWS deployment, Linux server/hosting/DNS management.',
  },
  {
    company: 'MarketSA',
    role: 'Full Stack Developer (Contract)',
    location: 'South Africa (Remote)',
    period: '2024 – Present',
    summary:
      'Angular · Node.js · MSSQL · Docker. Architected the dynamic campaign management platform (see featured project).',
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

export const LANGUAGES = [
  { name: 'English', level: 'Fluent (spoken & written)' },
  { name: 'Chichewa', level: 'Native' },
] as const;

export const PERSONAL_ATTRIBUTES = [
  'Team player',
  'Excellent communicator',
  'Self-starter',
  'Strong leadership',
  'Problem solver',
  'Attention to detail',
] as const;
