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
    location: 'SANTA FE, ARGENTINA',
    headline: ['I BUILD', 'SOFTWARE', 'THAT CAN', 'REASON', 'BEFORE IT', 'ACTS.'],
    archLabel: 'SYSTEM / ARCHITECTURE',
    cta: 'VIEW EXPERIENCE',
  },
  trace: {
    title: 'Experience',
    entries: [
      {
        role: 'FULL-STACK DEVELOPER',
        tasks: ['Multi-agent systems with LangGraph', 'Django REST API for agent management', 'Admin & agent interfaces (React + MUI)'],
      },
      {
        role: 'AI ENGINEER',
        tasks: ['Multi-tenant AI architecture', 'RAG-powered assistants', 'Omnichannel messaging (WhatsApp, Telegram)', 'Agent orchestration with LangGraph'],
      },
      {
        role: 'FULL-STACK DEVELOPER',
        tasks: ['Invoicing microservices (NestJS)', 'Async order-processing workers', 'Excel-to-system migration', 'DB migrations & domain refactors'],
      },
    ],
    nowLine1: 'AI Systems',
    nowLine2: 'Backend Engineering',
    active: 'ACTIVE',
  },
  education: {
    title: 'Education',
    degreeTitle: 'Information Systems Analyst',
    secondaryTitle: 'High School Diploma',
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
    title: 'Selected Work',
    technologies: 'Technologies',
    architecture: 'Architecture',
    topology: 'Topology',
    caseStudy: 'CASE STUDY',
    projectLabel: 'PROJECT',
    status: {
      development: 'IN DEVELOPMENT',
      comingSoon: 'COMING SOON',
      researching: 'RESEARCHING',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Understand a codebase', 'before touching it.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ["Products shouldn't", 'just be searchable.', 'They should be able', 'to explain themselves.'],
    },
    agentWorkflow: {
      name: ['Agent', 'Workflow', 'Experiment'],
      tagline: 'Exploring multi-agent coordination patterns, routing strategies, and state machines for production agentic systems.',
    },
  },
  human: {
    title: 'About Me',
    statement: ['SOFTWARE IS', 'TECHNICAL.', 'PROBLEMS', 'ARE HUMAN.'],
    bioParagraphs: [
      "I'm Joaquín, a software engineer from Argentina focused on the intersection between AI and traditional software engineering.",
      "I'm particularly interested in turning impressive AI prototypes into useful, maintainable and production-ready systems.",
    ],
    based: 'BASED',
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
  },
  contact: {
    title: 'Contact',
    heading: ['HAVE AN', 'INTERESTING', 'PROBLEM', 'TO SOLVE?'],
    footerRole: 'AI ENGINEER / FULL-STACK',
  },
};
