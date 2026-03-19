import { type Project } from './projects.types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Mi Proyecto 1',
    description: 'Descripción breve del proyecto y tu contribución específica.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: 'frontend',
    githubUrl: 'https://github.com/tu-usuario/proyecto-1',
    liveUrl: 'https://proyecto-1.vercel.app',
  },
  {
    id: 'project-2',
    title: 'Mi Proyecto 2',
    description: 'Descripción breve del proyecto y tu contribución específica.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/tu-usuario/proyecto-2',
  },
];
