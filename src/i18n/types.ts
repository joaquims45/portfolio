export type Language = 'en' | 'es' | 'pt';

export type SkillGroup = 'backend' | 'frontend' | 'ai' | 'data' | 'devops' | 'tools';

interface TraceEntryText {
  role: string;
  summary: string;
  tasks: string[];
}

export interface Translations {
  nav: {
    trace: string;
    education: string;
    systems: string;
    work: string;
    human: string;
    contact: string;
    menu: string;
    skip: string;
    primary: string;
    close: string;
  };
  hero: {
    role: string;
    headline: [string, string, string, string, string, string];
    archLabel: string;
    ctaWork: string;
    ctaContact: string;
    badges: [string, string, string, string];
  };
  trace: {
    title: string;
    entries: [TraceEntryText, TraceEntryText, TraceEntryText];
    present: string;
  };
  education: {
    title: string;
    degreeTitle: string;
    present: string;
    coursesLabel: string;
    courses: [string, string, string, string, string, string, string];
  };
  systems: {
    title: string;
    subtitle: string;
    groups: Record<SkillGroup, string>;
  };
  work: {
    title: string;
    technologies: string;
    architecture: string;
    projectLabel: string;
    status: {
      comingSoon: string;
    };
    sourceLens: {
      name: [string, string];
      tagline: [string, string];
    };
    salesAgent: {
      name: [string, string];
      tagline: [string, string, string, string];
    };
  };
  human: {
    title: string;
    statement: [string, string, string, string];
    bioParagraphs: [string, string];
    focus: string;
    focusValue: [string, string];
    exploringLabel: string;
    exploringItems: [string, string, string, string, string];
    offKeyboardLabel: string;
    offKeyboardItems: [string, string, string, string];
  };
  contact: {
    title: string;
    heading: [string, string, string, string];
    footerRole: string;
  };
}
