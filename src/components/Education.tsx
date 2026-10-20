import { useLanguage } from '../i18n';
import { Label, Reveal, Section } from './ui/primitives';

export default function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" index="03" title={t.education.title}>
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-serif text-ink" style={{ fontSize: 'clamp(26px, 3vw, 44px)' }}>
            Escuela Da Vinci
          </h3>
          <span className="font-mono text-[13px] tracking-[0.16em] text-dim">2026 — {t.education.present}</span>
        </div>
        <p className="mt-2 font-mono text-[13px] tracking-[0.18em] text-signal">{t.education.degreeTitle}</p>
      </Reveal>

      <Reveal className="mt-14" delay={80}>
        <Label>{t.education.coursesLabel}</Label>
        <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 font-mono text-[14px] text-muted md:grid-cols-2">
          {t.education.courses.map((course) => (
            <li key={course} className="border-t border-line pt-3">
              {course}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
