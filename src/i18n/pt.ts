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
        tasks: [
          'Interfaces administrativas para usuários, conversas e analytics',
          'Componentes reutilizáveis com React e MUI para sessões e respostas de agentes',
          'Colaboração com produto e design para interfaces responsivas',
          'Sistema multiagente com LangGraph e LangChain, ferramentas customizadas em Python',
          'API REST com Django e DRF para agentes, sessões e dados de clientes',
          'Arquitetura modular para configuração de agentes e LLMs por cliente',
          'Boas práticas de IA: memória, orquestração de ferramentas, RAG, prompt engineering',
        ],
      },
      {
        role: 'ENGENHEIRO DE IA',
        tasks: [
          'Interfaces React dinâmicas e responsivas com mensageria em tempo real',
          'Arquitetura multi-tenant para gestão segura de assistentes por cliente',
          'Sistema RAG com conhecimento contextual do negócio',
          'Templates de prompts modulares e orquestração escalável (LangGraph, LangChain)',
          'Integração de mensageria omnichannel (WhatsApp, Telegram)',
          'Endpoints de API para sessões, analytics e configuração de assistentes',
          'Otimização de armazenamento e indexação de conversas',
        ],
      },
      {
        role: 'DESENVOLVEDOR FULL-STACK',
        tasks: [
          'Funcionalidades backend e de automação para faturamento (NestJS, TypeORM, PostgreSQL)',
          'Worker assíncrono para pedidos faturáveis e integração logística-faturamento via SQS',
          'Migração da lógica de faturamento de planilhas Excel para o sistema',
          'Normalização de tabelas, migrações de banco de dados e refatorações de domínio',
          'APIs de faturamento: regras configuráveis, acréscimos, validações, integração com Tango',
          'Scripts de RPA para sincronizar regras, artigos e serviços entre sistemas',
        ],
      },
    ],
    present: 'Presente',
  },
  education: {
    title: 'Educação',
    degreeTitle: 'Analista de Sistemas',
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
    projectLabel: 'PROJETO',
    status: {
      comingSoon: 'EM BREVE',
    },
    sourceLens: {
      name: ['Source', 'Lens'],
      tagline: ['Entenda uma base de código', 'antes de mexer nela.'],
    },
    salesAgent: {
      name: ['AI Sales', 'Agent'],
      tagline: ['Produtos não deveriam', 'ser apenas pesquisáveis.', 'Eles deveriam poder', 'se explicar sozinhos.'],
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
