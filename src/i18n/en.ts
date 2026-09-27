import type { Translations } from './types';

export const en: Translations = {
  nav: {
    trace: 'EXPERIENCE',
    education: 'EDUCATION',
    systems: 'SKILLS',
    work: 'WORK',
    human: 'ABOUT',
    contact: 'CONTACT',
    menu: '≡ MENU',
    close: '× CLOSE',
  },
  hero: {
    role: 'AI ENGINEER / FULL-STACK',
    headline: ['I BUILD', 'SOFTWARE', 'THAT CAN', 'REASON', 'BEFORE IT', 'ACTS.'],
    archLabel: 'SYSTEM / ARCHITECTURE',
  },
  trace: {
    title: 'Experience',
    entries: [
      {
        role: 'FULL-STACK DEVELOPER',
        tasks: [
          'Admin interfaces for user, conversation, and analytics management',
          'Reusable React + MUI components for sessions and agent responses',
          'Cross-team collaboration translating requirements into responsive UI',
          'Multi-agent system with LangGraph and LangChain, custom Python tools',
          'REST API with Django and DRF for agents, sessions, and client data',
          'Modular architecture for per-client agent and LLM configuration',
          'Applied AI best practices: memory, tool orchestration, RAG, prompt engineering',
        ],
      },
      {
        role: 'AI ENGINEER',
        tasks: [
          'Dynamic, responsive React UI with real-time messaging',
          'Multi-tenant architecture for secure per-client assistant management',
          'RAG system grounding assistants in business context',
          'Modular prompt templates & scalable agent orchestration (LangGraph, LangChain)',
          'Omnichannel messaging integration (WhatsApp, Telegram)',
          'API endpoints for sessions, analytics, and assistant configuration',
          'Optimized conversation storage and indexing for fast retrieval',
        ],
      },
      {
        role: 'FULL-STACK DEVELOPER',
        tasks: [
          'Backend & automation features for invoicing microservices (NestJS, TypeORM, PostgreSQL)',
          'Async worker for invoiceable orders and logistics-to-billing integration via SQS',
          'Migrated invoicing logic from Excel to the system, cutting processing time',
          'Table normalization, DB migrations, and domain refactors',
          'Billing APIs: configurable rules, surcharges, validations, Tango integration',
          'RPA scripts to sync billing rules, articles, and services across systems',
        ],
      },
    ],
    present: 'Present',
  },
  education: {
    title: 'Education',
    degreeTitle: 'Information Systems Analyst',
    present: 'Present',
    coursesLabel: 'Courses',
    courses: [
      'Django — Platzi',
      'Django REST Framework — Platzi',
      'Prompt Engineering for ChatGPT — Coursera',
      'Docker Fundamentals — Platzi',
      'React.js Frontend — Platzi',
      'Node.js Backend — Platzi',
    ],
  },
  systems: {
    title: 'Skills',
    subtitle: 'TECHNICAL STACK',
    groups: {
      ai: 'AI & Machine Learning',
      languages: 'Languages & Frameworks',
      databases: 'Databases',
      tools: 'Tools & Integrations',
      methodologies: 'Methodologies',
    },
  },
  work: {
    title: 'Personal Projects',
    technologies: 'Technologies',
    architecture: 'Architecture',
    projectLabel: 'PROJECT',
    status: {
      comingSoon: 'COMING SOON',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Ask a codebase anything —', 'every answer cites real code.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ["Products shouldn't", 'just be searchable.', 'They should be able', 'to explain themselves.'],
    },
  },
  human: {
    title: 'About Me',
    statement: ['SOFTWARE IS', 'TECHNICAL.', 'PROBLEMS', 'ARE HUMAN.'],
    bioParagraphs: [
      "I'm Joaquín, a software engineer from Argentina focused on the intersection between AI and traditional software engineering.",
      "I'm particularly interested in turning impressive AI prototypes into useful, maintainable and production-ready systems.",
    ],
    focus: 'FOCUS',
    focusValue: ['AI Systems', 'Backend Engineering'],
    exploringLabel: 'CURRENTLY EXPLORING',
    exploringItems: [
      'Agentic workflows',
      'Multi-agent routing',
      'RAG architectures',
      'LLM evaluation',
      'Human-in-the-loop systems',
    ],
    offKeyboardLabel: 'OUTSIDE WORK',
    offKeyboardItems: [
      'Gaming',
      'Building indie games',
      'Football',
      'Traveling',
    ],
  },
  contact: {
    title: 'Contact',
    heading: ['HAVE AN', 'INTERESTING', 'PROBLEM', 'TO SOLVE?'],
    footerRole: 'AI ENGINEER / FULL-STACK',
  },
};
