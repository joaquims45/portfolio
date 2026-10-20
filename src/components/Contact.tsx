import { useLanguage } from '../i18n';
import { LINKS } from '../data/links';
import { ExternalLink, Reveal } from './ui/primitives';

export default function Contact() {
  const { t } = useLanguage();
  const h = t.contact.heading;

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-12 md:pt-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[13px] tracking-[0.2em] text-signal">06 — {t.contact.title}</p>
          <h2
            id="contact-title"
            className="mt-8 font-serif tracking-tight text-ink"
            style={{ fontSize: 'clamp(36px, 6vw, 96px)', lineHeight: 0.95 }}
          >
            {h[0]} {h[1]}
            <br />
            <span className="text-ink/50">
              {h[2]} {h[3]}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-14 flex flex-col gap-8">
          <a
            href={`mailto:${LINKS.email}`}
            className="link-rule w-fit break-all font-mono text-ink transition-colors hover:text-signal"
            style={{ fontSize: 'clamp(15px, 2vw, 28px)' }}
          >
            {LINKS.email}
          </a>
          <div className="flex flex-wrap items-center gap-x-10">
            <ExternalLink href={LINKS.github}>GITHUB</ExternalLink>
            <ExternalLink href={LINKS.linkedin}>LINKEDIN</ExternalLink>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 flex max-w-[1440px] items-end justify-between border-t border-line px-6 py-8 md:px-12 lg:px-16">
        <p className="font-mono text-[13px] leading-5 tracking-[0.2em] text-dim">
          JOAQUIN SCHMIDT
          <br />
          {t.contact.footerRole}
        </p>
        <p className="font-mono text-[13px] tracking-[0.2em] text-dim">2026</p>
      </footer>
    </section>
  );
}
