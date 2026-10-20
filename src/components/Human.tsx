import { useLanguage } from '../i18n';
import portrait from '../assets/joaquin_schmidt.jpg';
import { Label, Reveal, Section } from './ui/primitives';

function ListBlock({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <ul className="mt-3 flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 font-mono text-[13px] text-muted">
            <span aria-hidden="true" className="text-signal">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Human() {
  const { t } = useLanguage();
  const s = t.human.statement;

  return (
    <Section id="human" index="01" title={t.human.title}>
      <div className="grid grid-cols-1 gap-14 xl:grid-cols-12 xl:gap-10">
        <div className="flex flex-col gap-12 xl:col-span-8">
          <Reveal>
            <p className="font-serif tracking-tight text-ink" style={{ fontSize: 'clamp(30px, 3.6vw, 56px)', lineHeight: 0.95 }}>
              {s[0]} {s[1]}
              <br />
              <span className="text-ink/45">
                {s[2]} {s[3]}
              </span>
            </p>
          </Reveal>

          <Reveal delay={80} className="max-w-xl">
            <p className="text-[18px] leading-[1.7] font-light text-ink/90">{t.human.bioParagraphs[0]}</p>
            <p className="mt-5 text-[17px] leading-[1.7] font-light text-muted">{t.human.bioParagraphs[1]}</p>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <Label>{t.human.focus}</Label>
              <p className="mt-3 font-mono text-[13px] text-ink">
                {t.human.focusValue[0]}
                <br />
                {t.human.focusValue[1]}
              </p>
            </div>
            <ListBlock label={t.human.exploringLabel} items={t.human.exploringItems} />
            <ListBlock label={t.human.offKeyboardLabel} items={t.human.offKeyboardItems} />
          </Reveal>
        </div>

        <Reveal delay={60} className="xl:col-span-4 xl:flex xl:justify-end">
          <img
            src={portrait}
            alt="Joaquín Schmidt"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-square h-auto w-full max-w-[320px] self-start border border-line object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}
