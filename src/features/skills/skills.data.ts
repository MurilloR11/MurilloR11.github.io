import type { SVGProps } from 'react';
import type { Language } from '@app-types/global.types';
import {
  HTML5,
  CSS,
  JavaScript,
  TypeScript,
  ReactDark,
  ReactLight,
  Vite,
  TailwindCSS,
  ReactRouter,
  TanStack,
  Zod,
  RadixUIDark,
  RadixUILight,
  FramerDark,
  FramerLight,
  Supabase,
  Chartjs,
  Vitest,
  Playwright,
  Git,
  Figma,
  Swagger,
  Sentry,
} from '@ridemountainpig/svgl-react';

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

export interface SkillItem {
  name: string;
  /** Default icon — used as-is, or as the dark-theme variant when `iconLight` is set. */
  icon: IconComponent;
  /** Override rendered instead of `icon` while the site is in light theme.
   *  Only needed for svgl logos that ship monochrome dark/light variants
   *  instead of a single fixed brand color. */
  iconLight?: IconComponent;
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
      { name: 'React', icon: ReactDark, iconLight: ReactLight },
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
      { name: 'Radix UI', icon: RadixUIDark, iconLight: RadixUILight },
      { name: 'Framer Motion', icon: FramerDark, iconLight: FramerLight },
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
    ],
  },
];
