import type { SkillGroup } from '../i18n';

/** Proper nouns — identical across languages. */
export const SKILLS: { group: SkillGroup; items: string[] }[] = [
  {
    group: 'backend',
    items: ['Python', 'Django', 'Django REST Framework', 'Flask', 'Node.js', 'Express.js', 'TypeORM', 'Celery'],
  },
  { group: 'frontend', items: ['React', 'JavaScript', 'TypeScript'] },
  { group: 'ai', items: ['LangChain', 'LangGraph', 'LLMs', 'RAG', 'Prompt Engineering'] },
  { group: 'data', items: ['SQL', 'PostgreSQL', 'Redis'] },
  { group: 'devops', items: ['Docker', 'GCP'] },
  {
    group: 'tools',
    items: [
      'Git', 'GitHub', 'Bitbucket', 'Postman', 'Zapier', 'Make', 'Meta Webhooks',
      'Facebook Graph API', 'Instagram Messaging API', 'Stripe', 'Mercado Pago', 'Agile', 'Scrum', 'Jira',
    ],
  },
];
