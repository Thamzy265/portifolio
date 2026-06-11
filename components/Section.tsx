import { type HTMLAttributes, type ReactNode } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
  id?: string;
  eyebrow?: string;
  index?: string; // e.g. "01"
  title?: string;
  intro?: ReactNode;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  index,
  title,
  intro,
  children,
  className = '',
  ...rest
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-paper-line/70 py-20 sm:py-28 ${className}`}
      {...rest}
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        {(eyebrow || title) && (
          <div className="reveal mb-12 max-w-3xl sm:mb-14">
            {eyebrow && (
              <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {index && (
                  <span className="text-ink-subtle">{index}</span>
                )}
                <span className="inline-block h-px w-8 bg-accent" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tightish text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {intro}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
