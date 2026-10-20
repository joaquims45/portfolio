import type { CSSProperties } from 'react';
import { useLanguage } from '../i18n';
import { HeroGraph } from './ui/Graphs';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero.headline;
  const lines = [
    { text: `${h[0]} ${h[1]}`, className: 'text-ink' },
    { text: `${h[2]} ${h[3]}`, className: 'text-ink/60' },
    { text: `${h[4]} ${h[5]}`, className: 'text-signal' },
  ];

  return (
    <section id="hero" aria-label="Hero" className="bg-grid relative flex min-h-[100dvh] flex-col">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-28 pb-14 md:px-12 lg:px-16">
        <p className="mb-8 font-mono text-[13px] tracking-[0.26em] text-signal md:mb-12">{t.hero.role}</p>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-8">
            <h1 className="font-serif tracking-tight" style={{ fontSize: 'clamp(40px, 6.6vw, 104px)', lineHeight: 0.95 }}>
              {lines.map((l, i) => (
                <span key={l.text} className={`line-mask pb-[0.08em] ${l.className}`}>
                  <span style={{ '--line-delay': `${i * 120}ms` } as CSSProperties}>{l.text}</span>
                </span>
              ))}
            </h1>

            <p className="mt-10 max-w-xl text-[17px] leading-relaxed font-light text-muted md:text-[19px]">
              {t.human.bioParagraphs[1]}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 font-mono text-[13px] text-ink">
              {t.hero.badges.map((b) => (
                <li key={b} className="border border-line px-3 py-1.5">
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center gap-3 bg-signal px-6 font-mono text-[13px] font-medium tracking-[0.18em] text-bg transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.hero.ctaWork}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="link-rule inline-flex min-h-12 items-center font-mono text-[13px] tracking-[0.18em] text-ink transition-colors hover:text-signal"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-4 font-mono text-[13px] tracking-[0.22em] text-dim">{t.hero.archLabel}</p>
            <div className="max-w-[420px]">
              <HeroGraph label={t.hero.archLabel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
