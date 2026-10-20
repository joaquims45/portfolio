import { useLanguage } from '../i18n';
import { EXPERIENCE } from '../data/experience';
import { Reveal, Section } from './ui/primitives';

export default function Trace() {
  const { t } = useLanguage();

  return (
    <Section id="trace" index="02" title={t.trace.title}>
      <ol className="flex flex-col">
        {EXPERIENCE.map((meta, i) => {
          const entry = t.trace.entries[i];
          return (
            <li key={meta.company + meta.dateFrom}>
              <Reveal className="grid grid-cols-1 gap-6 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="font-mono text-[13px] tracking-[0.16em] text-dim">
                    {meta.dateFrom} — {meta.dateTo ?? t.trace.present}
                  </p>
                  <h3 className="mt-3 font-serif break-words text-ink" style={{ fontSize: 'clamp(24px, 2.4vw, 36px)' }}>
                    {meta.company}
                  </h3>
                  <p className="mt-3 inline-block border border-signal/50 px-2.5 py-1 font-mono text-[13px] tracking-[0.18em] text-signal">
                    {entry.role}
                  </p>
                  <p className="mt-5 max-w-xs text-[15px] leading-snug text-muted">{entry.summary}</p>
                </div>

                <div className="md:col-span-8">
                  <ul className="flex flex-col gap-3">
                    {entry.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-px text-signal">
                          —
                        </span>
                        <span className="text-[16px] leading-snug font-light text-muted">{task}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-7 flex flex-wrap gap-2 font-mono text-[13px] text-ink">
                    {meta.stack.map((s) => (
                      <li key={s} className="border border-line px-2.5 py-1">{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
