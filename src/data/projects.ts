export interface ProjectMeta {
  id: 'sourceLens' | 'salesAgent';
  stack: string[];
  repos: { label: 'FRONTEND' | 'BACKEND'; href: string }[];
  /** Architecture flow, top to bottom. */
  flow: { label: string; note?: string }[];
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'sourceLens',
    stack: ['FastAPI', 'LangGraph', 'PostgreSQL + pgvector', 'Celery + Redis', 'React'],
    repos: [
      { label: 'FRONTEND', href: 'https://github.com/joaquims45/source-lens-front' },
      { label: 'BACKEND', href: 'https://github.com/joaquims45/source-lens-back' },
    ],
    flow: [
      { label: 'Repository' },
      { label: 'Parse' },
      { label: 'Index', note: 'pgvector' },
      { label: 'Retrieve' },
      { label: 'Reason' },
    ],
  },
  {
    id: 'salesAgent',
    stack: ['Django', 'LangGraph', 'RAG', 'FAISS', 'Redis', 'React', 'Mercado Pago'],
    repos: [
      { label: 'FRONTEND', href: 'https://github.com/joaquims45/sales-workflow-front' },
      { label: 'BACKEND', href: 'https://github.com/joaquims45/sales-workflow-back' },
    ],
    flow: [
      { label: 'DISCOVERY' },
      { label: 'ASK_FOR_BUDGET' },
      { label: 'PRODUCT_SEARCH' },
      { label: 'RECOMMENDATION' },
      { label: 'SELECT_PRODUCT' },
      { label: 'ASK_WHICH_PRODUCT' },
      { label: 'CHECKOUT' },
    ],
  },
];
