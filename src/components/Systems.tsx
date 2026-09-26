import { useLanguage, type SkillGroup } from '../i18n';

/* ─── Skills data (proper nouns — identical across languages) ─── */

const SKILLS: { group: SkillGroup; items: string[] }[] = [
  {
    group: 'ai',
    items: ['LangChain', 'LangGraph', 'LLMs', 'RAG', 'Prompt Engineering'],
  },
  {
    group: 'languages',
    items: [
      'Python', 'Django', 'Django REST Framework', 'Flask', 'Node.js', 'Express.js',
      'JavaScript', 'TypeScript', 'React', 'TypeORM', 'Celery',
    ],
  },
  {
    group: 'databases',
    items: ['SQL', 'PostgreSQL', 'Redis'],
  },
  {
    group: 'tools',
    items: [
      'Docker', 'Git', 'GitHub', 'Postman', 'Zapier', 'Make', 'Meta Webhooks',
      'Facebook Graph API', 'Instagram Messaging API', 'Stripe', 'Mercado Pago', 'Bitbucket', 'GCP',
    ],
  },
  {
    group: 'methodologies',
    items: ['Agile', 'Scrum', 'Jira'],
  },
];

const GROUP_COLORS: Record<SkillGroup, string> = {
  ai: '#C8903A',
  languages: 'rgba(236,231,222,0.8)',
  databases: 'rgba(236,231,222,0.7)',
  tools: 'rgba(236,231,222,0.65)',
  methodologies: 'rgba(236,231,222,0.5)',
};

/* ─── Systems Section ─── */

export default function Systems() {
  const { t } = useLanguage();

  return (
    <section
      id="systems"
      className="pt-16 md:pt-20 pb-16 md:pb-20"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">04</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            {t.systems.title}
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        <p className="font-mono text-[10px] tracking-[0.2em] text-ink/30 mb-12 max-w-md">
          {t.systems.subtitle}
        </p>

        {/* Skill categories */}
        <div className="flex flex-col gap-8">
          {SKILLS.map(({ group, items }) => (
            <div key={group}>
              <p className="font-mono text-[9px] tracking-[0.25em] text-ink/30 mb-3">
                {t.systems.groups[group]}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] tracking-[0.05em]"
                    style={{ color: GROUP_COLORS[group] }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="h-px mt-6 bg-ink/7" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
