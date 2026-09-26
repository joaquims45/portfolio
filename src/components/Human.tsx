import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';
import portrait from '../assets/joaquin_schmidt.png';

function useInView(threshold = 0.15) {
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

export default function Human() {
  const { t } = useLanguage();
  const { ref: statRef, inView: statIn } = useInView(0.1);
  const { ref: bioRef, inView: bioIn } = useInView(0.15);
  const { ref: metaRef, inView: metaIn } = useInView(0.15);

  return (
    <section
      id="human"
      className="pt-16 md:pt-20 pb-16 md:pb-20"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section index */}
        <div className="flex items-baseline gap-6 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">01</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            {t.human.title}
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        {/* Dramatic statement + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center mb-16 md:mb-20">
          <div
            ref={statRef}
            className="transition-all duration-700"
            style={{
              opacity: statIn ? 1 : 0,
              transform: statIn ? 'none' : 'translateY(20px)',
            }}
          >
            <p
              className="font-serif text-ink leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(30px, 4.6vw, 72px)' }}
            >
              {t.human.statement[0]}<br />
              {t.human.statement[1]}<br />
              <span className="text-ink/35">{t.human.statement[2]}</span><br />
              <span className="text-ink/35">{t.human.statement[3]}</span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px]" style={{ border: '1px solid rgba(236,231,222,0.1)' }}>
              <img
                src={portrait}
                alt="Joaquín Schmidt"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Bio + metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24">

          {/* Bio */}
          <div
            ref={bioRef}
            className="transition-all duration-700 delay-100"
            style={{
              opacity: bioIn ? 1 : 0,
              transform: bioIn ? 'none' : 'translateY(16px)',
            }}
          >
            <div
              className="h-px w-10 mb-8"
              style={{ background: 'rgba(200,144,58,0.4)' }}
            />
            <p
              className="text-ink/60 leading-[1.7] font-light max-w-lg"
              style={{ fontSize: 'clamp(15px, 1.3vw, 19px)' }}
            >
              {t.human.bioParagraphs[0]}
            </p>
            <p
              className="text-ink/40 leading-[1.7] font-light max-w-lg mt-5"
              style={{ fontSize: 'clamp(14px, 1.1vw, 17px)' }}
            >
              {t.human.bioParagraphs[1]}
            </p>
          </div>

          {/* Metadata */}
          <div
            ref={metaRef}
            className="flex flex-col gap-8 transition-all duration-700 delay-200"
            style={{
              opacity: metaIn ? 1 : 0,
              transform: metaIn ? 'none' : 'translateY(16px)',
            }}
          >
            {/* Focus */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-2">{t.human.focus}</p>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/60">
                {t.human.focusValue[0]}<br />
                {t.human.focusValue[1]}
              </p>
            </div>

            {/* Currently exploring */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-3">
                {t.human.exploringLabel}
              </p>
              <div className="flex flex-col gap-1.5">
                {t.human.exploringItems.map((item) => (
                  <p key={item} className="font-mono text-[10px] tracking-[0.08em] text-ink/45 flex items-center gap-2">
                    <span className="text-signal/40">→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Off the keyboard */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-3">
                {t.human.offKeyboardLabel}
              </p>
              <div className="flex flex-col gap-1.5">
                {t.human.offKeyboardItems.map((item) => (
                  <p key={item} className="font-mono text-[10px] tracking-[0.08em] text-ink/45 flex items-center gap-2">
                    <span className="text-signal/40">→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
