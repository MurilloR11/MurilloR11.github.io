import { useLanguage } from '@context/LanguageContext';

// Explicit interface (not Record<string,string>) so TypeScript forces both
// languages below to implement the exact same keys — a missing translation
// is a compile error, not a silent fallback.
interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    skipToContent: string;
    mainNav: string;
    home: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    preHeading: string;
    tagline: string;
    ctaProjects: string;
    ctaResume: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    bio: string[];
    photoAlt: string;
    github: string;
    linkedin: string;
  };
  skills: {
    sectionLabel: string;
    heading: string;
    subtitleLine1: string;
    subtitleLine2: string;
  };
  projects: {
    sectionLabel: string;
    heading: string;
    subtitleLine1: string;
    subtitleLine2: string;
    viewProject: string;
    demo: string;
  };
  projectDetail: {
    sectionLabelPrefix: string;
    notFoundLabel: string;
    notFoundHeading: string;
    viewOnGithub: string;
    demo: string;
    aboutProject: string;
    techStack: string;
    screenshotAlt: string;
  };
  education: {
    sectionLabel: string;
    heading: string;
    subtitleLine1: string;
    subtitleLine2: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    subtitleLine1: string;
    subtitleLine2: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sending: string;
      submit: string;
      success: string;
      error: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
    };
  };
  themeToggle: {
    activateLight: string;
    activateDark: string;
  };
  languageToggle: {
    activateSpanish: string;
    activateEnglish: string;
  };
  errorBoundary: {
    sectionLoadError: string;
  };
  meta: {
    title: string;
  };
}

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Skills',
      education: 'Educación',
      contact: 'Contacto',
      skipToContent: 'Saltar al contenido',
      mainNav: 'Navegación principal',
      home: 'Santiago, inicio',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      preHeading: 'Hola, soy',
      tagline: 'Desarrollador frontend junior apasionado por construir interfaces rápidas, accesibles y con buen diseño.',
      ctaProjects: 'Ver proyectos ↗',
      ctaResume: 'Descargar CV ↓',
    },
    about: {
      sectionLabel: '── 02 / sobre mí',
      heading: 'Sobre mí',
      bio: [
        'Soy un desarrollador frontend junior apasionado por la creación de interfaces web modernas, rápidas y accesibles. Sigo buenas prácticas de código y patrones de diseño que me permiten construir proyectos escalables y mantenibles desde el primer día.',
        'Me caracterizo por mi atención al detalle, mi enfoque en la experiencia del usuario y mis ganas constantes de aprender. Me gusta entender el porqué detrás de cada decisión técnica, y me esfuerzo por escribir código limpio, bien estructurado y fácil de mantener en equipo.',
        'Actualmente estoy en búsqueda de mi primera oportunidad profesional donde pueda seguir creciendo, colaborar con un equipo talentoso y aportar valor real. Si tienes un proyecto interesante o simplemente quieres hablar de código, con gusto te escucho.',
      ],
      photoAlt: 'Foto de perfil de Santiago',
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
    },
    skills: {
      sectionLabel: '── 03 / tecnologías',
      heading: 'Skills',
      subtitleLine1: 'Tecnologías y herramientas',
      subtitleLine2: 'con las que trabajo.',
    },
    projects: {
      sectionLabel: '── 04 / trabajos',
      heading: 'Proyectos',
      subtitleLine1: 'Una selección de mis',
      subtitleLine2: 'trabajos más representativos.',
      viewProject: 'Ver proyecto',
      demo: 'Demo ↗',
    },
    projectDetail: {
      sectionLabelPrefix: '── proyecto /',
      notFoundLabel: '── proyecto / no encontrado',
      notFoundHeading: 'Proyecto no encontrado.',
      viewOnGithub: 'Ver en GitHub',
      demo: 'Demo ↗',
      aboutProject: 'Sobre el proyecto',
      techStack: 'Stack técnico',
      screenshotAlt: 'Captura de pantalla del proyecto',
    },
    education: {
      sectionLabel: '── 06 / educación',
      heading: 'Educación',
      subtitleLine1: 'Formación académica',
      subtitleLine2: 'y cursos relevantes.',
    },
    contact: {
      sectionLabel: '── 05 / contacto',
      heading: 'Contacto',
      subtitleLine1: '¿Tienes un proyecto',
      subtitleLine2: 'o quieres charlar?',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        sending: 'Enviando…',
        submit: 'Enviar mensaje ↗',
        success: '¡Mensaje enviado! Te responderé pronto.',
        error: 'Hubo un error. Inténtalo de nuevo o escríbeme directamente.',
        errors: {
          nameRequired: 'El nombre es obligatorio.',
          emailRequired: 'El email es obligatorio.',
          emailInvalid: 'Ingresa un email válido.',
          messageRequired: 'El mensaje es obligatorio.',
        },
      },
    },
    themeToggle: {
      activateLight: 'Activar modo claro',
      activateDark: 'Activar modo oscuro',
    },
    languageToggle: {
      activateSpanish: 'Cambiar a español',
      activateEnglish: 'Cambiar a inglés',
    },
    errorBoundary: {
      sectionLoadError: 'Error al cargar esta sección.',
    },
    meta: {
      title: 'Santiago — Desarrollador Frontend',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      skipToContent: 'Skip to content',
      mainNav: 'Main navigation',
      home: 'Santiago, home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      preHeading: "Hi, I'm",
      tagline: 'Junior frontend developer passionate about building fast, accessible interfaces with great design.',
      ctaProjects: 'View projects ↗',
      ctaResume: 'Download CV ↓',
    },
    about: {
      sectionLabel: '── 02 / about me',
      heading: 'About me',
      bio: [
        "I'm a junior frontend developer passionate about creating modern, fast, and accessible web interfaces. I follow good coding practices and design patterns that let me build scalable, maintainable projects from day one.",
        'I pay close attention to detail, focus on user experience, and have a constant drive to learn. I like understanding the why behind every technical decision, and I strive to write clean, well-structured code that is easy to maintain as a team.',
        "I'm currently looking for my first professional opportunity where I can keep growing, collaborate with a talented team, and add real value. If you have an interesting project or just want to talk about code, I'd love to hear from you.",
      ],
      photoAlt: "Santiago's profile photo",
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
    },
    skills: {
      sectionLabel: '── 03 / technologies',
      heading: 'Skills',
      subtitleLine1: 'Technologies and tools',
      subtitleLine2: 'I work with.',
    },
    projects: {
      sectionLabel: '── 04 / work',
      heading: 'Projects',
      subtitleLine1: 'A selection of my',
      subtitleLine2: 'most representative work.',
      viewProject: 'View project',
      demo: 'Demo ↗',
    },
    projectDetail: {
      sectionLabelPrefix: '── project /',
      notFoundLabel: '── project / not found',
      notFoundHeading: 'Project not found.',
      viewOnGithub: 'View on GitHub',
      demo: 'Demo ↗',
      aboutProject: 'About the project',
      techStack: 'Tech stack',
      screenshotAlt: 'Screenshot of the project',
    },
    education: {
      sectionLabel: '── 06 / education',
      heading: 'Education',
      subtitleLine1: 'Academic background',
      subtitleLine2: 'and relevant courses.',
    },
    contact: {
      sectionLabel: '── 05 / contact',
      heading: 'Contact',
      subtitleLine1: 'Have a project',
      subtitleLine2: 'or want to chat?',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        sending: 'Sending…',
        submit: 'Send message ↗',
        success: "Message sent! I'll get back to you soon.",
        error: 'Something went wrong. Try again or email me directly.',
        errors: {
          nameRequired: 'Name is required.',
          emailRequired: 'Email is required.',
          emailInvalid: 'Enter a valid email.',
          messageRequired: 'Message is required.',
        },
      },
    },
    themeToggle: {
      activateLight: 'Activate light mode',
      activateDark: 'Activate dark mode',
    },
    languageToggle: {
      activateSpanish: 'Switch to Spanish',
      activateEnglish: 'Switch to English',
    },
    errorBoundary: {
      sectionLoadError: 'Error loading this section.',
    },
    meta: {
      title: 'Santiago — Frontend Developer',
    },
  },
};

// Direct property access (t.nav.about) instead of a string-keyed t('nav.about')
// lookup, so every usage keeps autocomplete and compile-time key checking.
export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
