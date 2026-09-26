import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n';

interface TraceEntryMeta {
  dateFrom: string;
  dateTo?: string; // omitted = ongoing, renders via the "present" translation
  company: string;
  stack: string;
}

interface TraceEntry extends TraceEntryMeta {
  role: string;
  tasks: string[];
}

const ENTRIES_META: TraceEntryMeta[] = [
  { dateFrom: '2024.05', dateTo: '2025.03', company: 'HELPIA', stack: 'Python · Django · React · MUI · LangGraph' },
  { dateFrom: '2025.03', dateTo: '2025.08', company: 'GENTS', stack: 'React · LangGraph · LangChain · WhatsApp · Telegram' },
  { dateFrom: '2025.08', company: 'TECNOSOFTWARE', stack: 'NestJS · TypeScript · TypeORM · PostgreSQL · SQS' },
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
  present: string;
  delay?: number;
  isLast?: boolean;
}

function TraceItem({ entry, present, delay = 0, isLast = false }: TraceItemProps) {
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
          {/* Date range */}
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-[9px] tracking-[0.18em] text-ink/30">
              {entry.dateFrom} — {entry.dateTo ?? present}
            </span>
          </div>

          {/* Company + role badge */}
          <h3
            className="font-serif text-ink mb-3"
            style={{ fontSize: 'clamp(22px, 2.5vw, 36px)' }}
          >
            {entry.company}
          </h3>
          <span
            className="inline-block font-mono text-[9px] tracking-[0.2em] text-signal px-2.5 py-1 mb-6"
            style={{ border: '1px solid rgba(200,144,58,0.4)' }}
          >
            {entry.role}
          </span>

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

/* ─── Trace Section ─── */

export default function Trace() {
  const { t } = useLanguage();
  const { ref: headRef, inView: headIn } = useInView(0.2);

  const entries: TraceEntry[] = ENTRIES_META.map((meta, i) => ({
    ...meta,
    ...t.trace.entries[i],
  }));

  return (
    <section
      id="trace"
      className="pt-16 md:pt-20 pb-28 md:pb-36"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section header */}
        <div
          ref={headRef}
          className={`flex items-baseline gap-6 mb-20 md:mb-28 trace-item ${headIn ? 'in-view' : ''}`}
        >
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">02</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            {t.trace.title}
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        {/* Trace log */}
        <div className="max-w-2xl">
          {entries.map((entry, i) => (
            <TraceItem
              key={entry.company}
              entry={entry}
              present={t.trace.present}
              delay={i * 80}
              isLast={i === entries.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
