import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';
import { type ThemeMode } from '@app-types/global.types';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Named export + plain function per SKILL; PropsWithChildren for wrapper component
export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    return stored ?? 'dark';
  });

  // useEffect with dependency array per SKILL
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ mode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Custom hook — extract reusable logic per SKILL
// eslint-disable-next-line react-refresh/only-export-components -- context files intentionally co-export Provider + hook
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
