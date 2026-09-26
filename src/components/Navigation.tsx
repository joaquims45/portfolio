import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { index: '01', label: 'TRACE', href: '#trace' },
  { index: '02', label: 'SYSTEMS', href: '#systems' },
  { index: '03', label: 'WORK', href: '#work' },
  { index: '04', label: 'HUMAN', href: '#human' },
  { index: '05', label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['work', 'systems', 'trace', 'human', 'contact'];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-56px 0px 0px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(236,231,222,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        {/* Identity */}
        <a
          href="#"
          className="font-mono text-[10px] tracking-[0.22em] text-ink/50 hover:text-signal transition-colors duration-200"
        >
          JOAQUIN / SCHMIDT
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.index}
              href={item.href}
              className={`nav-item flex items-baseline gap-1.5 font-mono text-[10px] tracking-[0.15em] ${
                activeSection === item.label.toLowerCase()
                  ? 'text-ink active'
                  : 'text-ink/35 hover:text-ink/70'
              }`}
            >
              <span className="text-signal/60 text-[9px]">{item.index}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-ink transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '× CLOSE' : '≡ MENU'}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(236,231,222,0.06)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-baseline gap-4 py-3.5 font-mono text-[11px] tracking-[0.14em] text-ink/45 hover:text-ink transition-colors"
              style={{ borderBottom: '1px solid rgba(236,231,222,0.05)' }}
            >
              <span className="text-signal text-[10px]">{item.index}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
