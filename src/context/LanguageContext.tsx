import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';
import { type Language } from '@app-types/global.types';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Named export + plain function per SKILL; PropsWithChildren for wrapper component
export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null;
    return stored ?? 'es';
  });

  // useEffect with dependency array per SKILL
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

// Custom hook — extract reusable logic per SKILL
// eslint-disable-next-line react-refresh/only-export-components -- context files intentionally co-export Provider + hook
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
