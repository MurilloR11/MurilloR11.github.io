import type { SVGProps } from 'react';
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
  label: string;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Frontend',
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
    label: 'Routing y estado',
    items: [
      { name: 'React Router', icon: ReactRouter },
      { name: 'TanStack Query', icon: TanStack },
      { name: 'Zod', icon: Zod },
    ],
  },
  {
    label: 'UI y componentes',
    items: [
      { name: 'Radix UI', icon: RadixUIDark, iconLight: RadixUILight },
      { name: 'Framer Motion', icon: FramerDark, iconLight: FramerLight },
    ],
  },
  {
    label: 'Backend y datos',
    items: [
      { name: 'Supabase', icon: Supabase },
      { name: 'Chart.js', icon: Chartjs },
    ],
  },
  {
    label: 'Testing',
    items: [
      { name: 'Vitest', icon: Vitest },
      { name: 'Playwright', icon: Playwright },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Git', icon: Git },
      { name: 'Figma', icon: Figma },
      { name: 'Swagger', icon: Swagger },
      { name: 'Sentry', icon: Sentry },
    ],
  },
];
