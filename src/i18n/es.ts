import type { Translations } from './types';

export const es: Translations = {
  nav: {
    trace: 'EXPERIENCIA',
    education: 'EDUCACIÓN',
    systems: 'APTITUDES',
    work: 'TRABAJO',
    human: 'SOBRE MÍ',
    contact: 'CONTACTO',
    menu: '≡ MENÚ',
    close: '× CERRAR',
  },
  hero: {
    role: 'INGENIERO DE IA / FULL-STACK',
    location: 'SANTA FE, ARGENTINA',
    headline: ['CONSTRUYO', 'SOFTWARE', 'QUE PUEDE', 'RAZONAR', 'ANTES DE', 'ACTUAR.'],
    archLabel: 'SISTEMA / ARQUITECTURA',
    cta: 'VER EXPERIENCIA',
  },
  trace: {
    title: 'Experiencia',
    entries: [
      {
        role: 'DESARROLLADOR FULL-STACK',
        tasks: ['Sistemas multi-agente con LangGraph', 'API REST con Django para gestión de agentes', 'Interfaces admin y de agentes (React + MUI)'],
      },
      {
        role: 'INGENIERO DE IA',
        tasks: ['Arquitectura de IA multi-tenant', 'Asistentes potenciados por RAG', 'Mensajería omnicanal (WhatsApp, Telegram)', 'Orquestación de agentes con LangGraph'],
      },
      {
        role: 'DESARROLLADOR FULL-STACK',
        tasks: ['Microservicios de facturación (NestJS)', 'Workers asíncronos de procesamiento de órdenes', 'Migración de Excel al sistema', 'Migraciones de base de datos y refactors de dominio'],
      },
    ],
    nowLine1: 'Sistemas de IA',
    nowLine2: 'Ingeniería Backend',
    active: 'ACTIVO',
  },
  education: {
    title: 'Educación',
    degreeTitle: 'Analista en Sistemas',
    secondaryTitle: 'Título Secundario',
    present: 'Presente',
    coursesLabel: 'Cursos',
    courses: [
      'Django — Platzi',
      'Django Rest Framework — Platzi',
      'Ingeniería de Prompts para ChatGPT — Coursera',
      'Fundamentos de Docker — Platzi',
      'Frontend con React.js — Platzi',
      'Backend con Node.js — Platzi',
    ],
  },
  systems: {
    title: 'Aptitudes',
    subtitle: 'STACK TÉCNICO',
    groups: {
      ai: 'IA y Machine Learning',
      languages: 'Lenguajes y Frameworks',
      databases: 'Bases de Datos',
      tools: 'Herramientas e Integraciones',
      methodologies: 'Metodologías',
    },
  },
  work: {
    title: 'Proyectos Seleccionados',
    technologies: 'Tecnologías',
    architecture: 'Arquitectura',
    topology: 'Topología',
    caseStudy: 'CASO DE ESTUDIO',
    projectLabel: 'PROYECTO',
    status: {
      development: 'EN DESARROLLO',
      comingSoon: 'PRÓXIMAMENTE',
      researching: 'EN INVESTIGACIÓN',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Entiende una base de código', 'antes de tocarla.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ['Los productos no deberían', 'ser solo buscables.', 'Deberían poder', 'explicarse a sí mismos.'],
    },
    agentWorkflow: {
      name: ['Agent', 'Workflow', 'Experiment'],
      tagline: 'Explorando patrones de coordinación multi-agente, estrategias de enrutamiento y máquinas de estado para sistemas agénticos de producción.',
    },
  },
  human: {
    title: 'Sobre Mí',
    statement: ['EL SOFTWARE ES', 'TÉCNICO.', 'LOS PROBLEMAS', 'SON HUMANOS.'],
    bioParagraphs: [
      'Soy Joaquín, ingeniero de software de Argentina enfocado en la intersección entre IA e ingeniería de software tradicional.',
      'Me interesa particularmente convertir prototipos de IA impresionantes en sistemas útiles, mantenibles y listos para producción.',
    ],
    based: 'UBICACIÓN',
    focus: 'ENFOQUE',
    focusValue: ['Sistemas de IA', 'Ingeniería Backend'],
    exploringLabel: 'EXPLORANDO ACTUALMENTE',
    exploringItems: [
      'Flujos agénticos',
      'Enrutamiento multi-agente',
      'Arquitecturas RAG',
      'Evaluación de LLM',
      'Sistemas human-in-the-loop',
    ],
  },
  contact: {
    title: 'Contacto',
    heading: ['¿TIENES UN', 'PROBLEMA', 'INTERESANTE', 'PARA RESOLVER?'],
    footerRole: 'INGENIERO DE IA / FULL-STACK',
  },
};
