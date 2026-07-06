import portafolioImage from '@assets/portafolio-image.png';
import { type Project } from './projects.types';

export const PROJECTS: Project[] = [
  {
    id: 'portafolio-frontend',
    title: 'Portafolio Personal',
    description: 'Sitio web de portafolio personal con diseño dark/light, lazy loading por sección, animaciones CSS y sistema de tokens de diseño propio.',
    longDescription:
      'Portafolio construido desde cero como una single-page application, pensado para cargar rápido y sentirse cuidado en cada detalle. ' +
      'Cada sección (Skills, Proyectos, Contacto) se divide con React.lazy y Suspense para mantener el bundle inicial ligero, mientras que ' +
      'un sistema de tokens de diseño propio en CSS custom properties resuelve el soporte de tema claro/oscuro sin duplicar estilos. ' +
      'La tipografía combina una serif itálica para los títulos con una monoespaciada para el resto de la interfaz, buscando una identidad ' +
      'visual propia en vez de una plantilla genérica de SaaS.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    stack: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router',
      'ESLint', 'Prettier', 'Vitest', 'Testing Library',
    ],
    notes: [
      'Tema claro/oscuro sin duplicar estilos: los colores viven como CSS custom properties en un único lugar, y una clase .dark en el ' +
        'elemento raíz alterna el set de variables — ningún componente necesita estilos condicionales por tema.',
      'Carga por secciones: todo lo que está debajo del Hero se divide con React.lazy y Suspense, así el bundle inicial solo incluye lo ' +
        'que se ve en el primer scroll y el resto se descarga bajo demanda.',
      'Identidad tipográfica propia: una serif itálica para los títulos combinada con una monoespaciada para el resto de la interfaz, ' +
        'en vez de una tipografía sans genérica, para evitar el aspecto de plantilla SaaS.',
    ],
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
