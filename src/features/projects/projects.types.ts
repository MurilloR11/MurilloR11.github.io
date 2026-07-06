// Shared within the projects feature (used by ProjectCard, ProjectFilter, useProjects)

export const PROJECT_CATEGORIES = ['all', 'frontend', 'backend', 'fullstack'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Longer case-study text shown on the project detail page. Falls back to `description`. */
  longDescription?: string;
  tags: string[];
  /** Full technical stack shown on the project detail page. Falls back to `tags`. */
  stack?: string[];
  /** Numbered "what was built" notes shown on the project detail page. */
  notes?: string[];
  category: Exclude<ProjectCategory, 'all'>;
  githubUrl: string;
  liveUrl?: string;
  thumbnail?: string;
}
