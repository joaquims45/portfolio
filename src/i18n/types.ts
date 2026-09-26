export type Language = 'en' | 'es' | 'pt';

export type SkillGroup = 'ai' | 'languages' | 'databases' | 'tools' | 'methodologies';

interface TraceEntryText {
  role: string;
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
    close: string;
  };
  hero: {
    role: string;
    location: string;
    headline: [string, string, string, string, string, string];
    archLabel: string;
    cta: string;
  };
  trace: {
    title: string;
    entries: [TraceEntryText, TraceEntryText, TraceEntryText];
    present: string;
    nowLine1: string;
    nowLine2: string;
    active: string;
  };
  education: {
    title: string;
    degreeTitle: string;
    secondaryTitle: string;
    present: string;
    coursesLabel: string;
    courses: [string, string, string, string, string, string];
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
    based: string;
    focus: string;
    focusValue: [string, string];
    exploringLabel: string;
    exploringItems: [string, string, string, string, string];
  };
  contact: {
    title: string;
    heading: [string, string, string, string];
    footerRole: string;
  };
}
