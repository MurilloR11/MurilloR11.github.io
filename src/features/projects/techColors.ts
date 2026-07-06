// Brand-ish colors for the "Stack técnico" pills on the project detail page.
// Anything not listed here falls back to a neutral dark pill.
const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  'react':            { bg: '#61DAFB', text: '#0B1220' },
  'typescript':       { bg: '#3178C6', text: '#FFFFFF' },
  'javascript':       { bg: '#F7DF1E', text: '#1A1A1A' },
  'vite':             { bg: '#646CFF', text: '#FFFFFF' },
  'tailwind css':     { bg: '#38BDF8', text: '#0B1220' },
  'tailwindcss':      { bg: '#38BDF8', text: '#0B1220' },
  'react router':     { bg: '#CA4245', text: '#FFFFFF' },
  'node.js':          { bg: '#339933', text: '#FFFFFF' },
  'nodejs':           { bg: '#339933', text: '#FFFFFF' },
  'postgresql':       { bg: '#336791', text: '#FFFFFF' },
  'eslint':           { bg: '#4B32C3', text: '#FFFFFF' },
  'prettier':         { bg: '#F7B93E', text: '#1A1A1A' },
  'vitest':           { bg: '#6E9F18', text: '#FFFFFF' },
  'testing library':  { bg: '#E33332', text: '#FFFFFF' },
};

const FALLBACK_COLOR = { bg: 'var(--color-elevated)', text: 'var(--color-cream)', isFallback: true };

export function getTechColor(name: string): { bg: string; text: string; isFallback: boolean } {
  const match = TECH_COLORS[name.toLowerCase()];
  return match ? { ...match, isFallback: false } : FALLBACK_COLOR;
}
