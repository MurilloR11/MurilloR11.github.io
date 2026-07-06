import portafolioImage from '@assets/portafolio-image.png';
import { type Project } from './projects.types';

export const PROJECTS: Project[] = [
  {
    id: 'portafolio-frontend',
    title: { es: 'Portafolio Personal', en: 'Personal Portfolio' },
    description: {
      es: 'Sitio web de portafolio personal con diseño dark/light, lazy loading por sección, animaciones CSS y sistema de tokens de diseño propio.',
      en: 'Personal portfolio website with dark/light design, per-section lazy loading, CSS animations, and a custom design token system.',
    },
    longDescription: {
      es:
        'Portafolio construido desde cero como una single-page application, pensado para cargar rápido y sentirse cuidado en cada detalle. ' +
        'Cada sección (Skills, Proyectos, Contacto) se divide con React.lazy y Suspense para mantener el bundle inicial ligero, mientras que ' +
        'un sistema de tokens de diseño propio en CSS custom properties resuelve el soporte de tema claro/oscuro sin duplicar estilos. ' +
        'La tipografía combina una serif itálica para los títulos con una monoespaciada para el resto de la interfaz, buscando una identidad ' +
        'visual propia en vez de una plantilla genérica de SaaS.',
      en:
        'A portfolio built from scratch as a single-page application, designed to load fast and feel considered in every detail. Each ' +
        'section (Skills, Projects, Contact) is split with React.lazy and Suspense to keep the initial bundle light, while a custom design ' +
        'token system in CSS custom properties handles light/dark theme support without duplicating styles. The typography combines an ' +
        'italic serif for headings with a monospace typeface for the rest of the interface, aiming for its own visual identity instead of a ' +
        'generic SaaS template.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    stack: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router',
      'ESLint', 'Prettier', 'Vitest', 'Testing Library',
    ],
    notes: {
      es: [
        'Tema claro/oscuro sin duplicar estilos: los colores viven como CSS custom properties en un único lugar, y una clase .dark en el ' +
          'elemento raíz alterna el set de variables — ningún componente necesita estilos condicionales por tema.',
        'Carga por secciones: todo lo que está debajo del Hero se divide con React.lazy y Suspense, así el bundle inicial solo incluye lo ' +
          'que se ve en el primer scroll y el resto se descarga bajo demanda.',
        'Identidad tipográfica propia: una serif itálica para los títulos combinada con una monoespaciada para el resto de la interfaz, ' +
          'en vez de una tipografía sans genérica, para evitar el aspecto de plantilla SaaS.',
      ],
      en: [
        'Light/dark theme without duplicating styles: colors live as CSS custom properties in a single place, and a .dark class on the ' +
          'root element swaps the variable set — no component needs conditional theme styles.',
        "Section-based code splitting: everything below the Hero is split with React.lazy and Suspense, so the initial bundle only " +
          "includes what's visible on first scroll and the rest loads on demand.",
        'A typographic identity of its own: an italic serif for headings combined with a monospace typeface for the rest of the UI, ' +
          'instead of a generic sans font, to avoid the generic SaaS-template look.',
      ],
    },
    category: 'frontend',
    githubUrl: 'https://github.com/MurilloR11/portafolio-version-1',
    thumbnail: portafolioImage,
  },
  {
    id: 'project-1',
    title: { es: 'Mi Proyecto 1', en: 'My Project 1' },
    description: {
      es: 'Descripción breve del proyecto y tu contribución específica.',
      en: 'Brief description of the project and your specific contribution.',
    },
    tags: ['React', 'TypeScript', 'Tailwind'],
    category: 'frontend',
    githubUrl: 'https://github.com/MurilloR11/portafolio-version-1',
    liveUrl: 'https://proyecto-1.vercel.app',
  },
  {
    id: 'project-2',
    title: { es: 'Mi Proyecto 2', en: 'My Project 2' },
    description: {
      es: 'Descripción breve del proyecto y tu contribución específica.',
      en: 'Brief description of the project and your specific contribution.',
    },
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/tu-usuario/proyecto-2',
  },
];
