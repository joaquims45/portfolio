import { useEffect, useRef, useState } from 'react';

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

const EXPLORING = [
  'Agentic workflows',
  'Multi-agent routing',
  'RAG architectures',
  'LLM evaluation',
  'Human-in-the-loop systems',
];

export default function Human() {
  const { ref: statRef, inView: statIn } = useInView(0.1);
  const { ref: bioRef, inView: bioIn } = useInView(0.15);
  const { ref: metaRef, inView: metaIn } = useInView(0.15);

  return (
    <section
      id="human"
      className="py-28 md:py-40"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section index */}
        <div className="flex items-baseline gap-6 mb-20 md:mb-28">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">04</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            Human
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        {/* Dramatic statement */}
        <div
          ref={statRef}
          className="mb-20 md:mb-28 transition-all duration-700"
          style={{
            opacity: statIn ? 1 : 0,
            transform: statIn ? 'none' : 'translateY(20px)',
          }}
        >
          <p
            className="font-serif text-ink leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5.5vw, 88px)' }}
          >
            SOFTWARE IS<br />
            TECHNICAL.<br />
            <span className="text-ink/35">PROBLEMS</span><br />
            <span className="text-ink/35">ARE HUMAN.</span>
          </p>
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
              I'm Joaquín, a software engineer from Argentina focused on the intersection between AI and traditional software engineering.
            </p>
            <p
              className="text-ink/40 leading-[1.7] font-light max-w-lg mt-5"
              style={{ fontSize: 'clamp(14px, 1.1vw, 17px)' }}
            >
              I'm particularly interested in turning impressive AI prototypes into useful, maintainable and production-ready systems.
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
            {/* Based */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-2">BASED</p>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/60">
                Santa Fe, Argentina
              </p>
            </div>

            {/* Focus */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-2">FOCUS</p>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/60">
                AI Systems<br />
                Backend Engineering
              </p>
            </div>

            {/* Currently exploring */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-3">
                CURRENTLY EXPLORING
              </p>
              <div className="flex flex-col gap-1.5">
                {EXPLORING.map((item) => (
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
