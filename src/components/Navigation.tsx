import { useEffect, useState } from 'react';
import { useLanguage, type Language } from '../i18n';

const NAV_IDS = ['human', 'trace', 'education', 'systems', 'work', 'contact'] as const;
type NavId = (typeof NAV_IDS)[number];

const NAV_INDICES: Record<NavId, string> = {
  human: '01',
  trace: '02',
  education: '03',
  systems: '04',
  work: '05',
  contact: '06',
};

const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

function LanguageSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center" role="group" aria-label="Language">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          lang={lang.code}
          aria-label={lang.name}
          aria-pressed={language === lang.code}
          onClick={() => {
            setLanguage(lang.code);
            onSelect?.();
          }}
          className={`min-h-11 min-w-11 font-mono text-[13px] tracking-[0.15em] transition-colors ${
            language === lang.code ? 'text-signal' : 'text-dim hover:text-ink'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export default function Navigation() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiveSection(e.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || menuOpen ? 'border-line bg-bg/95 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-[13px] focus:text-bg"
      >
        {t.nav.skip}
      </a>
      <nav aria-label={t.nav.primary} className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <a href="#hero" className="font-mono text-[13px] tracking-[0.22em] text-ink transition-colors hover:text-signal">
          JOAQUIN / SCHMIDT
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? 'true' : undefined}
              className={`link-rule flex min-h-11 items-center gap-1.5 font-mono text-[13px] tracking-[0.1em] transition-colors ${
                activeSection === id ? 'text-ink' : 'text-dim hover:text-ink'
              }`}
            >
              <span className="text-signal">{NAV_INDICES[id]}</span>
              {t.nav[id]}
            </a>
          ))}
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="min-h-11 min-w-11 font-mono text-[13px] tracking-[0.2em] text-ink md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? t.nav.close : t.nav.menu}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto bg-bg px-6 py-6 md:hidden">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-5 font-serif text-[32px] text-ink"
            >
              <span className="font-mono text-[13px] text-signal">{NAV_INDICES[id]}</span>
              {t.nav[id]}
            </a>
          ))}
          <div className="pt-6">
            <LanguageSwitcher onSelect={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
