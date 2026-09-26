import { useEffect, useRef, useState } from 'react';

interface TraceEntry {
  timestamp: string;
  company: string;
  role: string;
  tasks: string[];
  stack: string;
}

const ENTRIES: TraceEntry[] = [
  {
    timestamp: '2024.05',
    company: 'HELPIA',
    role: 'FULL-STACK DEVELOPER',
    tasks: ['Multi-agent systems', 'REST & WebSocket APIs', 'AI application interfaces'],
    stack: 'Python · Django · React · LangGraph',
  },
  {
    timestamp: '2025.03',
    company: 'GENTS',
    role: 'AI ENGINEER',
    tasks: ['Multi-tenant AI architecture', 'RAG systems', 'Agent orchestration', 'Omnichannel AI'],
    stack: 'LangGraph · LangChain · Django · React',
  },
  {
    timestamp: '2025.08',
    company: 'TECNOSOFTWARE',
    role: 'FULL-STACK DEVELOPER',
    tasks: ['Production backend systems', 'Distributed services', 'Async workers', 'Business-critical automation'],
    stack: 'NestJS · TypeScript · PostgreSQL · Redis · SQS',
  },
];

function useInView(threshold = 0.2) {
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

interface TraceItemProps {
  entry: TraceEntry;
  delay?: number;
  isLast?: boolean;
}

function TraceItem({ entry, delay = 0, isLast = false }: TraceItemProps) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`trace-item ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex gap-6 md:gap-10">

        {/* Left: line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Dot */}
          <div
            className="w-2 h-2 rounded-full mt-1 flex-shrink-0 transition-colors duration-500"
            style={{
              backgroundColor: inView ? '#C8903A' : 'rgba(236,231,222,0.25)',
              boxShadow: inView ? '0 0 8px rgba(200,144,58,0.4)' : 'none',
            }}
          />
          {/* Connecting line */}
          {!isLast && (
            <div
              className={`flex-1 w-px mt-2 trace-line-segment ${inView ? 'drawn' : ''}`}
              style={{
                background: 'linear-gradient(to bottom, rgba(200,144,58,0.35), rgba(236,231,222,0.06))',
                minHeight: 80,
                transitionDelay: `${delay + 200}ms`,
              }}
            />
          )}
        </div>

        {/* Right: content */}
        <div className="pb-16 flex-1">
          {/* Timestamp */}
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[9px] tracking-[0.18em] text-ink/30">
              {entry.timestamp}
            </span>
          </div>

          {/* Company + role */}
          <h3
            className="font-serif text-ink mb-1"
            style={{ fontSize: 'clamp(22px, 2.5vw, 36px)' }}
          >
            {entry.company}
          </h3>
          <p className="font-mono text-[10px] tracking-[0.22em] text-signal/70 mb-6">
            {entry.role}
          </p>

          {/* Tasks */}
          <ul className="flex flex-col gap-2 mb-6">
            {entry.tasks.map((task) => (
              <li key={task} className="flex items-start gap-3">
                <span className="text-signal/40 text-[10px] mt-0.5 flex-shrink-0">—</span>
                <span className="text-ink/55 text-[14px] md:text-[15px] leading-snug font-light">
                  {task}
                </span>
              </li>
            ))}
          </ul>

          {/* Stack */}
          <p className="font-mono text-[10px] tracking-[0.1em] text-ink/30">
            {entry.stack}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── "NOW" terminal entry ─── */

function NowEntry() {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`trace-item ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: '100ms' }}
    >
      <div className="flex gap-6 md:gap-10 items-start">
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-2 h-2 flex-shrink-0 mt-1 transition-all duration-500"
            style={{
              backgroundColor: inView ? '#C8903A' : 'rgba(236,231,222,0.15)',
              boxShadow: inView ? '0 0 12px rgba(200,144,58,0.6)' : 'none',
            }}
          />
        </div>

        <div className="pb-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[9px] tracking-[0.22em] text-signal">
              NOW
            </span>
            <span className="h-px w-4 bg-signal/30" />
            <span className="font-mono text-[9px] tracking-[0.18em] text-ink/30">
              2026
            </span>
          </div>

          <h3
            className="font-serif text-ink mb-1"
            style={{ fontSize: 'clamp(22px, 2.5vw, 36px)' }}
          >
            AI Systems<em className="not-italic text-ink/40"> ×</em><br />
            Backend Engineering
          </h3>

          <p className="font-mono text-[10px] tracking-[0.16em] text-signal/50 mt-3">
            ACTIVE
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Trace Section ─── */

export default function Trace() {
  const { ref: headRef, inView: headIn } = useInView(0.2);

  return (
    <section
      id="trace"
      className="py-28 md:py-36"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section header */}
        <div
          ref={headRef}
          className={`flex items-baseline gap-6 mb-20 md:mb-28 trace-item ${headIn ? 'in-view' : ''}`}
        >
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">01</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            Execution Trace
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        {/* Trace log */}
        <div className="max-w-2xl">
          {ENTRIES.map((entry, i) => (
            <TraceItem
              key={entry.company}
              entry={entry}
              delay={i * 80}
              isLast={i === ENTRIES.length - 1}
            />
          ))}
          <NowEntry />
        </div>

      </div>
    </section>
  );
}
