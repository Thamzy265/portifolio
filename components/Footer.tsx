import { Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper-line bg-paper">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div className="space-y-1 text-sm text-ink-muted">
          <div>© {year} William Nasoni.</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
            Designed &amp; built by William Nasoni
          </div>
        </div>
        <ul className="flex items-center gap-1">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email William"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-alt hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-alt hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-alt hover:text-accent"
            >
              <Github size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
