import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

/** Scroll-reveal wrapper (transform + opacity; disabled by prefers-reduced-motion in CSS). */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.12);
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[13px] tracking-[0.2em] uppercase text-dim ${className}`}>{children}</span>
  );
}

/** Section frame: index rail on the left, content on the right (12-col editorial grid). */
export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-12 lg:px-16">
        <Reveal className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-[13px] tracking-[0.2em] text-signal">{index}</span>
            <h2
              id={`${id}-title`}
              className="mt-3 font-serif leading-[0.95] text-ink"
              style={{ fontSize: 'clamp(32px, 3.6vw, 56px)' }}
            >
              {title}
            </h2>
          </div>
        </Reveal>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-rule inline-flex min-h-11 items-center gap-2 font-mono text-[13px] tracking-[0.18em] text-ink transition-colors hover:text-signal ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-signal">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
