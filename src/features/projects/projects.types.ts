// Shared within the projects feature (used by ProjectCard, ProjectFilter, useProjects)

export const PROJECT_CATEGORIES = ['all', 'frontend', 'backend', 'fullstack'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  all:       'Todos',
  frontend:  'Frontend',
  backend:   'Backend',
  fullstack: 'Fullstack',
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, 'all'>;
  githubUrl: string;
  liveUrl?: string;
  thumbnail?: string;
}
