import { useLanguage } from '../i18n';
import { PROJECTS } from '../data/projects';
import { FlowGraph } from './ui/Graphs';
import { ExternalLink, Label, Reveal, Section } from './ui/primitives';

export default function Work() {
  const { t } = useLanguage();

  return (
    <Section id="work" index="05" title={t.work.title}>
      <ol className="flex flex-col gap-24 md:gap-32">
        {PROJECTS.map((p, i) => {
          const copy = t.work[p.id];
          const name = copy.name;
          const tagline = copy.tagline;
          return (
            <li key={p.id}>
              <Reveal>
                <article className="project group/project">
                  <div className="draw-rule mb-8" />
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={`flex flex-col gap-7 lg:col-span-7`}>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[13px] tracking-[0.2em] text-signal">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <Label>{t.work.projectLabel}</Label>
                      </div>

                      <h3 className="font-serif leading-[0.92] text-ink" style={{ fontSize: 'clamp(44px, 6.4vw, 104px)' }}>
                        {name[0]}
                        <br />
                        <span className="text-ink/55">{name[1]}</span>
                      </h3>

                      <p className="max-w-md text-[17px] leading-relaxed font-light text-muted md:text-[18px]">
                        {tagline.map((line, k) => (
                          <span key={k}>
                            {line}
                            {k < tagline.length - 1 && <br />}
                          </span>
                        ))}
                      </p>

                      <div className="flex flex-col gap-3">
                        <Label>{t.work.technologies}</Label>
                        <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-ink/90">
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-8">
                        {p.repos.map((r) => (
                          <ExternalLink key={r.href} href={r.href}>
                            {r.label}
                          </ExternalLink>
                        ))}
                      </div>
                    </div>

                    <div className={`flex flex-col gap-4 lg:col-span-5 lg:items-end`}>
                      <Label>{t.work.architecture}</Label>
                      <FlowGraph nodes={p.flow} label={`${t.work.architecture}: ${name.join(' ')}`} />
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
