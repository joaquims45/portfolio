export interface ExperienceMeta {
  dateFrom: string;
  dateTo?: string; // omitted = ongoing
  company: string;
  stack: string[];
}

export const EXPERIENCE: ExperienceMeta[] = [
  { dateFrom: '2024.05', dateTo: '2025.03', company: 'HELPIA', stack: ['Python', 'Django', 'DRF', 'React', 'MUI', 'LangGraph', 'LangChain'] },
  { dateFrom: '2025.03', dateTo: '2025.08', company: 'GENTS', stack: ['Python', 'Django', 'LangGraph', 'LangChain', 'Redis', 'Celery', 'PostgreSQL', 'Meta Webhooks'] },
  { dateFrom: '2025.08', company: 'TECNOSOFTWARE', stack: ['NestJS', 'TypeORM', 'TypeScript', 'PostgreSQL', 'React', 'SQS'] },
];
