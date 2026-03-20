import portafolioImage from '@assets/portafolio-image.png';
import { type Project } from './projects.types';

export const PROJECTS: Project[] = [
  {
    id: 'portafolio-frontend',
    title: 'Portafolio Personal',
    description: 'Sitio web de portafolio personal con diseño dark/light, lazy loading por sección, animaciones CSS y sistema de tokens de diseño propio.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/MurilloR11/portafolio-version-1',
    thumbnail: portafolioImage,
  },
  {
    id: 'project-1',
    title: 'Mi Proyecto 1',
    description: 'Descripción breve del proyecto y tu contribución específica.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: 'frontend',
    githubUrl: 'https://github.com/MurilloR11/portafolio-version-1',
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
