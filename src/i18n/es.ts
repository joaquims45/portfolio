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
        tasks: [
          'Interfaces de administración para usuarios, conversaciones y analítica',
          'Componentes reutilizables con React y MUI para sesiones y respuestas de agentes',
          'Colaboración con producto y diseño para interfaces responsivas',
          'Sistema multiagente con LangGraph y LangChain, herramientas custom en Python',
          'API REST con Django y DRF para agentes, sesiones y datos de clientes',
          'Arquitectura modular para configuración de agentes y LLMs por cliente',
          'Buenas prácticas de IA: memoria, orquestación de herramientas, RAG, prompt engineering',
        ],
      },
      {
        role: 'INGENIERO DE IA',
        tasks: [
          'Interfaces React dinámicas y responsivas con mensajería en tiempo real',
          'Arquitectura multi-tenant para gestión segura de asistentes por cliente',
          'Sistema RAG con conocimiento contextual del negocio',
          'Plantillas de prompts modulares y orquestación escalable (LangGraph, LangChain)',
          'Integración de mensajería omnicanal (WhatsApp, Telegram)',
          'Endpoints de API para sesiones, analítica y configuración de asistentes',
          'Optimización de almacenamiento e indexado de conversaciones',
        ],
      },
      {
        role: 'DESARROLLADOR FULL-STACK',
        tasks: [
          'Funcionalidades backend y de automatización para facturación (NestJS, TypeORM, PostgreSQL)',
          'Worker asíncrono para órdenes facturables e integración logística-facturación vía SQS',
          'Migración de la lógica de facturación desde Excel al sistema',
          'Normalización de tablas, migraciones de base de datos y refactors de dominio',
          'APIs de facturación: reglas configurables, recargos, validaciones, integración con Tango',
          'Scripts de RPA para sincronizar reglas, artículos y servicios entre sistemas',
        ],
      },
    ],
    present: 'Presente',
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
    projectLabel: 'PROYECTO',
    status: {
      comingSoon: 'PRÓXIMAMENTE',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Entiende una base de código', 'antes de tocarla.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ['Los productos no deberían', 'ser solo buscables.', 'Deberían poder', 'explicarse a sí mismos.'],
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
