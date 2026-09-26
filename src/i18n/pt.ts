import type { Translations } from './types';

export const pt: Translations = {
  nav: {
    trace: 'EXPERIÊNCIA',
    education: 'EDUCAÇÃO',
    systems: 'APTIDÕES',
    work: 'TRABALHO',
    human: 'SOBRE MIM',
    contact: 'CONTATO',
    menu: '≡ MENU',
    close: '× FECHAR',
  },
  hero: {
    role: 'ENGENHEIRO DE IA / FULL-STACK',
    location: 'SANTA FE, ARGENTINA',
    headline: ['CONSTRUO', 'SOFTWARE', 'QUE CONSEGUE', 'RACIOCINAR', 'ANTES DE', 'AGIR.'],
    archLabel: 'SISTEMA / ARQUITETURA',
    cta: 'VER EXPERIÊNCIA',
  },
  trace: {
    title: 'Experiência',
    entries: [
      {
        role: 'DESENVOLVEDOR FULL-STACK',
        tasks: ['Sistemas multiagente com LangGraph', 'API REST em Django para gestão de agentes', 'Interfaces admin e de agentes (React + MUI)'],
      },
      {
        role: 'ENGENHEIRO DE IA',
        tasks: ['Arquitetura de IA multi-tenant', 'Assistentes potencializados por RAG', 'Mensageria omnichannel (WhatsApp, Telegram)', 'Orquestração de agentes com LangGraph'],
      },
      {
        role: 'DESENVOLVEDOR FULL-STACK',
        tasks: ['Microsserviços de faturamento (NestJS)', 'Workers assíncronos de processamento de pedidos', 'Migração de Excel para o sistema', 'Migrações de banco de dados e refatorações de domínio'],
      },
    ],
    nowLine1: 'Sistemas de IA',
    nowLine2: 'Engenharia Backend',
    active: 'ATIVO',
  },
  education: {
    title: 'Educação',
    degreeTitle: 'Analista de Sistemas',
    secondaryTitle: 'Diploma do Ensino Médio',
    present: 'Presente',
    coursesLabel: 'Cursos',
    courses: [
      'Django — Platzi',
      'Django Rest Framework — Platzi',
      'Engenharia de Prompts para ChatGPT — Coursera',
      'Fundamentos de Docker — Platzi',
      'Frontend com React.js — Platzi',
      'Backend com Node.js — Platzi',
    ],
  },
  systems: {
    title: 'Aptidões',
    subtitle: 'STACK TÉCNICO',
    groups: {
      ai: 'IA e Machine Learning',
      languages: 'Linguagens e Frameworks',
      databases: 'Bancos de Dados',
      tools: 'Ferramentas e Integrações',
      methodologies: 'Metodologias',
    },
  },
  work: {
    title: 'Projetos Selecionados',
    technologies: 'Tecnologias',
    architecture: 'Arquitetura',
    topology: 'Topologia',
    caseStudy: 'ESTUDO DE CASO',
    projectLabel: 'PROJETO',
    status: {
      development: 'EM DESENVOLVIMENTO',
      comingSoon: 'EM BREVE',
      researching: 'EM PESQUISA',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Entenda uma base de código', 'antes de mexer nela.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ['Produtos não deveriam', 'ser apenas pesquisáveis.', 'Eles deveriam poder', 'se explicar sozinhos.'],
    },
    agentWorkflow: {
      name: ['Agent', 'Workflow', 'Experiment'],
      tagline: 'Explorando padrões de coordenação multiagente, estratégias de roteamento e máquinas de estado para sistemas agênticos de produção.',
    },
  },
  human: {
    title: 'Sobre Mim',
    statement: ['SOFTWARE É', 'TÉCNICO.', 'PROBLEMAS', 'SÃO HUMANOS.'],
    bioParagraphs: [
      'Sou o Joaquín, engenheiro de software da Argentina focado na interseção entre IA e engenharia de software tradicional.',
      'Tenho interesse particular em transformar prototipos impressionantes de IA em sistemas úteis, sustentáveis e prontos para produção.',
    ],
    based: 'LOCALIZAÇÃO',
    focus: 'FOCO',
    focusValue: ['Sistemas de IA', 'Engenharia Backend'],
    exploringLabel: 'EXPLORANDO ATUALMENTE',
    exploringItems: [
      'Fluxos agênticos',
      'Roteamento multiagente',
      'Arquiteturas RAG',
      'Avaliação de LLM',
      'Sistemas human-in-the-loop',
    ],
  },
  contact: {
    title: 'Contato',
    heading: ['TEM UM', 'PROBLEMA', 'INTERESSANTE', 'PARA RESOLVER?'],
    footerRole: 'ENGENHEIRO DE IA / FULL-STACK',
  },
};
