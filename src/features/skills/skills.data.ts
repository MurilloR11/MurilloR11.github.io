import type { SVGProps } from 'react';
import type { Language } from '@app-types/global.types';
import {
  HTML5,
  CSS,
  JavaScript,
  TypeScript,
  ReactDark,
  Vite,
  TailwindCSS,
  ReactRouter,
  TanStack,
  Zod,
  RadixUIDark,
  FramerDark,
  Supabase,
  Chartjs,
  Vitest,
  Playwright,
  Git,
  Figma,
  Swagger,
  Sentry,
  Postman,
} from '@ridemountainpig/svgl-react';

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

export interface SkillItem {
  name: string;
  icon: IconComponent;
}

export interface SkillCategory {
  id: string;
  label: Record<Language, string>;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'HTML5', icon: HTML5 },
      { name: 'CSS3', icon: CSS },
      { name: 'JavaScript', icon: JavaScript },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'React', icon: ReactDark },
      { name: 'Vite', icon: Vite },
      { name: 'Tailwind CSS', icon: TailwindCSS },
    ],
  },
  {
    id: 'routing-state',
    label: { es: 'Routing y estado', en: 'Routing & state' },
    items: [
      { name: 'React Router', icon: ReactRouter },
      { name: 'TanStack Query', icon: TanStack },
      { name: 'Zod', icon: Zod },
    ],
  },
  {
    id: 'ui-components',
    label: { es: 'UI y componentes', en: 'UI & components' },
    items: [
      { name: 'Radix UI', icon: RadixUIDark },
      { name: 'Framer Motion', icon: FramerDark },
    ],
  },
  {
    id: 'backend-data',
    label: { es: 'Backend y datos', en: 'Backend & data' },
    items: [
      { name: 'Supabase', icon: Supabase },
      { name: 'Chart.js', icon: Chartjs },
    ],
  },
  {
    id: 'testing',
    label: { es: 'Testing', en: 'Testing' },
    items: [
      { name: 'Vitest', icon: Vitest },
      { name: 'Playwright', icon: Playwright },
    ],
  },
  {
    id: 'tools',
    label: { es: 'Herramientas', en: 'Tools' },
    items: [
      { name: 'Git', icon: Git },
      { name: 'Figma', icon: Figma },
      { name: 'Swagger', icon: Swagger },
      { name: 'Sentry', icon: Sentry },
      { name: 'Postman', icon: Postman },
    ],
  },
];
