export interface Skill {
  name: string;
  level: number; // 0–100
  desc: string;
  group: 'stack' | 'tools';
}

export const SKILLS: Skill[] = [
  // Stack principal
  { name: 'HTML / CSS',   level: 92, desc: 'Semántico, accesible, moderno',     group: 'stack' },
  { name: 'JavaScript',   level: 84, desc: 'ES2024+, DOM, fetch, async/await',  group: 'stack' },
  { name: 'React',        level: 82, desc: 'Hooks, Context, Custom Hooks',      group: 'stack' },
  { name: 'TypeScript',   level: 76, desc: 'Tipos, interfaces, generics',       group: 'stack' },
  // Flujo de trabajo
  { name: 'Tailwind CSS', level: 88, desc: 'Diseño responsive, utilities',      group: 'tools' },
  { name: 'Git',          level: 74, desc: 'Ramas, commits, colaboración',      group: 'tools' },
  { name: 'Vite',         level: 70, desc: 'Build, dev server, plugins',        group: 'tools' },
  { name: 'Figma',        level: 62, desc: 'Diseño, prototipos, assets',        group: 'tools' },
];
