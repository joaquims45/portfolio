import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';

const DICTIONARIES: Record<Language, Translations> = { en, es, pt };

const STORAGE_KEY = 'portfolio-lang';

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'es' || value === 'pt';
}

function detectLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) return stored;

  const browserLang = window.navigator.language.slice(0, 2);
  if (browserLang === 'es') return 'es';
  if (browserLang === 'pt') return 'pt';
  return 'en';
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: DICTIONARIES[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
