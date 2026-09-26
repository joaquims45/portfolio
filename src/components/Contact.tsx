import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Contact() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="min-h-[50vh] flex flex-col"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full py-16 md:py-20">

        {/* Section index */}
        <div className="flex items-baseline gap-6 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">06</span>
          <span
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            {t.contact.title}
          </span>
        </div>

        {/* Large prompt */}
        <div
          ref={ref}
          className="transition-all duration-800"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transitionDuration: '0.8s',
          }}
        >
          <h2
            className="font-serif text-ink leading-[0.9] mb-14 md:mb-16"
            style={{ fontSize: 'clamp(36px, 6vw, 92px)' }}
          >
            {t.contact.heading[0]}<br />
            {t.contact.heading[1]}<br />
            {t.contact.heading[2]}<br />
            <em className="not-italic text-ink/40">{t.contact.heading[3]}</em>
          </h2>

          {/* Email */}
          <a
            href="mailto:joaquinmarcosschmidt@gmail.com"
            className="group inline-block mb-12"
          >
            <p
              className="font-mono tracking-[0.06em] text-ink/55 hover:text-signal transition-colors duration-300"
              style={{ fontSize: 'clamp(13px, 1.4vw, 20px)' }}
            >
              joaquinmarcosschmidt@gmail.com
            </p>
            <div
              className="h-px mt-1 transition-all duration-300 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, rgba(200,144,58,0.6), transparent)',
                opacity: 0.3,
                width: '100%',
              }}
            />
          </a>

          {/* External links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/joaquims45"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.22em] text-ink/35 hover:text-ink/70 transition-colors duration-200 flex items-center gap-1.5"
            >
              GITHUB
              <span className="text-signal/60 text-[12px]">↗</span>
            </a>
            <span className="h-px w-5 bg-ink/12" />
            <a
              href="https://www.linkedin.com/in/joaquin-schmidt-13365120a/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.22em] text-ink/35 hover:text-ink/70 transition-colors duration-200 flex items-center gap-1.5"
            >
              LINKEDIN
              <span className="text-signal/60 text-[12px]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full py-6 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(236,231,222,0.06)' }}
      >
        <div>
          <p className="font-mono text-[9px] tracking-[0.22em] text-ink/25 leading-5">
            JOAQUIN SCHMIDT<br />
            {t.contact.footerRole}
          </p>
        </div>
        <p className="font-mono text-[9px] tracking-[0.2em] text-ink/20">
          2026
        </p>
      </div>
    </section>
  );
}
