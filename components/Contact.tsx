'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Section from './Section';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/site';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// NOTE: Submissions appear in the Netlify dashboard under Forms.
// Don't forget to enable email notifications in: Site → Forms → Form notifications.

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '', botField: '' });

  const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (form.botField) return; // bot trap silently passes
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and a short message.');
      setStatus('error');
      return;
    }
    if (!isEmail(form.email)) {
      setError('That email address looks off — could you double-check it?');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': form.botField,
      name: form.name,
      email: form.email,
      message: form.message,
    }).toString();

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm({ name: '', email: '', message: '', botField: '' });
    } catch {
      setError("Something went wrong sending your message. Please email me directly instead.");
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's talk."
      intro="Have a project in mind, a role to discuss, or just want to say hi? Drop a message — I read everything."
      className="bg-paper-alt"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="reveal space-y-5"
          noValidate
        >
          {/* Required by Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don&apos;t fill this out:{' '}
              <input
                name="bot-field"
                value={form.botField}
                onChange={(e) => setForm({ ...form, botField: e.target.value })}
              />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              name="name"
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              autoComplete="name"
              required
            />
            <Field
              id="email"
              name="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 block w-full rounded-lg border border-paper-line bg-paper px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none"
              placeholder="Tell me about your project, timeline, or what's on your mind…"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'} <Send size={15} />
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                <CheckCircle2 size={16} /> Thanks — I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && error && (
              <p
                role="alert"
                className="inline-flex items-center gap-2 text-sm font-medium text-red-700"
              >
                <AlertCircle size={16} /> {error}
              </p>
            )}
          </div>
        </form>

        <aside className="reveal space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Or reach me directly
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-accent"
              >
                <Mail size={16} className="text-accent" /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-accent"
              >
                <Linkedin size={16} className="text-accent" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ink-soft transition-colors hover:text-accent"
              >
                <Github size={16} className="text-accent" /> GitHub
              </a>
            </li>
          </ul>

          <p className="pt-4 text-sm text-ink-subtle">
            Based in Manchester, UK — working with clients worldwide.
          </p>
        </aside>
      </div>
    </Section>
  );
}

function Field({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  autoComplete,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 block w-full rounded-lg border border-paper-line bg-paper px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none"
      />
    </div>
  );
}
