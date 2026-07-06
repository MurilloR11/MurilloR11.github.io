import { type EducationEntry } from './education.types';

export const EDUCATION: EducationEntry[] = [
  {
    id: 'education-1',
    title: {
      es: 'Tecnólogo en Gestión Informática',
      en: 'Technologist in Information Management',
    },
    institution: 'Universidad del Espinal (UniEspinal)',
    period: { es: 'Ene 2025 — Jul 2026', en: 'Jan 2025 — Jul 2026' },
    description: {
      es:
        'Aplico mis conocimientos en la solución de problemas informáticos, con capacidad para analizar, diseñar, construir, evaluar e ' +
        'implementar soluciones tecnológicas en las organizaciones, con un manejo responsable de la tecnología dentro de un marco ' +
        'empresarial y humanista, liderazgo, creatividad y trabajo en equipo.',
      en:
        'I apply my knowledge to solving IT problems, with the ability to analyze, design, build, evaluate, and implement technological ' +
        'solutions in organizations, combined with responsible use of technology within a business and humanistic framework, leadership, ' +
        'creativity, and teamwork.',
    },
  },
  {
    id: 'education-2',
    title: {
      es: 'Técnico profesional en programación web',
      en: 'Professional Technician in Web Programming',
    },
    institution: 'Universidad del Espinal (UniEspinal)',
    period: { es: 'Feb 2023 - Dic 2024', en: 'Feb 2023 - Dec 2024' },
    description: {
      es:
        'Me formé con capacidad para instalar, programar y mantener hardware, software y aplicaciones web bajo la normatividad vigente, ' +
        'contribuyendo de manera eficiente con los procesos productivos de la empresa y con el desarrollo social, económico y ' +
        'tecnológico de la región y del país.',
      en:
        "I trained with the ability to install, program, and maintain hardware, software, and web applications under current " +
        "regulations, efficiently contributing to the company's production processes and to the social, economic, and technological " +
        'development of the region and the country.',
    },
  },
];
