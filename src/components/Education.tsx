import { useLanguage } from '../i18n';

interface DegreeEntry {
  institution: string;
  dates: string;
}

/* ─── Education Section ─── */

export default function Education() {
  const { t } = useLanguage();

  const degrees: DegreeEntry[] = [
    { institution: 'Escuela Da Vinci', dates: `2026 — ${t.education.present}` },
    { institution: 'E.E.M.P.A. N° 1151 — Francisco Urondo, Santa Fe, Argentina', dates: '2016' },
  ];

  const degreeTitles = [t.education.degreeTitle, t.education.secondaryTitle];

  return (
    <section
      id="education"
      className="py-28 md:py-36"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">03</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            {t.education.title}
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        {/* Degrees */}
        <div className="max-w-2xl flex flex-col gap-10 mb-16">
          {degrees.map((degree, i) => (
            <div key={degree.institution}>
              <div className="h-px mb-6 bg-ink/8" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-serif text-ink" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
                  {degree.institution}
                </h3>
                <span className="font-mono text-[9px] tracking-[0.18em] text-ink/30">
                  {degree.dates}
                </span>
              </div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-signal/70 mt-2">
                {degreeTitles[i]}
              </p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="max-w-2xl">
          <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-4">
            {t.education.coursesLabel}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {t.education.courses.map((course) => (
              <span key={course} className="font-mono text-[11px] tracking-[0.05em] text-ink/60">
                {course}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
