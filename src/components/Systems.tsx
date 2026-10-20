import { useLanguage } from '../i18n';
import { SKILLS } from '../data/skills';
import { Label, Reveal, Section } from './ui/primitives';

export default function Systems() {
  const { t } = useLanguage();

  return (
    <Section id="systems" index="04" title={t.systems.title}>
      <Label>{t.systems.subtitle}</Label>
      <dl className="mt-8 flex flex-col">
        {SKILLS.map(({ group, items }, i) => (
          <Reveal key={group} delay={i * 40} className="grid grid-cols-1 gap-3 border-t border-line py-6 md:grid-cols-12 md:gap-10">
            <dt className={`font-serif text-[22px] leading-tight md:col-span-4 ${group === 'ai' ? 'text-signal' : 'text-ink'}`}>
              {t.systems.groups[group]}
            </dt>
            <dd className="md:col-span-8">
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px] text-muted">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
