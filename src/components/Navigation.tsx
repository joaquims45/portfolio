import { useState, useEffect } from 'react';
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

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
];

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-64px 0px 0px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const LanguageSwitcher = ({ onSelect }: { onSelect?: () => void }) => (
    <div className="flex items-center gap-2">
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink/15">/</span>}
          <button
            onClick={() => { setLanguage(lang.code); onSelect?.(); }}
            className={`font-mono text-[11px] tracking-[0.15em] transition-colors duration-200 ${
              language === lang.code ? 'text-signal' : 'text-ink/35 hover:text-ink/70'
            }`}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(236,231,222,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Identity */}
        <a
          href="#"
          className="font-mono text-[11px] tracking-[0.22em] text-ink/50 hover:text-signal transition-colors duration-200"
        >
          JOAQUIN / SCHMIDT
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-item flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.15em] ${
                activeSection === id
                  ? 'text-ink active'
                  : 'text-ink/35 hover:text-ink/70'
              }`}
            >
              <span className="text-signal/60 text-[10px]">{NAV_INDICES[id]}</span>
              {t.nav[id]}
            </a>
          ))}

          <span className="h-4 w-px bg-ink/10 ml-2" />
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-[11px] tracking-[0.2em] text-ink/40 hover:text-ink transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(236,231,222,0.06)' }}
        >
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 py-3.5 font-mono text-[12px] tracking-[0.14em] text-ink/45 hover:text-ink transition-colors"
              style={{ borderBottom: '1px solid rgba(236,231,222,0.05)' }}
            >
              <span className="text-signal text-[11px]">{NAV_INDICES[id]}</span>
              {t.nav[id]}
            </a>
          ))}

          <div className="pt-4 mt-1">
            <LanguageSwitcher onSelect={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}
